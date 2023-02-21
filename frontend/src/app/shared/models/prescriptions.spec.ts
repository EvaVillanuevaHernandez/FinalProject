import { Doctor } from './doctors';
import { Patient } from './patients';
import { Prescriptions } from './prescriptions';

describe('Prescription', () => {
  it('should create an instance', () => {
    expect(new Prescriptions(new Date(),"","",new Doctor("","","","",""),new Patient("","","","","","",new Doctor("","","","",""),""))).toBeTruthy();
  });
});
