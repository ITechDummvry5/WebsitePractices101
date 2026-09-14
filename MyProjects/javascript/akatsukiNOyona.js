
        function handleKeyDown(event){
            console.log(event.key);
            if (event.key === 'Enter') {
                MatchMain();
            }
        }

function MatchMain() {
    const mainResult = document.querySelector('.main-lead');

    const inputMale = mainResult.value
        .replace(/\s/g, '')
        .toUpperCase();

    const checkValue =
        inputMale !== '' && !Number.isNaN(Number(inputMale))
            ? 'Not A String'
            : inputMale === 'HAK' || inputMale === 'SONHAK'
                ? `Yona crush is ${inputMale}`
                : `Yona is not interested in ${inputMale}`;

    document.querySelector('.match-status').innerHTML = checkValue;
}

        function handleChapterKeyDown(event) {
            console.log(event.key);
            if (event.key === 'Enter') {
                BestChapter();
            }
        }

function BestChapter() {
    const bestChapterInput = document.querySelector('.best-chapter');

    const inputChapter = bestChapterInput.value
        .trim()
        .toLowerCase();

    const bestChapterValue =
        inputChapter !== '' && !Number.isNaN(Number(inputChapter))
            ? 'Not A String'
            : inputChapter === 'chapter 1' || inputChapter === 'chapter 2'
                ? `Best chapter is ${inputChapter}`
                : `Not the best chapter`;

    document.querySelector('.best-chapter-status').innerHTML = bestChapterValue;
}

