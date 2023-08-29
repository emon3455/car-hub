import { baseURL } from "@/constant/baseURL";


const getTopCars = async () => {
    const res = await fetch(`${baseURL}/topCars`,{
        next:{
            revalidate: 60,
        }
    });
    
    return res.json();
};

export default getTopCars;