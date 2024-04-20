
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
