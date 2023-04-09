import NewPost from "../../components/NewPost";
import Posts from "../../components/Posts";

const Network = () => {
 return(
  <section className="h-screen flex md:flex-row items-center justify-center mt-12">
   <div className="absolute bg-slate-50 w-[880px] h-[1080px]">
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