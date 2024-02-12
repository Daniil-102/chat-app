import React from 'react'

export const GenderCheckbox = ({ handleCheckboxChange, selectedGender }) => {
    return (
        <div className='flex'>
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectedGender === 'male' ? 'selected' : ''}`}>
                    <span className="label-text">Male</span>
                    <input
                        type="checkbox"
                        className="checkbox 
                     border-slate-900"
                        checked={selectedGender === 'male'}
                        onChange={() => handleCheckboxChange('male')} />
                </label>
            </div>
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer`}>
                    <span className="label-text">Female</span>
                    <input type="checkbox"
                        className={`checkbox border-slate-900  ${selectedGender === 'female' ? 'selected' : ''}`}
                        checked={selectedGender === 'female'}
                        onChange={() => handleCheckboxChange('female')} />
                </label>
            </div>
        </div>
    )
}
