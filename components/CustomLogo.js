import React from 'react';
import styled from 'styled-components';
import {StyleSheet, FlatList} from "react-native";
import CustomItem from "../screens/HomeScreen";

class CustomLogo extends React.Component {
    state = {
        customLogo: [
            {
                image: require("../assets/backlit-blur-couple-556667.jpg"),
                title: "My first app!",
                name: "Nmjuj",
                selectedItem: null
            },
            {
                image: require("../assets/backlit-blur-couple-556667.jpg"),
                title: "My first app!",
                name: "Nmjuj",
                selectedItem: null
            },
            {
                image: require("../assets/backlit-blur-couple-556667.jpg"),
                title: "My first app!",
                name: "Nmjuj",
                selectedItem: null
            }]
    };
    itemSelectedItem = key => {
        alert("i am here");
        /*this.setState(prevState=>{
            return {
                selectedItem: prevState.customLogo.find(place=>{
                    return place.key === key;
                })
            }
        })*/
    }

    render() {
        return (
            <FlatList
                style={styles.listContainer}
                data={this.state.customLogo}
                renderItem={(info) => (
                    <CustomItem
                        image={info.item.image}
                        title={info.item.title}
                        name={info.item.name}
                        onItemPressed={() => this.itemSelectedItem(info.item.key)}/>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        )
    }
}

export default CustomLogo;

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});