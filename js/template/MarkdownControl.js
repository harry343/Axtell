import Template, { TemplateType } from '~/template/Template';
import HexBytes from '~/modern/HexBytes';
import Theme from '~/models/Theme';

/**
 * Represents a control for the markdown controls list. Stores all the
 * information and a callback for the action.
 */
export default class MarkdownControl extends Template {
    /**
     * @param  {string}   name     Name of control
     * @param  {string}   key      Name of key to trigger keyboard shortcut.
     * @param  {string}   iconName Icon name (/static/img/$.svg)
     * @param  {Function} callback Passed the markdown control instance.
     */
    constructor(name, key, iconName, callback) {
        let root = (
            <a><img src={Theme.current.imageForTheme(iconName)}/></a>
        );

        super(root);

        this._name = name;
        this._keyName = key;
        this._iconName = iconName;
        this._callback = callback;
        this._controller = null;

        root.addEventListener('click', () => {
            this.trigger();
        });
    }

    /**
     * Calls
     */
    trigger() {
        this._callback(this._controller);
    }

    /**
     * Sets the controlling template.
     *
     * @param {MarkdownControlsTemplate} template - controlling template
     */
    setControllingTemplate(template) {
        this._controller = template;
    }
}

export function MarkdownControlBuilder(name, key, iconName, callback) {
    return class extends MarkdownControl {
        constructor() {
            super(name, key, iconName, callback);
        }
    }
}
