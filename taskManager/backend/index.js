const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");

const taskModel = require("./models/task.model");

const TaskService = require("./services/task.service");

const TaskServiceInstance = new TaskService();
const taskRoutes = require("./routes/task.routes");
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("./controllers/task.controller");



const app=express();
const PORT=8082;
const DB_URI="mongodb+srv://nehalsingh188_db_user:0ovbRtOKsz0IFzHD@cluster0.0lv9cqd.mongodb.net/task-manager?appName=Cluster0";
app.use(cors());
app.use(express.json());


app.use("/tasks", taskRoutes);

mongoose.connect(DB_URI).then(()=>{
    console.log("DB connected");
}).catch((error)=>{
    console.log("Error in connecting DB",error);
})

app.listen(PORT,()=>{
    console.log(`Backend Listening on Port ${PORT}`);
})