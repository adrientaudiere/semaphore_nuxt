/*
  Motifs traditionnels japonais (wagara), traces en SVG a la volee.

  Ils sont generes par fonction, et non pre-calcules, parce que l'epaisseur du
  trait est reglable : elle fait partie du trace lui-meme et ne peut pas etre
  pilotee depuis le CSS une fois le SVG encode en data URI.

  Le SVG sert de masque : la couleur vient de `background-color` et l'intensite
  d'`opacity`. Aucun fichier image n'est necessaire.
*/

function sommetsHexagone(cx: number, cy: number, c: number) {
  const pts: [number, number][] = []
  for (let k = 0; k < 6; k++) {
    const a = (Math.PI / 180) * 60 * k
    pts.push([cx + c * Math.cos(a), cy + c * Math.sin(a)])
  }
  return pts
}

function enveloppe(largeur: number, hauteur: number, corps: string, epaisseur: number) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${largeur.toFixed(2)}" `
    + `height="${hauteur.toFixed(2)}" viewBox="0 0 ${largeur.toFixed(2)} ${hauteur.toFixed(2)}">`
    + `<g fill="none" stroke="black" stroke-width="${epaisseur}" stroke-linecap="round">`
    + `${corps}</g></svg>`
}

/*
  Seigaiha : rangees d'eventails d'arcs concentriques.

  Les rangees sont empilees sans se recouvrir. C'est le point cle : dans une
  version ou elles se chevauchent, les arcs de la rangee arriere traversent
  ceux de la rangee avant, ce qui produit des croisements et de fausses petites
  vagues. Dans un seigaiha peint, la rangee avant masque la rangee arriere ;
  ici on obtient le meme resultat en ne dessinant que la partie visible.

  Les arcs sont elliptiques (rx > ry), ce qui etire le motif horizontalement.
*/
function seigaiha(epaisseur: number) {
  const ry = 22
  const rx = ry * 1.8
  const echelles = [1, 0.72, 0.44, 0.16]
  const largeur = 2 * rx
  const hauteur = 2 * ry
  const arcs: string[] = []

  const rangees = [
    { y: ry, centres: [0, 2 * rx] },
    { y: 2 * ry, centres: [-rx, rx, 3 * rx] }
  ]

  for (const { y, centres } of rangees) {
    for (const cx of centres) {
      for (const k of echelles) {
        const ax = rx * k
        const ay = ry * k
        arcs.push(
          `<path d="M${(cx - ax).toFixed(1)},${y.toFixed(1)}`
          + `A${ax.toFixed(1)},${ay.toFixed(1)} 0 0 1 ${(cx + ax).toFixed(1)},${y.toFixed(1)}"/>`
        )
      }
    }
  }
  return enveloppe(largeur, hauteur, arcs.join(''), epaisseur)
}

/* Shippo : cercles secants formant des petales. */
function shippo(epaisseur: number) {
  const R = 20
  const cote = 2 * R
  const centres: [number, number][] = [[0, 0], [cote, 0], [0, cote], [cote, cote], [R, R]]
  const corps = centres
    .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="${R}"/>`)
    .join('')
  return enveloppe(cote, cote, corps, epaisseur)
}

/* Kikko : pavage hexagonal regulier. */
function kikko(epaisseur: number) {
  const c = 16
  const h = c * Math.sqrt(3)
  const formes: string[] = []
  for (let i = -1; i < 4; i++) {
    for (let j = -1; j < 3; j++) {
      const cx = i * 1.5 * c
      const cy = j * h + (i * h) / 2
      const d = 'M' + sommetsHexagone(cx, cy, c)
        .map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join('L') + 'Z'
      formes.push(d)
    }
  }
  return enveloppe(3 * c, h, `<path d="${formes.join('')}"/>`, epaisseur)
}

/*
  Asanoha : reseau hexagonal ou un hexagone sur trois porte ses six rayons.

  C'est ce sous-reseau d'indice 3 qui fait la feuille de chanvre : en tracant
  les rayons partout, on retombe sur un simple reseau triangulaire.
*/
function asanoha(epaisseur: number) {
  const c = 20
  const h = c * Math.sqrt(3)
  const largeur = 9 * c
  const hauteur = 3 * h
  const vus = new Set<string>()

  const ligne = (x1: number, y1: number, x2: number, y2: number) => {
    const a = `${x1.toFixed(1)},${y1.toFixed(1)}`
    const b = `${x2.toFixed(1)},${y2.toFixed(1)}`
    // Chaque arete est partagee par deux hexagones : sans dedoublonnage la
    // tuile triple de volume pour un trace identique.
    vus.add(a <= b ? `${a}|${b}` : `${b}|${a}`)
  }

  for (let i = -1; i < 8; i++) {
    for (let j = -5; j < 6; j++) {
      const cx = i * 1.5 * c
      const cy = j * h + (i * h) / 2
      if (cx < -1.5 * c || cx > largeur + 1.5 * c) continue
      if (cy < -1.5 * c || cy > hauteur + 1.5 * c) continue
      const s = sommetsHexagone(cx, cy, c)
      for (let k = 0; k < 6; k++) {
        const a = s[k]!
        const b = s[(k + 1) % 6]!
        ligne(a[0], a[1], b[0], b[1])
      }
      if (((i - j) % 3 + 3) % 3 === 0) {
        for (const [x, y] of s) {
          ligne(cx, cy, x, y)
        }
      }
    }
  }

  const d = [...vus].sort()
    .map(s => 'M' + s.replace('|', 'L')).join('')
  return enveloppe(largeur, hauteur, `<path d="${d}"/>`, epaisseur)
}

export interface DefinitionMotif {
  cle: string
  nom: string
  tracer: (epaisseur: number) => string
}

export const MOTIFS: DefinitionMotif[] = [
  { cle: 'seigaiha', nom: 'Seigaiha — vagues', tracer: seigaiha },
  { cle: 'asanoha', nom: 'Asanoha — feuille de chanvre', tracer: asanoha },
  { cle: 'shippo', nom: 'Shippo — sept trésors', tracer: shippo },
  { cle: 'kikko', nom: 'Kikko — écaille de tortue', tracer: kikko }
]

export const COULEURS = [
  { cle: 'bleu', nom: 'Bleu', valeur: '#A2B3BA' },
  { cle: 'gris_clair', nom: 'Gris clair', valeur: '#aaad9b' },
  { cle: 'violet', nom: 'Violet', valeur: '#663F46' },
  { cle: 'vert_sombre', nom: 'Vert sombre', valeur: '#5a5300' },
  { cle: 'gris', nom: 'Gris', valeur: '#454839' },
  { cle: 'orange', nom: 'Orange', valeur: '#AE4401' }
]

export const FONDS = [
  { cle: 'aucun', nom: 'Aucun (transparent)', valeur: 'transparent' },
  { cle: 'blanc', nom: 'Blanc', valeur: '#ffffff' },
  { cle: 'bleu', nom: 'Bleu très pâle', valeur: '#F2F5F6' },
  { cle: 'sable', nom: 'Sable', valeur: '#F6F5F0' },
  { cle: 'gris', nom: 'Gris très pâle', valeur: '#F4F4F2' }
]

/** Renvoie le motif encode en data URI, pret pour `mask-image`. */
export function imageMotif(cle: string, epaisseur: number): string | null {
  const def = MOTIFS.find(m => m.cle === cle)
  if (!def) {
    return null
  }
  return `url("data:image/svg+xml,${encodeURIComponent(def.tracer(epaisseur))}")`
}
