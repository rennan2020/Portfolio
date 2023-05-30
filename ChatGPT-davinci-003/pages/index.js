import { useState } from "react"

export default function MyPage() {
  const [prompt, setPrompt] = useState("")
  const [answer, setAnswer] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)

    const response = await fetch("/api/get-answer", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt: prompt })
    })
    const data = await response.json()
    setAnswer(data.text.trim())
    setIsLoading(false)
  }

  function handleChange(e) {
    setPrompt(e.target.value)
  }

  return (
    <><header class="header">
      <a calss="logo">
        
      </a>
    </header>
    <section class="home" id="home">
    <div className="container">
        <h1>O que gostaria de saber?</h1>
        <form className="our-form" onSubmit={handleSubmit}>
          <input className="prompt-field" type="text" onChange={handleChange} />
          <button className="prompt-button">Diga</button>
        </form>

        {isLoading && <div className="loading-spinner"></div>}

        <div className="answer-area">{answer}</div>
      </div>
      </section>
      </>
  )
}
