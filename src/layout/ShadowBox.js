import { Div } from '../core/Div.js';
import { VectorBox } from './VectorBox.js';

/** Box to hold an Image or Vector, centers image and applies drop shadow */
class ShadowBox extends Div {

    constructor(/* any number of ImageUrls to add */) {
        super();
        this.setClass('osui-shadow-box');
        this.addClass('osui-drop-shadow');

        // Parse Arguments, Add Osui Elements / ImageUrls
        let args = arguments;
        if (arguments.length === 1 && Array.isArray(arguments[0])) args = arguments[0];
        for (let i = 0; i < args.length; i++) {
            let argument = args[i];
            if (argument && argument.isElement === true) {
                this.add(argument);
            } else {
                this.add(new VectorBox(argument));
            }
        }
    }

    fullSize() {
        this.addClass('osui-full-size');
        return this;
    }

    dropShadow() {
        this.addClass('osui-drop-shadow');
        this.removeClass('osui-even-shadow');
        return this;
    }

    evenShadow() {
        this.removeClass('osui-drop-shadow');
        this.addClass('osui-even-shadow');
        return this;
    }

    noShadow() {
        this.removeClass('osui-drop-shadow');
        this.removeClass('osui-even-shadow');
        return this;
    }

}

export { ShadowBox };
