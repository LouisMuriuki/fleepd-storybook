import { useState } from "react";
import Accordion from "./components/Accordion";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);


  return (
    <div className="p-10">
      <Accordion
        title="React Accordion Component"
        content="This is an Accordion component build exclusively  for the Fleepd team. I hope they like it"
      />
      <div className="mt-12">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowModal(true)}
        >
          Open Modal
        </button>
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title="My Modal"
          content="This is a Modal component build exclusively  for the Fleepd team. I hope they like it"
        />
      </div>
    </div>
  );
}

export default App;
