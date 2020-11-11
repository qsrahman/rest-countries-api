import React, { useState } from 'react'
import Wrapper from './style'

const ToggleSwitch = ({ toggleTheme }) => {
  const [value, setValue] = useState(false)

  const handleChange = e => {
    setValue(e.target.checked)
    toggleTheme(e.target.checked)
  }

  return (
    <Wrapper>
      {value ? <i className='fas fa-moon'></i> : null}
      <label>
        <input type='checkbox' onChange={handleChange} checked={value} />
        <span className='round'></span>
      </label>
      {!value ? <i className='fas fa-moon'></i> : null}
    </Wrapper>
  )
}

export default ToggleSwitch
