class StaticController < ApplicationController

    def home
        render json: { status: "Success!"}
    end

end
