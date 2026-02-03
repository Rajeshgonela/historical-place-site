// -------------------- DATA --------------------
let description =
  "Hampi was the capital of the Vijayanagara Empire and is known for its stone temples.";

let photos = [
  "https://t4.ftcdn.net/jpg/03/75/40/73/360_F_375407347_spt4AF5sxsIt9gBIKVzJl95tiQhEGNXy.jpg",
  "https://t4.ftcdn.net/jpg/05/14/35/87/240_F_514358705_s8m53VS3BCSaCClrbOnOGyG5jnbc3bW8.jpg"
];

let videos = [
  "https://www.youtube.com/watch?v=-1hfo-RyyGA"
];

// -------------------- RENDER --------------------
function render() {
  document.getElementById("descText").innerText = description;

  // Photos
  const photoDiv = document.getElementById("photoGallery");
  photoDiv.innerHTML = "";
  photos.forEach((p, i) => {
    photoDiv.innerHTML += `
      <div class="card">
        <img src="${p}" class="lightbox-img" data-src="${p}">
        <span class="edit" onclick="editPhoto(${i})">✏️</span>
      </div>
    `;
  });

  // Videos
  const videoDiv = document.getElementById("videoGallery");
  videoDiv.innerHTML = "";
  videos.forEach((v, i) => {
    const id = v.split("v=")[1];
    videoDiv.innerHTML += `
      <div class="card">
        <iframe src="https://www.youtube.com/embed/${id}" allowfullscreen></iframe>
        <span class="edit" onclick="editVideo(${i})">✏️</span>
      </div>
    `;
  });
}

// -------------------- EDIT FUNCTIONS --------------------
function editDescription() {
  const newDesc = prompt("Enter new description:", description);
  if (newDesc) {
    description = newDesc;
    render();
  }
}

function editPhoto(index) {
  const link = prompt("Paste new image link:", photos[index]);
  if (link) {
    photos[index] = link;
    render();
  }
}

function editVideo(index) {
  const link = prompt("Paste new YouTube link:", videos[index]);
  if (link) {
    videos[index] = link;
    render();
  }
}

// -------------------- LIGHTBOX --------------------
function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  img.src = src;
  lightbox.classList.remove("hidden");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.add("hidden");
}

// Event delegation for image click (WORKS ONLINE)
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("lightbox-img")) {
    openLightbox(e.target.dataset.src);
  }
});

// -------------------- INIT --------------------
window.onload = render;
