# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


ocean = Sound.create(name: "ocean", audio_file:"https://actions.google.com/sounds/v1/water/waves_crashing_on_rock_beach.ogg", icon_image:"./SVGs/ocean.svg", initial_color_value: "0,51,51")

fireSound = Sound.create(name: "fire", audio_file: "https://actions.google.com/sounds/v1/ambiences/fire.ogg", icon_image: "./SVGs/fire.svg", initial_color_value: "51,0,0")

tricklingstreamSound = Sound.create(name:"tricklingStream", audio_file:"https://actions.google.com/sounds/v1/water/small_stream_flowing.ogg", icon_image: "./SVGs/river.svg", initial_color_value: "0,51,102")

nightcrickets = Sound.create(name:"nightcrickets", audio_file:"https://actions.google.com/sounds/v1/animals/afternoon_crickets_long.ogg", icon_image: "./SVGs/night.svg", initial_color_value: "64,64,64")

thunderstormSound = Sound.create(icon_image: "./SVGs/thunder.svg", audio_file: "https://actions.google.com/sounds/v1/weather/thunderstorm_long.ogg
", name: "thunderstorm", initial_color_value: "192,192,192" )

chuckleSound = Sound.create(icon_image: "./SVGs/chuckle.svg", audio_file:"https://actions.google.com/sounds/v1/human_voices/male_chuckling.ogg", name: "chuckle", initial_color_value: "250,250,210")

# alphaSound = Sound.create(name:"alpha", icon_image:"./SVGs/alpha.svg", audio_file:"https://actions.google.com/sounds/v1/human_voices/human_fart.ogg", initial_color_value: "139,68,19")

# betaSound = Sound.create(name:"fart", icon_image:"./SVGs/beta.svg", audio_file:"https://actions.google.com/sounds/v1/impacts/chain_jingle.ogg", initial_color_value: "139,68,19")
# fanSound = Sound.create(name:"fan", icon_image:"./SVGs/fan.svg", audio_file:"https://actions.google.com/sounds/v1/ambiences/ambient_hum_air_conditioner.ogg", initial_color_value: "139,68,19")
# hummingbirdSound = Sound.create(name:"hummingbird", icon_image:"./SVGs/hummingbird.svg", audio_file:"https://actions.google.com/sounds/v1/animals/owl_hooting.ogg", initial_color_value: "139,68,19")

coffeeShopSound = Sound.create(name:"coffee shop", icon_image:"./SVGs/coffee_beans.svg", audio_file:"https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg", initial_color_value: "139,68,19")
bearSound = Sound.create(name:"bear", icon_image:"./SVGs/bear.svg", audio_file: "https://actions.google.com/sounds/v1/animals/animal_bark_and_growl.ogg", initial_color_value: "139,68,19")
windSound = Sound.create(name:"wind", icon_image:"./SVGs/wind.svg", audio_file: "https://actions.google.com/sounds/v1/weather/wind.ogg", initial_color_value: "139,68,19")
# beeSound = Sound.create(name:"bees", icon_image:"./SVGs/bees.svg", audio_file: "https://actions.google.com/sounds/v1/animals/swarming_bees.ogg", initial_color_value: "139,68,19")
breathSound = Sound.create(name:"breath", icon_image:"./SVGs/breath.svg", audio_file: "https://actions.google.com/sounds/v1/human_voices/human_breathing_mouth.ogg", initial_color_value: "139,68,19")
