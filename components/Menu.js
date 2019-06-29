import React from 'react';
import styled from 'styled-components';
import Animated from 'react-native-reanimated';
import * as Icon from '@expo/vector-icons';
import {TouchableOpacity, Dimensions} from "react-native";
import { connect } from 'react-redux';

function mapStateToProps(state){
    return { action: state.action};
}
function mapDispatchToProps(dispatch){
return{
    closeMenu: ()=> dispatch({
        type:"CLOSE_MENU"
    })
};
}

const screenHeight = Dimensions.get("window").height;
class Menu extends React.Component{
    state = {
        top: new Animated.Value(screenHeight)
    };
    componentDidMount(){
this.toggleMenu();
    };
    componentDidUpdate() {
        this.toggleMenu();
    }

    toggleMenu = () => {
        if(this.props.action = 'openMenu'){
            Animated.spring(this.state.top, {
                toValue: 0
            }).start();
        }
        if(this.props.action = 'closeMenu')
        Animated.spring(this.state.top, {
            toValue: screenHeight
        }).start();

    };
    render(){
        return (
            <AnimatedContainer style = {{ top: this.state.top}}>
                <Cover/>
                <TouchableOpacity onPress={this.props.closeMenu}
                                  style={{
                                      marginLeft: "50%",
                                  }}>
                <CloseView>
                    <Icon.Ionicons name="ios-close" size={44}/>
                </CloseView>
                </TouchableOpacity>
                <Content/>
            </AnimatedContainer>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
const CloseView = styled.View`

`;
const Container = styled.View`
position: absolute;
background: white;
width: 100%;
height: 100%;
z-index: 100;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);
const Cover = styled.View`
height: 142px;
background: black;
`;
const Content=styled.View`
height: ${screenHeight};
background: #f0f3f5;
`;
