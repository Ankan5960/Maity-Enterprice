import './alertbox.css';
import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import CloseIcon from '../../assets/icons/tsx-componet-icon/close-icon';


interface AlertBoxProps {
  message: string;
  type: 'success' | 'error' | 'waiting';
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
          className={`fixed z-[9999] bottom-3 border-2 bg-opacity-40 backdrop-blur-md ${type === 'success' ? 'border-green-300' : ''} ${type === 'error' ? 'border-red-300' : ''} ${type === 'waiting' ? 'border-yellow-300' : ''} left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-lg w-full max-w-sm ${
            type === 'success' ? 'bg-green-500' : ''} ${type === 'error' ? 'bg-red-500' : ''} ${type === 'waiting' ? 'bg-yellow-500' : ''} text-gray-600 text-center justify-between items-center`}
        >
          <span >{message}</span>
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

