// @generated by protobuf-ts 2.9.3 with parameter output_javascript
// @generated from protobuf file "pbf/policy/delete.proto" (package "policy", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// @generated message type with reflection information, may provide speed optimized methods
class DeleteI$Type extends MessageType {
    constructor() {
        super("policy.DeleteI", [
            { no: 100, name: "filter", kind: "message", T: () => DeleteI_Filter },
            { no: 200, name: "object", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => DeleteI_Object }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.object = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* policy.DeleteI_Filter filter */ 100:
                    message.filter = DeleteI_Filter.internalBinaryRead(reader, reader.uint32(), options, message.filter);
                    break;
                case /* repeated policy.DeleteI_Object object */ 200:
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
        /* policy.DeleteI_Filter filter = 100; */
        if (message.filter)
            DeleteI_Filter.internalBinaryWrite(message.filter, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* repeated policy.DeleteI_Object object = 200; */
        for (let i = 0; i < message.object.length; i++)
            DeleteI_Object.internalBinaryWrite(message.object[i], writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message policy.DeleteI
 */
export const DeleteI = new DeleteI$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteI_Filter$Type extends MessageType {
    constructor() {
        super("policy.DeleteI_Filter", []);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
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
 * @generated MessageType for protobuf message policy.DeleteI_Filter
 */
export const DeleteI_Filter = new DeleteI_Filter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteI_Object$Type extends MessageType {
    constructor() {
        super("policy.DeleteI_Object", [
            { no: 100, name: "intern", kind: "message", T: () => DeleteI_Object_Intern },
            { no: 200, name: "public", kind: "message", T: () => DeleteI_Object_Public }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* policy.DeleteI_Object_Intern intern */ 100:
                    message.intern = DeleteI_Object_Intern.internalBinaryRead(reader, reader.uint32(), options, message.intern);
                    break;
                case /* policy.DeleteI_Object_Public public */ 200:
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
    internalBinaryWrite(message, writer, options) {
        /* policy.DeleteI_Object_Intern intern = 100; */
        if (message.intern)
            DeleteI_Object_Intern.internalBinaryWrite(message.intern, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* policy.DeleteI_Object_Public public = 200; */
        if (message.public)
            DeleteI_Object_Public.internalBinaryWrite(message.public, writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message policy.DeleteI_Object
 */
export const DeleteI_Object = new DeleteI_Object$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteI_Object_Intern$Type extends MessageType {
    constructor() {
        super("policy.DeleteI_Object_Intern", []);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
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
 * @generated MessageType for protobuf message policy.DeleteI_Object_Intern
 */
export const DeleteI_Object_Intern = new DeleteI_Object_Intern$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteI_Object_Public$Type extends MessageType {
    constructor() {
        super("policy.DeleteI_Object_Public", []);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
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
 * @generated MessageType for protobuf message policy.DeleteI_Object_Public
 */
export const DeleteI_Object_Public = new DeleteI_Object_Public$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteO$Type extends MessageType {
    constructor() {
        super("policy.DeleteO", [
            { no: 100, name: "filter", kind: "message", T: () => DeleteO_Filter },
            { no: 200, name: "object", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => DeleteO_Object }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.object = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* policy.DeleteO_Filter filter */ 100:
                    message.filter = DeleteO_Filter.internalBinaryRead(reader, reader.uint32(), options, message.filter);
                    break;
                case /* repeated policy.DeleteO_Object object */ 200:
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
        /* policy.DeleteO_Filter filter = 100; */
        if (message.filter)
            DeleteO_Filter.internalBinaryWrite(message.filter, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* repeated policy.DeleteO_Object object = 200; */
        for (let i = 0; i < message.object.length; i++)
            DeleteO_Object.internalBinaryWrite(message.object[i], writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message policy.DeleteO
 */
export const DeleteO = new DeleteO$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteO_Filter$Type extends MessageType {
    constructor() {
        super("policy.DeleteO_Filter", []);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
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
 * @generated MessageType for protobuf message policy.DeleteO_Filter
 */
export const DeleteO_Filter = new DeleteO_Filter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteO_Object$Type extends MessageType {
    constructor() {
        super("policy.DeleteO_Object", [
            { no: 100, name: "intern", kind: "message", T: () => DeleteO_Object_Intern },
            { no: 200, name: "public", kind: "message", T: () => DeleteO_Object_Public }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* policy.DeleteO_Object_Intern intern */ 100:
                    message.intern = DeleteO_Object_Intern.internalBinaryRead(reader, reader.uint32(), options, message.intern);
                    break;
                case /* policy.DeleteO_Object_Public public */ 200:
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
    internalBinaryWrite(message, writer, options) {
        /* policy.DeleteO_Object_Intern intern = 100; */
        if (message.intern)
            DeleteO_Object_Intern.internalBinaryWrite(message.intern, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* policy.DeleteO_Object_Public public = 200; */
        if (message.public)
            DeleteO_Object_Public.internalBinaryWrite(message.public, writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message policy.DeleteO_Object
 */
export const DeleteO_Object = new DeleteO_Object$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteO_Object_Intern$Type extends MessageType {
    constructor() {
        super("policy.DeleteO_Object_Intern", []);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
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
 * @generated MessageType for protobuf message policy.DeleteO_Object_Intern
 */
export const DeleteO_Object_Intern = new DeleteO_Object_Intern$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteO_Object_Public$Type extends MessageType {
    constructor() {
        super("policy.DeleteO_Object_Public", []);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
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
 * @generated MessageType for protobuf message policy.DeleteO_Object_Public
 */
export const DeleteO_Object_Public = new DeleteO_Object_Public$Type();
