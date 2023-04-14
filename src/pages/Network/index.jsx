import NewPost from "../../components/NewPost";
import Posts from "../../components/Posts";

const Network = () => {
 return(
  <section className="relative min-h-screen flex flex-col items-center justify-center px-3">
   <div className=" bg-slate-50 max-w-[880px] w-full flex flex-col">
   <header className="flex items-center w-full h-16 bg-sky-600">
    <h2 className="font-semibold text-xl ml-6 text-white">CodeLeap Network</h2>
   </header>
    
   <div className="flex md:flex items-center justify-center">
   <NewPost />
   </div>

   <div className="flex flex-col md:flex items-center justify-center mt-8">
    <Posts />
   </div>
    
   </div>
  </section>
 )
}
   
export default Network;