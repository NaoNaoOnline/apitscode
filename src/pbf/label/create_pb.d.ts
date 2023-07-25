import * as jspb from "google-protobuf";

export class CreateI extends jspb.Message {
  getFilter(): CreateI_Filter | undefined;
  setFilter(value?: CreateI_Filter): CreateI;
  hasFilter(): boolean;
  clearFilter(): CreateI;

  getObjectList(): Array<CreateI_Object>;
  setObjectList(value: Array<CreateI_Object>): CreateI;
  clearObjectList(): CreateI;
  addObject(value?: CreateI_Object, index?: number): CreateI_Object;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateI.AsObject;
  static toObject(includeInstance: boolean, msg: CreateI): CreateI.AsObject;
  static serializeBinaryToWriter(
    message: CreateI,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateI;
  static deserializeBinaryFromReader(
    message: CreateI,
    reader: jspb.BinaryReader,
  ): CreateI;
}

export namespace CreateI {
  export type AsObject = {
    filter?: CreateI_Filter.AsObject;
    objectList: Array<CreateI_Object.AsObject>;
  };
}

export class CreateI_Filter extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateI_Filter.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CreateI_Filter,
  ): CreateI_Filter.AsObject;
  static serializeBinaryToWriter(
    message: CreateI_Filter,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateI_Filter;
  static deserializeBinaryFromReader(
    message: CreateI_Filter,
    reader: jspb.BinaryReader,
  ): CreateI_Filter;
}

export namespace CreateI_Filter {
  export type AsObject = {};
}

export class CreateI_Object extends jspb.Message {
  getInternMap(): jspb.Map<string, string>;
  clearInternMap(): CreateI_Object;

  getPublic(): CreateI_Object_Public | undefined;
  setPublic(value?: CreateI_Object_Public): CreateI_Object;
  hasPublic(): boolean;
  clearPublic(): CreateI_Object;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateI_Object.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CreateI_Object,
  ): CreateI_Object.AsObject;
  static serializeBinaryToWriter(
    message: CreateI_Object,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateI_Object;
  static deserializeBinaryFromReader(
    message: CreateI_Object,
    reader: jspb.BinaryReader,
  ): CreateI_Object;
}

export namespace CreateI_Object {
  export type AsObject = {
    internMap: Array<[string, string]>;
    pb_public?: CreateI_Object_Public.AsObject;
  };
}

export class CreateI_Object_Public extends jspb.Message {
  getName(): string;
  setName(value: string): CreateI_Object_Public;

  getUser(): string;
  setUser(value: string): CreateI_Object_Public;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateI_Object_Public.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CreateI_Object_Public,
  ): CreateI_Object_Public.AsObject;
  static serializeBinaryToWriter(
    message: CreateI_Object_Public,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateI_Object_Public;
  static deserializeBinaryFromReader(
    message: CreateI_Object_Public,
    reader: jspb.BinaryReader,
  ): CreateI_Object_Public;
}

export namespace CreateI_Object_Public {
  export type AsObject = {
    name: string;
    user: string;
  };
}

export class CreateO extends jspb.Message {
  getFilter(): CreateO_Filter | undefined;
  setFilter(value?: CreateO_Filter): CreateO;
  hasFilter(): boolean;
  clearFilter(): CreateO;

  getObjectList(): Array<CreateO_Object>;
  setObjectList(value: Array<CreateO_Object>): CreateO;
  clearObjectList(): CreateO;
  addObject(value?: CreateO_Object, index?: number): CreateO_Object;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateO.AsObject;
  static toObject(includeInstance: boolean, msg: CreateO): CreateO.AsObject;
  static serializeBinaryToWriter(
    message: CreateO,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateO;
  static deserializeBinaryFromReader(
    message: CreateO,
    reader: jspb.BinaryReader,
  ): CreateO;
}

export namespace CreateO {
  export type AsObject = {
    filter?: CreateO_Filter.AsObject;
    objectList: Array<CreateO_Object.AsObject>;
  };
}

export class CreateO_Filter extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateO_Filter.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CreateO_Filter,
  ): CreateO_Filter.AsObject;
  static serializeBinaryToWriter(
    message: CreateO_Filter,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateO_Filter;
  static deserializeBinaryFromReader(
    message: CreateO_Filter,
    reader: jspb.BinaryReader,
  ): CreateO_Filter;
}

export namespace CreateO_Filter {
  export type AsObject = {};
}

export class CreateO_Object extends jspb.Message {
  getInternMap(): jspb.Map<string, string>;
  clearInternMap(): CreateO_Object;

  getPublic(): CreateO_Object_Public | undefined;
  setPublic(value?: CreateO_Object_Public): CreateO_Object;
  hasPublic(): boolean;
  clearPublic(): CreateO_Object;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateO_Object.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CreateO_Object,
  ): CreateO_Object.AsObject;
  static serializeBinaryToWriter(
    message: CreateO_Object,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateO_Object;
  static deserializeBinaryFromReader(
    message: CreateO_Object,
    reader: jspb.BinaryReader,
  ): CreateO_Object;
}

export namespace CreateO_Object {
  export type AsObject = {
    internMap: Array<[string, string]>;
    pb_public?: CreateO_Object_Public.AsObject;
  };
}

export class CreateO_Object_Public extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateO_Object_Public.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CreateO_Object_Public,
  ): CreateO_Object_Public.AsObject;
  static serializeBinaryToWriter(
    message: CreateO_Object_Public,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateO_Object_Public;
  static deserializeBinaryFromReader(
    message: CreateO_Object_Public,
    reader: jspb.BinaryReader,
  ): CreateO_Object_Public;
}

export namespace CreateO_Object_Public {
  export type AsObject = {};
}
