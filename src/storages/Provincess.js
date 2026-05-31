
const provinces = [
  {
    "id": 1,
    "name": "Phnom Penh",
    "type": "Autonomous Municipality",
    "capital": "Phnom Penh",
    "area_km2": 679,
    "population": 2281951,
    "image": "https://images.unsplash.com/photo-1573780845562-79f1a1165383?q=80&w=1191&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  },
  {
    "id": 2,
    "name": "Siem Reap",
    "type": "Province",
    "capital": "Siem Reap",
    "area_km2": 10299,
    "population": 1088322,
    "image": "https://images.unsplash.com/photo-1599283787923-51b965a58b05?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "des": "Siem Reap is the cultural crown jewel of Cambodia and its premier tourism destination. Serving as the gateway to the UNESCO World Heritage Angkor Archaeological Park, the province seamlessly pairs its deep historic significance with a bustling tourism economy. The capital city features charming French quarters, world-class dining, traditional performance theaters, and bustling cultural night markets.",
    
  },
  {
    "id": 3,
    "name": "Preah Sihanouk",
    "type": "Province",
    "capital": "Sihanoukville",
    "area_km2": 2536,
    "population": 219865,
    "image": "https://t4.ftcdn.net/jpg/01/44/62/79/240_F_144627924_sCy4cpsdlA4YbPUiaho71i8josB2xqHg.jpg",
    "des": "Preah Sihanouk is a dynamic coastal province located on the Gulf of Thailand, known for housing Cambodia's only deep-water maritime port. The province boasts a diverse geography comprising a rapidly expanding urban center, expansive white-sand continental beaches, and pristine offshore tropical islands that draw marine enthusiasts and travelers from across the globe.",
   
  },
  {
    "id": 4,
    "name": "Battambang",
    "type": "Province",
    "capital": "Battambang",
    "area_km2": 11702,
    "population": 987400,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRieefH3OUBQOaARX2SJnk_g27G4t3F4l8uFA&s",
    "des": "Battambang is a leading agricultural powerhouse often affectionately called 'The Rice Bowl of Cambodia'. Located in the northwest, the province is rich in historical heritage, featuring remarkably well-preserved French colonial architecture along the Sangkae River, ancient Angkorian-era ruins, and a highly celebrated local contemporary arts and performance scene.",
    
  },
  {
    "id": 5,
    "name": "Kampot",
    "type": "Province",
    "capital": "Kampot",
    "area_km2": 4873,
    "population": 588066,
    "image": "https://d34vm3j4h7f97z.cloudfront.net/original/4X/8/1/e/81e31f6817402c4a711d09891d53515e0ada2571.jpeg",
    "des": "Kampot is a scenic southern province famous around the globe for producing world-class, GI-certified Kampot Pepper. The province features a wonderfully relaxed lifestyle centered around a tranquil river, stunning limestone karst mountain landscapes, salt fields, and a historic architectural town center that acts as a haven for expats and eco-conscious travelers.",
    
  },
  {
    "id": 6,
    "name": "Kep",
    "type": "Province",
    "capital": "Kep",
    "area_km2": 336,
    "population": 41539,
    "image": "https://images.unsplash.com/photo-1579457870306-d0a167f5c1c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "des": "Kep is Cambodia's smallest province, originally founded as an elite seaside resort town for French colonials and high-society Cambodians in the early 20th century. Today, it is highly celebrated for its quiet beaches, seaside dining, historical modernist villa ruins, and its incredible abundance of fresh seafood.",
    
  },
  {
    "id": 7,
    "name": "Kampong Cham",
    "type": "Province",
    "capital": "Kampong Cham",
    "area_km2": 4549,
    "population": 895763,
    "image": "https://img.harbor-property.com/infocontent/2023/10/26/102100001.jpg",
   
  },
  {
    "id": 8,
    "name": "Kampong Thom",
    "type": "Province",
    "capital": "Kampong Thom",
    "area_km2": 13814,
    "population": 610512,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXQGLILCi1h6FJYrhenKQC3x7qcA4X3wP3hw&s",
    "des": "Kampong Thom is a large, centrally located province that acts as a vital bridge between Phnom Penh and Siem Reap. It holds massive historical significance as the home to some of Southeast Asia's oldest pre-Angkorian brick architecture, dating back to the Chenla Empire, nestled within pristine, rural forest ecosystems.",
   
  },
  {
    "id": 9,
    "name": "Kratie",
    "type": "Province",
    "capital": "Kratie",
    "area_km2": 11094,
    "population": 370396,
    "image": "https://myhometowns.wordpress.com/wp-content/uploads/2015/05/kratie_face.gif",
    "des": "Kratie is an idyllic, laid-back eastern province situated along the mighty Mekong River. It is highly regarded by nature enthusiasts as an eco-tourism sanctuary, functioning as one of the best locations to spot rare river wildlife amid a landscape of traditional stilt-house villages, islands, and French-colonial riverfront paths.",
   
  },
  {
    "id": 10,
    "name": "Mondulkiri",
    "type": "Province",
    "capital": "Senmonorom",
    "area_km2": 14288,
    "population": 90490,
    "image": "https://i0.wp.com/www.cambodialifestyle.com/wp-content/uploads/2024/04/Mondulkiri3.jpg?fit=1024%2C751&ssl=1",
    "des": "Mondulkiri is Cambodia's largest but most sparsely populated province, located in the rugged eastern highlands. It features a dramatically different climate and landscape compared to the rest of the country, characterized by rolling pine-covered hills, deep jungle valleys, powerful waterfalls, and a strong cultural presence of the indigenous Bunong people.",
    
  },
  {
    "id": 11,
    "name": "Ratanakiri",
    "type": "Province",
    "capital": "Banlung",
    "area_km2": 10782,
    "population": 214590,
    "image": "https://www.khmertimeskh.com/wp-content/uploads/2026/03/ratanaksx.jpg",
    "des": "Ratanakiri is a remote and wild northeastern province bordered by Laos and Vietnam. Known for its incredible biodiversity, the province boasts emerald volcanic lakes, dense jungle national parks, gem mines, and a rich cultural mosaic made up of several distinct indigenous highland communities.",
   
  },
  {
    "id": 12,
    "name": "Preah Vihear",
    "type": "Province",
    "capital": "Tbeng Meanchey",
    "area_km2": 13784,
    "population": 248947,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZxscAu7vBobMB11EZv9cIk3xZrHaqUi_rg&s",
    "des": "Preah Vihear is a large, rugged northern border province named after its world-famous mountain temple. The area is highly significant to archaeologists and history enthusiasts, housing some of the most daring and geographically remote temple architecture built by the ancient kings of the Khmer Empire.",
    
  },
  {
    "id": 13,
    "name": "Kandal",
    "type": "Province",
    "capital": "Ta Khmau",
    "area_km2": 3563,
    "population": 1180431,
    "image": "https://i0.wp.com/www.cambodialifestyle.com/wp-content/uploads/2024/04/Kandal7.jpg?fit=990%2C660&ssl=1",
    "des": "Kandal is a strategically vital lowlands province that completely surrounds the autonomous municipality of Phnom Penh. Acting as the immediate backyard of the capital, Kandal is highly popular for day-trips, containing ancient royal mountain capitals, vital agricultural lands along the Mekong, and specialized craft villages.",
   
  },
  {
    "id": 14,
    "name": "Kampong Speu",
    "type": "Province",
    "capital": "Chbar Mon",
    "area_km2": 7017,
    "population": 872219,
    "image": "https://visitlocaltravel.com/blog/wp-content/uploads/2024/01/Kampong-Speu-Province-2.png",
    "des": "Kampong Speu is an inland province stretching from the western outskirts of Phnom Penh up into the rugged Cardamom Mountains. The province is highly famous for its premium quality palm sugar (Thnaot) and serves as an increasingly popular hub for ecotourism, mountain trekking, and pine forest exploration.",
    
  },
  {
    "id": 15,
    "name": "Koh Kong",
    "type": "Province",
    "capital": "Khemarak Phoumin",
    "area_km2": 11160,
    "population": 122883,
    "image": "https://lh5.googleusercontent.com/proxy/jhyXC4uUjBxklH0jEcO1jKfbWZO6Cvr0MBjLgM-co5qU4X_6DRZQBihfbcuTJPdcgKnNLLoCs-kyp78rnMTDxZq-xC-vuDUXfGOhID0hY1n92CHX53WYa7c3NVjRpdXQtKSc5TOQgWB3pNGFpMm8YCPhmUthPpLg4tFxiw2WtVck",
    "des": "Koh Kong is a wild, beautiful coastal and border province located in Cambodia's southwest. Defined by the rugged Cardamom Mountains and the Gulf of Thailand, it stands as one of the region's largest intact eco-wilderness corridors, boasting vast mangrove systems, hidden rivers, and undeveloped islands.",
   
  },
  {
    "id": 16,
    "name": "Banteay Meanchey",
    "type": "Province",
    "capital": "Serei Saophoan",
    "area_km2": 6679,
    "population": 859545,
    "image": "https://tourismcambodia.org/storage/uploads/category_banner/ministry-of-tourism-cambodia-2019-02-18-07-03-00am-Banteay-Meanchey.jpg",
    "des": "Banteay Meanchey is a bustling northwestern province bordering Thailand. It serves as a critical international overland trade and transit gateway, centered around the energetic border city of Poipet. Beyond its modern trade, the province features vast agricultural flatlands and massive, forgotten jungle temples.",
   
  },
  {
    "id": 17,
    "name": "Kampong Chhnang",
    "type": "Province",
    "capital": "Kampong Chhnang",
    "area_km2": 5521,
    "population": 525932,
    "image": "https://keoleny.wordpress.com/wp-content/uploads/2014/11/dsc02914.jpg",
    "des": "Kampong Chhnang is a central plains province positioned on the Tonle Sap river system. True to its name, which translates directly to 'Port of Pottery', the province is globally recognized for its deep heritage in crafting traditional earthenware clay pots using ancient, non-mechanical methods.",
   
  },
  {
    "id": 18,
    "name": "Oddar Meanchey",
    "type": "Province",
    "capital": "Samraong",
    "area_km2": 6158,
    "population": 276003,
    "image": "https://cdn.cc-times.com/kh.cc-times.com/images/7274/large/64803540_2359398370963762_5730428280666849280_n.jpeg?1623850517",
    "des": "Oddar Meanchey is a remote northern province situated along the rugged Dângrêk Mountains bordering Thailand. Known historically as one of the final strongholds of the Khmer Rouge movement, the province is rapidly modernizing into a peaceful hub for border trade, agricultural growth, and high-altitude eco-tourism.",

  },
  {
    "id": 19,
    "name": "Pailin",
    "type": "Province",
    "capital": "Pailin",
    "area_km2": 803,
    "population": 75112,
    "image": "https://dnf06fpg9xipc.cloudfront.net/geocambodia/province-landmark/24.jpg",
    "des": "Pailin is a compact western province tucked against the Cardamom Mountains along the Thai border. Historically celebrated for its extraordinarily rich deposits of precious gems like rubies and sapphires, this former mining center has transformed into a peaceful agricultural region focusing on fruit plantations, eco-resorts, and natural wonders.",

  },
  {
    "id": 20,
    "name": "Prey Veng",
    "type": "Province",
    "capital": "Prey Veng",
    "area_km2": 4883,
    "population": 1057423,
    "image": "https://image.freshnewsasia.com/2018/fn-2018-03-13-12-57-04-7.jpg",
    
  },
  {
    "id": 21,
    "name": "Pursat",
    "type": "Province",
    "capital": "Pursat",
    "area_km2": 12692,
    "population": 419752,
    "image": "https://visitlocaltravel.com/blog/wp-content/uploads/2024/03/Pursat-Province.png",

  },
  {
    "id": 22,
    "name": "Stung Treng",
    "type": "Province",
    "capital": "Stung Treng",
    "area_km2": 11092,
    "population": 159565,
    "image": "https://tourismcambodia.org/storage/uploads/category_banner/ministry-of-tourism-cambodia-2021-06-13-04-46-16pm.jpg",
    "des": "Stung Treng is a wild, remote northern province where the Sekong, Sesan, and Srepok rivers converge into the mighty Mekong. Characterized by expansive wetlands, river archipelagoes, and dense primary forests, the province stands as an eco-tourism paradise perfect for kayaking, spotting rare river life, and experiencing remote border cultures.",

  },
  {
    "id": 23,
    "name": "Svay Rieng",
    "type": "Province",
    "capital": "Svay Rieng",
    "area_km2": 2966,
    "population": 525497,
    "image": "https://i0.wp.com/www.cambodialifestyle.com/wp-content/uploads/2024/04/Svay-Rieng-5.jpg?fit=1000%2C719&ssl=1",

  },
  {
    "id": 24,
    "name": "Takeo",
    "type": "Province",
    "capital": "Doun Kaev",
    "area_km2": 3563,
    "population": 899485,
    "image": "https://tourismcambodia.org/storage/uploads/category_banner/ministry-of-tourism-cambodia-2020-05-17-04-48-23am.jpg",
    "des": "Takeo is a historically foundational southern province frequently celebrated as the 'Cradle of Khmer Civilization'. The area contains some of the oldest pre-Angkorian and Funan-era archaeological sites in Southeast Asia, surrounded by an intricate, centuries-old network of scenic canals, waterways, and agricultural farmlands.",
  },
  {
    "id": 25,
    "name": "Tboung Khmum",
    "type": "Province",
    "capital": "Suong",
    "area_km2": 4928,
    "population": 776841,
    "image": "https://i0.wp.com/www.cambodialifestyle.com/wp-content/uploads/2024/04/Tbong-Khmum5.jpg?fit=750%2C440&ssl=1",
    "des": "Tboung Khmum is Cambodia's newest province, officially established in 2014 when it was administratively split from neighboring Kampong Cham. Located on the fertile eastern plains of the Mekong, it is a highly productive agricultural powerhouse dominated by massive rubber plantations, tobacco fields, and trading communities.",
  }
]

export default provinces