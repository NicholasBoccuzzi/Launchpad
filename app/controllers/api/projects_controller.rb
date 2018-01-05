class ProjectsController < ApplicationController
  def index
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
  end

  def create
    @project = Project.create!(project_params)
    render :show
  end

  def


    def project_params
      params.require(:project).permit(
        :title,
        :current_funding,
        :funding_goal,
        :summary,
        :body,
        :creator_id,
        :deadline,
        :category,
        :subcategory
      )
    end
end
