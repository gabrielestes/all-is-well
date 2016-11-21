class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.belongs_to :client, index: true, foreign_key: true
      t.string :event_type
      t.date :date
      t.text :description
      t.boolean :read, default: false

      t.timestamps
    end
  end
end
