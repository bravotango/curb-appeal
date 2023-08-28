import React, { useState, FC } from 'react';
import TJ1 from '../../assets/JeanAndTom/front-before.jpg';
import TJ2 from '../../assets/JeanAndTom/front-mid.jpg';
import TJ3 from '../../assets/JeanAndTom/backyard-before.jpg';
import TJ4 from '../../assets/JeanAndTom/backyard-after.jpg';
import TJ5 from '../../assets/JeanAndTom/back-looking-at-house-before.jpg';
import TJ6 from '../../assets/JeanAndTom/back-looking-at-house-after.jpg';
import tala1 from '../../assets/Tala-sized/gravel-before.jpg';
import tala2 from '../../assets/Tala-sized/gravel-after.jpg';
import tala3 from '../../assets/Tala-sized/front-before.jpg';
import tala4 from '../../assets/Tala-sized/front-after.jpg';
import tala5 from '../../assets/Tala-sized/back-planters-before.jpg';
import tala6 from '../../assets/Tala-sized/back-planters-after.jpg';

interface BeforeAfterProps {
  caption: string;
  before: PictureProps;
  after: PictureProps;
}
interface PictureProps {
  src: string;
}
interface ProjectProps {
  title: string;
  hours: number;
  photos: BeforeAfterProps[];
}

enum BeforeAfter {
  Before = 'before',
  After = 'after',
}

const Projects: FC = () => {
  const [toggleStatus, setToggleStatus] = useState(BeforeAfter.Before);
  const handleToggle = () => {
    setToggleStatus(
      toggleStatus === BeforeAfter.After
        ? BeforeAfter.Before
        : BeforeAfter.After
    );
  };
  const projects: ProjectProps[] = [
    {
      title: 'Deep weeding',
      hours: 50,
      photos: [
        {
          caption: 'Carved out wanted vegetation & redefined rock borders',

          before: {
            src: TJ1,
          },
          after: {
            src: TJ2,
          },
        },
        {
          caption:
            'Cleared all weeds down fence line and start defining back lawn borders',
          before: {
            src: TJ3,
          },
          after: {
            src: TJ4,
          },
        },
        {
          caption: 'Dug backyard down to dirt, prepping for landscaping',
          before: { src: TJ5 },
          after: {
            src: TJ6,
          },
        },
      ],
    },
    {
      title: 'Weeding & Gravel',
      hours: 30,
      photos: [
        {
          caption:
            'Removed weeds from gravel, cleared raised beds, defined plants & new gravel',

          before: {
            src: tala1,
          },
          after: {
            src: tala2,
          },
        },
        {
          caption:
            'Removed weeds and trimmed plants, chainsaw unwanted pear tree.',
          before: {
            src: tala3,
          },
          after: {
            src: tala4,
          },
        },
        {
          caption: 'Removed all weeds and vegetation around raised beds',
          before: {
            src: tala5,
          },
          after: {
            src: tala6,
          },
        },
      ],
    },
  ];

  return (
    <div className='projects'>
      <h1>Before & After</h1>
      <div className='toggle-switch'>
        <label className='switch'>
          <input
            type='checkbox'
            onChange={handleToggle}
            checked={toggleStatus === BeforeAfter.After}
          />{' '}
          <span className='slider' />
        </label>
      </div>

      {projects.map((project, i) => (
        <div key={i}>
          {project.photos.map((photo, i) => (
            <div key={i} className='project-container'>
              <div
                className={`image-container ${
                  toggleStatus === BeforeAfter.Before ? 'before' : 'after'
                }`}
                onClick={handleToggle}
              >
                <div
                  className={`card-image ${
                    toggleStatus === BeforeAfter.Before ? 'active' : ''
                  }`}
                >
                  <img
                    alt={photo.caption}
                    src={photo.before.src}
                    style={{
                      opacity: toggleStatus === BeforeAfter.Before ? 1 : 0,
                    }}
                  />
                  {/* <span className='card-title'>
                    <h2 className='title1 shadow'>ANA</h2>
                  </span> */}
                </div>

                <div
                  className={`card-image ${
                    toggleStatus === BeforeAfter.After ? 'active' : ''
                  }`}
                >
                  <img
                    alt={photo.caption}
                    src={photo.after.src}
                    style={{
                      opacity: toggleStatus === BeforeAfter.After ? 1 : 0,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Projects;
