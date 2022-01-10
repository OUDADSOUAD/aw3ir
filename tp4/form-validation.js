window.onload = function () {   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
  // voir plus : https://www.w3schools.com/js/js_htmldom.asp
  console.log("DOM ready!");
  // Y mettre le code Javascript pour valider tous les champs du formulaire



 
  var myModal = new bootstrap.Modal(document.getElementById('myModal'));
  

  document.querySelector("form").addEventListener("submit", function (event) {
      event.preventDefault();
      console.log("form submitted!");
      const date = document.querySelector("#date").value;
     

       

      if (document.getElementById("firstname").value.length < 5) {
          document.querySelector(".modal-title").textContent = "ERROR"

          document.querySelector(".modal-body").innerHTML = "First name need to be more than 5 char !";
          myModal.show();

      }


      else if (document.getElementById("lastname").value.length < 5) {

          document.querySelector(".modal-title").textContent = "ERROR"

          document.querySelector(".modal-body").innerHTML = "Last name need to be more than 5 char !";
          myModal.show();


      }
      else if (document.getElementById("address").value.length < 5) {

        document.querySelector(".modal-title").textContent = "ERROR"

        document.querySelector(".modal-body").innerHTML = "address  need to be more than 5 char !";
        myModal.show();


    }


    else if (document.getElementById("email").value.length < 5) {

      document.querySelector(".modal-title").textContent = "ERROR"

      document.querySelector(".modal-body").innerHTML = "Email  need to be more than 5 char (ex:hey@yahoo.fr) !";
      myModal.show();


  }
 
  

      else if (validateDate(date) == false) {
          document.querySelector(".modal-title").textContent = "ERROR"
          document.querySelector(".modal-body").innerHTML = "Please ENTER your day of birth !";
          myModal.show();

      }

    
      else {

          console.log('OK');
          document.querySelector(".modal-title").textContent = " Ready for Travel " + document.getElementById("lastname").value;
          document.querySelector(".modal-body").innerHTML = " You were born :" + document.getElementById("date").value + " and you are living in  ";
          document.querySelector(".modal-body2").innerHTML = '<a href="http://maps.google.com/maps?q=Paris"><img src="https://maps.googleapis.com/maps/api/staticmap?markers=Paris&zoom=9&size=200x100&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/> </a>';
          contactStore.add(document.getElementById("firstname").value, document.getElementById("lastname").value, document.getElementById("date").value, document.getElementById("address").value, document.getElementById("email").value);
      localStorage.setItem('contactList', JSON.stringify(contactStore.getList()));
          document.querySelector('#map').addEventListener("click", function (event) {
              getLocation();
          });
          AfficherList();
          myModal.show();
          
      }
  }
  )
  
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateDate() {
  const inputDate = document.getElementById('date').value;
  let dateNaissance = new Date(inputDate);
  let dateNaissanceTimestamp = dateNaissance.getTime();
  let nowTimestamp = Date.now();
  return (dateNaissanceTimestamp < nowTimestamp)
}


function calcNbChar(id) {
      document.querySelector(`#firstname + span`).textContent = document.querySelector(`#firstname`).value.length;
      document.querySelector(`#lastname + span`).textContent = document.querySelector(`#lastname`).value.length;
      document.querySelector(`#date + span`).textContent = document.querySelector(`#date`).value.length;
      document.querySelector(`#address + span`).textContent = document.querySelector(`#address`).value.length;
      document.querySelector(`#email + span`).textContent = document.querySelector(`#email`).value.length;
}

function AfficherList() {
  
      var contactList = JSON.parse(localStorage.getItem("contactList"));
      for (var index in contactList) {
        document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +
          
          '<tr>'+
          '<td>'+ contactList[index].firstname +'</td>'+
          '<td>'+ contactList[index].lastname +'</td>'+
          '<td>'+ contactList[index].date +'</td>'+
          '<td>'+ contactList[index].address +'</td>'+
          '<td><a href=mailto:>'+ contactList[index].email +'</a></td>'+
        '</tr>'
      }
};