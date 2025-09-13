import { MarcSubfield } from './marcSubfield';

export class MarcField {
  public subfields: MarcSubfield[] = [];

  constructor(
    public tag: string,
    public indicators: string = '  '
  ) {}

  addSubfield(code: string, value: string) {
    this.subfields.push(new MarcSubfield(code, value));
  }
}
