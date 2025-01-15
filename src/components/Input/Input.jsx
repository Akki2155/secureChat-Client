import React from 'react'


import './Input.scss'

const Input = ({label,type,placeholder, style, labelStyle, handleChange, name, handleKeyPress, value}) => {
  return (
    <div className='input-container'>
        {
          label &&
          <label className='label' style={labelStyle}>
              {label}
          </label>
        }
        <input
            name={name}
            className='input'
            type={type}
            placeholder={placeholder}
            style={style}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            value={value}
        />
    </div>
  )
}

export default Input