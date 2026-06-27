const inputEl = document.getElementById('')
const radioEl = document.querySelector('.radio')
import OpenAI from "openai"

const openai = new OpenAI({
    apiKey:"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",
    baseURL:"https://api.groq.com/openai/v1",
    dangerouslyAllowBrowser: true
})

const messages=[
    {
    role: "user",
    content:`${inputEl.value}`
}
]

document.querySelector('form').addEventListener('submit', async function(e){
    e.preventDefault()

    if(inputEl.value && radioEl.value){
        
    const response = await openai.chat.completions.create({
      model : "openai/gpt-oss-120b",
      messages 
    })
    }
})
