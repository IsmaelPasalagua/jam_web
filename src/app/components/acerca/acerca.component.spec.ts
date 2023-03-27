import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaComponent } from './acerca.component';

describe('AcercaComponent', () => {
  let component: AcercaComponent;
  let fixture: ComponentFixture<AcercaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
const container = document.querySelectorAll(".container .card")

        container.forEach(el => {
            el.addEventListener("mousemove",(e)=> {
                let xAxis = (window.innerWidth/2-e.pageX)/15
                let yAxis = (window.innerHeight/2-e.pageY)/15
                el.style.transform =`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
            })
        })
        //in
        container.forEach(el => {
            el.addEventListener('mouseenter',(e)=>{
                el.style.transition =`all 0.5s ease`
                el.style.animation =`animacion 1.5s forwards`
                el.querySelector(".title").style.transform ="translateZ(150px)"
            })
        })
        //out
        container.forEach(el => {
            el.addEventListener('mouseleave',(e)=>{
                el.style.transition =`all 1.5s ease`
                el.style.animation =`none`
                el.style.transform =`rotateY(0deg) rotateX(0deg)`
                el.querySelector(".title").style.transform ="translateZ(0px)"
            })
        })
