import { MarcSubfield } from './marcSubfield';
export declare class MarcField {
    tag: string;
    indicators: string;
    subfields: MarcSubfield[];
    constructor(tag: string, indicators?: string);
    addSubfield(code: string, value: string): void;
}
