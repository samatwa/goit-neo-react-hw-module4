import Modal from "react-modal"
import css from "./ImageModal.module.css"
import { useEffect, useState } from "react";

Modal.setAppElement("#root");

const ImageModal = ({ image, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (image) {
      setIsOpen(true);
    }
  }, [image]);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      className={css.modal}
      contentLabel="Image Modal"
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      {image && (
        <>
          <img
            src={image.urls?.regular}
            alt={image.alt_description || "Image"}
            className={css.image}
          />
          <p className={css.details}>
            Author: {image.user.name} | ❤️ {image.likes}
          </p>
          <button onClick={onClose} className={css.closeBtn}>
            Close
          </button>
        </>
      )}
    </Modal>
  );
};

export default ImageModal