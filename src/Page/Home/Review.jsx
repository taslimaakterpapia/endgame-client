import React from 'react';
const collegeReviews = [
    {
        college: "Dhaka University",
        review:
            "Great college with excellent faculty and facilities. Highly recommended!",
        user: "Alom",
    },
    {
        college: "BUET",
        review:
            "I had an amazing experience at this college. The campus is beautiful!",
        user: "Munsi",
    },
    {
        college: "CUET",
        review:
            "I had an amazing experience at this college. The campus is beautiful!",
        user: "Pintu",
    },
];

const Review = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto">
                <h2 className="text-center text-4xl font-bold mb-8 text-black underline">College Reviews</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
                    {collegeReviews.map((review, index) => (
                        <div key={index} className="bg-slate-400 rounded-lg shadow-md p-6 text-white">
                            <h3 className="text-xl text-black  font-semibold mb-4">{review.college}</h3>
                            <p className=" mb-4">{review.review}</p>
                            <p className="text-orange-500">- {review.user}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Review;
