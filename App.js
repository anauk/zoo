import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import styled from 'styled-components';

import CustomList from './components/CustomList';
class App extends React.Component{

    render() {
        return (
            <Container>
                <SafeAreaView>
                <ScrollView>
                {customLogo.map((customLogo, index)=>(
                    <CustomList key={index}
                        image={customLogo.image}
                        title={customLogo.title}
                        name={customLogo.name}
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

const customLogo = [
    {
        image: require("./assets/minions_PNG17.png"),
        title: "My first app!",
        name: "Nmjuj"
    },
    {
        image: require("./assets/minions_PNG17.png"),
        title: "My first app!",
        name: "Nmjuj"
    },
    {
        image: require("./assets/minions_PNG17.png"),
        title: "My first app!",
        name: "Nmjuj"
    },
    {
        image: require("./assets/minions_PNG17.png"),
        title: "My first app!",
        name: "Nmjuj"
    },
    {
        image: require("./assets/minions_PNG17.png"),
        title: "My first app!",
        name: "Nmjuj"
    },
    {
        image: require("./assets/minions_PNG17.png"),
        title: "My first app!",
        name: "Nmjuj"
    },
    {
        image: require("./assets/minions_PNG17.png"),
        title: "My first app!",
        name: "Nmjuj"
    },
    {
        image: require("./assets/minions_PNG17.png"),
        title: "My first app!",
        name: "Nmjuj"
    },
    {
        image: require("./assets/minions_PNG17.png"),
        title: "My first app!",
        name: "Nmjuj"
    },
    {
        image: require("./assets/minions_PNG17.png"),
        title: "My first app!",
        name: "Nmjuj"
    },
    {
        image: require("./assets/minions_PNG17.png"),
        title: "My first app!",
        name: "Nmjuj"
    },
    {
        image: require("./assets/minions_PNG17.png"),
        title: "My first app!",
        name: "Nmjuj"
    },
    {
        image: require("./assets/minions_PNG17.png"),
        title: "My first app!",
        name: "Nmjuj"
    },
    {
        image: require("./assets/minions_PNG17.png"),
        title: "My first app!",
        name: "Nmjuj"
    }
]

export default App;
