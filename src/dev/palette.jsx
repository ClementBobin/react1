import {Fragment} from "react"
// q1 : car on import sans forcer le default 
import {
    Category,
    Component,
    Variant,
    Palette,
} from "@react-buddy/ide-toolbox"

export const PaletteTree = () => (
    <Palette>
        <Category name="App">
            <Component name="Loader">
                <Variant>
                    <ExampleLoaderComponent/>
                </Variant>
            </Component>
        </Category>
    </Palette>
)

export function ExampleLoaderComponent() {
    return (
        <Fragment>Loading...</Fragment>
    )
}