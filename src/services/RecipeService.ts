import axios from "axios"
import { CategoriesPIResponseSchema } from "../utils/recipes-schema"

export async function getCategories() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const {data} = await axios(url)
    const result = CategoriesPIResponseSchema.safeParse(data)
    if(result.success){
        return result.data
    }
}