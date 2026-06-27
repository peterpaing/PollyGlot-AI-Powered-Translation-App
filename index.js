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
            content:`You are an expert professional translator and localization specialist.
                    Translate the following text from English to ${checkedRadio.value}. 
Requirements:

- Preserve the original meaning, intent, and context exactly.

- Use natural, fluent, native-level language.

- Maintain the original tone, style, and emotional nuance.

- Adapt idioms, expressions, and cultural references appropriately for native speakers.

- Preserve formatting, paragraphs, lists, punctuation, and structure.

- Do not add, omit, or interpret information beyond what is written.

- If a phrase has multiple possible meanings, choose the most contextually appropriate translation.

- For technical, legal, medical, or business terms, use standard professional terminology.

- If there is ambiguity, provide the best translation and briefly note the alternative meaning.`
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