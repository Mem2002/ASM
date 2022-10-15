function fetchAPI() {
   let url = "localhost:3000/api"
   fetch(url)
      .then(response => response.json())
      .then(data => renderTable(data))
}

function renderTable(data) {
   var table = `<table class="table table-bordered">
      <tr>
         <th colspan="5" class="h2 text-primary">Student List</th>
      </tr>
      <tr class="h6 text-success">
         <th>Student name</th>
         <th>Student email</th>
         <th>Student gender</th>
         <th>Student grade</th>
         <th>Student image</th>
      </tr>`;
   data.forEach((row) => {
      table += `<tr>
                    <td>${row.name}</td>
                    <td>${row.email} </td>
                    <td>${row.gender}  </td>
                    <td>${row.grade}  </td>
                    <td>
                      <img src="${row.image}" width="100" height="100">
                    </td>
                </tr>`;
   });

   table += `</table>`;
   document.querySelector(".container").innerHTML = table;
}
