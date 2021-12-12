import { NextPage } from 'next';
import Head from 'next/head';

import Banner from '../components/Banner';
import Header from '../components/Header';
import LargeCard from '../components/LargeCard';
import SmallCard from '../components/SmallCard';
import { ICardData, IExploreData } from '../interfaces';
import MediumCard from '../components/MediumCard';
import { LargeBannerImg } from '../../public/assets/images';
import Footer from '../components/Footer';

interface Props {
  exploreData: IExploreData[];
  cardsData: ICardData[];
}

const Home: NextPage<Props> = function ({ exploreData, cardsData }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semiboldpb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((data: IExploreData, key) => (
              <SmallCard key={key} data={data} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3">
            {cardsData.map((data: ICardData, key) => (
              <MediumCard key={key} data={data} />
            ))}
          </div>
        </section>

        <LargeCard
          img={LargeBannerImg}
          title="The Greatest Outdoors"
          description="Whislits curated by Airbnb."
          buttonText="Get Inspired."
        />
      </main>

      <Footer />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const exploreData = await fetch('https://jsonkeeper.com/b/4G1G').then((res) => res.json());

  const cardsData = await fetch('https://jsonkeeper.com/b/VHHT').then((res) => res.json());

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
};
