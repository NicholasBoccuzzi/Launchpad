class Api::RewardsController < ApplicationController
  def index
    if params[:id]
      @rewards = Reward.select("*").where("project_id === ?", id)
    end
  end

  def create
    @reward = Reward.new(reward_params)

    if @reward.save
      print "true";
    else
      render json: @reward.errors.full_messages, status:422
    end
  end


  private

  def reward_params
    params.require(:reward).permit(
      :id,
      :amount,
      :title,
      :body,
      :delivery_date,
      :project_id
    )
  end
end
