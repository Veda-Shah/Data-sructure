nameofthestudentarray = [];
function submit() {
    var name_1 = document.getElementById("nameofthestudent1").value;
    var name_2 = document.getElementById("nameofthestudent2").value;
    var name_3 = document.getElementById("nameofthestudent3").value;
    var name_4 = document.getElementById("nameofthestudent4").value;
    nameofthestudentarray.push(name_1);
    nameofthestudentarray.push(name_2);
    nameofthestudentarray.push(name_3);
    nameofthestudentarray.push(name_4);

    console.log(nameofthestudentarray);
    document.getElementById("displayname").innerHTML = nameofthestudentarray;
    document.getElementById("submitbutton").style.display = "none";
    document.getElementById("sortbutton").style.display = "inline-block";
}
function sorting() {
    nameofthestudentarray.sort();
    console.log(nameofthestudentarray);
    document.getElementById("displayname").innerHTML = nameofthestudentarray;
}