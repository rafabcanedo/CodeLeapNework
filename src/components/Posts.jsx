import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../redux/userSlice';
import { fetchPosts, getPostsStatus, selectAllPosts } from '../redux/postsSlice';
import moment from 'moment';

import DeletePostModal from './DeletePostModal';
import EditPostModal from './EditPostModal';

import { Trash, NotePencil } from "@phosphor-icons/react"

export default function Posts({ date }) {
 const [ id, setId ] = useState('');
 //const [ offset, setOffset] = useState(0);
 //const formatter = buildFormatter(frenchStrings)

 const posts = useSelector(selectAllPosts);
 const postStatus = useSelector(getPostsStatus);

 const dispatch = useDispatch();
 const { username } = useSelector(selectUser);
 const { title, content } = useSelector((state) => state.posts.posts);

 useEffect(() => {
  if (postStatus === 'idle') {
   dispatch(fetchPosts())
  }
  }, [postStatus, dispatch])

  function handleModalDelete(event) {
    setId(event.target.id)
  }

 return(
  <>
  {posts.map(post =>
  <div className="max-w-[800px] w-full border border-gray-600 rounded-xl mt-10">
    <div>
    <header className="flex items-center w-full h-16 bg-sky-600 rounded-xl justify-between">
     <h2 className="font-medium ml-4 text-white">{post.title}</h2>
     
     <div className="flex flex-row items-center mr-4 gap-2">
     <Dialog.Root>
      <Dialog.Trigger asChild>
      <button>
      <Trash size={23} className="text-white cursor-pointer" onClick={handleModalDelete} />
      </button>
      </Dialog.Trigger>
       
       <DeletePostModal postId={post.id} />
       
     </Dialog.Root>
 
     <Dialog.Root>
     <Dialog.Trigger asChild>
     <button>
     <NotePencil size={23} className="text-white cursor-pointer" />
     </button>
     </Dialog.Trigger>
 
     <EditPostModal post={post} />
     
     </Dialog.Root>
 
     </div>
 
    </header>
    </div>
 
    <div className="flex flex-row justify-between ml-2 mr-2 mt-4 mb-6">
     <p className="text-sm text-gray-500">@{post.username}</p>
     <p>{moment().startOf('hour').fromNow()}</p>
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