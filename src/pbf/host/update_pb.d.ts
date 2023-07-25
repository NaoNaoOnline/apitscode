import * as jspb from "google-protobuf";

export class UpdateI extends jspb.Message {
  getFilter(): UpdateI_Filter | undefined;
  setFilter(value?: UpdateI_Filter): UpdateI;
  hasFilter(): boolean;
  clearFilter(): UpdateI;

  getObjectList(): Array<UpdateI_Object>;
  setObjectList(value: Array<UpdateI_Object>): UpdateI;
  clearObjectList(): UpdateI;
  addObject(value?: UpdateI_Object, index?: number): UpdateI_Object;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateI.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateI): UpdateI.AsObject;
  static serializeBinaryToWriter(
    message: UpdateI,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): UpdateI;
  static deserializeBinaryFromReader(
    message: UpdateI,
    reader: jspb.BinaryReader,
  ): UpdateI;
}

export namespace UpdateI {
  export type AsObject = {
    filter?: UpdateI_Filter.AsObject;
    objectList: Array<UpdateI_Object.AsObject>;
  };
}

export class UpdateI_Filter extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateI_Filter.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: UpdateI_Filter,
  ): UpdateI_Filter.AsObject;
  static serializeBinaryToWriter(
    message: UpdateI_Filter,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): UpdateI_Filter;
  static deserializeBinaryFromReader(
    message: UpdateI_Filter,
    reader: jspb.BinaryReader,
  ): UpdateI_Filter;
}

export namespace UpdateI_Filter {
  export type AsObject = {};
}

export class UpdateI_Object extends jspb.Message {
  getInternMap(): jspb.Map<string, string>;
  clearInternMap(): UpdateI_Object;

  getUpdateList(): Array<UpdateI_Object_Update>;
  setUpdateList(value: Array<UpdateI_Object_Update>): UpdateI_Object;
  clearUpdateList(): UpdateI_Object;
  addUpdate(
    value?: UpdateI_Object_Update,
    index?: number,
  ): UpdateI_Object_Update;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateI_Object.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: UpdateI_Object,
  ): UpdateI_Object.AsObject;
  static serializeBinaryToWriter(
    message: UpdateI_Object,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): UpdateI_Object;
  static deserializeBinaryFromReader(
    message: UpdateI_Object,
    reader: jspb.BinaryReader,
  ): UpdateI_Object;
}

export namespace UpdateI_Object {
  export type AsObject = {
    internMap: Array<[string, string]>;
    updateList: Array<UpdateI_Object_Update.AsObject>;
  };
}

export class UpdateI_Object_Update extends jspb.Message {
  getOpe(): string;
  setOpe(value: string): UpdateI_Object_Update;

  getPat(): string;
  setPat(value: string): UpdateI_Object_Update;

  getVal(): string;
  setVal(value: string): UpdateI_Object_Update;
  hasVal(): boolean;
  clearVal(): UpdateI_Object_Update;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateI_Object_Update.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: UpdateI_Object_Update,
  ): UpdateI_Object_Update.AsObject;
  static serializeBinaryToWriter(
    message: UpdateI_Object_Update,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): UpdateI_Object_Update;
  static deserializeBinaryFromReader(
    message: UpdateI_Object_Update,
    reader: jspb.BinaryReader,
  ): UpdateI_Object_Update;
}

export namespace UpdateI_Object_Update {
  export type AsObject = {
    ope: string;
    pat: string;
    val?: string;
  };

  export enum ValCase {
    _VAL_NOT_SET = 0,
    VAL = 3,
  }
}

export class UpdateO extends jspb.Message {
  getFilter(): UpdateO_Filter | undefined;
  setFilter(value?: UpdateO_Filter): UpdateO;
  hasFilter(): boolean;
  clearFilter(): UpdateO;

  getObjectList(): Array<UpdateO_Object>;
  setObjectList(value: Array<UpdateO_Object>): UpdateO;
  clearObjectList(): UpdateO;
  addObject(value?: UpdateO_Object, index?: number): UpdateO_Object;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateO.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateO): UpdateO.AsObject;
  static serializeBinaryToWriter(
    message: UpdateO,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): UpdateO;
  static deserializeBinaryFromReader(
    message: UpdateO,
    reader: jspb.BinaryReader,
  ): UpdateO;
}

export namespace UpdateO {
  export type AsObject = {
    filter?: UpdateO_Filter.AsObject;
    objectList: Array<UpdateO_Object.AsObject>;
  };
}

export class UpdateO_Filter extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateO_Filter.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: UpdateO_Filter,
  ): UpdateO_Filter.AsObject;
  static serializeBinaryToWriter(
    message: UpdateO_Filter,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): UpdateO_Filter;
  static deserializeBinaryFromReader(
    message: UpdateO_Filter,
    reader: jspb.BinaryReader,
  ): UpdateO_Filter;
}

export namespace UpdateO_Filter {
  export type AsObject = {};
}

export class UpdateO_Object extends jspb.Message {
  getInternMap(): jspb.Map<string, string>;
  clearInternMap(): UpdateO_Object;

  getPublic(): UpdateO_Object_Public | undefined;
  setPublic(value?: UpdateO_Object_Public): UpdateO_Object;
  hasPublic(): boolean;
  clearPublic(): UpdateO_Object;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateO_Object.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: UpdateO_Object,
  ): UpdateO_Object.AsObject;
  static serializeBinaryToWriter(
    message: UpdateO_Object,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): UpdateO_Object;
  static deserializeBinaryFromReader(
    message: UpdateO_Object,
    reader: jspb.BinaryReader,
  ): UpdateO_Object;
}

export namespace UpdateO_Object {
  export type AsObject = {
    internMap: Array<[string, string]>;
    pb_public?: UpdateO_Object_Public.AsObject;
  };
}

export class UpdateO_Object_Public extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateO_Object_Public.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: UpdateO_Object_Public,
  ): UpdateO_Object_Public.AsObject;
  static serializeBinaryToWriter(
    message: UpdateO_Object_Public,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): UpdateO_Object_Public;
  static deserializeBinaryFromReader(
    message: UpdateO_Object_Public,
    reader: jspb.BinaryReader,
  ): UpdateO_Object_Public;
}

export namespace UpdateO_Object_Public {
  export type AsObject = {};
}
