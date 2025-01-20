import React from "react"
// q3: import data
import {useInitial} from "./useInitial"

const ComponentPreviews = React.lazy(() => import("./previews"))

export {
    ComponentPreviews,
    useInitial
}