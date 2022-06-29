export class Ingredient{
    // this is a shortcut offered by typescript, it will simply create two properties name and amount and directly assign them
    //  whatever we pass to the constructor
    constructor(public name: string, public amount: number){}
}