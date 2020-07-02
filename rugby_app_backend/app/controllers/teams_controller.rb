class TeamsController < ApplicationController

    def index
        render :json => Team.all
    end

    def destroy
        Team.find(params[:id]).destroy
        render :json => {id: params[:id], message: "team deleted"}
    end

    def create
        user = User.find_by(id: params[:user_id])
        team = Team.create(name: params[:name], wins: 0, losses: 0, draws: 0, pf: 0, pa: 0, pd: 0, bp: 0, tp: 0, user: user)
        render :json => team 
    end

end