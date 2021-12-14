import React, {useEffect, useState} from 'react';
import {Dimensions, Text, View,StyleSheet} from "react-native";
import {
    BarChart,
} from "react-native-chart-kit";
import {Picker} from "@react-native-picker/picker";
import {useDispatch, useSelector} from "react-redux";
import {GetAverageAsync} from "../Redux/GraphSlice";

function Graph(props) {
    const dispatch =useDispatch();
    const graph=useSelector(state=>state.graph);
    const [value,setValue]=useState("");
    console.log('graph',graph);
    useEffect(()=>{
        dispatch(GetAverageAsync({day:value}))
        console.log(value);
    },[value])

    return (
        <View style={styles.all}>
            <View style={styles.container2}>
                <View style={styles.viewpicker}>
                    <Text style={styles.textpicker}>Average Registration</Text>
                    <View style={styles.picker}>
                        <Picker
                            style={styles.MainPicker}
                            onValueChange={(itemValue) => setValue(itemValue)}
                            selectedValue={"----"}

                        >
                            <Picker.Item label={"----"} value="0" />
                                    <Picker.Item
                                        key={1}
                                        label="day"
                                        value="day"
                                    />
                            <Picker.Item
                                key={2}
                                label="week"
                                value="week"
                            />
                            <Picker.Item
                                key={3}
                                label="month"
                                value="month"
                            />
                            <Picker.Item
                                key={4}
                                label="3 months"
                                value="months"
                            />
                            <Picker.Item
                                key={5}
                                label="year"
                                value="year"
                            />

                        </Picker>
                    </View>
                </View>
            </View>
                <View style={styles.graph}>
            <BarChart
                data={{
                    labels: graph.day.map(item=>{
                        return item;
                    }),

                    datasets: [
                        {
                            data:
                                graph.times.map(item=>{
                                    return item;
                                })

                        }
                    ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisLabel="per"
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                bezier

            />
            </View>
        </View>
    );
}

export default Graph;

const styles= StyleSheet.create({
    all:{
      flex:1,
        height:"100%",
         alignItems:"center",
        justifyContent:"space-evenly"
    },
    picker: {
        borderColor: "white",
        backgroundColor: "lightblue",
        borderWidth: 1,
        padding: 20,
        fontSize: 30,
        width: 300,
        borderRadius: 100,
    },
    textpicker: {
        marginLeft:40,
        marginTop: 20,
        fontSize: 20,
        fontWeight: "bold",
    },
    MainPicker: {
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        color: "white",
    },


})