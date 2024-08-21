import React from 'react'

// export interface IerrorProp{
//     error:string;
// }
const ErrorText= (props) => {

    const {error} = props;

    if (error === '') return null;

  return (
    <div>
      <small className='error'>
        {error}
      </small>
    </div>
  )
}

export default ErrorText