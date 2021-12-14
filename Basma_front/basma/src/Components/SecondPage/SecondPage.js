import React from 'react';
import Header from "./Header/Header";
import './SecondPage.css';
import Content from "./Content/Content";
function SecondPage(props) {
    return (
        <div className='second-page'>
            <Header/>
            <Content />
        </div>

    );
}

export default SecondPage;