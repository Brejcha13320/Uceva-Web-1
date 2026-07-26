import { OptionsController } from "./controllers/options.controller";

export class Router {
    
    static init(): void {

        const page = window.location.pathname.split("/").pop();

        switch(page){

            case "":
            case "index.html":
                new OptionsController();
                break;

        }

    }

}