import React from "react"
import {useInitial} from "./useInitial"

const ComponentPreviews = React.lazy(() => import("./previews"))
// Q5: false jsx is not needed to create react component
export {
    ComponentPreviews,
    useInitial
}