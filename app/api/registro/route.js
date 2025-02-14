import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://idellacqua:<db_password>@cluster0.m6pwm.mongodb.net/?retryWrites=true&w=majority&appName=ClusterPrueba";

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
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);

export async function POST(request) {
  const { nombre, email, password } = await request.json();

  try {
    await client.connect();
    const database = client.db("your_database_name"); // Cambia esto por el nombre de tu base de datos
    const collection = database.collection("users"); // Cambia esto por el nombre de tu colección

    const newUser = { nombre, email, password };
    const result = await collection.insertOne(newUser);

    return new Response(JSON.stringify(result), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response("Error al registrar el usuario", { status: 500 });
  } finally {
    await client.close();
  }
} 