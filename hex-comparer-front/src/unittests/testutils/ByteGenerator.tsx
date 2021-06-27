export default class ByteGenerator {
    public static getCrescendoBytes(length : number) : Array<number> {
        let array : Array<number> = [];

        for(let i : number = 0; i < length; i++)
        {
            array.push(i);
        }

        return array;
    }
}