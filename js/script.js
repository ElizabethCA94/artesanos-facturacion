var users = [{
        name: 'Lucy',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar1.png'
    },
    {
        name: 'Bety',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar2.png'
    },
    {
        name: 'Ronald',
        gender: 'M',
        hobby: 'music',
        avatar: 'avatar3.png'
    },
    {
        name: 'Cristhoper',
        gender: 'M',
        hobby: 'sports',
        avatar: 'avatar4.png'
    },
];

window.addEventListener('load', function(){
    function search() {
        {
            //results.innerHTML = 'hola<br/>mundo <div>como estas</div>'; 
            //get hobby
            var hobbyField = document.getElementById('hobby');
            var hobby = hobbyField.value;
            console.log(hobby);
            //get gender
            var genderField = document.getElementById('gender');
            var gender = genderField.options[genderField.selectedIndex].value;
            console.log(gender);
                
            var resultsHTML = '';
            var numUsers = users.length;
    
            for(var i=0; i<numUsers; i++){

                if(gender == 'A' || gender == users[i].gender){
                    if(hobby == '' || hobby == users[i].hobby){
                        resultsHTML += '<div class="person-row">\
                                    <img src="images/'+users[i].avatar+'">\
                                    <div class="person-info">\
                                    <div> ' + users[i].name + '</div>\
                                    <div> ' + users[i].hobby + '</div></div>\
                                    <button>Add as friend</button></div>'; 
                    }
                    
                }                   
            }
            results.innerHTML = resultsHTML;
        }   
    }
    var results = document.getElementById('results');
    var searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', search);
    search();
});
