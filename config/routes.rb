FirstApp::Application.routes.draw do

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



  resources :incidencias

  root 'main#home'
  get  '/main/columns'
  get  '/main/import'
  get  '/main/foto'
  post '/main/do_import'
  post '/main/do_clear_all'
  get  '/lecturas/pendientes'
  post  '/update_lectura', to: 'lecturas#update_lectura'
  post  '/update_foto', to: 'lecturas#update_foto'
  get  'main/test_update_lectura'

  post '/lecturas/update_lectura'
  match '/lecturas/filtrar', to: 'lecturas#filtrar', via: [:get, :post]
  match '/lecturas/:id/georeferenciar', to: 'lecturas#georeferenciar', via: 'post' 
  match '/lecturas/:id/visualizar', to: 'lecturas#visualizar', via: 'get' 
  get  'ruta/index'
  get  'ruta/periodos'
  post 'ruta/asignar'
  resources :lecturas
  resources :lecturistas

  get "qcode" => 'main#qcode'
  match "upload", to: 'main#upload', via: [:get, :post]
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


end
