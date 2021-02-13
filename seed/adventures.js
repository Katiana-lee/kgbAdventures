const db = require("../db/connection");
const Adventure = require("../models/adventure");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const adventures = [
    {
      title: "Forest, Beach",
      location: "McArthur-Burney Falls, California",
      category: ["Forest", "Beach"],
      price: "$10 per car entry",
      description:
        "Burney Falls Loop Trail is a 1 mile heavily trafficked loop trail located near Burney, California that features a beautiful waterfall ",
      details: ["hiking", "horseback-riding", "wildlife", "camping", "fishing"],
      imgURL: [
        "https://californiathroughmylens.com/wp-content/uploads/2012/06/Burney-Falls.jpg",
        "https://i.redd.it/wyaabe8wwvi31.jpg",
        "https://i.pinimg.com/originals/0a/97/22/0a972239e235ebf81cc73d3a3e763681.jpg",
      ],
    },
    {
      title: "Countryside, Desert",
      location: "Nomad Land",
      category: ["Country Side", "Desert"],
      price: "FREE",
      description:
        "Lovely view of the sunset with a special someone. The view is to die for!! ",
      details: ["hiking", "boatride", "camping"],
      imgURL: ["https://i.redd.it/wyaabe8wwvi31.jpg"],
    },
    {
      title: "Forest",
      location: "random",
      category: ["random", "Forest"],
      price: "FREE",
      description: "asdfasdlkfjadslfkjaldskf",
      details: ["sldkfjalsd"],
      imgURL: ["https://i.redd.it/wyaabe8wwvi31.jpg"],
    },
    {
      title: "Famous Journeys, Culture and Heritage",
      location: "Bejing, China",
      category: ["Famous Journeys", "Other", "Forest", "Culutre and Heritage"],
      price: "FREE",
      description: "Historical place in Chinan that is 13,171 miles ",
      details: ["hiking", "tourist attraction"],
      imgURL: ["https://i.redd.it/wyaabe8wwvi31.jpg"],
    },
    {
      title: "Culture and Heritage, Desert.., Mountain",
      location: "Machu Picchu Peru",
      category: ["Culture and Heritage", "Desert", "Mountain"],
      price: "FREE",
      description:
        "Built in lush, mountainous terrain high above the Urubamba River, Machu Picchu lies in one of the most stunning settings of any archeological site in the world. ",
      details: ["hiking", "mountains"],
      imgURL: ["https://i.redd.it/wyaabe8wwvi31.jpg"],
    },
    {
      title: "Beach",
      location: "Thailand",
      category: ["Beach", "Mountain"],
      price: "FREE",
      description:
        "A veritable paradise of sugar white sand, crystal clear waters, and dramatic scenery, Thailand’s tropical beaches are renowned around the globe for their beauty",
      details: ["beach", "tanning", "jet skiis", "sight-seeing"],
      imgURL: ["https://i.redd.it/wyaabe8wwvi31.jpg"],
    },
    {
      title: "Desert",
      location: "Giza, Egypt",
      category: ["Desert", "Country Side"],
      price: "unknown",
      description:
        "ne of the most iconic sites in the world, the Pyramids of Giza, just outside Cairo, are a surreal sight rising from the barren desert landscape. Standing guard nearby, and almost as impressive, is the Sphinx, gazing blankly out over the land.",
      details: ["desert", "hot", "hiking"],
      imgURL: ["https://i.redd.it/wyaabe8wwvi31.jpg"],
    },
  ];

  await Adventure.insertMany(adventures);
  console.log("Created an adventure!");
};
const run = async () => {
  await main();
  db.close();
};

run();
