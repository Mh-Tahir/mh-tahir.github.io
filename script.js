var map;

DG.then(function () {
  map = DG.map('map', {
    center: [59.938887, 30.315058],
    zoom: 2
  });

  DG.marker([61.227040, 102.342267]).addTo(map).bindPopup('Россия');
  DG.marker([48.136207, 67.153550]).addTo(map).bindPopup('Казахстан');
  DG.marker([53.139499, -1.685177]).addTo(map).bindPopup('Великобритания');
  DG.marker([36.952915, -99.115868]).addTo(map).bindPopup('США');
  DG.marker([44.954457, 10.349284]).addTo(map).bindPopup('Италия');
  DG.marker([51.228764, 10.551692]).addTo(map).bindPopup('Германия');
  DG.marker([62.723206, 25.933922]).addTo(map).bindPopup('Финляндия');
  DG.marker([39.159964, -3.512808]).addTo(map).bindPopup('Испания');
  DG.marker([58.564388, 25.660789]).addTo(map).bindPopup('Эстония');
  DG.marker([23.602744, 54.057083]).addTo(map).bindPopup('ОАЭ');
  DG.marker([39.056249, 35.302075]).addTo(map).bindPopup('Турция');
  DG.marker([35.128223, 33.149774]).addTo(map).bindPopup('Кипр');
  DG.marker([41.462166, 74.549461]).addTo(map).bindPopup('Киргизия');
});
