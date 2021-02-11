const db = require("../db/connection");
const Adventure = require("../models/adventure");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const adventures = [
    {
      title: "Forest, Beach",
      location: "McArthur-Burney Falls, California",
      category: ['Forest', 'Beach'],
      price: "$10 per car entry",
      description: "Burney Falls Loop Trail is a 1 mile heavily trafficked loop trail located near Burney, California that features a beautiful waterfall ",
      details: ['hiking', 'horseback-riding','wildlife','camping','fishing'],
      imgURL: ['https://californiathroughmylens.com/wp-content/uploads/2012/06/Burney-Falls.jpg', 'https://i.redd.it/wyaabe8wwvi31.jpg', 'https://i.pinimg.com/originals/0a/97/22/0a972239e235ebf81cc73d3a3e763681.jpg'],
    },
    {
      title: "Countryside, Desert",
      location: "Nomad Land",
      category: ['Country', 'Desert'],
      price: "FREE",
      description: "Lovely view of the sunset with a special someone. The view is to die for!! ",
      details: ['hiking', 'boatride','camping'],
      imgURL: ['', '', ''],
    },
    {
      title: "Forest",
      location: "random",
      category: ['random'],
      price: "FREE",
      description: "",
      details: [''],
      imgURL: ['', '', ''],
    },
    {
      title: "Famous Journeys, Cultural Heritage",
      location: "Bejing, China",
      category: ['Famous Journey'],
      price: "FREE",
      description: "Historical place in Chinan that is 13,171 miles ",
      details: ['hiking', 'tourist attraction'],
      imgURL: ['', '', ''],
    },
    {
      title: "Cultural Heritage",
      location: "Machu Picchu Peru",
      category: ['Cultural Heritage'],
      price: "FREE",
      description: "Built in lush, mountainous terrain high above the Urubamba River, Machu Picchu lies in one of the most stunning settings of any archeological site in the world. ",
      details: ['hiking', 'mountains'],
      imgURL: ['', '', ''],
    },
    {
      title: "Beach",
      location: "Thailand",
      category: ['Beach'],
      price: "FREE",
      description: "A veritable paradise of sugar white sand, crystal clear waters, and dramatic scenery, Thailand’s tropical beaches are renowned around the globe for their beauty",
      details: ['beach', 'tanning', 'jet skiis', 'sight-seeing'],
      imgURL: ['', '', ''],
    },
    {
      title: "Desert",
      location: "Giza, Egypt",
      category: ['Desert'],
      price: "unknown",
      description: "ne of the most iconic sites in the world, the Pyramids of Giza, just outside Cairo, are a surreal sight rising from the barren desert landscape. Standing guard nearby, and almost as impressive, is the Sphinx, gazing blankly out over the land.",
      details: ['desert', 'hot', 'hiking'],
      imgURL: ['', '', ''],
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
