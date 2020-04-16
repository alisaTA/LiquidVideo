class QueriesController < ApplicationController
  def home
    @query = Query.new
  end

  def create
    query = Query.new(strong_params)
    if query.save
      redirect_to root_path
    else 
      # render partial form
    end 
  end 

  def auth
    render json: {code: params[:code]}
  end


  private

  def strong_params
    params.require(:query).permit(:firstname,:lastname,:email,:company,:phone)
  end 
end
