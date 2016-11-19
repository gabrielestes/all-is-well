class AddQuestionsToSurveys < ActiveRecord::Migration[5.0]
  def change
    add_column :surveys, :question_one, :integer
    add_column :surveys, :question_two, :integer
    add_column :surveys, :question_three, :integer
    add_column :surveys, :question_four, :integer
    add_column :surveys, :question_five, :integer
    add_column :surveys, :score, :integer
  end
end
