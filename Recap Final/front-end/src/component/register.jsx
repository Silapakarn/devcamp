
import React, {useRef} from 'react'

const Register = () => {

    const nameRef = useRef('')
    const usernameRef = useRef('')
    const passwordRef = useRef('')


  return (
    <div>
        <h3>Register</h3>
        <hr/>

        <from action=''>
            <div>
                <label>Name: </label>
                <input type='text' ref={nameRef} required />
            </div>

            <div>
                <label>username: </label>
                <input type='text' ref={usernameRef} required />
            </div>

            <div>
                <label>password: </label>
                <input type='text' ref={passwordRef} required />
            </div>
        </from>
      
    </div>
  )
}

export default Register

