import OpenAI from "openai"
import 'dotenv/config'

const inputEl = document.getElementById('input-text')
const radioEl = document.querySelector('.radio-select')

const openai = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
    dangerouslyAllowBrowser: true
})

document.querySelector('form').addEventListener('submit', async function(e){
    e.preventDefault()

    
    const messages = [
        {
            role: "user",
            content: inputEl.value
        }
    ]

    if(inputEl.value && radioEl.value){
        try {
            
            const response = await openai.chat.completions.create({
                model: "openai/gpt-oss-20b", 
                messages: messages 
            })
            
            console.log(response.choices[0].message.content)
        } catch (error) {
            console.error("API Error:", error)
        }
    }
})