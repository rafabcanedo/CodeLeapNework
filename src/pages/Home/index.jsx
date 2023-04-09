import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { changeUser } from '../../redux/userSlice';

const Home = () => {
 const [ name, setName ] = useState('');
 const dispatch = useDispatch();

 const handleLogin = () => {
  dispatch(changeUser(name))
 }

 return(
  <div className="h-screen flex md:flex-row items-center justify-center">
    <div className="w-[500px] h-[205px] bg-slate-50 rounded-xl">
     
     <div className="mt-6 ml-4">
     <h3 className="font-bold text-base">Welcome to CodeLeap Network!</h3>

     <div className="flex flex-col mt-4 gap-2">
     <p className="font-medium">Please enter your name</p>

     <input 
      type="text"
      placeholder="Rafael Canedo"
      className="border border-zinc-200 shadow-sm h-10 mr-6 rounded-md focus:outline-none pl-2"
      onChange={(e) => setName(e.target.value)}
     />

     <div className="flex justify-end mt-4">
     <button
      type="submit"
      className="bg-sky-600 hover:bg-sky-700 rounded font-semibold text-white h-8 w-32 mr-6 uppercase"
      onClick={handleLogin}
     >
     <Link to="/network">
      Enter
     </Link>
     </button>
     </div>
     </div>

     </div>
    </div>
  </div>
 )
}

export default Home;