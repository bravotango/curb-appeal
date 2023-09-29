import b4 from '../../assets/project-1/front-before.jpg';
import PictureComponent from '../Picture';
const Dashboard: React.FC = () => {
  const projects = [
    {
      id: 1,
      project: {
        location: '914',
        client: 'Tom & Jean',
        progress: [
          {
            id: 1,
            before: { picUrl: b4, caption: '' },
            after: { picUrl: '', caption: '' },
          },
        ],
      },
    },
  ];
  const articles = [
    {
      title: 'Article 1',
      imageUrl:
        'https://st.hzcdn.com/fimgs/pictures/landscapes/window-view-from-japanese-style-home-hanselman-landscape-and-gardens-img~e651fb31083467df_3477-1-8137125-w360-h360-b0-p0.jpg',
    },
    {
      title: 'Article 2',
      imageUrl:
        'https://st.hzcdn.com/fimgs/pictures/landscapes/bayside-david-r-lamb-landscape-architect-img~e0f1b8d904bed430_1400-1-f731f5d-w360-h360-b0-p0.jpg',
    },
    {
      title: 'Article 3',
      imageUrl:
        'https://st.hzcdn.com/fimgs/pictures/landscapes/mid-century-river-house-carbo-landscape-architecture-img~eb61355c08ac5c0e_3696-1-52bf005-w360-h360-b0-p0.jpg',
    },
    {
      title: 'Masterpiece',
      imageUrl:
        'https://st.hzcdn.com/fimgs/4251422502f52f1c_5549-w360-h360-b0-p0--.jpg',
    },
    {
      title: 'Japanese Garden Style',
      imageUrl:
        'https://st.hzcdn.com/fimgs/pictures/landscapes/japanese-style-landscaping-dabah-landscape-designs-img~9a811b2a0159e310_2458-1-f56bebf-w360-h360-b0-p0.jpg',
    },

    // Add more articles as needed
  ];

  /* <Scroller articles={articles} /> */

  // Random article
  const random = Math.floor(Math.random() * articles.length);
  const focusedArticle = articles[random];

  return (
    <div>
      <h2 className='tagline'>
        Turning heads,
        <br /> one landscape at a time
      </h2>
      <div className='flex'>
        <div>
          {
            <PictureComponent
              alt={focusedArticle.title}
              src={focusedArticle.imageUrl}
            />
          }
        </div>
        <div className='text-content'>
          <p>
            Curb Appeal Landscapes specializes in turning ordinary outdoor
            spaces into extraordinary landscapes that reflect your personal
            style and enhance the architecture of your space. Our landscape
            design and installation services are meticulously tailored to meet
            your unique vision and preferences. With a focus on collaborative
            design, Curb Appeal Landscapes works closely with you to bring your
            dream landscape to life.
          </p>
        </div>
      </div>
      <div className='box'>
        <div className='badge'>
          <small>starting at</small>
          $69.99
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
          <small>starting at</small>
          $79.99
          <small>+tax</small>
        </div>
        <h2>Landscapes</h2>
        <p>
          <span className='icon icon-2'></span>
          Elevate your outdoor space with Curb Appeal's personalized landscape
          design and installation. We bring your vision to life, creating a
          stunning and functional environment that reflects your style. From
          vibrant flower beds to beautiful stone work and retaining walls,
          tailoring every detail to your preferences.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
{
}
