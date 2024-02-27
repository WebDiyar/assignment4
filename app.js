const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const i18n = require("i18n");
const { connectToMongoDB } = require("./db");
const session = require("express-session");

app.use(express.static("public"));

i18n.configure({
  locales: ["en", "es"],
  directory: __dirname + "/locales",
  defaultLocale: "en",
  cookie: "lang",
  objectNotation: true,
});

app.set("view engine", "ejs");
app.use(i18n.init);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(
  "mongodb+srv://Diyar:Asd__200205_tr@diyar.qhyiil5.mongodb.net/assignment4_backend",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Подключаем маршрутизаторы
const userRouter = require("./routes/userRouter");
const adminRouter = require("./routes/adminRouter");
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const scrapperApi = require("./routes/scrapperApi");
const history = require("./routes/history");
const mockApi = require("./routes/mockApi");
const quizRouter= require("./routes/quizRouter")
const { requireAuth } = require("./middleware/authMiddleware");
app.use(
  session({
    secret: "123", // Change this to a random string
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 600000 },
    // Set secure to true if your app is served over HTTPS
  })
);

// const apiRouter = require("./routes/apiRouter");
connectToMongoDB()
  .then((client) => {
    app.locals.db = client.db();

    app.use("/", registerRouter);
    app.use("/", loginRouter);
    app.use("/", quizRouter);
    app.use("/admin", requireAuth, adminRouter);
    app.use("/user", requireAuth, userRouter);
    app.use("/", requireAuth, scrapperApi);
    app.use("/", requireAuth, history);
    app.use("/", requireAuth, mockApi);
    // app.use("/",apiRouter)
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas", error);
  });

// app.use('/', mainRouter);
// app.use('/users', userRouter);
// app.use('/', registerRouter);
// app.use('/', loginRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
