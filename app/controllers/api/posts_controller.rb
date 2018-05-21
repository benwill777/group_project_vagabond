class Api::PostsController < ApplicationController
  def index
    @posts = City.find(params[:city_id]).posts
        render json: @posts
  end

  def show
   
  end

  def delete

  end

  def update
  end

  def create

  end
end
