// @generated by protobuf-ts 2.9.0
// @generated from protobuf file "pbf/host/create.proto" (package "host", syntax proto3)
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
 * CreateI is the input for creating hosts.
 *
 *     {
 *         "object": [
 *             {
 *                 "public": {
 *                     "disc": "https://discord.gg/Flashbots",
 *                     "name": "Flashbots",
 *                     "twit": "https://twitter.com/Flashbots",
 *                     "user": "551265"
 *                 }
 *             }
 *         ]
 *     }
 *
 *
 * @generated from protobuf message host.CreateI
 */
export interface CreateI {
  /**
   * @generated from protobuf field: host.CreateI_Filter filter = 1;
   */
  filter?: CreateI_Filter;
  /**
   * @generated from protobuf field: repeated host.CreateI_Object object = 2;
   */
  object: CreateI_Object[];
}
/**
 * @generated from protobuf message host.CreateI_Filter
 */
export interface CreateI_Filter {}
/**
 * @generated from protobuf message host.CreateI_Object
 */
export interface CreateI_Object {
  /**
   * @generated from protobuf field: map<string, string> intern = 1;
   */
  intern: {
    [key: string]: string;
  };
  /**
   * @generated from protobuf field: host.CreateI_Object_Public public = 2;
   */
  public?: CreateI_Object_Public;
}
/**
 * @generated from protobuf message host.CreateI_Object_Public
 */
export interface CreateI_Object_Public {
  /**
   * disc is the host's Discord link.
   *
   * @generated from protobuf field: string disc = 1;
   */
  disc: string;
  /**
   * name is the host name.
   *
   * @generated from protobuf field: string name = 2;
   */
  name: string;
  /**
   * twit is the host's Twitter link.
   *
   * @generated from protobuf field: string twit = 3;
   */
  twit: string;
  /**
   * user is the user ID creating this host.
   *
   * @generated from protobuf field: string user = 4;
   */
  user: string;
}
/**
 * CreateO is the output for creating hosts.
 *
 *     {
 *         "object": [
 *             {
 *                 "intern": {
 *                     "host.naonao.online/id": "<id>",
 *                     "host.naonao.online/created": "<unix>"
 *                 }
 *             }
 *         ]
 *     }
 *
 *
 * @generated from protobuf message host.CreateO
 */
export interface CreateO {
  /**
   * @generated from protobuf field: host.CreateO_Filter filter = 1;
   */
  filter?: CreateO_Filter;
  /**
   * @generated from protobuf field: repeated host.CreateO_Object object = 2;
   */
  object: CreateO_Object[];
}
/**
 * @generated from protobuf message host.CreateO_Filter
 */
export interface CreateO_Filter {}
/**
 * @generated from protobuf message host.CreateO_Object
 */
export interface CreateO_Object {
  /**
   * @generated from protobuf field: map<string, string> intern = 1;
   */
  intern: {
    [key: string]: string;
  };
  /**
   * @generated from protobuf field: host.CreateO_Object_Public public = 2;
   */
  public?: CreateO_Object_Public;
}
/**
 * @generated from protobuf message host.CreateO_Object_Public
 */
export interface CreateO_Object_Public {}
// @generated message type with reflection information, may provide speed optimized methods
class CreateI$Type extends MessageType<CreateI> {
  constructor() {
    super("host.CreateI", [
      { no: 1, name: "filter", kind: "message", T: () => CreateI_Filter },
      {
        no: 2,
        name: "object",
        kind: "message",
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => CreateI_Object,
      },
    ]);
  }
  create(value?: PartialMessage<CreateI>): CreateI {
    const message = { object: [] };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<CreateI>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: CreateI,
  ): CreateI {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* host.CreateI_Filter filter */ 1:
          message.filter = CreateI_Filter.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.filter,
          );
          break;
        case /* repeated host.CreateI_Object object */ 2:
          message.object.push(
            CreateI_Object.internalBinaryRead(reader, reader.uint32(), options),
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
    message: CreateI,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* host.CreateI_Filter filter = 1; */
    if (message.filter)
      CreateI_Filter.internalBinaryWrite(
        message.filter,
        writer.tag(1, WireType.LengthDelimited).fork(),
        options,
      ).join();
    /* repeated host.CreateI_Object object = 2; */
    for (let i = 0; i < message.object.length; i++)
      CreateI_Object.internalBinaryWrite(
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
 * @generated MessageType for protobuf message host.CreateI
 */
export const CreateI = new CreateI$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateI_Filter$Type extends MessageType<CreateI_Filter> {
  constructor() {
    super("host.CreateI_Filter", []);
  }
  create(value?: PartialMessage<CreateI_Filter>): CreateI_Filter {
    const message = {};
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<CreateI_Filter>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: CreateI_Filter,
  ): CreateI_Filter {
    return target ?? this.create();
  }
  internalBinaryWrite(
    message: CreateI_Filter,
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
 * @generated MessageType for protobuf message host.CreateI_Filter
 */
export const CreateI_Filter = new CreateI_Filter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateI_Object$Type extends MessageType<CreateI_Object> {
  constructor() {
    super("host.CreateI_Object", [
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
        T: () => CreateI_Object_Public,
      },
    ]);
  }
  create(value?: PartialMessage<CreateI_Object>): CreateI_Object {
    const message = { intern: {} };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<CreateI_Object>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: CreateI_Object,
  ): CreateI_Object {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* map<string, string> intern */ 1:
          this.binaryReadMap1(message.intern, reader, options);
          break;
        case /* host.CreateI_Object_Public public */ 2:
          message.public = CreateI_Object_Public.internalBinaryRead(
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
    map: CreateI_Object["intern"],
    reader: IBinaryReader,
    options: BinaryReadOptions,
  ): void {
    let len = reader.uint32(),
      end = reader.pos + len,
      key: keyof CreateI_Object["intern"] | undefined,
      val: CreateI_Object["intern"][any] | undefined;
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
            "unknown map entry field for field host.CreateI_Object.intern",
          );
      }
    }
    map[key ?? ""] = val ?? "";
  }
  internalBinaryWrite(
    message: CreateI_Object,
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
    /* host.CreateI_Object_Public public = 2; */
    if (message.public)
      CreateI_Object_Public.internalBinaryWrite(
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
 * @generated MessageType for protobuf message host.CreateI_Object
 */
export const CreateI_Object = new CreateI_Object$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateI_Object_Public$Type extends MessageType<CreateI_Object_Public> {
  constructor() {
    super("host.CreateI_Object_Public", [
      { no: 1, name: "disc", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 3, name: "twit", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 4, name: "user", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
    ]);
  }
  create(value?: PartialMessage<CreateI_Object_Public>): CreateI_Object_Public {
    const message = { disc: "", name: "", twit: "", user: "" };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<CreateI_Object_Public>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: CreateI_Object_Public,
  ): CreateI_Object_Public {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string disc */ 1:
          message.disc = reader.string();
          break;
        case /* string name */ 2:
          message.name = reader.string();
          break;
        case /* string twit */ 3:
          message.twit = reader.string();
          break;
        case /* string user */ 4:
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
    message: CreateI_Object_Public,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* string disc = 1; */
    if (message.disc !== "")
      writer.tag(1, WireType.LengthDelimited).string(message.disc);
    /* string name = 2; */
    if (message.name !== "")
      writer.tag(2, WireType.LengthDelimited).string(message.name);
    /* string twit = 3; */
    if (message.twit !== "")
      writer.tag(3, WireType.LengthDelimited).string(message.twit);
    /* string user = 4; */
    if (message.user !== "")
      writer.tag(4, WireType.LengthDelimited).string(message.user);
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
 * @generated MessageType for protobuf message host.CreateI_Object_Public
 */
export const CreateI_Object_Public = new CreateI_Object_Public$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateO$Type extends MessageType<CreateO> {
  constructor() {
    super("host.CreateO", [
      { no: 1, name: "filter", kind: "message", T: () => CreateO_Filter },
      {
        no: 2,
        name: "object",
        kind: "message",
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => CreateO_Object,
      },
    ]);
  }
  create(value?: PartialMessage<CreateO>): CreateO {
    const message = { object: [] };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<CreateO>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: CreateO,
  ): CreateO {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* host.CreateO_Filter filter */ 1:
          message.filter = CreateO_Filter.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.filter,
          );
          break;
        case /* repeated host.CreateO_Object object */ 2:
          message.object.push(
            CreateO_Object.internalBinaryRead(reader, reader.uint32(), options),
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
    message: CreateO,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* host.CreateO_Filter filter = 1; */
    if (message.filter)
      CreateO_Filter.internalBinaryWrite(
        message.filter,
        writer.tag(1, WireType.LengthDelimited).fork(),
        options,
      ).join();
    /* repeated host.CreateO_Object object = 2; */
    for (let i = 0; i < message.object.length; i++)
      CreateO_Object.internalBinaryWrite(
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
 * @generated MessageType for protobuf message host.CreateO
 */
export const CreateO = new CreateO$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateO_Filter$Type extends MessageType<CreateO_Filter> {
  constructor() {
    super("host.CreateO_Filter", []);
  }
  create(value?: PartialMessage<CreateO_Filter>): CreateO_Filter {
    const message = {};
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<CreateO_Filter>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: CreateO_Filter,
  ): CreateO_Filter {
    return target ?? this.create();
  }
  internalBinaryWrite(
    message: CreateO_Filter,
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
 * @generated MessageType for protobuf message host.CreateO_Filter
 */
export const CreateO_Filter = new CreateO_Filter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateO_Object$Type extends MessageType<CreateO_Object> {
  constructor() {
    super("host.CreateO_Object", [
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
        T: () => CreateO_Object_Public,
      },
    ]);
  }
  create(value?: PartialMessage<CreateO_Object>): CreateO_Object {
    const message = { intern: {} };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<CreateO_Object>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: CreateO_Object,
  ): CreateO_Object {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* map<string, string> intern */ 1:
          this.binaryReadMap1(message.intern, reader, options);
          break;
        case /* host.CreateO_Object_Public public */ 2:
          message.public = CreateO_Object_Public.internalBinaryRead(
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
    map: CreateO_Object["intern"],
    reader: IBinaryReader,
    options: BinaryReadOptions,
  ): void {
    let len = reader.uint32(),
      end = reader.pos + len,
      key: keyof CreateO_Object["intern"] | undefined,
      val: CreateO_Object["intern"][any] | undefined;
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
            "unknown map entry field for field host.CreateO_Object.intern",
          );
      }
    }
    map[key ?? ""] = val ?? "";
  }
  internalBinaryWrite(
    message: CreateO_Object,
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
    /* host.CreateO_Object_Public public = 2; */
    if (message.public)
      CreateO_Object_Public.internalBinaryWrite(
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
 * @generated MessageType for protobuf message host.CreateO_Object
 */
export const CreateO_Object = new CreateO_Object$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateO_Object_Public$Type extends MessageType<CreateO_Object_Public> {
  constructor() {
    super("host.CreateO_Object_Public", []);
  }
  create(value?: PartialMessage<CreateO_Object_Public>): CreateO_Object_Public {
    const message = {};
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<CreateO_Object_Public>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: CreateO_Object_Public,
  ): CreateO_Object_Public {
    return target ?? this.create();
  }
  internalBinaryWrite(
    message: CreateO_Object_Public,
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
 * @generated MessageType for protobuf message host.CreateO_Object_Public
 */
export const CreateO_Object_Public = new CreateO_Object_Public$Type();
