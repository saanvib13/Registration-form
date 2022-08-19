window.addEventListener("load", () => {
  const form = document.querySelector(".form-add");
  const name = document.querySelector(".name");
  const email = document.querySelector(".mail");
  const web = document.querySelector(".web");
  const image = document.querySelector(".img");
  let skills = [];
  var input_image = "";

  

  const t_body = document.querySelector("tbody");

  const button = document.querySelector(".enroll");
  image.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      input_image = reader.result;
      // console.log(input_image)
      
      // document.querySelector(".imgtd").style.backgroundImage='url(${input_image})'
    });
    reader.readAsDataURL(this.files[0]);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(input_image);
    var userImage = document.createElement("img");
    const input_name = name.value;
    const input_email = email.value;
    const input_web = web.value;
    userImage.src = input_image;
    const gender = document.form.gender;

    const skl = document.querySelectorAll("input[type='checkbox']");
    for (var el in skl) {
      if (skl[el].checked) {
        skills.push(skl[el].value);
      }
    }

    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.classList.add("row");

    const p_name = document.createElement("p");
    const p_mail = document.createElement("p");
    const p_web = document.createElement("a");
    const p_gender = document.createElement("p");
    const p_skills = document.createElement("p");

    p_name.innerHTML = input_name;
    p_mail.innerHTML = input_email;
    p_web.innerHTML = input_web;
    p_web.href = input_web;
    p_gender.innerHTML = gender.value;
    p_skills.innerHTML = skills;

    p_web.classList.add("web");

    td1.appendChild(p_name);
    td1.appendChild(p_mail);
    td1.appendChild(p_web);
    td1.appendChild(p_gender);
    td1.appendChild(p_skills);

    const td2 = document.createElement("td");

    const td2_div = document.createElement("div");

    // console.log("src is " + userImage.src);
    userImage.classList.add("imgtd");

    td2_div.appendChild(userImage);

    td2.appendChild(td2_div);
    tr.appendChild(td1);
    tr.appendChild(td2);

    t_body.appendChild(tr);

    name.value = "";
    email.value = "";
    web.value = "";
    image.value = "";
    for (var i in gender) {
      gender[i].checked = false;
    }
    for (var i in skl) {
      skl[i].checked = false;
    }

    skills = [];
  });
});
// [1].checked;
