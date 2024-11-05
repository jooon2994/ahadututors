import Link from 'next/link';

export default function TutorCard({ tutor }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg flex items-center space-x-4">
      <img src={tutor.photo || 'jo.png'} alt="Tutor" className="w-16 h-16 rounded-full" />
      <div>
        <h3 className="text-lg font-semibold">{tutor.name}</h3>
        <p className="text-gray-600">{tutor.subject}</p>
        <p className="text-blue-500">${tutor.rate} / hr</p>
        <Link href="/tutor-profile">
          <button className="text-sm text-yellow-500 mt-2">View Profile</button>
        </Link>
      </div>
    </div>
  );
}
