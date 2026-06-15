const tracks = document.querySelectorAll('.carousel-content')

tracks.forEach(track => {
  const card = [...track.children]

  for(const card of cards){
    track.appendChild(card.cloneNode(true))
  }
})