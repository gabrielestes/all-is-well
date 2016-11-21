class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  def client_login_redirect
    if signed_in? && current_user.userable_type == 'Client'
      redirect_to client_index_path(current_user.userable_id)
    end
  end

  def current_client
    @current_client = Client.find_by_id(current_user.userable.id)
    @client_name = @current_client.first_name + ' ' + @current_client.last_name
    @client_dob = @current_client.birth_date
    @client_phone = @current_client.phone
    unless Contact.where(client_id: @current_client).first.nil?
      @client_contact = Contact.where(client_id: @current_client.id).first.phone
    end

  end


  def return_to_sign_in
    redirect_to '/sign_in'
  end

  def survey_sum(survey)
    survey.question_one + survey.question_two + survey.question_three + survey.question_four + survey.question_five
  end

  helper_method :survey_sum
  helper_method :current_client
  helper_method :return_to_sign_in
end
