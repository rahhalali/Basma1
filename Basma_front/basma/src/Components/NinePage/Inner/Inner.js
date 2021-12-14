import React from 'react';
import './Inner.css'
import {ReactComponent as Home} from '../../../Images/images/form-house.svg';
import {ReactComponent as Phone} from '../../../Images/images/form-phone.svg';
import {ReactComponent as Mail} from '../../../Images/images/form-mail.svg';
function Inner(props) {
    return (
        <div className='nine-Inner'>
            <div className='Inner-info'>
                <p>Contrary to popular belief,Lorem ipsum is not simple random text. It has roots in a piece of classical Latin literature from 45 BC, making if over 2000 years old.</p>
                <div className='Inner-list'>
                    <li>
                        <div className='image home' >
                            <Home   src={Home} alt=""/>
                        </div>
                        Vestibulum nulla libero, convallis, tincidunt suscipit diam, DC 2002
                    </li>
                    <li>
                        <div className='image '><Phone src={Phone} alt=""/></div>
                        +1 230 456 789-012 345 6789
                    </li>
                    <li>
                        <div className='image'><Mail src={Mail} alt=""/></div>
                        exampledomain@domain.com
                    </li>
                </div>
            </div>
        </div>
    );
}

export default Inner;