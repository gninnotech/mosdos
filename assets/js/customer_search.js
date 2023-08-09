document.querySelectorAll("#myTables2 tr").forEach(function(row) {
    row.style.display = "none";
  });
  
  document.querySelectorAll("#myTable tr").forEach(function(row) {
    row.style.display = "none";
  });

  
  document.querySelector("#myInput").addEventListener("input", function() {
    var value = this.value.toLowerCase();
  
    document.querySelectorAll("#myTables2 tr").forEach(function(row) {
      var rowData = row.textContent.toLowerCase();
      if (rowData.indexOf(value) > -1 || value === '') {
        row.style.display = "";
      } else {
        row.style.display = "";
      }
    });
  
    document.querySelectorAll("#myTable tr").forEach(function(row) {
      var rowData = row.textContent.toLowerCase();
      if (rowData.indexOf(value) > -1 || value === '') {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  
    var headersearch = document.getElementById("headersearch");
    var hrsearch = document.getElementById("hrsearch");
    var cs_search_container = document.getElementById("cs_search_container");

    if (value === '') {
      headersearch.classList.add("hidden");
      headersearch.classList.remove("show");
      hrsearch.classList.add("hidden");
      hrsearch.classList.remove("show");
      cs_search_container.classList.add("hidden");
      cs_search_container.classList.remove("show");
      
  
      document.querySelectorAll("#myTables2 tr").forEach(function(row) {
        row.style.display = "none";
      });
  
      document.querySelectorAll("#myTable tr").forEach(function(row) {
        row.style.display = "none";
      });
    } else {
      headersearch.classList.add("show");
      headersearch.classList.remove("hidden");
      hrsearch.classList.add("show");
      hrsearch.classList.remove("hidden");
      cs_search_container.classList.add("show");
      cs_search_container.classList.remove("hidden");
      
    }
  });
  