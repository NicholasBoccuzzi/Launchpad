class Api::BackingsController < ApplicationController

  def create
    @backing = Backing.new(backing_params)
  end

private
  def backing_params
    params.require(:backing).permit(
      :id,
      :amount,
      :user_id,
      :reward_id
    )
  end


end
