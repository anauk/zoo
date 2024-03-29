import React from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import * as Icon from '@expo/vector-icons';

const CustomItem = ({ image, title, name, onItemPressed }) => (
    <TouchableOpacity onPress={onItemPressed}>
    <Container >
        <Avatar source={image}/>
        <Title>{title}</Title>
        <Name>{name}</Name>
        <Icon.Ionicons
            name="ios-arrow-forward"
        size={32}
        color="#b8bece"
        style={{position:"absolute", right: 20, top: 5}}/>
    </Container>
    </TouchableOpacity>
);

const Avatar = styled.Image`
width: 44px;
height: 44px;
background: black;
border-radius: 22px;
margin-left: 20px;
position: absolute;
top: 0;
left: 0;
`;

const Title = styled.Text`
font-size: 16px;
color: #b8bece;
font-weight: 500;
`;
const Name = styled.Text`
color: #3c4560;
font-weight: 500;
`;

const Container = styled.View`
width: 100%;
padding-left: 80px;
margin-top: 20px;
margin-bottom: 20px;
`;
export { CustomItem };