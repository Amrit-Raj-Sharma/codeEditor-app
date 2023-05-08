import Editor from '../components/Editor'
import { useEffect, useState } from 'react'
import useLocalStorage from '../components/hooks/useLocalStorage'
import Header from '../components/Header/header'
// import ResizePanel from "react-resize-panel";

// import dynamic from 'next/dynamic'

// const ResizePanel = dynamic(
//   () => import('react-resize-panel'),
//   { ssr: false }
// )

export default function App() {

  const [html, setHtml] = useLocalStorage('html','<h1>HTML goes here...</h1>')
  const [css, setCss] = useLocalStorage('css',' body{background:green};')
  const [js, setJs] = useLocalStorage('js','// I will help you!')
  const [srcDoc, setSrcDoc] = useState('')

  const [themeValue, setThemeValue] = useState('ayu-dark')

  const [theme, setTheme] = useState('theme-light')

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
    <Header setThemeValue={setThemeValue} setTheme={setTheme} theme={theme} />
{/* 
     <ResizePanel
        direction="s"
        className={`${theme ? 'theme-dark' : 'theme-light'}`}
        // style={{ backgroundColor: "black", height: "10%" }}
      >     */}
     <div className='pane top-pane'>
      <Editor 
        language='xml'
        displayName='HTML'
        value={html}
        onChange={setHtml}
        
        themeValue={themeValue}

        theme={theme}
      />
      <Editor 
        language='css'
        displayName='CSS'
        value={css}
        onChange={setCss}
        
        themeValue={themeValue}

        theme={theme}
      />
      <Editor 
        language='javascript'
        displayName='JS'
        value={js}
        onChange={setJs}
        
        themeValue={themeValue}

        theme={theme}
      />
     </div>
     {/* </ResizePanel> */}
     <div className='pane'>
      <iframe
        srcDoc={srcDoc} 
        title='output'
        sandbox='allow-forms allow-popups allow-scripts allow-same-origin allow-modals'
        frameBorder='0'
        width='100%'
        height='100%'
        className="responsive-iframe"
        />
     </div>
    </>
  )
}
