const form = document.querySelector('#translate-form');
    const translationResult = document.querySelector('#translation-result');
    const apiKey = ''; ////INPUT VALID API KEY HERE

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
