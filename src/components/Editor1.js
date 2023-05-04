import React from 'react'
import 'codemirror/theme/material.css'
// import 'codemirror/mode/xml/xml'
// import 'codemirror/mode/javascript/javascript'
// import 'codemirror/mode/css/css'
import dynamic from 'next/dynamic'




// import {Controlled as CodeMirror} from 'react-codemirror2'
import styles from '@/styles/Editor.module.css'




const Editor = (props) => {
    const CodeMirror = dynamic(() => {
        import('codemirror/mode/xml/xml')
        import('codemirror/mode/javascript/javascript')
        import('codemirror/mode/css/css')
        import ("codemirror/lib/codemirror.css");
        import ("codemirror/theme/dracula.css");
        return import('react-codemirror')
    }, {ssr: false})

    const {
        language,
        displayName,
        value,
        onChange,focus
    } = props

    const handleChange = (editor,date,value) => {
        editor.focus()
        onChange(editor);
    }


  return (
    <div className='editor-container'>
        <div className='editor-title'>
            {displayName}
            <button>0/C</button>
        </div>
        {<CodeMirror
            onBeforeChange={(editor,data,value) => {
                console.log('ed',editor)
                console.log('dt',data)
                console.log('vl',value)
            }}
            value={value}
            className='code-mirror-wrapper'
            options={{
                lineWrapping:true,
                lint:true,
                mode:language,
                theme:'dracula',
                lineNumbers: true,
            }}
            // onChange={handleChange}
            autoFocus={focus}
            onChange={handleChange}
        />}
    </div>
  )
}

export default Editor