// pages/skills.js

import React from 'react';

const Skills = () => {

    const skillsData = {
        frontend: [
            { name: 'HTML', percentage: 80 },
            { name: 'CSS', percentage: 70 },
            { name: 'JavaScript (ES6)', percentage: 95 },
            { name: 'React.js', percentage: 85 },
            { name: 'Next.js', percentage: 70 },
            // Add more frontend skills with their respective percentages
        ],
        backend: [
            { name: 'Node.js', percentage: 85 },
            { name: 'Express.js', percentage: 85 },
            { name: 'RESTful APIs', percentage: 90 },
            // Add more backend skills with their respective percentages
        ],
        database: [
            { name: 'MongoDB', percentage: 90 },
            { name: 'MySQL', percentage: 70 },
            { name: 'Redis', percentage: 85 },
            { name: 'Firebase', percentage: 85 },
            // Add more database skills with their respective percentages
        ],
        packages: [
            { name: 'socket', percentage: 80 },
            { name: 'mongoose', percentage: 90 },
            { name: 'multer', percentage: 90 },
            { name: 'bcrypt', percentage: 80 },
            { name: 'crypto', percentage: 80 },
            // Add more other skills with their respective percentages
        ],
        others: [
            { name: 'Git', percentage: 90 },
            { name: 'AWS S3', percentage: 90 },
            { name: 'AWS EC2', percentage: 80 },
            { name: 'Postman', percentage: 90 },
            { name: 'DSA (Problem Solving)', percentage: 60 },
            // Add more other skills with their respective percentages
        ],
    };

    return (
        <div id='skill' className="min-h-screen bg-gradient-to-r from-white via-gray-200 to-gray-300 flex justify-center">

            <div className="max-w-screen-xl mx-auto px-4 py-16 text-gray-800">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black text-center mb-8 relative">Skills</h1>



                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {Object.keys(skillsData).map((category, index) => (
                        <div key={index}>
                            <h2 className="text-lg font-semibold mb-5 p-2 bg-gray-700 text-white rounded-lg text-center">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                            {skillsData[category].map((skill, skillIndex) => (

                                <div
                                    key={skillIndex}
                                    className="bg-gray-200 rounded-lg p-2 m-1.5 hover:bg-gray-400 hover:text-black transition duration-300 ease-in-out"
                                >
                                    <h3 className="text-base font-semibold mb-2">{skill.name}</h3>
                                    <div className="relative flex items-center h-2 bg-gray-300 rounded overflow-hidden">
                                        <div
                                            className="absolute top-0 left-0 bg-black rounded transition-all duration-300 ease-in-out"
                                            style={{ width: `${skill.percentage}%`, height: '100%' }}
                                        ></div>
                                    </div>
                                    <span className="text-sm font-semibold mt-2">{skill.percentage}%</span>
                                </div>


                                // <div key={skillIndex} className="bg-gray-200 rounded-lg p-2 m-1.5">
                                //     <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                                //     <div className="relative flex items-center h-2 bg-gray-300 rounded">
                                //         <div
                                //             className="absolute top-0 left-0 bg-black rounded"
                                //             style={{ width: `${skill.percentage}%`, height: '100%' }}
                                //         ></div>
                                //     </div>
                                //     <span className="text-sm font-semibold mt-2">{skill.percentage}%</span>
                                // </div>
                            ))}
                        </div>
                    ))}
                </div>

            </div>


        </div>
    );
};

export default Skills;
