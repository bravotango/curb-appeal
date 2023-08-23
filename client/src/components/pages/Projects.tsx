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
  before: PictureProps;
  after: PictureProps;
}
interface PictureProps {
  src: string;
  caption: string;
}
interface ProjectProps {
  title: string;
  hours: number;
  photos: BeforeAfterProps[];
}
const Projects: FC = () => {
  const [showBefore, setShowBefore] = useState(true);

  const projects: ProjectProps[] = [
    {
      title: 'Deep weeding',
      hours: 50,
      photos: [
        {
          before: {
            src: TJ1,
            caption: 'Asked to removed weeds uncover rock borders.',
          },
          after: {
            src: TJ2,
            caption: 'Carved out wanted vegetation & redefined rock borders',
          },
        },
        {
          before: {
            src: TJ3,
            caption:
              'Overwhelmed by weeds, asked to remove all vegetation except ferns',
          },
          after: {
            src: TJ4,
            caption:
              'Cleared all weeds down fence line and start defining back lawn borders',
          },
        },
        {
          before: { src: TJ5, caption: 'Removed all weeds.' },
          after: {
            src: TJ6,
            caption: 'Stripped backyard down to dirt, prepping for landscaping',
          },
        },
      ],
    },
    {
      title: 'Weeding & Gravel',
      hours: 30,
      photos: [
        {
          before: {
            src: tala1,
            caption:
              'Asked to remove weeds from gravel, raised beds, & trim plants',
          },
          after: {
            src: tala2,
            caption:
              'Removed weeds from gravel, cleared raised beds, defined plants & new gravel',
          },
        },
        {
          before: {
            src: tala3,
            caption: 'Remove weeds and unwanted vegetation',
          },
          after: {
            src: tala4,
            caption:
              'Removed weeds and trimmed plants, chainsaw unwanted pear tree.',
          },
        },
        {
          before: {
            src: tala5,
            caption: 'Asked to clean up area around raised beds',
          },
          after: {
            src: tala6,
            caption: 'Removed all weeds and vegetation around raised beds',
          },
        },
      ],
    },
  ];

  return (
    <div className='projects'>
      <h1>Projects</h1>
      {projects.map((project, i) => (
        <div key={i}>
          <h2>
            {project.title} - {project.hours} hours
          </h2>
          {project.photos.map((photo, i) => (
            <div key={i}>
              <div
                className={`image-container ${showBefore ? 'before' : 'after'}`}
                onClick={() => setShowBefore(!showBefore)}
              >
                <img
                  src={showBefore ? photo.before.src : photo.after.src}
                  alt={showBefore ? photo.before.caption : photo.after.caption}
                />
              </div>

              <p>
                {showBefore
                  ? 'Before: ' + photo.before.caption
                  : photo.after.caption}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Projects;
