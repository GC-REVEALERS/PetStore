import React, { useRef, useState } from 'react'
import '../styles/SignUp.css'
import { useNavigate } from 'react-router-dom';
import imageSrc from '../assets/dog.jpg';
import { useAuth } from '../context/AuthContext';
import { ColorRing } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const SignUp = () => {
    const navigate = useNavigate();
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const { signup } = useAuth()
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [emailErrorText, setEmailErrorText] = useState('')
    const [passwordErrorText, setPasswordErrorText] = useState('')
    const notify = () => toast('Account created!!');

    async function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setErrorMessage('Passwords do not match!')
        }
        try {
            setLoading(true)
            setErrorMessage('')
            console.log(emailRef.current.value)
            console.log(passwordRef.current.value)
            await signup(emailRef.current.value, passwordRef.current.value)
            setTimeout(() => {
                navigate('/');
            }, 5000);
            notify()
        } catch {
            setErrorMessage('Failed to create an account!')
        }
        setLoading(false)
    }

    const checkPasswordFunction = () => {
        //variable defined for checking the validation for password
        var passwordAssignValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        //if statement used to check validation from state in password
        console.log(passwordRef.current.value)
        if (passwordRef.current.value == '') {
            setPasswordErrorText("Please enter password")
        }
        else {
            if (passwordAssignValidation.test(String(passwordRef.current.value))) {
                setPasswordErrorText("")
            }
            else {
                setPasswordErrorText("Invalid password")
            }
        }
    }

    const checkEmailFunction = () => {
        //variable defined for checking the validation for password
        var emailAssignValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //if statement used to check validation from state in password
        console.log(emailRef.length)
        if (emailRef.current.value == '') {
            setEmailErrorText("Please enter email")
        }
        else {
            if (emailAssignValidation.test(String(emailRef.current.value))) {
                setEmailErrorText("")
            }
            else {
                setEmailErrorText("Invalid email")
            }
        }
    }

    return (
        <div className='OuterContainer'>
            <div className='sigUpContainer'  >

                <div className=''>
                    <h1>
                        Signup Page
                    </h1>
                </div>
                <div>
                    <h2>
                        Name
                    </h2>
                    <input ref={nameRef} type="text" className="myInput" placeholder='Enter your Name' />
                </div>
                <div>
                    <h2>
                        Email
                    </h2>
                    <input ref={emailRef} type="text" onBlur={checkEmailFunction} className="myInput" placeholder='Enter your email' />
                </div>
                {
                    emailErrorText != '' ?
                        <div className='errorMessage'>{emailErrorText}</div> :
                        null
                }
                <div>
                    <h2>
                        Password
                    </h2>
                    <input ref={passwordRef} type="password" onBlur={checkPasswordFunction} security='true' className="myInput" placeholder='Enter your password' />
                </div>
                {
                    passwordErrorText != '' ?
                        <div className='errorMessage'>{passwordErrorText}</div> :
                        null
                }
                <div>
                    <h2>
                        Confirm password
                    </h2>
                    <input ref={confirmPasswordRef} type="password" security='true' className="myInput" placeholder='Re-enter password' />
                </div>

                <div className='errorMessage'>{errorMessage}</div>
                {loading && <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#e15b64']}
                />}
                <div>
                    <button
                        disabled={loading}
                        onClick={handleSubmit}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = '#000000', e.target.style.color = '#FFFFFF')}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = '#FFFFFF', e.target.style.color = '#000000')}
                        className='submitButtonStyle'>Create account</button>
                    
                    <ToastContainer />
                </div>
            </div>
            <div>
                <img src={imageSrc} alt="img" className='imagestyl2' />
            </div>
        </div>
    )
}