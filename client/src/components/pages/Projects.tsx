import React, { useState, FC } from 'react';
import art1 from '../../assets/after/arts-before.jpg';
import art2 from '../../assets/after/arts-after.jpg';
import art3 from '../../assets/after/arts2-before.jpg';
import art4 from '../../assets/after/arts2-after.jpg';
import strawberries1 from '../../assets/after/strawberries-before.jpg';
import strawberries2 from '../../assets/after/strawberries-after.jpg';
import garden1 from '../../assets/after/garden-before.jpg';
import garden2 from '../../assets/after/garden-after.jpg';
import george1 from '../../assets/after/george-before.jpg';
import george2 from '../../assets/after/george-after.jpg';
import entrance1 from '../../assets/after/JeanJimEntrance-before.jpg';
import entrance2 from '../../assets/after/JeanJimEntrance-after.jpg';
import TJ1 from '../../assets/after/front-mid-before.jpg';
import TJ2 from '../../assets/after/front-mid-after.jpg';
import TJ3 from '../../assets/after/backyard-before.jpg';
import TJ4 from '../../assets/after/backyard-after.jpg';
import TJ5 from '../../assets/after/back-looking-at-house-before.jpg';
import TJ6 from '../../assets/after/back-looking-at-house-after.jpg';
import tala1 from '../../assets/after/gravel-before.jpg';
import tala2 from '../../assets/after/gravel-after.jpg';
import tala3 from '../../assets/after/front-before.jpg';
import tala4 from '../../assets/after/front-after.jpg';
import tala5 from '../../assets/after/back-planters-before.jpg';
import tala6 from '../../assets/after/back-planters-after.jpg';
import nina1 from '../../assets/after/nina-before.jpg';
import nina2 from '../../assets/after/nina-after.jpg';
import nina3 from '../../assets/after/nina2-before.jpg';
import nina4 from '../../assets/after/nina2-after.jpg';

interface BeforeAfterProps {
  heading?: string;
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
  const [captions, setCaptions] = useState(true);
  const handleToggle = () => {
    setToggleStatus(
      toggleStatus === BeforeAfter.After
        ? BeforeAfter.Before
        : BeforeAfter.After
    );
  };
  const handleToggleCaptions = () => {
    setCaptions(!captions);
  };
  const projects: ProjectProps[] = [
    {
      title: 'Deep weeding',
      hours: 50,
      photos: [
        {
          heading: 'Carve out weeds',

          caption:
            'Clear weeds, restore desired plants, and redefine rock beds to highlight their beauty',

          before: {
            src: TJ1,
          },
          after: {
            src: TJ2,
          },
        },
        {
          heading: 'Clear weeds',
          caption: 'Clear weeds down fence line prepping for landscaping',
          before: {
            src: TJ3,
          },
          after: {
            src: TJ4,
          },
        },
        {
          heading: 'Dig out roots',
          caption: 'Dig backyard down to dirt, prepping for landscaping',
          before: { src: TJ5 },
          after: {
            src: TJ6,
          },
        },
      ],
    },
    {
      title: 'Full yard restoration',
      hours: 30,
      photos: [
        {
          heading: 'Clear & mulch',
          caption: 'Weed & save strawberry rows',
          before: { src: strawberries1 },
          after: { src: strawberries2 },
        },
        {
          heading: 'Clean & simplify',
          caption: 'Clean up, simplify, yard art',
          before: { src: garden1 },
          after: { src: garden2 },
        },
        {
          heading: 'Eagle George',
          caption:
            'Used tree rounds to create borders for "George," the eagle statue.',
          before: { src: george1 },
          after: { src: george2 },
        },
        {
          heading: 'Weed & mulch',
          caption: 'Weeded and spread red mulch to suppress weeds.',
          before: { src: entrance1 },
          after: { src: entrance2 },
        },
      ],
    },
    {
      title: 'Clean up the rocks',
      hours: 4,
      photos: [
        {
          heading: 'Clean up the rocks',
          caption:
            'Requested to weed inside and around while maintaining grass growth',
          before: { src: nina1 },
          after: { src: nina2 },
        },
        {
          heading: 'Corner Fern',
          caption: 'Trim away dead parts of fern and weed the surrounding area',
          before: { src: nina3 },
          after: { src: nina4 },
        },
      ],
    },
    {
      title: 'Courtyard clean-up',
      hours: 2.5,
      photos: [
        {
          heading: 'Remove the dead',
          caption: 'Remove dead vegetation and power wash area',
          before: { src: art1 },
          after: { src: art2 },
        },
        {
          heading: 'Power wash',
          caption: 'Remove weeds, power wash outdoor furniture and mats',
          before: { src: art3 },
          after: { src: art4 },
        },
      ],
    },
    {
      title: 'Weeding & Gravel',
      hours: 30,
      photos: [
        {
          heading: 'Weed & gravel',
          caption:
            'Clear weeds from gravel & beds, redefine borders, and add new gravel',

          before: {
            src: tala1,
          },
          after: {
            src: tala2,
          },
        },
        {
          heading: 'Weeding it',
          caption: 'Remove weeds, simplify area, rake and blow.',
          before: {
            src: tala3,
          },
          after: {
            src: tala4,
          },
        },
        {
          heading: 'Access raised beds',
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
      <div className='fixed'>
        <fieldset>
          <caption>Photos</caption>
          <div className='toggle'>
            <span
              className={
                toggleStatus === BeforeAfter.Before ? 'highlight' : 'disabled'
              }
              onClick={handleToggle}
            >
              Before
            </span>
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
            <span
              className={
                toggleStatus === BeforeAfter.After ? 'highlight' : 'disabled'
              }
              onClick={handleToggle}
            >
              After
            </span>
          </div>
        </fieldset>
        <fieldset>
          <caption>Captions</caption>
          <div className='toggle'>
            <span
              className={!captions ? 'highlight' : 'disabled'}
              onClick={handleToggleCaptions}
            >
              Off
            </span>
            <div className='toggle-switch'>
              <label className='switch'>
                <input
                  type='checkbox'
                  onChange={handleToggleCaptions}
                  checked={captions === true}
                />{' '}
                <span className='slider' />
              </label>
            </div>
            <span
              className={captions ? 'highlight' : 'disabled'}
              onClick={handleToggleCaptions}
            >
              On
            </span>
          </div>
        </fieldset>
      </div>

      <div className='project-list'>
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
                  {captions && (
                    <span className='card-title'>
                      <h2>
                        <span>{photo.heading}</span>
                      </h2>{' '}
                      <p>{photo.caption}</p>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
