import React from 'react';
import FirstPage from "../FirstPage/FirstPage";
import Content from "../FirstPage/Content/Content";
import SecondPage from "../SecondPage/SecondPage";
import ThirdPage from "../ThirdPage/ThirdPage";
import FourthPage from "../FourthPage/FourthPage";
import FifthPage from "../FifthPage/FifthPage";
import SixthPage from "../SixthPage/SixthPage";
import SeventhPage from "../SeventhPage/SeventhPage";
import EightPage from "../EightPage/EightPage";
import NinePage from "../NinePage/NinePage";

function Combine(props) {
    return (
        <div>
            <FirstPage />
            <Content />
            <SecondPage/>
            <ThirdPage/>
            <FourthPage/>
            <FifthPage/>
            <SixthPage/>
            <SeventhPage/>
            <EightPage/>
            <NinePage/>
        </div>
    );
}

export default Combine;