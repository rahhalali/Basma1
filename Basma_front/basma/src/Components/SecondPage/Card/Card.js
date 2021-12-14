import React, {useEffect} from 'react';
import './Card.css'
import {useDispatch, useSelector} from "react-redux";
import {GetInfo} from "../../../Redux/SecondPageSlice";
function Card() {
    const dispatch=useDispatch();
    const Info = useSelector(state=>state.info);
    console.log('info',Info);
    useEffect(()=>{
        dispatch(GetInfo());
    },[dispatch])
    return (
        <div className='card-inner'>
            {
                Info.info && Info.info.map(item=>(
            <div className='second-page-card' key={item.id}>
                <div className='page-card-container'>
                    <i className={item.icon}></i>
                </div>
                <h2>
                    {item.title}
                </h2>
                <p>
                    {item.description}
                </p>
            </div>
                ))
            }
        </div>
    );
}

export default Card;