import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityRoomComponent } from './identity-room.component';

describe('IdentityRoomComponent', () => {
  let component: IdentityRoomComponent;
  let fixture: ComponentFixture<IdentityRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdentityRoomComponent]
    });
    fixture = TestBed.createComponent(IdentityRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
