import React from 'react';

import styled from 'styled-components';
import * as Icon from '@expo/vector-icons';
import {TouchableOpacity, StatusBar, WebView, Linking} from "react-native";


class SectionScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        StatusBar.setBarStyle("light-content", true);
    }

    componentWillUnmount() {
        StatusBar.setBarStyle("dark-content", true);
    }

    render() {
        const {navigation} = this.props;
        const section = navigation.getParam("section");
        return (
            <Container>
                <StatusBar hidden/>
                <Cover>
                    <Imag source={section.image}/>
                    <Wrapper>
                        <Logo source={section.logo}/>
                        <Subtitle>{section.subtitle}</Subtitle>
                    </Wrapper>
                    <Text>{section.title}</Text>
                    <Caption>{section.caption}</Caption>
                </Cover>
                <TouchableOpacity
                    style={{position: "absolute", top: 40, right: 20}}
                    onPress={() => {
                        this.props.navigation.goBack();
                    }}>
                    <Button>
                        <Icon.Ionicons name="ios-close"
                                       size={38}
                                       color="#4775f2"
                        />
                    </Button>
                </TouchableOpacity>
                <Content>
                    <WebView source={{html: htmlContent + htmlStyles}}
                             scalesPageToFit={false}
                             scrollEnabled={false}
                             ref="webview"
                             onNavigationStateChange={event => {
                                 console.log(event);
                                 if (event.url != "about:blank") {
                                     this.refs.webview.stopLoading();
                                     Linking.openURL(event.url);
                                 }

                             }}/>
                </Content>
            </Container>
        )
    }
}

export default SectionScreen;

const htmlContent = `
<h1>Hi, my dear app</h1>
<p>I want to know more</p>
<p>gfhfhfhfh</p>
<a href="https://coursehunters.net/course/react-native-dlya-dizaynerov">My link</a>
`;
const htmlStyles = `
<style>
*{
fomt-family: -apple-system, Roboto;
margin: 0;
padding: 0;
}
</style>`;

const Content = styled.View`
height:100%;
margin-top: 5px`;

const Container = styled.View`
flex:1;
`;
const Text = styled.Text`
font-size: 24px;
color: white;
font-weight: bold;
width: 170px;
position: absolute;
top: 88px;
left: 20px;
`;
const Cover = styled.View`
height: 375px;
`;
const Button = styled.View`
width: 40px
height: 40px;
background: white;
border-radius: 25px;
box-shadow: 0 5px 10px rgba(0,0,0,0.15);
justify-content: center;
align-items: center;
`;
const Caption = styled.Text`
color: white;
position: absolute;
bottom: 20px;
left: 20px;
width: 300px;
font-size: 17px;
`;
const Imag = styled.Image`
width: 100%;
height: 100%;
position: absolute;
`;
const Wrapper = styled.View`
flex-direction: row;
position: absolute;
top: 40px;
left: 20px;
align-items: center;
`;
const Logo = styled.Image`
width: 24px;
height: 24px;
`;
const Subtitle = styled.Text`
color: rgba(255,255,255,0.5);
font-weight: 600;
font-size: 15px;
margin-left: 10px;
text-transform: uppercase;
`;

