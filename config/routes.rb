Rails.application.routes.draw do
  namespace :api do
    get 'cities/index'
    get 'cities/show'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  Rails.application.routes.draw do
  namespace :api do
    get 'cities/index'
    get 'cities/show'
  end
    namespace :api do
      get 'posts/index'
      get 'posts/show'
      get 'posts/delete'
      get 'posts/update'
      get 'posts/create'
    end
    namespace :api do
      get 'cities/index'
      get 'cities/show'
      get 'cities/delete'
      get 'cities/update'
      get 'cities/create'
    end
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    namespace :api do
      resources :cities do
        resources :posts
      end
    end
  end
  
end
