const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-4xl font-bold mb-2 text-primary">Contact Us</h1>
      <p className="text-lg text-center mb-8 max-w-xl text-gray-600">
        Have questions or want to work with us? Fill out the form below and we’ll get back to you soon!
      </p>
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            id="message"
            name="message"
            rows={4}
            placeholder="How can we help you?"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-primary transition"
        >
          Send Message
        </button>
      </form>
      <footer className="mt-10 text-center text-gray-600">
        <div className="flex flex-col items-center space-y-2">
          <span>
            <strong>Instagram:</strong>{" "}
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              @yourusername
            </a>
          </span>
          <span>
            <strong>Email:</strong>{" "}
            <a href="mailto:youremail@example.com" className="text-primary hover:underline">
              youremail@example.com
            </a>
          </span>
          <span>
            <strong>Telegram:</strong>{" "}
            <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              @yourtelegram
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Page;