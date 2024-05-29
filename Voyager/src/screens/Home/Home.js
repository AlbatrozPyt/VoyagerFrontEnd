import { StatusBar, Text, View } from "react-native"

import { Container } from "../../components/Container/style";
import { Header } from "../../components/Header/Header";
import { Guia } from "../../components/MenuGuia/MenuGuia";

export const Home = () => {
    return (
        <Container>
            <StatusBar
                barStyle={"light-content"}
                translucent={true}
                backgroundColor={'transparent'}
            />


            <Header />

            <Guia />
        </Container>
    )
}