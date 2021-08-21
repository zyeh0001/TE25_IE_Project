import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
    console.log("clicked");
    console.log(props.text);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <h1>My todo</h1>
      <div>
        <h2>{props.text}</h2>

        <div>
          <button onClick={deleteHandler}>delete</button>
        </div>
      </div>
      {modalIsOpen ? (
        <Modal onCancel={closeModalHandler} onConform={closeModalHandler} />
      ) : null}
      {modalIsOpen ? <Backdrop onClick={closeModalHandler} /> : null}
    </div>
  );
}
export default Todo;
