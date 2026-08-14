import {z} from 'zod'

export const CategoriesPIResponseSchema = z.object({
    drinks:z.array(
        z.object({
            strCategory: z.string()
        })
    )
})