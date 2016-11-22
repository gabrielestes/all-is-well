class CreateSurveys < ActiveRecord::Migration[5.0]
  def change
    create_table :surveys do |t|
      t.belongs_to :client, index: true, foreign_key: true
      t.boolean :read, default: false

      t.timestamps
    end
  end
end
