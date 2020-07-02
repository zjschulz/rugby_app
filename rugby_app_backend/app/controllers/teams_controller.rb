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
        team = Team.create(name: params[:name], wins: params[:wins], losses: params[:losses], draws: params[:draws], pf: params[:pf], pa: params[:pa], pd: params[:pd], bp: params[:bp], tp: params[:tp], user: user)
        render :json => team 
    end

end