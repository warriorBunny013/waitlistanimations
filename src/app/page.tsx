'use client'

import React, { useState,useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  const [email, setEmail] = useState('');
  const [option, setOption] = useState('');

  //popup open 
  const [open,setOpen]=useState(false);
  // const [openError,setOpenError]=useState(false);

  const handleChange=(e:any)=>{
    setEmail(e.target.value);
  }
  console.log(email)

  const handleOptions=(e:any)=>{
    setOption(e.target.value)

  }
  console.log(option)
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const handleSubmit=(e:any)=>{
    if(!validRegex.test(email)){
      return toast("type valid email !")
    }
    if(option && email && option!="Choose one option"){
      console.log("submitted")
      setOpen(true);
    }else{
      console.log("type email and choose one option!!")
      toast("type email and choose a option !")
    }
  }

  const handleCut=()=>{
    setOpen(false);
  }

  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ToastContainer />
    <motion.div
      
      
      className="relative mt-20 flex flex-col place-items-center before:absolute md:before:h-[300px] md:before:w-[480px] md:before:-translate-x-1/2 md:before:rounded-full md:before:bg-gradient-radial md: before:from-white md:before:to-transparent md:before:blur-2xl md:before:content-[''] md:after:absolute after:-z-20 md:after:h-[180px] md:after:w-[240px] md:after:translate-x-1/3 md:after:bg-gradient-conic nd: after:from-sky-200 md: after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <motion.div
        
        
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className='font-medium text-transparent text-5xl bg-clip-text bg-gradient-to-b from-slate-600 to-white'>Join the waitlist for the</motion.div>
       <motion.div
 initial={{ opacity: 0, scale: 0.5 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{
   duration: 0.3,
   ease: [0, 0.71, 0.2, 1.01],
   delay:0.6,
   scale: {
     type: "spring",
     damping: 5,
     stiffness: 100,
     restDelta: 0.001
   }
 }}
       
       
       className='font-medium text-transparent font-mono text-5xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-10'>Design Systems!</motion.div>
    
      </motion.div> 
      <motion.div
       initial={{ opacity: 0, scale: 0.5 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{
         duration: 0.8,
         delay: 0.5,
         ease: [0, 0.71, 0.2, 1.01]
       }}
    
       className='flex mb-20 flex-col gap-5'>
        <input type='email' onChange={handleChange} className=' text-white text-sm rounded-lg block w-[50vh] p-2.5  border bg-transparent' placeholder='Email address...'/>

{/* <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}
<select onChange={handleOptions} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[50vh]">
  <option>Choose one option</option>
  <option value="company">Company</option>
  <option value="tester">Tester</option>
</select>

    <button type='button' onClick={handleSubmit} className='text-white bg-gradient-to-r w-[50vh] from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Submit</button>
      </motion.div>

      {open && <motion.div
       initial={{ opacity: 0, scale: 0.5 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{
         duration: 0.8,
         delay: 0.5,
         ease: [0, 0.71, 0.2, 1.01]
       }}
       style={{ backgroundColor: "rgba(0,0,0,0.5)", position: "fixed",height: "100%", width: "100%", top: 0,left: 0, display: "flex" ,alignItems: "center",justifyContent: "center",overflow: "auto",zIndex: 99999}}>
        <div className=' bg-gradient-to-t from-blue-900  to-purple-800 w-[50vh] flex flex-col   rounded-xl'>
          <div className='flex justify-end'>
          <span onClick={handleCut} className='flex p-5 m-2 cursor-pointer border rounded-xl items-center justify-center w-[2rem] h-[2rem] border-white'>X</span>
          </div>
          <div className='flex justify-center'>
          <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          mode="normal"
          speed="1"
          src="https://lottie.host/5f41720e-9df4-496d-9e50-2ccac217c020/fWeWfJ0rHI.json"
          style={{ width: "250px", height: "250px" }}
        ></lottie-player>
          </div>
        
          
          <div className='flex items-center justify-center'><div className=' text-white text-2xl px-5'>We've added you to our Waiting list!</div></div>
          <div className=' m-4 rounded-md'>
            <div className='border m-4 mb-10 p-3 rounded-md'>
              {email}
            </div>
          </div>
        </div>
        
      </motion.div>}
      
    </main>
  )
}
