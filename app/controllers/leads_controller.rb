require 'pry'
class LeadsController < ApplicationController
  def new
    @lead = Lead.new
  end

  def create
    @lead = Lead.new(params[:lead])
    if @lead.deliver
      flash[:success] = 'Thank you for your message. We will contact you soon!'
      redirect_to(request.env['HTTP_REFERER']+'#homepage-form')
    else
      flash[:error] = 'There was an error with your form submission, please try again!'
      redirect_to request.path(anchor: 'homepage-form')
    end
  end
end
