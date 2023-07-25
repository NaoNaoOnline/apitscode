import * as jspb from "google-protobuf";

export class SearchI extends jspb.Message {
  getFilter(): SearchI_Filter | undefined;
  setFilter(value?: SearchI_Filter): SearchI;
  hasFilter(): boolean;
  clearFilter(): SearchI;

  getObjectList(): Array<SearchI_Object>;
  setObjectList(value: Array<SearchI_Object>): SearchI;
  clearObjectList(): SearchI;
  addObject(value?: SearchI_Object, index?: number): SearchI_Object;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchI.AsObject;
  static toObject(includeInstance: boolean, msg: SearchI): SearchI.AsObject;
  static serializeBinaryToWriter(
    message: SearchI,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): SearchI;
  static deserializeBinaryFromReader(
    message: SearchI,
    reader: jspb.BinaryReader,
  ): SearchI;
}

export namespace SearchI {
  export type AsObject = {
    filter?: SearchI_Filter.AsObject;
    objectList: Array<SearchI_Object.AsObject>;
  };
}

export class SearchI_Filter extends jspb.Message {
  getChunking(): SearchI_Filter_Chunking | undefined;
  setChunking(value?: SearchI_Filter_Chunking): SearchI_Filter;
  hasChunking(): boolean;
  clearChunking(): SearchI_Filter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchI_Filter.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SearchI_Filter,
  ): SearchI_Filter.AsObject;
  static serializeBinaryToWriter(
    message: SearchI_Filter,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): SearchI_Filter;
  static deserializeBinaryFromReader(
    message: SearchI_Filter,
    reader: jspb.BinaryReader,
  ): SearchI_Filter;
}

export namespace SearchI_Filter {
  export type AsObject = {
    chunking?: SearchI_Filter_Chunking.AsObject;
  };
}

export class SearchI_Filter_Chunking extends jspb.Message {
  getPerpage(): string;
  setPerpage(value: string): SearchI_Filter_Chunking;

  getPointer(): string;
  setPointer(value: string): SearchI_Filter_Chunking;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchI_Filter_Chunking.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SearchI_Filter_Chunking,
  ): SearchI_Filter_Chunking.AsObject;
  static serializeBinaryToWriter(
    message: SearchI_Filter_Chunking,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): SearchI_Filter_Chunking;
  static deserializeBinaryFromReader(
    message: SearchI_Filter_Chunking,
    reader: jspb.BinaryReader,
  ): SearchI_Filter_Chunking;
}

export namespace SearchI_Filter_Chunking {
  export type AsObject = {
    perpage: string;
    pointer: string;
  };
}

export class SearchI_Object extends jspb.Message {
  getInternMap(): jspb.Map<string, string>;
  clearInternMap(): SearchI_Object;

  getPublic(): SearchI_Object_Public | undefined;
  setPublic(value?: SearchI_Object_Public): SearchI_Object;
  hasPublic(): boolean;
  clearPublic(): SearchI_Object;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchI_Object.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SearchI_Object,
  ): SearchI_Object.AsObject;
  static serializeBinaryToWriter(
    message: SearchI_Object,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): SearchI_Object;
  static deserializeBinaryFromReader(
    message: SearchI_Object,
    reader: jspb.BinaryReader,
  ): SearchI_Object;
}

export namespace SearchI_Object {
  export type AsObject = {
    internMap: Array<[string, string]>;
    pb_public?: SearchI_Object_Public.AsObject;
  };
}

export class SearchI_Object_Public extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchI_Object_Public.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SearchI_Object_Public,
  ): SearchI_Object_Public.AsObject;
  static serializeBinaryToWriter(
    message: SearchI_Object_Public,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): SearchI_Object_Public;
  static deserializeBinaryFromReader(
    message: SearchI_Object_Public,
    reader: jspb.BinaryReader,
  ): SearchI_Object_Public;
}

export namespace SearchI_Object_Public {
  export type AsObject = {};
}

export class SearchO extends jspb.Message {
  getFilter(): SearchO_Filter | undefined;
  setFilter(value?: SearchO_Filter): SearchO;
  hasFilter(): boolean;
  clearFilter(): SearchO;

  getObjectList(): Array<SearchO_Object>;
  setObjectList(value: Array<SearchO_Object>): SearchO;
  clearObjectList(): SearchO;
  addObject(value?: SearchO_Object, index?: number): SearchO_Object;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchO.AsObject;
  static toObject(includeInstance: boolean, msg: SearchO): SearchO.AsObject;
  static serializeBinaryToWriter(
    message: SearchO,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): SearchO;
  static deserializeBinaryFromReader(
    message: SearchO,
    reader: jspb.BinaryReader,
  ): SearchO;
}

export namespace SearchO {
  export type AsObject = {
    filter?: SearchO_Filter.AsObject;
    objectList: Array<SearchO_Object.AsObject>;
  };
}

export class SearchO_Filter extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchO_Filter.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SearchO_Filter,
  ): SearchO_Filter.AsObject;
  static serializeBinaryToWriter(
    message: SearchO_Filter,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): SearchO_Filter;
  static deserializeBinaryFromReader(
    message: SearchO_Filter,
    reader: jspb.BinaryReader,
  ): SearchO_Filter;
}

export namespace SearchO_Filter {
  export type AsObject = {};
}

export class SearchO_Object extends jspb.Message {
  getInternMap(): jspb.Map<string, string>;
  clearInternMap(): SearchO_Object;

  getPublic(): SearchO_Object_Public | undefined;
  setPublic(value?: SearchO_Object_Public): SearchO_Object;
  hasPublic(): boolean;
  clearPublic(): SearchO_Object;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchO_Object.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SearchO_Object,
  ): SearchO_Object.AsObject;
  static serializeBinaryToWriter(
    message: SearchO_Object,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): SearchO_Object;
  static deserializeBinaryFromReader(
    message: SearchO_Object,
    reader: jspb.BinaryReader,
  ): SearchO_Object;
}

export namespace SearchO_Object {
  export type AsObject = {
    internMap: Array<[string, string]>;
    pb_public?: SearchO_Object_Public.AsObject;
  };
}

export class SearchO_Object_Public extends jspb.Message {
  getDura(): string;
  setDura(value: string): SearchO_Object_Public;

  getHost(): string;
  setHost(value: string): SearchO_Object_Public;

  getLabl(): string;
  setLabl(value: string): SearchO_Object_Public;

  getLink(): string;
  setLink(value: string): SearchO_Object_Public;

  getTime(): string;
  setTime(value: string): SearchO_Object_Public;

  getUser(): string;
  setUser(value: string): SearchO_Object_Public;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchO_Object_Public.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SearchO_Object_Public,
  ): SearchO_Object_Public.AsObject;
  static serializeBinaryToWriter(
    message: SearchO_Object_Public,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): SearchO_Object_Public;
  static deserializeBinaryFromReader(
    message: SearchO_Object_Public,
    reader: jspb.BinaryReader,
  ): SearchO_Object_Public;
}

export namespace SearchO_Object_Public {
  export type AsObject = {
    dura: string;
    host: string;
    labl: string;
    link: string;
    time: string;
    user: string;
  };
}
