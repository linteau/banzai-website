require 'pry'
class LeadsController < ApplicationController
  def new
    @lead = Lead.new
  end

  def create
    @lead = Lead.new(params[:lead]) 
    if @lead.deliver
      flash[:success] = 'Thank you for your message. We will contact you soon!'
      redirect_to :leads
    else
      flash.now[:error] = 'Cannot send message.'
      render :new
    end
  end
end
