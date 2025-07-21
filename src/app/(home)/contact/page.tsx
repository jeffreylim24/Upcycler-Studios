
const ContactPage = () => {
    return (
        <div className="flex min-h-screen bg-white">
            {/* Sidebar with social icons */}
            <div className="hidden md:flex flex-col items-center justify-center w-20 bg-gray-50 border-r border-gray-200">
                <a href="https://www.instagram.com/upcyclerstudios/?hl=en" target="_blank" rel="noopener noreferrer" className="mb-6 hover:scale-110 transition">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" rx="8" fill="#E1306C"/>
                        <path d="M16 11.2A4.8 4.8 0 1 0 16 20.8A4.8 4.8 0 1 0 16 11.2Z" fill="white"/>
                        <circle cx="24" cy="8" r="2" fill="white"/>
                    </svg>
                </a>
                <a href="http://t.me/upcyclerstudios" target="_blank" rel="noopener noreferrer" className="mb-6 hover:scale-110 transition">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" rx="8" fill="#229ED9"/>
                        <path d="M24.5 9.5L7.5 16.5L13.5 18.5L15.5 24.5L18.5 19.5L24.5 9.5Z" fill="white"/>
                    </svg>
                </a>
                <a href="https://www.carousell.sg/u/UpcyclerStudios/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" rx="8" fill="#FF4747"/>
                        <circle cx="16" cy="16" r="7" fill="white"/>
                        <circle cx="16" cy="16" r="3" fill="#FF4747"/>
                    </svg>
                </a>
            </div>
            <div className="flex flex-col flex-1 items-center justify-center py-8 px-4">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-lg text-center max-w-xl mb-8 text-gray-700">
                    Have questions, ideas, or want to collaborate? Reach out to Upcycler Studios using the form below or email us directly at <a href="mailto:hello@upcyclerstudios.com" className="text-green-700 underline">hello@upcyclerstudios.com</a>.
                </p>
                <form className="w-full max-w-md bg-gray-50 p-6 rounded-lg shadow-md flex flex-col gap-4">
                    <input type="text" placeholder="Your Name" className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" required />
                    <input type="email" placeholder="Your Email" className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" required />
                    <textarea placeholder="Your Message" rows={5} className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" required />
                    <button type="submit" className="bg-green-700 text-white font-semibold py-2 rounded hover:bg-green-800 transition">Send Message</button>
                </form>
                <div className="mt-8 text-center text-gray-500 text-sm">
                    Upcycler Studios<br />
                    Peninsula Shopping Centre, B1-14, Singapore <br />
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
