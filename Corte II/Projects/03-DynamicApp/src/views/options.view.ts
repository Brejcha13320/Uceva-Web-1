import type { IOption } from "../models/option.model";
import { UtilsService } from "../services/utils.service";

export class OptionsView {

    private readonly optionsList: HTMLDivElement;

    constructor(){
        this.optionsList = UtilsService.getElement<HTMLDivElement>("#options-list");
    }

    public renderOptions(options: IOption[]){
        this.optionsList.innerHTML = "";
        options.forEach((option) => {
            this.optionsList.appendChild(this.createOption(option));
        });
    }

    private createOption(option: IOption): HTMLAnchorElement {
        const { icon, theme, url, title } = option;
        const iconEl = UtilsService.createElement("i");
        iconEl.className = `bi bi-${icon} me-2`;
        const linkEl = UtilsService.createElement("a");
        linkEl.className = `btn btn-${theme} btn-lg`;
        linkEl.href = url;
        linkEl.appendChild(iconEl);
        linkEl.append(title);
        return linkEl;
    }

}