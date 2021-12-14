import React from 'react';
import './FifthPage.css';
import Header from "./Header/Header";
import {info} from "../../JSON/FifthData";
function FifthPage(props) {
    return (
        <div className='fifth'>
            <div className='fifth-container'>
                <Header/>
                    <div className='fifth-info'>
                        {
                            info.map(item=>(
                                <div className='arrow-flex' key={item.id}>

                                    <div className="new-arrow">{item.id === 1 ? "" : <i className="fas fa-chevron-right"/> }</div>
                                    <div className='fifth-info-first'>
                                        <div className='fifth-info-first-image'>
                                            <img src={item.image} alt=''/>
                                        </div>
                                        <h2>{item.title}</h2>
                                        <p>{item.paragraph}</p>
                                    </div>
                                </div>
                            ))
                        }

                </div>
             </div>
        </div>
    );
}

export default FifthPage;