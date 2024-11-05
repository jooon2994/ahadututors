// components/ContactCTA.js
import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="py-16 bg-blue-600 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
      <p className="mb-8">Contact us today to find the perfect tutor for your needs.</p>
      <Link href="/contact">
        <button className="px-6 py-3 bg-yellow-500 text-blue-800 rounded-lg font-semibold hover:bg-yellow-400">
          Contact Us
        </button>
      </Link>
    </section>
  );
}
