class NotesController < ApplicationController
  def notes_index
  end

  def create
    note = Note.new(
      therapist_id: current_user.userable_id,
      client_id: params[:client_id],
      title: params[:title],
      message: params[:message],
      shared: params[:shared]
    )
    if note.save
      #render page? back to ??
      redirect_to :show
    end
  end

  def update
  end

  def delete
  end
end
