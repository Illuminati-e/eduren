import React from 'react'

const InputFields = ({ value, name, type, placeholder, handleChanges }) => {
    const handler = (e) => {
        handleChanges(e);
    }
    return (
        <>

            <input type={type} value={value} name={name} className='p-4 bg-slate-100 rounded-sm text-lg font-semibold placeholder:font-normal shadow-md text-blue-500 flex-1' placeholder={placeholder} required onChange={handler} />

        </>
    )
}

export default InputFields