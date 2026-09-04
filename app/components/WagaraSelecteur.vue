<script setup>
/*
  Reglages du motif de fond, offerts au visiteur.

  Le panneau est ferme par defaut et le declencheur reste discret : le motif
  est un agrement, le reglage ne doit pas concurrencer le contenu.
*/
const { reglages, enregistrer, reinitialiser, MOTIFS, COULEURS, FONDS } = useWagara()

const ouvert = ref(false)

watch(reglages, enregistrer, { deep: true })

const recapitulatif = computed(() => {
  const r = reglages.value
  return `motif: '${r.motif}', couleur: '${r.couleur}', intensite: ${Number(r.intensite).toFixed(2)}, `
    + `taille: ${r.taille}, fond: '${r.fond}', epaisseur: ${Number(r.epaisseur).toFixed(1)}`
})
</script>

<template>
  <div class="selecteur">
    <div v-if="ouvert" id="panneau-wagara" class="panneau">
      <p class="titre">
        Motif de fond
      </p>

      <label class="champ">
        <span>Motif</span>
        <select v-model="reglages.motif">
          <option value="aucun">Aucun</option>
          <option v-for="m of MOTIFS" :key="m.cle" :value="m.cle">{{ m.nom }}</option>
        </select>
      </label>

      <label class="champ">
        <span>Couleur du trait</span>
        <select v-model="reglages.couleur">
          <option v-for="c of COULEURS" :key="c.cle" :value="c.cle">{{ c.nom }}</option>
        </select>
      </label>

      <label class="champ">
        <span>Fond de la zone</span>
        <select v-model="reglages.fond">
          <option v-for="f of FONDS" :key="f.cle" :value="f.cle">{{ f.nom }}</option>
        </select>
      </label>

      <label class="champ">
        <span>Intensité <b>{{ Number(reglages.intensite).toFixed(2) }}</b></span>
        <input v-model.number="reglages.intensite" type="range" min="0.02" max="0.8" step="0.01">
      </label>

      <label class="champ">
        <span>Taille de la grille <b>{{ reglages.taille }} px</b></span>
        <input v-model.number="reglages.taille" type="range" min="40" max="360" step="4">
      </label>

      <label class="champ">
        <span>Épaisseur du trait <b>{{ Number(reglages.epaisseur).toFixed(1) }}</b></span>
        <input v-model.number="reglages.epaisseur" type="range" min="0.4" max="5" step="0.1">
      </label>

      <button type="button" class="reinit" @click="reinitialiser">
        Réinitialiser
      </button>

      <p class="recap">{{ recapitulatif }}</p>
    </div>

    <button
      type="button"
      class="declencheur"
      :aria-expanded="ouvert"
      aria-controls="panneau-wagara"
      @click="ouvert = !ouvert"
    >
      <Icon name="fa-solid:paint-brush" aria-hidden="true" />
      <span class="sr-only">Réglages du motif de fond</span>
    </button>
  </div>
</template>

<style scoped>
.selecteur {
  position: fixed;
  left: 1rem;
  bottom: 1rem;
  z-index: 60;
  text-align: left;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.declencheur {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 9999px;
  border: 2px solid #663F46;
  background: #fff;
  color: #663F46;
  cursor: pointer;
  box-shadow: 0 2px 8px rgb(0 0 0 / 25%);
}

.panneau {
  margin-bottom: 0.5rem;
  width: 16rem;
  max-height: 75vh;
  overflow-y: auto;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #aaad9b;
  background: #fff;
  box-shadow: 0 4px 16px rgb(0 0 0 / 25%);
}

.titre {
  font-weight: 700;
  color: #663F46;
  margin-bottom: 0.5rem;
}

.champ {
  display: block;
  margin-bottom: 0.6rem;
  color: #454839;
}

.champ span {
  display: block;
  margin-bottom: 0.15rem;
}

.champ select,
.champ input {
  width: 100%;
}

.reinit {
  width: 100%;
  padding: 0.3rem;
  border: 1px solid #aaad9b;
  border-radius: 0.25rem;
  background: #fff;
  color: #454839;
  cursor: pointer;
}

.recap {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid #e5e5e5;
  font-family: ui-monospace, monospace;
  font-size: 11px;
  color: #454839;
  word-break: break-all;
}

/* Sous 1100 px les bandes sont masquees : le reglage n'a plus d'objet. */
@media (max-width: 1100px) {
  .selecteur {
    display: none;
  }
}
</style>
