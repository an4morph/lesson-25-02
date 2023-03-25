import { useEffect, useState } from 'react'
import './styles.css'

export const Settings = ({ onDataChange }) => {
  const [color, setColor] = useState('#cecece')
  const [text, setText] = useState('Текст блока')

  useEffect(() => {
    onDataChange({ color, text })
  }, [color, text, onDataChange])

  return (
    <div className="settings">
      <div className="setting__item">
        <label htmlFor="block-color">Цвет блока</label>
        <input 
          type="color"
          id="block-color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <div className="setting__item">
        <label htmlFor="block-text">Текст блока</label>
        <input 
          type="text"
          id="block-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  )
}