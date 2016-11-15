class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.belongs_to :client, index: true, foreign_key: true
      t.event_type :string
      t.date :date
      t.text :description

      t.timestamps
    end
  end
end
