import { MOTIFS, COULEURS, FONDS, imageMotif } from '~/utils/wagara'

const CLE_STOCKAGE = 'semaphore-wagara'

export interface ReglagesWagara {
  motif: string
  couleur: string
  intensite: number
  taille: number
  fond: string
  epaisseur: number
}

export const REGLAGES_PAR_DEFAUT: ReglagesWagara = {
  motif: 'seigaiha',
  couleur: 'violet',
  intensite: 0.35,
  taille: 64,
  fond: 'aucun',
  epaisseur: 1.3
}

/*
  Reglages du fond a motif, partages entre le fond et le selecteur.
  Le choix de chaque visiteur est memorise dans son navigateur.
*/
export function useWagara() {
  const reglages = useState<ReglagesWagara>('wagara', () => ({ ...REGLAGES_PAR_DEFAUT }))

  onMounted(() => {
    try {
      const brut = localStorage.getItem(CLE_STOCKAGE)
      if (brut) {
        // On repart des valeurs par defaut : un reglage enregistre par une
        // version anterieure peut ne pas contenir toutes les cles.
        Object.assign(reglages.value, REGLAGES_PAR_DEFAUT, JSON.parse(brut))
      }
    }
    catch {
      // Navigation privee ou stockage refuse : les valeurs par defaut suffisent.
    }
  })

  function enregistrer() {
    try {
      localStorage.setItem(CLE_STOCKAGE, JSON.stringify(reglages.value))
    }
    catch {
      // Sans persistance, le reglage vaut pour la session en cours.
    }
  }

  function reinitialiser() {
    Object.assign(reglages.value, REGLAGES_PAR_DEFAUT)
    enregistrer()
  }

  // Le trace depend de l'epaisseur : il est reconstruit quand elle change.
  const image = computed(() => imageMotif(reglages.value.motif, reglages.value.epaisseur))

  const couleurActive = computed(
    () => COULEURS.find(c => c.cle === reglages.value.couleur)?.valeur ?? '#A2B3BA'
  )
  const fondActif = computed(
    () => FONDS.find(f => f.cle === reglages.value.fond)?.valeur ?? 'transparent'
  )

  return {
    reglages, enregistrer, reinitialiser,
    image, couleurActive, fondActif,
    MOTIFS, COULEURS, FONDS
  }
}
