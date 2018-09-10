class CreateSounds < ActiveRecord::Migration[5.2]
  def change
    create_table :sounds do |t|
      t.string :name
      t.string :audio_file
      t.string :icon_image
      t.string :initial_color_value

      t.timestamps
    end
  end
end
