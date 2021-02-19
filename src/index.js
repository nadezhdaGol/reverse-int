module.exports = function reverse (n) {
    if (n % 10 === 0 && n < 10) {
        let mp = n / 10 * (-1);
        return String(mp).split('').reverse().join('');
    } else if (n % 10 === 0) {
        let m = n / 10;
        return String(m).split('').reverse().join('');
    } else if (n < 0) {
        let p = n * (-1);
        return String(p).split('').reverse().join('');
    } else {
        return String(n).split('').reverse().join('');
    }
}
