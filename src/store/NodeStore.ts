import { atom } from 'jotai'
import {
    type Node,
    type Edge,
    type Connection,
    applyNodeChanges,
    applyEdgeChanges,
    addEdge,
    MarkerType,
    type NodeChange,
    type EdgeChange,
} from '@xyflow/react'
import { v4 as uuid } from "uuid"




// Atoms
export const nodesAtom = atom<Node[]>([])
export const edgesAtom = atom<Edge[]>([])
export const selectedNode = atom<Node | undefined>()

export const addNodeAtom = atom(
    null,
    (get, set, node: Node) => {
        set(nodesAtom, [...get(nodesAtom), node])
    }
)

// Handle node changes
export const onNodesChangeAtom = atom(
    null,
    (get, set, changes: NodeChange[]) => {
        set(nodesAtom, applyNodeChanges(changes, get(nodesAtom)))
    }
)

// Handle edge changes
export const onEdgesChangeAtom = atom(
    null,
    (get, set, changes: EdgeChange[]) => {
        set(edgesAtom, applyEdgeChanges(changes, get(edgesAtom)))
    }
)

// Handle new connection
export const onConnectAtom = atom(
    null,
    (get, set, connection: Connection) => {
        const edge: Edge = {
            id: uuid(),
            ...connection,
            type: 'smoothstep',
            animated: true,
            markerEnd: {
                type: MarkerType.Arrow,
                height: 20,
                width: 20,
            },
        }
        set(edgesAtom, addEdge(edge, get(edgesAtom)))
    }
)

