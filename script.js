var akanNaming = function() {

      var date = parseInt(document.getElementById("data").elements.namedItem("date").value);
      var month = parseInt(document.getElementById("data").elements.namedItem("month").value);
      var year = parseInt(document.getElementById("data").elements.namedItem("year").value);
      var gender = document.getElementById("data").elements.namedItem("gender").value;

      var dateOfBirth = new Date(year + "#" + month + "#" + date);
      var time = dateOfBirth.getDay();

      var maleNames = ["Kwasi","Kwadwo", "Kwabena","Kwaku","Yaw","Kofi","Kwame"];
      var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
      var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

      if (month < 1 || month > 12) {
        return (document.getElementById("error").innerHTML =
          "Input correct data!");
      } else if (date < 1 || date >= 32) {
        return (document.getElementById("error").innerHTML =
          "Input correct data!");
     
      }
      switch (gender){

      case "male":
    
      if (time === 0 && gender === "male") {
        return (document.getElementById("alert").innerHTML =
          "Akan name is " + maleNames[time] + (" born on " + days[time]));
      } 
      else if (time === 1 && gender === "male") {
        return (document.getElementById("alert").innerHTML =
          "Akan name is " + maleNames[time] + (" born on " + days[time]));
      } 
      else if (time === 2 && gender === "male") {
        return (document.getElementById("alert").innerHTML =
        "Akan name is " + maleNames[time] + (" born on " + days[time]));
      } 
      else if (time === 3 && gender === "male") {
        return (document.getElementById("alert").innerHTML =
        "Akan name is " + maleNames[time] + (" born on " + days[time]));
      } 
      else if (time === 4 && gender === "male") {
        return (document.getElementById("alert").innerHTML =
        "Akan name is " + maleNames[time] + (" born on a" + days[time]));
      } 
      else if (time === 5 && gender === "male") {
        return (document.getElementById("alert").innerHTML =
        "Akan name is " + maleNames[time] + (" born on " + days[time]));
      } 
      else if (time === 6 && gender === "male") {
        return (document.getElementById("alert").innerHTML =
        "Akan name is " + maleNames[time] + (" born on " + days[time]));
      }
      break;

      case "female":
    
      if (time === 0 && gender === "female") {
        return (document.getElementById("alert").innerHTML =
        "Akan name is " + femaleNames[time] + (" born on " + days[time]));
      } 
      else if (time === 1 && gender === "female") {
        return (document.getElementById("alert").innerHTML =
        "Akan name is " + femaleNames[time] + (" born on " + days[time]));
      } 
      else if (time === 2 && gender === "female") {
        return (document.getElementById("alert").innerHTML =
        "Akan name is " + femaleNames[time] + (" born on " + days[time]));
      } 
      else if (time === 3 && gender === "female") {
        return (document.getElementById("alert").innerHTML =
        "Akan name is " + femaleNames[time] + (" born on " + days[time]));
      } 
      else if (time === 4 && gender === "female") {
        return (document.getElementById("alert").innerHTML =
        "Akan name is " + femaleNames[time] + (" born on " + days[time]));
      } 
      else if (time === 5 && gender === "female") {
        return (document.getElementById("alert").innerHTML =
        "Akan name is " + femaleNames[time] + (" born on " + days[time]));
      } 
      else if (time === 6 && gender === "female") {
        return (document.getElementById("alert").innerHTML =
        "Akan name is " + femaleNames[time] + (" born on " + days[time]));
      }
      break;
}
}
