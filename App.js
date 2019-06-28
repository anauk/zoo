import React from 'react';
import styled from 'styled-components';



class App extends React.Component{

    render() {
        return (
            <Container>
                {customLogo.map((customLogo, index)=>(

                    <CustomList key={index}>
                        <Avatar image={customLogo.image}/>
                        <Title>{customLogo.title}</Title>
                        <Name>{customLogo.name}</Name>
                    </CustomList>


                ))}


            </Container>
        );
    }
}
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
const Container = styled.View`
flex: 1;
background-color: #f0f3f5;
justify-content: center;

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
const CustomList = styled.View`
width: 100%;
padding-left: 80px;
margin-top: 20px;
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
    }
]

export default App;