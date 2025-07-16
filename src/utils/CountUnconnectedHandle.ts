
import type { Edge, Node } from "@xyflow/react"


// function to count the no of uncnneccted handles
export const countUnconnectedHnadles = (nodes: Node[], edges: Edge[]): number => {

    const sourceHandleId = "right"

    //save all the edded with as a combination of source node id and source node handle
    const connectedSources = new Set<string>(
        edges
            .filter((edge) => edge.sourceHandle === sourceHandleId)
            .map((edge) => `${edge.source}:${edge.sourceHandle}`)
    )

    let unconnectedSourceCount = 0

    //for it's node check the id is presnt in the connected Source
    nodes.forEach((node) => {
        const key = `${node.id}:${sourceHandleId}`
        //if not prsent incre the count
        if (!connectedSources.has(key)) {
            unconnectedSourceCount++
        }
    })

    // return the no of unconneccted source handle
    return unconnectedSourceCount;
}
