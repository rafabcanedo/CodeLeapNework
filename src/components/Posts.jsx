import * as Dialog from '@radix-ui/react-dialog';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';

import { Trash, NotePencil } from "@phosphor-icons/react"
import DeletePostModal from './DeletePostModal';
import EditPostModal from './EditPostModal';

export default function Posts() {

 const { name } = useSelector(selectUser);
 const posts = useSelector((state) => state.posts.items);

 return(
  <>
  {posts.length > 0 && posts.map(post =>
  <div key={post.id} className="w-[800px] h-[300px] border border-gray-600 rounded-xl mt-10">
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
    <p className="text-sm text-gray-500">@{name}</p>
    <p className="text-sm text-gray-500">25 minutes ago</p>
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

/*
<div className="flex flex-col ml-2">
   {posts.length > 0 && posts.map(post => 
    <span className="font-medium text-lg">
     {post.content}
    </span>
   )}
   </div>
*/