import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../shared/loading/Loading';
import NewsCard from '../shared/newsCard/NewsCard';

const Breakingnews = () => {


    const {data: news = [], isLoading} = useQuery({
        queryKey: ['news'],
        queryFn: async() =>{
            const res = await fetch('https://newsline-server-side.vercel.app/breaking-news');
            const data = await res.json();
            return data;
        }
    });

    

    if(isLoading) {
        return <Loading></Loading>
    }
   

    return (
        <div >
            
                <div className='m-5'>
                    <h6 class='bg-zinc-50 shadow font-medium p-5 rounded-lg'>{news.length} news found</h6>
                </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-5 mt-10'>
                { 
                    news && news?.map((n, i) => <NewsCard 
                    news = {n} 
                    key = {i}
                   
                    ></NewsCard>)

                }
            </div>
            

        </div>
    );
};

export default Breakingnews;