// Afrose Tours — tourist places dataset
// image: real photos via LoremFlickr (keyword-matched Flickr photos, no API key needed)
// Swap any line below with a direct photo URL anytime for better accuracy.
function img(name){
  const keyword = name.split(',')[0].split(' ').slice(0,2).join(',');
  return `https://loremflickr.com/400/300/${encodeURIComponent(keyword)},india/all?lock=${name.length}`;
}

const TRAVEL_DATA = {
  "Tamil Nadu": [
    {name:"Meenakshi Temple, Madurai", description:"Iconic Dravidian temple with towering painted gopurams.", bestTime:"Oct–Mar", image:img("Meenakshi Temple")},
    {name:"Ooty", description:"Hill station with tea gardens, lakes and a toy train.", bestTime:"Apr–Jun, Sep–Nov", image:img("Ooty")},
    {name:"Mahabalipuram", description:"Shore temples and rock-cut monuments by the sea.", bestTime:"Nov–Feb", image:img("Mahabalipuram")},
    {name:"Kodaikanal", description:"Misty hill station with a star-shaped lake.", bestTime:"Apr–Jun, Sep–Oct", image:img("Kodaikanal")},
    {name:"Rameswaram", description:"Coastal pilgrim town with the Ramanathaswamy Temple.", bestTime:"Oct–Apr", image:img("Rameswaram")}
  ],
  "Kerala": [
    {name:"Alleppey Backwaters", description:"Houseboat cruises through palm-lined canals.", bestTime:"Nov–Feb", image:img("Alleppey")},
    {name:"Munnar", description:"Rolling tea plantations and cool hill air.", bestTime:"Sep–Mar", image:img("Munnar")},
    {name:"Kochi", description:"Colonial-era port city with Chinese fishing nets.", bestTime:"Oct–Mar", image:img("Kochi")},
    {name:"Wayanad", description:"Forested hills, wildlife sanctuaries and spice estates.", bestTime:"Oct–May", image:img("Wayanad")},
    {name:"Varkala", description:"Cliffside beach town with a laid-back vibe.", bestTime:"Sep–Mar", image:img("Varkala")}
  ],
  "Karnataka": [
    {name:"Hampi", description:"Ruins of the Vijayanagara Empire scattered across boulders.", bestTime:"Oct–Feb", image:img("Hampi")},
    {name:"Coorg", description:"Coffee country with waterfalls and misty hills.", bestTime:"Oct–Mar", image:img("Coorg")},
    {name:"Mysore Palace", description:"Grand royal palace lit up on Sunday evenings.", bestTime:"Oct–Feb", image:img("Mysore Palace")},
    {name:"Bangalore", description:"Garden city with parks, pubs and tech-hub energy.", bestTime:"Sep–Feb", image:img("Bangalore")},
    {name:"Gokarna", description:"Quiet beach town, an alternative to Goa.", bestTime:"Oct–Mar", image:img("Gokarna")}
  ],
  "Goa": [
    {name:"Baga Beach", description:"Lively beach with shacks, water sports and nightlife.", bestTime:"Nov–Feb", image:img("Baga Beach")},
    {name:"Old Goa Churches", description:"UNESCO-listed Portuguese-era basilicas.", bestTime:"Nov–Feb", image:img("Old Goa")},
    {name:"Palolem Beach", description:"Calmer crescent beach in South Goa.", bestTime:"Nov–Mar", image:img("Palolem")},
    {name:"Dudhsagar Falls", description:"Four-tiered waterfall inside a forest reserve.", bestTime:"Jun–Sep", image:img("Dudhsagar Falls")}
  ],
  "Maharashtra": [
    {name:"Ajanta & Ellora Caves", description:"Ancient rock-cut Buddhist, Hindu and Jain caves.", bestTime:"Nov–Mar", image:img("Ellora Caves")},
    {name:"Mumbai", description:"Gateway of India, Marine Drive and Bollywood energy.", bestTime:"Nov–Feb", image:img("Mumbai")},
    {name:"Mahabaleshwar", description:"Hill station famous for strawberries and viewpoints.", bestTime:"Oct–May", image:img("Mahabaleshwar")},
    {name:"Lonavala", description:"Monsoon hill town with forts and waterfalls nearby.", bestTime:"Jun–Sep", image:img("Lonavala")}
  ],
  "Gujarat": [
    {name:"Rann of Kutch", description:"White salt desert, especially magical under a full moon.", bestTime:"Nov–Feb", image:img("Rann of Kutch")},
    {name:"Gir National Park", description:"Home to the Asiatic lion in the wild.", bestTime:"Dec–Mar", image:img("Gir National Park")},
    {name:"Somnath Temple", description:"One of the twelve Jyotirlinga shrines, by the sea.", bestTime:"Oct–Mar", image:img("Somnath Temple")},
    {name:"Sabarmati Riverfront, Ahmedabad", description:"Promenade along the river in the heart of the city.", bestTime:"Nov–Feb", image:img("Sabarmati Riverfront")}
  ],
  "Rajasthan": [
    {name:"Jaipur", description:"Pink City with Amber Fort and Hawa Mahal.", bestTime:"Oct–Mar", image:img("Jaipur")},
    {name:"Udaipur", description:"City of Lakes with palaces reflected in still water.", bestTime:"Sep–Mar", image:img("Udaipur")},
    {name:"Jaisalmer", description:"Golden Fort city on the edge of the Thar Desert.", bestTime:"Oct–Mar", image:img("Jaisalmer")},
    {name:"Jodhpur", description:"The Blue City beneath the towering Mehrangarh Fort.", bestTime:"Oct–Mar", image:img("Jodhpur")},
    {name:"Pushkar", description:"Sacred lake town known for its camel fair.", bestTime:"Oct–Mar", image:img("Pushkar")}
  ],
  "Uttar Pradesh": [
    {name:"Taj Mahal, Agra", description:"The marble mausoleum, best at sunrise.", bestTime:"Oct–Mar", image:img("Taj Mahal")},
    {name:"Varanasi Ghats", description:"Ancient riverside ghats with evening Ganga Aarti.", bestTime:"Oct–Mar", image:img("Varanasi")},
    {name:"Lucknow", description:"City of Nawabs known for Awadhi cuisine and Imambaras.", bestTime:"Oct–Mar", image:img("Lucknow")},
    {name:"Mathura-Vrindavan", description:"Krishna's birthplace, dotted with temples.", bestTime:"Oct–Mar", image:img("Vrindavan")}
  ],
  "Uttarakhand": [
    {name:"Rishikesh", description:"Yoga capital on the Ganga, known for river rafting.", bestTime:"Sep–Nov, Mar–Apr", image:img("Rishikesh")},
    {name:"Nainital", description:"Lake town surrounded by forested hills.", bestTime:"Mar–Jun, Sep–Nov", image:img("Nainital")},
    {name:"Mussoorie", description:"Queen of the Hills with mall-road views.", bestTime:"Mar–Jun, Sep–Nov", image:img("Mussoorie")},
    {name:"Valley of Flowers", description:"Alpine valley blooming with rare flowers.", bestTime:"Jul–Aug", image:img("Valley of Flowers")}
  ],
  "Himachal Pradesh": [
    {name:"Manali", description:"Snow-capped valleys and adventure sports base.", bestTime:"Mar–Jun, Oct–Feb", image:img("Manali")},
    {name:"Shimla", description:"Colonial hill capital with a famous mall road.", bestTime:"Mar–Jun, Dec–Jan", image:img("Shimla")},
    {name:"Dharamshala-McLeodganj", description:"Tibetan culture hub in the Dhauladhar foothills.", bestTime:"Mar–Jun, Sep–Nov", image:img("McLeodganj")},
    {name:"Spiti Valley", description:"Stark Himalayan desert valley with monasteries.", bestTime:"May–Sep", image:img("Spiti Valley")}
  ],
  "Punjab": [
    {name:"Golden Temple, Amritsar", description:"Sikhism's holiest shrine, glowing at the lake's edge.", bestTime:"Nov–Mar", image:img("Golden Temple")},
    {name:"Wagah Border", description:"Daily flag-lowering ceremony at the India-Pakistan border.", bestTime:"Oct–Mar", image:img("Wagah Border")},
    {name:"Chandigarh", description:"Planned city with Le Corbusier architecture and Rock Garden.", bestTime:"Oct–Mar", image:img("Chandigarh")}
  ],
  "Haryana": [
    {name:"Kurukshetra", description:"Mythological battlefield of the Mahabharata.", bestTime:"Oct–Mar", image:img("Kurukshetra")},
    {name:"Sultanpur National Park", description:"Wetland sanctuary for migratory birds.", bestTime:"Nov–Feb", image:img("Sultanpur National Park")},
    {name:"Pinjore Gardens", description:"Mughal-style terraced garden complex.", bestTime:"Oct–Mar", image:img("Pinjore Gardens")}
  ],
  "Delhi": [
    {name:"Red Fort", description:"Mughal fortress and seat of past emperors.", bestTime:"Oct–Mar", image:img("Red Fort")},
    {name:"Qutub Minar", description:"Tallest brick minaret in the world.", bestTime:"Oct–Mar", image:img("Qutub Minar")},
    {name:"India Gate", description:"War memorial and a popular evening hangout.", bestTime:"Oct–Mar", image:img("India Gate")},
    {name:"Humayun's Tomb", description:"Garden tomb that inspired the Taj Mahal.", bestTime:"Oct–Mar", image:img("Humayun's Tomb")}
  ],
  "Madhya Pradesh": [
    {name:"Khajuraho Temples", description:"Temples famous for intricate medieval carvings.", bestTime:"Oct–Mar", image:img("Khajuraho")},
    {name:"Bandhavgarh National Park", description:"High-density tiger reserve.", bestTime:"Oct–Jun", image:img("Bandhavgarh")},
    {name:"Sanchi Stupa", description:"Ancient Buddhist monument complex.", bestTime:"Oct–Mar", image:img("Sanchi Stupa")},
    {name:"Pachmarhi", description:"Satpura hill station with waterfalls and caves.", bestTime:"Oct–Jun", image:img("Pachmarhi")}
  ],
  "Chhattisgarh": [
    {name:"Chitrakote Falls", description:"India's widest waterfall, on the Indravati river.", bestTime:"Oct–Feb", image:img("Chitrakote Falls")},
    {name:"Bastar", description:"Tribal heartland known for its unique culture and forests.", bestTime:"Oct–Feb", image:img("Bastar")},
    {name:"Sirpur", description:"Ancient archaeological site with Buddhist ruins.", bestTime:"Oct–Mar", image:img("Sirpur")}
  ],
  "Bihar": [
    {name:"Bodh Gaya", description:"Where the Buddha attained enlightenment under the Bodhi Tree.", bestTime:"Oct–Mar", image:img("Bodh Gaya")},
    {name:"Nalanda", description:"Ruins of an ancient world-renowned university.", bestTime:"Oct–Mar", image:img("Nalanda")},
    {name:"Patna", description:"Riverside capital with museums and Golghar.", bestTime:"Oct–Mar", image:img("Patna")}
  ],
  "Jharkhand": [
    {name:"Netarhat", description:"Hill station known as the 'Queen of Chotanagpur'.", bestTime:"Oct–Mar", image:img("Netarhat")},
    {name:"Betla National Park", description:"Forested tiger reserve with old forts.", bestTime:"Nov–Apr", image:img("Betla National Park")},
    {name:"Hundru Falls", description:"Dramatic waterfall on the Subarnarekha river.", bestTime:"Jul–Oct", image:img("Hundru Falls")}
  ],
  "West Bengal": [
    {name:"Darjeeling", description:"Tea-garden hill town with views of Kanchenjunga.", bestTime:"Mar–May, Sep–Nov", image:img("Darjeeling")},
    {name:"Kolkata", description:"City of Victoria Memorial, trams and intellectual heritage.", bestTime:"Oct–Mar", image:img("Kolkata")},
    {name:"Sundarbans", description:"Mangrove delta and tiger reserve by boat.", bestTime:"Oct–Mar", image:img("Sundarbans")},
    {name:"Kalimpong", description:"Quiet hill town with monasteries and flower nurseries.", bestTime:"Mar–May, Oct–Nov", image:img("Kalimpong")}
  ],
  "Odisha": [
    {name:"Konark Sun Temple", description:"13th-century temple shaped like a chariot.", bestTime:"Oct–Mar", image:img("Konark Sun Temple")},
    {name:"Puri", description:"Pilgrim beach town, home to the Jagannath Temple.", bestTime:"Oct–Mar", image:img("Puri")},
    {name:"Chilika Lake", description:"Asia's largest brackish lagoon, rich in birdlife.", bestTime:"Nov–Feb", image:img("Chilika Lake")}
  ],
  "Assam": [
    {name:"Kaziranga National Park", description:"Home to the one-horned rhinoceros.", bestTime:"Nov–Apr", image:img("Kaziranga")},
    {name:"Guwahati", description:"Riverside city and gateway to the Northeast, with Kamakhya Temple.", bestTime:"Oct–Apr", image:img("Guwahati")},
    {name:"Majuli", description:"World's largest river island, with Vaishnavite culture.", bestTime:"Oct–Mar", image:img("Majuli")}
  ],
  "Meghalaya": [
    {name:"Cherrapunji", description:"One of the wettest places on earth, with living root bridges.", bestTime:"Oct–May", image:img("Cherrapunji")},
    {name:"Shillong", description:"Scotland of the East, with waterfalls and music culture.", bestTime:"Oct–May", image:img("Shillong")},
    {name:"Dawki", description:"Crystal-clear river on the Bangladesh border.", bestTime:"Nov–Feb", image:img("Dawki")}
  ],
  "Sikkim": [
    {name:"Gangtok", description:"Capital with monasteries and views of Kanchenjunga.", bestTime:"Mar–May, Sep–Nov", image:img("Gangtok")},
    {name:"Tsomgo Lake", description:"Glacial lake high in the Himalayas.", bestTime:"Apr–Oct", image:img("Tsomgo Lake")},
    {name:"Yumthang Valley", description:"Valley of flowers framed by snow peaks.", bestTime:"Feb–Jun", image:img("Yumthang Valley")}
  ],
  "Arunachal Pradesh": [
    {name:"Tawang", description:"High-altitude town with a major Buddhist monastery.", bestTime:"Mar–Oct", image:img("Tawang")},
    {name:"Ziro Valley", description:"Pine-covered valley, home to the Apatani tribe.", bestTime:"Mar–Oct", image:img("Ziro Valley")},
    {name:"Bomdila", description:"Hill town with monasteries and apple orchards.", bestTime:"Mar–Oct", image:img("Bomdila")}
  ],
  "Nagaland": [
    {name:"Kohima", description:"Capital known for WWII history and the Hornbill Festival.", bestTime:"Oct–May", image:img("Kohima")},
    {name:"Dzukou Valley", description:"Trekking valley famous for seasonal flowers.", bestTime:"Jun–Sep", image:img("Dzukou Valley")},
    {name:"Mokokchung", description:"Heart of Ao Naga culture and rolling hills.", bestTime:"Oct–May", image:img("Mokokchung")}
  ],
  "Manipur": [
    {name:"Loktak Lake", description:"Floating phumdis and the only floating national park.", bestTime:"Nov–Feb", image:img("Loktak Lake")},
    {name:"Imphal", description:"Capital with the Kangla Fort and war cemeteries.", bestTime:"Oct–Mar", image:img("Imphal")}
  ],
  "Mizoram": [
    {name:"Aizawl", description:"Hilltop capital with sweeping valley views.", bestTime:"Oct–Mar", image:img("Aizawl")},
    {name:"Reiek", description:"Mountain peak with panoramic views and trekking.", bestTime:"Oct–Mar", image:img("Reiek")}
  ],
  "Tripura": [
    {name:"Ujjayanta Palace", description:"Former royal palace, now a state museum.", bestTime:"Oct–Mar", image:img("Ujjayanta Palace")},
    {name:"Neermahal", description:"Lake palace built in the middle of Rudrasagar Lake.", bestTime:"Oct–Mar", image:img("Neermahal")}
  ],
  "Andhra Pradesh": [
    {name:"Tirupati", description:"Home to one of the world's most-visited temples.", bestTime:"Sep–Feb", image:img("Tirupati")},
    {name:"Araku Valley", description:"Coffee-growing valley in the Eastern Ghats.", bestTime:"Oct–Mar", image:img("Araku Valley")},
    {name:"Visakhapatnam", description:"Port city with beaches and the Kailasagiri hill park.", bestTime:"Oct–Mar", image:img("Visakhapatnam")}
  ],
  "Telangana": [
    {name:"Charminar, Hyderabad", description:"16th-century monument at the city's heart.", bestTime:"Oct–Feb", image:img("Charminar")},
    {name:"Golconda Fort", description:"Hilltop fort famous for its acoustic engineering.", bestTime:"Oct–Feb", image:img("Golconda Fort")},
    {name:"Warangal", description:"Former Kakatiya capital with carved temple ruins.", bestTime:"Oct–Feb", image:img("Warangal")}
  ],
  "Jammu and Kashmir": [
    {name:"Srinagar", description:"Dal Lake houseboats and Mughal gardens.", bestTime:"Mar–Oct", image:img("Srinagar")},
    {name:"Gulmarg", description:"Meadow-turned-ski-resort with a high-altitude gondola.", bestTime:"Dec–Feb, Apr–Jun", image:img("Gulmarg")},
    {name:"Pahalgam", description:"Valley of shepherds, gateway to Amarnath.", bestTime:"Mar–Oct", image:img("Pahalgam")}
  ],
  "Ladakh": [
    {name:"Leh", description:"High-desert town with monasteries and palaces.", bestTime:"May–Sep", image:img("Leh")},
    {name:"Pangong Tso", description:"Vast high-altitude lake that changes colour through the day.", bestTime:"May–Sep", image:img("Pangong Tso")},
    {name:"Nubra Valley", description:"Cold desert valley with sand dunes and double-humped camels.", bestTime:"May–Sep", image:img("Nubra Valley")}
  ],
  "Andaman and Nicobar Islands": [
    {name:"Radhanagar Beach, Havelock", description:"Frequently rated one of Asia's best beaches.", bestTime:"Oct–May", image:img("Radhanagar Beach")},
    {name:"Cellular Jail, Port Blair", description:"Colonial-era prison turned museum.", bestTime:"Oct–May", image:img("Cellular Jail")},
    {name:"Neil Island", description:"Quiet island known for coral reefs and bio-bridge.", bestTime:"Oct–May", image:img("Neil Island")}
  ],
  "Lakshadweep": [
    {name:"Agatti Island", description:"Coral lagoon and the main air gateway to the islands.", bestTime:"Oct–May", image:img("Agatti Island")},
    {name:"Bangaram Island", description:"Uninhabited atoll known for snorkelling and diving.", bestTime:"Oct–May", image:img("Bangaram Island")}
  ],
  "Chandigarh": [
    {name:"Rock Garden", description:"Sculpture garden built from industrial and urban waste.", bestTime:"Oct–Mar", image:img("Rock Garden Chandigarh")},
    {name:"Sukhna Lake", description:"Lakefront promenade against the Shivalik foothills.", bestTime:"Oct–Mar", image:img("Sukhna Lake")}
  ],
  "Puducherry": [
    {name:"White Town", description:"French Quarter with colonial villas and cafes.", bestTime:"Oct–Mar", image:img("White Town Pondicherry")},
    {name:"Auroville", description:"Experimental township centred on the golden Matrimandir.", bestTime:"Oct–Mar", image:img("Auroville")},
    {name:"Paradise Beach", description:"Boat-access beach with calm turquoise water.", bestTime:"Oct–Mar", image:img("Paradise Beach Pondicherry")}
  ],
  "Daman and Diu": [
    {name:"Diu Fort", description:"Portuguese-era sea fort overlooking the Arabian Sea.", bestTime:"Oct–Mar", image:img("Diu Fort")},
    {name:"Nagoa Beach", description:"Horseshoe-shaped beach popular for water sports.", bestTime:"Oct–Mar", image:img("Nagoa Beach")}
  ],
  "Dadra and Nagar Haveli": [
    {name:"Silvassa", description:"Riverside town with parks and tribal museums.", bestTime:"Oct–Mar", image:img("Silvassa")},
    {name:"Vanganga Lake Garden", description:"Lake garden with sculptures and a tribal museum.", bestTime:"Oct–Mar", image:img("Vanganga Lake")}
  ]
};
