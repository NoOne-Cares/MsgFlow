import { ReactFlow, type Connection, type EdgeChange, type NodeChange, type Node, Background, type Edge, Panel, useReactFlow, Controls } from "@xyflow/react"
import { addNodeAtom, edgesAtom, nodesAtom, onConnectAtom, onEdgesChangeAtom, onNodesChangeAtom, selectedNode } from "../store/NodeStore"
import { useAtom } from "jotai"
import React, { useEffect } from "react";
import '@xyflow/react/dist/style.css';
import NodeModals from "../components/Pannel/NodeModals";
import { v4 as uuid } from "uuid";
import MessageNode from "../components/nodes/MessageNode";
import NodeInput from "../components/Pannel/NodeInput";
import { RandomNode } from "../constants/RandomNode";




const WorkFlow = () => {
    const [nodes, setNodes] = useAtom(nodesAtom);
    const [edges, setEdges] = useAtom(edgesAtom);
    const [, onNodesChange] = useAtom(onNodesChangeAtom);
    const [, onEdgesChange] = useAtom(onEdgesChangeAtom);
    const [, onConnect] = useAtom(onConnectAtom);
    const [, addNode] = useAtom(addNodeAtom)
    const [selectNode, setSelecetdNode] = useAtom(selectedNode)
    const { screenToFlowPosition } = useReactFlow()

    // load save nodes and edges form loacl storage if present
    useEffect(() => {
        const savedNodes = localStorage.getItem("saved-nodes");
        const savedEdges = localStorage.getItem("saved-edges");

        if (savedNodes && savedEdges) {
            try {
                const parsedNodes: Node[] = JSON.parse(savedNodes);
                const parsedEdges: Edge[] = JSON.parse(savedEdges);

                setNodes(parsedNodes);
                setEdges(parsedEdges);
                console.log("✅ Loaded saved workflow from localStorage.");
            } catch (error) {
                console.error("fail to load data from storage" + error);
            }
        } else {
            addRandomNode()
        }
    }, [])

    // Type of custom node
    // For now only messageg node is present
    const nodeTypes = {
        message: MessageNode
    }

    // Cecks the connection and prevent the nodes to connect to itself
    const isValidConnection = (connection: Connection | Edge) => {
        const { source, target } = connection
        if (source === target) return false
        return true
    }

    // if no node is present in local storage this is used to add a node in a random position
    const addRandomNode = () => {
        const newNode: Node = RandomNode
        addNode(newNode);
    }

    // update the selcted node when click on Node
    const onNodeClick = (event: React.MouseEvent, node: Node) => {
        setSelecetdNode(node)
        console.log(selectNode)
    }

    // update the selected node when node is not selected
    const onPannelClick = () => {
        setSelecetdNode(undefined)
    }

    // create new Node when drag is over
    const onDragOver: React.DragEventHandler<HTMLDivElement> = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    }
    const onDrop: React.DragEventHandler<HTMLDivElement> = (event) => {
        event.preventDefault()
        const type = event.dataTransfer.getData("application/reactflow");
        // if no type is present noting happens
        if (!type) return

        // position of mouse pointer
        const postion = screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
        })

        // new Node initate and added to the store
        const dropNode: Node = {
            id: uuid(),
            type: type,
            position: { x: postion.x, y: postion.y },
            data: {
                value: "new message"
            },

        }
        addNode(dropNode)
    }

    return (
        <div style={{ width: '99vw', height: '92vh' }}>
            <ReactFlow
                nodes={nodes}
                nodeTypes={nodeTypes}
                edges={edges}
                onNodesChange={(changes: NodeChange[]) => onNodesChange(changes)}
                onEdgesChange={(changes: EdgeChange[]) => onEdgesChange(changes)}
                onConnect={(connection: Connection) => onConnect(connection)}
                isValidConnection={isValidConnection}
                onDragOver={onDragOver}
                onDrop={onDrop}
                onNodeClick={onNodeClick}
                onPaneClick={onPannelClick}
            >
                <Background />
                <Panel position="top-right" style={{
                    border: '1px solid #ccc',
                    width: 250,
                    paddingTop: 0,
                    height: '95%', background: "white",
                    borderRadius: 10
                }}>
                    {selectNode === undefined ? (
                        <NodeModals />
                    ) : (
                        <NodeInput node={selectNode} />
                    )}

                </Panel>
                <Controls />
            </ReactFlow>
        </div>
    )
}

export default WorkFlow