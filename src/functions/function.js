export const shorten = word => {
    const splitWord = word.split(" ");
    const shortWord = splitWord[0] + splitWord[1];
    return shortWord
}