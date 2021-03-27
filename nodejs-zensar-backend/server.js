var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var MongoClient = require("mongodb").MongoClient;
var ObjectId = require("mongodb").ObjectID;

var CONNECTION_URL = "mongodb://localhost:27017/";
var DATABASE_NAME = "zensar";

var app = express();

var corsOptions = {
    origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

var database, collection;

// simple route
app.get("/api/getUsers", function (req, res) {
    collection.find({}).toArray(function (error, result) {
        if (error) {
            return res.status(500).send(error);
        }
        res.send(result);
    });
});

app.post("/api/addUser", function(req, res) {
    collection.insert(request.body, function(error, result) {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(res.result);
    });
});

// set port, listen for requests
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    MongoClient.connect(
        CONNECTION_URL,
        { useNewUrlParser: true, useUnifiedTopology: true },
        function (error, client) {
            if (error) {
                throw error;
            }
            database = client.db(DATABASE_NAME);
            collection = database.collection("users");
            // console.log("Connected to `" + DATABASE_NAME + "`!");
        }
    );
    console.log("Server is running on port " + PORT);
});
