import React from 'react';

const Formfile = ({ ispresent, LabelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className='block text-sm font-medium text-gray-900 dark:text-white'>
          {LabelName && ispresent}
        </label>

      </div>
      {
        ispresent && (
          <input
            autoComplete='off'
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            required
            className='bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-200 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3'
          />)
      }
      <div className='pt-1'>
        {isSurpriseMe && (
          <button
            type='button'
            onClick={handleSurpriseMe}
            className='font-semibold text-xs bg-[#ECECF1] dark:hover:bg-gray-900 dark:bg-gray-800 py-1 px-2 rounded-[5px] text-black dark:text-white'
          >
            Surprise me
          </button>
        )}
      </div>
    </div>
  )
}

export default Formfile
