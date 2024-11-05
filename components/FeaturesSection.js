export default function FeaturesSection() {
    const features = [
      { title: 'Qualified Tutors', description: 'Learn from experienced instructors.' },
      { title: 'Flexible Scheduling', description: 'Choose times that suit you.' },
      { title: 'Personalized Lessons', description: 'Get customized lessons.' },
    ];
  
    return (
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  