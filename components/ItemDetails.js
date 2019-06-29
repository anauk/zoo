import React from 'react';
import  { Modal } from 'react-native';
import styled from 'styled-components';

const ItemDetails = props => {
    let modalContent = null;
    if(props.selectedItem){
        modalContent = (
            <ContainerDetail>
                <Avatar soutce={props.selectedItem.image}/>
                <Title>{props.selectedItem.title}</Title>
                <Name>{props.selectedItem.name}</Name>
            </ContainerDetail>
        )
    }
   return (
<Modal click = {props.selectedItem !== null}>
    <ContainerDetail>
        {modalContent}
        <PartButton>
            <MainButton title="Add">Add</MainButton>
        </PartButton>
    </ContainerDetail>
</Modal>
)
};
export default ItemDetails;

const ContainerDetail = styled.View`
margin-top: 20px`;

const Avatar = styled.Image`
width: 100%;
height: 200;
`;
const Title = styled.Text`
font-size: 16px;
color: #b8bece;
font-weight: 500;`;
const Name = styled.Text`
color: #3c4560;
font-weight: 500;`;
const PartButton = styled.View``;
const MainButton = styled.Button``;
