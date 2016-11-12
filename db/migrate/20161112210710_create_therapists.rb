class CreateTherapists < ActiveRecord::Migration[5.0]
  def change
    create_table :therapists do |t|
      t.string :first_name
      t.string :last_name
      t.string :cred
      t.string :phone
      t.string :email

      t.timestamps
    end
  end
end
