import type { IOption } from "../models/option.model";

export class OptionsService {

    getOptions(): IOption[] {
        return [
             {
                title: "App 1",
                url: "app1.html",
                theme: "primary",
                icon: "1-circle-fill"
            },
            {
                title: "App 2",
                url: "app2.html",
                theme: "success",
                icon: "2-circle-fill"
            },
            {
                title: "App 3",
                url: "app3.html",
                theme: "danger",
                icon: "2-circle-fill"
            }
        ]
    }

}