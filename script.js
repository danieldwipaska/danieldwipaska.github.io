const submit = document.querySelector('.submit-button');
const clearList = document.querySelector('.clear-button');

submit.addEventListener('click', function () {
  // Ambil Input User
  const inputText = document.querySelector('.input-area');

  // bikin elemen li dan gabung dengan input user
  const liBaru = document.createElement('li');
  const teksBaru = document.createTextNode(inputText.value + ' ');
  liBaru.appendChild(teksBaru);

  // masukin li ke isi elemen HTML <ol>
  const isiContainer = document.querySelector('.daftar-kegiatan');
  isiContainer.appendChild(liBaru);

  // masukin class baru ke <li>
  const isiLi = document.querySelectorAll('li');
  isiLi.forEach(function (e) {
    e.classList.add('list-group-item', 'border-0');
  });

  // bikin elemen button close
  const closeButton = document.createElement('button');
  const simbolClose = document.createTextNode('X');
  closeButton.appendChild(simbolClose);

  // masukin button close ke isi elemen HTML <li>
  const li = document.querySelectorAll('li');
  li.forEach(function (e) {
    e.appendChild(closeButton);
  });
  // masukin attribute type dan class baru ke <button> close
  const isiClose = isiContainer.querySelectorAll('button');
  isiClose.forEach(function (e) {
    e.setAttribute('type', 'button');
    e.classList.add('btn', 'btn-outline-danger', 'btn-sm', 'close-button');
  });
  // menghilangkan elemen HTML <li> yang ditarget
  const close = document.querySelectorAll('.close-button');
  console.log(close);
  close.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.target.parentElement.style.display = 'none';
    });
  });
  inputText.value = '';
});

// Alternatif algoritma
//   textContainer += `<li class="list-group-item border-0">${inputText.value} <button type="button" class="btn btn-outline-danger btn-sm close">X</button> <button type="button" class="btn btn-outline-secondary btn-sm">done</button></li>`;
//   isiContainer.innerHTML = textContainer;
//   const close = document.querySelectorAll('.close');
//   // masukkanList(inputText.value);
//   close.forEach(function (el) {
//     el.addEventListener('click', function (e) {
//       e.target.parentElement.style.display = 'none';
//       const olHapus = document.getElementsByClassName('list-group-item');
//       console.log(olHapus);
//       textContainer = Array.from(olHapus);
//       const hehe = textContainer.join();
//       console.log(hehe);
//   });
// });

// event click Clear List
clearList.addEventListener('click', function () {
  const cekList = document.querySelector('li');
  console.log(cekList);
  if (cekList === null) {
    alert('Belum Ada Isinya!!');
  } else {
    const ol = document.querySelector('.daftar-kegiatan');

    const li = document.querySelectorAll('li');
    console.log(li);
    for (let i = 0; i < li.length; i++) {
      ol.removeChild(li[i]);
    }
    textContainer = '';
  }
});
