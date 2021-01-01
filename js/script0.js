const images = [
    "elephant.jpg", "bubble-flower.jpg",
    "bike-flower.jpg", "table.jpg"
  ];

  var current = 0; 

  function change(obj) {
    current = obj.value; 
    var src = "images/" + images[current]; 

    document.getElementById("image").src = src; 
  }
