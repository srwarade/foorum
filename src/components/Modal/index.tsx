import "./modal.scss";

const Modal = ({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) => {
  return (
    <section className="modal" role="dialog" aria-modal="true">
      <div className="modal-content">
        <p>Functionality Not Implemented..!!</p>
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          Close
        </button>
      </div>
    </section>
  );
};

export default Modal;
