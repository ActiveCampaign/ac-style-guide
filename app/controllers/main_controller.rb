class MainController < ApplicationController
  layout "nosidebar"
  def home
  end
  def colors
  end

  def typography

  end

  def logo 

  end
  def icons

  end
  def changes

    @changes = Change.all.order('date DESC')
    @change_days = @changes.group_by{ |change| change.date }
  end
  def grid
  end
  def library
  end
  def illustrations
  end
end
