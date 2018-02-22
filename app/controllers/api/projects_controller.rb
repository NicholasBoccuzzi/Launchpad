class Api::ProjectsController < ApplicationController
  def index
    if params[:category]
      @projects = Project.find_by_category(project_params[:category])
    else
      @projects = Project.select("*").from("projects").where("live = ?", "true")
    end
  end

  def show
    @project = Project.find(params[:id])
  end

  def create
    @project = Project.new(project_params)

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
    @project = Project.find(project_params[:id])

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

private

  def project_params
    params.require(:project).permit(
      :id,
      :title,
      :location,
      :funding_goal,
      :summary,
      :body,
      :creator_id,
      :deadline,
      :category,
      :subcategory,
      :image,
      :imageFile,
      :imageUrl,
      :funded,
      :live,
      reward_attributes: [:title, :amount, :project_id, :body, :delivery_date]
    )
  end
end
