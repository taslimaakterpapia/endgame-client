import React from 'react';
const researchPapers = [
    {
        title: "Science",
        link: "https://example.com/paper-1",
        author: "Alom",
    },
    {
        title: "Math",
        link: "https://example.com/paper-2",
        author: "Kalom",
    },
    {
        title: "English",
        link: "https://example.com/paper-3",
        author: "Jalom",
    },
];

const Research = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto ">
                <h2 className="text-center text-3xl font-bold mb-8  text-black underline">Research Papers</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
                    {researchPapers.map((paper, index) => (
                        <div key={index} className="bg-slate-400 rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4 text-black">{paper.title}</h3>
                            <p className="text-gray-600 mb-4">Author: {paper.author}</p>
                            <a
                                href={paper.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800"
                            >
                                Read Paper
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Research;
