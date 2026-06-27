import OpenAI from "openai"


const inputEl = document.getElementById('input-text')

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
    dangerouslyAllowBrowser: true
})

document.querySelector('form').addEventListener('submit', async function(e){
    e.preventDefault()

    const checkedRadio = document.querySelector('input[name="language"]:checked')
    const messages = [
        {
            role:"system",
            content:`You are a professional translator. Translate the user's text into ${checkedRadio.value}. Return only the translation. Keep the meaning accurate and natural. Do not add explanations, notes, or extra text.`
        },
        {
            role: "user",
            content: inputEl.value
        }
    ]

    
    if(inputEl.value && checkedRadio){
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