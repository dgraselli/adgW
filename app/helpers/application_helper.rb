module ApplicationHelper
  


  # Returns the full title on a per-page basis.
  def full_title(page_title)
    base_title = "adg"
    if page_title.empty?
      base_title
    else
      "#{base_title} | #{page_title}"
    end
  end

  def flash_class(level)
    case level 
        when :notice then "alert alert-info"
        when :success then "alert alert-success"
        when :error then "alert alert-danger"
        when :alert then "alert alert-warning"
    end
  end

  def chosen_tag (name, options, html_options)
  	select_tag name, options, {class: 'chosen-select'}.merge(html_options)
  end


  def chosen_multiple_tag (name, options, html_options)
  	select_tag name, options, {class: 'chosen-select', style: 'height: 80px', "multiple" => :multiple}.merge(html_options)
  end



  def sortable(column, title = nil)
    title ||= column.titleize
    css_class = column == sort_column ? "current #{sort_direction}" : nil
    direction = column == sort_column && sort_direction == "asc" ? "desc" : "asc"
    link_to title, params.merge(:sort => column, :direction => direction, :page => nil), {:class => css_class}
  end



end
