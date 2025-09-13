"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarcField = void 0;
const marcSubfield_1 = require("./marcSubfield");
class MarcField {
    constructor(tag, indicators = '  ') {
        this.tag = tag;
        this.indicators = indicators;
        this.subfields = [];
    }
    addSubfield(code, value) {
        this.subfields.push(new marcSubfield_1.MarcSubfield(code, value));
    }
}
exports.MarcField = MarcField;
