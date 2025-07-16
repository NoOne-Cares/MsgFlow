import { type NodeProps, type Node, Handle, Position } from '@xyflow/react'
import { type MsgInputNodeData } from '../../types/inxed'
import { LuMessageCircleMore } from "react-icons/lu"

type MsgInputNodeProp = Node<MsgInputNodeData>

// Custom Message Node
const MessageNode: React.FC<NodeProps<MsgInputNodeProp>> = ({ data: { value } }) => {
    return (
        <div className=' relative h-auto  bg-white w-50  rounded-lg drop-shadow-lg'>
            <div className='flex flex-row pl-1  rounded-t-lg bg-blue-400  align-middle '>
                <div className='pt-1'>
                    <LuMessageCircleMore />
                </div>

                <div>Message</div>

            </div>
            <div className='p-2 text-xs text-gray-700 overflow-hidden overflow-ellipsis min-h-10'>{value}</div>
            <Handle type='source' position={Position.Right} id="right" />
            <Handle type='target' position={Position.Left} id="left" />
        </div>
    )
}

export default MessageNode


// import React from 'react';
// import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';
// import type { ElectricalComponentData } from '../types';
// import { ElectricalComponentType } from '../types';
// import { Capacitor, Inductor, Resistor } from '../icons';
// import { getUnit } from '../utils';
// import type { MsgInputNodeData } from '../../types/inxed';

// type ElectricalComponentNode = Node<ElectricalComponentData>

// const ElectricalComponent: React.FC<NodeProps<ElectricalComponentNode>> = ({ data: { value, type } }) => {

//     const unit = getUnit(type as ElectricalComponentType)

//     return (
//         <div className='relative h-5 w-auto'>
//             {type === ElectricalComponentType.Resistor && <Resistor height={20} />}
//             {type === ElectricalComponentType.Capacitor && <Capacitor height={20} />}
//             {type === ElectricalComponentType.Inductor && <Inductor height={20} />}
//             <div className='font-bold caret-black absolute'>
//                 {value}{unit}
//             </div>
//             <Handle type='source' position={Position.Left} id="left" />
//             <Handle type='source' position={Position.Right} id="right" />
//         </div>
//     );
// };

// export default ElectricalComponent;
