// @generated by protobuf-ts 2.9.0 with parameter output_javascript
// @generated from protobuf file "pbf/event/delete.proto" (package "event", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// @generated message type with reflection information, may provide speed optimized methods
class DeleteI$Type extends MessageType {
    constructor() {
        super("event.DeleteI", [
            { no: 1, name: "filter", kind: "message", T: () => DeleteI_Filter },
            { no: 2, name: "object", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => DeleteI_Object }
        ]);
    }
    create(value) {
        const message = { object: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* event.DeleteI_Filter filter */ 1:
                    message.filter = DeleteI_Filter.internalBinaryRead(reader, reader.uint32(), options, message.filter);
                    break;
                case /* repeated event.DeleteI_Object object */ 2:
                    message.object.push(DeleteI_Object.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* event.DeleteI_Filter filter = 1; */
        if (message.filter)
            DeleteI_Filter.internalBinaryWrite(message.filter, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated event.DeleteI_Object object = 2; */
        for (let i = 0; i < message.object.length; i++)
            DeleteI_Object.internalBinaryWrite(message.object[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message event.DeleteI
 */
export const DeleteI = new DeleteI$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteI_Filter$Type extends MessageType {
    constructor() {
        super("event.DeleteI_Filter", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message event.DeleteI_Filter
 */
export const DeleteI_Filter = new DeleteI_Filter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteI_Object$Type extends MessageType {
    constructor() {
        super("event.DeleteI_Object", [
            { no: 1, name: "intern", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } },
            { no: 2, name: "public", kind: "message", T: () => DeleteI_Object_Public }
        ]);
    }
    create(value) {
        const message = { intern: {} };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<string, string> intern */ 1:
                    this.binaryReadMap1(message.intern, reader, options);
                    break;
                case /* event.DeleteI_Object_Public public */ 2:
                    message.public = DeleteI_Object_Public.internalBinaryRead(reader, reader.uint32(), options, message.public);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap1(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = reader.string();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field event.DeleteI_Object.intern");
            }
        }
        map[key ?? ""] = val ?? "";
    }
    internalBinaryWrite(message, writer, options) {
        /* map<string, string> intern = 1; */
        for (let k of Object.keys(message.intern))
            writer.tag(1, WireType.LengthDelimited).fork().tag(1, WireType.LengthDelimited).string(k).tag(2, WireType.LengthDelimited).string(message.intern[k]).join();
        /* event.DeleteI_Object_Public public = 2; */
        if (message.public)
            DeleteI_Object_Public.internalBinaryWrite(message.public, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message event.DeleteI_Object
 */
export const DeleteI_Object = new DeleteI_Object$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteI_Object_Public$Type extends MessageType {
    constructor() {
        super("event.DeleteI_Object_Public", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message event.DeleteI_Object_Public
 */
export const DeleteI_Object_Public = new DeleteI_Object_Public$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteO$Type extends MessageType {
    constructor() {
        super("event.DeleteO", [
            { no: 1, name: "filter", kind: "message", T: () => DeleteO_Filter },
            { no: 2, name: "object", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => DeleteO_Object }
        ]);
    }
    create(value) {
        const message = { object: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* event.DeleteO_Filter filter */ 1:
                    message.filter = DeleteO_Filter.internalBinaryRead(reader, reader.uint32(), options, message.filter);
                    break;
                case /* repeated event.DeleteO_Object object */ 2:
                    message.object.push(DeleteO_Object.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* event.DeleteO_Filter filter = 1; */
        if (message.filter)
            DeleteO_Filter.internalBinaryWrite(message.filter, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated event.DeleteO_Object object = 2; */
        for (let i = 0; i < message.object.length; i++)
            DeleteO_Object.internalBinaryWrite(message.object[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message event.DeleteO
 */
export const DeleteO = new DeleteO$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteO_Filter$Type extends MessageType {
    constructor() {
        super("event.DeleteO_Filter", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message event.DeleteO_Filter
 */
export const DeleteO_Filter = new DeleteO_Filter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteO_Object$Type extends MessageType {
    constructor() {
        super("event.DeleteO_Object", [
            { no: 1, name: "intern", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } },
            { no: 2, name: "public", kind: "message", T: () => DeleteO_Object_Public }
        ]);
    }
    create(value) {
        const message = { intern: {} };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<string, string> intern */ 1:
                    this.binaryReadMap1(message.intern, reader, options);
                    break;
                case /* event.DeleteO_Object_Public public */ 2:
                    message.public = DeleteO_Object_Public.internalBinaryRead(reader, reader.uint32(), options, message.public);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap1(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = reader.string();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field event.DeleteO_Object.intern");
            }
        }
        map[key ?? ""] = val ?? "";
    }
    internalBinaryWrite(message, writer, options) {
        /* map<string, string> intern = 1; */
        for (let k of Object.keys(message.intern))
            writer.tag(1, WireType.LengthDelimited).fork().tag(1, WireType.LengthDelimited).string(k).tag(2, WireType.LengthDelimited).string(message.intern[k]).join();
        /* event.DeleteO_Object_Public public = 2; */
        if (message.public)
            DeleteO_Object_Public.internalBinaryWrite(message.public, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message event.DeleteO_Object
 */
export const DeleteO_Object = new DeleteO_Object$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteO_Object_Public$Type extends MessageType {
    constructor() {
        super("event.DeleteO_Object_Public", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message event.DeleteO_Object_Public
 */
export const DeleteO_Object_Public = new DeleteO_Object_Public$Type();
