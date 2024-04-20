const Footer = () => {
    return (
        <footer id="contact" className="bg-gray-500 py-10 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between bg-gray-600 py-3 rounded-md">
                <div className="mb-4 md:mb-0 ">
                    <h2 className="text-xl font-bold mb-2">Contact Us</h2>
                    <p>Email: mehtag810@gmail.com</p>
                    <p>Phone: +91 9340924917</p>
                </div>
                <div className="mb-4 md:mb-0 ">
                    <h2 className="text-xl font-bold mb-2">Important Links</h2>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>About Us</li>
                    </ul>
                </div>
            </div>
            <div className="text-center text-white px-4 py-3 rounded-md flex flex-col">
                <h2 >© Copyright 2024</h2>
                <h2 >Made by <span className="font-bold">Gautam Mehta</span></h2>
            </div>
        </footer>
    );
};

export default Footer;
