module ApplicationHelper


  # Returns the full title on a per-page basis.
  def full_title(page_title)
    base_title = "Ruby on Rails Tutorial Sample App"
    if page_title.empty?
      base_title
    else
      "#{base_title} | #{page_title}"
    end
  end
  

  def chosen_tag (name, options, html_options)
  	select_tag name, options, {class: 'chosen-select'}.merge(html_options)
  end


  def chosen_multiple_tag (name, options, html_options)
  	select_tag name, options, {class: 'chosen-select', style: 'height: 80px', "multiple" => :multiple}.merge(html_options)
  end

end
