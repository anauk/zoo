import React from 'react';
import styled from 'styled-components';
import * as Icon from '@expo/vector-icons';

const MenuItem = ({ icon, title, text}) => (
    <Container>
        <IconView>
            <Icon.Ionicons name={icon} size={24} colore="#5446bfb"/>
        </IconView>
        <Content>
            <Title>{title}</Title>
            <Text>{text}</Text>
        </Content>
    </Container>
);
const Container = styled.View`
flex-direction: row;
margin: 15px 0;
`;
const IconView = styled.View`
width: 32px;
height: 32px;
justify-content: center;
align-items: center;
`;
const Content = styled.View`
padding-left: 20px;
`;
const Title = styled.Text`
color: #3c4560;
font-size: 24px;
font-weight: 600;
`;
const Text = styled.Text`
color: #3c4560;
opacity: 0.6;
font-weight: 600;
margin-top: 5px;
`;

export default MenuItem;