class QueriesController < ApplicationController
  def home
  end

  def auth
    render json: {code: params[:code]}
  end 
end
