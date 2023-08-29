import About from '@/components/home/About';
import Banner from '@/components/home/Banner'
import Statistics from '@/components/home/Statistics';
import getCategoriesData from '@/utils/getCategoriesData';
import TopCategories from '@/components/home/TopCategories';
import Overview from '@/components/home/Overview';
import TopCars from '@/components/home/TopCars/TopCars';

export default async function HomePage() {

  const categories = await getCategoriesData();
  console.log(categories);

  return (

    <main>

      <Banner />

      <Statistics />

      <About/>

      <TopCategories categories={categories} />

      <Overview title='A Journey Through the Car Enthusiasts Universe.' subtitle=' Unveiling Automotive Wonders, Driving Enthusiasm, and Navigating the Road Ahead. Embark on an Epic Expedition of Speed, Style, and Automotive Passion' img="https://i.ibb.co/vjxPzXT/optical-chemist-a-F65-Lob-ND1-A-unsplash.jpg"/>

      {/* top cars with animations  */}
      <TopCars />

      {/* review section with slider */}

    </main>
  )
}
