const form = document.querySelector('#translate-form');
    const translationResult = document.querySelector('#translation-result');
    const apiKey = '7b2a91d96amsh6fa66244ce42089p13f0efjsn27a670054ff7';

    form.addEventListener('submit', event => {
      event.preventDefault();

      const textInput = document.querySelector('#text-input');
      const targetLangSelect = document.querySelector('#target-lang-select');

      const encodedParams = new URLSearchParams();
      encodedParams.append('q', textInput.value);
      encodedParams.append('target', targetLangSelect.value);

      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'Accept-Encoding': 'application/gzip',
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        body: encodedParams
      };

      fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
        .then(response => response.json())
        .then(response => {
          if (response.data && response.data.translations) {
            const translation = response.data.translations[0].translatedText;
            translationResult.innerHTML = `Translation: ${translation}`;
          } else {
            translationResult.innerHTML = 'Translation failed';
          }
        })
        .catch(err => console.error(err));
    });