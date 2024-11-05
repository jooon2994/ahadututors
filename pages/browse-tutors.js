// pages/browse-tutors.js
import TutorCard from '../components/TutorCard';

const tutors = [
  { name: 'Bezawit besufekad', subject: 'Math', rate: 20, photo: 'bez.jpg' },
  { name: 'Yohannes Aweke', subject: 'Physics, Maths , English', rate: 25, photo: 'jo.png' },
  { name: 'Yohannes Aweke', subject: 'Physics', rate: 25, photo: 'jo.png' },
  { name: 'Yohannes Aweke', subject: 'Physics', rate: 25, photo: 'jo.png' },
  { name: 'Yohannes Aweke', subject: 'Physics', rate: 25, photo: 'jo.png' },
];

export default function BrowseTutors() {
  return (
    <main className="max-w-6xl mx-auto py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Browse Tutors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tutors.map((tutor, index) => (
          <TutorCard key={index} tutor={tutor} />
        ))}
      </div>
    </main>
  );
}
