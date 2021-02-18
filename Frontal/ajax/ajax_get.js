addEventListener('load', inicializarEventos, false);

function inicializarEventos() {

    document.getElementById('botonGetAll').addEventListener('click', getAll, false);
    document.getElementById('botonPostID').addEventListener('click', postID, false);
    document.getElementById('botonGetID').addEventListener('click', getID, false);
    document.getElementById('botonPutID').addEventListener('click', putID, false);
    document.getElementById('botonDeleteID').addEventListener('click', deleteID, false);
    document.getElementById('botonGetAllStock').addEventListener('click', getStock, false);
    document.getElementById('botonPostToken').addEventListener('click', postToken, false);
}

function getAll() {

    $.ajax({
        url: "https://localhost:44311/api/Products",
        method: 'GET',
        dataType: 'json',
        headers: {
            'Accept':'application/json',
            'Authorization': localStorage.getItem('token')
        },
        contentType: 'application/json',

        success: function (data) {
            document.getElementById("contenido").innerHTML = JSON.stringify(data, undefined, 2); 
        },
        error: function (error){
            console.log(error);
        }
    });
}

function getID() {
    $.ajax({
        url: "https://localhost:44311/api/Products/" + document.getElementById("inputGetID").value,
        method: 'GET',
        dataType: 'json',
        headers: {
            'Accept':'application/json',
            'Authorization': localStorage.getItem('token')            
        },
        contentType: 'application/json',

        success: function (data) {
            document.getElementById("contenido").innerHTML = JSON.stringify(data, undefined, 2); 
        },
        error: function (error){
            console.log(error);
        }
    });
}

function postID() {
    
    let name = document.getElementById("namePostID").value;
    let category = document.getElementById("categoryPostID").value;
    let color = document.getElementById("colorPostID").value;
    let unit = document.getElementById("unitPostID").value;
    let quantity = document.getElementById("quantityPostID").value;


    $.ajax({
        url: "https://localhost:44311/api/Products",
        method: 'POST',
        dataType: 'json',
        headers: {
            'Accept':'application/json',
            'Authorization': localStorage.getItem('token')            
        },
        contentType: 'application/json',
        data: JSON.stringify({
            'Name': name, 
            'Category': category,
            'Color': color,
            'UnitPrice': parseInt(unit),
            'AvailableQuantity': parseInt(quantity) }),

        success: function (data) {
            document.getElementById("contenido").innerHTML = JSON.stringify(data, undefined, 2); 
        },
        error: function (error){
            console.log(error);
        }
    });
}

function putID() {
    
    let id = document.getElementById("idPutID").value;
    let name = document.getElementById("namePutID").value;
    let category = document.getElementById("categoryPutID").value;
    let color = document.getElementById("colorPutID").value;
    let unit = document.getElementById("unitPutID").value;
    let quantity = document.getElementById("quantityPutID").value;


    $.ajax({
        url: "https://localhost:44311/api/Products/"+id,
        method: 'PUT',
        dataType: 'json',
        headers: {
            'Accept':'application/json',
            'Authorization': localStorage.getItem('token')            
        },
        contentType: 'application/json',
        data: JSON.stringify({
            'ProductId': parseInt(id),
            'Name': name, 
            'Category': category,
            'Color': color,
            'UnitPrice': parseInt(unit),
            'AvailableQuantity': parseInt(quantity) }),

        success: function (data)  {
            getID(id)
        },
        error: function (error){
            console.log(error);
        }
    });
}

function deleteID() {
    $.ajax({
        url: "https://localhost:44311/api/Products/" + document.getElementById("inputDeleteID").value,
        method: 'DELETE',
        dataType: 'json',
        headers: {
            'Accept':'application/json',
            'Authorization': localStorage.getItem('token')            
        },
        contentType: 'application/json',

        success: function (data) {
            document.getElementById("contenido").innerHTML = JSON.stringify(data, undefined, 2); 
        },
        error: function (error){
            console.log(error);
        }
    });
}

function getStock() {
    $.ajax({
        url: "https://localhost:44311/api/Products/stock",
        method: 'GET',
        dataType: 'json',
        headers: {
            'Accept':'application/json',
            'Authorization': localStorage.getItem('token')            
        },
        contentType: 'application/json',

        success: function (data) {
            document.getElementById("contenido").innerHTML = JSON.stringify(data, undefined, 2); 
        },
        error: function (error){
            console.log(error);
        }
    });
}

function postToken() {

    // campo email
    let user = document.getElementById("inputPostTokenEmail").value;
    // campo pass
    let pass = document.getElementById("inputPostTokenPassword").value;
    
    $.ajax({
        url: "https://localhost:44311/api/Token",
        method: 'POST',
        dataType: 'json',
        header: {
            'Accept':'application/json',
        },
        contentType: 'application/json',
        data: JSON.stringify({
            'Email': user, 
            'Password': pass }),
        
        success: function (data) {
            localStorage.setItem('token', data);
            login(); 
        },
        error: function (error){
            if(error.responseText != "Invalid credentials"){
                login(user); 
                localStorage.setItem('token', 'Bearer '+error.responseText);
            }
            console.log(error);
        }
    });
}

function login(email){
    document.getElementById("user").innerHTML = "<input type='text' style='width: 100% !important;'  id='textPostToken' disabled class='texto inputGreen' placeholder='USER: "+ email +"' aria-label='' aria-describedby='button-addon2'></input>";
}
