import React from 'react';
import { ScrollView, SafeAreaView} from 'react-native';
import styled from 'styled-components';
import ItemDetails from './components/ItemDetails'

import CustomList from './components/CustomList';
import Menu from "./components/Menu";
class App extends React.Component{

    itemSelectedItem = key => {
        alert ("i am here");
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
            <Container>
                {/* <Menu/>*/}
                <SafeAreaView>
                <ScrollView>
                {/* <ItemDetails selectedItem = {customLogo}/>*/}
                {customLogo.map((customLogo, index)=>(
                    <CustomList key={index}
                                image={customLogo.image}
                                title={customLogo.title}
                                name={customLogo.name}
                                onItemPressed={this.itemSelectedItem}
                    />
                    ))}
                 </ScrollView>
                </SafeAreaView>
            </Container>
        );
    }
}

const Container = styled.View`
flex: 1;
background-color: #f0f3f5;
margin-top: 80px;

`;
const Content = styled.View``;
const customLogo = [
    {
        image: require("./assets/backlit-blur-couple-556667.jpg"),
        title: "My first app!",
        name: "Nmjuj",
        selectedItem: null
    },
    {
        image: require("./assets/backlit-blur-couple-556667.jpg"),
        title: "My first app!",
        name: "Nmjuj",
        selectedItem: null
    },
    {
        image: require("./assets/backlit-blur-couple-556667.jpg"),
        title: "My first app!",
        name: "Nmjuj",
        selectedItem: null
    },
    {
        image: require("./assets/backlit-blur-couple-556667.jpg"),
        title: "My first app!",
        name: "Nmjuj",
        selectedItem: null
    },

]

export default App;