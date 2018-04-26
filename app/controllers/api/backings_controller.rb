class Api::BackingsController < ApplicationController

  def create
    @backing = Backing.new(backing_params)

    debugger
    if @backing.save
      print "true"
    else
      render json: @backing.errors.full_messages, status:422
    end
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
