
var baseurl = "http://localhost:5000/users";

function loadUsers(){
    var xmlHttp = new XMLHttpRequest;
    xmlHttp.open("GET", `${baseurl}/`, true);
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState === 4 && xmlHttp.status === 200){
            var users = JSON.parse(xmlHttp.responseText);
            var tbltop = `<table>
                            <tr>
                                <th>Name</th>
                                <th>LastName</th>
                                <th>Age</th>
                                <th>Id</th>
                            </tr>`;
            var main = "";
            for(i = 0; i < users.length; i++){
                main += "<tr><td>" + users[i].firstName + "</td><td>" + users[i].lastName + "</td><td>" + users[i].age + "</td><td>" + users[i].id + "</td></tr>";
            }
                            
            var tblbottom = `</table>`
            var tbl = tbltop + main + tblbottom;
            document.getElementById("person-info").innerHTML = tbl;
        }
    }
    xmlHttp.send();
}

window.onload = function () {
    loadUsers();
}

