const db = require("../db/connection");
const Adventure = require("../models/adventure");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const adventures = [
    {
      title: "Mesmerizing Waterfall",
      location: "McArthur-Burney Falls, California",
      category: ['Forest'],
      price: "$10 per car entry",
      description: "Burney Falls Loop Trail is a 1 mile heavily trafficked loop trail located near Burney, California that features a beautiful waterfall ",
      details: ['hiking', 'horseback-riding','wildlife','camping','fishing'],
      imgURL: ['https://californiathroughmylens.com/wp-content/uploads/2012/06/Burney-Falls.jpg', 'https://i.redd.it/wyaabe8wwvi31.jpg', 'https://i.pinimg.com/originals/0a/97/22/0a972239e235ebf81cc73d3a3e763681.jpg'],
     
    }
  ];

  await Adventure.insertMany(adventures);
  console.log("Created an adventure!");
};
const run = async () => {
  await main();
  db.close();
};

run();
