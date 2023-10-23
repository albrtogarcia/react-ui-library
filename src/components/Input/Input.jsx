import { useState } from 'react'
import PropTypes from 'prop-types'
import './Input.scss'

const Input = ({ type = 'text', label, id }) => {
  const [value, setValue] = useState('')

  function handleChange(e) {
    setValue(e.target.value)
  }

  return (
    <div className="input-container">
      <input id={id} type={type} value={value} onChange={handleChange} />
      <label className={value && 'filled'} htmlFor={id}>
        {label}
      </label>
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default Input
