import React from 'react';
import "./Form.css"
function Form(props) {
    return (
        <div className='nine-form'>
            <form>
                <input type='text' placeholder='Name'/>
                <input type='email' placeholder='Email'/>
                <input type='text' placeholder='Subject'/>
                <textarea cols='10' rows='10' placeholder='Message'/>
                <button className='nine-butn'><i className="fas fa-paper-plane"/>Send Message</button>
            </form>
        </div>
    );
}

export default Form;