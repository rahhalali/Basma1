import React from 'react';
import "./EightPage.css"
import Header from "./Header/Header";
function EightPage(props) {
    return (
        <div className='eight'>
            <div className='eight-container'>
                <div className='eight-center'>
                    <Header/>
                    <div className="eight-input">
                        <input type="text" name='text' placeholder='Enter your email'/>
                        <button type='submit'>Subscribe</button>
                    </div>
                </div>

                </div>
        </div>
    );
}

export default EightPage;