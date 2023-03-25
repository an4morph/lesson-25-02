import './styles.css'

export const Settings = ({ color, text, onColorChange, onTextChange }) => {
  return (
    <div className="settings">
      <div className="setting__item">
        <label htmlFor="block-color">Цвет блока</label>
        <input 
          type="color"
          id="block-color"
          value={color}
          onChange={e => onColorChange(e.target.value)}
        />
      </div>
      <div className="setting__item">
        <label htmlFor="block-text">Текст блока</label>
        <input 
          type="text"
          id="block-text"
          value={text}
          onChange={e => onTextChange(e.target.value)}
        />
      </div>
    </div>
  )
}