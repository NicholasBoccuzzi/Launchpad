Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :projects
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
