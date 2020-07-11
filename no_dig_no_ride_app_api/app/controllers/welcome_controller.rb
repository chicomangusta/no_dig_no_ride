class WelcomeController < ApplicationController
    def index
    render json: { status: 200, message: "Bikeboard API" }
  end
end
