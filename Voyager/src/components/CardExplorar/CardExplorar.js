import { Image, TouchableOpacity } from "react-native"
import { BoxOne, BoxThree, ContainerBoxs } from "../PostFeed/style"
import { BoxOneExplorar, BoxThreeExplorar, BoxTwoExplorar } from "./style"
import { TitleDefault } from "../Text/style"

export const CardExplorar = ({ urlImage, title }) => {
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
                            source={{ uri: urlImage }}
                        />

                        <TitleDefault style={{
                            bottom: 12,
                            fontFamily: `MoonGet`
                        }}
                        >{title}</TitleDefault>
                    </BoxThreeExplorar>
                </BoxTwoExplorar>
            </BoxOneExplorar>
        </TouchableOpacity>
    )
}