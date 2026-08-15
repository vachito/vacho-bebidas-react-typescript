import {z} from 'zod'
import { CategoriesPIResponseSchema, DrinksAPIResponse, SearchFilterSchema } from '../utils/recipes-schema'

export type Categories = z.infer<typeof CategoriesPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksAPIResponse>
