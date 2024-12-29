import React from 'react';

const Support = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Support</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/support" className="hover:underline">Support</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Support Form */}
      <main className="flex-grow container mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-4">How can we help you?</h2>
        <form className="bg-white p-6 rounded shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">Name</label>
            <input type="text" id="name" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">Email</label>
            <input type="email" id="email" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="subject">Subject</label>
            <input type="text" id="subject" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="message">Message</label>
            <textarea id="message" className="mt-1 block w-full p-2 border border-gray-300 rounded" rows="4" required></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
        </form>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>Contact us: support@example.com</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Support;