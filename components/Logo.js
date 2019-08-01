import React from 'react';
import styled from 'styled-components';

const Logo = ({ image, text })=>(
    <Container>
        <Image source={image} resizeMode="contain"/>
        <Text>{text}</Text>
    </Container>
);

export default Logo;

const Container = styled.View`
flex-direction: row;
background: white;
height: 60px;
padding: 12px;
border-radius: 8px;
box-shadow: 0 5px 10px rgba(0,0,0,0.05);
margin: 0 8px;`;

const Image = styled.Image`
width: 33px;
height: 33px;`;

const Text = styled.Text`
font-weight: 600;
font-size: 24px;
margin-left: 8px;`;