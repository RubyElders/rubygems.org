if($("#advanced-search").length){
  var $main        = $('#home_query');
  var $name        = $('input#name');
  var $summary     = $('input#summary');
  var $description = $('input#description');
  var $downloads   = $('input#downloads');
  var $updated     = $('input#updated');
  var $yanked      = $('input#yanked');

  $name.add($summary)
    .add($description)
    .add($downloads)
    .add($updated)
    .add($yanked)
    .on('input', function(e) {
      var name        = $name.val().length > 0 ? 'name: ' + $name.val() : '';
      var summary     = $summary.val().length > 0 ? 'summary: ' + $summary.val() : '';
      var description = $description.val().length > 0 ? 'description: ' + $description.val() : '';
      var downloads   = $downloads.val().length > 0 ? 'downloads: ' + $downloads.val() : '';
      var updated     = $updated.val().length > 0 ? 'updated: ' + $updated.val() : '';
      var yanked      = $yanked.is(":checked") ? 'yanked: true' : '';

      $main.val($.trim(name + ' ' + summary + ' ' + description + ' ' + downloads + ' ' + updated + ' ' + yanked));
  });
}
