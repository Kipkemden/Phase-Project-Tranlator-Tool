const translateBtn = document.getElementById('translate-btn');
const inputText = document.getElementById('input-text');
const selectLanguage = document.getElementById('select-language');
const translatedText = document.getElementById('translated-text');

translateBtn.addEventListener('click', function() {
  const sourceLang = 'en';
  const targetLang = selectLanguage.value;
  const encodedParams = new URLSearchParams();
  encodedParams.append("q", inputText.value);
  encodedParams.append("target", targetLang);
  encodedParams.append("source", sourceLang);

  const options = {
    method: 'POST',
    url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Key': '7128b39928mshc5bf2f2bd999c5cp126c34jsn313c818f4fc6',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    },
    data: encodedParams
  };

  axios.request(options).then(function (response) {
    translatedText.innerHTML = response.data.data.translations[0].translatedText;
  }).catch(function (error) {
    console.error(error);
  });
});