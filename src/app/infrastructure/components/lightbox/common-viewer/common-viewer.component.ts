import { Component, Input } from "@angular/core";
import { LightboxItemModel } from "../models/lightbox-item-model";

@Component({
    template: ''
})
export abstract class CommonViewerComponent {
    @Input() items: LightboxItemModel[] = [];
    @Input() current: LightboxItemModel;
}