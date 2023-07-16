import React from 'react';
const Services = () => {
  return (
    <React.Fragment>
      <h1>Services</h1>
      <p>
        Curb Appeal Landscapes specializes in a variety of professional
        landscaping services that enhance the beauty and functionality of your
        outdoor spaces. With a commitment to delivering high-quality workmanship
        and exceptional customer service, our services cater to your unique
        needs. Whether you require regular lawn maintenance or a complete
        landscape transformation, you can rely on Curb Appeal to provide the
        expertise you need. Our services include:
      </p>
      <div className='box'>
        <div className='badge'>
          $59.99
          <small>+tax</small>
        </div>
        <h2>Lawn mow, trim & blow</h2>
        <p>
          Maintaining a well-manicured lawn is essential for creating an
          inviting outdoor environment. With a keen eye for detail, Curb Appeal
          provides clean and precise edging services. Grass clippings and debris
          are diligently cleared away, leaving your property looking pristine.
        </p>
      </div>
      <div className='box'>
        <h2>Power washing</h2>
        <div className='badge'>
          $89.99
          <small>+tax</small>
        </div>
        <p>
          Over time, outdoor surfaces can accumulate dirt, grime, and stains,
          diminishing their appearance. Curb Appeal's power washing service can
          restore the beauty of your driveways, sidewalks, patios, and other
          hard surfaces. Using professional-grade equipment, built-up dirt,
          mold, mildew, and other unsightly substances are effectively removed.
          Experience the difference as our power washing leaves your surfaces
          clean and rejuvenated.
        </p>
      </div>
      <div className='box'>
        <h2>Landscapes</h2>
        <p>
          Enhance your outdoor space with a stunning landscape that reflects
          your style and complements your home's architecture. Our personalized
          landscape design and installation services bring your vision to life.
          From vibrant flower beds to sturdy retaining walls, we create a
          beautiful and functional outdoor environment tailored to your
          preferences.
        </p>
      </div>
    </React.Fragment>
  );
};

export default Services;
