import './App.css'
import { WebPageView } from './components/view'
import { Settings } from './components/settings'
import { useCallback, useState } from 'react'

function App() {
  const [color, setColor] = useState('#cecece')
  const [text, setText] = useState('Текст')

  const handleColorChange = (color) => {
    setColor(color)
  }
  const handleTextChange = (text) => {
    setText(text)
  }

  return (
    <div className="wrapper">
      <WebPageView settings={{ color, text }} />
      <Settings
        color={color}
        text={text}
        onColorChange={handleColorChange}
        onTextChange={handleTextChange}
      />
    </div>
  )
}

export default App