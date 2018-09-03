module Api::V1
    class ScoreboardsController < ApplicationController
        def index
            @scores = Scoreboard.all
            render json: @scores
        end

        def create
            @score = Scoreboard.new(score_params)
            if @score.save
                render json: @score
            else
                render json: "Could not save this entry"
            end
        end

        private

        def score_params
            params.require(:score).permit(:player, :score)
        end
    end
end
