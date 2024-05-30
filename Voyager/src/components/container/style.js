import { FlatList } from "react-native";
import styled from "styled-components";

export const Container = styled.SafeAreaView`
flex: 1; 
align-items:center;
`

export const ContainerFeed = styled.ScrollView`
    width: 100%;
    background: yellow;
`

export const ListFeed = styled(FlatList)`
    width: 100%;
`