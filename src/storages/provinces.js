
const provinces = [
  {
    "id": 1,
    "name": "Phnom Penh",
    "type": "Autonomous Municipality",
    "capital": "Phnom Penh",
    "area_km2": 679,
    "population": 2281951,
    "image": "https://images.unsplash.com/photo-1573780845562-79f1a1165383?q=80&w=1191&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "des": "Phnom Penh is the vibrant capital and most populous city of Cambodia. Located at the confluence of the Mekong, Tonle Sap, and Bassac rivers, it serves as the nation's political, economic, and cultural hub. Once known as the 'Pearl of Asia', the city blends traditional Khmer architecture with French colonial remnants and rapidly growing modern skyscrapers, offering a dynamic look into Cambodia's past, present, and future.",
    "top_place": [
      {
        "id": 1,
        "name": "Tuol Sleng Genocide Museum",
        "image": "https://images.unsplash.com/photo-1694782981192-3b758e46d996?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "des": "Formerly the Tuol Svay Prey High School, this site was converted into Security Prison 21 (S-21) by the Khmer Rouge regime. Today, it stands as a deeply moving and sobering museum preserving photographic evidence, historical artifacts, and preserved cells to memorialize the tragic events and honor the thousands of victims who passed through its gates."
      },
      {
        "id": 2,
        "name": "The Royal Palace and Silver Pagoda",
        "image": "https://images.unsplash.com/photo-1707817501904-2e5448d88b99?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1715447415386-ea296e9715e6?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "des": "Built in the 1860s, this majestic architectural complex serves as the official residence of the King of Cambodia. The neighboring Silver Pagoda, officially named Wat Preah Keo Morakot, is famous for its gleaming floor covered with over 5,000 solid silver tiles and houses priceless national treasures, including a life-sized gold Buddha decorated with thousands of diamonds."
      },
      {
        "id": 3,
        "name": "The National Museum of Cambodia",
        "image": "https://images.unsplash.com/photo-1706583733600-08e942012484?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "des": "Located just north of the Royal Palace, this iconic terracotta building represents the finest of traditional Khmer design. It houses the world's largest collection of cultural artifacts, ancient sculptures, bronzes, and ethnographic items from the pre-Angkorian, Angkorian, and post-Angkorian eras of the Khmer Empire."
      }
    ]
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
    "top_place": [
      {
        "id": 1,
        "name": "Angkor Wat",
        "image": "https://images.unsplash.com/photo-1599283787923-51b965a58b05?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "des": "The largest religious monument in the world, Angkor Wat was originally constructed in the early 12th century as a Hindu temple dedicated to Vishnu before transforming into a Buddhist shrine. It is globally celebrated for its architectural perfection, grand moat, towering lotus-like bas-relief structures, and the detailed carvings of celestial Apsaras lining its walls."
      },
      {
        "id": 2,
        "name": "Bayon Temple",
        "image": "https://images.unsplash.com/photo-1541429464955-87bd98d6d8f8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "des": "Situated at the exact center of the ancient walled city of Angkor Thom, Bayon is famed for its forest of stone towers adorned with hundreds of massive, serene smiling faces. Built by King Jayavarman VII, the temple features intricate gallery bas-reliefs depicting vivid scenes of historical military battles and everyday 12th-century Khmer life."
      },
      {
        "id": 3,
        "name": "Ta Prohm Temple",
        "image": "https://images.unsplash.com/photo-1650696355253-7064df193104?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "des": "Widely known as the 'Tomb Raider Temple', Ta Prohm has been left largely in the condition in which it was discovered. The structure offers an incredible display of nature's power, with the massive root systems of silk-cotton and strangler fig trees growing directly over and through the ancient, crumbling stone corridors."
      }
    ]
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
    "top_place": [
      {
        "id": 1,
        "name": "Koh Rong Island",
        "image": "https://images.unsplash.com/photo-1613563459434-845436343b84?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "des": "Cambodia's most famous paradise island, Koh Rong features over 40 kilometers of breathtaking white sand beaches, most notably Long Beach. The island is highly sought after for its vibrant coral reefs, crystal-clear turquoise waters, jungle trekking paths, and magical nocturnal displays of glowing bioluminescent plankton."
      },
      {
        "id": 2,
        "name": "Koh Rong Sanloem",
        "image": "https://images.unsplash.com/photo-1651510689604-4d2d85daa479?q=80&w=1251&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "des": "The smaller, more tranquil sister island to Koh Rong, Sanloem is celebrated for its laid-back, serene atmosphere. Saracen Bay features shallow, calm waters and beautiful resorts, making it a premier destination for travelers looking to disconnect in a rustic island environment."
      },
      {
        "id": 3,
        "name": "Ream National Park",
        "image": "https://images.unsplash.com/photo-1680456239146-b6511a3ece6b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "des": "Established in 1993 to protect threatened coastal ecosystems, this expansive national park covers both terrestrial forest and marine environments. It features lush mangrove forests, secluded sandy coves, estuaries, and provides refuge to a diverse array of wildlife, including endangered birds of prey and sea turtles."
      }
    ]
  },
  {
    "id": 4,
    "name": "Battambang",
    "type": "Province",
    "capital": "Battambang",
    "area_km2": 11702,
    "population": 987400,
    "image": "https://privateangkorwattour.com/wp-content/uploads/Battambang-tour.webp",
    "des": "Battambang is a leading agricultural powerhouse often affectionately called 'The Rice Bowl of Cambodia'. Located in the northwest, the province is rich in historical heritage, featuring remarkably well-preserved French colonial architecture along the Sangkae River, ancient Angkorian-era ruins, and a highly celebrated local contemporary arts and performance scene.",
    "top_place": [
      {
        "id": 1,
        "name": "Phnom Sampeau",
        "image": "https://ctp.r24k.app/wp-content/uploads/2022/04/s2E6uRbEfkwxu9dZhNNm.jpg",
        "des": "A striking limestone mountain steeped in history and folklore, featuring hilltop shrines and the tragic Khmer Rouge 'Killing Caves'. At sunset, thousands of visitors gather at the base of the mountain to witness an incredible natural spectacle as millions of bats stream out of the caves in an endless, twisting ribbon across the sky."
      },
      {
        "id": 2,
        "name": "The Bamboo Train (Norry)",
        "image": "https://www.asiakingtravel.com/images/thumbs/2024/09/15227/banner_1900x700xcrop.webp",
        "des": "A highly unique and thrilling piece of local engineering, the Norry is a small makeshift rail platform made of wood and bamboo, powered by a small tractor engine. It flies down the old iron colonial railway tracks, providing travelers an open-air, bumpy, and memorable ride through the scenic Cambodian countryside."
      },
      {
        "id": 3,
        "name": "Wat Banan",
        "image": "https://merrytravelasia.com/wp-content/uploads/2023/06/Phnom-Banan-Siem-Reap-Battambang-Phnom-Penh.jpg",
        "des": "Often compared to a smaller scale version of Angkor Wat due to its layout, this mid-11th century temple sits majestically atop a mountain. Visitors climb over 350 stone steps to reach the five towers, where they are rewarded with beautiful panoramic views of the surrounding rice fields and winding rivers."
      }
    ]
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
    "top_place": [
      {
        "id": 1,
        "name": "Preah Monivong Bokor National Park",
        "image": "https://cdn.projectexpedition.com/photos/310728touractivity9916f955c8be46598f13ad90a56d1224_sized.jpg",
        "des": "An expansive highland national park famous for its dramatic climate shifts and the historic Bokor Hill Station. The mountaintop features an eerie, atmospheric abandoned French colonial church and hotel casino, sacred Buddhist pagodas, cascading waterfalls, and spectacular cliffside views of the Cambodian coastline."
      },
      {
        "id": 2,
        "name": "La Plantation Pepper Farm",
        "image": "https://laplantation.com/wp-content/uploads/2022/11/3-visite-vuedrone.jpg",
        "des": "A premier organic agritourism estate that offers highly informative guided tours detailing the traditional cultivation of Kampot pepper. Visitors can walk through the pepper vines, sample black, red, and white pepper varieties, and learn why this specific region's soil produces some of the most sought-after spices in the culinary world."
      },
      {
        "id": 3,
        "name": "Kampot River (Preaek Tuek Chhou)",
        "image": "https://pippalihotel.com/wp-content/uploads/2023/03/Beautiful-Sunset-in-Kompot.jpg",
        "des": "The peaceful lifeblood of the province, this river is perfect for recreational kayaking, stand-up paddleboarding, and relaxing sunset cruises. At night, specialized boat tours take visitors out along the mangrove-lined banks to view thousands of synchronized fireflies illuminating the trees."
      }
    ]
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
    "top_place": [
      {
        "id": 1,
        "name": "Kep Crab Market (Phsar Kdam)",
        "image": "https://i.ytimg.com/vi/2vbo3iuSn3I/maxresdefault.jpg",
        "des": "A world-renowned waterfront seafood marketplace where fishermen pull wooden crab cages directly out of the ocean. Visitors can buy fresh blue swimming crabs on the spot and have them cooked immediately at the adjacent open-air restaurants with fresh, green Kampot pepper."
      },
      {
        "id": 2,
        "name": "Rabbit Island (Koh Tonsay)",
        "image": "https://img.harbor-property.com/bkcontent/2024/05/10/103700001.jpg",
        "des": "Located just a short 25-minute traditional longtail boat ride from the Kep mainland, this rustic, car-free island offers a glance into simple beach living. It features quiet palm-fringed shores, shallow swimming waters, and simple beachfront bamboo shacks serving local dishes."
      },
      {
        "id": 3,
        "name": "Kep National Park",
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Kep_National_Park_6.jpg",
        "des": "A lush, green mountain reserve that features an easy, well-marked 8-kilometer loop trail accessible for both hiking and mountain biking. The trail winds through dense forest canopies, offering scenic lookouts with views over the Gulf of Thailand, Phu Quoc Island, and the salt pans of Kampot."
      }
    ]
  },
  {
    "id": 7,
    "name": "Kampong Cham",
    "type": "Province",
    "capital": "Kampong Cham",
    "area_km2": 4549,
    "population": 895763,
    "image": "https://img.harbor-property.com/infocontent/2023/10/26/102100001.jpg",
    "des": "Kampong Cham is a charming, historically rich lowlands province sitting gracefully along the banks of the Mekong River. Known for its fertile soil, it is a key agricultural hub for tobacco, fruits, and rubber. The province offers a wonderfully authentic glimpse into local Cambodian life, supported by historic temples and unique engineering feats.",
    "top_place": [
      {
        "id": 1,
        "name": "Nokor Bachey Temple",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOlSuTPJJrJ1uuXLa9DIRlYlO3armcsFcEcg&s",
        "des": "A highly unique 11th-century Angkorian sandstone and laterite temple complex. What makes it fascinating is the cultural layers: a modern, brightly painted Theravada Buddhist pagoda has been constructed directly inside the ancient stone ruins, creating a striking architectural contrast."
      },
      {
        "id": 2,
        "name": "Koh Pen Bamboo Bridge",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zJ5QYG6ZfvA8GsHOoYrShYlvMvc6wdDq3Q&s",
        "des": "A marvel of traditional ingenuity, this bridge connects Kampong Cham town to the rural island of Koh Pen. Historically, it was rebuilt completely by hand every year following the seasonal Mekong floods using thousands of bamboo poles, strong enough to support cars and light trucks."
      },
      {
        "id": 3,
        "name": "Phnom Pros and Phnom Srey",
        "image": "https://www.greeneratravel.com/userfiles/850phnomsreyphnompros.jpg",
        "des": "Meaning 'Man Mountain' and 'Woman Mountain', these two facing hills are steeped in a famous local folk legend regarding a temple-building competition. The sites feature cultural pagodas, towering Buddha statues, a large population of wild monkeys, and offer beautiful views of the surrounding plains."
      }
    ]
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
    "top_place": [
      {
        "id": 1,
        "name": "Sambor Prei Kuk",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkXQArhF49wChWqYHD2cJcDMV4r_xsTfy8JQ&s",
        "des": "A designated UNESCO World Heritage site, this ancient forest complex contains over a hundred brick temples dating back to the 7th-century Chenla Kingdom. Pre-dating Angkor, many of these unique octagonal structures are beautifully intertwined with the massive roots of centuries-old trees."
      },
      {
        "id": 2,
        "name": "Phnom Santuk",
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/e9/94/79/caption.jpg?w=1200&h=-1&s=1",
        "des": "A sacred cultural mountain that requires visitors to climb over 800 steps to reach the summit. The mountain is covered in multi-era religious structures, multi-meter stone carvings of reclining Buddhas carved directly into the mountain boulders, and offers panoramic rural views."
      },
      {
        "id": 3,
        "name": "Prasat Andet",
        "image": "https://www.vivutravel.com/images/des-cambodia1/cambodia_tour_package_kampong_thom.jpg",
        "des": "Built in the late 7th century on an isolated hill, this single brick tower temple is a remarkably well-preserved example of early pre-Angkorian building techniques, showing the sophisticated brick-laying skills of the ancient Chenla civilization."
      }
    ]
  },
  {
    "id": 9,
    "name": "Kratie",
    "type": "Province",
    "capital": "Kratie",
    "area_km2": 11094,
    "population": 370396,
    "image": "https://visitlocaltravel.com/blog/wp-content/uploads/2024/02/Kratie-Province.png",
    "des": "Kratie is an idyllic, laid-back eastern province situated along the mighty Mekong River. It is highly regarded by nature enthusiasts as an eco-tourism sanctuary, functioning as one of the best locations to spot rare river wildlife amid a landscape of traditional stilt-house villages, islands, and French-colonial riverfront paths.",
    "top_place": [
      {
        "id": 1,
        "name": "Kampi Dolphin Pool",
        "image": "https://visitlocaltravel.com/blog/wp-content/uploads/2024/02/Dolphin-Habitat-Site.png",
        "des": "Located roughly 15 kilometers north of Kratie town, this deep pool in the Mekong River is the premier sanctuary for the highly endangered Irrawaddy freshwater dolphins. Visitors can board local wooden longtail eco-boats to view these gentle, rare creatures surfacing in their natural habitat."
      },
      {
        "id": 2,
        "name": "Koh Trong Island",
        "image": "https://focus-cambodia.com/wp-content/uploads/2020/08/koh-trong-09.jpg",
        "des": "A peaceful river island located directly opposite Kratie town. Entirely free of cars, visitors can rent a bicycle to ride along a shaded 9-kilometer loop trail that passes through traditional wooden stilt homes, lush pomelo orchards, rice paddies, and a floating Vietnamese village."
      },
      {
        "id": 3,
        "name": "Phnom Sombok",
        "image": "https://www.holidify.com/images/cmsuploads/compressed/Temple-Religion-Travel-Asia-Buddhist-Buddha-2579529_20190728221855.jpg",
        "des": "A long, single-ridge hilltop Buddhist monastery adorned with a long line of lifelike statues representing monks. The upper pavilions feature intense wall paintings detailing Buddhist concepts of virtue and vice, alongside sweeping views over the Mekong River valley."
      }
    ]
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
    "top_place": [
      {
        "id": 1,
        "name": "Bousra Waterfall",
        "image": "https://www.asiakingtravel.com/cuploads/files/image-20241203081127-1.jpeg",
        "des": "Widely considered Cambodia's most spectacular and iconic waterfall, Bousra is a massive, powerful two-tiered cascade tucked deep into the jungle. The first tier drops around 12 meters, while the dramatic second tier plunges over 20 meters into a wide pool ideal for viewing and eco-adventures."
      },
      {
        "id": 2,
        "name": "The Elephant Valley Project",
        "image": "https://elephantvalleyproject.org/wp-content/uploads/DSC_2201.jpg",
        "des": "An internationally acclaimed, highly ethical elephant sanctuary dedicated to the welfare of rescued, injured, and overworked domestic elephants. The project emphasizes observation over interaction, allowing visitors to walk through the jungle alongside these majestic animals as they roam freely in their natural habitat."
      },
      {
        "id": 3,
        "name": "The Sea of Forest Viewpoint",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-8ts8epMkf4RX6N-jghypmRPXEYFIwu_qg&s",
        "des": "Located at the Phnom Dos Kramom hill near Senmonorom town, this viewpoint offers an breathtaking panoramic lookout over vast, endless rolling hills covered in dense forest. The horizon looks remarkably like ocean waves, creating a scenic view particularly during the lush green rainy season."
      }
    ]
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
    "top_place": [
      {
        "id": 1,
        "name": "Yeak Laom Volcanic Crater Lake",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Yak_Loum.jpg/1280px-Yak_Loum.jpg",
        "des": "A breathtakingly beautiful, near-perfectly circular lake formed over 4,000 years ago inside an ancient volcanic crater. Surrounded by lush, dense rainforest, the lake features exceptionally clear, emerald-green waters that are sacred to the local indigenous communities and perfect for swimming."
      },
      {
        "id": 2,
        "name": "Kachang Waterfall",
        "image": "https://www.asiakingtravel.com/cuploads/files/Kachang-waterfall-3.jpg",
        "des": "Located amidst rubber plantations and indigenous villages just a short drive from Banlung town, this beautiful 12-meter waterfall cuts through rocky cliffs surrounded by lush green flora. A hanging suspension bridge spans the river, offering great vantage points for photos."
      },
      {
        "id": 3,
        "name": "Virachey National Park",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX5aDY6cG8827T_LvHuNi2rxKUSsD7_rggCA&s",
        "des": "One of the largest protected wilderness areas in Cambodia, this sprawling national park stretches across international borders. It is a vital sanctuary for rare, threatened species like clouded leopards, gibbons, and hornbills, offering deep multi-day jungle trekking experiences for serious adventurers."
      }
    ]
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
    "top_place": [
      {
        "id": 1,
        "name": "Prasat Preah Vihear",
        "image": "https://whc.unesco.org/uploads/thumbs/site_1224_0014-1200-630-20231019093711.jpg",
        "des": "A designated UNESCO World Heritage site, this magnificent Hindu temple complex was built along an 800-meter long axis stretching up the edge of a sheer cliff in the Dângrêk Mountains. It offers some of the most dramatic architectural and panoramic landscape views in all of Southeast Asia."
      },
      {
        "id": 2,
        "name": "Koh Ker Temple Complex",
        "image": "https://cdn.projectexpedition.com/photos/63399a1a87cb4_sized.jpg",
        "des": "An ancient capital of the Khmer Empire under King Jayavarman IV, this remote jungle site contains dozens of structures. The focal point is Prasat Thom, an incredible 36-meter tall, 7-tiered step pyramid temple that looks strikingly reminiscent of Mayan architecture."
      },
      {
        "id": 3,
        "name": "Preah Khan Kampong Svay",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMrsoWJPTHgMNuvsmrjwTGExZkkEkFLxD1jQ&s",
        "des": "One of Cambodia's largest single temple enclosures, this vast historical site remains largely untamed and hidden in the northern forests. It features an array of ruins, barays, and structural enclosures that highlight the expansive reach of ancient royal engineering."
      }
    ]
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
    "top_place": [
      {
        "id": 1,
        "name": "Oudong Mountain (Phnom Oudong)",
        "image": "https://mediaim.expedia.com/localexpert/246827/15bce0f6-b357-4505-b1a6-fbc618228656.jpg",
        "des": "Serving as the royal capital of Cambodia for over two centuries before Phnom Penh, this sacred mountain ridge is crowned with magnificent, ornate stupas containing the ashes of ancient kings. Visitors climb over 500 steps to reach the top, which offers panoramic views of endless palm trees and rice fields."
      },
      {
        "id": 2,
        "name": "Koh Dach (Silk Island)",
        "image": "https://d122axpxm39woi.cloudfront.net/images/destinations/origin/5fab9896a88ce.jpg",
        "des": "A large island positioned inside the Mekong River, globally famous for its generational community of traditional handloom silk weavers. Visitors can tour traditional stilt houses, observe the entire silk production cycle from silkworms to finished scarves, and purchase high-quality textiles directly from artisans."
      },
      {
        "id": 3,
        "name": "Saang Phnom",
        "image": "https://www.vivutravel.com/images/des-cambodia1/cambodia-travel-packages-kandal.jpg",
        "des": "A peaceful natural and cultural resort hill featuring an ancient pagoda surrounded by a lake and large trees. It serves as a popular weekend leisure spot for locals seeking fresh air, traditional food stalls, and a break from the nearby urban environment."
      }
    ]
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
    "top_place": [
      {
        "id": 1,
        "name": "Kirirom National Park",
        "image": "https://cache2.travelfish.org/b/assets/2015/gallery/thumbR/gallery_location_thumbR_718_1458167687.jpg",
        "des": "Officially named Preah Suramarit-Kossamak National Park, this elevated highland plateau is famous for its unique, natural pine forests that thrive in a cool mountain climate. It features scenic walking trails, crystal-clear streams, waterfalls, and ruins of old royal villas from the 1960s."
      },
      {
        "id": 2,
        "name": "Phnom Aural",
        "image": "https://i0.wp.com/wondersofcambodia.com/wp-content/uploads/2025/05/image-3.jpeg?fit=756%2C397&ssl=1",
        "des": "The highest mountain peak in Cambodia, standing tall at 1,813 meters above sea level. Located deep within the Cardamom Mountains, it represents the ultimate multi-day wilderness challenge for local and international mountain hikers, winding through steep jungle terrains to a sacred summit shrine."
      },
      {
        "id": 3,
        "name": "Chreav Waterfall",
        "image": "https://backend.sololandscapes.co/public/uploads/images/thumbnail-964e3a02-57d7-4fbc-be3a-68adeb1756f7.webp",
        "des": "A multi-tiered natural waterfall tucked away within a protected forest ecosystem. It is a highly favored location for wilderness camping, hiking, and refreshing swimming dips in cold, clean mountain pools that flow continuously throughout the year."
      }
    ]
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
    "top_place": [
      {
        "id": 1,
        "name": "Peam Krasop Mangrove Sanctuary",
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/c3/86/d2/walk.jpg?w=1200&h=-1&s=1",
        "des": "An expansive coastal reserve protecting one of the largest and best-preserved mangrove forests in Southeast Asia. It features an elevated wooden walkway that winds for over a kilometer through the root systems, leading to a tall suspension bridge and observation towers."
      },
      {
        "id": 2,
        "name": "Tatai River and Waterfall",
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/e8/d0/f4/tatai-waterfall.jpg?w=1200&h=-1&s=1",
        "des": "A scenic, pristine river system that cuts through dense mountain jungles. The focal point is the Tatai Waterfall, a wide, dramatic two-tiered rocky ledge that surges powerfully during the rainy season, offering a popular destination for eco-lodges, boat trips, and kayaking."
      },
      {
        "id": 3,
        "name": "Koh Kong Island",
        "image": "https://construction-property.com/wp-content/uploads/2020/06/KKKrao-01.jpg",
        "des": "The largest island in Cambodia, located just off the coast. The western edge of the island features kilometers of completely undeveloped, wild white-sand beaches, crystal-clear waters, and pristine coastal lagoons framed by coconut palms and dense primary rainforest."
      }
    ]
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
    "top_place": [
      {
        "id": 1,
        "name": "Banteay Chhmar Temple",
        "image": "https://www.khmertimeskh.com/wp-content/uploads/2017/12/12-13-SLT_5270.jpg",
        "des": "One of the most significant and grand temple complexes from the Angkorian era, built by King Jayavarman VII. Left largely in its ruined jungle state, it is world-famous for its massive face-towers and stunning, intricate bas-relief walls depicting the multi-armed Avalokiteshvara."
      },
      {
        "id": 2,
        "name": "Poipet Border Town",
        "image": "/https://www.asiakingtravel.com/cuploads/files/Poipet-12.jpg",
        "des": "An energetic, fast-paced international cross-border trade hub connecting Cambodia to Thailand. It is known across the region for its large commercial markets, cross-border shipping facilities, and a strip of modern hotel casino resorts catering to international visitors."
      },
      {
        "id": 3,
        "name": "Trapeang Thmar Crane Sanctuary",
        "image": "https://www.gocambotravel.com/wp-content/uploads/2025/05/Ang-Trapeang-Tmor.jpg",
        "des": "A large wildlife protection area centered around an Angkorian-era reservoir. The sanctuary is a critical global breeding and feeding ground for the rare, endangered Sarus Crane, drawing international birdwatchers particularly during the dry season."
      }
    ]
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
    "top_place": [
      {
        "id": 1,
        "name": "Ondong Rossey Pottery Village",
        "image": "https://www.asiakingtravel.com/cuploads/files/Andong-russey-pottery-village-5.jpg",
        "des": "The iconic cultural heart of the province's pottery craft. Visitors can watch local artisans deftly shape the signature red clay into functional pots, vases, and decorative pieces using manual techniques handed down through multiple generations."
      },
      {
        "id": 2,
        "name": "Phnom Santhuk (Chhnang)",
        "image": "https://helloangkor.com/wp-content/uploads/2021/01/IMG_20220120_164439.jpg",
        "des": "A scenic hillside complex featuring beautiful Buddhist shrines, statues, and tranquil observation points that offer rolling panoramic views across the province's signature floodplains and rice paddies."
      },
      {
        "id": 3,
        "name": "Tonle Sap Floating Villages",
        "image": "https://res.klook.com/image/upload/w_750,h_469,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/doo6absbkcisdo8tmjqe.jpg",
        "des": "Expansive aquatic communities located right on the Tonle Sap river. These unique settlements feature floating houses, markets, and schools, providing an incredible look into a lifestyle perfectly attuned to the seasonal rise and fall of the great lake."
      }
    ]
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
    "top_place": [
      {
        "id": 1,
        "name": "Anlong Veng Historical Site",
        "image": "https://www.dccam.org/wp-content/uploads/04_Peace/Anlong_Veng_Master_Plan/Anlong-Veng-Master-Plan-5.jpg",
        "des": "The final redoubt of the Khmer Rouge leadership. The area features historical landmarks including the hillside villa of military commander Ta Mok, the burial site of Pol Pot, and a museum detailing the complex and somber late-20th-century history of the region."
      },
      {
        "id": 2,
        "name": "O Smach Border Checkpoint",
        "image": "https://www.khmertimeskh.com/wp-content/uploads/2022/05/O-Smach-border4.jpg",
        "des": "A key international mountain pass and gateway connecting Cambodia with Thailand's Surin province. The area features bustling border trade markets, resort hotels, and scenic views looking down from the mountain ridges."
      },
      {
        "id": 3,
        "name": "Ta Mok's Lake",
        "image": "https://thumbs.dreamstime.com/b/ta-mok-lake-town-anlong-veng-province-oddar-meanchey-northwaest-cambodia-cambodia-anlong-veng-november-123767391.jpg",
        "des": "A large, scenic artificial reservoir constructed during the Khmer Rouge era under the direction of Ta Mok. Dead tree trunks still pierce the water's surface, creating an atmospheric, stark landscape popular for local afternoon picnics and sunsets."
      }
    ]
  },
  {
    "id": 19,
    "name": "Pailin",
    "type": "Province",
    "capital": "Pailin",
    "area_km2": 803,
    "population": 75112,
    "image": "https://kohsantepheapdaily.com.kh/wp-content/uploads/2020/07/38b3eff8baf56627478ec76a704e9b52-24-768x448.jpg",
    "des": "Pailin is a compact western province tucked against the Cardamom Mountains along the Thai border. Historically celebrated for its extraordinarily rich deposits of precious gems like rubies and sapphires, this former mining center has transformed into a peaceful agricultural region focusing on fruit plantations, eco-resorts, and natural wonders.",
    "top_place": [
      {
        "id": 1,
        "name": "Wat Phnom Yat",
        "image": "https://visitlocaltravel.com/blog/wp-content/uploads/2024/02/Phnom-Yat-Pagoda-1024x646.png",
        "des": "A prominent and deeply revered Buddhist temple built atop a hill by Shan migrants from Myanmar in the late 19th century. The complex features Burmese-style architecture, a striking stupa, and offers wonderful panoramic views over Pailin town."
      },
      {
        "id": 2,
        "name": "O'Tavao Waterfall",
        "image": "https://www.khmertimeskh.com/wp-content/uploads/2024/02/75949.jpg",
        "des": "A beautiful, multi-tiered natural waterfall surrounded by lush, thick jungle foliage. It is a highly favored location for weekend travelers seeking a refreshing dip in cool, pristine mountain waters flowing straight from the surrounding Cardamoms."
      },
      {
        "id": 3,
        "name": "Phnom Khieu (Blue Mountain)",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidTCPgJSeUaQikTbnxesfjF7fJfbZe5EgenXQzo8vGFjfnFvZNPEul-d-ayJA63ikrXVwqPFfRBOoepIsvVAeYct-3Y_oMNzOfMBKXeii-jTx-Gk-m_meO8nvhLsNUIQjTzfEFzmyJSYSELxNkX8AOv7orSYm3QwVGOqqfFMSp47BMUesdg3IRAphZ/s1600-rw/Phnom%20Khiev%20Waterfall%E2%80%8B.webp",
        "des": "A protected eco-tourism mountain area characterized by dense forests, diverse wildlife, and scenic trekking paths. The mountain air stays remarkably cool, making it a peaceful sanctuary for hikers and nature enthusiasts."
      }
    ]
  },
  {
    "id": 20,
    "name": "Prey Veng",
    "type": "Province",
    "capital": "Prey Veng",
    "area_km2": 4883,
    "population": 1057423,
    "image": "https://image.freshnewsasia.com/2018/fn-2018-03-13-12-57-04-7.jpg",
    "des": "Prey Veng is a densely populated lowland province situated on the eastern banks of the Mekong River. Famed for its highly fertile agricultural soil, it stands as one of the premier rice-producing engines of Cambodia. The landscape is a picturesque expanse of traditional agricultural life, vast seasonal floodplains, and wetland sanctuaries.",
    "top_place": [
      {
        "id": 1,
        "name": "Ba Phnom",
        "image": "https://www.greeneratravel.com/userfiles/850baphnom.jpg",
        "des": "A cluster of sacred rocky hills rising out of the flat plains, steeped in profound archaeological and spiritual history. Believed to be an ancient religious center for the pre-Angkorian Funan Kingdom, it remains an active place of pilgrimage and local folklore."
      },
      {
        "id": 2,
        "name": "Tuol Porn Taley (Baray Andet) Crane Sanctuary",
        "image": "https://www.khmertimeskh.com/wp-content/uploads/2021/02/N_9-002-750x440.jpg",
        "des": "A major protected wetland ecosystem that serves as a critical seasonal feeding and nesting ground for rare water birds, including the magnificent Sarus Crane and various storks, drawing dedicated birdwatchers during the dry season."
      },
      {
        "id": 3,
        "name": "Neak Loeung Bridge (Tsubasa Bridge)",
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/bf/18/ca/tsubasa-bridge.jpg?w=1200&h=-1&s=1",
        "des": "A modern engineering marvel spanning the Mekong River, connecting Prey Veng with Kandal. This massive cable-stayed bridge, funded via Japanese aid, eliminated the old, slow ferry system and forms a crucial part of the international highway linking Bangkok to Ho Chi Minh City."
      }
    ]
  },
  {
    "id": 21,
    "name": "Pursat",
    "type": "Province",
    "capital": "Pursat",
    "area_km2": 12692,
    "population": 419752,
    "image": "https://visitlocaltravel.com/blog/wp-content/uploads/2024/03/Pursat-Province.png",
    "des": "Pursat is a large, geographically diverse province extending from the southern shores of the Tonle Sap lake all the way up into the dense, untamed wilderness of the Cardamom Mountains. It is renowned for its premium quality marble carvings, floating lake communities, and massive potential for rugged eco-adventures.",
    "top_place": [
      {
        "id": 1,
        "name": "Kompong Luong Floating Village",
        "image": "https://www.greeneratravel.com/userfiles/850kampongluong.jpg",
        "des": "The largest and most authentic floating town on the Tonle Sap. It is a completely self-contained community of thousands of residents with floating hardware stores, clinics, schools, and gas stations that shifts its location dynamically based on the lake's water levels."
      },
      {
        "id": 2,
        "name": "Oda Sanitorium and Cardamom Eco-Trails",
        "image": "https://thebettercambodia.com/wp-content/uploads/2025/05/Cardamom-Mountains.jpg",
        "des": "An eco-tourism initiatives gateway located deep in the high-altitude Cardamom forests. The area offers challenging jungle treks, pristine mountain streams, and opportunities to spot rare forest flora and endangered wildlife."
      },
      {
        "id": 3,
        "name": "Phnom Santuk Marble Workshops",
        "image": "https://sailingstonetravel.b-cdn.net/wp-content/uploads/2018/11/Phnom-Santuk-23-copy.jpg",
        "des": "The historic artisan core of Pursat town. Visitors can watch master sculptors work with locally mined, high-quality marble blocks, hand-carving incredibly intricate Buddha statues, mythical creatures, and modern art pieces with stunning precision."
      }
    ]
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
    "top_place": [
      {
        "id": 1,
        "name": "Mekong Wetlands Ramsar Site",
        "image": "https://moi-static.sgp1.cdn.digitaloceanspaces.com/uploads/post/feature_image/32873/feature.jpg",
        "des": "An internationally recognized wetland reserve along the Mekong. It is famous for its stunning flooded forests with massive, twisted tree trunks growing right out of the river channels, offering incredible kayaking paths and critical habitats for rare fish and birds."
      },
      {
        "id": 2,
        "name": "Sopheakmit Waterfalls (Preah Nimith)",
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/13/03/58/caption.jpg?w=1200&h=-1&s=1",
        "des": "A massive, roaring series of river rapids and low cascades stretching right across the Cambodian-Laos border. The sheer volume of the Mekong crashing over jagged volcanic rock formations creates a powerful, unforgettable natural spectacle."
      },
      {
        "id": 3,
        "name": "Thala Borivat Archaeological Site",
        "image": "https://www.greeneratravel.com/userfiles/850thalabarivat.jpg",
        "des": "Located across the river from Stung Treng town, this historical area features several pre-Angkorian brick temples dating back to the 7th-century Chenla period, including Prasat Preah Srei, nestled quietly within local village settings."
      }
    ]
  },
  {
    "id": 23,
    "name": "Svay Rieng",
    "type": "Province",
    "capital": "Svay Rieng",
    "area_km2": 2966,
    "population": 525497,
    "image": "https://i0.wp.com/www.cambodialifestyle.com/wp-content/uploads/2024/04/Svay-Rieng-5.jpg?fit=1000%2C719&ssl=1",
    "des": "Svay Rieng is a bustling southern border province forming a unique geographical wedge that extends directly into Vietnam. It functions as one of Cambodia's premier international trading gates, driven by the vibrant Special Economic Zones (SEZs) of Bavet city, alongside a tranquil rural interior of rice paddies and scenic rivers.",
    "top_place": [
      {
        "id": 1,
        "name": "Bavet Border Town and Casinos",
        "image": "https://www.cambotours.com/userfiles/thumbs/bavet-international-border.jpg",
        "des": "The buzzing international overland crossing point between Cambodia and Vietnam. The town features massive duty-free markets, international shipping hubs, and a vibrant strip of modern hotel casino resorts catering to a steady stream of global travelers."
      },
      {
        "id": 2,
        "name": "Waiko River Park",
        "image": "https://i.redd.it/cmqbvlqe5zl41.jpg",
        "des": "A beautiful, recently modernized waterfront promenade and public park in Svay Rieng town. It is a favored community gathering spot for evening walks, local food vendors, and taking in peaceful, breezy views of the winding river."
      },
      {
        "id": 3,
        "name": "Prasat Basac",
        "image": "https://allpointseast.com/wp-content/uploads/2024/04/rs-1080x716.jpg",
        "des": "The ancient ruins of an Angkorian-era brick temple tower structure. While heavily damaged by time and historic conflicts, the site holds deep spiritual significance for locals and provides a quiet window into the province's historic past."
      }
    ]
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
    "top_place": [
      {
        "id": 1,
        "name": "Phnom Da and Angkor Borei",
        "image": "https://www.indochinavoyages.com/wp-content/uploads/2024/04/angkor-borei-from-the-outside.jpg",
        "des": "An invaluable archaeological cradle. Angkor Borei was a fortified settlement of the 6th-century Funan Kingdom, connected via an ancient canal to Phnom Da, a nearby hill topped with an iconic 6th-century laterite temple tower showcasing early Khmer art."
      },
      {
        "id": 2,
        "name": "Phnom Chisor",
        "image": "https://www.pelago.com/img/products/KH-Cambodia/phnom-chisor-tonle-bati-private-tours-from-phnom-penh/bc429a48-2697-4bae-b6b8-4e55056f514b_phnom-chisor-tonle-bati-private-tours-from-phnom-penh-large.webp",
        "des": "A striking mountain featuring a well-preserved, 11th-century Angkorian temple complex at its peak. Visitors climb more than 400 stone steps to reach the sanctuary, which offers spectacular, endless views across the surrounding green lowlands."
      },
      {
        "id": 3,
        "name": "Phnom Tamao Wildlife Rescue Center",
        "image": "https://phnomtamaozoologicalpark.com/wp-content/uploads/2019/03/2025-45.jpg",
        "des": "The premier government-run wildlife sanctuary in Cambodia. Covering over 2,000 hectares of protected forest, it acts as a spacious home and rehabilitation facility for thousands of animals rescued from illegal trade, including Asian elephants, tigers, and gibbons."
      }
    ]
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
    "top_place": [
      {
        "id": 1,
        "name": "Chup Rubber Plantation",
        "image": "https://image.freshnewsasia.com/2019/Reasey/fn-2019-01-28-13-25-00-1.jpg",
        "des": "One of the oldest, largest, and most historic rubber plantations in Southeast Asia, originally established during the French colonial era. Visitors can drive through endless, perfectly symmetrical corridors of rubber trees and learn about the traditional sap-tapping process."
      },
      {
        "id": 2,
        "name": "Preah Theat Ba Srey Temple",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEio_fP4Fjf0Ti8jvy_kZ6uVRHG8FRRxr4sPaWWmdR-5YYYWZ3PXtZ3DbDSP2ICxzZlpzKKfb8oBr_3O7BzvTGfI-DRGHmH38qyK_Aw_VHd7Z8IoCEVg9RgzuStDEFxnsy2cahlZtfQa5FOrCTHoRYMNLsaFnarb00bsMelt73v-qlxflJUP0Y49OREZhrQ/w1200-h630-p-k-no-nu/Preah%20Theat%20Ba%20Srei%20Temple.jpg",
        "des": "An ancient, culturally revered temple site holding deep historical roots that pre-date the Angkor period. The complex blends ancient structural stones with modern shrines, remaining an active, energetic place of local prayer and seasonal festivals."
      },
      {
        "id": 3,
        "name": "Haong Waterfall",
        "image": "https://phkaslapartner.com/wp-content/uploads/2023/08/image_2023-08-16_08-08-54-edited.jpg",
        "des": "Nestled in the lush landscapes of Memot District, Haong Waterfall (also known as Laang Haong) is a captivating eco-tourism and cultural destination in Tboung Khmum Province. Located roughly 38 kilometers from the provincial town, this hidden sanctuary perfectly blends natural beauty with spiritual tranquility."
      }
    ]
  }
]

export default provinces