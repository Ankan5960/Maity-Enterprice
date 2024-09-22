import React,{useEffect, useState} from 'react';
import emailjs from 'emailjs-com';
import AlertBox from '../../Alert-box/alert-box-component';


const Contact: React.FC = () => {
  const[email,setEmail]=useState("");
  const [name,setName]=useState("");
  const [message,setMessage]=useState("");
  const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error' | 'waiting' } | null>(null);
  const [waitText, setWaitText] = useState('Wait.');

  const userId=process.env.REACT_APP_EMAILJS_API_KEY;
 
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (alert?.type === 'waiting') {
      interval = setInterval(() => {
        setWaitText((prev) => {
          if (prev === 'Wait.') return 'Wait..';
          if (prev === 'Wait..') return 'Wait...';
          if (prev === 'Wait...') return 'Wait....';
          return 'Wait.';
        });
      }, 500); // Change every half second
    }

    return () => clearInterval(interval); // Clear interval when component unmounts or alert changes
  }, [alert]);
  
  const showAlert = (message: string, type: 'success' | 'error' | 'waiting') => {
    setAlert({ message, type });
  };

  const closeAlert = () => {
    setAlert(null);
  };

  const handelSubmit=(e:React.FormEvent)=>{
    e.preventDefault();

    if(!name || !email || !message){
      showAlert('Please fill all the fields', 'error');
      return;
    }

    const templateParams={
      name,
      email,
      message
    }

    const autoReplyParams = {
      name,
      email, // The customer will receive the auto-reply here
    };

    showAlert('Wait....', 'waiting');

    emailjs
      .send('service_fjlab6h','template_l3d7eqc',templateParams,userId)
      .then(
        (response)=>{
          console.log('SUCCESS!', response.status, response.text);
          showAlert('Message sent successfully!', 'success');
          emailjs
            .send('service_fjlab6h', 'template_y1fgpx3', autoReplyParams,userId)
            .then(
              (autoResponse) => {
                console.log('Auto-reply sent successfully!', autoResponse.status, autoResponse.text);
              },
              (autoErr) => {
                console.log('Failed to send auto-reply', autoErr);
              }
            );
        },
        (err)=>{
          console.log('FAILED...', err);
          showAlert('Failed to send the message. Please try again.', 'error');
        }
      );

      setName('');
      setEmail('');
      setMessage('');
  }
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Contact Us</h2>
        <form className="max-w-lg mx-auto mt-8" onSubmit={handelSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Send</button>
        </form>
        {alert && (
          <AlertBox
            message={alert.type === 'waiting' ? waitText : alert.message}
            type={alert.type}
            onClose={closeAlert}
          />
        )}
      </div>
    </section>
  );
};

export default Contact;
