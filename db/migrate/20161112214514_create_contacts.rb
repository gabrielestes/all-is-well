class CreateContacts < ActiveRecord::Migration[5.0]
  def change
    create_table :contacts do |t|
      t.belongs_to :client, index: true, foreign_key: true
      t.string :first_name
      t.string :last_name
      t.string :relation
      t.string :phone

      t.timestamps
    end
  end
end
