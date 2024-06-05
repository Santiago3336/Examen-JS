url = "https://jsonplaceholder.typicode.com/users"

fetch(url)
.then(response => response.json())
.then(data => 
    data.forEach(user => {
        document.getElementById('data-list').innerHTML= `
        <div>
        <h2>Id: ${user.id} Name: ${user.name}</h2>
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>Address: <p>
        <p>Street: ${user.address.street}</p>
        <p>Suite: ${user.address.suite}</p>
        <p>City: ${user.address.city}</p>
        <p>Zipcode: ${user.address.zipcode}</p>
        <p>Geo:<p>
        <p>Lat: ${user.address.geo.lat}</p>
        <p>Lng: ${user.address.geo.lng}</p>
        <p>Phone: ${user.phone}</p>
        <p>Website: ${user.website}</p>
        <p>Company: </p>
        <p>Company Name: ${user.company.name}</p>
        <p>Catch Phrase: ${user.company.catchPhrase}</p>
        <p>BS: ${user.company.bs}</p>
        <div>
        ` + document.getElementById('data-list').innerHTML;
        })
    )
.catch(error => console.error('Error:', error));

function volver(){
    window.location.href = "../Ejercicio1/index.html"
}