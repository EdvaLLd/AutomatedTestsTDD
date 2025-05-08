import { Component, Input } from '@angular/core';

export enum ButtonState {
  Idle = "idle",
  Hovered = "hovered",
  Clicked = "clicked",
}  

@Component({
  selector: 'app-custom-button',
  imports: [],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css'
})
export class CustomButtonComponent {

  @Input() label!:string;
  bs: ButtonState = ButtonState.Idle;

  isHovering():void{
    this.bs = ButtonState.Hovered;
  }
  isNotHovering():void{
    this.bs = ButtonState.Idle;
  }
  isClicked():void{
    this.bs = ButtonState.Clicked;
  }
}
