import { useState } from "react"
import Modal from "./components/Modal"
// import Dashbord from "./components/Dashbord"


function App() {

  const[showModal, setShowModal] = useState(false)

  return (
    <div className="h-screen flex flex-col items-center gap-6 bg-slate-950 text-white">
      <h1 className="text-5xl font-bold mt-4">Popup Modal</h1>
      <button onClick={() => setShowModal(true)}
       className="bg-violet-500 px-4 py-2 rounded-lg text-lg font-medium ">Get the eBook</button>
      {showModal && <Modal onClose={() => setShowModal(false)}/>}
    </div>

    // <Dashbord/>
  )
}

export default App
