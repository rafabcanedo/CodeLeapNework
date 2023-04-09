import * as Dialog from '@radix-ui/react-dialog';
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from '../../redux/postsSlice';

function DeletePostModal() {
 
 const dispatch = useDispatch();

 const posts = useSelector((state) => state.posts.items);

 return(
  <>
    <Dialog.Portal>
    <Dialog.Overlay 
     className="fixed w-screen h-screen bg-[#00000075] inset-0"
    />

    {posts.length > 0 ? posts.map(post =>
    <div>
    <Dialog.Content className="fixed border border-zinc-700 bg-slate-50 w-[500px] h-[180px] rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

     <div className="mt-8">
      <span className="font-semibold text-lg flex items-center justify-center">
       Are you sure you want to delete this post?
      </span>

      <div className="flex flex-row justify-center gap-2 mt-8 mr-2"> 
      <button className="border border-gray-600 hover:bg-slate-200 rounded font-semibold text-black h-6 w-28">Cancel</button>
      <button 
       className="bg-red-600 hover:bg-red-700 rounded font-semibold text-white h-6 w-28"
       onClick={() => dispatch(deletePost(post.id))}
      >
        Delete</button>
      </div>
     </div> 

     <Dialog.Close />
    </Dialog.Content>
    </div>
    ): 'No posts'}

   </Dialog.Portal>
  </>
 )
}

export default DeletePostModal;