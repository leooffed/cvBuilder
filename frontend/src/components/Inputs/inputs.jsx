import React, {useState} from 'react'
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa6'

const Inputs = ({value, onChange, label, type, placeholder}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label className='text-[13px] text-gray-800'>{label}</label>

      <div className='input-box'>
        <input type= {
            type === 'password' ? (showPassword ? 'text' : 'password') : type}
            placeholder={placeholder}
            value={value}
            className='w-full bg-transparent outline-none'
            onChange={onChange}
          />
        {type === 'password' && (
          <button type="button" onClick={handleTogglePassword}>
            {showPassword ? <FaRegEyeSlash size={22} className="text-gray-600" /> : <FaRegEye size={22} className="text-gray-600" />}
          </button>
        )}
      </div>
    </div>
  )
}

export default Inputs
