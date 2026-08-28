import { streamText } from 'ai'
import { openrouter } from '../lib/ai'

export default{
    async generateRecipe(prompt:string){
        const result = streamText({
          model: openrouter('nvidia/nemotron-3-super-120b-a12b:free'),
          prompt  
        })

        return result.textStream
    }
}
