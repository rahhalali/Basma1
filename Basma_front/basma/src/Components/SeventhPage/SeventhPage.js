import React from 'react';
import './SeventhPage.css';
import Google from '../../Images/images/google-play.png'
import Apple from '../../Images/images/app-store.png'
function SeventhPage(props) {
    return (
        <div className='seventh'>
            <div className='seventh-inner'>
                <div className='seventh-info'>
                    <h1>BASMA is available for all devices</h1>
                    <p className='information'>sApp is available for all devices, consectetur adipisicing elit. Itaque at harum quam explicabo.
                        Aliquam
                        optio, delectus, dolorem quod neque eos totam. Delectus quae animi tenteur coluptates doloribus
                        commodi
                        dicta modi aliquid deserunt, quis maiores nescuint autem, aperiam natus.</p>
                    <div className='images-container'>
                        <div className='left-image'>
                            <img src={Google} alt=''/>
                        </div>
                        <div className='right-image'>
                            <img src={Apple} alt=''/>
                        </div>
                    </div>
                    <p className='italic'>* Available on iPhone,iPad and all Andriod devices</p></div>

            </div>
        </div>
    );
}

export default SeventhPage;