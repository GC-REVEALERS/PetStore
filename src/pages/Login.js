import React, { useRef, useState } from 'react'
import '../styles/LoginStyle.css'
import { useNavigate } from 'react-router-dom';
import imageSrc from '../assets/dog.jpg';
import { useAuth } from '../context/AuthContext';
import { ColorRing } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Login = () => {

    const navigate = useNavigate();

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [emailErrorText, setEmailErrorText] = useState('')
    const notify = () => toast('Login Failed!!');

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setLoading(true)
            console.log(emailRef.current.value)
            console.log(passwordRef.current.value)
            await login(emailRef.current.value, passwordRef.current.value)
            setErrorMessage('Welcome!!')
            navigate('/homepage');
        } catch {
            notify()
            setErrorMessage('Failed to login!')
        }
        setLoading(false)
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

    const navigateToSignUp =()=>{
        navigate('/signup')
    }

    return (
        <div className='OuterContainer'>
            <div className='loginContainer'  >
                <div className=''>
                    <h1>
                        Login Page
                    </h1>
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
                    <input ref={passwordRef} type="password" security='true' className="myInput" placeholder='Enter your password' />
                </div>

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
                        onMouseEnter={(e) => (e.target.style.backgroundColor = '#000000', e.target.style.color = '#FFFFFF')}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = '#FFFFFF', e.target.style.color = '#000000')}
                        className='submitButtonStyle'
                        disabled={loading}
                        onClick={handleSubmit}
                    >Submit</button>
                    <ToastContainer />
                </div>
                <div className='signUpDiv'>
                    <p>Do not have an account</p>
                    <button onClick={navigateToSignUp} className='signUpButtonStyle'>SignUp</button>
                </div>
            </div>
            <div>
                <img src={imageSrc} alt="Image" className='imagestyl'/>
            </div>
        </div>
    )
}
