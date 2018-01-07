const dog_api = 'https://dog.ceo/api/'

let ajaxSearch = ()=>{
    
     let api_url = 'https://dog.ceo/api/breeds/list/all';
 
     $.ajax({
         url: api_url,
         dataType: 'json',
         success: (data) => {
             console.log(data)

         var select = document.getElementById('selectBreed');

         Object.keys(data.message).forEach(function(key) {

            var option = document.createElement("option");
            option.value= key;
            option.innerHTML = key; // whatever property it has
         
            // then append it to the select element
            select.appendChild(option); 
          });
         },
         error: (error)=>{
             console.log("this is an error")
         }
     });
 }

 viewDog.addEventListener('click', function(){
let opt = document.getElementById('selectBreed');
let breedName = opt.options[opt.selectedIndex].text;
//console.log(breedName);
let api_url = 'https://dog.ceo/api/breed/' + breedName + '/images/random';
$.ajax({
    url: api_url,
    dataType: 'json',
    success: (data) => {
        //console.log(data);
        document.getElementById("breedImage").setAttribute("src", data.message); 
     },
    error: (error)=>{
        console.log("this is an error")
    }
});
 });



