export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">VoltAir Solutions</h1>
        <p className="text-xl">Electrical. Air Conditioning. Renewables.</p>
        <button className="mt-6 bg-white text-blue-600 px-4 py-2 rounded">Get a Free Quote</button>
      </div>

      <section className="p-6">
        <h2 className="text-2xl font-semibold mb-2">About Us</h2>
        <p>
          We're a North West-based team delivering high-quality air conditioning, electrical,
          and energy-efficient solutions for homes and businesses.
        </p>
      </section>

      <section className="p-6 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <ul className="list-disc list-inside">
          <li>Air Conditioning: Commercial & Residential Installations</li>
          <li>Electrical Solutions: Rewiring, Testing & Certification</li>
          <li>Renewable Energy: Solar Systems & Battery Storage</li>
        </ul>
      </section>

      <section className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside">
          <li>Qualified, experienced, and reliable</li>
          <li>Honest pricing with no hidden fees</li>
          <li>Future-focused with energy-saving goals</li>
        </ul>
      </section>

      <section className="p-6 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p><strong>Phone:</strong> +44 [your number]</p>
        <p><strong>Email:</strong> voltair.solutions@yourdomain.com</p>
        <p><strong>Service Area:</strong> Greater Manchester & North West</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Book Your Free Assessment</button>
      </section>
    </div>
  );
}
