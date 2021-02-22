import { useEffect } from "react";
import ReactDOM from "react-dom";

const modalRoot = document.body; /* getElementById('modal-root') */

const Portal: React.FC = ({ children }) => {
  const el = document.createElement("div");
  el.setAttribute("id", "modal-root");

  useEffect(() => {
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);

  return ReactDOM.createPortal(children, el);
};

export default Portal;
