FirstApp::Application.routes.draw do
  


  resources :incidencias

  root 'main#home'
  get '/main/columns'
  get  '/main/import'
  post '/main/do_import'
  post '/main/do_clear_all'
  get  '/lecturas/pendientes'
  get  '/update_lectura', to: 'lecturas#update_lectura'
  post '/lecturas/update_lectura'
  match '/lecturas/:id/georeferenciar', to: 'lecturas#georeferenciar', via: 'post' 
  get  'ruta/index'
  get  'ruta/periodos'
  resources :lecturas
  resources :lecturistas

  get "qcode" => 'main#qcode'
  get "download_mobile" => "main#download_mobile"


  get "jobs/index"
  resources :lectura_hsts
  resources :cities

  match "/delayed_job" => DelayedJobWeb, :anchor => false, via: [:get, :post]

  resources :rutum do
    resources :medidors, only: [:index, :new, :create, :edit]
  end
  
  resources :medidors

  get "/rutum/:id/medidores" => "ruta#medidores"
  post "/rutum/:id/georeferenciar" => "ruta#georeferenciar"

  get "unidades/index"
  get "unidades/lecturas/:id" => "unidades#lecturas"

  
  get "test/controles"



  match '/test_conctrolers', to: 'test#controles', via: 'get'


  match 'ruta/search', to:'ruta#search', via: 'get'
  match 'ruta/search_map', to:'ruta#search_map', via: 'get'



  get "mapa/mapa1"
  resources :users


  resources :sessions, only: [:new, :create, :destroy]


  match '/signup',  to: 'users#new',            via: 'get'
  match '/signin',  to: 'sessions#new',         via: 'get'
  match '/signout', to: 'sessions#destroy',     via: 'delete'
  match '/signup',  to: 'users#new',            via: 'get'
  match '/help',    to: 'static_pages#help',    via: 'get'
  match '/about',   to: 'static_pages#about',   via: 'get'
  match '/contact', to: 'static_pages#contact', via: 'get'
  match '/lect', to: 'lecturas#lect', via: 'get'
  match '/getLecturas', to: 'lecturas#getLecturas', via: 'get'

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
