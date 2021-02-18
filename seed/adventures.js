const bodyParser = require("body-parser");
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
      category: ["Culture and Heritage", "Other"],
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
      location: "Dolomites, Italy",
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
      description:
        "Embark on a thrilling night adventure as you set out in search of the elusive Northern Lights. Explore the remote Lofoten archipelago after-dark and head to secret lookout points to enjoy the best views of the Aurora borealis. If you’re lucky, you’ll have chance to see the Northern Lights and witness nature’s dazzling lightshow playing out over the startling Arctic landscapes. This small-group tour is limited to eight people, ensuring a personalized experience.",
      details: [
        "Northern Lights tour of the Lofoten archipelago",
        "Experience the unearthly beauty of the arctic at night",
        "Visit various viewing spots in search of the Northern Lights",
        "Enjoy spectacular views of the Aurora borealis (not guaranteed)",
        "Travel by comfortable mini-van with warm drinks and snacks provided",
        "Small-group tour limited to eight people ensures a personalized experience",
      ],
      imgURL: [
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/79960061_2406812846297797_2362966905584550369_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=XrMKS-I5glUAX8c8LHL&tp=1&oh=40ab877f57773ef8c6f90c22a88daff6&oe=6051C266",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/148600989_439664680419989_7337135905615174500_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=eFGaoNviyGgAX_gQPxD&tp=1&oh=9d3a6ed59e45f3f06255fb0814cc271c&oe=605230EC",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/149905623_238616444405203_2572253420293173300_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=5AGH9dMFFBYAX_s3aAB&tp=1&oh=5a823d490b3f261bfa384d298fc41f0c&oe=6053E10B",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/149533552_177403833828816_7409244710869754753_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=8dp8njGHnz0AX8nQ6oc&tp=1&oh=d45655b05e22da807f0078b693a73c25&oe=6051EB07",
      ],
    },
    {
      title: "Buddhist Getaway: Mount Fanjing",
      location: "Tongren, Guizhou Province, China",
      category: ["Culture and Heritage", "Mountain", "Famous Journeys"],
      price: "22132.41",
      description:
        "This 3 days Fanjingshan tour is tailor made for people want a classic exploration of Mount Fanjing’s nature wonder and rich Buddhist culture relics. We will take you to cover all the top must-sees with a popular 7 or more hours’ hiking experience. You will hike up to the eye-catching Red Clouds Golden Summit to witness the praisable Fanjingshan Temple built on the top, walk to the landmark mushroom-like rock, have the panorama of the vast enchanting Mount Fanjing from the best sightseeing place on the Old Golden Summit, pray at the sacred Chen En Temple cluster, and enjoy more beautiful stones and rocks, Buddhist sites, etc. to find out why Fanjingshan enjoys so high statue among all natural and religion sites in the world.",
      details: [
        "Become a Buddhist",
        "Hiking on the world natural world heritage",
        "Be stunned by the prosperous emerald forest around the mount",
        "Be impressed by the house-building difficulty on the top of Mount Fanjing",
      ],
      imgURL: [
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/83154549_2917358098322656_3415365178695779834_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=CkSL0drZ924AX-pDoQd&tp=1&oh=9c3c1baf62ddbac19c955dbfe00d91db&oe=6054C1AE",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/83895257_197095491677164_6548044820884832826_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=jjePJxpEFfMAX8ZKt9w&tp=1&oh=59f31eb2fa4c92e7938ccbf8a75e38f7&oe=6054872E",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/83089585_223974001954418_6947127399454124524_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=mIhS05OK5K0AX9wXWP5&tp=1&oh=9146a5d6d2a7206a42fe16a05ce7a726&oe=60534DF4",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/124194332_214133983438067_5183953753676788554_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=SavjK6PC2JcAX9NNR5Z&tp=1&oh=346031f4561ce4396bb286d5fcbf5c2e&oe=60532C84",
      ],
    },
    {
      title: "Tumpak Sewu Waterfall Repelling",
      location: "Malang Regency, East Java, Indonesia",
      category: ["Mountain", "Forest"],
      price: "5069.80",
      description:
        "Tumpak Sewu Waterfall or also called Coban Sewu is a 120 meter high waterfall located on the border of Lumajang Regency and Malang Regency, East Java Province. Tumpak Sewu Waterfall is the most beautiful waterfall in Java and Indonesia. Tumpak Sewu Waterfall has a unique formation because it has a wide flow of water like a curtain so that it is included in the Tiered waterfall type. Location Tumpak Sewu Waterfall is in a steep valley extending to an elevation of 500 meters above sea level. Tumpak Sewu Waterfall is formed in the Glidih River flow [1] which is tipped on Mount Semeru.",
      details: [
        "Not wheelchair accessible",
        "Not recommended for travelers with back problems",
        "Wear clothes to get wet",
      ],
      imgURL: [
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p750x750/50122760_1017258241795149_732897537789349705_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=sODlE-OKePMAX_ATHJW&tp=1&oh=0974eaded2de712b4c0b4e97cb8babb3&oe=6051C220",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/135416839_428240698223444_3515783125814754662_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=ilAAsuri9YgAX9nFsrN&tp=1&oh=49e41835123a1a373c0a32514113d4c3&oe=6054FDD6",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/149872499_258326609266931_6456516165787528875_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=cmCp_r4jMlYAX9fzs7D&tp=1&oh=d1d1cb4725ae966203fa2da2b54c29b6&oe=60532469",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/149722068_3668016549941123_6784172602075185552_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=Sct4Xiq6BM8AX-SKlFn&tp=1&oh=a0dd4efadd327b40941754ea8b29c8cd&oe=6054E18D",
      ],
    },
    {
      title: "Camel Ride to Petra",
      location: "Petra, Jordan",
      category: ["Culture and Heritage", "Desert", "Famous Journeys"],
      price: "19048.63",
      description:
        "While staying in Eilat you don’t want to miss Petra, which lies within close proximity. This day trip makes it easy with hotel pickup and a guide to secure your visa (own expense) at the border. A scenic camel ride through the mountains delivers you to Petra, one of the 7 New Wonders of the World. Marvel at the sandstone structures, including the Treasury and the 3,000-seat Roman theater.",
      details: [
        "Camels are mean, do not expect to befriend them",
        "Learn about the Nabateans who inhabited Jordan 2,000+ years ago",
        "Buffet lunch, hotel pickup and drop-off, and guide all included",
        "Brief sightseeing tour in the port city of Aqaba, time permitting",
      ],
      imgURL: [
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/30915571_457455754688722_4637322407634272256_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=zSQI-BHH_xQAX9PASPa&tp=1&oh=a1076b8f37714ddef6e5179cf95ab596&oe=6050D55F",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/46880036_386894911853074_1010059505183043395_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=nKmIXHseG3IAX8wpI0s&tp=1&oh=b59ec91033ff5288d62253582093dda7&oe=60513CBC",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/31270439_169806430306090_4123049062335250432_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=tam5uw3-5PAAX_tjxRc&tp=1&oh=56b0f8b4696d825582eb2921541795d5&oe=60500C24",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/143749953_475403546808982_4371199242814419591_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=RAbMWZidssQAX8ufl4I&tp=1&oh=11011d0c75b33378e67cbe34b19efbf3&oe=60564E80",
      ],
    },
    {
      title: "A Taste of Kanab: The Wave",
      location: "North Coyote Buttes, Arizona",
      category: ["Desert", "Other"],
      price: "25821.14",
      description:
        "The Wave is one of the world’s most unusual and beautiful sandstone formations, located in the desert at the border between Arizona and Utah. It is protected, along with the surrounding area of North Coyote Buttes, out of respect for its breathtaking beauty and fragility.",
      details: [
        "8 hour round trip",
        "Receive a personalized, custom-built tour of The Wave & surrounding area",
        "Fully guided, so you can relax and get lost in the moment as you explore",
        "Be one of only a few lucky explorers and enjoy an intimate discovery experience that day",
        "Add-on option available for stunning Wire Pass Slot Canyon",
      ],
      imgURL: [
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/41649187_261858281326378_8515852921074297883_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=kl1d_n17kKIAX-fN2eO&tp=1&oh=04a9b66818dbad35f00e10062cc4efd3&oe=60502A78",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/146096463_415575752885519_2552005582914397129_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=WM9qxSpeUuwAX-FGgJb&tp=1&oh=3e7dee2646ef2d77f95790d822c8b3e1&oe=605742AF",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/138574420_2831224197165821_8548370458567808605_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=yUI5eKxbrAUAX_GmFN0&tp=1&oh=6db289ebc793d299816d3ba3ef102b70&oe=6055B96F",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.175.1406.1406a/s640x640/142814737_157878032604169_3767857085817064616_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=Vo2DxY5-ZeYAX_Eg3Yg&tp=1&oh=0308a09b8457657265f3f4f8a04c4dd8&oe=60589349",
      ],
    },
    {
      title: "Phi Phi Islands Adventure Day trip with Seaview Lunch",
      location: "Phuket, Thailand",
      category: ["Culture and Heritage", "Mountain", "Beach"],
      price: "6081.08",
      description:
        "Make the most of limited time in Thailand on a speedboat tour of the Phi Phi islands from Phuket. Traveling by speedboat means you spend less time at sea and more time exploring the white sands and crystal waters of the islands, home to the bay made famous by 'The Beach.' Enjoy free time to snorkel, sunbathe, and swim, and relish the convenience of hotel pickup and drop-off in Phuket.",
      details: [
        "See more of the Phi Phi islands in less time on a speedboat",
        "Relax and enjoy the scenery as somoen else handles the boat",
        "Hotel pickup and drop-off included",
      ],
      imgURL: [
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/150620069_893889284730206_4116717443445256539_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=s8vbLGHtXlQAX_B97kJ&tp=1&oh=c67bb3553b5858299bda51481fc0f035&oe=6057D410",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/148393331_760910141475914_8033495925350965879_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=69gGJNFUpy8AX-Bab6d&tp=1&oh=e110c5fc69dd7c8f5b7c1f5d616bd4b9&oe=6059B46E",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/150347596_3699057420179919_3839441622311657436_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=k2NzvFAbIR4AX8o0UxQ&tp=1&oh=fe3a115d0d1e8385a907e01363e07158&oe=60598AAF",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/151295703_438650000713112_2592181220884865393_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=5NF4jQaedVEAX_Ubfeu&tp=1&oh=929aa0b6b81d82ba70933ab0b46e3118&oe=60596FA9",
      ],
    },
    {
      title: "Tulum Ruins, Reef Snorkeling, and Caves",
      location: "Tulum, Mexico",
      category: ["Culture and Heritage", "Beach", "Other"],
      price: "8034.25",
      description:
        "See the best of Yucatan in just one day on an action-packed tour from Cancun, the perfect choice for travelers with limited time. Experience the different cultural facets of Mexico as you explore the archaeological site of Tulum, snorkel in the Caribbean Sea, and hike jungle trails that lead to limestone caves. Convenient and cost-effective, this tour eliminates the hassle of organizing each activity separately, and includes all entrance fees, a buffet lunch, and hotel pickup and drop-off.",
      details: [
        "Social distancing enforced throught experience",
        "Transportation vehicles regularly sanitized",
        "Gear/equipment sanitized between use",
      ],
      imgURL: [
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/145198824_330790728197810_7617267728283831322_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=UZ5RnM_ICocAX8EwmC_&tp=1&oh=bb1240c984cbf48fc5b404ac20681836&oe=6059C13E",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/134460384_3569533979821394_3913510358670474907_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=bCVedxsMuDkAX-LbftK&tp=1&oh=92875e77ab540cc1c0a43db33c8484a1&oe=6057ECC6",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/149064327_865631300898282_7864662736921208256_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=vRaLWUBBgfkAX8oKY3d&tp=1&oh=932c292483edc738edc4f1bde62abb2a&oe=605756EE",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/127045638_1119721488484299_7791847697182990182_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=ce8YRlafv0gAX-OgNI5&tp=1&oh=0f4c21c6bce22f88d5888150a3e38f1f&oe=605903E2",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/151729218_1326083604457802_7300471134278137934_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=2u3vm2Ns7GQAX_bSWcW&tp=1&oh=88784e7ce1f0240cf38323d622831351&oe=6057D6C2",
      ],
    },
    {
      title: "Sal Buggy Island Adventure 4WD",
      location: "Sal, Cape Verde, Africa",
      category: ["Beach"],
      price: "16376.60",
      description:
        "Go off road in a rugged island buggy to explore Santa Maria on this half-day adventure. In a 500cc automatic buggy (two passengers per buggy), get to know the island's highlights, including the nature reserve of Serra Negra and the mirage at Terra Boa. Round-trip hotel transportation included.",
      details: [
        "Explore Santa Maria in an off-road buggy",
        "Visit the island's nature reserve and local mirage",
        "Two passengers per buggy",
        "Round-trip hotel transportation",
      ],
      imgURL: [
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/77024499_495659877975166_1819097296935870768_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=eM5NlytURcEAX-RD2c8&tp=1&oh=664486758d07d48fd5c08b197135411c&oe=6055DF64",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/70862394_387744378541676_4623006279478570703_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=TTakS3QgtlMAX-F4leD&tp=1&oh=8edcb94e006f8f4a3199ad373baa4ab9&oe=6058FD42",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/69467963_531727527655389_7437508471075212016_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=vN1ziqqrKV8AX93MKb7&tp=1&oh=9032c577925442b7f3e7963b16f1bf97&oe=6056E4D5",
      ],
    },
    {
      title: "Abel Tasman National Park Day trip",
      location: "Nelson, New Zealand",
      category: ["Beach", "Mountain", "Country Side"],
      price: "16899.93",
      description:
        "Abel Tasman National Park is a scenic highlight of the Nelson-Marlborough region. But if you’re pressed for time and can’t spend multiple days hiking the park, this day trip packs a lot into the few hours you have available. Cruise around Split Apple Rock and then anchor at Tonga Island Marine Reserve. Once there, take the opportunity to explore the Park on your own terms: go snorkeling by the beach, take a kayak down the coast, or disembark and hike along the Pitt Head loop overlooking Te Pukatea Bay.",
      details: [
        "Keep an eye out for local wildlife, including fur seals, penguins, and even dolphins",
        "Lunch is served on board, and drinks and refreshments are available throughout",
        "Save some cash at the dive shop: use the cruise’s free snorkels and kayaks",
        "Take advantage of a mid-afternoon departure time to get a sleep-in",
      ],
      imgURL: [
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/82314158_2464424493824189_6931973193092161918_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=lVIUQxfe8I8AX8-l9XL&tp=1&oh=7e8d2b99688c22a17ecba30db2527606&oe=6059A546",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/fr/e15/p1080x1080/97370907_2664131100465682_2086819587159793509_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=FNbmIfN4zwUAX916pcA&tp=1&oh=0043536fafb8be6eae3c2c6db2b8d505&oe=6059CAF6",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/84514536_3317531305052006_3959685130365534263_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=MQXkD8JYBRYAX_sfDc1&tp=1&oh=e364afe3c00d969b39e22bc33d80712e&oe=6058DBC8",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/82129109_520021495296879_8914260338311098368_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=-VrbDy8W0dcAX9wT5vd&tp=1&oh=1979a87fdf9376c47c20a79d2ff14d4b&oe=6056046E",
      ],
    },
    {
      title: "Vancouver to Tofino 2 Day Tour Private",
      location: "Tofino Island, Vancouver",
      category: ["Beach", "Other"],
      price: "46354.66",
      description:
        "Discover the natural beauty of Vancouver Island's West Coast on this small, personal tour of Tofino. Explore this amazing part of British Columbia, and admire the abundance of marine life and the rich culture of the First Nations people in the Tofino area.  Visit Beaches, Surf and kayak among a range of other outdoor activities available. Learn to surf the wild waves, or have fun watching other do so. Whether you are seeking adventure or just to take in all nature has to offer, Tofino has something for everyone.",
      details: [
        "This is a private tour/activity. Only your group will participate",
        "This experience requires good weather. If it’s canceled due to poor weather, you’ll be offered a different date or a full refund",
        "Travelers should have a moderate physical fitness level",
        "This experience requires a minimum number of travelers. If it’s canceled because the minimum isn’t met, you’ll be offered a different date/experience or a full refund",
      ],
      imgURL: [
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/142159107_454641592559750_3074797411775537561_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=fMCW1ZZCfRcAX-JjZ42&tp=1&oh=f5668c46920daa62f7fe76d999ed7e20&oe=60590E92",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/150795179_804241847177137_8616104100100428084_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=au_wHxcfvC0AX9Zfdzj&tp=1&oh=47a15e61b9cacc7025f71878fb238909&oe=605896E0",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/151298396_903843050444945_7776024707360697240_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=Ce9MwjFgwvkAX-pM6wu&tp=1&oh=b97b2f8a747f7f940a3a5a9ccbb31960&oe=60577175",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/fr/e15/s1080x1080/151358819_2222792474521988_8951182626363461786_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=CVNASSbDeIQAX9AIaFV&tp=1&oh=f8df7c0f06c766f4a9d898da673625c7&oe=6056A7A3",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/149184924_511243883605664_381256207555513799_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=0fIndd1o2MIAX-koHuc&tp=1&oh=78af1aff9500662e42c483e9cad90534&oe=6058FC04",
      ],
    },
    {
      title: "Hobbiton Movie Set Tour",
      location: "The Shire, New Zealand",
      category: ["Country Side", "Other"],
      price: "6565.95",
      description:
        "Join us and experience the real Middle-earth™ at the Hobbiton™ Movie Set, where, in the heart of the Waikato region, you can step into the lush pastures of the Shire™, as seen in The Lord of the Rings and The Hobbit trilogies. Fall in love with the Alexander family sheep farm, just as acclaimed director Sir Peter Jackson did, as you journey through the unequivocal beauty of the land, with the mighty Kaimai Ranges towering in the distance. Your guide will then escort you around the set, showing the intricate detailing, pointing out the most famous locations and explaining how the movie magic was made.",
      details: [
        "Fully guided around the 12 acre set",
        "Pass by: Hobbit Holes, the Mill, and world-famous Green Dragon Inn",
        "Complimentary, exclusive Hobbit Southfarthing beverages will conclude your own Middle-earth adventure",
      ],
      imgURL: [
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/141097775_429489894836390_2015380838443092275_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=dUIYM4lTXC0AX_emPDz&tp=1&oh=b9b9560a1fa7b252072ce158f145403c&oe=60585958",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/141364547_218749839886411_6036390712974356898_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=uO3WCe5qAboAX8T07bL&tp=1&oh=93682e4be5ac7a158bcb9fb556e2aeaa&oe=605608F1",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/148352788_1071779543319345_8482390957847641924_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=6ak1ozoI1PcAX-D-UkH&tp=1&oh=68df3abae8faaae0dd5b8d18ee687794&oe=60576EED",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/141733814_235348874721226_5939593742071162680_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=LCIbBItjuv8AX9j_xqY&tp=1&oh=31c405dd1c720a8f24c18f7d9847d710&oe=6057236F",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/147982793_870537033786294_1184032346203489506_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=L16g37EiukQAX8jdus4&tp=1&oh=49f7314e01f2a595848a8249aa4a2927&oe=605649B6",
      ],
    },
    {
      title: "Mardi Gras Festival",
      location: "New Orleans, Louisiana",
      category: ["Culture and Heritage", "Other"],
      price: "14754.94",
      description:
        'Mardi Gras, or Fat Tuesday, refers to events of the Carnival celebration, beginning on or after the Christian feasts of the Epiphany (Three Kings Day) and culminating on the day before Ash Wednesday, which is known as Shrove Tuesday. Mardi Gras is French for "Fat Tuesday", reflecting the practice of the last night of eating rich, fatty foods before the ritual Lenten sacrifices and fasting of the Lenten season.',
      details: ["Lots of flashing", "Lots of beads", "Lots of booze"],
      imgURL: [
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/s480x480/118766154_842979113109748_8575946871523541274_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=-IudvnajSuAAX_e93kR&tp=1&oh=8d56af17b189720233ecb2bff0344b70&oe=604F3A4B",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/144736012_598126391051595_660559886610411871_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=3b9rlnFRaagAX_v5Mpn&tp=1&oh=c33b4fd4e48c92bf85b3826e12084c6c&oe=604D8266",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/s480x480/148115275_218764106617161_7958404915325816880_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=tSBvMoDlxQ4AX-wCY2M&tp=1&oh=6caeafd0ff2ddfb185a4d705e73e2c84&oe=604DD43A",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/148586386_275099350700279_3179711886303248582_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=JWPQ2ElG2JoAX_Wo4XN&tp=1&oh=998022894a66053edd5cc1b84db474ee&oe=604F7926",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e15/s480x480/147979773_711321976221643_3020262014362745680_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=K1VNPJcTE_AAX98FSU2&tp=1&oh=4504bba2ec73da1735269781ec27b07f&oe=604DAB61",
      ],
    },
    {
      title: "Sand Boarding in Chile",
      location: "Iquique, Chile",
      category: ["Desert", "Other"],
      price: "4057.61",
      description:
        "Sand, sun and adrenaline, the perfect mix that makes sandboarding one of the up-and-coming activities in the country. Blessed with a wide variety of dunes of different shapes and sizes, Chile is one of the perfect places to slide down one of them at high speed. With the world’s driest desert, you’ll be able to surf the sand on its neverending dunes in the north. Visit the heart of San Pedro de Atacama and go on the adventure of sliding through the steep heights hidden in the Marte Valley on your board.",
      details: [
        "You will get sand EVERYWHERE",
        "Seriously, sand will be stuck places that you didn't think it could",
        "Sand is not as soft of a landing as you think",
      ],
      imgURL: [
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/41214776_269755880343502_3813504332618574898_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=e7PsrUCOvukAX-BMYEc&tp=1&oh=3e9494151c43a0650b46497932f7c307&oe=6059563A",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/152099667_333258488048502_2610787790996867598_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=2j7CtVyzOGcAX-H7Orq&tp=1&oh=35e7165cc8c880389f76d22c6f95e106&oe=6057BBA2",
      ],
    },
    {
      title: "Banff Johnston Canyon Icewalk",
      location: "Banff National Park, Alberta, Canada",
      category: ["Mountain", "Forest", "Other"],
      price: "5264.56",
      description:
        "Trying to trek along the frozen Johnston Canyon without a guide could be tough in frigid temperatures with icy walkways. Opt to take this guided tour from Banff, and see wildlife, waterfalls, and, of course, a lot of ice. Plus, this tour provides round-trip transport, ice cleats, a hiking pole, a snack, and a hot cup of cocoa to make things super easy on you.",
      details: [
        "Duration: 4 hours",
        "A guide knows the Johnston Canyon Icewalk and helps keep you safe",
        "All equipment—ice cleats and a hiking pole—is provided for convenience",
        "A snack and hot chocolate keeps you warm and energized",
        "Round-trip transport is included with this Johnston Canyon Icewalk tour",
      ],
      imgURL: [
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/98078687_2577387435849469_3779370138627500312_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=VJS-WzK2w1UAX8Ql870&tp=1&oh=6cc5600065acae99c15aa48c7aa28439&oe=604C47BD",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/136978897_3591020130935703_5077723398796619608_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=j7INbdXsiBQAX-7TOX4&tp=1&oh=feebfdb248a7df4d13ea1aa861560c1e&oe=604BDA36",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/125430667_181991756850743_8515574898162984136_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=GYtudcADj9kAX8raVCb&tp=1&oh=f41afb71a8e5b0b3aa55abbf81f6b749&oe=604F810D",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/119915768_387939739232994_1660751932430685352_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=qrkL2WUnUb0AX_ThtQb&tp=1&oh=2293685a3de8a5d8736db813f571c221&oe=604E3A16",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/116641512_2729520050703080_6100239451463949017_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=7MU2GpdyRRcAX9Tv4si&tp=1&oh=4efbfc0b37cee09d7c84f1f05d89f2dd&oe=604E929C",
      ],
    },
    {
      title: "Journey to Mars: Zion",
      location: "Zion National Park, Utah",
      category: ["Mountain", "Desert", "Other"],
      price: "41535.16",
      description:
        "The trails we have planned for your group will take you to dizzying heights (only if you want to) at the top of world famous Angel's Landing, a chance to dip your toes in crystal clear pools with a waterfall, and a relaxing walk up one of the deepest and most beautiful slot canyons in the world while following a picturesque stream. You can even get into the water and hike if you want to. We can cover as many miles as you would like, at a moderately strenuous to a strenuous pace and elevation. You will be amazed at the red, white, pink and yellow cliffs, and the absolute majesty of the 2, 000 foot deep Navajo sandstone mountains. The stunning beauty of Zion National Park will remain with you for the rest of your life!",
      details: [
        "Duration: 6 hours",
        "All guiding services are restricted to certain trails, though these happen to be the most popular trails in the park.",
        "Transportation provided for you and your group is in a clean and air-conditioned 15 passenger, Ford F-350 van.",
      ],
      imgURL: [
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/97298647_543833246334780_782493291976647107_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=vfWqKw3vZ8AAX9o7g9_&tp=1&oh=aa06333372607a0bd94c21ad2162f80a&oe=604CEA67",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/103048764_559254454985738_8245059997880735610_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=48D_yzLxqrIAX90cRc5&tp=1&oh=a97b6805167c02fe8441183c38fb5908&oe=604DC088",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/137405593_103187338336547_748810783398866633_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=hhTwDHaxBxQAX8qx92E&tp=1&oh=9878a7e12382e2a3934b1d9ee8eefe35&oe=604F3139",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/132291402_148451540125585_6873570794279791563_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=6X7kkk0zKDgAX8Stlmf&tp=1&oh=6f3715e5d38f405da358f89939ef565d&oe=604C12AC",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/130704876_400395021378304_877340804427308809_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=8ocHclkWLoIAX_c3xEQ&tp=1&oh=a08601ef5f6880fb314cc8de13b47dc4&oe=604E2B65",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/126163422_399088461242626_8580145001238657824_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=dfFPEJBAI5IAX8kBmec&tp=1&oh=e2118f83c77f752bbb739feafc569a68&oe=604F3C83",
      ],
    },
    {
      title: "Sigiriya Ancient Ruins Hike",
      location: "Matale District, Sri Lanka",
      category: ["Culture and Heritage", "Mountain", "Forest"],
      price: "4672.89",
      description:
        "Instead of long bus journeys or haggling with cabs, see Sri Lanka's Sigiriya Rock and Dambulla Cave Temple in one stress-free and illuminating private tour from Kandy. With your own air-conditioned vehicle to relax in and a driver-guide to share the UNESCO-listed sites’ history; cover more ground in a day, be free to make other stops, and obtain a deeper understanding of both attractions than if exploring alone.",
      details: [
        "Visit Sigiriya Rock and Dambulla’s Cave Temples on a private tour from Kandy",
        "Swap buses and cabs for the comfort and flexibility of a private vehicle",
        "Explore the sites and hear background on them you might miss if by yourself",
        "Relax with convenient pickup and drop-off at hotels in central Kandy",
      ],
      imgURL: [
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/84985167_781950435639102_7838871176378381020_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=D1B04gof700AX8dPm2H&tp=1&oh=068cc9cf7b1d414de4bef2def5fe414a&oe=60578FCF",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/82735886_183679306241731_762026412032166999_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=7tEHsQ3p2ywAX_f1sHR&tp=1&oh=cbb7fa37344c44e09873525fef644a95&oe=60572D50",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/84439060_100363464875601_6357442208471587307_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=Lm0XjXfltJ8AX-ORNCl&tp=1&oh=bccb44e695751458338eb2695db75af7&oe=60597DF1",
      ],
    },
    {
      title: "Relaxation in Bora Bora",
      location: "Bora Bora, French Polynesia",
      category: ["Beach"],
      price: "343052.35",
      description:
        "Best resort we have ever stayed at. We have stayed at multiple 5 star resorts around the world and this one has set the standard. The staff is so friendly, pay attention to detail and are available to help anytime. We had our wedding here and every detail was perfect. We are already planning our trip back.",
      details: [
        "Breakfast Included",
        "Free Wifi",
        "Free Airport Shuttle",
        "Duration: 3 nights",
      ],
      imgURL: [
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/149922177_3700447616736149_4768838196529342344_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=12EFA-04aoIAX-_sUTY&tp=1&oh=7f3b78b3c39b2a0e5fe7f1c71f163976&oe=60576BD4",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/150988496_213323163834079_1958653550379836838_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=_g8uegq7b48AX_IQXCW&tp=1&oh=83f507cdabfb107e566c763e5569d81f&oe=60562598",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/152354062_244719747197936_6881624643317138642_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=YC_jmh7TbiQAX9DdXbq&tp=1&oh=8ce4dbf53d08352279f4484d772d127d&oe=60594F28",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/151081055_275800410697570_3726536714630776352_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=68xWAD_7qGwAX_DyZ44&tp=1&oh=fd1579acccc6ae8f87e1ad8b5d6a2265&oe=605838F1",
      ],
    },
    {
      title: "Horseback Riding in The Seychelles",
      location: "Victoria, Seychelles",
      category: ["Beach"],
      price: "36887.35",
      description:
        "We are offering the best way to explore and experience the wild and exotic beaches of the World's oldest mid oceanic granitic islands, on Horseback! Lush tropical jungle trails that extend onto pristine white sandy beaches with majestic mountains looming overhead, create a once in a lifetime memory. This ideal excursion could be your perfect event for romance, exploration or relaxation.",
      details: [
        "Travel the beaches of paradise on a horsey",
        "Horsies are big and nice",
        "Horsies enjoy sand in their hooves",
      ],
      imgURL: [
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/142542907_841976089703568_8986488815875313378_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=SLjbDv2JNKcAX9oiujH&tp=1&oh=c1ab173f6c1352499fa8f038f9999777&oe=6058DE37",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e15/142653990_249687889868821_4934135343655967699_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=yNeb3A3_b4AAX85u4Z6&tp=1&oh=f94e0735ad1984d71c9005429081372c&oe=60572D39",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/149244592_1139706483149078_6294096738919105317_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=yLMx4JMyUrYAX9k6YG1&tp=1&oh=91bd9db6c3bc39f4802eaa857ade79d5&oe=6057C688",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/150757791_757793888449690_1897831487673051510_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=iIeOW2CKTmwAX8lOfln&tp=1&oh=f77530ddedde82e38cfb08bab5d1eafa&oe=60582521",
      ],
    },
    {
      title:
        "Private Luxury Golden Triangle Tour to Agra and Jaipur From New Delhi",
      location: "Rajasthan, India",
      category: ["Desert", "Culture and Heritage", "Country Side", "Other"],
      price: "14358.03",
      description:
        "To explore India’s Golden Triangle from Delhi, you’d need to handle all the logistics, including trains, hotels, cabs, tickets, and local guides. Leave all the planning to someone else on this private tour, which includes a driver-guide, tickets, and transport by private air-conditioned vehicle. Tour must-visit sights such as the Taj Mahal, Agra Fort, and Amber Fort.",
      details: [
        "Travel the Golden Triangle from Delhi by private air-conditioned vehicle",
        "Visit Delhi, Agra, and Jaipur in four days, without travel or ticket hassles",
        "Explore the Taj Mahal, Agra Fort, and Amber Fort with personal guides ",
        "Option to include 4- or 5-star hotels with daily breakfast",
      ],
      imgURL: [
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/150859499_1308352052884229_820320283126515494_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=5zSMekZG5tIAX-XQ9wh&tp=1&oh=d429867e3ac7ce5bc019748944753e7a&oe=6059D4F8",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/151341735_1540030832858553_5774046621869308494_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=fiISSvswAxQAX_kTLOL&tp=1&oh=bd900e3956c4757bee0e492ead32b396&oe=60567E87",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/150063774_938413036931148_2991219723846463063_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=4Lo3C80xK_EAX_QWbre&tp=1&oh=6c59cb73b84e361265d17e3599dc1235&oe=605703BF",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/150974237_248653650066920_6647229211643840470_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=p3z_x0NiRKQAX_JIeN8&tp=1&oh=918005226b55eb972821f286e9799913&oe=6058A20D",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/151122915_1051741398668974_630795518726061233_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=gvgSv-Jjn2cAX_GmnuX&tp=1&oh=2b253ef2916e5df10e48ea9ba1660d2c&oe=60599014",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/150747827_448704239651836_3800831018564572077_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=NSJSYx3aMIQAX-mqXVc&tp=1&oh=32452cf1bf8e5c3f0a3f4534bb0ff12d&oe=605769FB",
      ],
    },
    {
      title: "Saint Barth Plongee Diving Center",
      location: "Saint Barthelémy, Caribbean",
      category: ["Beach"],
      price: "22132.41",
      description:
        "The diving instructor will be exclusively for you, as a kind of guide in this diving savanna, full of surprises and discoveries. Kind of coach in an aquatic environment, the diving instructor is certified and has complete knowledge of this tropical underwater region. He will take you directly to the most attractive sites according to your level. 1 to 2 persons.",
      details: [
        "Claustrophobia can be expected",
        "No, you will not be eaten/taken away by a shark",
        "Hundreds of species of beautiful tropical fish",
      ],
      imgURL: [
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/141488364_243071057333205_6874800874366732556_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=hOSCb2kAexIAX-GWMFF&tp=1&oh=63c91a466c01fc698ceb0760a125eab5&oe=60571BF5",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/149309039_168674311485035_4002693094272572513_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=5bVK_PFgDvoAX_ziNnr&tp=1&oh=c49ef8f4a9696eecf769978c3e1bd395&oe=6059120D",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/151202016_3517165251726839_2830279278723545202_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=qNh-E1imEoEAX_1L6i_&tp=1&oh=21308bb2b2ebe1602aa920604fc98600&oe=605890A8",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/151841524_4045603388806311_367407189542050_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=Km5-nL70prsAX8bgCbS&tp=1&oh=457acd454b7179f58da8afb2ed83b931&oe=6056F6A7",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/150784846_254462789576480_7481318250409843738_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=bMuECOB5qz4AX9S-OFd&tp=1&oh=8cc72ba4b799330d0d379a629efaaccd&oe=60579782",
      ],
    },
    {
      title: "Majlis al Jinn Cave",
      location: "Muscat, Oman",
      category: ["Desert", "Other"],
      price: "18812.55",
      description:
        "Majlis al Jinn is one of the largest cave chamber in the world by surface area. The base of the cave is58,000 square meter. The only way to get in is through one of three tiny openings at the top, all of which have been formed over time as the accumulation of rainwater dissolved the limestone covering. In an attempt to find an appropriate name for the chamber, they asked the Omanis in the surrounding area if they had a local name for it, to which the response was no. They did, however, mention that they believed that the cave was filled with genies, which are prevalent in Omani mythology. In Arabic, the word for “genie” is “al-Jinn”, so hence, the American explorers named the cave is “Majlis al Jinn. “Majlis” means “meeting place,” making the cave name, “the meeting place of the genies.”",
      details: [
        "2nd largest cave system in the world",
        "Majlis al Jinn translates to 'Meeting Place of the Genies'",
        "Tallest chamber is 310m by 225m and 120m tall",
      ],
      imgURL: [
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/120344090_2751838668473023_5004267188642423790_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=oanSw3LMYnMAX_X8usW&tp=1&oh=ef8b23019d8e58f82f72e4cc85c205a6&oe=60580BB5",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/130791057_681655709177576_2048850930731696442_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=3rw6OUolUx0AX8GxAWb&tp=1&oh=136b56974a463b8ea0873ac96d59c312&oe=6056CDBB",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/131344926_111653267447551_6555319371211947642_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=fn70tXEk8TYAX-uc1cJ&tp=1&oh=3cf6f9c951d97e8a3b140b77a0dd0462&oe=6058C1DF",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/106463438_749769825808295_4563720183327645235_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=HO5k1IClFtgAX99pWID&tp=1&oh=301017fdeb08b566e612c2d57ddcf1db&oe=605659B8",
      ],
    },
    {
      title: "Chivarreto Boxeo Tournament of Champions",
      location: "Chivarreto, Guatemala",
      category: ["Culture and Heritage", "Other"],
      price: "737.75",
      description:
        "Chivarreto boxing, also known as Boxeo a puño limpio, is a type of boxing that is practiced in the Chivarreto villa in San Francisco El Alto, Totonicapan, Guatemala. It is a popular activity in town and there is an annual tournament, held during Semana Santa every year, with fights held on Good Friday. The tournaments began as a punishment to criminals who'd then have to fight it out amongst themselves; since 1900, it developed into an open contest in which anyone can participate, and winners receive trophies.",
      details: [
        "Only bare-knuckle fighting allowed",
        "Anyone is allowed to fight",
        "If you fall, it's considered a knockout",
      ],
      imgURL: [
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/56823644_102175594296061_6018402854460903748_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=lDjpLhlwXs4AX-hGImi&tp=1&oh=c032822c14d8441e7a0e73de281ca849&oe=60578664",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/56622644_172591586978700_8356629118510470210_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=u3FBxlMB0d4AX8YO2xH&tp=1&oh=5cfd7ab32bda361787bf522147d32f5d&oe=6056C26E",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/56718631_622059894926609_8034892723237918640_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=9688K5gfFFkAX__v1-k&tp=1&oh=19766a1a0052fdb6ed83c6289909c49c&oe=60584101",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/56791039_498140920720170_2184124030863693462_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=3AjsltfdOQkAX-e6Mep&tp=1&oh=4141fd257f472866a5c2351aa1114a46&oe=60590F55",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/58453531_843280886025092_5889519371689316996_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=lLWAU7MVc7cAX8cktEY&tp=1&oh=dbbe72ae539d3311b258498be6e17edf&oe=60586C6C",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/56377266_379563549559756_3634701206762345827_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=-ZWEJ14sscUAX8v5iuM&tp=1&oh=4fb113b46b27aef9ef56052ac446a408&oe=6057329D",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/56857804_856748181342291_2140126322812568306_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=86bfgNhRU7cAX8UJ8Qx&tp=1&oh=da344e98dd2b2bf3f380b83897d34489&oe=60560B6D",
      ],
    },
    {
      title: "Dakar Rally",
      location: "Dakar, Saudi Arabia",
      category: ["Desert", "Other", "Famous Journeys"],
      price: "11066.20",
      description:
        "The world-famous Dakar Rally, a renowned race through the most challenging terrains is coming to Saudi Arabia. The race starts from the city of Jeddah (west) and goes north to the soon-to-be-built city of Neom, then to the city of Hail in the middle of the country and continues the race back to Riyadh via the Eastern Region and the desert of the Empty Quarter.",
      details: [
        "Started the first week of the year and lasts two weeks",
        "Star Wars was filmed here",
        "Deadly race",
        "Length: 4660 miles",
      ],
      imgURL: [
        "https://scontent.cdninstagram.com/v/t51.2885-15/e15/p480x480/140575229_724905721358929_8015882774885128239_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=2CDsFyvlzrgAX9D19MA&tp=1&oh=4e15b9912911753993b0a1ce0e31d748&oe=604E83A4",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/151054066_780511802864590_9222060836087614496_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=VxufXi2dfxgAX_0H7Lz&tp=1&oh=2699e0502e89a3defd07e73cc3fd60e6&oe=6056DE81",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/138647075_1328253897533074_2470900608493671878_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=oylW6y7Ls1AAX-xpZS5&tp=1&oh=4804a5ea87123f9c4e0bd27e7fa19ca8&oe=604E1496",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/150323190_2471964933097427_4674131347390652643_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=LPAkFo2ob7MAX8oW3UH&tp=1&oh=745c0187cf046990904ef9049fda3810&oe=60566601",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/143182784_806614623538213_3261360833322046458_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=48RplcxNkMgAX8PdKhX&tp=1&oh=075b53227bd91bca995d96871785074b&oe=60574674",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/143999137_250064003243744_8177608283969122718_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=8_7QtPMsGPkAX-11J1J&tp=1&oh=6f6f7fa43b227f66b1f59ecfb4d5c210&oe=6059B62A",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/151054066_780511802864590_9222060836087614496_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=VxufXi2dfxgAX_0H7Lz&tp=1&oh=2699e0502e89a3defd07e73cc3fd60e6&oe=6056DE81",
      ],
    },
    {
      title: "Wadi Al Disah Backpacking Trip",
      location: "Tabuk Province, Saudi Arabia",
      category: ["Desert", "Mountain", "Forest", "Other", "Famous Journeys"],
      price: "7377.47",
      description:
        "Wadi Al Disah is a beautiful mountainous valley in Saudi Arabia’s northwestern Tabuk province. Al Disah translates to “the valley of palm trees”, and when you arrive here you’ll see exactly why. The luscious valley floor is surrounded by massive sandstone cliffs and pillars that are perfect for exploration.",
      details: [
        "Entire Tambuk Province is breathtaking",
        "Can rent camels or SUVs to traverse",
        "Fairly off-the-beaten-path",
        "Mostly only locals",
      ],
      imgURL: [
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/133947307_435469550806059_928461723681999649_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=dPDoEwpkekQAX-yV3Qt&tp=1&oh=099c7b34249d36aee4057eb624aae7e1&oe=604C59DA",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/137246747_183767403484758_7241086718978491222_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=Om5kvttgsQYAX9Uh2LE&tp=1&oh=13c82d01c31dc21d9b62938b5295e62e&oe=604E99DB",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e15/s480x480/83120376_838765779907457_2964263724746844841_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=kDy6Uy_UszcAX-0Ax33&tp=1&oh=b4e40e74bdcceb048f5d9208367b2cb1&oe=604DFF87",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/s480x480/130961252_674321283239105_8748336611639911694_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=8q8EsQY0qH0AX_P0c6B&tp=1&oh=95cdb1667007a7838301e75fc025d049&oe=604ECD0E",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/140030488_127443029211178_4818406493543940554_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=2t7P5tfxQFEAX_wFS7C&tp=1&oh=70ec1aa2f9d12bb991cde43a14c84828&oe=604DC4A1",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/71281674_556649038424983_390450647494451499_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=OW83AUg4ZYMAX9pETHd&tp=1&oh=11dd824853f17ea55b23f296089688a1&oe=604CB76F",
      ],
    },
    {
      title: "American Horse Skijoring",
      location: "Soldier Hollow Nordic Center, Utah",
      category: [
        "Famous Journeys",
        "Culture and Heritage",
        "Country Side",
        "Other",
      ],
      price: "9590.71",
      description:
        "Utah Ski Joring is an action packed competition where a horse and rider pull a skier at a fast pace through a course that includes gates, jumps, and rings. Ski Joring combines Utah's signature ski heritage with its cowboy roots creating a wild, fast paced and spectacular event. Competitors race for cash and prizes based on the fastest times.  Above all, Ski Joring is a great reason to get outside, socialize with amazing people and have some fun while supporting our local athletes and sponsors.",
      details: [
        "Spectators, Tailgaters, and Competitors",
        "Competitors get HURT",
        "Masks are required in 2021",
      ],
      imgURL: [
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/150992210_881933602642452_1903573021015047659_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=3Bh1r0ciZ1MAX_Sq0Kb&tp=1&oh=0863b3ecac4924c9762611cdb5c21c08&oe=6059659A",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/151294495_133332078659209_101639281250626652_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=zI2IPWcWjsAAX-qCR-E&tp=1&oh=0ae630d7475d1199d079a864571ec833&oe=605606D6",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/150491324_860746967830831_7264883762929693177_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=RB6mYnBTOgAAX9RW8s6&tp=1&oh=74afd3e7d77ed64cfc2f05d4b4f3d23f&oe=60566DB9",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/150475764_300674788088476_854860579617587328_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=61yegQIucOYAX-ORoGr&tp=1&oh=51f8b6df77ee084f0b75bc268595c1a0&oe=60585755",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/150648740_267164698181069_4110127232600728946_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=TUmz2u1ceoAAX_77HcI&tp=1&oh=a287b05c24fa8a636ac8f26ed3bab812&oe=6058598B",
      ],
    },
    {
      title: "Socotra Island Adventure",
      location: "Socotra Island, Yemen",
      category: ["Country Side", "Desert", "Forest", "Mountain", "Beach"],
      price: "139803.06",
      description:
        "Unlike anywhere else on earth. Socotra has to be seen to be believed. The island is so remote that one third of its plant life can only be found there. Socotra has a total population of around 70,000 people who speak their own native Socotri language. Apart from the main town of Hadiboh, little infrastructure exists on the island. Socotra is a remarkable place for camping, walking, hiking, wildlife spotting & cultural immersion. It’s for anyone who wants to experience a natural world like no other.",
      details: [
        "Duration: 8 days",
        "Must fly in from Dubai",
        "Must be seen to be believed",
      ],
      imgURL: [
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/101101451_560968408188987_7594274513170813957_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=XA82db_z-VQAX8sOQez&tp=1&oh=aa2ceea1659767474678dd64fca50235&oe=60585EF7",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/150590847_188806306103352_8596914136230301236_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=9pBNzrnqKn0AX95Xb2c&tp=1&oh=5db40b22ce2aef5facf3fe7588af5ee3&oe=6059572F",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/121080163_342357266850131_5962077968652814515_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=AOuUGGbR6DAAX_vGzUl&tp=1&oh=24daf0a321634e6c17ad76d2b76fe6bb&oe=60587F52",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p750x750/151001566_169196611638492_3428045666919492416_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=aVxWLiaxzMUAX8wwZFx&tp=1&oh=18f2ec955afa23848fa54fbae7a7ae76&oe=6056A2BA",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/128719830_852174668876363_3421408397237191112_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=iEfC1F_9Oq8AX_3qQb7&tp=1&oh=5b68199c6ddc41b10fad1f77140bf301&oe=60599911",
      ],
    },
    {
      title: "Atacama Crossing 250km Race",
      location: "San Pedro de Atacama, Chile",
      category: ["Desert", "Mountain", "Famous Journeys", "Country Side"],
      price: "147549.40",
      description:
        "The Atacama Crossing is a 7-day, 250 km / 155 mile footrace that takes place in the incredible Atacama Desert of Chile. Through the seven days, competitors traverse through salt flats, massive sand dunes, icy cold slot canyons, river crossings, and experience starry nights while in the foothills of the Andes mountains as they complete the 250-kilometer / 155-mile course. The race goes through the Salar de Atacama, Moon Valley and Valle de la Muerte, and finally ends in the Town Square of the adobe-like village of San Pedro de Atacama.",
      details: [
        "Duration: 7 days",
        "Length: 250km",
        "Supplies: backpack, clothes on your back",
        "Pure HELL",
      ],
      imgURL: [
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/152083433_126667106007843_8036550525176587547_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=FqZyY-SDlGMAX8PmOcr&tp=1&oh=a0905ab0f0084db61a5d4a947ac99ab8&oe=6058A54B",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/149064327_1328746007499038_4020883618638373985_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=jMvn0yUfOXwAX9kl9mo&tp=1&oh=fd39257a5b2653a191983f02054bca89&oe=60564A8D",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/150919862_180103716841325_1221844775354890356_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=I5wFIkANHbEAX9ODFDo&tp=1&oh=7e1fa6dcc8412a445b2bcbbc83201f0e&oe=6056229D",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p750x750/149073035_755436085094761_1192663689498646522_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=BKNdTurlWhYAX9f_jJG&tp=1&oh=4e89885000ac2e64d5a1ca48d6a9180c&oe=60575665",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/fr/e15/p1080x1080/148570488_3253830134717027_8781236001662373132_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=qIaEWiY5R2QAX-B5-UV&tp=1&oh=39a154596be1b2eecc4b100b84c7a8e6&oe=6058DBC1",
      ],
    },
    {
      title: "Rock Climb the Marble Cliffs of El Chico",
      location: "Chile Chico, Chile",
      category: ["Mountain", "Forest", "Country Side", "Other"],
      price: "309779.97",
      description:
        "This epic 20-day climbing adventure is designed for outgoing thrill seekers who want to visit the rugged Chilean Andes and experience the wild frontiers of Patagonia. It kicks off in Chile’s capital, Santiago, before heading south to Patagonia.",
      details: [
        "Level of climbing ability: Advanced",
        "Level of fitness: Average, above average",
        "Duration: 20 days",
        "Maximum elevation: 3500m",
      ],
      imgURL: [
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/141306749_131261505417660_7698313479463197369_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=2iIM1Q_LqSMAX_foIgX&tp=1&oh=040ffbeeff1d03bc407f59db57ebc9d3&oe=605956EF",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e15/144604309_254892436154305_642048392507423095_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=NmjRYdPnDlkAX-weSPp&tp=1&oh=8910f2a4e493a4636ed9b7b4a98b03e0&oe=605902D9",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/140808428_874150816684466_4199177065162412491_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=aEe_IZaYXS4AX-J9Q7s&tp=1&oh=d886c19a6e185d2e0a64a7969609426a&oe=6059332F",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/118472133_118161216482837_5525054072020820636_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=j8m4ZwDAjsUAX8KER8T&tp=1&oh=545f019cf742f37cf71a5747e4a34e8a&oe=60568FBC",
      ],
    },
    {
      title: "Pilgrimage of Hajj",
      location: "Mecca, Saudi Arabia",
      category: ["Famous Journeys", "Country Side", "Culture and Heritage"],
      price: "368873.50",
      description:
        'In Islamic terminology, Hajj is a pilgrimage made to the Kaaba, the "House of God", in the sacred city of Mecca in Saudi Arabia. It is one of the Five Pillars of Islam, alongside Shahadah, Salat, Zakat and Sawm. The Hajj is a demonstration of the solidarity of the Muslim people, and their submission to God (Allah).[6][7] The word Hajj means "to attend a journey", which connotes both the outward act of a journey and the inward act of intentions.',
      details: [
        "Annually since 630AD",
        "Attendance usually in the millions",
        "Duration: July 22nd to August 19th",
        "Holiest of all Muslim cities",
      ],
      imgURL: [
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/150681811_147308570549228_6224412777599917669_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=LfxuE570mCkAX_AFjPz&tp=1&oh=432cb605b08ae583a4b2bfa8e96d30f6&oe=6058D208",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/150413698_1803378643169445_7476800563210932464_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=qVzBSK-vQUsAX-tXsvN&tp=1&oh=e002f30d803990a7800c417c709f0aa8&oe=60566E12",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/151056622_763900304538966_5218521472803428319_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=PtC9QCOV-EMAX_ySabJ&tp=1&oh=d5938e79a370315376dab71e65c88ea5&oe=60589087",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/150532363_182426869917107_516282403150699376_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=vQwbTxF5ntIAX-qIQOV&tp=1&oh=080dcba97f7d78046f3480376eab28b2&oe=6059E308",
      ],
    },
    {
      title: "Redwood National Park Private Tour",
      location: "Redwood National Park, California",
      category: ["Forest", "Country Side"],
      price: "190560.05",
      description:
        "Discover the majestic hidden wonders of Northern California Redwood State and National Parks. Embark on this unforgettable custom adventure and outdoor getaway. This is unique destination, a travel bucket-list. This travel package includes your daily complimentary pick-up and drop off, a private expert tour guide in a luxury vehicle and a 100% private trip itinerary to suit your needs. Redwood National and State parks’ entrance fees, all taxes, a private 3-day tour and hotel accommodation with resort fees all included. To experience the dramatic effect of the towering giant redwoods, let your private tour guide escort you on a walking guided tour based on your preference and needs, whether you want to walk, hike or simply drive through the ancient redwoods without even stepping out of the vehicle. This remote wilderness offers you a spectacular drive through picturesque back roads & trails towered by the world tallest and largest redwood! You have to see this to believe it.",
      details: ["Duration: 3 days", "All meals and lodging taken care of"],
      imgURL: [
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/150674511_1114294772329275_4596052357391066243_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=wNc-SJUkMqoAX8MRJTc&tp=1&oh=10483b6140a0068880550155782e7115&oe=60591848",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/151228587_5459567590720095_8720373402516622194_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=HrDg7rp8_hEAX-aZywn&tp=1&oh=b153ac59dddf2851d6980a54f4a519fd&oe=6058FBCB",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/150633961_416147256148929_9063278843268295635_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=MdCdfgcA3l0AX90O8n-&tp=1&oh=964f65b00b1d86a528232c2ee39865b3&oe=60572BBE",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/119520217_365654877794803_1122437883146331594_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=kDh7pGMpOeUAX8ZXb8L&tp=1&oh=f6356829fa07ff4a6cc10e10bf7a43ea&oe=60587A51",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/138760394_431169014690713_5441082795611384625_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=ESmx8t0DhGwAX80XhtH&tp=1&oh=92d8fff8d2ec46ca6337eab66b911d43&oe=6056B3A1",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/151099688_261628791992887_7190477091804601281_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=SHWAik-dAUMAX-KZv0v&tp=1&oh=672a2659875d4c6a9dad922d76a65ca8&oe=60588882",
      ],
    },
    {
      title: "Tanzania Budget Safari",
      location: "Serengeti National Park, Tanzania",
      category: ["Country Side", "Other"],
      price: "90497.21",
      description:
        "Want to experience the “Wild Africa” in an authentic way? A camping safari is for you! Tanzania budget camping safari packages are lower in price and pocket-friendly than their lodge safari packages and luxury safari packages counterpart. The visitors get to sleep in tents which keep them closer to nature and wildlife. It’s a better way to enjoy the beautiful landscape of most national parks.",
      details: [
        "Duration: 4 days",
        "Lions, tiger, and no bears... oh my",
        "Wild animals are not your friend",
      ],
      imgURL: [
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/146133582_222678632871383_4789869373731033968_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=rOhl8VbfKdYAX9ctnTP&tp=1&oh=d2fb0bbb4c75d7b475139d6f5a83e734&oe=60576468",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/151292450_1333876993634903_1308915589135568700_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=w74VXhpCMKoAX9e-uWz&tp=1&oh=4c54e37fc278170f13f519b3a6db4e69&oe=6059882A",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/151142246_1322593068117447_7129730341462113619_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=irK3z3tkaRsAX-AMyjl&tp=1&oh=a34010da76b1ac4f963d6ddd8e4c7700&oe=60575920",
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/151142246_1322593068117447_7129730341462113619_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=irK3z3tkaRsAX-AMyjl&tp=1&oh=a34010da76b1ac4f963d6ddd8e4c7700&oe=60575920",
      ],
    },
    {
      title: "Tour of Arco Mango",
      location: "Arco Magno, Italy",
      category: ["Culture and Heritage", "Famous Journeys", "Beach"],
      price: "8000",
      description:
        "Famous all over the world, this small beach is truly a pearl. Crystal clear water and a sunset where the sun's rays enter the door. The initial journey (about 15 min) does not weigh on you when you find this show in front of you.",
      details: [
        "15 minute hike to destination",
        "Guided tour of entire area",
        "Gourment lunch or Dinner included",
        "Transportation to and from hotels available",
      ],
      imgURL: [
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/150094779_739341800287336_1723276445443906731_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=lBNXctOfZC4AX-JOrb8&tp=1&oh=2d7f39169273ecba280898d4281cbe8a&oe=60553FA7",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/150094779_739341800287336_1723276445443906731_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=lBNXctOfZC4AX-JOrb8&tp=1&oh=2d7f39169273ecba280898d4281cbe8a&oe=60553FA7",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/131077482_3750609175032234_5374784522431212734_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=xfndEzpo7dMAX8fyM6b&tp=1&oh=b3357ea1e206b18279f254a890ab93f7&oe=6058C2B2",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/s480x480/151361953_112239274216065_8859736758266017301_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=sMGnS2TT5iEAX9Nel2U&tp=1&oh=84ba893c1469406bb5bb154d98c475bf&oe=605599DA",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/148558024_408623303773354_6582161755520112056_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=lJDqyC1fX3cAX_QNA4a&tp=1&oh=fddcd65a97d96f3a3d9a5e67c8ce935f&oe=60575765",
      ],
    },
    {
      title: "Cabin by the Soca River, Slovenia",
      location: "Tolmin, Slovenia",
      category: ["Forest", "Mountain", "Country Side"],
      price: "30,000/night",
      description:
        '"Two cabins Na Biru certainly have one of the prettiest locations in the middle section of the Soča river. Undearneath mount Mrzli vrh and very close to our emerald beauty on the edge of Gabrje village you will find a perfect spot for a quiet or active holidays. Great option for families, fishermen, cyclers, hikers ... anybody!"',
      details: [
        "Sleeps 6 adults",
        "Fully equipped kitchen",
        "Priceless views",
        "Pet Friendly",
      ],
      imgURL: [
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/37183915_230688687587919_1296630019409313792_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=iN6Wj62qnQAAX8xpio_&tp=1&oh=268d18b75ff8a8797d01d574f5a835ac&oe=60572130",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/s480x480/41534264_268776093964693_1202921413755073258_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=afCWz-VHU_QAX_Qs_Nz&tp=1&oh=b39a910861a557fa956a14c8927344ae&oe=6057AAAE",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/s480x480/34682302_360698034453445_5404058247034306560_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=Nnszdmz0A4sAX8tNNaS&tp=1&oh=c40c2962de222b19a8f99803abf2f72e&oe=6056EBD5",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/s480x480/27576204_159871414667633_4397897729141899264_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=4uZLljQZtioAX_GYRqS&tp=1&oh=ecedd172843089988397a197053d30a2&oe=6057F365",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/s480x480/17663411_429079960778050_4898214629752176640_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=xXW6y0FDeewAX9Y1Rgs&tp=1&oh=385b2f3c11d06742c5dcde0b40a5b105&oe=60583A1E",
      ],
    },
    {
      title: "Private Surfing Lessons",
      location: "Maui, Hawaii",
      category: ["Beach"],
      price: "7500",
      description:
        "Learn to surf in Maui with Private Surf Lessons, Stand Up Paddleboarding and Canoe Surfing away from the crowds! Our skilled instructors are patient and thorough with their instruction. ",
      details: [
        "Learn to surf from some of the top professionals",
        "All equipment included",
        "Free Digital Photography included",
      ],
      imgURL: [
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/35575396_364462950744813_5202827729157750784_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=Dy6eQgD01O0AX-RS6vW&tp=1&oh=154dbbfca60503c9565f59d30521c2b9&oe=6058640F",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/106510018_2995962863836242_7000370252224422577_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=hzpg_BJdgYsAX_lWn67&tp=1&oh=8cc6ef8fdd52bf022504e5b00bdc2523&oe=6057CF47",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/s480x480/150913769_2497124717260337_4187519708417257037_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=0uswOw4V1rEAX_2-65n&tp=1&oh=aa3c305022acd39a445bf3252cc0479f&oe=605789DA",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/s480x480/151061845_3682969158465167_7610054839198651091_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=jiQdbX44spUAX9QGmvv&tp=1&oh=2033d4896c9b7664823f22739668f75e&oe=6055CB4E",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/146475594_233405491835132_3493993304241076621_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=WEsXEuHmKz8AX-G5Yu1&tp=1&oh=2673146ee1e5cb3c89735f443f51f337&oe=605830C5",
      ],
    },
    {
      title: "Forest Cabins in Switzerland",
      location: "Bern, Switzerland",
      category: ["Mountain", "Forest"],
      price: "25,000",
      description:
        "Trans is a small mountain village south of Chur 5 km from the Chur San Bernadino motorway. You reach this small mountain village via a narrow mountain road. This road is ok to drive, because the bus stops there 4 times a day. Haus Sonnegg is in a beautiful location, with a view to the south and offers a magnificent view of the Bündner Alps. This farm is still working, producing fresh cheese, milk and eggs, and the good care of the owner Ruth. The home is furnished with care, and has a lovely balcony with a top view. Parking in front of the house.",
      details: [
        "Breath taking views",
        "Quick access to multiple hiking trails",
        "Fully stocked kitchen",
        "Cable/Satelitte Tv",
      ],
      imgURL: [
        "https://scontent.cdninstagram.com/v/t51.2885-15/e15/p480x480/30855499_192914748005624_1782026723324329984_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=CxaZfgQi7aIAX8sZcvu&tp=1&oh=3a2bda3a0f4892a1e6e3a757a898373c&oe=605530F0",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/s480x480/150162919_185052580065907_6198188672446337566_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=0vFRDWrYBskAX-N_yIx&tp=1&oh=4799ba0b5057b2ab6c6d0885c18f1fe7&oe=60589D58",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/s480x480/149476892_219598946515631_7039251049641115364_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=kWax8YdgEWAAX-LqUlW&tp=1&oh=949f8ec40e418c96d149137b7c46c384&oe=605618D2",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/s480x480/148711257_1913779335455450_1869106662020333500_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=Yga8aiAJxigAX8LAcZh&tp=1&oh=f20cc96c402b2597eccd3eef5385733e&oe=60591706",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/s480x480/137271761_739451076979210_7436280918211885900_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=ha_iiW6w7ZEAX--znlK&tp=1&oh=5a676087ff4cbae03d009f671925201c&oe=60560C50",
      ],
    },
    {
      title: "Bali House Rentals",
      location: "Bali Indonesia",
      category: ["Culture and Heritage", "Famous Journeys", "Other"],
      price: "20,000/night",
      description:
        "Opera Villa is perfectly located mere steps away from Coconut Beach, a small peaceful cove closest to the local surf breaks looking North across the ocean, with the sacred Mount Agung in the horizon.  Lay back and relax in the 20m infinity lap pool, while you check the surf and gasp at the view. We have 5 friendly staff for your personal butler service. They will make your breakfast daily and arrange anything you need.",
      details: [
        "Luxurious Villa located steps from a pristine Beach",
        "Infinity Pool",
        "Fully stocked kitchen and bar",
        "24/7 Room Service",
      ],
      imgURL: [
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/91894206_519604932327851_6855248686194385939_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=s9SqZMlhxfcAX_-3_J1&tp=1&oh=5254240ec49cbd90d2118331a9f0edbd&oe=6055A189",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/147826617_157972232800817_243438434802754026_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=UVGa0LubqjgAX-Xc-q_&tp=1&oh=d5952dfa7f1dd015980b2030ed8fd7b6&oe=6057EC83",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/146416558_219351559931945_8764298223222928087_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=dPcGOEHJThQAX8dL9I_&tp=1&oh=92bc59672e62da054feb906c9d0cfe5a&oe=6055CCC8",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/144111754_2114960998640894_4817063798571163142_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=bIXjnS7KOd4AX_3U6kk&tp=1&oh=bd56939ee707a12aecaea552790d697e&oe=6056FDBB",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/143400005_268063994669879_2184397933638770144_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=FVk74ZupbokAX8BRLJs&tp=1&oh=7fcb44b5617564489bc9277506806b4e&oe=60575800",
      ],
    },
    {
      title: "Kyoto Boat Tour",
      location: "Kyoto, Japan",
      category: ["Cultur and Heritage", "Famous Journeys"],
      price: "5000",
      description:
        "Take a boat ride through some of Kyoto's most scenic and tranquil parts.  Our guides are fluent are all multi-lingual in Russian, English, and Japanese.",
      details: [
        "2 hour long boat ride with friendly guide",
        "Opportunity to see some of the regions natural beauty",
        "Beverages and snacks available throughout tour",
      ],
      imgURL: [
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/41673078_344458579454532_7420573419078806893_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=38Op4QEuPrAAX9PjMmi&tp=1&oh=33670a40fdc746279227763e86573bf2&oe=605608F4",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/s480x480/11939310_786404681468804_507668684_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=NFazCMqAAGkAX_8Rg3B&tp=1&oh=1405de62b40b751c5a9cab8bc6b4f6d1&oe=605808BB",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/17494367_1135052736606720_8939439402547937280_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=h30WOBYpYMEAX8sRQHP&tp=1&oh=27f7d3c96b4ea61658980456d9e49025&oe=605645C8",
      ],
    },
    {
      title: "Alpine Jeep Rentals",
      location: "Swiss Alps",
      category: ["Mountain", "Forest"],
      price: "10,000/day",
      description:
        "Come enjoy magnificent mountain vistas, wildflower filled meadows, crystal clear mountain streams, bighorn sheep, black bear, marmots, or white-tailed deer, this is an experience you don’t want to miss. Guided 4x4 tours or private multiday rentals available.",
      details: [
        "Multi-day rentals to access parts of the country otherwise unacessable",
        "24/7 roadside emergency maintenance",
        "Guided Tour Options",
        "Access to private trails",
      ],
      imgURL: [
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/89225227_562164671315859_5036329430875035294_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=E_XqBysUC0kAX8ejRHL&tp=1&oh=dfb79fe7cd01f0a85b4bdc52c481bbbd&oe=60561735",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/146169996_726171784930572_8267159520365396119_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=jlHo7FUt5loAX9WzzgX&tp=1&oh=381ac97bc9f567f90b2f6b254425b820&oe=605609BB",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/146062410_444348993589873_44554213443104791_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=UpQC4XN0AaMAX-ljFdK&tp=1&oh=2f20d804e035481f9ae7cffc29d28dde&oe=60557F7E",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/144078426_190677879411553_8565403135362149532_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=F_PGKlt9BiIAX_0GgtR&tp=1&oh=c7a8c595e0337f3778fcb10439d65438&oe=60573390",
      ],
    },
    {
      title: "Applachian Trail Tours",
      location: "East Coast, USA",
      category: ["Forest", "Mountain", "Famous Journeys"],
      price: "2000",
      description:
        "Follow one of our experienced guides as you hike parts or all of the world famous Applachian trail.  This journey is 2,190 miles long and spans over 2/3 of the east coast of the United States.",
      details: [
        "Hiking equipment provided",
        "Access to private lodging available throughout",
        "Emergency services available 24/7",
        "Transportation to and from starting and ending points included",
      ],
      imgURL: [
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/88204883_284142452550904_1113199196666979135_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=-zFkSA1iCnMAX_yMym9&tp=1&oh=9c4a2ba564adf160749d27a4b5d875b2&oe=60580E3D",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/s480x480/143379815_102566455095209_3223971626422639964_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=Cu-YMdfhntgAX_FodFc&tp=1&oh=ec52048a0a4e87fefb421c89c8cf5dd2&oe=6058CD09",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/s480x480/138589889_402413024152815_846236708891567609_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=gWnzWkNksGwAX-dpr4J&tp=1&oh=d4ff916f817b1ed537f6163aa78c722c&oe=6056EBF8",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/s480x480/135817530_447075046474776_4836968985663399999_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=yS1CtE4q0aMAX9HkUtH&tp=1&oh=ae952bff8d6da9b4579ae719702e8ea2&oe=605693EE",
      ],
    },
    {
      title: "Bora Bora Bungalows",
      location: "Bora Bora, Tahiti",
      category: ["Beach", "Famous Journeys"],
      price: "50,000/night",
      description:
        "A South Pacific paradise that combines the highest standards of service with ultramodern comforts and the natural ease and gracious hospitality of the Polynesian culture. Set upon Bora Bora's surrounding coral atoll, the Resort is a vast tropical grove, replete with coconut palms and pandanus trees. Meandering channels of pure turquoise lead to the main beach or to smaller lagoons, waiting to be discovered. Every vista is breathtaking.",
      details: [
        "Private over water bungalows",
        "Access to 4 fine dining restaurants",
        "World Class Spa",
        "Butler Service",
      ],
      imgURL: [
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/87226071_186591489283795_5990734799709358675_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=aV7cTFfPJS0AX9qQ7sc&tp=1&oh=6ed270d0a78df9716fb3264185682488&oe=605684D2",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/148789341_279020953609007_5787357774898224104_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=JTtTJw_jkjkAX_ZQWUb&tp=1&oh=96b2d5e3d7a90d42d9f96d09ba5a1906&oe=605665BC",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/s480x480/147432040_408791123540098_221886173348727818_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=Qqlin5pJzpkAX9hXS16&tp=1&oh=6afd3cdc9282c1008027f406ad96beb0&oe=605909A1",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/144328977_811212196128140_7704001843716866996_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=pwZDg-7rEhYAX-FDvbL&tp=1&oh=43b6684850155b152812e64beb9786be&oe=605974D9",
      ],
    },
    {
      title: "Taj Mahal Yoga Classes",
      location: "Agra,Uttar Pradesh, India",
      category: ["Famous Journeys", "Culture and Heritage"],
      price: "3500",
      description:
        "Yoga courses offered in the gardens surrounding the Taj Mahal.",
      details: [
        "Courses offered for any level",
        "Mats and towels provided",
        "T-shirt and photo included",
      ],
      imgURL: [
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/77425998_279451822986184_3372904222943416965_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=uJFXq1BzGtwAX8Z6Krr&tp=1&oh=b5362592257d4ec2720eb0a57968f86f&oe=60561466",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/s320x320/150751092_837223920196765_9103045546528855677_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=GEZqd5a5wv8AX_ZssBB&tp=1&oh=e9a8303dc13371864078f934b7b8e7a8&oe=6058E51F",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/151021916_102350758527230_5008798100034204766_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=i992s0zUA74AX-RNrNu&tp=1&oh=56e11b0ffec324aee9b8a3f9aea99585&oe=6055D01C",
        "https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/151181409_595866781388804_1390731403616917483_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=afC2VJAVndMAX9sVwpD&tp=1&oh=62b40e0865234137eee7a79d2dab7a8f&oe=60577AE5",
      ],
    },
  ];

  await Adventure.insertMany(adventures);
  console.log(" New Adventures added!");
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
