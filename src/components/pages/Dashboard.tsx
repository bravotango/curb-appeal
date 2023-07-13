import Scroller from '../Scroller';

const Dashboard: React.FC = () => {
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
  return (
    <div>
      <h1>Dashboard</h1>
      <Scroller articles={articles} />
    </div>
  );
};

export default Dashboard;
