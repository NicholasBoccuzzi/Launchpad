class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
  end

  def create
    @project = Project.create!(project_params)

    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status:422
    end
  end

  def edit
    @project = Project.find(project_params[:project][:id])
  end

  def update
    @project = Project.find(project_params[:project][:id])

    if @project.update_attributes(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status:422
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy

    render :index
  end


  def project_params
    params.require(:project).permit(
      :title,
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
