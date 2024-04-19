import { ReactNode } from 'react';

interface AlertProps {
  children: ReactNode;
  onClose: () => void;
}

const Alert = (props: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissable">
      {props.children} 
      <button type="button" className="btn-close" onClick={props.onClose} data-bs-dismiss="alert" aria-label="Close">
      </button>
    </div>
  );
}

export default Alert;