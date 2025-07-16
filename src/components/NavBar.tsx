import { useAtom } from "jotai"
import { edgesAtom, nodesAtom } from "../store/NodeStore"
import { useState } from "react"
import { countUnconnectedHnadles } from "../utils/CountUnconnectedHandle"



//Nave Bar which also handle the save funccionality
const NavBar = () => {

    const [nodes] = useAtom(nodesAtom)
    const [edges] = useAtom(edgesAtom)
    const [message, setMessage] = useState<string | null>(null)
    const [messageType, setMessageType] = useState<'success' | 'error' | null>(null)

    // Save the nodes and edges based on the no of unConnected Handels
    const handleSave = () => {

        const unconnectedSourceCount = countUnconnectedHnadles(nodes, edges)

        if (unconnectedSourceCount <= 1 || nodes.length == 2) {

            localStorage.setItem('saved-nodes', JSON.stringify(nodes))
            localStorage.setItem('saved-edges', JSON.stringify(edges))
            setMessage('Workflow saved to local storage.')
            setMessageType('success')

        } else {
            setMessage('Please connect more source handles before saving.')
            setMessageType('error')
        }

        //remove the element after 4 secons
        setTimeout(() => {
            setMessage(null)
            setMessageType(null)
        }, 4000)
    }


    return (
        <div className="w-full h-10 bg-gray-100 relative">
            <div>
                {message && (
                    <div
                        className={`fixed top-5  px-4 py-2 rounded shadow-md text-white transition-opacity duration-300 ${messageType === 'success' ? 'bg-green-600 left-[40%]' : 'bg-red-500 left-[35%]'
                            }`}
                    >
                        {message} </div>)}
            </div>
            <button onClick={handleSave} className="absolute right-28 top-1/2 -translate-y-1/2 bg-blue-300 p-0.5 w-20 rounded-sm">Save</button>
        </div>
    )
}

export default NavBar