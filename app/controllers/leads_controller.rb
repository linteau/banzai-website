require 'pry'
class LeadsController < ApplicationController
  def new
    @lead = Lead.new
  end

  def create
    @lead = Lead.new(params[:lead])
    if @lead.deliver
      flash[:success] = 'Thank you for your message. We will contact you soon!'
      redirect_to leads_path(anchor: 'homepage-form')
    else
      flash[:error] = 'There was an error with your form submission, please try again!'
      redirect_to root_path(anchor: 'homepage-form')
    end
  end
end
