City.destroy_all
Post.destroy_all

# ActiveRecord::Base.connection.tables.each do |t|
#    ActiveRecord::Base.connection.reset_pk_sequence!(t)
# end

atlanta = City.create!(
   name: "Atlanta",
   photo_url:"https://i.imgur.com/uChKiPG.jpg")

post = Post.create!(
   title:"City of forests",
   description:"Atlanta is the capital of the U.S. state of Georgia. It played an important part in both the Civil War and the 1960s Civil Rights Movement. Atlanta History Center chronicles the city’s past, and the Martin Luther King Jr. National Historic Site is dedicated to the African-American leader’s life and times. Downtown, Centennial Olympic Park, built for the 1996 Olympics, encompasses the massive Georgia Aquarium.The city of Atlanta, Georgia has a reputation as the city in a forest due to its abundance of trees, uncommon among major cities. With 36% of the city covered in trees, Atlanta is more densely forested than other cities in the U.S., which average only 27% coverage.",
   post_photo_url:"https://i.imgur.com/3F15iiL.jpg",
   posted_user_name:"Rose",
   city_id: atlanta.id)

post = Post.create!(
   title:"World’s Largest Aquarium",
   description:"The Georgia Aquarium is a public aquarium in Atlanta, Georgia, USA. It houses more than a hundred thousand animals and represents several thousand species, all of which reside in 10 million US gallons of marine and salt water.",
   post_photo_url:"https://i.imgur.com/gf98EXu.jpg",
   posted_user_name:"Bennett",
   city_id: atlanta.id)
   
london = City.create!(
   name:"London",
   photo_url:"https://i.imgur.com/n8lFvB7.jpg")

post = Post.create!(
   title:"City of dreams",
   description:"So this is something that really amazes me about London, you can really become whoever you want to be, the city pushes and helps you building up your dreams.Then of course it’s taken for granted that it is an amazing city that will make you daydreaming every step you take staring at those modern buildings in The City or  walking through its parks.People say if you’re bored of London you’re bored of life and I think it’s true.",
   post_photo_url:"https://i.imgur.com/IX946PA.jpg",
   posted_user_name:"Geo",
   city_id: london.id)
   

post = Post.create!(
   title:"City of fog",
   description:"Up to the 1950’s London’s fog was actually smog or air pollution from the countless coal burning fires heating homes and powering the railways. I can remember going to school a few times where you could only see a few feet in front because the smog was so thick. About 1960 the Clean Air Act came into force which curtailed the burning of coal and encouraged the use of coke; very soon the air became a lot better. Fog in London is quite rare, occasionally on some of the open, higher areas like Hampstead Heath you might get it in the Winter, but in the centre of town, its pretty rare.Heathrow and Gatwick airports are occasionally closed because of fog, Heathrow is on the edge of town and Gatwick is 30 miles south from London.",
   post_photo_url:"https://i.imgur.com/XEfefjo.jpg",
   posted_user_name:"Crickett",
   city_id: london.id)
   

p "db seeded"

