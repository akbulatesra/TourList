//Creting Datas

//For not invoking again I dont use this file

const addData = ({ name, image, price, info, id }) => {
  fetch("https://6322591b362b0d4e7dcc4e29.mockapi.io/tour", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      image,
      price,
      info,
      id,
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
};
addData({
  name: "Kapadokya",
  image:
    "https://blog.biletbayi.com/wp-content/uploads/2018/08/kapadokya-turkiye-scaled.jpg",
  price: "2300 TL",
  info: "Cappadocia, a semi-arid region in central Turkey, is known for its distinctive “fairy chimneys,” tall, cone-shaped rock formations clustered in Monks Valley, Göreme and elsewhere. Other notables sites include Bronze Age homes carved into valley walls by troglodytes (cave dwellers) and later used as refuges by early Christians. The 100m-deep Ihlara Canyon houses numerous rock-face churches.",
});

addData({
  name: "Mardin",
  image:
    "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_900,c_fill,g_auto,h_506,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F220505103446-01-mardin-turkey.jpg",
  price: "2500 TL",
  info: "Donkeys meander through narrow streets past doorways and through low arches, suddenly braying around corners at startled tourists while residents continue on their way, unperturbed.Old stone walls reverberate with the gentle murmur of conversations in Arabic, Syriac, Armenian, Kurdish, Torani, Turkish and Aramaic, an ancient Semitic language once believed to have been used by Jesus.This is Mardin, a city in southeast Turkey where thousands of years of history are visible around every corner.",
});

addData({
  name: "Alaçatı",
  image:
    "https://www.b2carlease.com/dosya/2419/blog/5-1-alacati-gezi-rehberi_159.jpeg",
  price: "1500 TL",
  info: "Alaçatı is a town on Turkey’s Çeşme Peninsula, on the Aegean Sea. It’s known for its beaches, old stone houses and winemaking tradition. In the south, Port Alaçatı Marina is a renowned water sports center, thanks to its constant winds. To the northwest is the Ottoman Çeşme Castle, built in the early 16th century and now housing historical artifacts. The Greek island Chios is a short ferry ride away.",
});

addData({
  name: "Uzungöl",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Uzung%C3%B6l_lake_and_town.jpg/1920px-Uzung%C3%B6l_lake_and_town.jpg",
  price: "2000 TL",
  info: `Uzungöl (meaning "Long Lake"),or in the local Romeyka language: Şeraho, is a lake situated to the south of the city of Trabzon, in the Çaykara district of Trabzon Province, Turkey. Uzungöl is also the name of the village on the lake's coast. Over the years, the picturesque lake, its village and the surrounding valley have become popular tourist attractions. The lake is at a distance of 99 km from Trabzon's city center, and 19 km from Çaykara's district center.It was formed by a landslide, which transformed the stream bed into a natural dam, in the valley of the Haldizen Stream.The area is most famous for its natural environment. Located in a valley between high rising mountains, the lake and village at first appear inaccessible. The surrounding mountain forests and fog, occasionally enveloping the lake at night, also add to the scenery.`,
});
