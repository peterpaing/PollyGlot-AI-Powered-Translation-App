# PollyGlot AI Translator

An AI-powered translation web application that translates user input into multiple languages while preserving meaning, tone, context, formatting, and style.

## Features

* Translate text using AI
* Supports multiple languages:

  * French 🇫🇷
  * Spanish 🇪🇸
  * Burmese 🇲🇲
  * Japanese 🇯🇵
* Responsive design for mobile and desktop
* Clean and intuitive user interface
* Reset functionality for new translations
* AI-powered translation with modern language models

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES Modules)
* Vite
* OpenAI SDK
* AI Language Model API

## Project Structure

```
project/
│
├── index.html
├── style.css
├── index.js
├── images/
│   ├── logo.png
│   ├── bg.png
│   ├── france-flag.png
│   ├── spain-flag.png
│   ├── myanmar-flag.png
│   └── japan-flag.png
└── README.md
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/pollyglot-ai-translator.git
```

2. Navigate into the project:

```bash
cd pollyglot-ai-translator
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file:

```env
VITE_GROQ_API_KEY=your_api_key_here
```

5. Start the development server:

```bash
npm run dev
```

## How It Works

1. Enter text into the input field.
2. Select a target language.
3. Click **Translate**.
4. The application sends the text to the AI model.
5. The translated result is displayed on the screen.

## Future Improvements

* Add more language options
* Add loading animation
* Add copy-to-clipboard functionality
* Add speech-to-text support
* Add text-to-speech output
* Add translation history
* Add dark mode
* Improve error handling

## Author

Peter Paing

## License

This project is open source and available under the MIT License.
