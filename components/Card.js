import React from 'react';
import styled from 'styled-components';

const Card = props => (
    <Container>
        <Cover>
            <Image source={props.image}/>
            <Title>{props.title}</Title>
        </Cover>
        <Content>
            <Logo source={props.logo}/>
            <Wrapper>
            <Caption>{props.caption}</Caption>
            <Subtitle>{props.subtitle}</Subtitle>
            </Wrapper>
        </Content>
    </Container>
);
export { Card };
const Container = styled.View`
background:  white;
width: 315px;
height: 280px;
border-radius: 15px;
margin-left: 20px;
margin-top: 20px;
box-shadow: 0 5px 15px rgba(0,0,0,0.15);
`;
const Cover = styled.View`
width: 100%;
height: 200px;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
overflow: hidden;
`;
const Title = styled.Text`
color: white;
font-weight: bold;
font-size: 24px;
margin-top: 20px;
margin-left: 20px;
`;
const Image = styled.Image`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
`;
const Content = styled.View`
padding-left: 20px;
flex-direction: row;
align-items: center;
height: 80px;
`;
const Wrapper = styled.View`
margin-left: 10px;
`;
const Logo = styled.Image`
width: 44px;
height: 44px;
`;
const Caption = styled.Text`
color: #3c4560;
font-weight: 600;
font-size: 24px;
`;
const Subtitle = styled.Text`
color: #b8bece;
font-size: 14px;
font-weight: 600;
text-transform: uppercase;
margin-top: 2px;
`;