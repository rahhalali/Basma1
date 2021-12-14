import React from 'react';
import './FourthPage.css';
import Thumb from "../../Images/images/thumb-2.png";
import List from "../FourthPage/List/List";
function FourthPage(props) {
    return (
        <div className='fourth-page'>
            <div className='fourth-page-container'>
                <div className='fourth-page-container-image'>
                    <img src={Thumb} alt='' />
                </div>
                <div className='fourth-page-container-info'>
                    <List />
                    <div className='fourth-page-container-btn'>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FourthPage;