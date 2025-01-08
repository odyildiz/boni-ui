import React from 'react';

const Bio = () => {
  return (
    <div className="pt-24 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-light mb-8">About Me</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <img
          src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5"
          alt="Photographer portrait"
          className="w-full h-96 object-cover"
        />
        <div>
          <p className="mb-4">
            With over 15 years of experience in fine art photography, I've dedicated my life to capturing
            the extraordinary in the ordinary. My work focuses on finding beauty in unexpected places
            and moments that might otherwise go unnoticed.
          </p>
          <p className="mb-4">
            My journey began in the darkroom of my local art school, where I fell in love with the
            process of creating images. Today, I combine traditional techniques with modern technology
            to create unique perspectives on the world around us.
          </p>
          <p>
            When I'm not behind the camera, you can find me teaching photography workshops or enjoying
            a cup of coffee at my studio cafe, where I love to connect with fellow artists and art enthusiasts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bio;