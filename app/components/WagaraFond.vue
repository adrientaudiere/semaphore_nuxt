<script setup>
/*
  Deux bandes a motif dans les marges laissees libres par la colonne de texte.

  Chaque bande a deux couches : la bande elle-meme porte la couleur de fond de
  la zone, et une couche interne porte le motif. Il faut les separer, car le
  motif est un masque dont la teinte vient de `background-color` : sans cette
  seconde couche, fond de zone et couleur de motif se disputeraient la meme
  propriete.

  Purement decoratif : aria-hidden, sans interception de la souris, et derriere
  le contenu.
*/
const { image, couleurActive, fondActif, reglages } = useWagara()

const styleBande = computed(() => ({
  'background-color': fondActif.value
}))

const styleMotif = computed(() => ({
  '--wagara-image': image.value,
  '--wagara-taille': `${reglages.value.taille}px`,
  '--wagara-couleur': couleurActive.value,
  '--wagara-intensite': String(reglages.value.intensite)
}))
</script>

<template>
  <!--
    Les variables sont posees une seule fois sur ce parent : les deux bandes en
    heritent. Les repeter sur chaque couche dupliquerait le SVG encode dans le
    HTML, soit plusieurs kilo-octets par page pour un resultat identique.
  -->
  <div aria-hidden="true" :style="styleMotif">
    <div class="wagara wagara--gauche" :style="styleBande">
      <div v-if="image" class="wagara__motif" />
    </div>
    <div class="wagara wagara--droite" :style="styleBande">
      <div v-if="image" class="wagara__motif" />
    </div>
  </div>
</template>

<style scoped>
.wagara {
  position: fixed;
  top: 0;
  bottom: 0;
  pointer-events: none;
  /* Derriere tout le contenu : ce n'est qu'une texture. */
  z-index: -1;

  /*
    La colonne de texte plafonne a 42rem. On reserve 48rem de blanc autour
    d'elle : les bandes n'occupent que ce qui reste, et n'apparaissent donc
    que lorsqu'il y a vraiment du vide a habiller.
  */
  width: calc((100vw - 48rem) / 2);
}

.wagara--gauche {
  left: 0;
}

.wagara--droite {
  right: 0;
}

.wagara__motif {
  position: absolute;
  inset: 0;
  background-color: var(--wagara-couleur);
  opacity: var(--wagara-intensite);
  -webkit-mask-image: var(--wagara-image);
  mask-image: var(--wagara-image);
  -webkit-mask-repeat: repeat;
  mask-repeat: repeat;
  -webkit-mask-size: var(--wagara-taille);
  mask-size: var(--wagara-taille);
}

/* En dessous, la colonne occupe l'ecran : il n'y a pas de marge a habiller. */
@media (max-width: 1100px) {
  .wagara {
    display: none;
  }
}
</style>
