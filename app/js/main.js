const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', start);
item.addEventListener('dragend', end);

for (const item of placeholders){
  item.addEventListener('dragover', dragover);
  item.addEventListener('dragenter', dragenter);
  item.addEventListener('dragleave', dragleave);
  item.addEventListener('drop', drop);
}

function start(run) {
  run.target.classList.add('hold');
  setTimeout(() => run.target.classList.add('hide'), 0)
}
function end(stop) {
  stop.target.className = 'item';
}


function dragover (event){
  event.preventDefault()
}
function dragenter (event){
  event.target.classList.add('hovered');
}
function dragleave (event){
  event.target.classList.remove('hovered');
}
function drop (event){
  event.target.classList.remove('hovered');
  event.target.append(item)
}