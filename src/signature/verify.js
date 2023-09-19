// @generated by protobuf-ts 2.9.1 with parameter output_javascript
// @generated from protobuf file "pbf/signature/verify.proto" (package "signature", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// @generated message type with reflection information, may provide speed optimized methods
class VerifyI$Type extends MessageType {
    constructor() {
        super("signature.VerifyI", [
            { no: 100, name: "filter", kind: "message", T: () => VerifyI_Filter },
            { no: 200, name: "object", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => VerifyI_Object }
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
                case /* signature.VerifyI_Filter filter */ 100:
                    message.filter = VerifyI_Filter.internalBinaryRead(reader, reader.uint32(), options, message.filter);
                    break;
                case /* repeated signature.VerifyI_Object object */ 200:
                    message.object.push(VerifyI_Object.internalBinaryRead(reader, reader.uint32(), options));
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
        /* signature.VerifyI_Filter filter = 100; */
        if (message.filter)
            VerifyI_Filter.internalBinaryWrite(message.filter, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* repeated signature.VerifyI_Object object = 200; */
        for (let i = 0; i < message.object.length; i++)
            VerifyI_Object.internalBinaryWrite(message.object[i], writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message signature.VerifyI
 */
export const VerifyI = new VerifyI$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VerifyI_Filter$Type extends MessageType {
    constructor() {
        super("signature.VerifyI_Filter", []);
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
 * @generated MessageType for protobuf message signature.VerifyI_Filter
 */
export const VerifyI_Filter = new VerifyI_Filter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VerifyI_Object$Type extends MessageType {
    constructor() {
        super("signature.VerifyI_Object", [
            { no: 100, name: "intern", kind: "message", T: () => VerifyI_Object_Intern },
            { no: 200, name: "public", kind: "message", T: () => VerifyI_Object_Public }
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
                case /* signature.VerifyI_Object_Intern intern */ 100:
                    message.intern = VerifyI_Object_Intern.internalBinaryRead(reader, reader.uint32(), options, message.intern);
                    break;
                case /* signature.VerifyI_Object_Public public */ 200:
                    message.public = VerifyI_Object_Public.internalBinaryRead(reader, reader.uint32(), options, message.public);
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
        /* signature.VerifyI_Object_Intern intern = 100; */
        if (message.intern)
            VerifyI_Object_Intern.internalBinaryWrite(message.intern, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* signature.VerifyI_Object_Public public = 200; */
        if (message.public)
            VerifyI_Object_Public.internalBinaryWrite(message.public, writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message signature.VerifyI_Object
 */
export const VerifyI_Object = new VerifyI_Object$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VerifyI_Object_Intern$Type extends MessageType {
    constructor() {
        super("signature.VerifyI_Object_Intern", []);
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
 * @generated MessageType for protobuf message signature.VerifyI_Object_Intern
 */
export const VerifyI_Object_Intern = new VerifyI_Object_Intern$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VerifyI_Object_Public$Type extends MessageType {
    constructor() {
        super("signature.VerifyI_Object_Public", [
            { no: 100, name: "mess", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 200, name: "pubk", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 300, name: "sign", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { mess: "", pubk: "", sign: "" };
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
                case /* string mess */ 100:
                    message.mess = reader.string();
                    break;
                case /* string pubk */ 200:
                    message.pubk = reader.string();
                    break;
                case /* string sign */ 300:
                    message.sign = reader.string();
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
        /* string mess = 100; */
        if (message.mess !== "")
            writer.tag(100, WireType.LengthDelimited).string(message.mess);
        /* string pubk = 200; */
        if (message.pubk !== "")
            writer.tag(200, WireType.LengthDelimited).string(message.pubk);
        /* string sign = 300; */
        if (message.sign !== "")
            writer.tag(300, WireType.LengthDelimited).string(message.sign);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message signature.VerifyI_Object_Public
 */
export const VerifyI_Object_Public = new VerifyI_Object_Public$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VerifyO$Type extends MessageType {
    constructor() {
        super("signature.VerifyO", [
            { no: 100, name: "filter", kind: "message", T: () => VerifyO_Filter },
            { no: 200, name: "object", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => VerifyO_Object }
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
                case /* signature.VerifyO_Filter filter */ 100:
                    message.filter = VerifyO_Filter.internalBinaryRead(reader, reader.uint32(), options, message.filter);
                    break;
                case /* repeated signature.VerifyO_Object object */ 200:
                    message.object.push(VerifyO_Object.internalBinaryRead(reader, reader.uint32(), options));
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
        /* signature.VerifyO_Filter filter = 100; */
        if (message.filter)
            VerifyO_Filter.internalBinaryWrite(message.filter, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* repeated signature.VerifyO_Object object = 200; */
        for (let i = 0; i < message.object.length; i++)
            VerifyO_Object.internalBinaryWrite(message.object[i], writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message signature.VerifyO
 */
export const VerifyO = new VerifyO$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VerifyO_Filter$Type extends MessageType {
    constructor() {
        super("signature.VerifyO_Filter", []);
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
 * @generated MessageType for protobuf message signature.VerifyO_Filter
 */
export const VerifyO_Filter = new VerifyO_Filter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VerifyO_Object$Type extends MessageType {
    constructor() {
        super("signature.VerifyO_Object", [
            { no: 100, name: "intern", kind: "message", T: () => VerifyO_Object_Intern },
            { no: 200, name: "public", kind: "message", T: () => VerifyO_Object_Public }
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
                case /* signature.VerifyO_Object_Intern intern */ 100:
                    message.intern = VerifyO_Object_Intern.internalBinaryRead(reader, reader.uint32(), options, message.intern);
                    break;
                case /* signature.VerifyO_Object_Public public */ 200:
                    message.public = VerifyO_Object_Public.internalBinaryRead(reader, reader.uint32(), options, message.public);
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
        /* signature.VerifyO_Object_Intern intern = 100; */
        if (message.intern)
            VerifyO_Object_Intern.internalBinaryWrite(message.intern, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* signature.VerifyO_Object_Public public = 200; */
        if (message.public)
            VerifyO_Object_Public.internalBinaryWrite(message.public, writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message signature.VerifyO_Object
 */
export const VerifyO_Object = new VerifyO_Object$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VerifyO_Object_Intern$Type extends MessageType {
    constructor() {
        super("signature.VerifyO_Object_Intern", [
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
 * @generated MessageType for protobuf message signature.VerifyO_Object_Intern
 */
export const VerifyO_Object_Intern = new VerifyO_Object_Intern$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VerifyO_Object_Public$Type extends MessageType {
    constructor() {
        super("signature.VerifyO_Object_Public", []);
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
 * @generated MessageType for protobuf message signature.VerifyO_Object_Public
 */
export const VerifyO_Object_Public = new VerifyO_Object_Public$Type();