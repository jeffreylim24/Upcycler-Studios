
const ContactPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white justify-between">
            <div className="flex flex-1 flex-col py-8 px-4 gap-8">
                <h1 className="text-4xl font-bold mb-8 text-center justify-self-centercenter w-full">Contact Us</h1>
                <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 w-full">
                    {/* Contact Form (Left) */}
                    <div className="flex-1 flex flex-col items-center">
                        <h2 className="text-2xl font-semibold mb-4">Drop Us a Message</h2>
                        <p className="text-lg text-center max-w-xl mb-8 text-gray-700">
                            Have questions, ideas, or want to collaborate? Reach out to Upcycler Studios using the form below!
                        </p>
                        <form className="w-full max-w-md bg-gray-50 p-6 rounded-lg shadow-md flex flex-col gap-4">
                            <input type="text" placeholder="Your Name" className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" required />
                            <input type="email" placeholder="Your Email" className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" required />
                            <textarea placeholder="Your Message" rows={5} className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" required />
                            <button type="submit" className="bg-gray-600 text-white font-semibold py-2 rounded hover:bg-gray-700 transition">Send Message</button>
                        </form>
                    </div>
                    {/* Google Maps (Right) */}
                    <div className="flex-1 flex flex-col items-center">
                        <h2 className="text-2xl font-semibold mb-4">Locate Us</h2>
                        <div className="w-full max-w-md h-65 rounded-lg overflow-hidden shadow-md mb-6">
                            <iframe
                                title="Upcycler Studios Location"
                                src="https://www.google.com/maps?q=Peninsula+Shopping+Centre+B1-14+Singapore&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        {/* Opening Hours and Social Media side by side */}
                        <div className="w-full max-w-md mb-4 flex flex-row gap-8">
                            {/* Social Media Links - vertical stack */}
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-1 text-left">Social Media</h3>
                                <div className="flex flex-col items-start gap-3">
                                    <a href="https://www.instagram.com/upcyclerstudios/?hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-black transition" aria-label="Instagram">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17" cy="7" r="1.2"/></svg>
                                        Instagram
                                    </a>
                                    <a href="http://t.me/upcyclerstudios" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-black transition" aria-label="Telegram">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 3L2 12l5 2 2 5 3-4 4 2z"/></svg>
                                        Telegram
                                    </a>
                                    <a href="https://www.carousell.sg/u/UpcyclerStudios/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-black transition" aria-label="Carousell">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="5"/></svg>
                                        Carousell
                                    </a>
                                </div>
                            </div>
                            {/* Opening Hours */}
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-1 text-left">Opening Hours</h3>
                                <div className="text-left text-gray-700 text-sm leading-5">
                                    Mon: 2–8pm<br />
                                    Tue: 2–8pm<br />
                                    Wed: 2–5pm<br />
                                    Thu: 2–8pm<br />
                                    Fri: 2–8pm<br />
                                    Sat: 2–8pm<br />
                                    Sun: 2–8pm
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Address at bottom center */}
            <div className="flex flex-col items-center w-full py-4 gap-2">
                <div className="text-center text-gray-500 text-sm">
                    Upcycler Studios<br />
                    Peninsula Shopping Centre, B1-14, Singapore
                </div>
                <div className="flex flex-row items-center gap-4 mt-1">
                    <a href="https://www.instagram.com/upcyclerstudios/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition" aria-label="Instagram">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17" cy="7" r="1.2"/></svg>
                    </a>
                    <a href="http://t.me/upcyclerstudios" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition" aria-label="Telegram">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 3L2 12l5 2 2 5 3-4 4 2z"/></svg>
                    </a>
                    <a href="https://www.carousell.sg/u/UpcyclerStudios/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition" aria-label="Carousell">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="5"/></svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
