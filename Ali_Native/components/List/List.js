import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    ActivityIndicator,
} from "react-native";
import Content from "../Content/Content";
import SearchBar from "../SearchBar/SearchBar"
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [fakeData, setFakeData] = useState();

    // get data from the fake api endpoint
    useEffect(() => {
        const getData = async () => {
            const apiResponse = await fetch(
                `http://192.168.10.111:8000/api/user/get/users/filter?firstname=${searchPhrase}`
            ,{
                    method:"GET",
                    headers:{
                        'Content-Type':'application/json',
                        Accept:'application/json',
                        Authorization: `Bearer ${await AsyncStorage.getItem("access_token")}`,
                    }
                });
            const data = await apiResponse.json();
            console.log("data",data.data)
            setFakeData(data.data);
        };
        getData();
    }, [searchPhrase]);

    return (
        <SafeAreaView style={styles.root}>
            {!clicked && <Text style={styles.title}>Users</Text>}
            <SearchBar
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                clicked={clicked}
                setClicked={setClicked}
            />
                <Content
                searchPhrase={searchPhrase}
                data={fakeData}
                setClicked={setClicked}
                />
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    root: {
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        width: "100%",
        marginTop: 20,
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: "10%",
    },
});