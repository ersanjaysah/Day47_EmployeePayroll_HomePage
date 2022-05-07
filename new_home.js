window. addEventListener('DOMContentLoaded', (event) => {
  //createInnerHtml(); 
  myfunc();   
});
  
let myfunc=()=>{
  // Template literal ES6 feature
  let last=`
  <tr>
      <th></th>
      <th>Name</th>
      <th>Gender</th>
      <th>Department</th>
      <th>Salary</th>
      <th>Start Date</th>
      <th>Actions</th>
  </tr>
  <tr>
      <td class="profile"><img class="profile" alt=""
              src="image\img7.png">
      </td>
      <td>sanjay sah</td>
      <td>Male</td>
      <td><div class="dept-label">HR</div>
      <div class="dept-label">Finance</div></td>
      <td>4000000</td>
      <td>20 February 2022</td>
      <td>
      <img name="1" onclick="remove(this)" alt="delete"
          src="image\delete.png" width="15%">
      <img name="1"  alt="edit" onclick="update(this)"
          src="image\edit.png" width="15%">
      </td>
    </tr>
  `;
  document.querySelector('#table-display').innerHTML=last;
}