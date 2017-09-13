System.register(["angular2/platform/browser", "./app.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1;
    var mainObj, CurrentMainClass, names, people, myFunc2, GlobalTestClass, globclass, Shapes, rect2;
    //-------------------------------------------------------------------------------------------
    function getArrayLength(x) {
        var len = x[0].length;
        return len;
    }
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.MainClass);
            mainObj = new app_component_1.MainClass();
            mainObj.showString();
            CurrentMainClass = (function () {
                function CurrentMainClass() {
                    this.currentString = 'CURR STRING';
                    this.currentNumber = 999;
                    console.log('currentString:', this.currentString, ' ::: currentNumber:', this.currentNumber);
                }
                return CurrentMainClass;
            }());
            this.curr_main = new CurrentMainClass();
            names = ['John', 'Dan', 'Aaron', 'Fritz'];
            console.log(getArrayLength(names));
            people = [{ name: 'Aaron' }, { name: 'Fritz' }];
            console.log(getArrayLength(people)); //--------------------return undefined because array of objects (nor string)
            myFunc2 = function (h, w) { return h * w; };
            console.log('LAMBDA FUNCTION (3*5):', myFunc2(3, 5));
            //--------------------------------------------------------------------------------
            GlobalTestClass = (function () {
                function GlobalTestClass() {
                    this.a = 'Private a';
                    this.b = 'Public b';
                }
                return GlobalTestClass;
            }());
            globclass = new GlobalTestClass();
            console.log('GLOBAL TEST CLASS INSTANCE:', globclass);
            (function (Shapes) {
                var Rectangle = (function () {
                    //private privateVar = 'privateVar';
                    function Rectangle(height, width) {
                        this.height = height;
                        this.width = width;
                    }
                    return Rectangle;
                }());
                Shapes.Rectangle = Rectangle;
            })(Shapes || (Shapes = {}));
            console.log('SHAPES 1:', Shapes);
            rect2 = Shapes.Rectangle(10, 4);
            console.log('SHAPES 2:', rect2);
        }
    }
});
//# sourceMappingURL=main.js.map