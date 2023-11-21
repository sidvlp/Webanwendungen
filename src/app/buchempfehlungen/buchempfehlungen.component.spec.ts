import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuchempfehlungenComponent } from './buchempfehlungen.component';

describe('BuchempfehlungenComponent', () => {
  let component: BuchempfehlungenComponent;
  let fixture: ComponentFixture<BuchempfehlungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuchempfehlungenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuchempfehlungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
