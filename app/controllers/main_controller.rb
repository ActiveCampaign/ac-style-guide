class MainController < ApplicationController
  def home
  end
  def colors
  end

  def typography

  end
  def glossary
    @terms = Glossary.all.order('name ASC')
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
  def email_signature 
  end
  def illustrations
  end
end
