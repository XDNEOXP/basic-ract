import { useState, useRef, useEffect } from "react"
import { validateEmail, validateSubject } from "../../utils/validation"
import Button from "../Button/Button"
import './Contact.css'
const Contact = () => {
    
    const [subject, setSubject] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')
    const [errors, setErrors] = useState({})
    const inputSubjectRef = useRef(null)

    const handelChangeInputSubject = (event) => {
        if(validateSubject(event.target.value)){
            setSubject(event.target.value)
            setErrors({
              ...errors,
              subject: null
          })
        }

        else if(event.target.value === '')
        {
            setErrors({
                ...errors,
                subject:null
            })
        }

        else{
            setErrors({
                ...errors,
                subject: "Subject must be more than 8 characters"
            })
        }
    }

    const handelChangeInputEmail = (event) => {
        if(validateEmail(event.target.value)){
          setEmail(event.target.value)
          setErrors({
            ...errors,
            email:null
        })
        }
        
        else if(event.target.value === '')
        {
            setErrors({
                ...errors,
                email:null
            })
        }

        else{
            setErrors({
                ...errors,
                email: "Email is not valid"
            })
        }
    }
    
    useEffect(() => {
        inputSubjectRef.current.focus()
    },[])
    
    const handelChangeTextArea = (event) => {
        setDescription(event.target.value)
    }

    const handelSubmit = () => {
        console.log('subject:', subject)
        console.log('email:', email)
        console.log('description:', description)
    }

   
      return(
        <div className="Contact">
            <div className="formControl">
                <input ref={inputSubjectRef} onChange={handelChangeInputSubject} type="text" placeholder="Subject" />
                {errors.subject &&<span>{errors.subject}</span>}
            </div>
            <div className="formControl">
                <input onChange={handelChangeInputEmail} type="email" placeholder="Email" />
                {errors.email &&<span>{errors.email}</span>}
            </div>
            <div className="formControl">
                <textarea onChange={handelChangeTextArea} >Your Request Here</textarea>
            </div>
            <div className="formControl">
                <Button added="btn" handelClick={handelSubmit} >Submit</Button>
            </div>
        </div>
      )
}

export default Contact