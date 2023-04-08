import { Link } from 'react-router-dom';

const Home = () => {
 return(
  <div className="h-screen flex md:flex-row items-center justify-center">
    <div className="w-[500px] h-[205px] bg-slate-50 rounded-xl">
     
     <div className="mt-6 ml-4">
     <h3 className="font-bold text-base">Welcome to CodeLeap Network!</h3>

     <div className="flex flex-col mt-4 gap-2">
     <p className="font-medium">Please enter your name</p>

     <input 
      placeholder="Rafael Canedo"
      className="border border-zinc-200 shadow-sm h-10 mr-6 rounded-md focus:outline-none pl-2"
     />

     <div className="flex justify-end mt-4">
     <button
      type="submit"
      className="bg-sky-600 hover:bg-sky-700 rounded font-semibold text-white h-8 w-32 mr-6 uppercase"
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