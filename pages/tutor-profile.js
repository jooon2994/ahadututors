// pages/tutor-profile.js
import Navbar from '../components/Navbar';
import Footer from '../components/footers';

export default function TutorProfile() {
  const tutor = { name: 'Bezawit Besufekad,', bio: 'Experienced Math tutor...', rate: 20, subjects: 'Math' };

  return (
    <>
      <main className="max-w-3xl mx-auto py-16">
        <div className="bg-white p-8 shadow-lg rounded-lg text-center">
          <img src="bez.jpg" alt="Tutor" className="w-32 h-32 mx-auto rounded-full" />
          <h1 className="text-3xl font-bold mt-4">{tutor.name}</h1>
          <p className="text-gray-600 mt-2">{tutor.subjects}</p>
          <p className="mt-4">{tutor.bio}</p>
          <p className="text-blue-500 mt-4">${tutor.rate} / hr</p>
          <button className="mt-6 px-4 py-2 bg-yellow-500 text-white rounded">Contact Tutor</button>
        </div>
      </main>
    </>
  );
}
