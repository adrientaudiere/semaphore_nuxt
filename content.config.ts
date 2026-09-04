import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    // Les pages fixes : content/apropos.md, content/bilan.md, etc.
    pages: defineCollection({
      type: 'page',
      source: {
        include: '*.md',
        exclude: ['actu/**']
      },
      schema: z.object({
        title: z.string()
      })
    }),

    // Les actualites : content/actu/*.md
    actu: defineCollection({
      type: 'page',
      source: 'actu/*.md',
      schema: z.object({
        title: z.string(),
        // Champ libre dans le site actuel ("A distance le mardi 3 novembre 2026...")
        date: z.string(),
        description: z.string()
      })
    })
  }
})
