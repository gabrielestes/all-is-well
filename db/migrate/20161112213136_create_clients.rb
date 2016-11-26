class CreateClients < ActiveRecord::Migration[5.0]
  def change
    create_table :clients do |t|
      t.belongs_to :therapist, index: true, foreign_key: true
      t.string :first_name
      t.string :last_name
      t.string :initial
      t.datetime :birth_date
      t.string :phone
      t.json :emergency
      t.integer :wellness
      t.string :general_prac
      t.string :gender
      t.string :current_meds

      t.timestamps
    end
  end
end
