import React from 'react'
import ThemeSwitcher from '../Theme/ThemeSwitcher'

const themeOptions = [
  'default',
  '3024-day',
  '3024-night',
  'abbott',
  'abcdef',
  'ambiance',
  'ayu-dark',
  'ayu-mirage',
  'base16-dark',
  'base16-light',
  'bespin',
  'blackboard',
  'cobalt',
  'colorforth',
  'dracula',
]

const Header = ({ setThemeValue, setTheme, theme }) => {

  return (

    <div className={`nav ${theme ? 'theme-dark' : 'theme-light'}`}>
  <input type="checkbox" id="nav-check" />
  <div className="nav-header">
    <div className={`nav-title ${theme ? '' : 'nav-title-light'}`}>
      Code-U-App
    </div>
  </div>
  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className={`nav-links ${theme ? '' : 'nav-links-light'}`}>
    <ThemeSwitcher setTheme={setTheme} theme={theme} />

      
      <label style={{ fontSize: '14px' }}>Choose Editor Themes </label>
        <select className={`${theme ? 'theme-dark' : 'theme-light'}`} defaultValue='ayu-dark' onChange={(e) => setThemeValue(e.target.value)}>
          {themeOptions?.map((item, index) => (
            <option key={item+index} value={item}>{item}</option>
        ))}
        </select>
        
  </div>
</div>
    
    // <div className={`header-container ${theme ? 'theme-dark' : 'theme-light'}`}>
    //   <div>Logo</div>
    //     <>
    //       <ThemeSwitcher setTheme={setTheme} theme={theme} />
    //     </>
    //   <div className='header-right-box'>
    //     <select defaultValue='ayu-dark' onChange={(e) => setThemeValue(e.target.value)}>
    //       {themeOptions?.map((item, index) => (
    //         <option key={item+index} value={item}>{item}</option>
    //       ))}
    //     </select>
    //   </div>
    // </div>
  )
}

export default Header
