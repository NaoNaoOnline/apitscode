// @generated by protobuf-ts 2.9.0
// @generated from protobuf file "pbf/label/search.proto" (package "label", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * SearchI is the input for searching labels.
 *
 *     {
 *         "filter": [
 *             "chunking": {
 *                 "perpage": "50",
 *                 "pointer": "100"
 *             }
 *         ],
 *         "object": [
 *             {
 *                 "intern": {
 *                     "label.naonao.online/id": "<id>"
 *                 }
 *             }
 *         ]
 *     }
 *
 *
 * @generated from protobuf message label.SearchI
 */
export interface SearchI {
  /**
   * @generated from protobuf field: label.SearchI_Filter filter = 1;
   */
  filter?: SearchI_Filter;
  /**
   * @generated from protobuf field: repeated label.SearchI_Object object = 2;
   */
  object: SearchI_Object[];
}
/**
 * @generated from protobuf message label.SearchI_Filter
 */
export interface SearchI_Filter {
  /**
   * @generated from protobuf field: label.SearchI_Filter_Chunking chunking = 1;
   */
  chunking?: SearchI_Filter_Chunking;
}
/**
 * @generated from protobuf message label.SearchI_Filter_Chunking
 */
export interface SearchI_Filter_Chunking {
  /**
   * @generated from protobuf field: string perpage = 1;
   */
  perpage: string;
  /**
   * @generated from protobuf field: string pointer = 2;
   */
  pointer: string;
}
/**
 * @generated from protobuf message label.SearchI_Object
 */
export interface SearchI_Object {
  /**
   * @generated from protobuf field: map<string, string> intern = 1;
   */
  intern: {
    [key: string]: string;
  };
  /**
   * @generated from protobuf field: label.SearchI_Object_Public public = 2;
   */
  public?: SearchI_Object_Public;
}
/**
 * @generated from protobuf message label.SearchI_Object_Public
 */
export interface SearchI_Object_Public {}
/**
 * SearchO is the output for searching labels.
 *
 *     {
 *         "filter": [
 *             "chunking": {
 *                 "perpage": "50",
 *                 "pointer": "150"
 *             }
 *         ],
 *         "object": [
 *             {
 *                 "intern": {
 *                     "label.naonao.online/id": "<id>",
 *                     "label.naonao.online/created": "<unix>"
 *                 },
 *                 "public": {
 *                     "name": "Crypto",
 *                     "user": "551265"
 *                 }
 *             },
 *             ...
 *         ]
 *     }
 *
 *
 * @generated from protobuf message label.SearchO
 */
export interface SearchO {
  /**
   * @generated from protobuf field: label.SearchO_Filter filter = 1;
   */
  filter?: SearchO_Filter;
  /**
   * @generated from protobuf field: repeated label.SearchO_Object object = 2;
   */
  object: SearchO_Object[];
}
/**
 * @generated from protobuf message label.SearchO_Filter
 */
export interface SearchO_Filter {}
/**
 * @generated from protobuf message label.SearchO_Object
 */
export interface SearchO_Object {
  /**
   * @generated from protobuf field: map<string, string> intern = 1;
   */
  intern: {
    [key: string]: string;
  };
  /**
   * @generated from protobuf field: label.SearchO_Object_Public public = 2;
   */
  public?: SearchO_Object_Public;
}
/**
 * @generated from protobuf message label.SearchO_Object_Public
 */
export interface SearchO_Object_Public {
  /**
   * name is the label name.
   *
   * @generated from protobuf field: string name = 1;
   */
  name: string;
  /**
   * user is the user ID creating this label.
   *
   * @generated from protobuf field: string user = 2;
   */
  user: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class SearchI$Type extends MessageType<SearchI> {
  constructor() {
    super("label.SearchI", [
      { no: 1, name: "filter", kind: "message", T: () => SearchI_Filter },
      {
        no: 2,
        name: "object",
        kind: "message",
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => SearchI_Object,
      },
    ]);
  }
  create(value?: PartialMessage<SearchI>): SearchI {
    const message = { object: [] };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<SearchI>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchI,
  ): SearchI {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* label.SearchI_Filter filter */ 1:
          message.filter = SearchI_Filter.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.filter,
          );
          break;
        case /* repeated label.SearchI_Object object */ 2:
          message.object.push(
            SearchI_Object.internalBinaryRead(reader, reader.uint32(), options),
          );
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`,
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d,
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: SearchI,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* label.SearchI_Filter filter = 1; */
    if (message.filter)
      SearchI_Filter.internalBinaryWrite(
        message.filter,
        writer.tag(1, WireType.LengthDelimited).fork(),
        options,
      ).join();
    /* repeated label.SearchI_Object object = 2; */
    for (let i = 0; i < message.object.length; i++)
      SearchI_Object.internalBinaryWrite(
        message.object[i],
        writer.tag(2, WireType.LengthDelimited).fork(),
        options,
      ).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer,
      );
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message label.SearchI
 */
export const SearchI = new SearchI$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchI_Filter$Type extends MessageType<SearchI_Filter> {
  constructor() {
    super("label.SearchI_Filter", [
      {
        no: 1,
        name: "chunking",
        kind: "message",
        T: () => SearchI_Filter_Chunking,
      },
    ]);
  }
  create(value?: PartialMessage<SearchI_Filter>): SearchI_Filter {
    const message = {};
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<SearchI_Filter>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchI_Filter,
  ): SearchI_Filter {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* label.SearchI_Filter_Chunking chunking */ 1:
          message.chunking = SearchI_Filter_Chunking.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.chunking,
          );
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`,
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d,
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: SearchI_Filter,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* label.SearchI_Filter_Chunking chunking = 1; */
    if (message.chunking)
      SearchI_Filter_Chunking.internalBinaryWrite(
        message.chunking,
        writer.tag(1, WireType.LengthDelimited).fork(),
        options,
      ).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer,
      );
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message label.SearchI_Filter
 */
export const SearchI_Filter = new SearchI_Filter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchI_Filter_Chunking$Type extends MessageType<SearchI_Filter_Chunking> {
  constructor() {
    super("label.SearchI_Filter_Chunking", [
      { no: 1, name: "perpage", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 2, name: "pointer", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
    ]);
  }
  create(
    value?: PartialMessage<SearchI_Filter_Chunking>,
  ): SearchI_Filter_Chunking {
    const message = { perpage: "", pointer: "" };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<SearchI_Filter_Chunking>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchI_Filter_Chunking,
  ): SearchI_Filter_Chunking {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string perpage */ 1:
          message.perpage = reader.string();
          break;
        case /* string pointer */ 2:
          message.pointer = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`,
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d,
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: SearchI_Filter_Chunking,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* string perpage = 1; */
    if (message.perpage !== "")
      writer.tag(1, WireType.LengthDelimited).string(message.perpage);
    /* string pointer = 2; */
    if (message.pointer !== "")
      writer.tag(2, WireType.LengthDelimited).string(message.pointer);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer,
      );
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message label.SearchI_Filter_Chunking
 */
export const SearchI_Filter_Chunking = new SearchI_Filter_Chunking$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchI_Object$Type extends MessageType<SearchI_Object> {
  constructor() {
    super("label.SearchI_Object", [
      {
        no: 1,
        name: "intern",
        kind: "map",
        K: 9 /*ScalarType.STRING*/,
        V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      },
      {
        no: 2,
        name: "public",
        kind: "message",
        T: () => SearchI_Object_Public,
      },
    ]);
  }
  create(value?: PartialMessage<SearchI_Object>): SearchI_Object {
    const message = { intern: {} };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<SearchI_Object>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchI_Object,
  ): SearchI_Object {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* map<string, string> intern */ 1:
          this.binaryReadMap1(message.intern, reader, options);
          break;
        case /* label.SearchI_Object_Public public */ 2:
          message.public = SearchI_Object_Public.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.public,
          );
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`,
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d,
            );
      }
    }
    return message;
  }
  private binaryReadMap1(
    map: SearchI_Object["intern"],
    reader: IBinaryReader,
    options: BinaryReadOptions,
  ): void {
    let len = reader.uint32(),
      end = reader.pos + len,
      key: keyof SearchI_Object["intern"] | undefined,
      val: SearchI_Object["intern"][any] | undefined;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case 1:
          key = reader.string();
          break;
        case 2:
          val = reader.string();
          break;
        default:
          throw new globalThis.Error(
            "unknown map entry field for field label.SearchI_Object.intern",
          );
      }
    }
    map[key ?? ""] = val ?? "";
  }
  internalBinaryWrite(
    message: SearchI_Object,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* map<string, string> intern = 1; */
    for (let k of Object.keys(message.intern))
      writer
        .tag(1, WireType.LengthDelimited)
        .fork()
        .tag(1, WireType.LengthDelimited)
        .string(k)
        .tag(2, WireType.LengthDelimited)
        .string(message.intern[k])
        .join();
    /* label.SearchI_Object_Public public = 2; */
    if (message.public)
      SearchI_Object_Public.internalBinaryWrite(
        message.public,
        writer.tag(2, WireType.LengthDelimited).fork(),
        options,
      ).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer,
      );
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message label.SearchI_Object
 */
export const SearchI_Object = new SearchI_Object$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchI_Object_Public$Type extends MessageType<SearchI_Object_Public> {
  constructor() {
    super("label.SearchI_Object_Public", []);
  }
  create(value?: PartialMessage<SearchI_Object_Public>): SearchI_Object_Public {
    const message = {};
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<SearchI_Object_Public>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchI_Object_Public,
  ): SearchI_Object_Public {
    return target ?? this.create();
  }
  internalBinaryWrite(
    message: SearchI_Object_Public,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer,
      );
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message label.SearchI_Object_Public
 */
export const SearchI_Object_Public = new SearchI_Object_Public$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO$Type extends MessageType<SearchO> {
  constructor() {
    super("label.SearchO", [
      { no: 1, name: "filter", kind: "message", T: () => SearchO_Filter },
      {
        no: 2,
        name: "object",
        kind: "message",
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => SearchO_Object,
      },
    ]);
  }
  create(value?: PartialMessage<SearchO>): SearchO {
    const message = { object: [] };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<SearchO>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchO,
  ): SearchO {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* label.SearchO_Filter filter */ 1:
          message.filter = SearchO_Filter.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.filter,
          );
          break;
        case /* repeated label.SearchO_Object object */ 2:
          message.object.push(
            SearchO_Object.internalBinaryRead(reader, reader.uint32(), options),
          );
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`,
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d,
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: SearchO,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* label.SearchO_Filter filter = 1; */
    if (message.filter)
      SearchO_Filter.internalBinaryWrite(
        message.filter,
        writer.tag(1, WireType.LengthDelimited).fork(),
        options,
      ).join();
    /* repeated label.SearchO_Object object = 2; */
    for (let i = 0; i < message.object.length; i++)
      SearchO_Object.internalBinaryWrite(
        message.object[i],
        writer.tag(2, WireType.LengthDelimited).fork(),
        options,
      ).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer,
      );
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message label.SearchO
 */
export const SearchO = new SearchO$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO_Filter$Type extends MessageType<SearchO_Filter> {
  constructor() {
    super("label.SearchO_Filter", []);
  }
  create(value?: PartialMessage<SearchO_Filter>): SearchO_Filter {
    const message = {};
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<SearchO_Filter>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchO_Filter,
  ): SearchO_Filter {
    return target ?? this.create();
  }
  internalBinaryWrite(
    message: SearchO_Filter,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer,
      );
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message label.SearchO_Filter
 */
export const SearchO_Filter = new SearchO_Filter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO_Object$Type extends MessageType<SearchO_Object> {
  constructor() {
    super("label.SearchO_Object", [
      {
        no: 1,
        name: "intern",
        kind: "map",
        K: 9 /*ScalarType.STRING*/,
        V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      },
      {
        no: 2,
        name: "public",
        kind: "message",
        T: () => SearchO_Object_Public,
      },
    ]);
  }
  create(value?: PartialMessage<SearchO_Object>): SearchO_Object {
    const message = { intern: {} };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<SearchO_Object>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchO_Object,
  ): SearchO_Object {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* map<string, string> intern */ 1:
          this.binaryReadMap1(message.intern, reader, options);
          break;
        case /* label.SearchO_Object_Public public */ 2:
          message.public = SearchO_Object_Public.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.public,
          );
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`,
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d,
            );
      }
    }
    return message;
  }
  private binaryReadMap1(
    map: SearchO_Object["intern"],
    reader: IBinaryReader,
    options: BinaryReadOptions,
  ): void {
    let len = reader.uint32(),
      end = reader.pos + len,
      key: keyof SearchO_Object["intern"] | undefined,
      val: SearchO_Object["intern"][any] | undefined;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case 1:
          key = reader.string();
          break;
        case 2:
          val = reader.string();
          break;
        default:
          throw new globalThis.Error(
            "unknown map entry field for field label.SearchO_Object.intern",
          );
      }
    }
    map[key ?? ""] = val ?? "";
  }
  internalBinaryWrite(
    message: SearchO_Object,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* map<string, string> intern = 1; */
    for (let k of Object.keys(message.intern))
      writer
        .tag(1, WireType.LengthDelimited)
        .fork()
        .tag(1, WireType.LengthDelimited)
        .string(k)
        .tag(2, WireType.LengthDelimited)
        .string(message.intern[k])
        .join();
    /* label.SearchO_Object_Public public = 2; */
    if (message.public)
      SearchO_Object_Public.internalBinaryWrite(
        message.public,
        writer.tag(2, WireType.LengthDelimited).fork(),
        options,
      ).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer,
      );
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message label.SearchO_Object
 */
export const SearchO_Object = new SearchO_Object$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO_Object_Public$Type extends MessageType<SearchO_Object_Public> {
  constructor() {
    super("label.SearchO_Object_Public", [
      { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 2, name: "user", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
    ]);
  }
  create(value?: PartialMessage<SearchO_Object_Public>): SearchO_Object_Public {
    const message = { name: "", user: "" };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<SearchO_Object_Public>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchO_Object_Public,
  ): SearchO_Object_Public {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string name */ 1:
          message.name = reader.string();
          break;
        case /* string user */ 2:
          message.user = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`,
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d,
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: SearchO_Object_Public,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* string name = 1; */
    if (message.name !== "")
      writer.tag(1, WireType.LengthDelimited).string(message.name);
    /* string user = 2; */
    if (message.user !== "")
      writer.tag(2, WireType.LengthDelimited).string(message.user);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer,
      );
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message label.SearchO_Object_Public
 */
export const SearchO_Object_Public = new SearchO_Object_Public$Type();
