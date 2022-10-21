const _ = {
    words(str) {
        return str.split(' ');
    },
    pad(str, length) {
        if (str.length < length) {
            let arr = [str];
            let diff = length - str.length;
            let split = diff / 2
            let extra = 0;
            if (split % 2 !== 0) {
                split = Math.floor(split);
                extra = 1;
            }
            for (let i = 0; i < split; i++) {
                arr.splice(i, 0, ' ');
            }
            if (extra > 0) {
                let _split = split + extra;
                let index = arr.length + _split
                for (let i = arr.length; i < index; i++) {
                    arr.splice(i, 0, ' ');
                }
            } else {
                let index = arr.length + split
                    for (let i = arr.length; i < index; i++) {
                        arr.splice(i, 0, ' ');
                    }
                }
            let result = arr.join('');
            if (result.length === length) {
                return result;
            } 
        } else {
            return str;
        }
    }
}

console.log(_.pad('abc', 6));

module.exports = _;