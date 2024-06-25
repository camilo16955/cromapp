import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatabaseTestPage } from './database-test.page';

describe('DatabaseTestPage', () => {
  let component: DatabaseTestPage;
  let fixture: ComponentFixture<DatabaseTestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
