const map = (array, callback) => {
    const updated = [];

    for (let i = 0; i < array.length; i++) {
        const update = callback(array[i]);

        updated.push(update);
    }
    return updated;
}
const result = map([1, 2, 3], num => num + 2);

console.log(result)