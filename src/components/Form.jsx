

import { useState } from "react";
import RadioButton from "./RadioButtons";
import Checkbox from "./Checkbox";


function Form() {
    const initialFormState = {
        color: "",
        review: "",
        username: "",
        email: "",
        swimming: false,
        bathing: false,
        chatting: false,
        noTime: false
    }
    const[form, setForm] = useState(initialFormState)

    function handleChange(event) {
        const inputName = event.target.name
        const inputValue = event.target.value
        
        if (inputName === "review") {
            setForm({...form, review: inputValue})
        } else if (inputName === "username") {
            setForm({ ...form, username: inputValue})
        } else if (inputName === "email") {
            setForm({ ...form, email: inputValue })
        } else if (inputName === "spend-time") {
            setForm({ ...form, [inputValue]: !form[inputValue] })
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log("Form submitted: ", { form })
        setForm(initialFormState)
  }

    return(
        <>
        <form className="form" onSubmit={handleSubmit}>
            <h2>Tell us what you think about your rubber duck!</h2>

            <div className="form__group radio">
                <h3>How do you rate your rubber duck colour?</h3>
                <RadioButton form = {form} setForm={setForm}/>
            </div>

            <div className="form__group">
                <h3>How do you like to spend time with your rubber duck</h3>
                <Checkbox form = {form} setForm={setForm}/>
            </div>

            <label> What else have you got to say about your rubber duck?
                <textarea
                name="review"
                cols="30"
                rows="10"
                onChange={handleChange}
                value={form.review}>
                </textarea>
            </label>

            <label>Put your name here (if you feel like it):
                <input
                    type="text"
                    name="username" 
                    onChange= {handleChange}
                    value={form.username}
                    />
            </label>
            <label>Leave us your email pretty please??
                <input
                    type="email"
                    name="email"
                    onChange= {handleChange}
                    value={form.email} />
            </label>
                <input className="form__submit" type="submit" 
                value="Submit Survey!" />
            </form>
        </>
    )
}

export default Form