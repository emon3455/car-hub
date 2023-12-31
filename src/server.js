
// base url: https://car-hub-server-eta.vercel.app/

const express = require("express");
const cors = require("cors");
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require("dotenv").config();
const port = process.env.PORT || 5000;

// middle ware:
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zyyhzcl.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // await client.connect();

        // ----------- all collections ------------
        const carsCollections = client.db("carHub").collection("cars");
        const categorysCollections = client.db("carHub").collection("categorys");

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

        // add single car:
        app.post("/cars", async(req, res)=>{
            const cars = req.body;
            const result = await carsCollections.insertOne(cars);
            res.send(result)
        })

        // delete single car:
        app.delete("/cars/:id", async(req,res)=>{
            const id = req.params.id;
            const query = {_id: new Object(id)};
            const result = await carsCollections.deleteOne(query);
            res.send(result);
        })

        // update cars:
        app.put("/cars/:id", async(req,res)=>{
            const id = req.params.id;
            const car = req.body;

            const filter = {_id: new ObjectId(id)};
            const option = {upsert: true};

            const updatedCar = {
                $set:{
                    sellerName: car.sellerName,
                    sellerEmail: car.sellerEmail,
                    picture: car.picture,
                    toyName: car.toyName,
                    category: car.category,
                    category_id: car.category_id,
                    price: car.price,
                    rating: car.rating,
                    availableQuantity: car.availableQuantity,
                    description: car.description
                }
            }

            const result = await carsCollections.updateOne(filter, updatedCar, option);
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



        // await client.db("admin").command({ ping: 1 });
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");

    } finally {
        // await client.close();
    }
}
run().catch(console.dir);



app.get("/", (req, res) => {
    res.send("car hub server is running...");
})


app.listen(port, (req, res) => {
    console.log(`car-hub-server API is running on port: ${port}`);
})
