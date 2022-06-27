document.addEventListener('DOMContentLoaded', function () {
  const wordFinderForm = document.querySelector('.word-finder-form');
  const wordFinderFormInputs = document.querySelectorAll('.word-finder-form input');
  const inputStarts = document.querySelector('.input-starts');
  const inputEnds = document.querySelector('.input-ends');
  const inputContains = document.querySelector('.input-contains');
  const inputExclude = document.querySelector('.input-exclude');
  const inputInclude = document.querySelector('.input-include');
  const btnReset = document.querySelector('.btn-reset');
  const btnSearch = document.querySelector('.btn-search');
  const filteredWordsArray = [];

  const inputObj = {
    starts: '',
    ends: '',
    contains: '',
    exclude: '',
    include: ''
  }

  init();

  function init() {
    addEventListeners();
  }

  function addEventListeners() {
    // Reset Button
    btnReset.addEventListener('click', function(evt) {
      evt.preventDefault();
      wordFinderForm.reset();
    });

    // Search Button
    btnSearch.addEventListener('click', function(evt) {
      evt.preventDefault();

      startsWithHandler();
      endsWithHandler();
    });    
  }

  function startsWithHandler() {
    if (inputStarts.value !== '') {
      const firstCharacter = inputStarts.value.split('')[0];
      const filteredWords = fiveLetterWords.filter(function(word) {
        return word.toLowerCase().charAt(0) === firstCharacter;
      });

      console.log(filteredWords);
    }
  }

  function endsWithHandler() {
    if (inputEnds.value !== '') {
      const lastCharacter = inputEnds.value.split('')[0];
      const filteredWords = fiveLetterWords.filter(function(word) {
        return word.toLowerCase().charAt(word.length - 1) === lastCharacter;
      });

      console.log(filteredWords);
    }    
  }
});