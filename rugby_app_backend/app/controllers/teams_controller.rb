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
        if team.id
            render json: {
                status: :created,
                team: team
            }
        else
            render json: { 
                status: :not_created
            }
        end
    end

    def update
        team = Team.find(params[:id])
        team.update_attributes(name: params[:name], wins: params[:wins], losses: params[:losses], draws: params[:draws], pf: params[:pf], pa: params[:pa], pd: params[:pd], bp: params[:bp], tp: params[:tp])
        render :json => team
    end

end