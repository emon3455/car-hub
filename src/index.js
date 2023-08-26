
// base url: https://car-hub-server-eta.vercel.app/



// get all cars with soritng based on price:
app.get("/cars", async (req, res) => {

    const cars = await carsCollections.find().toArray();

    if (req.query?.sort === 'desc') {
        cars.sort((a, b) => b.price - a.price); // Sort in descending order based on price
    } else {
        cars.sort((a, b) => a.price - b.price); // Sort in ascending order based on price
    }
    res.send(cars);
})


// get single cars:
app.get("/cars/:id", async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await carsCollections.findOne(query);
    res.send(result);
})


// get Top Cars by ratings:
app.get("/topCars", async (req, res) => {
    const cars = await carsCollections.find().sort({ rating: - 1 }).limit(3).toArray();
    res.send(cars);
})

// get all cars by seller Email:
app.get("/getCarsBySellerEmail", async(req, res)=>{

    const query = {sellerEmail : req.query.sellerEmail};
    const result = await carsCollections.find(query).toArray();
    res.send(result);
})

// get all cars by category Id:
app.get("/getCarsByCategory/:id", async (req, res) => {
    const id = req.params.id;
    const query = { category_id: id };
    const result = await carsCollections.find(query).toArray();
    res.send(result);
})


// -------------------category api------------------

// get all category:
app.get("/categorys", async (req, res) => {
    const categorys = await categorysCollections.find().toArray();
    res.send(categorys)
})

// get single category:
app.get("/categorys/:id", async (req, res) => {
    const id = req.params.id;
    const query = { category_id: id };
    const result = await categorysCollections.findOne(query);
    res.send(result);
})

