function validation()
{
 document.getElementById("error").innerHTML= "";
     if(document.getElementById("name").value.length < 5)
{
         document.getElementById("error").innerHTML = "La saisie du nom est obligatoire" ;
    return false
}

    if(document.getElementById("prénom").value.length<5)
{
        document.getElementById("error").innerHTML = "La saisie du prénom est obligatoire" ;
    return false

}

if(document.getElementById("Date").value.length<5)
{
        document.getElementById("error").innerHTML = "La saisie du date est obligatoire" ;
    return false

}

const dateNaissance = new Date(document.getElementById("Date").value);
    if (dateNaissance.getTime() > Date.now()) {
      document.getElementById("Error").innerHTML = "La date de naissance ne peut pas etre dans le futur 🤷‍♀️";
      return false;
    }

    if(document.getElementById("adresse").value.length < 5)
    {
         document.getElementById("adresse");  
        document.getElementById("error").innerHTML = "La saisie de votre adresse est obligatoire" ;
        return false
    }

    if(document.getElementById("mail").value.length < 5 || document.getElementById("mail").value.indexOf("@") == -1)
    {
        document.getElementById("mail");
        document.getElementById("error").innerHTML = document.getElementById("error").innerHTML + "Il faut bien saisir votre adresse mail contenant @";
   return false;
    }


    if(document.getElementById("error").innerHTML == ""){
        document.getElementById("resultat").innerHTML= "Formulaire validé Bienvenue </d>" + document.getElementById("name").value;
        return true;
    }

}


