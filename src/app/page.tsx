import About from '@/components/home/About';
import Banner from '@/components/home/Banner'
import Statistics from '@/components/home/Statistics';
import getCategoriesData from '@/utils/getCategoriesData';
import TopCategories from '@/components/home/TopCategories';

export default async function HomePage() {

  const categories = await getCategoriesData();
  console.log(categories);

  return (

    <main>

      <Banner />
      <Statistics />
      <About/>

      <TopCategories categories={categories} />

      {/* one paralax */}

      {/* top cars with animations  */}

      {/* review section with slider */}

    </main>
  )
}
