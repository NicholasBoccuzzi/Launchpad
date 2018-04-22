class Api::ProjectsController < ApplicationController
  def index
    if params[:search]
      if params[:search][:location] == nil || params[:search][:location] == "Earth" || params[:search][:location] == ""
        @projects = Project.select("*").from("projects").where("live = true")
      else
        @projects = Project.select("*").from("projects").where("location = ? AND live = true", params[:search][:location])
      end

      if params[:search][:category] == nil || params[:search][:category] == ""
      else
        @projects = @projects.where("category = ?", params[:search][:category])
      end

      if params[:search][:order] != nil || params[:search][:order] != ""
        if params[:search][:order] == "Magic" || params[:search][:order] == "Newest"
        elsif params[:search][:order] == "Popularity"
          @projects = @projects.order("current_funding DESC")
        elsif params[:search][:order] == "MostFunded"
          @projects = @projects.order("current_funding DESC")
        elsif params[:search][:order] == "EndDate"
          @projects = @projects.order(deadline: "ASC")
        elsif params[:search][:order] == "Newest"
          @projects = @projects.order("created_at DESC")
        end
      end

      return @projects
    elsif params[:creator_id]
      @projects = Project.select("*").from("projects").where("creator_id = ?", params[:creator_id])
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

    debugger

    if project_params[:additional_funds] != false
      Project.update(project_params[:id], current_funding: (@project.current_funding += project_params[:additional_funds].to_i))
      @project.save
      print @project.current_funding
    end

    if @project.update_attributes(project_params) && !project_params[:additional_funds]
      render :show
    elsif !project_params[:additional_funds]
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
      :additional_funds,
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
    )
  end
end
