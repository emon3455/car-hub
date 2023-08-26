const getCars = async () => {
    const res = await fetch(`https://car-master-toys-server.vercel.app/toys`,{
        cache:"no-cache"
    })

    return res.json();
};

export default getCars;