import { Image, TouchableOpacity } from "react-native"
import { BoxOne, BoxThree, ContainerBoxs } from "../PostFeed/style"
import { BoxOneExplorar, BoxThreeExplorar, BoxTwoExplorar } from "./style"
import { TitleDefault } from "../Text/style"

export const CardExplorar = ({ dadosLocal, navigation }) => {
    return (
        <TouchableOpacity style={{ margin: 12 }} onPress={() => navigation.navigate("InfoLocal")}>
            <BoxOneExplorar>
                <BoxTwoExplorar>
                    <BoxThreeExplorar>
                        <Image
                            style={{
                                width: `100%`,
                                height: `70%`,
                            }}
                            source={{ uri: dadosLocal.imagem }}
                        />

                        <TitleDefault style={{
                            bottom: 12,
                            fontFamily: `MoonGet`
                        }}
                        >{`${dadosLocal.nome.substr(0, 17)} ${(dadosLocal.nome.lenght > 18) ? "..." : ""}`}</TitleDefault>
                    </BoxThreeExplorar>
                </BoxTwoExplorar>
            </BoxOneExplorar>
        </TouchableOpacity>
    )
}