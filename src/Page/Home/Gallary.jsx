import React from 'react';

import img1 from '../../assets/picture/img1.jpg'
import img2 from '../../assets/picture/img2.jpg'
import img3 from '../../assets/picture/img3.jpg'
import img4 from '../../assets/picture/img4.jpg'

const Gallary = () => {
    const images = [img1, img2, img3, img4];
    return (
        <section className="bg-white py-10">
            <div className="container mx-auto px-5">
                <h2 className="text-4xl font-bold  mb-8 text-center underline text-black">
                    Graduate Pictures
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((imageUrl, index) => (
                        <div
                            key={index}
                            className="rounded-lg overflow-hidden shadow-md hover:shadow-lg"
                        >
                            <img
                                src={imageUrl}
                                alt={` Graduate Group ${index + 1}`}
                                className="w-full h-48 object-cover transition duration-500 ease-in-out transform hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallary;