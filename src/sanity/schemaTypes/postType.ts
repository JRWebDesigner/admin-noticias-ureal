import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'titulo',
      type: 'string',
    }),
    defineField({
      name: 'enlaceExterno',
      type: 'string',
      title: 'Enlace Externo',
      description: 'URL completa (https://...) o mailto:correo@ejemplo.com',
      validation: Rule => Rule.custom(value => {
        if (!value) return true // Es opcional
        if (value.startsWith('http://') || 
            value.startsWith('https://') || 
            value.startsWith('mailto:') || 
            value.startsWith('/') || 
            value.startsWith('#')) {
          return true
        }
        return 'El enlace debe comenzar con http://, https://, mailto:, / o #'
      })
    }),
    defineField({
      name: 'imagen',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
  ],
  preview: {
    select: {
      title: 'titulo',
      media: 'imagen',
    },
  },
})
