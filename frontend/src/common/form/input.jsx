import React from 'react'

export default props => (
    <input {...props.input} type="text" className='form-control' placeholder={props.placeholder} type={props.type} readOnly={props.readOnly}/>
)