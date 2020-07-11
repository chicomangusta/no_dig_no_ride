class BikesController < ApplicationController
  before_action :set_bike, only: [:show, :update, :destroy]

  # GET/ bikes
  def index
    @bikes = Bikes.all.reverse
    render json: @bikes
  end

  # GET/ bikes/1
  def show
    render json: @bike
  end


  # POST/ bikes
  def create
    @bike = Bikes.new(bike_params)

    if @bike.save
      render json: @bike, status: :created, location: @bike
    else
      render json: @bike.errors, status: :unprocessable_entity
    end
  end


  # PATCH/PUT/ bikes/1
  def update
    if @bike.update(bike_params)
      render json: @bike
    else
      render json: @bike.errors, status: :unprocessable_entity
    end
  end


  # DELETE/ bikes/1
  def destroy
    @bike.destroy
  end



# PRRIVATE
  private
   
    def set_bike
      @bike = Bike.find(params[:id])
    end

    
    def bike_params
      params.require(:bike).permit(:brand, :size, :type, :suspension, :shox, :wheel_size, :rear_der, :dropper, :year)
    end
end