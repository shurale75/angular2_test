import {Component, View} from "angular2/core";

@Component({
    selector: 'my-app'
})

@View({
    template: '<h2>Angular 2 APP !!</h2>'
})

export class MainClass {
    my_string: string;
    constructor (){
        this.my_string = 'MAIN CLASS STRING';
    }

    showString(){
        console.log('MAIN CLASS')
    }
}