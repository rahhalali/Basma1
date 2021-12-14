import React from 'react';
import './Content.css'
import Thumb from '../../../Images/images/thumb-1.png'
function Content(props) {
    return (
        <div className='content'>
            <div className='container'>
                <div className='info'>
                    <div className='info-inner'>
                        <h1>
                            Creative way to Showcase your App
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            A alias, aliquam autem facilis illo ipsum minima necessitatibus
                            obcaecati officia, perferendis, quibusdam sunt veniam. Ad cumque deleniti ipsa officiis
                            possimus repudiandae?</p>
                        <div className='button-container'>
                            <button className='btn'>Get Started</button>
                        </div>
                    </div>
                </div>
                <div className='image-container'>
                    <img src={Thumb} alt=''/>
                </div>

            </div>

        </div>

    );
}

export default Content;