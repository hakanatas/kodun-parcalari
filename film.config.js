/* ─────────────────────────────────────────────────────────────
   FİLM KİMLİĞİ / Film identity — scripts/build.mjs ile scenes/film.js'ten üretilir.
   Süreler altyazı uzunluğundan hesaplanır (okuma hızı: ~10 harf/sn).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const META = {
    "slug": "kodun-parcalari",
    "title": "Kodun Parçaları",
    "titleEn": "The Pieces of Code",
    "grade": 5,
    "theme": "Yazılım Tasarımı ve Programlama",
    "code": "BTY.5.6.3",
    "outcome": "Yazılım geliştirme sürecinde kullanılan bileşenlerden yararlanabilme",
    "outcomeEn": "Using the components of the software development process",
    "duration": 147.4,
    "tempo": 1
  };
  const SCENES = [
    {
      "id": "s0",
      "t0": 0,
      "t1": 15.9,
      "name": "",
      "en": "",
      "concept": "",
      "noHeader": true
    },
    {
      "id": "s1",
      "t0": 15.9,
      "t1": 44.9,
      "name": "Bileşenler",
      "en": "Components",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s2",
      "t0": 44.9,
      "t1": 67.4,
      "name": "Sabit mi, değişken mi?",
      "en": "Constant or variable?",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s3",
      "t0": 67.4,
      "t1": 84.4,
      "name": "Operatörler",
      "en": "Operators",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s4",
      "t0": 84.4,
      "t1": 110.9,
      "name": "Değişkenle kodla",
      "en": "Code with a variable",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s5",
      "t0": 110.9,
      "t1": 132.4,
      "name": "Değerlendir",
      "en": "Evaluate",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s6",
      "t0": 132.4,
      "t1": 147.4,
      "name": "Aklında kalsın",
      "en": "Remember",
      "concept": "",
      "noHeader": false
    }
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = { META, SCENES };
  else { root.BF = root.BF || {}; root.BF.META = META; root.BF.SCENES = SCENES; }
})(typeof window !== 'undefined' ? window : globalThis);
