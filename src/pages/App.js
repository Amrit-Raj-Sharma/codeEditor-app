import Editor from '../components/Editor'
import { useEffect, useState } from 'react'
import useLocalStorage from '../components/hooks/useLocalStorage'

export default function App() {

  const [html, setHtml] = useLocalStorage('html','<h1>HTML goes here...</h1>')
  const [css, setCss] = useLocalStorage('css',' body{background:green};')
  const [js, setJs] = useLocalStorage('js','// I will help you!')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeDelay = setTimeout(() => {
      setSrcDoc(`
        <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
        </html>
      `)
    },350)

    return () => clearTimeout(timeDelay)

  },[html,css,js])

  return (
    <>
     <div className='pane top-pane'>
      <Editor 
        language='xml'
        displayName='HTML'
        value={html}
        onChange={setHtml} 
      />
      <Editor 
        language='css'
        displayName='CSS'
        value={css}
        onChange={setCss} 
      />
      <Editor 
        language='javascript'
        displayName='JS'
        value={js}
        onChange={setJs} 
      />
     </div>
     <div className='pane'>
      <iframe
        srcDoc={srcDoc} 
        title='output'
        sandbox='allow-forms allow-popups allow-scripts allow-same-origin allow-modals'
        frameBorder='0'
        width='100%'
        height='100%'
        />
     </div>
    </>
  )
}
