import { type Node } from "@xyflow/react";
// just a random message which is creatd when there's nothing in the loacl storage
export const RandomNode: Node = {
    id: "1",
    type: 'message',
    position: { x: Math.random() * 400, y: Math.random() * 400 },
    data: {
        value: "new message 2"
    },
};