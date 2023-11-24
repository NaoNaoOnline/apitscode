// @generated by protobuf-ts 2.9.1 with parameter output_javascript
// @generated from protobuf file "pbf/subscription/update.proto" (package "subscription", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// @generated message type with reflection information, may provide speed optimized methods
class UpdateI$Type extends MessageType {
    constructor() {
        super("subscription.UpdateI", [
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
                case /* subscription.UpdateI_Filter filter */ 100:
                    message.filter = UpdateI_Filter.internalBinaryRead(reader, reader.uint32(), options, message.filter);
                    break;
                case /* repeated subscription.UpdateI_Object object */ 200:
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
        /* subscription.UpdateI_Filter filter = 100; */
        if (message.filter)
            UpdateI_Filter.internalBinaryWrite(message.filter, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* repeated subscription.UpdateI_Object object = 200; */
        for (let i = 0; i < message.object.length; i++)
            UpdateI_Object.internalBinaryWrite(message.object[i], writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message subscription.UpdateI
 */
export const UpdateI = new UpdateI$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateI_Filter$Type extends MessageType {
    constructor() {
        super("subscription.UpdateI_Filter", []);
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
 * @generated MessageType for protobuf message subscription.UpdateI_Filter
 */
export const UpdateI_Filter = new UpdateI_Filter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateI_Object$Type extends MessageType {
    constructor() {
        super("subscription.UpdateI_Object", [
            { no: 100, name: "intern", kind: "message", T: () => UpdateI_Object_Intern },
            { no: 200, name: "public", kind: "message", T: () => UpdateI_Object_Public },
            { no: 300, name: "symbol", kind: "message", T: () => UpdateI_Object_Symbol },
            { no: 400, name: "update", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => UpdateI_Object_Update }
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
                case /* subscription.UpdateI_Object_Intern intern */ 100:
                    message.intern = UpdateI_Object_Intern.internalBinaryRead(reader, reader.uint32(), options, message.intern);
                    break;
                case /* subscription.UpdateI_Object_Public public */ 200:
                    message.public = UpdateI_Object_Public.internalBinaryRead(reader, reader.uint32(), options, message.public);
                    break;
                case /* subscription.UpdateI_Object_Symbol symbol */ 300:
                    message.symbol = UpdateI_Object_Symbol.internalBinaryRead(reader, reader.uint32(), options, message.symbol);
                    break;
                case /* repeated subscription.UpdateI_Object_Update update */ 400:
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
        /* subscription.UpdateI_Object_Intern intern = 100; */
        if (message.intern)
            UpdateI_Object_Intern.internalBinaryWrite(message.intern, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* subscription.UpdateI_Object_Public public = 200; */
        if (message.public)
            UpdateI_Object_Public.internalBinaryWrite(message.public, writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        /* subscription.UpdateI_Object_Symbol symbol = 300; */
        if (message.symbol)
            UpdateI_Object_Symbol.internalBinaryWrite(message.symbol, writer.tag(300, WireType.LengthDelimited).fork(), options).join();
        /* repeated subscription.UpdateI_Object_Update update = 400; */
        for (let i = 0; i < message.update.length; i++)
            UpdateI_Object_Update.internalBinaryWrite(message.update[i], writer.tag(400, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message subscription.UpdateI_Object
 */
export const UpdateI_Object = new UpdateI_Object$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateI_Object_Intern$Type extends MessageType {
    constructor() {
        super("subscription.UpdateI_Object_Intern", []);
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
 * @generated MessageType for protobuf message subscription.UpdateI_Object_Intern
 */
export const UpdateI_Object_Intern = new UpdateI_Object_Intern$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateI_Object_Public$Type extends MessageType {
    constructor() {
        super("subscription.UpdateI_Object_Public", []);
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
 * @generated MessageType for protobuf message subscription.UpdateI_Object_Public
 */
export const UpdateI_Object_Public = new UpdateI_Object_Public$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateI_Object_Symbol$Type extends MessageType {
    constructor() {
        super("subscription.UpdateI_Object_Symbol", [
            { no: 100, name: "pntr", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 200, name: "sync", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { pntr: "", sync: "" };
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
                case /* string pntr */ 100:
                    message.pntr = reader.string();
                    break;
                case /* string sync */ 200:
                    message.sync = reader.string();
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
        /* string pntr = 100; */
        if (message.pntr !== "")
            writer.tag(100, WireType.LengthDelimited).string(message.pntr);
        /* string sync = 200; */
        if (message.sync !== "")
            writer.tag(200, WireType.LengthDelimited).string(message.sync);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message subscription.UpdateI_Object_Symbol
 */
export const UpdateI_Object_Symbol = new UpdateI_Object_Symbol$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateI_Object_Update$Type extends MessageType {
    constructor() {
        super("subscription.UpdateI_Object_Update", []);
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
 * @generated MessageType for protobuf message subscription.UpdateI_Object_Update
 */
export const UpdateI_Object_Update = new UpdateI_Object_Update$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateO$Type extends MessageType {
    constructor() {
        super("subscription.UpdateO", [
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
                case /* subscription.UpdateO_Filter filter */ 100:
                    message.filter = UpdateO_Filter.internalBinaryRead(reader, reader.uint32(), options, message.filter);
                    break;
                case /* repeated subscription.UpdateO_Object object */ 200:
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
        /* subscription.UpdateO_Filter filter = 100; */
        if (message.filter)
            UpdateO_Filter.internalBinaryWrite(message.filter, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* repeated subscription.UpdateO_Object object = 200; */
        for (let i = 0; i < message.object.length; i++)
            UpdateO_Object.internalBinaryWrite(message.object[i], writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message subscription.UpdateO
 */
export const UpdateO = new UpdateO$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateO_Filter$Type extends MessageType {
    constructor() {
        super("subscription.UpdateO_Filter", []);
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
 * @generated MessageType for protobuf message subscription.UpdateO_Filter
 */
export const UpdateO_Filter = new UpdateO_Filter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateO_Object$Type extends MessageType {
    constructor() {
        super("subscription.UpdateO_Object", [
            { no: 100, name: "intern", kind: "message", T: () => UpdateO_Object_Intern },
            { no: 200, name: "public", kind: "message", T: () => UpdateO_Object_Public },
            { no: 300, name: "symbol", kind: "message", T: () => UpdateO_Object_Symbol }
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
                case /* subscription.UpdateO_Object_Intern intern */ 100:
                    message.intern = UpdateO_Object_Intern.internalBinaryRead(reader, reader.uint32(), options, message.intern);
                    break;
                case /* subscription.UpdateO_Object_Public public */ 200:
                    message.public = UpdateO_Object_Public.internalBinaryRead(reader, reader.uint32(), options, message.public);
                    break;
                case /* subscription.UpdateO_Object_Symbol symbol */ 300:
                    message.symbol = UpdateO_Object_Symbol.internalBinaryRead(reader, reader.uint32(), options, message.symbol);
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
        /* subscription.UpdateO_Object_Intern intern = 100; */
        if (message.intern)
            UpdateO_Object_Intern.internalBinaryWrite(message.intern, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* subscription.UpdateO_Object_Public public = 200; */
        if (message.public)
            UpdateO_Object_Public.internalBinaryWrite(message.public, writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        /* subscription.UpdateO_Object_Symbol symbol = 300; */
        if (message.symbol)
            UpdateO_Object_Symbol.internalBinaryWrite(message.symbol, writer.tag(300, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message subscription.UpdateO_Object
 */
export const UpdateO_Object = new UpdateO_Object$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateO_Object_Intern$Type extends MessageType {
    constructor() {
        super("subscription.UpdateO_Object_Intern", [
            { no: 100, name: "stts", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { stts: "" };
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
                case /* string stts */ 100:
                    message.stts = reader.string();
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
        /* string stts = 100; */
        if (message.stts !== "")
            writer.tag(100, WireType.LengthDelimited).string(message.stts);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message subscription.UpdateO_Object_Intern
 */
export const UpdateO_Object_Intern = new UpdateO_Object_Intern$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateO_Object_Public$Type extends MessageType {
    constructor() {
        super("subscription.UpdateO_Object_Public", []);
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
 * @generated MessageType for protobuf message subscription.UpdateO_Object_Public
 */
export const UpdateO_Object_Public = new UpdateO_Object_Public$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateO_Object_Symbol$Type extends MessageType {
    constructor() {
        super("subscription.UpdateO_Object_Symbol", [
            { no: 100, name: "pntr", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { pntr: "" };
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
                case /* string pntr */ 100:
                    message.pntr = reader.string();
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
        /* string pntr = 100; */
        if (message.pntr !== "")
            writer.tag(100, WireType.LengthDelimited).string(message.pntr);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message subscription.UpdateO_Object_Symbol
 */
export const UpdateO_Object_Symbol = new UpdateO_Object_Symbol$Type();
