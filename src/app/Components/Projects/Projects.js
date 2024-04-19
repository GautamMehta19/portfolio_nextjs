// // // pages/projects.js

// // import React from 'react';

// // const projectsData = {
// //     frontend: [
// //         { name: 'Project 1', githubLink: 'https://github.com/project1' },
// //         { name: 'Project 2', githubLink: 'https://github.com/project2' },
// //         { name: 'Project 3', githubLink: 'https://github.com/project2' },
// //         { name: 'Project 4', githubLink: 'https://github.com/project2' },
// //         { name: 'Project 5', githubLink: 'https://github.com/project2' },
// //         { name: 'Project 6', githubLink: 'https://github.com/project2' },
// //         { name: 'Project 7', githubLink: 'https://github.com/project2' },
// //         // Add more frontend projects with their respective GitHub repository links
// //     ],
// //     backend: [
// //         { name: 'Project 3', githubLink: 'https://github.com/project3' },
// //         { name: 'Project 4', githubLink: 'https://github.com/project4' },
// //         // Add more backend projects with their respective GitHub repository links
// //     ],
// // };

// // const Projects = () => {
// //     const calculateColumns = () => {
// //         const numProjects = projectsData.frontend.length;
// //         if (numProjects <= 4) return 1;
// //         else if (numProjects <= 8) return 2;
// //         else return 3;
// //     };

// //     return (
// //         <div id='projects' className="min-h-screen bg-gradient-to-l from-white via-gray-200 to-gray-300 flex justify-center">
// //             <div className="max-w-screen-lg mx-auto px-4 py-16 text-black">
// //                 <h1 className="text-3xl font-bold text-center mb-8">Projects</h1>

// //                 <div className="flex flex-wrap justify-center">
// //                     {Array.from({ length: calculateColumns() }).map((_, columnIndex) => (
// //                         <div key={columnIndex} className="flex flex-col items-start w-1/3">
// //                             <h2 className="text-lg font-semibold mb-4">Frontend Projects</h2>
// //                             {projectsData.frontend
// //                                 .filter((_, index) => index % calculateColumns() === columnIndex)
// //                                 .map((project, index) => (
// //                                     <div key={index} className="bg-gray-200 rounded-lg p-4 mb-4">
// //                                         <h3 className="text-base font-semibold mb-2">{project.name}</h3>
// //                                         <a href={project.githubLink} className="text-blue-500">GitHub Repo</a>
// //                                     </div>
// //                                 ))}
// //                         </div>
// //                     ))}
// //                     <div className="w-1/3">
// //                         <h2 className="text-lg font-semibold mb-4">Backend Projects</h2>
// //                         {projectsData.backend.map((project, index) => (
// //                             <div key={index} className="bg-gray-200 rounded-lg p-4 mb-4">
// //                                 <h3 className="text-base font-semibold mb-2">{project.name}</h3>
// //                                 <a href={project.githubLink} className="text-blue-500">GitHub Repo</a>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </div>

// //             </div>
// //         </div>
// //     );
// // };

// // export default Projects;

// // pages/projects.js

// // import React from 'react';

// // const projectsData = {
// //     frontend: [
// //         { name: 'Project 1', githubLink: 'https://github.com/project1' },
// //         { name: 'Project 2', githubLink: 'https://github.com/project2' },
// //         { name: 'Project 3', githubLink: 'https://github.com/project3' },
// //         { name: 'Project 4', githubLink: 'https://github.com/project4' },
// //         { name: 'Project 5', githubLink: 'https://github.com/project5' },
// //         { name: 'Project 6', githubLink: 'https://github.com/project6' },
// //         // Add more frontend projects with their respective GitHub repository links
// //     ],
// //     backend: [
// //         { name: 'Project 7', githubLink: 'https://github.com/project7' },
// //         { name: 'Project 8', githubLink: 'https://github.com/project8' },
// //         // Add more backend projects with their respective GitHub repository links
// //     ],
// // };

// // const Projects = () => {
// //     const calculateColumns = () => {
// //         const numProjects = projectsData.frontend.length;
// //         if (numProjects <= 4) return 1;
// //         else if (numProjects <= 8) return 2;
// //         else return 3;
// //     };

// //     return (
// //         <div id='projects' className="min-h-screen bg-gradient-to-l from-white via-gray-200 to-gray-300 flex justify-center">
// //             <div className="max-w-screen-lg mx-auto px-4 py-16 text-black">
// //                 <h1 className="text-3xl font-bold text-center mb-8">Projects</h1>
// //                 <div className="flex flex-wrap justify-center">
// //                 <h2 className="text-lg font-semibold mb-4">Frontend Projects</h2>
// //                     {Array.from({ length: calculateColumns() }).map((_, columnIndex) => (
// //                         <div key={columnIndex} className="flex flex-col items-start w-1/3">
// //                             {projectsData.frontend
// //                                 .filter((_, index) => index % calculateColumns() === columnIndex)
// //                                 .map((project, index) => (
// //                                     <div key={index} className="bg-gray-200 rounded-lg p-4 mb-4">
// //                                         <h3 className="text-base font-semibold mb-2">{project.name}</h3>
// //                                         <a href={project.githubLink} className="text-blue-500">GitHub Repo</a>
// //                                     </div>
// //                                 ))}
// //                         </div>
// //                     ))}
// //                     <div className="w-1/3">
// //                         <h2 className="text-lg font-semibold mb-4">Backend Projects</h2>
// //                         {projectsData.backend.map((project, index) => (
// //                             <div key={index} className="bg-gray-200 rounded-lg p-4 mb-4">
// //                                 <h3 className="text-base font-semibold mb-2">{project.name}</h3>
// //                                 <a href={project.githubLink} className="text-blue-500">GitHub Repo</a>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Projects;


// // pages/project.js
// import React from 'react';

// const projects = [
//     {
//         name: 'E-Commerce',
//         imageUrl: '/profile.jpg',
//         description: 'Description of Project 1',
//     },
//     {
//         name: 'Project 2',
//         imageUrl: '/profile.jpg',
//         description: 'Description of Project 2',
//     },
//     // Add more projects as needed
// ];

// const ProjectPage = () => {
//     return (
//         <div id='projects' className="min-h-screen bg-gradient-to-l from-white via-gray-200 to-gray-300 flex justify-center ">
//             <div className="max-w-screen-lg mx-auto px-4 py-16 text-black">
//                 <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black text-center mb-8 relative">Projects</h1>
//                 {projects.map((project, index) => (
//                     <div key={index} className="flex flex-col lg:flex-row items-center justify-between py-4 space-y-4 lg:space-y-0 lg:space-x-4">
//                         <div className="lg:w-1/3 w-full lg:order-1 order-2 bg-slate-50 p-4 rounded-lg h-48 flex items-center justify-center">
//                             <h3 className="text-lg lg:text-xl font-semibold text-center">{project.name}</h3> {/* Adjust font size here */}
//                         </div>
//                         <div className="lg:w-1/2 w-full mx-auto my-4 lg:my-0 lg:order-2 order-1">
//                             <div className="w-full h-48 rounded-lg overflow-hidden">
//                                 <img src={project.imageUrl} alt={project.name} className="w-full h-full object-cover" />
//                             </div>
//                         </div>
//                         <div className="lg:w-1/4 w-full lg:order-3 order-3">
//                             <p>{project.description}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ProjectPage;



// pages/Projects.js




import React from 'react';

const projects = [
    {
        image: "e-comm",
        name: "E-Commerce",
        description: "Written a backend code of e-commerce website (user, product, cart, order) feacture",
        githubLink: "https://github.com/GautamMehta19/Product_Managment-e-shopping-cart-"
    },
    {
        
        image: "blog",
        name: "Blog Managament",
        description: "Written a backend of blog management",
        githubLink: "https://github.com/GautamMehta19/project_1_blogManagment"
    },
    {
        image: "intern",
        name: "Internship Opportunity",
        description: "Apply for the internship so to get all student list of collage",
        githubLink: "https://github.com/GautamMehta19/project-2-Open-to-Intern"
    },
    {
        image: "shortten",
        name: "Shortten URL",
        description: "Short the long url to short url",
        githubLink: "https://github.com/GautamMehta19/project_4-urlShortnerGroup"
    },
    {
        image: "Library",
        name: "Library Managment",
        description: "Manage the Library (Books and Author details)",
        githubLink: "https://github.com/GautamMehta19/Project-3-Books_Managment"
    },
    {
        image: "next-shopping",
        name: "Frontend- Shopping Website",
        description: "shopping website here used only nextjs",
        githubLink: "https://shopping-app-nextjs-six.vercel.app/"
    }
];

const Projects = () => {
    return (
        <div id='projects' className="min-h-screen-lg px-16 py-16 text-black bg-gradient-to-l from-white via-gray-200 to-gray-300 ">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold  text-center mb-8 relative">Projects</div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* {projects.map((project, index) => (
                    <div key={index} className="w-full p-4 relative bg-gray-200 rounded-md transition duration-300 hover:bg-red-300 hover:text-white">
                        <div className="h-64 w-full bg-cover bg-center rounded-md mb-4" style={{ backgroundImage: `url('/${project.name.toLowerCase()}.jpg')`, transition: 'background-color 0.3s' }}>
                            <div className="absolute inset-0 bg-red-500 opacity-0 hover:opacity-50 transition duration-300"></div>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-lg font-semibold">{project.name}</h3>
                            <p className="text-sm mt-2">{project.description}</p>
                            <a href={project.githubLink} className="text-sm text-blue-500 hover:underline mt-2">GitHub Link</a>
                        </div>
                    </div>
                ))} */}
                {projects.map((project, index) => (
                    <div key={index} className="w-full p-4 relative bg-gray-200 ">
                        <div className="h-64 w-full bg-cover bg-center rounded-md mb-4" style={{ backgroundImage: `url('/${project.image.toLowerCase()}.jpg')`, transition: 'background-color 0.3s' }}>
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-transparent hover:from-blue-400 opacity-0 hover:opacity-100 transition duration-300"></div>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-lg font-semibold">{project.name}</h3>
                            <p className="text-sm mt-2">{project.description}</p>
                            <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-sm text-blue-500 hover:underline mt-2">GitHub or Project Link</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Projects;



// import React from 'react';

// const projects = [
//     {
//         title: "Project 1",
//         description: "Description of Project 1"
//     },
//     {
//         title: "Project 2",
//         description: "Description of Project 2"
//     },
//     {
//         title: "Project 3",
//         description: "Description of Project 3"
//     }
// ];
// const ProjectPage = () => {
//     return (
//         <div id='projects' className="min-h-screen bg-gradient-to-l from-white via-gray-200 to-gray-300 flex items-center">
//             <div className="max-w-screen-lg px-16 py-16 text-black">
//                 <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black text-center mb-8">Projects</h1>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" style={{ paddingLeft: "16px" }}> {/* Added left padding */}
//                     {projects.map((project, index) => (
//                         <div key={index} className="bg-gray-200 rounded-md p-6 flex flex-col justify-between" style={{ minWidth: "0", flex: "1 1 calc(33.333% - 1rem)" }}>
//                             <div>
//                                 <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
//                                 <p className="text-gray-600">{project.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProjectPage;
