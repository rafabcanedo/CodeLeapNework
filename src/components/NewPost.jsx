export default function NewPost() {
 return(
  <div className="w-[800px] h-[300px] border border-gray-600 rounded-xl mt-10">
    <div className="ml-4 mr-4 mt-8">
    <h3 className="font-medium">What's on your mind?</h3>

    <div className="flex flex-col">
     <label className="text-base text-neutral-600">Title</label>
     <input
      type="name"
      placeholder="Hello Word" 
      className="border border-zinc-200 shadow-sm h-8 mr-6 rounded-md focus:outline-none pl-2"
     />
    </div>

    <div className="flex flex-col">
     <label className="text-base text-neutral-600">Content</label>
     <textarea
      placeholder="Content here" 
      className="border border-zinc-200 shadow-sm h-16 mr-6 rounded-md focus:outline-none pl-2"
     >
     </textarea>
    </div>

    <div className="flex justify-end mt-4">
     <button
     type="submit"
     className="bg-sky-600 hover:bg-sky-700 rounded font-semibold text-white h-8 w-32 mr-6 uppercase"
     >
      Create
     </button>
    </div>
    </div>
  </div>
 )
}