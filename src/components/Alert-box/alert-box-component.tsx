import './alertbox.css';
import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import CloseIcon from '../../assets/icons/close-icon';


interface AlertBoxProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const AlertBox: React.FC<AlertBoxProps> = ({ message, type, onClose }) => {
  const [show, setShow] = useState(true);

  // Auto close after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose();
    }, 5000); // 10 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  // Manually close the alert
  const handleClose = () => {
    setShow(false);
    onClose();
  };

  return (
    <CSSTransition in={show} timeout={300} classNames="alert" unmountOnExit>
      <div>
        <div
          className={`fixed bottom-3 border-2 ${type === 'success' ? 'border-green-600' : 'border-red-600'} left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-lg w-full max-w-sm ${
            type === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white text-center justify-between items-center`}
        >
          <span>{message}</span>
          <button 
            className="absolute top-2 right-2 text-white hover:text-gray-200"            
            onClick={handleClose}
          >
            <CloseIcon className="w-5 h-5 fill-white"  />
          </button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default AlertBox;

