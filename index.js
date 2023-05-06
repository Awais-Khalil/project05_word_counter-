#! /usr/bin/env node
import fs from 'fs';
function countWordsAndCharacters(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (error, data) => {
            if (error) {
                reject(error);
            }
            else {
                const words = data.trim().split(/\s+/).length;
                const characters = data.replace(/\s+/g, '').length;
                resolve({ words, characters });
            }
        });
    });
}
// Example usage
const filePath = './myParagraph.txt';
countWordsAndCharacters(filePath)
    .then(result => {
    console.log(`Number of words: ${result.words}`);
    console.log(`Number of characters (without whitespaces): ${result.characters}`);
})
    .catch(error => {
    console.error(`Error reading file: ${error}`);
});
