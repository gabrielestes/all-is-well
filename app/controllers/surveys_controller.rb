class SurveysController < ApplicationController
  def surveys_index
  end

  def create
    client_user
    @survey = Survey.new survey_params
    @survey.total = @survey.q1 + @survey.q2 + @survey.q3 + @survey.q4 + @survey.q5 + @survey.q6 + @survey.q7 + @survey.q8 + @survey.q9
    @survey.client_id = current_user.userable.id
    @current_client.wellness = @survey.total
    if @survey.save! && @current_client.save!
      # redirect_to surveys_index_path
      render :survey_complete
    end
  end

  private

  def survey_params
    params.permit(:client_id, :read, :total, :q1, :q2, :q3, :q4, :q5, :q6, :q7, :q8, :q9)
  end
end
