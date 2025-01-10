const express = require("express");
const cors =require("cors");


app.use(cors());
app.use(express.json());

const mainRouter = require("./routes/index");

const app = express();

app.use("/api/v1", mainRouter);

// app.use("/api/v2", rootRouter); npt using this as of now haha

app.listen(3000)



// all the companies use "/api/v1/" initially then if they wanna upgrade their backend they'll start using "/api/v2" and so on