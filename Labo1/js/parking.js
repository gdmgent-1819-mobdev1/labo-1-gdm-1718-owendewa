// Parking oef 4
const parkingOverview = document.getElementById('parking-overview');

// functie expressie om JSON-request via url uit te voeren
const getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

// get json data
getJSON('https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json', function(error, data) {
    
    // show error
    if(error) {
        
        // do something here

        return false;
    }

    // loop through all parking places
    for(let i = 0; i < data.length; i++) {

        // current parking object
        let parking = data[i];
        let openingsdagen = [];
        for(let i = 0; i < parking.openingTimes[0].days.length; i++){
            let day = parking.openingTimes[0].days[i];
            openingsdagen.push(day);
        }
       
 
        // do magic here
        let div = document.createElement('div');
        div.className ="parking";
        div.setAttribute("id", "park");
        
        let text = document.createElement('h2');
        text.innerHTML = data[i].name

        let uList = document.createElement('ul');
        let lItem = document.createElement('li');

        lItem.innerHTML = "Totale capaciteit: " + parking.parkingStatus.totalCapacity;

        let lItem2 = document.createElement('li');
        lItem2.innerHTML= "Vrije parking: " + parking.parkingStatus.availableCapacity

        let totalSpaces = parking.parkingStatus.totalCapacity;
        let freeSpaces  = parking.parkingStatus.availableCapacity;

        if( (freeSpaces/totalSpaces)>0.5  ){
            lItem2.style.color ="green";
        }else if((freeSpaces/totalSpaces)<=0.5 && (freeSpaces/totalSpaces)>=0.2 ){
            lItem2.style.color ="orange";

        }else if((freeSpaces/totalSpaces)<0.2){
            lItem2.style.color ="red";
        }

        
        div.appendChild(text);
        div.appendChild(lItem);
        div.appendChild(lItem2);

        

        document.getElementById('parking-overview').appendChild(div);




          
        
    }
});


