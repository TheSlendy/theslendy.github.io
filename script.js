let physics = document.getElementById('physics');

let bg = document.createElement('div');
bg.style.height = '100%';
bg.style.width = '100%';
bg.style.position = 'absolute';
bg.style.top = '0px';
bg.style.left = '0px';
bg.style.backgroundColor = 'rgba(51, 51, 51, 0.4)';

let full_description = document.createElement('div');
full_description.style.backgroundColor = 'rgb(19, 12, 27)';
full_description.style.textAlign = 'center';
full_description.style.position = 'absolute';
full_description.style.width = '64%';
full_description.style.height = '30%';
full_description.style.top = '15%';
full_description.style.left = '12%';


physics.addEventListener('click',()=>{
	document.body.append(bg)
	full_description.innerHTML = 'п 66,67,68, Посмотрете презентации к урокам. Для этого пройдите по <a href="https://yadi.sk/d/t_YW65-S0ko3WQ">ссылке</a>. Внимательно прочитайте в этой же папке документ "задания к 1и 2 уроку" и выполните все согласно инструкциям в этом документе';
	document.body.append(full_description);
})


bg.addEventListener('click', ()=>{
	document.body.removeChild(bg);
	document.body.removeChild(full_description);
})


