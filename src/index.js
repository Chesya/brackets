module.exports = function check(str,bracketsConfig) {
        let a = str.length;
        if (a % 2 == 0) {
                for (let i = 1; i <= (a/2); i++) {
                        bracketsConfig.forEach(element => {
                                if (str.includes(element.join(''))) {
                                        str = str.replace(element.join(''), '')
                                }
                        });
                }
        }
        if (str.length == 0 ) {
                return true;
        } else { 
                return false;
        }
}
