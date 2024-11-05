// components/TestimonialsSection.js
export default function TestimonialsSection() {
  const testimonials = [
    { name: 'John Doe', feedback: 'This platform helped me excel in math!' },
    { name: 'Jane Smith', feedback: 'My tutor was so patient and knowledgeable.' },
  ];

  return (
    <section className="py-16 text-center bg-blue-50">
      <h2 className="text-3xl font-bold mb-8">What Our Students Say</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700">"{testimonial.feedback}"</p>
            <p className="mt-4 text-blue-800 font-semibold">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
