module ApplicationHelper
	require 'json'

	# Pull in color library
	file = File.read('colors.json')
	$color_hash = JSON.parse(file)


	def active_class(link_path)
	  current_page?(link_path) ? "active" : ""
	end

	def color(color_name, color_level, mode="Hex")
		color = $color_hash[color_name][color_level][mode]

		return color
	end
end
