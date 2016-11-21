class CreateNotes < ActiveRecord::Migration[5.0]
  def change
    create_table :notes do |t|
      t.belongs_to :therapist, index: true, foreign_key: true
      t.belongs_to :client, index: true, foreign_key: true
      t.integer :client_id
      t.string :title
      t.text :message
      t.boolean :shared
      t.boolean :read, default: false

      t.timestamps
    end
  end
end
