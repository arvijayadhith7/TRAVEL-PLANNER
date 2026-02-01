// Tamil Nadu Tourism Database - Updated with Real Data
// Hotels, Restaurants, and Tourist Spots with Real Images

const tamilNaduDestinations = {
    // ============================================
    // OOTY - Queen of Hill Stations
    // ============================================
    ooty: {
        id: "ooty",
        name: "Ooty",
        fullName: "Udhagamandalam",
        tagline: "Queen of Hill Stations",
        description: "Nestled in the Nilgiri Hills, Ooty is a picturesque hill station known for its tea gardens, colonial architecture, and pleasant climate year-round.",
        image: "https://images.unsplash.com/photo-1570094876927-bafbe77cbe92?w=800",
        rating: 4.6,
        bestTime: "March to June",
        weather: { summer: "15-25°C", winter: "5-15°C" },

        hotels: {
            economy: [
                {
                    name: "Hotel Khems",
                    price: 1500,
                    rating: 3.9,
                    amenities: ["Free WiFi", "Hot Water", "Room Service", "Parking"],
                    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
                    location: "Commercial Road, Ooty"
                },
                {
                    name: "Sunvalley Homestay Coonoor",
                    price: 1800,
                    rating: 4.0,
                    amenities: ["Free WiFi", "Garden View", "Breakfast", "Parking"],
                    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400",
                    location: "Coonoor, Near Ooty"
                },
                {
                    name: "The Hosteller Ooty",
                    price: 1200,
                    rating: 4.1,
                    amenities: ["Free WiFi", "Common Kitchen", "Heritage Vibe", "Activities"],
                    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400",
                    location: "Ooty Town"
                }
            ],
            midRange: [
                {
                    name: "Sterling Ooty Elk Hill",
                    price: 5500,
                    rating: 4.3,
                    amenities: ["Valley View", "Swimming Pool", "Restaurant", "Kids Activities"],
                    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400",
                    location: "Elk Hill, Ooty"
                },
                {
                    name: "Sterling Ooty Fern Hill",
                    price: 4800,
                    rating: 4.1,
                    amenities: ["Nilgiri View", "Restaurant", "Bonfire", "Indoor Games"],
                    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400",
                    location: "Fern Hill, Ooty"
                },
                {
                    name: "Fortune Resort Sullivan Court",
                    price: 6500,
                    rating: 4.4,
                    amenities: ["ITC Hotel", "Fine Dining", "Spa", "Fitness Center"],
                    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400",
                    location: "Selbourne Road, Ooty"
                },
                {
                    name: "Gem Park Ooty",
                    price: 5200,
                    rating: 4.2,
                    amenities: ["Central Location", "Multi-cuisine", "Conference Room", "Room Service"],
                    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400",
                    location: "Sheddon Road, Ooty"
                }
            ],
            luxury: [
                {
                    name: "Savoy - IHCL SeleQtions",
                    price: 18000,
                    rating: 4.8,
                    amenities: ["Heritage Property", "Fine Dining", "Spa", "Butler Service", "Fireplace"],
                    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400",
                    location: "77 Sylks Road, Ooty"
                },
                {
                    name: "Sinclairs Retreat Ooty",
                    price: 12000,
                    rating: 4.5,
                    amenities: ["Highest Resort in South India", "Valley View", "Buffet Breakfast", "Bar"],
                    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400",
                    location: "Near Doddabetta, Ooty"
                },
                {
                    name: "Accord Highland Hotel",
                    price: 9500,
                    rating: 4.4,
                    amenities: ["Hill View", "Restaurant", "Conference", "Room Service"],
                    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400",
                    location: "Havelock Road, Ooty"
                }
            ]
        },

        attractions: [
            { name: "Ooty Lake", type: "Nature", duration: "2-3 hours", entryFee: 30, rating: 4.5, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400" },
            { name: "Government Botanical Gardens", type: "Nature", duration: "2-3 hours", entryFee: 50, rating: 4.7, image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400" },
            { name: "Doddabetta Peak", type: "Viewpoint", duration: "1-2 hours", entryFee: 0, rating: 4.6, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400" },
            { name: "Government Rose Garden", type: "Nature", duration: "1-2 hours", entryFee: 30, rating: 4.5, image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400" },
            { name: "Nilgiri Mountain Railway", type: "Experience", duration: "4-5 hours", entryFee: 250, rating: 4.8, image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400" },
            { name: "Pykara Falls & Lake", type: "Nature", duration: "3-4 hours", entryFee: 20, rating: 4.4, image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=400" },
            { name: "Avalanche Lake", type: "Nature", duration: "4-5 hours", entryFee: 50, rating: 4.6, image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400" }
        ],

        restaurants: [
            { name: "Earl's Secret", cuisine: "Continental", priceRange: "₹₹₹", rating: 4.6, image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400", specialty: "European Fine Dining" },
            { name: "Nahar's Sidewalk Cafe", cuisine: "Multi-cuisine", priceRange: "₹₹", rating: 4.5, image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400", specialty: "Wood-fired Pizzas" },
            { name: "Shinkow's Chinese Restaurant", cuisine: "Chinese", priceRange: "₹₹", rating: 4.4, image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400", specialty: "Classic Chinese" },
            { name: "Hotel Junior Kuppanna", cuisine: "South Indian", priceRange: "₹", rating: 4.5, image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400", specialty: "Traditional Tamil Meals" },
            { name: "Adyar Ananda Bhavan (A2B)", cuisine: "Vegetarian", priceRange: "₹", rating: 4.3, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400", specialty: "South Indian Thali" },
            { name: "Kingstar Confectionery", cuisine: "Bakery", priceRange: "₹", rating: 4.4, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400", specialty: "Homemade Chocolates" }
        ]
    },

    // ============================================
    // KODAIKANAL - Princess of Hill Stations
    // ============================================
    kodaikanal: {
        id: "kodaikanal",
        name: "Kodaikanal",
        fullName: "Kodaikanal",
        tagline: "Princess of Hill Stations",
        description: "A pristine hill station in the Palani Hills, known for its star-shaped lake, dense forests, and the famous Kurinji flowers that bloom once every 12 years.",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800",
        rating: 4.5,
        bestTime: "April to June, September to October",
        weather: { summer: "11-20°C", winter: "8-17°C" },

        hotels: {
            economy: [
                {
                    name: "Hotel Vetrivel International",
                    price: 1400,
                    rating: 3.8,
                    amenities: ["Free WiFi", "Hot Water", "Room Service"],
                    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
                    location: "Anna Salai, Kodaikanal"
                },
                {
                    name: "Jayaraj Residency",
                    price: 1600,
                    rating: 3.9,
                    amenities: ["Free WiFi", "Restaurant", "Parking"],
                    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400",
                    location: "Near Bus Stand"
                },
                {
                    name: "Cherry Blossom Homestay",
                    price: 1800,
                    rating: 4.1,
                    amenities: ["Lake View", "Homemade Food", "Garden"],
                    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400",
                    location: "Near Kodai Lake"
                }
            ],
            midRange: [
                {
                    name: "The Carlton Kodaikanal",
                    price: 12600,
                    rating: 4.6,
                    amenities: ["Lake Front", "Fine Dining", "Spa", "Fitness Center"],
                    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400",
                    location: "Lake Road, Kodaikanal"
                },
                {
                    name: "Sterling Kodai Lake",
                    price: 6000,
                    rating: 4.3,
                    amenities: ["Lake View", "Bonfire", "Gardens", "Activities"],
                    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400",
                    location: "Overlooking Kodai Lake"
                },
                {
                    name: "Sterling Kodai Valley",
                    price: 5500,
                    rating: 4.2,
                    amenities: ["360° View", "7.5 Acre Property", "Restaurant", "Indoor Games"],
                    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400",
                    location: "Pallangi Road"
                },
                {
                    name: "Villa Retreat Boutique Hotel",
                    price: 7000,
                    rating: 4.4,
                    amenities: ["Heritage Property", "Garden", "Fireplace", "Breakfast"],
                    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400",
                    location: "Coaker's Walk Road"
                }
            ],
            luxury: [
                {
                    name: "The Tamara Kodai",
                    price: 20000,
                    rating: 4.9,
                    amenities: ["5-Star Resort", "Elevation Spa", "Fine Dining", "Butler Service"],
                    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400",
                    location: "La Providence, Kodaikanal"
                },
                {
                    name: "Dvara Luxury Resort",
                    price: 15000,
                    rating: 4.8,
                    amenities: ["Luxury Cottages", "Spa", "Multi-cuisine", "Valley View"],
                    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400",
                    location: "Perumalmalai Road"
                },
                {
                    name: "Kodai Resort Hotel",
                    price: 12000,
                    rating: 4.5,
                    amenities: ["Luxury Rooms", "Restaurant", "Room Service", "Garden"],
                    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400",
                    location: "Coaker's Walk"
                }
            ]
        },

        attractions: [
            { name: "Kodaikanal Lake", type: "Nature", duration: "2-3 hours", entryFee: 0, rating: 4.7, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400" },
            { name: "Coaker's Walk", type: "Viewpoint", duration: "1 hour", entryFee: 20, rating: 4.5, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400" },
            { name: "Pillar Rocks", type: "Viewpoint", duration: "1-2 hours", entryFee: 15, rating: 4.4, image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400" },
            { name: "Bryant Park", type: "Park", duration: "1-2 hours", entryFee: 40, rating: 4.3, image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400" },
            { name: "Silver Cascade Falls", type: "Waterfall", duration: "1 hour", entryFee: 0, rating: 4.5, image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=400" },
            { name: "Guna Caves (Devil's Kitchen)", type: "Adventure", duration: "2 hours", entryFee: 0, rating: 4.4, image: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=400" },
            { name: "Dolphin's Nose", type: "Viewpoint", duration: "2-3 hours", entryFee: 0, rating: 4.5, image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400" },
            { name: "Berijam Lake", type: "Nature", duration: "4-5 hours", entryFee: 150, rating: 4.6, image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400" }
        ],

        restaurants: [
            { name: "The Royal Tibet", cuisine: "Tibetan", priceRange: "₹₹", rating: 4.5, image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400", specialty: "Momos & Thukpa" },
            { name: "Cloud Street", cuisine: "Multi-cuisine", priceRange: "₹₹", rating: 4.4, image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400", specialty: "Continental & Indian" },
            { name: "Pastry Corner", cuisine: "Bakery & Cafe", priceRange: "₹", rating: 4.6, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400", specialty: "Fresh Pastries & Coffee" },
            { name: "Tava Restaurant", cuisine: "North Indian", priceRange: "₹₹", rating: 4.3, image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400", specialty: "Tandoori & Curries" },
            { name: "Aby's Cafe", cuisine: "Cafe", priceRange: "₹", rating: 4.4, image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400", specialty: "Coffee & Snacks" },
            { name: "Hotel Astoria Veg", cuisine: "Vegetarian", priceRange: "₹", rating: 4.2, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400", specialty: "Pure Vegetarian" }
        ]
    },

    // ============================================
    // MAHABALIPURAM - UNESCO Heritage Site
    // ============================================
    mahabalipuram: {
        id: "mahabalipuram",
        name: "Mahabalipuram",
        fullName: "Mamallapuram",
        tagline: "UNESCO World Heritage Site",
        description: "An ancient port city with stunning rock-cut temples and sculptures from the 7th century Pallava dynasty, overlooking the Bay of Bengal.",
        image: "https://images.unsplash.com/photo-1621926438061-c92e28d8e8e0?w=800",
        rating: 4.7,
        bestTime: "November to March",
        weather: { summer: "28-38°C", winter: "22-30°C" },

        hotels: {
            economy: [
                {
                    name: "Hotel Mahabs",
                    price: 1800,
                    rating: 3.8,
                    amenities: ["Beach Access", "Free WiFi", "AC Rooms", "Restaurant"],
                    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
                    location: "Othavadai Street"
                },
                {
                    name: "Lakshmi Cottage",
                    price: 1500,
                    rating: 3.7,
                    amenities: ["Near Beach", "Free WiFi", "Parking"],
                    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400",
                    location: "Shore Temple Road"
                },
                {
                    name: "Lee Crysstal Hotel",
                    price: 2000,
                    rating: 3.9,
                    amenities: ["Beach Front", "Restaurant", "Room Service"],
                    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400",
                    location: "Othavadai Cross Street"
                }
            ],
            midRange: [
                {
                    name: "Chariot Beach Resort",
                    price: 6500,
                    rating: 4.3,
                    amenities: ["Private Beach", "Pool", "Spa", "Multi-cuisine Restaurant"],
                    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400",
                    location: "ECR Road, Mahabalipuram"
                },
                {
                    name: "Radisson Blu Resort Temple Bay",
                    price: 9000,
                    rating: 4.5,
                    amenities: ["Sea View", "Multiple Pools", "Spa", "Kids Club", "3 Restaurants"],
                    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400",
                    location: "57 Kovalam Road"
                },
                {
                    name: "Golden Sun Beach Resort",
                    price: 5500,
                    rating: 4.2,
                    amenities: ["Beachfront", "4 Restaurants", "Pool", "Ayurveda Spa"],
                    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400",
                    location: "Beach Road"
                },
                {
                    name: "Coral Beach Resort",
                    price: 4500,
                    rating: 4.1,
                    amenities: ["Beach Access", "Pool", "Restaurant", "Garden"],
                    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400",
                    location: "Shore Temple Road"
                }
            ],
            luxury: [
                {
                    name: "Taj Fisherman's Cove Resort & Spa",
                    price: 22000,
                    rating: 4.9,
                    amenities: ["Beachfront Cottages", "Water Sports", "Spa", "3 Restaurants", "Pool"],
                    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400",
                    location: "Covelong Beach"
                },
                {
                    name: "InterContinental Chennai Mahabalipuram",
                    price: 18000,
                    rating: 4.8,
                    amenities: ["Private Beach", "Infinity Pool", "Spa", "Fine Dining"],
                    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400",
                    location: "ECR Road"
                },
                {
                    name: "Sheraton Grand Chennai Resort & Spa",
                    price: 15000,
                    rating: 4.7,
                    amenities: ["5-Star Resort", "Beach", "Spa", "Multiple Restaurants", "Pool"],
                    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400",
                    location: "ECR Road"
                },
                {
                    name: "Welcomhotel by ITC Hotels",
                    price: 12000,
                    rating: 4.6,
                    amenities: ["ITC Property", "Beach", "Fine Dining", "Spa"],
                    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
                    location: "Kalpakkam Road"
                }
            ]
        },

        attractions: [
            { name: "Shore Temple", type: "Heritage", duration: "1-2 hours", entryFee: 40, rating: 4.8, image: "https://images.unsplash.com/photo-1590766940554-634f7a23b1b6?w=400" },
            { name: "Pancha Rathas (Five Rathas)", type: "Heritage", duration: "1-2 hours", entryFee: 40, rating: 4.7, image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400" },
            { name: "Arjuna's Penance", type: "Heritage", duration: "1 hour", entryFee: 0, rating: 4.6, image: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=400" },
            { name: "Krishna's Butter Ball", type: "Heritage", duration: "30 mins", entryFee: 0, rating: 4.5, image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400" },
            { name: "Mahabalipuram Beach", type: "Beach", duration: "2-3 hours", entryFee: 0, rating: 4.4, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400" },
            { name: "Tiger Cave", type: "Heritage", duration: "1 hour", entryFee: 0, rating: 4.3, image: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=400" },
            { name: "India Seashell Museum", type: "Museum", duration: "1-2 hours", entryFee: 100, rating: 4.2, image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=400" },
            { name: "Crocodile Bank", type: "Wildlife", duration: "2-3 hours", entryFee: 50, rating: 4.4, image: "https://images.unsplash.com/photo-1559253664-ca249d4608c6?w=400" }
        ],

        restaurants: [
            { name: "Moonrakers Restaurant", cuisine: "Seafood", priceRange: "₹₹", rating: 4.7, image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400", specialty: "Fresh Seafood" },
            { name: "Le Yogi Restaurant", cuisine: "French-Indian", priceRange: "₹₹", rating: 4.5, image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400", specialty: "Fusion Cuisine" },
            { name: "Nautilus Restaurant", cuisine: "Continental", priceRange: "₹₹₹", rating: 4.6, image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400", specialty: "Fine Dining" },
            { name: "Wharf 2.0", cuisine: "Asian-Japanese", priceRange: "₹₹₹", rating: 4.5, image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=400", specialty: "Sushi & Asian" },
            { name: "Mamalla Bhavan", cuisine: "South Indian", priceRange: "₹", rating: 4.3, image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400", specialty: "Traditional Meals" },
            { name: "The Golden Palate", cuisine: "Pure Vegetarian", priceRange: "₹₹", rating: 4.4, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400", specialty: "Veg Multi-cuisine" }
        ]
    },

    // ============================================
    // RAMESWARAM - Sacred Temple Town
    // ============================================
    rameswaram: {
        id: "rameswaram",
        name: "Rameswaram",
        fullName: "Rameswaram",
        tagline: "Sacred Island Temple Town",
        description: "A holy island town connected to mainland India by the Pamban Bridge, known for the sacred Ramanathaswamy Temple with its magnificent corridors.",
        image: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=800",
        rating: 4.5,
        bestTime: "October to April",
        weather: { summer: "26-36°C", winter: "24-32°C" },

        hotels: {
            economy: [
                {
                    name: "Hotel Tamil Nadu TTDC",
                    price: 1200,
                    rating: 3.6,
                    amenities: ["Government Hotel", "Restaurant", "Parking", "AC Rooms"],
                    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
                    location: "Near Railway Station"
                },
                {
                    name: "Hotel Daiwik",
                    price: 2000,
                    rating: 4.0,
                    amenities: ["Temple View", "Restaurant", "AC Rooms", "Parking"],
                    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400",
                    location: "Near Temple"
                },
                {
                    name: "Hotel Royal Park",
                    price: 1800,
                    rating: 3.8,
                    amenities: ["Free WiFi", "Restaurant", "Room Service"],
                    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400",
                    location: "West Car Street"
                }
            ],
            midRange: [
                {
                    name: "Hyatt Place Rameswaram",
                    price: 7500,
                    rating: 4.4,
                    amenities: ["Sea View", "Pool", "Spa", "Multi-cuisine", "Fitness"],
                    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400",
                    location: "Mandapam Road"
                },
                {
                    name: "Hotel Vinayaga",
                    price: 3500,
                    rating: 4.1,
                    amenities: ["Near Temple", "Restaurant", "AC Rooms", "Parking"],
                    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400",
                    location: "West Car Street"
                },
                {
                    name: "The Dolphin Resort",
                    price: 4500,
                    rating: 4.2,
                    amenities: ["Beach View", "Restaurant", "Conference Room", "Pool"],
                    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400",
                    location: "Beach Road"
                }
            ],
            luxury: [
                {
                    name: "Regency Rameswaram by GRT Hotels",
                    price: 9000,
                    rating: 4.6,
                    amenities: ["Sea View", "Pool", "Spa", "Fine Dining", "Bar"],
                    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400",
                    location: "Thangachimadam Road"
                },
                {
                    name: "Daiwik Hotels Rameswaram",
                    price: 8500,
                    rating: 4.5,
                    amenities: ["Pilgrimage Package", "Pure Veg", "Temple Shuttle", "AC Rooms"],
                    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400",
                    location: "Agni Theertham Road"
                },
                {
                    name: "The Ocean Rameswaram",
                    price: 7500,
                    rating: 4.3,
                    amenities: ["Oceanfront", "Restaurant", "Pool", "Room Service"],
                    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400",
                    location: "Beach Road"
                }
            ]
        },

        attractions: [
            { name: "Ramanathaswamy Temple", type: "Temple", duration: "2-3 hours", entryFee: 0, rating: 4.9, image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400" },
            { name: "Pamban Bridge", type: "Landmark", duration: "1 hour", entryFee: 0, rating: 4.7, image: "https://images.unsplash.com/photo-1545156521-77bd85671d30?w=400" },
            { name: "Dhanushkodi", type: "Beach", duration: "3-4 hours", entryFee: 0, rating: 4.6, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400" },
            { name: "Agni Theertham", type: "Sacred", duration: "1 hour", entryFee: 0, rating: 4.5, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400" },
            { name: "APJ Abdul Kalam Memorial", type: "Memorial", duration: "1-2 hours", entryFee: 20, rating: 4.7, image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400" },
            { name: "Five-Faced Hanuman Temple", type: "Temple", duration: "30 mins", entryFee: 0, rating: 4.4, image: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=400" }
        ],

        restaurants: [
            { name: "Ahaan Restaurant", cuisine: "South Indian", priceRange: "₹", rating: 4.3, image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400", specialty: "Thali Meals" },
            { name: "Hotel Ashoka Bhavan", cuisine: "Vegetarian", priceRange: "₹", rating: 4.2, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400", specialty: "South Indian Veg" },
            { name: "Sri Murugan Mess", cuisine: "Traditional Tamil", priceRange: "₹", rating: 4.5, image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400", specialty: "Home-style Cooking" },
            { name: "Hotel New Punjab", cuisine: "North Indian", priceRange: "₹₹", rating: 4.1, image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400", specialty: "Punjabi Cuisine" }
        ]
    },

    // ============================================
    // KANYAKUMARI - Land's End of India
    // ============================================
    kanyakumari: {
        id: "kanyakumari",
        name: "Kanyakumari",
        fullName: "Kanyakumari",
        tagline: "Where Three Seas Meet",
        description: "The southernmost tip of India where the Arabian Sea, Bay of Bengal, and Indian Ocean converge, famous for stunning sunrises and sunsets.",
        image: "https://images.unsplash.com/photo-1590766940554-634f7a23b1b6?w=800",
        rating: 4.6,
        bestTime: "October to March",
        weather: { summer: "26-34°C", winter: "24-30°C" },

        hotels: {
            economy: [
                {
                    name: "Hotel Tamil Nadu TTDC",
                    price: 1500,
                    rating: 3.7,
                    amenities: ["Sea View", "Restaurant", "Parking", "AC Rooms"],
                    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
                    location: "Beach Road"
                },
                {
                    name: "Hotel Sangam",
                    price: 1800,
                    rating: 3.8,
                    amenities: ["Sea View", "Restaurant", "Free WiFi"],
                    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400",
                    location: "Main Road"
                },
                {
                    name: "Manickam Tourist Home",
                    price: 1200,
                    rating: 3.5,
                    amenities: ["Near Beach", "AC Rooms", "Room Service"],
                    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400",
                    location: "Sannidhi Street"
                }
            ],
            midRange: [
                {
                    name: "Sparsa Resort Kanyakumari",
                    price: 6500,
                    rating: 4.4,
                    amenities: ["Sea View", "Pool", "Spa", "Multi-cuisine Restaurant"],
                    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400",
                    location: "Kovalam Road"
                },
                {
                    name: "The Gopinivas Grand",
                    price: 5000,
                    rating: 4.3,
                    amenities: ["Central Location", "Restaurant", "Conference", "Pool"],
                    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400",
                    location: "East Car Street"
                },
                {
                    name: "Hotel Sea View",
                    price: 4500,
                    rating: 4.2,
                    amenities: ["Sunrise View", "Restaurant", "Terrace", "Room Service"],
                    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400",
                    location: "Beach Road"
                }
            ],
            luxury: [
                {
                    name: "Hotel Sun World",
                    price: 8500,
                    rating: 4.5,
                    amenities: ["Rooftop Restaurant", "Sea View", "Pool", "Spa"],
                    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400",
                    location: "Main Road"
                },
                {
                    name: "The Seashore Hotel",
                    price: 7500,
                    rating: 4.4,
                    amenities: ["Beachfront", "Restaurant", "Bar", "Room Service"],
                    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400",
                    location: "Beach Road"
                },
                {
                    name: "Vivanta Trivandrum",
                    price: 12000,
                    rating: 4.7,
                    amenities: ["Taj Property", "Luxury Rooms", "Pool", "Spa", "Fine Dining"],
                    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400",
                    location: "Near Kanyakumari (30km)"
                }
            ]
        },

        attractions: [
            { name: "Vivekananda Rock Memorial", type: "Memorial", duration: "2 hours", entryFee: 50, rating: 4.8, image: "https://images.unsplash.com/photo-1590766940554-634f7a23b1b6?w=400" },
            { name: "Thiruvalluvar Statue", type: "Monument", duration: "1 hour", entryFee: 0, rating: 4.7, image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400" },
            { name: "Kanyakumari Temple", type: "Temple", duration: "1-2 hours", entryFee: 0, rating: 4.6, image: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=400" },
            { name: "Sunrise & Sunset Point", type: "Viewpoint", duration: "1-2 hours", entryFee: 0, rating: 4.9, image: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=400" },
            { name: "Padmanabhapuram Palace", type: "Heritage", duration: "2-3 hours", entryFee: 50, rating: 4.5, image: "https://images.unsplash.com/photo-1590766940554-634f7a23b1b6?w=400" },
            { name: "Mathur Hanging Trough", type: "Engineering Marvel", duration: "1-2 hours", entryFee: 20, rating: 4.3, image: "https://images.unsplash.com/photo-1545156521-77bd85671d30?w=400" },
            { name: "Kanyakumari Beach", type: "Beach", duration: "2-3 hours", entryFee: 0, rating: 4.4, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400" }
        ],

        restaurants: [
            { name: "The Curry Restaurant", cuisine: "Multi-cuisine", priceRange: "₹₹", rating: 4.4, image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400", specialty: "Indian & Continental" },
            { name: "Hotel Saravana Bhavan", cuisine: "South Indian", priceRange: "₹", rating: 4.5, image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400", specialty: "Dosa & Thali" },
            { name: "Sangam Restaurant", cuisine: "Seafood", priceRange: "₹₹", rating: 4.3, image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400", specialty: "Fresh Seafood" },
            { name: "Archana Restaurant", cuisine: "Vegetarian", priceRange: "₹", rating: 4.2, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400", specialty: "Veg South Indian" },
            { name: "Cafe Seagull", cuisine: "Cafe", priceRange: "₹", rating: 4.1, image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400", specialty: "Snacks & Beverages" }
        ]
    }
};

// Helper functions for the database
const TamilNaduTourism = {
    getAllDestinations: function () {
        return Object.values(tamilNaduDestinations);
    },

    getDestination: function (id) {
        return tamilNaduDestinations[id.toLowerCase()];
    },

    getHotelsByBudget: function (destinationId, budget) {
        const destination = this.getDestination(destinationId);
        if (!destination) return [];

        switch (budget.toLowerCase()) {
            case 'economy':
                return destination.hotels.economy;
            case 'mid-range':
            case 'midrange':
            case 'budget':
                return destination.hotels.midRange;
            case 'luxury':
                return destination.hotels.luxury;
            default:
                return [...destination.hotels.economy, ...destination.hotels.midRange, ...destination.hotels.luxury];
        }
    },

    getAttractions: function (destinationId) {
        const destination = this.getDestination(destinationId);
        return destination ? destination.attractions : [];
    },

    getRestaurants: function (destinationId) {
        const destination = this.getDestination(destinationId);
        return destination ? destination.restaurants : [];
    },

    searchDestinations: function (query) {
        const lowerQuery = query.toLowerCase();
        return this.getAllDestinations().filter(dest =>
            dest.name.toLowerCase().includes(lowerQuery) ||
            dest.fullName.toLowerCase().includes(lowerQuery) ||
            dest.tagline.toLowerCase().includes(lowerQuery)
        );
    },

    getBudgetRanges: function () {
        return {
            economy: { label: "Economy", priceRange: "₹1,200 - ₹2,000/night", icon: "💰" },
            midRange: { label: "Mid-Range", priceRange: "₹3,500 - ₹12,000/night", icon: "💵" },
            luxury: { label: "Luxury", priceRange: "₹8,000 - ₹22,000/night", icon: "💎" }
        };
    },

    generateItinerary: function (destinationId, days, budget) {
        const destination = this.getDestination(destinationId);
        if (!destination) return null;

        const hotels = this.getHotelsByBudget(destinationId, budget);
        const attractions = destination.attractions;
        const restaurants = destination.restaurants;

        return {
            destination: destination.name,
            duration: days,
            budget: budget,
            hotel: hotels[0],
            dailyPlan: Array.from({ length: days }, (_, i) => ({
                day: i + 1,
                morning: attractions[(i * 2) % attractions.length],
                afternoon: attractions[(i * 2 + 1) % attractions.length],
                dinner: restaurants[i % restaurants.length]
            }))
        };
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { tamilNaduDestinations, TamilNaduTourism };
}
