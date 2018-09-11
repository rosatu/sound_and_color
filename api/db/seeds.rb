# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Sound.delete_all

ocean = Sound.create(name: "ocean", audio_file:"https://actions.google.com/sounds/v1/water/waves_crashing_on_rock_beach.ogg", icon_image:"./water.jpg", initial_color_value: "0,51,51")

fireSound = Sound.create(name: "fire", audio_file: "https://actions.google.com/sounds/v1/ambiences/fire.ogg", icon_image:"./fire.jpg", initial_color_value: "51,0,0")

tricklingstreamSound = Sound.create(name:"tricklingStream", audio_file:"https://actions.google.com/sounds/v1/water/small_stream_flowing.ogg", icon_image: "./tricklingstream.jpg", initial_color_value: "0,51,102")

nightcrickets = Sound.create(name:"nightcrickets", audio_file:"https://actions.google.com/sounds/v1/animals/afternoon_crickets_long.ogg", icon_image: "./nightcrickets.jpg", initial_color_value: "64,64,64")

thunderstormSound = Sound.create(icon_image: "./thunderstorm.jpg", audio_file: "https://actions.google.com/sounds/v1/weather/thunderstorm_long.ogg
", name: "thunderstorm", initial_color_value: "192,192,192" )

chuckleSound = Sound.create(icon_image: "./chuckle.jpg", audio_file:"https://actions.google.com/sounds/v1/human_voices/male_chuckling.ogg", name: "chuckle", initial_color_value: "250,250,210")

fartSound = Sound.create(name:"fart", icon_image:"./gas.jpg", audio_file:"https://actions.google.com/sounds/v1/human_voices/human_fart.ogg", initial_color_value: "139,68,19")
