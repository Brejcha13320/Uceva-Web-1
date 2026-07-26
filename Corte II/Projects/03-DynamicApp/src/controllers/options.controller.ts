import { OptionsService } from "../services/options.service";
import { OptionsView } from "../views/options.view";

export class OptionsController {

    private readonly optionsView = new OptionsView();
    private readonly optionsService = new OptionsService();

    constructor(){
        this.optionsView.renderOptions(this.optionsService.getOptions());
    }


}