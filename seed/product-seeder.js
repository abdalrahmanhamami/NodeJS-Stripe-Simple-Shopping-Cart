var Product = require("../models/product");
var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
  new Product({
    imagePath:
      "https://instagram.fath4-2.fna.fbcdn.net/vp/c06ac764307b16308568a61e22f80e85/5C7F3A50/t51.2885-15/e35/43914403_2211112399162814_80660397412365653_n.jpg",
      title: "Breakfast at Acropolis",
      description: "Awesome Bread",
      price: 15
  }),
  new Product({
    imagePath:
      "https://instagram.fath4-2.fna.fbcdn.net/vp/535f9034c78d2943bbcf99dcce7eda5f/5C8D1595/t51.2885-15/e35/43984433_1935763156729793_2432446849856191529_n.jpg",
    title: "Acropolis ",
    description: "awesome photo",
    price: 10
  }),
  new Product({
    imagePath:
      "https://instagram.fath4-2.fna.fbcdn.net/vp/02404afd5bba4d3adb913d9ac652291a/5C9974F7/t51.2885-15/e35/43754905_554311771671903_4213641290641609862_n.jpg",
    title: "Berlin",
    description: "awesome Building",
    price: 25
  }),
  new Product({
    imagePath:
      "https://instagram.fath4-2.fna.fbcdn.net/vp/3f9e5b868a9b15603557e095cc3aed16/5CAC27E9/t51.2885-15/e35/42903583_1215184425296772_8055991536700294969_n.jpg",
    title: "Bubbles!",
    description: "Everybody's Favorite",
    price: 20
  }),
  new Product({
    imagePath:
      "https://www.curiousoid.com/wp-content/uploads/2017/05/planet-earth.jpg",
    title: "Favorite planet",
    description: "Best atmosphere",
    price: 15
  })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, seed) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}

