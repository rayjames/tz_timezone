
jQuery( document ).ready(function() {
  
  // hides the following optgroups from the select timezone form
  jQuery("[label='Africa']").hide();
  jQuery("[label='Antarctica']").hide();
  jQuery("[label='Arctic']").hide();
  jQuery("[label='Asia']").hide();
  jQuery("[label='Atlantic']").hide();
  jQuery("[label='Australia']").hide();
  jQuery("[label='Europe']").hide();
  jQuery("[label='Indian']").hide();
  jQuery("[label='Pacific']").hide();
  
  // if you wanted to change the text for a given timezone/city then you can uncomment and use the following code.
  
  // changes the text of the Los Angeles option to, for example: Elko, NV which is in the same timezone but more useful for my client who has offices in Elko and not Los Angeles.
  //jQuery('.form-select option[value="America/Los_Angeles"]').text('Elko');
  
  // If you do change the text of an option element, use the below code to add it back into the list in the proper position.  Just find the item that should be after this one alphabetically and update this code accordingly.  In this case, changing the text of America/Los_Angeles to Elko would put it in the list right above America/Eirunepe
  //jQuery('.form-select  option[value="America/Los_Angeles"]').insertBefore('.form-select  option[value="America/Eirunepe"]');
  
});