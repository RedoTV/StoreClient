import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[toggleVisibility]'
})
export class ToggleVisibilityDirective{
    icon:HTMLElement;
    passwordInput:HTMLElement;
    shown:boolean = true;
    constructor(iconRef: ElementRef){
        this.icon = iconRef.nativeElement;
        this.passwordInput =  this.icon.parentNode?.querySelector('input')!;
        this.icon.addEventListener('click',()=>{
            this.toggle();
        })
    }
    toggle(){
        if(this.shown === true){
            this.passwordInput.setAttribute('type','text');
            this.icon.classList.replace('bi-eye-slash','bi-eye')
            this.shown = false;
        }
        else if(this.shown === false){
            this.passwordInput.setAttribute('type','password');
            this.icon.classList.replace('bi-eye','bi-eye-slash')
            this.shown = true;
        }
    }
}