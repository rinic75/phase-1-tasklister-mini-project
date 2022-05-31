document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e)=> {
    e.preventDefault();
    buildToDo(e.target['new-task-description'].value);
  });
});

function buildToDo(toDo) {
  const p = document.createElement('p');
  const bttn = document.createElement('button');
  p.textContent = `•${toDo} `;
  bttn.textContent = 'Delete'
  bttn.addEventListener('click', ()=> p.remove());
  p.append(bttn)
  document.querySelector('#tasks').appendChild(p);
}

