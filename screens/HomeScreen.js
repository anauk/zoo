import React from 'react';
import {ScrollView, SafeAreaView, TouchableOpacity, Animated, Easing, StatusBar} from 'react-native';
import styled from 'styled-components';
import CustomItem from '../components/CustomItem';
import Menu from "../components/Menu";
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {action: state.action}
}

function mapDispatchToProps(dispatch) {
    return {
        openMenu: () => dispatch({
            type: "OPEN_MENU"
        })
    }
}

class HomeScreen extends React.Component {
    state = {
        scale: new Animated.Value(1),
        opacity: new Animated.Value(1)
    };

    componentDidUpdate() {
        this.toggleMenu()
    }
    componentDidMount() {
        StatusBar.setBarStyle("dark-content", true);
    }

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

        if(this.props.action == "closeMenu") {
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
        return (
            <RootView>
                <Menu/>
            <AnimatedContainer style={{ transform: [{scale: this.state.scale}], opacity: this.state.opacity }}>

                <SafeAreaView>
                    <ScrollView style={{height: "100%"}}>
                        <TouchableOpacity onPress={this.props.openMenu}>
                            <Avatar source={require('../assets/minions_PNG17.png')}/>
                        </TouchableOpacity>
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

const Container = styled.View`
flex: 1;
background-color: #f0f3f5;
margin-top: 80px;
border-radius: 10px;
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);
const RootView = styled.View`
background: black;
flex: 1;
`;
const Avatar = styled.Image`
width: 44px;
height: 44px;
border-radius: 22px;
margin-left: 20px;`;
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