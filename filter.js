function searchTableColumns() {
    // Declare variables 
    var input, filter, table, tr, i, j, column_length, count_td;
    column_length = document.getElementById('myTable').rows[0].cells.length;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 2; i < tr.length; i++) { // except first(heading) row
      count_td = 0;
      for(j = 1; j < column_length-1; j++){ // except first column
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            if ( td.innerHTML.toUpperCase().indexOf(filter) > -1)  {            
              count_td++;
            }
          }
          
      }
      if(count_td > 0){
          tr[i].style.display = "";
      } else {
          tr[i].style.display = "none";
      }
    }
    
  }