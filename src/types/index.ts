import {z} from 'zod'
import { CategoriesPIResponseSchema, DrinkApiResponse, DrinksAPIResponse, SearchFilterSchema } from '../utils/recipes-schema'

export type Categories = z.infer<typeof CategoriesPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksAPIResponse>
export type Drink = z.infer<typeof DrinkApiResponse>
