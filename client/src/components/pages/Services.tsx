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
          <small>starting at</small>
          $59.99
          <small>+tax</small>
        </div>
        <h2>Lawn mow, trim, blow</h2>
        <p>
          Maintaining a well-manicured lawn is essential for creating an
          inviting outdoor environment. With a keen eye for detail, Curb Appeal
          provides clean and precise edging and mowing services. Debris are
          diligently cleared away, leaving your property looking pristine.
        </p>
      </div>
      <div className='box'>
        <h2>Power washing</h2>
        <div className='badge'>
          <small>per hour</small>
          $89.99
          <small>+tax</small>
        </div>
        <p>
          Restore the beauty of your outdoor surfaces with Curb Appeal's power
          washing service. Our professional-grade equipment effectively removes
          dirt, grime, stains, mold, and mildew, leaving your driveways,
          sidewalks, patios, and other hard surfaces clean and rejuvenated.
        </p>
      </div>
      <div className='box'>
        <div className='badge'>
          <small>per hour</small>
          $79.99
          <small>+tax</small>
        </div>
        <h2>Landscapes</h2>
        <p>
          <span className='icon icon-2'></span>
          Elevate your outdoor space with Curb Appeal's personalized landscape
          design and installation. We bring your vision to life, creating a
          stunning and functional environment that reflects your style. From
          vibrant flower beds to beautiful stone work and retaining walls, we
          tailor every detail to your preferences.
        </p>
      </div>
    </React.Fragment>
  );
};

export default Services;
