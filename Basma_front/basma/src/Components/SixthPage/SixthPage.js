import React from 'react';
import './SixthPage.css';
import {info} from "../../JSON/SixthData";
import Header from "./Header/Header";
import {Link} from "react-router-dom";
function SixthPage(props) {
    return (
        <div className='sixth'>

            <div className="sixth-inner">
                <div className='sixth-header'>
                    <Header/>
                </div>
                <div className='sixth-card'>
                    {
                        info.map(item=>{
                            return(
                                <div className='sixth-first'>
                                    <div className='sixth-icon'>
                                        <img src={item.image} alt=''/>
                                    </div>
                                    <p className='type'>{item.title}</p>
                                    <p className='price'>$<span>{item.price}</span></p>
                                    {item.paragraphs.map(items=>(
                                        <p>{items.paragraph}</p>
                                    ))}
                                    <button className='sixth-btn'>Sign Up</button>
                                </div>
                            )
                        })
                    }

                </div>
                <div className='footer'>
                    <p>Not sure what to choose? <Link to='#'>Contact Us</Link></p>
                </div>
            </div>
        </div>
    );
}

export default SixthPage;