import Banner from '@/components/home/Banner'
// import CarsLayout from '@/components/home/CarsLayout'
import getCars from '@/hooks/getCars'
import Image from 'next/image'

export default async function HomePage() {

  const allCars = await getCars();

  return (

    <main className="">
      <Banner />
      {/* <CarsLayout allCars={allCars}></CarsLayout> */}
    </main>
  )
}
