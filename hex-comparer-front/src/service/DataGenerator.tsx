export default class DataGenerator {
    static Generate() : Array<number> {
        console.log('Generate()');

        let result : Array<number> = [];

        for(let i : number = 0; i < 256; i++){
            result.push(this.Random());
        }

        console.log(result);

        return result;
    }

    private static Random() : number {
        return Math.floor(Math.random() * 256);
    }
}