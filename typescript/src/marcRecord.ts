import { MarcField } from './marcField';

/**
 * Represents a MARC21 record following basic Library of Congress specs.
 */
export class MarcRecord {
  public leader: string = '00000nam  2200000 a 4500';
  private fields: MarcField[] = [];

  addField(field: MarcField) {
    this.fields.push(field);
  }

  /** Returns all fields in tag order */
  get sortedFields(): MarcField[] {
    return this.fields.slice().sort((a, b) => a.tag.localeCompare(b.tag));
  }
}
