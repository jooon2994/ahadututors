// components/SubjectsSection.js
export default function SubjectsSection() {
    const subjects = [
      { name: 'Math', image: '/maths.jpg' },
      { name: 'Science', image: '/science.jpg' },
      { name: 'English', image: '/english.jpg' },
    ];
  
    return (
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Popular Subjects</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <img src={subject.image} alt={subject.name} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">{subject.name}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  }
  