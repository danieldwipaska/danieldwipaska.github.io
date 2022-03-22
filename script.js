const submit = document.querySelector('.submit-button');
const clearList = document.querySelector('.clear-button');

// Record What User Has Done from To-Do List
let strDoneList = '';
setInterval(function () {
  let doneListRecord = document.querySelectorAll('.done-list');
  let arrDoneList = [];
  for (let i = 0; i < doneListRecord.length; i++) {
    let isiDoneList = doneListRecord[i].innerHTML;
    arrDoneList.push('<li>' + isiDoneList + '</li>');
  }
  strDoneList = arrDoneList.join('');
}, 0);

// Insert What User Has Done into class 'modal-body' using event 'whatyouhavedone'
const modalButton = document.querySelector('.modal-button-wyhd');
modalButton.addEventListener('click', function () {
  const modalBody = document.querySelector('.modal-body');
  modalBody.innerHTML = '<ol>' + strDoneList + '</ol>';
  const ambilButton = modalBody.querySelectorAll('button');
  ambilButton.forEach(function (e) {
    e.style.display = 'none';
  });
});

// Event 'Submit'
submit.addEventListener('click', function () {
  // Recording User Input
  const inputText = document.querySelector('.input-area');

  if (inputText.value === '') {
    alert('Please fill the text area!!!');
  } else {
    // creating element 'li' and join it to user input
    const liBaru = document.createElement('li');
    const teksBaru = document.createTextNode(inputText.value + ' ');
    liBaru.appendChild(teksBaru);

    // insert the 'li' to HTML element <ol>
    const isiContainer = document.querySelector('.daftar-kegiatan');
    isiContainer.appendChild(liBaru);

    // insert new classes into HTML element <li>
    const isiLi = isiContainer.querySelectorAll('li');
    isiLi.forEach(function (e) {
      e.classList.add('list-group-item', 'border-0');
    });

    // creating element 'button' with text 'close'
    const closeButton = document.createElement('button');
    const simbolClose = document.createTextNode('X');
    closeButton.appendChild(simbolClose);

    // creating element  'button', with text 'done'
    const doneButton = document.createElement('button');
    const textDone = document.createTextNode('done');
    doneButton.appendChild(textDone);

    // insert 'close' and 'done' button into HTML element <li>
    isiLi.forEach(function (e) {
      e.appendChild(closeButton);
      e.appendChild(doneButton);
    });
    // insert new attributes 'type' and 'classes' into HTML element <button> 'close'
    const isiClose = isiContainer.querySelectorAll('button:first-child');
    isiClose.forEach(function (e) {
      e.setAttribute('type', 'button');
      e.classList.add('btn', 'btn-outline-danger', 'btn-sm', 'close-button');
    });

    // insert new attributes 'type' and 'classes' into HTML element <button> 'done'
    const isiDone = isiContainer.querySelectorAll('button:last-child');
    isiDone.forEach(function (el) {
      el.setAttribute('type', 'button');
      el.classList.add('btn', 'btn-outline-primary', 'btn-sm', 'done-button');
      el.addEventListener('click', function (e) {
        e.target.parentElement.classList.add('done-list');
        e.target.parentElement.style.display = 'none';
      });
    });

    // remove <li> display targetted
    const close = document.querySelectorAll('.close-button');
    close.forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.target.parentElement.style.display = 'none';
      });
    });
    inputText.value = '';
  }
});

// Event Clear List
clearList.addEventListener('click', function () {
  const isiContainer = document.querySelector('.daftar-kegiatan');
  let cekList = isiContainer.querySelectorAll('li');
  console.log(cekList);
  let arrCekList = [];
  for (let i = 0; i < cekList.length; i++) {
    let isiCekList = cekList[i].innerHTML;
    arrCekList.push(isiCekList);
  }
  console.log(arrCekList[0]);
  if (arrCekList[0] === undefined) {
    alert('To-Do List is still empty!!!');
  } else {
    for (let i = 0; i < cekList.length; i++) {
      isiContainer.removeChild(cekList[i]);
    }
    textContainer = '';
  }
});
