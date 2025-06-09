import { MarcField } from './marcField';
/**
 * Represents a MARC21 record following basic Library of Congress specs.
 */
export declare class MarcRecord {
    leader: string;
    private fields;
    addField(field: MarcField): void;
    /** Returns all fields in tag order */
    get sortedFields(): MarcField[];
}
