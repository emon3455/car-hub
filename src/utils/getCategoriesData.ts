import { baseURL } from "@/constant/baseURL";

const getCategoriesData = async () => {
    const res = await fetch(`${baseURL}/categorys`,{
        next:{
            revalidate: 60,
        }
    });
    
    return res.json();
    
};

export default getCategoriesData;