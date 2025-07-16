import { LuMessageCircleMore } from "react-icons/lu"
import { MsgFlowTypes } from "../types/inxed"

// List to show the models in pannl which are used for darg and drop
export const NodeModalList = [
    {
        id: 1,
        name: "Message",
        icon: <LuMessageCircleMore size={25} />,
        type: MsgFlowTypes.message,
    },
]