import React, {useEffect} from 'react';
import './List.css'
import {ReactComponent as Icon} from '../../../Images/images/check.svg';
import {useDispatch, useSelector} from "react-redux";
import {GetParagraph} from "../../../Redux/ThirdPageSlice";
function List(props) {
    const dispatch=useDispatch();
    const paragraph =useSelector(state=>state.paragraph)
    useEffect(()=>{
    dispatch(GetParagraph())
    },[dispatch]);
    return (
        <div className='list'>
            {
                paragraph.info && paragraph.info.map(item => {
                    return (
                        <>
                            <h1 key={item.id}>{item.header}</h1>
                            <ul className='third-page-container-info-ul'>
                                {item.info.map(items => (

                                        <li key={items.id}>
                                            <div><Icon className="logo-img"/></div>
                                            <p>{items.infos}</p></li>

                                ))}

                            </ul>
                        </>
                    )

                })
            }

        </div>
    );
}

export default List;