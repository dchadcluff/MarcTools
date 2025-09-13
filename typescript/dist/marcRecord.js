"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarcRecord = void 0;
/**
 * Represents a MARC21 record following basic Library of Congress specs.
 */
class MarcRecord {
    constructor() {
        this.leader = '00000nam  2200000 a 4500';
        this.fields = [];
    }
    addField(field) {
        this.fields.push(field);
    }
    /** Returns all fields in tag order */
    get sortedFields() {
        return this.fields.slice().sort((a, b) => a.tag.localeCompare(b.tag));
    }
}
exports.MarcRecord = MarcRecord;
