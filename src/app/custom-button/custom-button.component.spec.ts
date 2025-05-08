import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonState, CustomButtonComponent } from './custom-button.component';

/*describe('CustomButtonComponent', () => {
  let component: CustomButtonComponent;
  let fixture: ComponentFixture<CustomButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});*/

describe('Simple tests', () => {
  it("adds numbers correctly", () => {
    expect(1+2).toBe(3);
  });

  it("subtracts numbers correctly", () => {
    expect(5-2).toBe(3);
  });

  
});

describe("Component tests", () => {
  let fixture: ComponentFixture<CustomButtonComponent>;
  let component: CustomButtonComponent;

  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomButtonComponent);
    component = fixture.componentInstance;
    component.label = 'TestText';

    fixture.detectChanges();
  });


  it("renders button with correct text", () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('TestText');
  });

  it("is idle when its supposed to", () => {
    const compiled = fixture.componentInstance as CustomButtonComponent;
    expect(compiled.bs).toBe(ButtonState.Idle);
  });
  it("is hovered when its supposed to", () => {
    const button = fixture.nativeElement.querySelector('button');

    button.dispatchEvent(new Event('mouseenter'));

    fixture.detectChanges();
    expect(component.bs).toBe(ButtonState.Hovered);
  });
  it("is clicked when its supposed to", () => {
    const button = fixture.nativeElement.querySelector('button');

    button.dispatchEvent(new Event('mouseup'));

    fixture.detectChanges();
    expect(component.bs).toBe(ButtonState.Clicked);
  });
})
