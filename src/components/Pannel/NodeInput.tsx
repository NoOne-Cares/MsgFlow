
import { useReactFlow, type Node } from '@xyflow/react'
import type { MsgFlowNodeData } from '../../types/inxed'
import { useEffect, useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { useAtom } from 'jotai';
import { selectedNode } from '../../store/NodeStore';


const NodeInput = ({ node }: { node: Node<MsgFlowNodeData> }) => {
    const { updateNodeData } = useReactFlow()
    const [nodeValue, setNodeVlaue] = useState<string>(`${node?.data?.value || ""}`)
    const [, setSelectedNode] = useAtom(selectedNode)
    const handleClick = () => {
        setSelectedNode(undefined)
    }
    useEffect(() => {
        setNodeVlaue(`${node?.data?.value || ""}`);
    }, [node.id, node.data?.value]);
    return (
        <div>
            <div className='flex border'>
                <div className='pt-1'
                    onClick={handleClick}
                >
                    <IoIosArrowBack />
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <div className="font-semibold">
                        {node?.type?.toUpperCase()}
                    </div>
                </div>
            </div>
            <div>
                <div className='p-3 text-sm text-gray-500'>Text</div>
                <div className="flex-1 flex justify-center items-center">
                    <input
                        type="text"
                        value={nodeValue}
                        onChange={(e) => {
                            const newValue = e.target.value;
                            setNodeVlaue(newValue);
                            updateNodeData(node.id, { value: newValue });
                        }}
                        className="border rounded px-3 py-2 overflow-auto h-auto text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
        </div>
    )
}

export default NodeInput