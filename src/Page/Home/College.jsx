import React from 'react';
import Card from '../../Components/Card';

const College = () => {

    const collegeData = [
        {
            image: "https://prod-media-eng.dhakatribune.com/uploads/2020/07/whatsapp-image-2020-07-01-at-8-07-49-pm-1593668734872.jpeg",
            name: "Dhaka University",
            admissionDates: "March 2023",
            events: "Annual Fest, Cultural Night",
            researchHistory: "Established  on July 1, 1921.",
            sports: "Swimming",
        },
        {
            image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
            name: "BUBT",
            admissionDates: "July 2023",
            events: "Tech Fest, Literary Week, Science Exhibition",
            researchHistory: "The Bangladesh University of Engineering and Technology in 1962.",
            sports: "Cricket",
        },
        {
            image: "https://new-media.dhakatribune.com/en/uploads/2022/07/05/sheikh-kamal-it-business-incubator-feature-image.jpeg",
            name: "CUTE",
            admissionDates: "March 2023",
            events: "Science Exhibition",
            researchHistory: "The Bangladesh University of Engineering and Technology in 1962.",
            sports: "Cricket",
        },
    ];

    return (
        <section className=" text-white bg-white ">
            <h1 className='text-4xl py-5 text-center text-black font-bold pt-10 underline'>Top University</h1>
            <div className="container mx-auto py-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                    {collegeData.map((college, index) => (
                        <Card key={index} college={college} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default College;