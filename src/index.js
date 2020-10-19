module.exports = function toReadable(number) {
    const numStr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozensStr = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let result = '';
    let hundreds = Math.floor(number / 100);
    let dozens = Math.floor(number % 100 / 10);
    let digit = number % 10;

    if(number === 0) return numStr[0];

    if(hundreds > 0) {
        result += `${numStr[hundreds]} hundred`
    }

    if(dozens > 1) {
        if (hundreds > 0) {
            result += ' ';
          }
        result += `${dozensStr[dozens - 1]}`;
        if(digit > 0) result += ` ${numStr[digit]}`;
    }else if (dozens === 1 || digit > 0) {
        if (hundreds > 0) result += ' ';
        result += numStr[dozens * 10 + digit];
      }

    return result;

}
