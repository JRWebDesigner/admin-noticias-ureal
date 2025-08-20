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
      name: 'enlace',
      type: 'slug',
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
