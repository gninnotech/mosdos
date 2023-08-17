$(document).ready( function () {
    $(".dataExport").click(function() {
var exportType = $(this).data('type');
var table = $('#example');

var exportConfig = {
    type: exportType,
    escape: 'false',
    ignoreColumn: [],
    footers: true // Include footers in exported data
};

// Clone the table footer and remove the "hidden" class
var footer = table.find('tfoot').clone().removeClass('hidden');

// Append the cloned footer to the table body temporarily
table.find('tbody').append(footer);

// Export the table with the modified configuration
table.tableExport(exportConfig);

// Remove the cloned footer from the table body
footer.remove();
});

var table = $('#example').DataTable({
initComplete: function () {
  count = 0;
  this.api().columns().every(function () {
      var title = this.header();
      title = $(title).html().replace(/[\W]/g, '-');
      var column = this;
      var footerValue = $(column.footer()).text().trim();

      var select = $('<select id="' + title + '" class="select2" ></select>')
          .appendTo($(column.header()).empty())
          .on('change', function () {
              var data = $.map($(this).select2('data'), function (value, key) {
                  return value.text ? '^' + $.fn.dataTable.util.escapeRegex(value.text) + '$' : null;
              });
              if (data.length === 0) {
                  data = [""];
              }
              var val = data.join('|');
              column
                  .search(val ? val : '', true, false)
                  .draw();
          });

      column.data().unique().sort().each(function (d, j) {
          select.append('<option value="' + d + '">' + d + '</option>');
      });

      $('#' + title).select2({
          multiple: true,
          closeOnSelect: false,
          placeholder: footerValue
      });

      $('.select2').val(null).trigger('change');
  });
}
});

table.columns().eq(0).each(function (colIdx) {
$('input', table.column(colIdx).header()).empty().on('click', function (e) {
  e.stopPropagation();
});
});

} );
