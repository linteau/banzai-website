class StaticPagesController < ApplicationController
  def home
  	@lead = Lead.new
  end

  def features
  end

  def pricing
  end
end
