import React from 'react';
import './LoginForm.css'
import {Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import {schema} from "../Schema/Schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {RegisterAsync} from "../../Redux/LoginSlice";
import {useNavigate} from 'react-router';
function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    });
    const submitForm = (data) => {
        dispatch(RegisterAsync(data));
        navigate("/");
    };

    return (
        <div className="container-form">
            <span className="big-circle">
            </span>
            <img src="" className="square" alt=""/>
            <div className="form-container">
                <div className="contact-info">
                    <h3 className="title-contact-us">Let's get in touch</h3>
                    <p className="text">
                        Fill up the form and our Team will get back to you within 15 minutes or will going to call you.
                    </p>

                    <div className="info">
                        <div className="information">
                            <img src="" className="icon" alt=""/>
                            <p>Zaytuna Bay /Beirut</p>
                        </div>
                        <div className="information">
                            <img src="" className="icon" alt=""/>
                            <p>Ali's Cell</p>
                        </div>
                        <div className="information">
                            <img src="" className="icon" alt=""/>
                            <p>+961 7 14 64 34</p>
                        </div>
                    </div>

                    <div className="social-media">
                        <p>Connect with us :</p>
                        <div className="social-icons">
                            <Link to="#">
                                <i className="fab fa-facebook-f"/>
                            </Link>
                            <Link to="#">
                                <i className="fab fa-twitter"/>
                            </Link>
                            <Link to="#">
                                <i className="fab fa-instagram"/>
                            </Link>
                            <Link to="#">
                                <i className="fab fa-linkedin-in"/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <span className="circle one">
                    </span>
                    <span className="circle two">
                    </span>
                    <form className='form-fill' onSubmit={handleSubmit(submitForm)}>
                        <h3 className="title-contactus">Register Form</h3>
                        <div className="input-container">
                            <input type="text" {...register('name')} className="input" placeholder='Username'/>
                            <p>{errors.name?.message}</p>
                        </div>
                        <div className="input-container">
                            <input type="email" {...register("email")} className="input" placeholder='Enter Email'/>
                            <p>{errors.email?.message}</p>
                        </div>
                        <div className="input-container">
                            <input type="text" {...register("password")} className="input" placeholder='Enter password'/>
                            <p>{errors.password?.message}</p>
                        </div>
                        <input type="submit" value="Send" className="btn-submit"/>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default LoginForm;