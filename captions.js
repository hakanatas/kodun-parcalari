/* ─────────────────────────────────────────────────────────────
   ALTYAZILAR / CAPTIONS — düzenlenebilir (metin). Zamanlar film saniyesidir.
   note: öğretmen için önerilen seslendirme cümlesi.
   Senaryo değişirse: node scripts/build.mjs (zamanlar yeniden hesaplanır).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const CAPTIONS = [
    { scene: 1, start: 0.9, end: 8.1, tr: "Bilgisayara ne yapacağını nasıl söyleriz?", en: "How do we tell a computer what to do?",
      note: "Bir arkadaşımıza yol tarif ederken adım adım konuşuruz. Bilgisayara ne yapacağını nasıl söyleriz?" },
    { scene: 1, start: 8.8, end: 14.6, tr: "Kodun parçalarını tanıyalım", en: "Let's meet the pieces of code",
      note: "Bilgisayara verdiğimiz yönergelerin parçaları var. Onları tek tek tanıyalım." },
    { scene: 2, start: 17.4, end: 23.1, tr: "Komut: bilgisayara verilen yönerge", en: "Command: an instruction for the computer",
      note: "Bilgisayara verdiğimiz her bir yönergeye komut denir: 1 adım ilerle, sağa dön gibi." },
    { scene: 2, start: 23.9, end: 29.6, tr: "Sabit: değişmeyen değer", en: "Constant: a value that never changes",
      note: "Program boyunca değişmeyen değerlere sabit deriz. Bir oyunun alanı ya da kuralları gibi." },
    { scene: 2, start: 30.4, end: 36, tr: "Değişken: değeri değişebilen kutu", en: "Variable: a box whose value can change",
      note: "Değişken, içindeki değer değişebilen bir kutu gibidir. Oyundaki puan, süre ya da can sayısı birer değişkendir." },
    { scene: 2, start: 36.9, end: 43.5, tr: "Blokları sürükle, bırak, kodla", en: "Drag, drop and code with blocks",
      note: "Blok tabanlı ortamlarda komutlar renkli bloklardır. Onları sürükleyip bırakarak kod yazarız." },
    { scene: 3, start: 46.4, end: 52, tr: "Bir futbol maçını düşünelim", en: "Let's think of a football match",
      note: "Bir futbol maçında neler değişmez, neler değişir? Gruplayalım." },
    { scene: 3, start: 52.9, end: 58.5, tr: "Saha ve kurallar değişmez: sabit", en: "The pitch and the rules stay the same: constants",
      note: "Sahanın boyutu ve oyunun kuralları maç boyunca değişmez. Bunlar sabittir." },
    { scene: 3, start: 59.4, end: 66, tr: "Skor, süre, oyuncu sayısı değişir", en: "Score, time and number of players change",
      note: "Skor, kalan süre ve sahadaki oyuncu sayısı maç boyunca değişebilir. Bunlar değişkendir." },
    { scene: 4, start: 68.8, end: 75.5, tr: "Aritmetik operatörler hesap yapar", en: "Arithmetic operators do calculations",
      note: "Okula kaç dakikada geliyorsun? Varış saatinden çıkış saatini çıkarırız: 8.00 eksi 7.40, 20 dakika. Toplama, çıkarma, çarpma ve bölme aritmetik operatörlerdir." },
    { scene: 4, start: 76.3, end: 83, tr: "Mantıksal operatörler karar verir", en: "Logical operators help make decisions",
      note: "Ve, veya, değil mantıksal operatörlerdir. Ayşe yola çıkmadan önce bakar: köprü açık ve hava güzel ise yola çıkar. İkisi birden doğru olmalıdır." },
    { scene: 5, start: 85.8, end: 91.5, tr: "Önce değişkeni sıfırla", en: "First set the variable to zero",
      note: "Karo yıldız toplayacak. Topladığı yıldızları saymak için puan adında bir değişken yaparız ve onu sıfırlarız." },
    { scene: 5, start: 92.3, end: 99, tr: "Tekrarla: ilerle ve puanı artır", en: "Repeat: move and add a point",
      note: "Aynı işi dört kez yapacağız: bir adım ilerle ve puanı bir artır. Bunun için tekrarla bloğunu kullanırız." },
    { scene: 5, start: 99.8, end: 109.5, tr: "Çalıştır: puan her yıldızda artıyor", en: "Run it: the score goes up with each star",
      note: "Çalıştıralım. Karo her adımda bir yıldız topluyor, puan değişkeni de 1, 2, 3, 4 diye artıyor. Değişkenin değeri değişti!" },
    { scene: 6, start: 112.3, end: 118, tr: "Puanı tutmak için değişken kullanmak", en: "Using a variable to keep the score",
      note: "Puan sürekli değiştiği için onu bir değişkende tutmak doğru bir seçimdir." },
    { scene: 6, start: 118.8, end: 124.5, tr: "Aynı bloğu dört kez alt alta yazmak", en: "Writing the same block four times",
      note: "Aynı bloğu dört kez alt alta yazmak yerine tekrarla bloğu kullanırsak kod kısalır ve okunur." },
    { scene: 6, start: 125.3, end: 131.1, tr: "Oyun alanını sabit olarak belirlemek", en: "Setting the game area as a constant",
      note: "Oyun alanının boyutu değişmediği için onu sabit olarak belirlemek doğrudur." },
    { scene: 7, start: 133.8, end: 139.6, tr: "Aklında kalsın: parçaları doğru seç", en: "Remember: choose the right pieces",
      note: "Aklında kalsın: komutlar, sabitler, değişkenler ve operatörler kodun parçalarıdır." },
    { scene: 7, start: 140.3, end: 146.1, tr: "Parçaları birleştir, kodun çalışsın!", en: "Put the pieces together and your code runs!",
      note: "Parçaları doğru birleştirdiğinde kodun çalışır!" },
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = CAPTIONS;
  else { root.BF = root.BF || {}; root.BF.CAPTIONS = CAPTIONS; }
})(typeof window !== 'undefined' ? window : globalThis);
