import { NodeModalList } from "../../constants/nodeModalList"
import React from 'react';
import type { MsgFlowType } from "../../types/inxed";

// Node mode use to create new Node by drag and drop
const NodeModals = () => {

    //Handle Drag event
    const onDragStart = (
        event: React.DragEvent<HTMLDivElement>,
        type: MsgFlowType
    ) => {
        event.dataTransfer.setData("application/reactflow", type);
        event.dataTransfer.effectAllowed = "move";
    }

    return (
        <div className="grid grid-cols-2 gap-4 p-3">
            {NodeModalList.map((component) => (
                <div key={component.id} className="h-15 border border-blue-500 
                rounded-sm align-middle flex justify-center items-center flex-col"
                    draggable={true}
                    onDragStart={(event) => onDragStart(event, component.type)}
                >
                    <div>{component.icon}</div>
                    <div>{component.name}</div>
                </div>
            ))}

        </div>
    )
}

export default NodeModals