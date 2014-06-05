FirstApp::Application.routes.draw do

  root 'main#home'

  # Autent... routes  
  resources :sessions, only: [:new, :create, :destroy]
  match '/signup',  to: 'users#new',            via: 'get'
  match '/signin',  to: 'sessions#new',         via: 'get'
  match '/login',  to: 'sessions#login',         via: 'post' #acceso por phonegap
  match '/signout', to: 'sessions#destroy',     via: 'get'
  match '/help',    to: 'static_pages#help',    via: 'get'
  match '/about',   to: 'static_pages#about',   via: 'get'
  match '/contact', to: 'static_pages#contact', via: 'get'
  match '/preferences', to: 'users#preferences', via: 'get'




  get  '/main/columns'
  get  '/main/import'
  get  '/main/foto'
  post '/main/do_import'
  post '/main/do_clear_all'
  get  '/lecturas/pendientes'
  post  '/update_lectura', to: 'lecturas#update_lectura'
  post  '/update_foto', to: 'lecturas#update_foto'
  get  '/main/test_update_lectura'
  get  '/lecturas/delete_foto', to: 'lecturas#delete_foto'
  match  '/lecturas/add_foto', to: 'lecturas#add_foto', via: [:get, :post, :put]

  post '/lecturas/update_lectura'
  match '/lecturas/filtrar', to: 'lecturas#filtrar', via: [:get, :post]
  match '/lecturas/:id/georeferenciar', to: 'lecturas#georeferenciar', via: 'post' 
  match '/lecturas/:id/visualizar', to: 'lecturas#visualizar', via: [:get, :post ]
  match '/lecturas/:id/mini', to: 'lecturas#mini', via: [:get, :post ]
  match '/lecturas/:id/fotos', to: 'lecturas#fotos', via: [:get, :post ]
  get  '/ruta/index'
  get  '/ruta/periodos'
  post '/ruta/asignar'
  post '/ruta/nuevo_periodo'
  match  '/track', to: 'users#track', via: [:post, :get]
  get '/main/mapa'
  resources :lecturas
  resources :lecturistas
  resources :incidencias
  resources :cities
  resources :users

  get "/qcode" => 'main#qcode'
  match "/upload", to: 'main#upload', via: [:get, :post]
  get "/download_mobile" => "main#download_mobile"
  get "/test_mail" => "main#test_mail"



  get "jobs/index"
  match "/delayed_job" => DelayedJobWeb, :anchor => false, via: [:get, :post]



end
