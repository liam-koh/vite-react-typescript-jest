import { QueryClient, QueryClientProvider, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { Suspense, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

const fetchPosts = async ({ pageParam = 1 }) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
    params: {
      _page: pageParam,
      _limit: 10, // 한 페이지에 10개의 포스트
    },
  });
  return res.data;
};

const usePost = () => {
  const data = useSuspenseInfiniteQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < 10) {
        return undefined;
      }
      return allPages.length + 1;
    },
    initialPageParam: 1,
  })

  return data;
}

const useInfiniteScroll = ({ onLoadNext }: any) => {
  const [ref, inView] = useInView({
    threshold: 1,
  });

  const InfiniteScrollBox = ({children}: any) => {
    return (
      <div
        className='w-full h-full border p-4 my-2'
        >{children}
        <div
          ref={ref}
          style={{
            height: '100px',
            marginTop: '200px',
            width: '100%',
          }}
          className='!mt-[200px] bg-[red] h-[100px] w-full'>box</div>
      </div>
    )
  }

  useEffect(() => {
    console.log('##############################11111')
    if (inView) {
      // onLoadNext();
    }
  },[inView])

  return {
    InfiniteScrollBox,
    inView
  }
}


const queryClient = new QueryClient();

export default function InfiniteScroll() {

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>loading....</div>}>
        <Posts />
      </Suspense>
    </QueryClientProvider>
  )
}

const Posts = () => {

  const { data, fetchNextPage } = usePost();
    const [ref, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView])
  
  
  return (
    <div className='w-full'
      style={{
        height: '100vh',
        overflowY: 'scroll',
      }}
    >
      {data.pages.map((page, i) => (
        <React.Fragment key={i}>
          {page.map((post) => (
            
            <div key={post.id} className='border p-4 my-2'>
              <h2 className='text-lg font-bold'>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </React.Fragment>
      ))}
            <div
        className='w-full h-full border p-4 my-2'
        >laoidng
        <div
          ref={ref}
          style={{
            height: '100px',
            marginTop: '200px',
            width: '100%',
          }}
          className='!mt-[200px] bg-[red] h-[100px] w-full'>box</div>
      </div>
    </div>
  )
}