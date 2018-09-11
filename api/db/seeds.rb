# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

fire = Sound.create(name: "fire", initial_color_value: "51,0,0")
ocean = Sound.create(name: "ocean", initial_color_value: "0,51,51")
forest = Sound.create(name: "forest", initial_color_value: "0,51,0")
voice = Sound.create(name: "voice", initial_color_value: "64,64,64")
river = Sound.create(name: "river", initial_color_value: "0,51,102")
rain = Sound.create(name: "rain", initial_color_value: "192,192,192")

vibe1 = Vibe.create(name: "chill")
vibe2 = Vibe.create(name: "camp")
vibe3 = Vibe.create(name: "rave")

sound_vibe = SoundVibe.create(sound_id:fire.id, vibe_id: vibe1.id, volume: 0.10)
sound_vib1 = SoundVibe.create(sound_id:rain.id, vibe_id: vibe1.id, volume: 0.80)
sound_vib2 = SoundVibe.create(sound_id:ocean.id, vibe_id: vibe1.id, volume: 0.40)

sound_vibe = SoundVibe.create(sound_id:forest.id, vibe_id: vibe2.id, volume: 0.10)
sound_vib1 = SoundVibe.create(sound_id:rain.id, vibe_id: vibe2.id, volume: 0.80)
sound_vib2 = SoundVibe.create(sound_id:river.id, vibe_id: vibe2.id, volume: 0.40)
