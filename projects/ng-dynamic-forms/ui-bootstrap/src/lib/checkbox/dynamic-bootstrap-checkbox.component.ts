import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { UntypedFormGroup, ReactiveFormsModule } from "@angular/forms";
import {
    DynamicCheckboxModel,
    DynamicFormControlComponent,
    DynamicFormControlLayout,
    DynamicFormLayout,
    DynamicFormLayoutService,
    DynamicFormValidationService
} from "@ng-dynamic-forms/core";
import { NgClass } from "@angular/common";

@Component({
    selector: "dynamic-bootstrap-checkbox",
    templateUrl: "./dynamic-bootstrap-checkbox.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ReactiveFormsModule, NgClass]
})
export class DynamicBootstrapCheckboxComponent extends DynamicFormControlComponent {
    @Input() formLayout?: DynamicFormLayout;
    @Input() group!: UntypedFormGroup;
    @Input() layout?: DynamicFormControlLayout;
    @Input() model!: DynamicCheckboxModel;

    @Output() blur: EventEmitter<any> = new EventEmitter();
    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() focus: EventEmitter<any> = new EventEmitter();

    constructor(protected layoutService: DynamicFormLayoutService, protected validationService: DynamicFormValidationService) {
        super(layoutService, validationService);
    }
}
