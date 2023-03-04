import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsPage = () => {


    const detailsNews = useLoaderData();
    const {author, published_date, date, title, description, img} = detailsNews;
  

    return (
    <section className="bg-white z-0">
    <div className="container px-6 py-10 mx-auto">
       

        <div className=" mt-10">
            <div>
                <div className="relative ">
                    <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={img} alt=""/>

                    <div className="absolute bottom-0 flex p-3 bg-gray-900 ">
                        

                        <div className="mx-4">
                            <h1 className="text-sm text-gray-400">{author}</h1>
                            <p className="text-sm text-gray-400">{published_date || date}</p>
                        </div>
                    </div>
                </div>

                <h1 className="mt-6 text-xl font-semibold text-gray-700 ">
                    {title}
                </h1>

                {/* //<hr className="w-32 my-6 text-blue-500"> */}

                <p className=" mt-2 text-sm text-gray-700 ">
                    {description}
                </p>

            </div>
        </div>
    </div>
</section>
    );
};

export default DetailsPage;