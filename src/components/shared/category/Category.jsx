import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div className='px-5'>
            <ul className='flex flex-col justify-around mt-5 sm:flex-col md:flex-row lg:flex-row font-medium'>
                <li><Link to='/breaking-news' className='hover:text-sky-600'>Breaking News</Link></li>
                <li><Link to='/regular-news' className='hover:text-sky-600'>Regular News</Link></li>
                <li><Link to='/international-news' className='hover:text-sky-600'>International News</Link></li>
                <li><Link to='/sports' className='hover:text-sky-600'>Sports</Link></li>
                <li><Link to='/entertainment' className='hover:text-sky-600'>Entertainment</Link></li>
                <li><Link to='/culture' className='hover:text-sky-600'>Culture</Link></li>
                <li><Link to='/arts' className='hover:text-sky-600'>Arts</Link></li>
                <li><Link to='/all-news' className='hover:text-sky-600'>All News</Link></li>
                
            </ul>
        </div>
    );
};

export default Category;