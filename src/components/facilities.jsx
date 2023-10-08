import React from 'react';

function Facilities() {
  return (
    <div className='bg-blue-400 text-white p-4 rounded-lg shadow-lg'>
      <h2 className='text-2xl font-semibold'>Mobile Development</h2>
      <h3>We are Apple & Android friendly.</h3>
      <p className='mt-2'>
        Native, React Native, payment gateway integration, bespoke CMS, consuming APIs
        from existing sources, and all things mobile app relevant. We’ve mostly done it all.
      </p>
    </div>
  );
}

function App() {
  // Create an array to represent 10 similar elements
  const elements = Array.from({ length: 5    });

  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Map over the array and render the Facilities component */}
      {elements.map((_, index) => (
        <Facilities key={index} />
      ))}
    </div>
  );
}

export default App;
