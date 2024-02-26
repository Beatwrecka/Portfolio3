class AllProjectsController < ApplicationController

  def index
    
  end

  def all_projects
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
  end

end
