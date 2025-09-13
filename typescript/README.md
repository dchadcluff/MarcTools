# MarcTools TypeScript

This directory contains a minimal TypeScript implementation of data models for MARC21 records inspired by the original C# code in this repository.  It exposes classes you can import into your own TypeScript or JavaScript projects.

```
npm install
npm run build
```

Usage example:

```ts
import { MarcRecord, MarcField } from 'marc-tools-ts';

const record = new MarcRecord();
const field = new MarcField('245', '10');
field.addSubfield('a', 'Example title');
record.addField(field);
```
