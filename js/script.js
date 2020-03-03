var users = [{
        name: 'Lucy',
        gender: 'F',
        hooby: 'pets',
        avatar: 'avatar1.png'
    },
    {
        name: 'Bety',
        gender: 'F',
        hooby: 'pets',
        avatar: 'avatar2.png'
    },
    {
        name: 'Ronald',
        gender: 'M',
        hooby: 'music',
        avatar: 'avatar3.png'
    },
    {
        name: 'Cristhoper',
        gender: 'M',
        hooby: 'sports',
        avatar: 'avatar4.png'
    },
];

window.addEventListener('load', function(){
    
    var results = document.getElementById('results');
    var searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', function(){
        results.innerHTML = 'hola<br/>mundo <div>como estas</div>'; 
        //get hobby
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;
        console.log(hobby);
        //get gender
        var genderField = document.getElementById('gender');
        var gender = genderField.options[genderField.selectedIndex].value;
        console.log(gender);
    });
});