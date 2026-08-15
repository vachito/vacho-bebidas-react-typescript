import {z} from 'zod'
import { CategoriesPIResponseSchema, SearchFilterSchema } from '../utils/recipes-schema'

export type Categories = z.infer<typeof CategoriesPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
