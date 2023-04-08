import * as Dialog from '@radix-ui/react-dialog';

export function EditPostModal() {
 return(
    <Dialog.Portal>
    <Dialog.Overlay 
     className="fixed w-screen h-screen bg-[#00000075] inset-0"
    />

    <div>
    <Dialog.Content className="fixed border border-zinc-700 bg-slate-50 w-[500px] h-[205px] rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

     <div className="mt-8">
      <span className="font-semibold text-lg flex items-center justify-center">
       Edit Post
      </span>

      <form action="">
       <div>
       <label>Title</label>
       <input type="text" placeholder="Hello World" required />
       </div>

       <div>
       <label>Content</label>
       <textarea type="text" placeholder="Content here" required />
       </div>
      </form>

      <div className="flex flex-row justify-end gap-2 mt-8 mr-2">
      <button className="border border-gray-600 hover:bg-sky-500 rounded font-semibold text-black h-6 w-28">Cancel</button>
      <button className="bg-red-600 hover:bg-red-700 rounded font-semibold text-white h-6 w-28">Delete</button>
      </div>
     </div>

     <Dialog.Close />
    </Dialog.Content>
    </div>

   </Dialog.Portal>
 )
}