import React from 'react';
import './NinePage.css'
import Header from "./Header/Header";
import Inner from "./Inner/Inner";
import Form from "./Form/Form";
function NinePage(props) {
    return (
        <div className='nine'>
            <div className='nine-container'>
                <Header/>
                <div className='nine-inner'>
                    <div className='nine-inner-info'>
                        <Inner/>
                    </div>
                    <div className='nine-inner-form'>
                        <Form/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NinePage;