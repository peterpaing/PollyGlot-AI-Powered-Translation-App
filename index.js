import OpenAI from "openai"

const inputEl = document.getElementById('input-text')
const translatedText = document.querySelector('.translated-text')
const selectLanguage = document.querySelector('.select-language')
const submitEl= document.querySelector('.submit-btn')
const resetEl= document.querySelector('.reset-btn')


const openai = new OpenAI({
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    baseURL: "https://api.openai.com/v1",
    dangerouslyAllowBrowser: true
})

document.querySelector('form').addEventListener('submit', async function(e){
    e.preventDefault()

    const checkedRadio = document.querySelector('input[name="language"]:checked')
    const messages = [
        {
            role:"system",
            content:`You are a professional translation assistant. Translate the user's text into the requested ${checkedRadio.value} language while preserving meaning, tone, context, formatting, and style. Do not add explanations, comments, or extra text. Return only the translated content.`
        },
        {
            role: "user",
            content: inputEl.value
        }
    ]

    
    if(inputEl.value && checkedRadio){
        try {
            
            const response = await openai.chat.completions.create({
                model: "gpt-5.4-nano", 
                messages: messages 
            })

          const translate= response.choices[0].message.content
          selectLanguage.style.display='none'
          submitEl.style.display='none'
          resetEl.style.display='block'
          translatedText.innerHTML = render(translate)


        } catch (error) {
            console.error("API Error:", error)
        }
    }
})

function render(message){
    return `<h2>Your translation</h2>
    <textarea disabled class="translated">${message}</textarea>
        `
}

document.querySelector('form').addEventListener('reset', function(e){
    e.preventDefault()
    
    selectLanguage.style.display='block'
          submitEl.style.display='block'
          resetEl.style.display='none'
          translatedText.style.display='none'

          location.reload()
})