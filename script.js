// script.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio loaded successfully ✅");
});

// Código para poblar el modal con los datos del proyecto (no tocar si no necesitás)
document.addEventListener('DOMContentLoaded', function () {
  const projectModalEl = document.getElementById('projectModal');
  if (!projectModalEl) return;

  projectModalEl.addEventListener('show.bs.modal', function (event) {
    // elemento que disparó el modal (el <a>)
    const trigger = event.relatedTarget;
    const title = trigger.dataset.title || '';
    const desc = trigger.dataset.desc || '';
    const tech = trigger.dataset.tech || '';
    const link = trigger.dataset.link || '#';
    const img = trigger.dataset.img || '';

    // Poblar modal
    const modalTitle = projectModalEl.querySelector('.modal-title');
    const modalDesc = projectModalEl.querySelector('#modalDesc');
    const modalTech = projectModalEl.querySelector('#modalTech');
    const modalLink = projectModalEl.querySelector('#modalLink');
    const modalImg = projectModalEl.querySelector('#modalImg');

    if (modalTitle) modalTitle.textContent = title;
    if (modalDesc) modalDesc.textContent = desc;
    if (modalTech) modalTech.textContent = tech;
    if (modalLink) modalLink.href = link;

    if (img) {
      modalImg.src = img;
      modalImg.alt = title + ' thumbnail';
      modalImg.classList.remove('d-none');
    } else {
      modalImg.src = '';
      modalImg.classList.add('d-none');
    }
  });
});
