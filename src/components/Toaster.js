import React,{useState} from 'react';

import { Button, Modal} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Toaster() {
    const notify = () => toast.success("Wow so easy !",{
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
  
    return (
      <div className="mt-3">
        <Button onClick={notify}>Notify !</Button>
        <ToastContainer />
      </div>
    );
}
  