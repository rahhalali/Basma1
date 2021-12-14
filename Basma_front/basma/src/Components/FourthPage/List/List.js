import React, {Fragment, useEffect} from 'react';
import './List.css'
import {useDispatch, useSelector} from "react-redux";
import {GetInfo} from "../../../Redux/FourthPageSlice";
function List() {
    const dispatch=useDispatch();
    const list =useSelector(state=>state.list)
    useEffect(()=>{
        dispatch(GetInfo())
    },[dispatch]);
    return (
        <div className='list-fourth'>
            {
                list.info && list.info.map(item=>{
                    return (
                        <Fragment key={item.id}>
                            <h1>{item.header}</h1>
                            <ul className='third-page-container-info-ul'>
                                {item.info.map(items => (
                                    <li key={items.id}>
                                        <div><i className={items.icon}/></div>
                                        <p>{items.infos}</p>
                                    </li>
                                ))}
                            </ul>
                        </Fragment>
                    );
                })
            }
        </div>
    );
}

export default List;