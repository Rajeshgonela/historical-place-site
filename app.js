let description =
  "Hampi was the capital of the Vijayanagara Empire and is known for its stone temples.";

let photos = [
  "https://stock.adobe.com/search?k=hampi",
  "https://stock.adobe.com/search?k=hampi"
];

let videos = [
  "https://www.youtube.com/watch?v=4v8n6ZqUqO8"
];

function render() {
  document.getElementById("descText").innerText = description;

  const photoDiv = document.getElementById("photoGallery");
  photoDiv.innerHTML = "";
  photos.forEach((p, i) => {
    photoDiv.innerHTML += `
      <div class="card">
        <img src="${p}">
        <span class="edit" onclick="editPhoto(${i})">✏️</span>
      </div>
    `;
  });

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

render();
