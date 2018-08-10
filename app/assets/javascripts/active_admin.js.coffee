#= require active_admin/base



d = new Date
month = d.getMonth()+1
year = d.getFullYear()
day = d.getDate()
date_select = $('#change_date_1i')


$(document).ready ->
  if $('.date_select')
    $('#change_date_1i').val year
    $('#change_date_2i').val month
    $('#change_date_3i').val day
  return

  
  