import About from '@/components/home/About';
import Banner from '@/components/home/Banner'
import Statistics from '@/components/home/Statistics';

export default async function HomePage() {

  return (

    <main>
      <Banner />
      <Statistics />
      <About/>
    </main>
  )
}
