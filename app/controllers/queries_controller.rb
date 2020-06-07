class QueriesController < ApplicationController
  def home
    @query = Query.new
  end

  def create
    form = params['query']['form_type']
    @query = Query.new(strong_params)
    if @query.save
      redirect_to root_path
    else 
      render form
    end 
  end 

  def auth
    render json: {code: params[:code]}
  end

  def faq
    @query = Query.new
  end


  def contact
    @query = Query.new
  end

  def quote
    @query = Query.new
  end 


  private

  def strong_params
    params.require(:query).permit(:first_name, :last_name, :facility_count, 
                                  :camera_count,:radar_count, :email,
                                  :company, :phone, :company_website, :position, 
                                  :message)
  end 
end
