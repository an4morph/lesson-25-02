import './App.css'
import { WebPageView } from './components/view'
import { Settings } from './components/settings'
import { useCallback, useState } from 'react'

function App() {
  const [settings, setSettings] = useState({ color: '', text: '' })

  const handleDataChange = useCallback((data) => {
    setSettings(data)
  }, [])

  return (
    <div className="wrapper">
      <WebPageView settings={settings} />
      <Settings
        onDataChange={handleDataChange}
      />
    </div>
  )
}

export default App