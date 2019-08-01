import React from 'react';
import {ScrollView, SafeAreaView, TouchableOpacity, Animated, Easing, StatusBar, Text} from 'react-native';
import styled from 'styled-components';
import Menu from "../components/Menu";
import {connect} from 'react-redux';
import Avatar from '../components/Avatar';
import { Card, CustomItem } from '../components';
import * as Icon from '@expo/vector-icons';
import Logo from '../components/Logo';

// import ApolloClient from 'apollo-boost';
//import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import {CardsQuery} from '../shema'
/*const CardsQuery = gql`{
cardsCollection{
items{
title
subtitle
image{
title
description
contentType
fileName
size
url
width
height
}
subtitle
caption
logo{
title
description
contentType
fileName
size
url
width
height
}}}
}`;*/

function mapStateToProps(state) {
    return {action: state.action, name: state.name, cards: {cards}}
}

function mapDispatchToProps(dispatch) {
    return {
        openMenu: () => dispatch({
            type: "OPEN_MENU"
        }),
        getAllCards: () => dispatch({
            type: 'GET_ALL_CARDS'
        })
    }
}

class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    };
    state = {
        scale: new Animated.Value(1),
        opacity: new Animated.Value(1)
    };
    componentWillMount() {
        // firebase.database().ref('cards').once('value', (data)=>{
        //     console.log(data, '=========data')
        // })
        // const firebaseConfig = {
        //     apiKey: "AIzaSyBez85i-Lo2fmeFRMDWjL7vjFZ8Y6D-ZHM",
        //     authDomain: "zoo1-deccb.firebaseapp.com",
        //     databaseURL: "https://zoo1-deccb.firebaseio.com",
        //     projectId: "zoo1-deccb",
        //     storageBucket: "",
        //     messagingSenderId: "905890822555",
        //     appId: "1:905890822555:web:4c0bcdfdc1bbc0f1"
        // };
        // console.log(firebaseConfig, '=========firebase');
        /*firebase.database().ref('/cards/3').set(
          {
              title: "My works",
              image: require('https://cdn.serif.com/affinity/img/photo/home/0619/og-affinity-photo-200520190824.jpg'),
              logo: require('https://cdn.serif.com/affinity/img/photo/home/0619/og-affinity-photo-200520190824.jpg'),
              caption: "Tttttt",
              subtitle: "nhmjmmm"
          }
        ).then(()=>{
            console.log('-------INSERTED!')
        }).catch((e) => {
            console.log(e)
        })*/
    }

    componentDidUpdate() {
        this.toggleMenu()
    }

    componentDidMount() {
        StatusBar.setBarStyle("dark-content", true);
    }
    // getAllCards() {
    //     firebase.database().ref('/cards/')
    //       .on('value', (snapshot) => {
    //           if (snapshot.val()) {
    //               dispatch({ type: 'GET_ALL_CARDS', payload: Object.values(snapshot.val()) })
    //           }
    //       })
    // }

    toggleMenu = () => {
        if (this.props.action == "openMenu") {
            Animated.timing(this.state.scale, {
                toValue: 0.9,
                duration: 300,
                easing: Easing.in()
            }).start();

            Animated.spring(this.state.opacity, {
                toValue: 0.5
            }).start();

            StatusBar.setBarStyle("light-content", true);
        }

        if (this.props.action == "closeMenu") {
            Animated.timing(this.state.scale, {
                toValue: 1,
                duration: 300,
                easing: Easing.in()
            }).start();

            Animated.spring(this.state.opacity, {
                toValue: 1
            }).start();

            StatusBar.setBarStyle("dark-content", true);
        }
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
    itemSelectedHandler = key => {
        console.log('key', key);
    };

    render() {
        // console.log(this.props.getAllCards, '---------cards from render');
        return (
            <RootView>
                <Menu/>
                <AnimatedContainer style={{transform: [{scale: this.state.scale}], opacity: this.state.opacity}}>
                    <SafeAreaView>
                        <ScrollView style={{height: "100%"}}>
                            <TitleBar>
                                <TouchableOpacity onPress={this.props.openMenu}>
                                    <Avatar/>
                                </TouchableOpacity>
                                <Title>Welcome!</Title>
                                <Name>{this.props.name}</Name>
                                <Icon.Ionicons name="ios-notifications"
                                               size={34}
                                               colore="#4775f2"
                                               style={{position: "absolute", right: 20, top: 5}}/>
                            </TitleBar>
                            <ScrollView horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                            >
                                {logos.map((logo, i) => (
                                    <Logo key={i}
                                          image={logo.image}
                                          text={logo.text}
                                    />
                                ))}

                            </ScrollView>
                            <Subtitle>About me</Subtitle>
                            <ScrollView horizontal={true}
                                        style={{paddingBottom: 30}}
                                        showsHorizontalScrollIndicator={false}
                            >
                                {/*<Query query={CardsQuery}>*/}
                                    {/*{({loading, error, data})=>{*/}
                                        {/*if(loading) return <Message>Loading...</Message>;*/}
                                        {/*console.log(data, 'jjjjjjjj');*/}
                                        {/*if(error) return <Message>Error...</Message>;*/}
                                        {/*return <CardsContainer>*/}
                                            {/*{data.cards.map((card, item)=>(*/}
                                              {/*<TouchableOpacity key={i}*/}
                                                                {/*onPress={()=>{*/}
                                                                    {/*this.props.navigation.push("Section", {*/}
                                                                        {/*section: card*/}
                                                                    {/*});*/}
                                                                {/*}}*/}
                                              {/*>*/}
                                                  {/*<Card*/}
                                                    {/*title={card.title}*/}
                                                    {/*image={card.image}*/}
                                                    {/*logo={card.logo}*/}
                                                    {/*caption={card.caption}*/}
                                                    {/*subtitle={card.subtitle}*/}
                                                  {/*/>*/}
                                              {/*</TouchableOpacity>*/}
                                            {/*))}*/}
                                        {/*</CardsContainer>*/}
                                    {/*}}*/}
                                {/*</Query>*/}

                                {cards.map((card, i)=>(
                                    <TouchableOpacity key={i}
                                    onPress={()=>{
                                        this.props.navigation.push("Section", {
                                            section: card
                                        });
                                    }}
                                    >
                                    <Card
                                        title={card.title}
                                        image={card.image}
                                        logo={card.logo}
                                        caption={card.caption}
                                        subtitle={card.subtitle}
                                    />
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>

                            {customLogo.map((customLogo, index) => (
                                <CustomItem key={index}
                                            image={customLogo.image}
                                            title={customLogo.title}
                                            name={customLogo.name}
                                            onItemPressed={this.itemSelectedItem}
                                />
                            ))}
                        </ScrollView>
                    </SafeAreaView>
                </AnimatedContainer>
            </RootView>
        );
    }
}

const Message = styled.Text``;
const CardsContainer = styled.View``;

const Container = styled.View`
flex: 1;
background-color: #f0f3f5;
margin-top: 80px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);
const RootView = styled.View`
background: black;
flex: 1;
`;
const Title = styled.Text``;
const Name = styled.Text``;
const TitleBar = styled.View`
flex-direction: row;
margin: 15px 0;
`;
const Subtitle = styled.Text`
color: #b8bece;
font-weight: 600;
font-size: 15px;
margin-left: 20px;
margin-top: 50px;
text-transform: uppercase;
`;

const customLogo = [
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
    },

]

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const logos = [
    {
        image: require('../assets/minions_PNG17.png'),
        text: 'Trello'
    },
    {
        image: require('../assets/minions_PNG17.png'),
        text: 'Trello'
    },
    {
        image: require('../assets/minions_PNG17.png'),
        text: 'Trello'
    },
];
const cards = [
    {
        title: "My works",
        image: require('../assets/Large_Houston_Landsat.jpg'),
        logo: require('../assets/minions_PNG17.png'),
        caption: "Tttttt",
        subtitle: "nhmjmmm"
    },
    {
        title: "My Photo",
        image: require('../assets/Large_Houston_Landsat.jpg'),
        logo: require('../assets/minions_PNG17.png'),
        caption: "Tttttt",
        subtitle: "nhmjmmm"
    },
    {
        title: "My Hobbie",
        image: require('../assets/Large_Houston_Landsat.jpg'),
        logo: require('../assets/minions_PNG17.png'),
        caption: "Tttttt",
        subtitle: "nhmjmmm"
    },
]