import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../redux/userSlice';

import DeletePostModal from './DeletePostModal';
import EditPostModal from './EditPostModal';

import { Trash, NotePencil } from "@phosphor-icons/react"
import axios from 'axios';

export default function Posts() {
 const [ data, setData ] = useState([]);
 //const posts = useSelector((state) => state.posts.post);

 const dispatch = useDispatch();
 const { username } = useSelector(selectUser);

 const handleFetch = async () => {
  try {
   const response = await axios.get('https://dev.codeleap.co.uk/careers/?limit=10&offset=10');
    setData(response.data.results);
  } catch (error) {
   console.log(error);
  };
 }
 
  useEffect(() => {
   handleFetch();
  }, [])

 return(
  <>
  {data.map(post =>
  <div className="w-[800px] h-[300px] border border-gray-600 rounded-xl mt-10">
    <div>
    <header className="flex items-center w-full h-16 bg-sky-600 rounded-xl justify-between">
     <h2 className="font-medium ml-4 text-white">{post.title}</h2>
     
     <div className="flex flex-row items-center mr-4 gap-2">
     <Dialog.Root>
      <Dialog.Trigger asChild>
      <button>
      <Trash size={23} className="text-white cursor-pointer" />
      </button>
      </Dialog.Trigger>
       
       <DeletePostModal />
       
     </Dialog.Root>
 
     <Dialog.Root>
     <Dialog.Trigger asChild>
     <button>
     <NotePencil size={23} className="text-white cursor-pointer" />
     </button>
     </Dialog.Trigger>
 
     <EditPostModal />
     
     </Dialog.Root>
 
     </div>
 
    </header>
    </div>
 
    <div className="flex flex-row justify-between ml-2 mr-2 mt-4 mb-6">
     <p className="text-sm text-gray-500">@{post.username}</p>
    </div>
 
    <div className="flex flex-col ml-2">
     
     <span className="font-medium text-lg">
      {post.content}
     </span>
    </div>
   </div>
   )}
  </>
 )
}