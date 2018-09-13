Rails.application.routes.draw do
  
  # ActiveAdmin Shit
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  # Global
  root 'main#home'
  get '/changes' => 'main#changes'

  # Brand Pages
  get '/brand' => 'brand#index'
  get '/typography' => 'main#typography'
  get '/brand/typography' => 'brand#typography'
  get '/colors' => 'main#colors'
  get '/brand/colors' => 'brand#colors'
  get '/logo' => 'main#logo'
  get '/brand/logo' => 'brand#logo'
  get '/icons' => 'main#icons'
  get '/brand/icons' => 'brand#icons'
  get '/grid' => 'main#grid'
  get '/brand/grid' => 'brand#grid'
  get '/library' => 'main#library'
  get '/brand/library' => 'brand#library'
  get '/illustrations' => 'main#illustrations'
  get '/brand/illustrations' => 'brand#illustrations'

  # Marketing Pages
  get '/marketing/webpatterns' => 'marketing#webpatterns'

  # Resources Pages
  get '/email-signature' => 'resources#email_signature'
  get '/resources/email-signature' => 'resources#email_signature'
  get '/resources/glossary' => 'resources#glossary'
  get '/resources/library' => 'resources#library'

  # Patterns
  get '/patterns' => 'patterns#index'
  get '/patterns/buttons' => 'patterns#buttons'
  get '/patterns/input-fields' => 'patterns#input_fields'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
