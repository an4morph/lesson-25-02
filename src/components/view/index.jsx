import './styles.css'

export const WebPageView = ({ settings }) => {
  return (
    <div
      className="page-view"
      style={{ backgroundColor: settings.color }}
    >
      {settings.text}
    </div>
  )
}