import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editPost } from '../../services/api';
import * as Dialog from '@radix-ui/react-dialog';
import { updatePost } from '../../redux/postsSlice';

function EditPostModal() {
  const [ data, setData ] = useState([]);

const dispatch = useDispatch();

 //const [ isEdit, setIsEdit ] = useState(false);
 //const [ id, setId ] = useState(null);
 const [ title, setUpdateTitle ] = useState("");
 const [ content, setUpdateContent ] = useState("");

 const posts = useSelector((state) => state.posts.items);

 const handleUpdatePost = () => {
  editPost({ title, content })
  .then(() => {
    dispatch(updatePost({ title, content }))
    console.log("Update Post com sucesso!")
  })
  .catch(() =>{
    console.log("Erro ao tentar atualizar o Post.")
  })
 };


 return(
    <Dialog.Portal>
    <Dialog.Overlay 
     className="fixed w-screen h-screen bg-[#00000075] inset-0"
    />

    <div>
    <Dialog.Content className="fixed border border-zinc-700 bg-slate-50 w-[600px] h-[300px] rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

     <div className="mt-8">
      <span className="font-semibold text-lg flex items-center justify-center">
       Edit Post
      </span>

      <form action="" className="flex flex-col gap-6 ml-2">
       <div className="flex flex-col">
       <label className="font-semibold text-base">Title</label>
       <input 
        type="text" 
        placeholder="Update Title"
        onChange={(e) => setUpdateTitle(e.target.value)}
        className="border border-zinc-200 shadow-sm h-10 mr-6 rounded-md focus:outline-none pl-2" 
        required 
      />
       </div>

       <div className="flex flex-col">
       <label className="font-semibold text-base">Content</label>
       <textarea 
        type="text" 
        placeholder="Update Content"
        onChange={(e) => setUpdateContent(e.target.value)}
        className="border border-zinc-200 shadow-sm h-16 mr-6 rounded-md focus:outline-none pl-2" 
        required 
      />
       </div>
      </form>

      <div className="flex flex-row justify-end gap-2 mt-6 mr-2">
      <Dialog.Close>
      <button 
       className="border border-gray-600 hover:bg-slate-200 rounded font-semibold text-black h-6 w-28"
      >
       Cancel
      </button>
      </Dialog.Close>
      <button 
       className="bg-green-600 hover:bg-green-700 rounded font-semibold text-white h-6 w-28"
       onClick={handleUpdatePost}
      >
       Save
      </button>
      </div>
     </div>
      

     <Dialog.Close />
    </Dialog.Content>
    </div>

   </Dialog.Portal>
 )
}

export default EditPostModal;