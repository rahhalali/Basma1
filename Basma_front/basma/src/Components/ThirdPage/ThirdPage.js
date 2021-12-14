import React from 'react';
import './ThirdPage.css';
import List from "./List/List";
import Icon from "./Icon/Icon";
import Thumb from '../../Images/images/thumb-2 (1).png'
function ThirdPage(props) {
    return (
        <div className='third-page'>
            <div className='third-page-container'>
                <div className='third-page-container-image'>
                    <img src={Thumb} alt='' />
                </div>
                <div className='third-page-container-info'>
                    <List/>
                    <div className='third-page-container-info-icon'>
                        <Icon/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThirdPage;