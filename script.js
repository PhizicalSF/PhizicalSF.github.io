document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var birthday = new Date(document.getElementById('birthday').value);
    var km_proehali = document.getElementById('km_proehali').value;
    var toplivo = document.getElementById('toplivo').value;
    var rashod = document.getElementById('rashod').value;
    var marhrut = document.getElementById('marhrut').value;
    var speed = document.getElementById('speed').value;


    var category = document.getElementById('category').value;
    var koef=1
    if (category=="Asfalt"){
        koef=0.7
    }
    if (category=="Grunt"){
        koef=0.5
    }
    if (category=="Snegr"){
        koef=0.1
    }
    var S_tormoz=speed**2/(2*9.81*koef)

    var interests = Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(i => i.value);
    var photo = document.getElementById('photo').files[0];

    var today = new Date();
    var age = today.getFullYear() - birthday.getFullYear();
    var m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }
    var rashod_raschet= km_proehali/toplivo*100
    var cost_topliva=50
    var rashod_one_km=rashod/100
    var marhrut_rashod=marhrut*rashod_one_km
    var money_marhrut=marhrut_rashod*cost_topliva
 
    
    output += 'ФИО: ' + name + '<br>' +
        'Возраст: ' + age + '<br>' +
        'Категория: ' + category + '<br>' +
        'Интересы: ' + interests.join(', ') + '<br>' +
        'Фото: <img src="' + URL.createObjectURL(photo) + '" alt="Photo" /><br>'
        
    output += 'Ваш вычисленный расход топлива на 100 км.' + rashod_raschet + '<br>'+
    'Вам на маршрут понадобится вот столько топлива = '+marhrut_rashod +' . Это будет стоить '+money_marhrut+' . Один киллометр пробега будет стоить = '+rashod_one_km +' <br>'+
    'При ывбранных вами значения дороги и скорости, ваш тормозной путь будет = ' + S_tormoz + '<br>';


    document.getElementById('output').innerHTML = output;
});
