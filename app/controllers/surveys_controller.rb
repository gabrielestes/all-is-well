class SurveysController < ApplicationController
  def surveys_index
  end

  def create
    @survey = Survey.new survey_params
    if @survey.save!
      redirect_to surveys_index_path
    end
  end

  private

  def survey_params
    params.permit(:client_id, :read, :total, :q1, :q2, :q3, :q4, :q5, :q6, :q7, :q8, :q9)
  end
end
