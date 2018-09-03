module Api::V1
    class ScoreboardsController < ApplicationController
        def index
            @scores = Scoreboard.order(score: :desc)
            render :index
        end

        def create
            @score = Scoreboard.new(score_params)
            if @score.save
                @scores = Scoreboard.order(score: :desc)
                render :index
            else
                render json: "Could not save this entry"
            end
        end

        def search
            @scores = Scoreboard.where("lower(player) LIKE lower(?)", "%#{params[:query]}%")
            render :index
        end

        private

        def score_params
            params.require(:score).permit(:player, :score, :query)
        end
    end
end
