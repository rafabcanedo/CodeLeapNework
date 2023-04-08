import * as Dialog from '@radix-ui/react-dialog';

import { Trash, NotePencil } from "@phosphor-icons/react"
import DeletePostModal from './DeletePostModal';
import EditPostModal from './EditPostModal';

export default function Posts() {
 return(
  <div className="w-[800px] h-[300px] border border-gray-600 rounded-xl mt-10">
   <div>
   <header className="flex items-center w-full h-16 bg-sky-600 rounded-xl justify-between">
    <h2 className="font-medium ml-4 text-white">My first post at CodeLeap</h2>
    
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
    <p className="text-sm text-gray-500">@Canedopriv</p>
    <p className="text-sm text-gray-500">25 minutes ago</p>
   </div>

   <div className="flex flex-col ml-2">
    <span className="font-medium text-lg">
     Alô CodeLeap, la vou eu!
    </span>
   </div>
  </div>
 )
}