import { Doctor } from './doctors';
import { Patient } from './patients';

describe('Patient', () => {
  it('should create an instance', () => {
    expect(new Patient("","","","","","",new Doctor("","","","",""),"")).toBeTruthy();
  });
});
