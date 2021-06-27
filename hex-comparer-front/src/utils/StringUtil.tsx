export default class StringUtil {
    public static toByte(n : number) : string {
        let smaller : number = n % 16;
        let bigger : number = n - smaller % 256;

        return this.toHexChar(bigger) + this.toHexChar(smaller);
    }

    public static toHex(n : number) : string {
        console.log('toHex(' + n + ')');
        var bytes : Array<string> = [];

        while(n > 0) {
            console.log("to hex n : " + n);
            bytes.unshift(this.toHexChar(n % 16));
            n = Math.floor(n / 16);
        }

        var result : string = '';

        bytes.forEach(function(value, index) {
            result += value;
        });

        return '0x' + result;
    }

    public static toHexChar(n : number) : string {
        let hexN : number = n % 16;

        if(hexN < 10){
            return hexN.toString();
        }

        switch(hexN){
            case 10:
                return 'a';

            case 11:
                return 'b';

            case 11:
                return 'b';

            case 12:
                return 'c';

            case 13:
                return 'd';

            case 14:
                return 'e';

            case 15:
                return 'f';

            default:
                return '';
        }
    }

    public static toAscii(n : number) : string {
        return String.fromCharCode(n);
    }
}