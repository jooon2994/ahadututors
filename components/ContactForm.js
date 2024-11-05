export default function ContactForm() {
    return (
      <form className="bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <input type="text" placeholder="Your Name" className="border p-2 w-full mb-4" />
        <input type="email" placeholder="Your Email" className="border p-2 w-full mb-4" />
        <textarea placeholder="Your Message" className="border p-2 w-full mb-4"></textarea>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Send Message</button>
      </form>
    );
  }
  