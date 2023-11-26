let myForm = document.querySelector("form");
let inpuName = document.querySelector("#name");
let doctId = document.querySelector("#doctor_id");
let specil = document.querySelector("#specialization");
let exp = document.querySelector("#experience");
let emailId = document.querySelector("#email");
let mobileNo = document.querySelector("#mobile");
let tbody = document.querySelector("tbody");
let allData = [];

myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let data = {};
  data.name = inpuName.value;
  data.doctorId = doctId.value;
  data.speciliation = specil.value;
  data.experience = exp.value;
  data.email = emailId.value;
  data.mobileno = mobileNo.value;
  data.filter = filter.value;
  if (data.experience > 5) {
    data.role = "Senior";
  } else if (data.experience > 2 && data.experience <= 5) {
    data.role = "Junior";
  } else if (data.experience >= 1) {
    data.role = "Trainee";
  }

  allData.push(data);
  tbody.innerHTML = null;

  //console.log(allData);
  function display(allData) {
    tbody.innerText = "";
    allData.map((ele) => {
      let row = document.createElement("tr");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      let td4 = document.createElement("td");
      let td5 = document.createElement("td");
      let td6 = document.createElement("td");
      let td7 = document.createElement("td");
      let td8 = document.createElement("td");
      let btn = document.createElement("button");
      btn.setAttribute("id", "del");
      btn.innerText = "DELETE";
      btn.addEventListener("click", function () {
        let deleted = allData.filter((element) => {
          return element != ele;
        });
        display(deleted);
      });

      td1.innerText = ele.name;
      td2.innerText = ele.doctorId;
      td3.innerText = ele.speciliation;
      td4.innerText = ele.experience;
      td5.innerText = ele.email;
      td6.innerText = ele.mobileno;
      td7.innerText = ele.role;
      td8.innerText = ele.filter;
      row.append(td1, td2, td3, td4, td5, td6, td7, btn);
      tbody.append(row);
    });
  }
  display(allData);

  let selecTag = document.querySelector("#filter");
  selecTag.addEventListener("change", (selecLe) => {
    let filtered = allData.filter((ele) => {
      return selecLe.target.value == ele.speciliation;
    });
    //console.log(filtered);
    display(filtered);
  });
});
