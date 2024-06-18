import { Image, TouchableOpacity } from "react-native"
import { BoxOne, BoxThree, ContainerBoxs } from "../PostFeed/style"
import { BoxOneExplorar, BoxThreeExplorar, BoxTwoExplorar } from "./style"
import { TitleDefault } from "../Text/style"

export const CardExplorar = ({ dadosLocal, navigation }) => {
    return (
        <TouchableOpacity style={{ margin: 12 }} onPress={() => navigation.navigate("InfoLocal", {local: dadosLocal})}>
            <BoxOneExplorar>
                <BoxTwoExplorar>
                    <BoxThreeExplorar>
                        <Image
                            style={{
                                width: `100%`,
                                height: `70%`,
                            }}
                            source={{ uri: (dadosLocal.imagem !== "Erro ao buscar imagem" && dadosLocal.imagem !== "Url não encontrada") ? dadosLocal.imagem : `https://voyagerblobstorage.blob.core.windows.net/voyagercontainerblob/ImagemLocal_Default.jpg`}}
                        />

                        <TitleDefault style={{
                            bottom: 12,
                            fontFamily: `MoonGet`,
                            fontSize: 15,
                            lineHeight: 30,
                            width: 120,
                            textAlign: `center`
                        }}
                        >{dadosLocal.nome.substr(0, 15)}{dadosLocal.nome.length <= 15 ? "" : "..."}</TitleDefault>
                    </BoxThreeExplorar>
                </BoxTwoExplorar>
            </BoxOneExplorar>
        </TouchableOpacity>
    )
}