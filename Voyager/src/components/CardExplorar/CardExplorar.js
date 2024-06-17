import { Image, TouchableOpacity } from "react-native"
import { BoxOne, BoxThree, ContainerBoxs } from "../PostFeed/style"
import { BoxOneExplorar, BoxThreeExplorar, BoxTwoExplorar } from "./style"
import { TitleDefault } from "../Text/style"

export const CardExplorar = ({ dadosLocal, navigation }) => {
    return (
        <TouchableOpacity style={{ margin: 12 }}>
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
                            fontFamily: `MoonGet`,
                            fontSize: 18,
                            lineHeight: 30,
                            width: 100,
                            textAlign: `center`
                        }}
                        >{`${dadosLocal.nome.substr(0, 10)} ${(dadosLocal.nome.lenght > 18) ? "..." : "..."}`}</TitleDefault>
                    </BoxThreeExplorar>
                </BoxTwoExplorar>
            </BoxOneExplorar>
        </TouchableOpacity>
    )
}