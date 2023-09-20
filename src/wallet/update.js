// @generated by protobuf-ts 2.9.1 with parameter output_javascript
// @generated from protobuf file "pbf/wallet/update.proto" (package "wallet", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// @generated message type with reflection information, may provide speed optimized methods
class UpdateI$Type extends MessageType {
    constructor() {
        super("wallet.UpdateI", [
            { no: 100, name: "filter", kind: "message", T: () => UpdateI_Filter },
            { no: 200, name: "object", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => UpdateI_Object }
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
                case /* wallet.UpdateI_Filter filter */ 100:
                    message.filter = UpdateI_Filter.internalBinaryRead(reader, reader.uint32(), options, message.filter);
                    break;
                case /* repeated wallet.UpdateI_Object object */ 200:
                    message.object.push(UpdateI_Object.internalBinaryRead(reader, reader.uint32(), options));
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
        /* wallet.UpdateI_Filter filter = 100; */
        if (message.filter)
            UpdateI_Filter.internalBinaryWrite(message.filter, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* repeated wallet.UpdateI_Object object = 200; */
        for (let i = 0; i < message.object.length; i++)
            UpdateI_Object.internalBinaryWrite(message.object[i], writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message wallet.UpdateI
 */
export const UpdateI = new UpdateI$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateI_Filter$Type extends MessageType {
    constructor() {
        super("wallet.UpdateI_Filter", []);
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
 * @generated MessageType for protobuf message wallet.UpdateI_Filter
 */
export const UpdateI_Filter = new UpdateI_Filter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateI_Object$Type extends MessageType {
    constructor() {
        super("wallet.UpdateI_Object", [
            { no: 100, name: "intern", kind: "message", T: () => UpdateI_Object_Intern },
            { no: 200, name: "update", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => UpdateI_Object_Update }
        ]);
    }
    create(value) {
        const message = { update: [] };
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
                case /* wallet.UpdateI_Object_Intern intern */ 100:
                    message.intern = UpdateI_Object_Intern.internalBinaryRead(reader, reader.uint32(), options, message.intern);
                    break;
                case /* repeated wallet.UpdateI_Object_Update update */ 200:
                    message.update.push(UpdateI_Object_Update.internalBinaryRead(reader, reader.uint32(), options));
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
        /* wallet.UpdateI_Object_Intern intern = 100; */
        if (message.intern)
            UpdateI_Object_Intern.internalBinaryWrite(message.intern, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* repeated wallet.UpdateI_Object_Update update = 200; */
        for (let i = 0; i < message.update.length; i++)
            UpdateI_Object_Update.internalBinaryWrite(message.update[i], writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message wallet.UpdateI_Object
 */
export const UpdateI_Object = new UpdateI_Object$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateI_Object_Intern$Type extends MessageType {
    constructor() {
        super("wallet.UpdateI_Object_Intern", []);
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
 * @generated MessageType for protobuf message wallet.UpdateI_Object_Intern
 */
export const UpdateI_Object_Intern = new UpdateI_Object_Intern$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateI_Object_Update$Type extends MessageType {
    constructor() {
        super("wallet.UpdateI_Object_Update", []);
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
 * @generated MessageType for protobuf message wallet.UpdateI_Object_Update
 */
export const UpdateI_Object_Update = new UpdateI_Object_Update$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateO$Type extends MessageType {
    constructor() {
        super("wallet.UpdateO", [
            { no: 100, name: "filter", kind: "message", T: () => UpdateO_Filter },
            { no: 200, name: "object", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => UpdateO_Object }
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
                case /* wallet.UpdateO_Filter filter */ 100:
                    message.filter = UpdateO_Filter.internalBinaryRead(reader, reader.uint32(), options, message.filter);
                    break;
                case /* repeated wallet.UpdateO_Object object */ 200:
                    message.object.push(UpdateO_Object.internalBinaryRead(reader, reader.uint32(), options));
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
        /* wallet.UpdateO_Filter filter = 100; */
        if (message.filter)
            UpdateO_Filter.internalBinaryWrite(message.filter, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* repeated wallet.UpdateO_Object object = 200; */
        for (let i = 0; i < message.object.length; i++)
            UpdateO_Object.internalBinaryWrite(message.object[i], writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message wallet.UpdateO
 */
export const UpdateO = new UpdateO$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateO_Filter$Type extends MessageType {
    constructor() {
        super("wallet.UpdateO_Filter", []);
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
 * @generated MessageType for protobuf message wallet.UpdateO_Filter
 */
export const UpdateO_Filter = new UpdateO_Filter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateO_Object$Type extends MessageType {
    constructor() {
        super("wallet.UpdateO_Object", [
            { no: 100, name: "intern", kind: "message", T: () => UpdateO_Object_Intern },
            { no: 200, name: "public", kind: "message", T: () => UpdateO_Object_Public }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* wallet.UpdateO_Object_Intern intern */ 100:
                    message.intern = UpdateO_Object_Intern.internalBinaryRead(reader, reader.uint32(), options, message.intern);
                    break;
                case /* wallet.UpdateO_Object_Public public */ 200:
                    message.public = UpdateO_Object_Public.internalBinaryRead(reader, reader.uint32(), options, message.public);
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
        /* wallet.UpdateO_Object_Intern intern = 100; */
        if (message.intern)
            UpdateO_Object_Intern.internalBinaryWrite(message.intern, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* wallet.UpdateO_Object_Public public = 200; */
        if (message.public)
            UpdateO_Object_Public.internalBinaryWrite(message.public, writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message wallet.UpdateO_Object
 */
export const UpdateO_Object = new UpdateO_Object$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateO_Object_Intern$Type extends MessageType {
    constructor() {
        super("wallet.UpdateO_Object_Intern", []);
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
 * @generated MessageType for protobuf message wallet.UpdateO_Object_Intern
 */
export const UpdateO_Object_Intern = new UpdateO_Object_Intern$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateO_Object_Public$Type extends MessageType {
    constructor() {
        super("wallet.UpdateO_Object_Public", []);
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
 * @generated MessageType for protobuf message wallet.UpdateO_Object_Public
 */
export const UpdateO_Object_Public = new UpdateO_Object_Public$Type();