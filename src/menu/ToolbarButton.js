import { Button } from '../input/Button.js';
import { ShadowBox } from '../layout/ShadowBox.js';

class ToolbarButton extends Button {

    constructor(innerHtml, position /* left, middle, right */) {
        super(innerHtml)
        this.addClass('ToolbarButton');

        switch (position) {
            case 'left': this.addClass('ButtonLeft'); break;
            case 'middle': this.addClass('ButtonMiddle'); break;
            case 'right': this.addClass('ButtonRight'); break;
        }

        const buttonImageHolder = new ShadowBox();
        this.add(buttonImageHolder);
        this.contents = function() { return buttonImageHolder };
    }

}

export { ToolbarButton };
