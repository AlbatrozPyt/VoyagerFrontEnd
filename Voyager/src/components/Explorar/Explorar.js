import { FlatList, ScrollView } from "react-native"
import { CardExplorar } from "../CardExplorar/CardExplorar"
import { SearchBar } from "../Search/style"
import { ContainerExplorar, ContainerList } from "./style"
import { Grid } from "react-native-easy-grid"

const mock = [
    {
        urlImage: `https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcS0t1lRSt7T8t5S5RyaAzku91R8RgkBboglEoGIsO32kuQyeIagmKFF9HSf-Obg8wTm7ahRQNTgfvjgjwmvRsuJTRCItDc3Yaw5K5uMOw`,
        title: `cuba`,
        id: 1
    },
    {
        urlImage: `https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcS0t1lRSt7T8t5S5RyaAzku91R8RgkBboglEoGIsO32kuQyeIagmKFF9HSf-Obg8wTm7ahRQNTgfvjgjwmvRsuJTRCItDc3Yaw5K5uMOw`,
        title: `cuba`,
        id: 2
    },
    {
        urlImage: `https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcS0t1lRSt7T8t5S5RyaAzku91R8RgkBboglEoGIsO32kuQyeIagmKFF9HSf-Obg8wTm7ahRQNTgfvjgjwmvRsuJTRCItDc3Yaw5K5uMOw`,
        title: `cuba`,
        id: 3
    },
    {
        urlImage: `https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcS0t1lRSt7T8t5S5RyaAzku91R8RgkBboglEoGIsO32kuQyeIagmKFF9HSf-Obg8wTm7ahRQNTgfvjgjwmvRsuJTRCItDc3Yaw5K5uMOw`,
        title: `cuba`,
        id: 4
    },
]

export const Explorar = () => {
    return (
        <ContainerExplorar>
            <SearchBar placeholder={`Explorar...`} />
            <ContainerList>
                <Grid style={{padding: 15}}>
                    <FlatList
                        horizontal={false}
                        data={mock}
                        renderItem={({ item }) => <CardExplorar urlImage={item.urlImage} title={item.title} />}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                    />
                </Grid>
            </ContainerList>
        </ContainerExplorar>
    )
}