// Get all list-group-item elements
var listItems = document.querySelectorAll(".list-group-item");

// Get the current page URL
var currentPageURL = window.location.href;

// Attach click event listener to each list-group-item
listItems.forEach(function(item) {
  // Check if the item's href matches the current page URL
  if (item.href === currentPageURL) {
    // Add "active" class to the matching list-group-item
    item.classList.add("active");
  }

  item.addEventListener("click", function() {
    // Remove "active" class from all list-group-items
    listItems.forEach(function(item) {
      item.classList.remove("active");
    });

    // Add "active" class to the clicked list-group-item
    this.classList.add("active");
  });
});

function handleClick(element) {
  var value = element.value; // Get the value of the clicked element
  // Create an AJAX request
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost/projectfiles/backend/process.php', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  // Define the data to send
  var data = 'value=' + encodeURIComponent(value);
  // Set up the callback function when the AJAX request is completed
  xhr.onload = function () {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      if (response.status === 'success') {
        window.location = response.destination;
      };
    };
  }
  // Send the AJAX request
  xhr.send(data);
}

$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
      $('#id_arrow').toggleClass('bi-arrow-right bi-arrow-left');
  });

  $("#searchButton").click(function () {
    filterTable();
    $("#myModal").modal("show");
  });

  // Filter the table based on user input
  function filterTable() {
    var input = $("#myInput").val().toLowerCase();
    $("#myTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(input) > -1);
    });
  }
});
