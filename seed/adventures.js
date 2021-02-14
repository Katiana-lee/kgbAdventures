const db = require("../db/connection");
const Adventure = require("../models/adventure");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const adventures = [
    {
      title: "Gubeikou-Jinshanling-Simatai Great Wall Hike",
      location: "Miyun County, China",
      category: [
        "Culture and Heritage",
        "Famous Journeys",
        "Mountain",
        "Forest",
      ],
      price: "1106.62",
      description:
        "The Great Wall at Gubeikou is craggy and steep. What makes Gubeikou so attractive is that there are a number of ancient villages and relics around where local culture is well-preserved. Panlongshan's Great Wall, on the way to Jinshanling, is less-visited, original, and one of the most recommended Great Wall hiking paths, with beautiful natural scenery. Some parts of Jinshanling's Great Wall are ruined and original, but some are restored. Hiking on the Great Wall at Jinshanling, you can see 15 towers and two forts. Simatai's Great Wall is a fabulous part of the Ming Dynasty Great Wall, which was uniquely designed and diversely constructed. You can hike along the rugged zigzag wall on steep mountain ridges. A museum with precious relics and collections recording the history and development of the Great Wall is located near Simatai.",
      details: [
        "Hiking time: 5 hours from Gubeikou to Jinshanling, and another 3 hours to Simatai",
        "Hiking level: Intermediate – advanced",
        "Recommended tour: 5-Day Jiankou to Simatai West Hiking Tour: Jiankou, Gubeikou, Simatai West, Jinshanling",
      ],
      imgURL: [
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/81128054_532891527580108_611812125545141912_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=iZYIoVIAtdsAX_nj-ly&tp=1&oh=ddd811a4f501056e3b6002cda2650822&oe=60533321",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/147910114_5018625334874493_2975155302780195667_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=pItOhPQ5L08AX-dSfkI&tp=1&oh=a45aeca87b1c4f03eeebc4534d2d5ccf&oe=605191DA",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/142174936_1824845824339366_2307045908263890868_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=4yic4-f28MEAX_gO9X-&tp=1&oh=2ee45a1689f09eaf9c60428c52e38648&oe=60514E84",
      ],
    },
    {
      title: "Mont Saint-Michel Experience",
      location: "Mont Saint-Michel, Normandy, France",
      category: ["Culture and Heritage"],
      price: "6822.68",
      description:
        "Visit the UNESCO World Heritage Site of Mont Saint Michel the hassle-free way. You’ll be transported in a comfortable minivan with a restricted number of passengers, for personalized service. Tour the scenic countryside of Normandy first, then explore the medieval town and monastery upon a rock in the sea. Your English-speaking driver will ensure you learn all about the history of this beautiful place. Read more about Mont Saint Michel Experience 2021 - Bayeux - https://www.viator.com/tours/Bayeux/Mont-Saint-Michel-Experience/d909-75372P3?mcid=56757",
      details: [
        "Estimated Duration: 6 to 8 hours",
        "Hotel transfers from Bayeux are included",
        "Train transfers and luggage storage can be provided on request",
        "Enjoy lunch in a scenic setting with views (food costs extra)",
        "An easy and enjoyable day trip from Bayeux",
      ],
      imgURL: [
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/80636935_1577989795690743_8495701752310213485_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=Nq4vrlcGJHgAX_9MJdd&tp=1&oh=cf1f20493f2cd9bfd6928d5af74646f3&oe=605237A7",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/141545981_115947393736062_7469206161001230497_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=ZH8wg9O4eRUAX9tyGsl&tp=1&oh=a6dec59e7a484c52b7bdfbb09e90c049&oe=6051605C",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/122026184_2462774127358926_5432456736167180576_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=fWb0Y_qhgWMAX-kmmDm&tp=1&oh=83348df26ca5eb4e5ec3e78ad4b1eba3&oe=6052B02C",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/123923838_901590377043056_1624770949399047088_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=bBnc3U5Ll3EAX93A2rL&tp=1&oh=007896374cf9e3d989ccf7af107a047e&oe=6051ECC3",
      ],
    },
    {
      title: "Pacific Crest Trail Hike",
      location: "West Coast, USA",
      category: ["Famous Journeys, Mountain, Forest", "Beach"],
      price: "97862.14",
      description:
        "Although it may not seem possible when you first begin dragging yourself through the desert of Southern California, the pace required to complete the PCT in four months is not unachievable. Before you know it you will be knocking out twenties, thirties, and maybe even a forty or two (or maybe you'll just stick to teens and twenties). According to the 2013 and 2014 thru-hiker surveys, the average number of zero-days taken by a thru-hiker is 19.5 (19 and 20 respectively). Laying off the zero-days, a four-month hike starts looking more plausible. Still, if you're short on time to begin with or you think that you're going to be doing a lot of zeroing and side tripping, you may want to reconsider your goal of a four-month thru-hike (or the idea of having a “goal” in general).",
      details: [
        "Length: 2653 miles",
        "Estimated Duration: 132 days",
        "Areas Traversed: California, Oregon, Washington, British Columbia",
      ],
      imgURL: [
        "https://westernpriorities.org/wp-content/uploads/2015/07/7718097420_dca62da1a3_k.jpg",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/149446321_1420232271653489_1665129134767746267_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=JJZlMqWgKB0AX_pwi3k&tp=1&oh=7b1a5c215ebee83951274e61e7c6c555&oe=6050A90B",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/144985427_3197050243855119_6267200196948283028_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=uK6iv_faRI4AX-CTdXv&tp=1&oh=122047bf14c684837309356c8f2d6be3&oe=60503011",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/149122478_3950065028411363_9203177206949467271_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=vTzDF9LyYnsAX8DxxeQ&tp=1&oh=23c5f78233e56ed5bbe3e88019418c43&oe=60522D6D",
      ],
    },
    {
      title: "Appalachian Trail Hike",
      location: "East Coast, USA",
      category: ["Famous Journeys", "Mountain", "Forest"],
      price: "80746.41",
      description:
        "This 110-day adventure brings you face to face with the many facets and hidden wonders of the Great Smoky Mountains. Your experience begins amidst misty valleys dotted with homesteads. Trees tower above the forest floor and waterfalls cascade down lush hillsides. We hike the park’s most beloved paths–including the iconic Appalachian Trail–and explore moonshine caves and old Civil War roads. For thrills, we raft down the rollicking Class II and III rapids of the Nantahala River and soar high above the forest floor on a mountaintop zip line tour. Each night our private deluxe REI Signature Camp awaits. Scrumptious meals next to cozy campfires and stories shared under a starlit sky create memories to last a lifetime. Finally, the warmth of a cozy sleeping bag beckons and we fall asleep to the sounds of the forest. This is a great trip for adults and fit, older teens. If you're traveling with younger children, check out our Great Smoky Mountains Family Adventure.",
      details: [
        "Length: 2189 miles",
        "Estimated Duration: 110 days",
        "Areas Traversed: Georgia, North Carolina, Tennessee, Virginia, West Virginia, Maryland, Pennsylvania, New Jersey, New York, Connecticut, Massachusetts, Vermont, New Hampshire, and Maine",
      ],
      imgURL: [
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p750x750/149139222_245049440434406_3169333216968121432_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=AVW4pBrQOWUAX_6u-ms&tp=1&oh=d4200d7ae030782908cbf4be48c7e69b&oe=6053CFB6",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/149761465_428681025128386_7063448097994469900_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=AmouTG1CYbMAX_Cs3Ox&tp=1&oh=c1609e38bfa5c1f56ef333c9a6f51b8a&oe=6050166B",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p750x750/149058325_214371833767638_3483995734124205103_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=oz5n2BNoGGgAX9kQm48&tp=1&oh=3f11124ee9d6e219aa38d2deba1399a8&oe=60508EC5",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p750x750/148990583_413514226377030_9143092104779501441_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=VMQUuIk2ZTwAX8OrrUi&tp=1&oh=ffb22607c94bffb85f2b21978a109761&oe=60525B05",
      ],
    },
    {
      title: "Ultimate Dolomites Adventure",
      location: "",
      category: ["Mountain", "Country Side", "Other"],
      price: "27370.41",
      description:
        "Start and end in Venice! With the Multi-sport tour Ultimate Dolomites Adventure, you have a 9 days tour package taking you through Venice, Italy and 9 other destinations in Italy. Ultimate Dolomites Adventure includes accommodation, an expert guide, meals, transport and more.",
      details: [
        "Bask in the panoramic views from a cable car above Cortina",
        "Step back in time and explore the WWI tunnels of Monte Lagazuoi",
        "Spend your nights with local Dolomite mountain families",
        "Max group size: 14",
        "Age range: 13 to 90",
        "Operated in: English",
        "Duration: 9 days",
      ],
      imgURL: [
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/140263743_700060400873773_407647146362253864_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=gQPC3BahGloAX-T_cNc&tp=1&oh=497d4a8b7463a5d93bbee5873e7413fe&oe=605134A2",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/149108625_466565274351555_7065645454274580007_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=SeKz8SUKo6MAX-X6p_a&tp=1&oh=44bb695037f289e21ce0ba8664c6fdf0&oe=605103B5",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/149498892_130425512284712_8884416368379122676_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=ETF7xBSwYr4AX9Zvp5N&tp=1&oh=433f40f20822356de878f6a3e8dd4967&oe=6051E75F",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/148496218_342449223746434_5253665481141096990_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=-NmmOd0_KwMAX9VY8r_&tp=1&oh=ea49d71db3e7dc06a82a85ea314d4151&oe=60536F89",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/149298848_175423307679318_1549013748997662402_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=hJYqC9_fPLkAX9QiS0y&tp=1&oh=968125efae9b1ab663ce09e5bf4d96fc&oe=6050AC5E",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/149139224_1029561994235930_3986388949798517084_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=WoZK4grcVRAAX9J9NRs&tp=1&oh=eaeb27d70e86737bacc1b4557bbba7ac&oe=605051C1",
      ],
    },
    {
      title: "Lofoten Northern Lights Photography Tour",
      location: "Lofoten, Norway",
      category: ["Mountain", "Beach", "Other"],
      price: "10737.17",
      description: "Embark on a thrilling night adventure as you set out in search of the elusive Northern Lights. Explore the remote Lofoten archipelago after-dark and head to secret lookout points to enjoy the best views of the Aurora borealis. If you’re lucky, you’ll have chance to see the Northern Lights and witness nature’s dazzling lightshow playing out over the startling Arctic landscapes. This small-group tour is limited to eight people, ensuring a personalized experience.",
      details: [
        "Northern Lights tour of the Lofoten archipelago",
        "Experience the unearthly beauty of the arctic at night",
        "Visit various viewing spots in search of the Northern Lights",
        "Enjoy spectacular views of the Aurora borealis (not guaranteed)",
        "Travel by comfortable mini-van with warm drinks and snacks provided",
        "Small-group tour limited to eight people ensures a personalized experience"
      ],
      imgURL: [
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/79960061_2406812846297797_2362966905584550369_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=XrMKS-I5glUAX8c8LHL&tp=1&oh=40ab877f57773ef8c6f90c22a88daff6&oe=6051C266",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/148600989_439664680419989_7337135905615174500_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=eFGaoNviyGgAX_gQPxD&tp=1&oh=9d3a6ed59e45f3f06255fb0814cc271c&oe=605230EC",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/149905623_238616444405203_2572253420293173300_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=5AGH9dMFFBYAX_s3aAB&tp=1&oh=5a823d490b3f261bfa384d298fc41f0c&oe=6053E10B",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/149533552_177403833828816_7409244710869754753_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=8dp8njGHnz0AX8nQ6oc&tp=1&oh=d45655b05e22da807f0078b693a73c25&oe=6051EB07"
      ],
    },
    {
      title: "",
      location: "Fanjingshan, China",
      category: [""],
      price: "",
      description: "This 3 days Fanjingshan tour is tailor made for people want a classic exploration of Mount Fanjing’s nature wonder and rich Buddhist culture relics. We will take you to cover all the top must-sees with a popular 7 or more hours’ hiking experience. You will hike up to the eye-catching Red Clouds Golden Summit to witness the praisable Fanjingshan Temple built on the top, walk to the landmark mushroom-like rock, have the panorama of the vast enchanting Mount Fanjing from the best sightseeing place on the Old Golden Summit, pray at the sacred Chen En Temple cluster, and enjoy more beautiful stones and rocks, Buddhist sites, etc. to find out why Fanjingshan enjoys so high statue among all natural and religion sites in the world.",
      details: [""],
      imgURL: [""],
    },
    {
      title: "",
      location: "",
      category: [""],
      price: "",
      description: "",
      details: [""],
      imgURL: [""],
    },
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
      title: "Culture and Heritage, Desert, Mountain",
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

// {
//   title: "",
//   location: "",
//   category: [""],
//   price: "",
//   description: "",
//   details: [""],
//   imgURL: [""],
// },
