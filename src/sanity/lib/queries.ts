import {defineQuery} from 'next-sanity'

export const ALL_POSTS_QUERY = defineQuery(`*[_type == "post"] | order(_createdAt desc){
  _id,
  _createdAt,
  _updatedAt,
  titulo,
  enlace {
    current
  },
  imagen {
    ...,
    asset->,
    "alt": alt
  }
}`)
