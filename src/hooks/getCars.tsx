const getCars = async () => {
    const res = await fetch(`https://car-master-toys-server.vercel.app/toys`,{
        next:{
            revalidate: 0,
        }
    })

    return res.json();
};

export default getCars;