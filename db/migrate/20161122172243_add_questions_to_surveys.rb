class AddQuestionsToSurveys < ActiveRecord::Migration[5.0]
  def change
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
  end
end
