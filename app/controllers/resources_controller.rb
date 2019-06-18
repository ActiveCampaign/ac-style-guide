class ResourcesController < ApplicationController
  def email_signature
  end

   def glossary
    @terms = Glossary.all.order('name ASC')
  end
   def library
    
  end
end