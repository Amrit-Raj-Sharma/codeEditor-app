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
    <div className={`header-container ${theme ? 'theme-dark' : 'theme-light'}`}>
      <div>Logo</div>
        <>
          <ThemeSwitcher setTheme={setTheme} theme={theme} />
        </>
      <div className='header-right-box'>
        <select defaultValue='ayu-dark' onChange={(e) => setThemeValue(e.target.value)}>
          {themeOptions?.map((item, index) => (
            <option key={item+index} value={item}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Header