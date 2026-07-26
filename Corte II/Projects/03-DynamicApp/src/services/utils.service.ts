export class UtilsService {

    public static getElement<T extends HTMLElement>(selector: string): T {
        const element = document.querySelector(selector);
        if(!element) throw new Error(`No existe el elemento ${selector}`);
        return element as T;
    }

    public static createElement<K extends keyof HTMLElementTagNameMap>(tagName: K): HTMLElementTagNameMap[K] {
        return document.createElement(tagName);
    }

    public static redirecTo(url: string){
        window.location.href = url;
    }

}