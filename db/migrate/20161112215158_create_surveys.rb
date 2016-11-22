class CreateSurveys < ActiveRecord::Migration[5.0]
  def change
    create_table :surveys do |t|
      t.belongs_to :client, index: true, foreign_key: true
      t.boolean :read, default: false
      add_column :surveys, :total, :integer
      add_column :surveys, :q1, :integer
      add_column :surveys, :q2, :integer
      add_column :surveys, :q3, :integer
      add_column :surveys, :q4, :integer
      add_column :surveys, :q5, :integer
      add_column :surveys, :q6, :integer
      add_column :surveys, :q7, :integer
      add_column :surveys, :q8, :integer
      add_column :surveys, :q9, :integer

      t.timestamps
    end
  end
end
