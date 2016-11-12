class CreateClients < ActiveRecord::Migration[5.0]
  def change
    create_table :clients do |t|
      t.string :first_name
      t.string :last_name
      t.string :initial
      t.string :birth_date
      t.string :phone
      t.json :emergency
      t.integer :wellness

      t.timestamps
    end
  end
end
