import React from 'react';
import styled from 'styled-components';

const CustomList = props => (
    <Container>
        <Avatar soutce={props.image}/>
        <Title>{props.title}</Title>
        <Name>{props.name}</Name>
    </Container>
)

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
export default CustomList;