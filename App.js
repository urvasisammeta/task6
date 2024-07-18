
/* src/Gallery.css */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
  padding: 20px;
}

.gallery-image {
  width: 100%;
  height: auto;
  cursor: pointer;
  border-radius: 5px;
  transition: transform 0.2s;
}

.gallery-image:hover {
  transform: scale(1.05);
}