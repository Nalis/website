###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
# configure :development do
#   activate :livereload
# end

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :source, 'app'

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

sprockets.append_path File.join root, 'app/bower_components'

activate :minify_html

activate :minify_html do |html|
  html.remove_multi_spaces        = true   # Remove multiple spaces
  html.remove_comments            = true   # Remove comments
  html.remove_intertag_spaces     = false  # Remove inter-tag spaces
  html.remove_quotes              = false   # Remove quotes
  html.simple_doctype             = false  # Use simple doctype
  html.remove_script_attributes   = false   # Remove script attributes
  html.remove_style_attributes    = false   # Remove style attributes
  html.remove_link_attributes     = false   # Remove link attributes
  html.remove_form_attributes     = false  # Remove form attributes
  html.remove_input_attributes    = false   # Remove input attributes
  html.remove_javascript_protocol = false   # Remove JS protocol
  html.remove_http_protocol       = false   # Remove HTTP protocol
  html.remove_https_protocol      = false  # Remove HTTPS protocol
  html.preserve_line_breaks       = false  # Preserve line breaks
  html.simple_boolean_attributes  = false   # Use simple boolean attributes
end


# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  activate :asset_hash

  # Use relative URLs
  activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end

case ENV['TARGET'].to_s.downcase
  when 'production'
    activate :deploy do |deploy|
      deploy.method = :sftp
      deploy.build_before = true # default: false
      # Optional Settings
      deploy.user  = 'perfectitcv' # no default
      # deploy.port  = 5309 # ssh port, default: 22
      deploy.clean = true # remove orphaned files on remote host, default: false
      # deploy.flags = '-rltgoDvzO --no-p --del' # add custom flags, default: -avz

      deploy.host   = 'nalisbg.com'
      deploy.path   = '/www/perfectitcv.com/addon_domains/nalisbg.com/www/build'
    end
  when 'staging'
    activate :deploy do |deploy|
      deploy.method = :sftp
      deploy.build_before = true # default: false
      # Optional Settings
      deploy.user  = 'sites-dev' # no default
      deploy.port  = 4040 # ssh port, default: 22
      deploy.clean = true # remove orphaned files on remote host, default: false
      # deploy.flags = '-rltgoDvzO --no-p --del' # add custom flags, default: -avz

      deploy.host     = 'dev.nalisbg.com'
      deploy.path     = '/web/sites-dev/nalisbg.com/build'
    end
end