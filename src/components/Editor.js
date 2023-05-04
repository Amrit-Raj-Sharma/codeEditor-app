import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/ayu-dark.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'

if(typeof navigator !== "undefined"){
    require("codemirror/mode/xml/xml");
    require("codemirror/mode/css/css");
    require("codemirror/mode/javascript/javascript")
}

import { Controlled } from 'react-codemirror2';

const Editor = (props) => {
    const {
        language,
        displayName,
        value,
        onChange,
    } = props

    const [open, setOpen] = useState(true)

    const handleChange = (editor,date,value) => {
        onChange(value);
    }
  return (
    <div className={`editor-container ${open ? '': 'collapsed'}`}>
        <div className='editor-title'>
            {displayName}
            <button type='button' className='expand-collapse-btn' onClick={() => setOpen(prevOpen => !prevOpen)}>
                <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
            </button>
        </div>
        <Controlled
            onBeforeChange={handleChange}
            value={value}
            className='code-mirror-wrapper'
            options={{
                lineWrapping:true,
                lint:true,
                mode:language,
                lineNumbers:true,
                theme:'ayu-dark'
            }}
        />    
    </div>
  )
}

export default Editor