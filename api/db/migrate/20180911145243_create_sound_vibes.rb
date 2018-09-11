class CreateSoundVibes < ActiveRecord::Migration[5.2]
  def change
    create_table :sound_vibes do |t|
      t.integer :sound_id
      t.integer :vibe_id
      t.float :volume

      t.timestamps
    end
  end
end
