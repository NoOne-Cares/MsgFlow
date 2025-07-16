import './App.css'
import { Provider } from 'jotai'
import { ReactFlowProvider } from '@xyflow/react'
import WorkFlow from './workflow/WorkFlow'
import NavBar from './components/NavBar'


function App() {


  return (
    <>
      <Provider>
        <ReactFlowProvider>
          <NavBar />
          <WorkFlow />
        </ReactFlowProvider>
      </Provider>
    </>
  )
}

export default App
