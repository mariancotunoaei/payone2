export const prepareFormulaToBeInGoodShape = (formula = '') => {
    let goodLookingFormula = '';
    let previousCharacter = '';
    [...formula.toUpperCase()].forEach(character => {
        if (character === ' ') {
            return;
        }
        if (character === '(' || character === ')') {
            goodLookingFormula += ` ${character}`;
        } else if (character >= '0' && character <= '9') {
            if (previousCharacter >= '0' && previousCharacter <= '9') {
                goodLookingFormula += character;
            } else {
                goodLookingFormula += ` ${character}`;
            }
        } else if (character >= 'A' && character <= 'Z') {
            if (previousCharacter >= 'A' && previousCharacter <= 'Z') {
                goodLookingFormula += character;
            } else {
                goodLookingFormula += ` ${character}`;
            }
        }

        previousCharacter = character;
    });
    return goodLookingFormula.trim();
};

export const getStructureWithEmptyHiddenFields = (applicationStructure, evalRenderConditions) => {
    let finalApplicationStructure = JSON.parse(JSON.stringify(applicationStructure));
    const { chapters = [] } = finalApplicationStructure;
    chapters.forEach((chapter, chapterIndex) => {
        const shouldRenderChapter = evalRenderConditions(chapter.renderConditions);
        const { sections = [] } = chapter;
        sections.forEach((section, sectionIndex) => {
            const shouldRenderSection = evalRenderConditions(section.renderConditions);
            const { fields = [] } = section;
            fields.forEach((field, fieldIndex) => {
                const shouldRenderField = evalRenderConditions(field.renderConditions);
                if (!shouldRenderChapter || !shouldRenderSection || !shouldRenderField) {
                    delete finalApplicationStructure.chapters[chapterIndex].sections[sectionIndex].fields[fieldIndex].value;
                }
            });
        });
    });
    return finalApplicationStructure;
};

export const getStringWithLinks = (str, urls) => {
    const nrOfOccurrences = str.match(/{{/g);
    let finalString = '';

    if (nrOfOccurrences) {
        for (let i = 0; i < nrOfOccurrences.length; i++) {
            let startIndex = str.indexOf('{{') + 2; // +2 because we increase the size with the 2 {{ characters
            let endIndex = str.indexOf('}}');

            let tempStr = str.substring(0, startIndex - 2); // -2 because we exclude the 2 {{ characters
            const linkDisplayText = str.substring(startIndex, endIndex);
            const link = `<a href='${urls[i]}' target='_blank'>${linkDisplayText}</a>`;

            finalString += tempStr + link;
            str = str.slice(endIndex + 2, str.length);

            if (i === nrOfOccurrences - 1) {
                finalString += str;
            }
        }
    } else {
        return str;
    }

    return finalString;
};
