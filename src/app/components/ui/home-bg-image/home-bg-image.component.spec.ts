import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBgImageComponent } from './home-bg-image.component';

describe('HomeBgImageComponent', () => {
  let component: HomeBgImageComponent;
  let fixture: ComponentFixture<HomeBgImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBgImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBgImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
