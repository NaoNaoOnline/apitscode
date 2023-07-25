import * as jspb from "google-protobuf";

export class DeleteI extends jspb.Message {
  getFilter(): DeleteI_Filter | undefined;
  setFilter(value?: DeleteI_Filter): DeleteI;
  hasFilter(): boolean;
  clearFilter(): DeleteI;

  getObjectList(): Array<DeleteI_Object>;
  setObjectList(value: Array<DeleteI_Object>): DeleteI;
  clearObjectList(): DeleteI;
  addObject(value?: DeleteI_Object, index?: number): DeleteI_Object;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteI.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteI): DeleteI.AsObject;
  static serializeBinaryToWriter(
    message: DeleteI,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): DeleteI;
  static deserializeBinaryFromReader(
    message: DeleteI,
    reader: jspb.BinaryReader,
  ): DeleteI;
}

export namespace DeleteI {
  export type AsObject = {
    filter?: DeleteI_Filter.AsObject;
    objectList: Array<DeleteI_Object.AsObject>;
  };
}

export class DeleteI_Filter extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteI_Filter.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DeleteI_Filter,
  ): DeleteI_Filter.AsObject;
  static serializeBinaryToWriter(
    message: DeleteI_Filter,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): DeleteI_Filter;
  static deserializeBinaryFromReader(
    message: DeleteI_Filter,
    reader: jspb.BinaryReader,
  ): DeleteI_Filter;
}

export namespace DeleteI_Filter {
  export type AsObject = {};
}

export class DeleteI_Object extends jspb.Message {
  getInternMap(): jspb.Map<string, string>;
  clearInternMap(): DeleteI_Object;

  getPublic(): DeleteI_Object_Public | undefined;
  setPublic(value?: DeleteI_Object_Public): DeleteI_Object;
  hasPublic(): boolean;
  clearPublic(): DeleteI_Object;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteI_Object.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DeleteI_Object,
  ): DeleteI_Object.AsObject;
  static serializeBinaryToWriter(
    message: DeleteI_Object,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): DeleteI_Object;
  static deserializeBinaryFromReader(
    message: DeleteI_Object,
    reader: jspb.BinaryReader,
  ): DeleteI_Object;
}

export namespace DeleteI_Object {
  export type AsObject = {
    internMap: Array<[string, string]>;
    pb_public?: DeleteI_Object_Public.AsObject;
  };
}

export class DeleteI_Object_Public extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteI_Object_Public.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DeleteI_Object_Public,
  ): DeleteI_Object_Public.AsObject;
  static serializeBinaryToWriter(
    message: DeleteI_Object_Public,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): DeleteI_Object_Public;
  static deserializeBinaryFromReader(
    message: DeleteI_Object_Public,
    reader: jspb.BinaryReader,
  ): DeleteI_Object_Public;
}

export namespace DeleteI_Object_Public {
  export type AsObject = {};
}

export class DeleteO extends jspb.Message {
  getFilter(): DeleteO_Filter | undefined;
  setFilter(value?: DeleteO_Filter): DeleteO;
  hasFilter(): boolean;
  clearFilter(): DeleteO;

  getObjectList(): Array<DeleteO_Object>;
  setObjectList(value: Array<DeleteO_Object>): DeleteO;
  clearObjectList(): DeleteO;
  addObject(value?: DeleteO_Object, index?: number): DeleteO_Object;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteO.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteO): DeleteO.AsObject;
  static serializeBinaryToWriter(
    message: DeleteO,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): DeleteO;
  static deserializeBinaryFromReader(
    message: DeleteO,
    reader: jspb.BinaryReader,
  ): DeleteO;
}

export namespace DeleteO {
  export type AsObject = {
    filter?: DeleteO_Filter.AsObject;
    objectList: Array<DeleteO_Object.AsObject>;
  };
}

export class DeleteO_Filter extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteO_Filter.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DeleteO_Filter,
  ): DeleteO_Filter.AsObject;
  static serializeBinaryToWriter(
    message: DeleteO_Filter,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): DeleteO_Filter;
  static deserializeBinaryFromReader(
    message: DeleteO_Filter,
    reader: jspb.BinaryReader,
  ): DeleteO_Filter;
}

export namespace DeleteO_Filter {
  export type AsObject = {};
}

export class DeleteO_Object extends jspb.Message {
  getInternMap(): jspb.Map<string, string>;
  clearInternMap(): DeleteO_Object;

  getPublic(): DeleteO_Object_Public | undefined;
  setPublic(value?: DeleteO_Object_Public): DeleteO_Object;
  hasPublic(): boolean;
  clearPublic(): DeleteO_Object;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteO_Object.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DeleteO_Object,
  ): DeleteO_Object.AsObject;
  static serializeBinaryToWriter(
    message: DeleteO_Object,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): DeleteO_Object;
  static deserializeBinaryFromReader(
    message: DeleteO_Object,
    reader: jspb.BinaryReader,
  ): DeleteO_Object;
}

export namespace DeleteO_Object {
  export type AsObject = {
    internMap: Array<[string, string]>;
    pb_public?: DeleteO_Object_Public.AsObject;
  };
}

export class DeleteO_Object_Public extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteO_Object_Public.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DeleteO_Object_Public,
  ): DeleteO_Object_Public.AsObject;
  static serializeBinaryToWriter(
    message: DeleteO_Object_Public,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): DeleteO_Object_Public;
  static deserializeBinaryFromReader(
    message: DeleteO_Object_Public,
    reader: jspb.BinaryReader,
  ): DeleteO_Object_Public;
}

export namespace DeleteO_Object_Public {
  export type AsObject = {};
}
