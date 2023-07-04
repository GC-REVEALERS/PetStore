import React, { useEffect, useRef, useState } from 'react'
import '../styles/HomeStyle.css'
import '../assets/dog1.jpg'
import imageSrc from '../assets/dog1.jpg';
import imageSrc1 from '../assets/dog2.jpg';
import imageSrc2 from '../assets/dog3.jpg';
import imageSrc3 from '../assets/dog4.jpg';
import imageSrc4 from '../assets/dog5.jpg';
import imageSrc5 from '../assets/dog6.jpg';
import imageSrc6 from '../assets/dog7.jpg';
import imageSrc7 from '../assets/dog8.jpg';
import imageSrc8 from '../assets/dog9.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const HomePage = () => {
    const nameRef = useRef()
    const petNameRef = useRef()
    const emailRef = useRef()
    const notify = () => toast('New Pet stored!');
    const notify2 = () => toast('Login sucessful!!');
    const [emailErrorText, setEmailErrorText] = useState('')

    useEffect(()=>{
        notify2()
    },[1])

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

    const notifyOne = () => {
        notify()
        nameRef.current.value = ''
        petNameRef.current.value = ''
        emailRef.current.value = ''
    }

    const dogServices = [
        {
            id: 1,
            title: "Nail Cutting",
            description: "Trimming the dog's nails",
            price: 15.99,
            image: imageSrc
        },
        {
            id: 2,
            title: "Shower",
            description: "Bathing and cleaning the dog",
            price: 25.99,
            image: imageSrc1
        },
        {
            id: 3,
            title: "Surgery",
            description: "Medical procedure for dogs",
            price: 200.0,
            image: imageSrc2
        },
        {
            id: 4,
            title: "Teeth Cleaning",
            description: "Cleaning the dog's teeth",
            price: 35.99,
            image: imageSrc3
        },
        {
            id: 5,
            title: "Ear Cleaning",
            description: "Cleaning the dog's ears",
            price: 12.99,
            image: imageSrc4
        },
        {
            id: 6,
            title: "Grooming",
            description: "Full grooming service for dogs",
            price: 40.0,
            image: imageSrc5
        },
        {
            id: 7,
            title: "Flea and Tick Treatment",
            description: "Treating dogs for fleas and ticks",
            price: 30.0,
            image: imageSrc6
        },
        {
            id: 8,
            title: "Vaccinations",
            description: "Administering vaccinations to dogs",
            price: 45.99,
            image: imageSrc7
        },
        {
            id: 9,
            title: "Boarding",
            description: "Providing boarding services for dogs",
            price: 50.0,
            image: imageSrc8
        },
        {
            id: 10,
            title: "Training",
            description: "Training programs for dogs",
            price: 60.0,
            image: imageSrc2
        }
    ];

    return (
        <div className='outerContainer'>
            <div className='backgroundImage'>
                <h1 className='headingStyl'>
                    Pet Store Service Center
                </h1>
            </div>
            <ToastContainer />
            <div className='dataEntryListingStyle'>
                <div className='homeContainer'  >
                    <div className='headingDiv'>
                        <h1 className='heading2styl'>
                            Pet Name and customer data
                        </h1>
                    </div>
                    <div className='petsEntryData' >
                        <div>
                            <h2>
                                Pet Name
                            </h2>
                            <input ref={petNameRef} type="text" className="myInput" placeholder='Enter your pet Name' />
                        </div>
                        <div>
                            <h2>
                                Customer Name
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
                            <button
                                onMouseEnter={(e) => (e.target.style.backgroundColor = '#000000', e.target.style.color = '#FFFFFF')}
                                onMouseLeave={(e) => (e.target.style.backgroundColor = '#FFFFFF', e.target.style.color = '#000000')}
                                className='submitButtonStyle'
                                onClick={notifyOne}
                            >Submit</button>
                        </div>
                    </div>

                </div>
                <div >
                    <h2 >Pet Services</h2>
                    <div className='mapOuterContainer' >
                        {dogServices.map((dogServices) => (
                            <div className='mapContainer' key={dogServices.id}>
                                <h3>{dogServices.title}</h3>
                                <img src={dogServices.image} alt="img" className='cardDogStyl' />
                                <h5>{dogServices.description}</h5>
                                <p>$ {dogServices.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
