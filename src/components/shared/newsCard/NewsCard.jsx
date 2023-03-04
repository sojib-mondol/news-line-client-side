import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    

    const {title, img, author, date, published_date, description, _id} = news;
    
    
 


    return (
        <section class="bg-zinc-50  shadow-lg rounded-lg">
    <div class="container   mx-auto">
        

        <div class=" lg:-mx-6 lg:flex lg:items-center">
            <img class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={img} alt="" />

            <div class=" lg:w-1/2 lg:mt-0 lg:mx-6 ">
                

                <h2  class="block  text-2xl font-semibold text-gray-800  ">
                    {title}
                </h2>

                <p class="mt-3 text-sm text-gray-700 md:text-sm">
                    {description.slice(0,200)+" . . ."} 
                </p>

                <Link to={`/details/${_id}`} class="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</Link>

                <div class="flex items-center mt-6">
                    

                    <div class="mx-4">
                        <h1 class="text-sm text-gray-500 ">{author || "Author"}</h1>
                        <p class="text-sm text-gray-500 dark:text-gray-400">{date || published_date}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    );
};

export default NewsCard;