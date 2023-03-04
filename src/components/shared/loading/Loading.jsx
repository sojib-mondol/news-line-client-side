import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center items-center mt-10">
            <div className="spinner-border border-sky-600 animate-spin inline-block w-12 h-12 border-4 rounded-full " role="status">
                <span className="visually-hidden"></span>
            </div>
        </div>
    );
};

export default Loading;