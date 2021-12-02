import React from 'react'

const Form = ({ title, children, ...props }) => {
    return (
      <div className='app__form'>
        {title && <h1 className="app__form-title">{title}</h1>}
  
        <form {...props}>{children}</form>
      </div>
    )
  }
  
  export default Form;
