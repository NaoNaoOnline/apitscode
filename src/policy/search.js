// @generated by protobuf-ts 2.9.1 with parameter output_javascript
// @generated from protobuf file "pbf/policy/search.proto" (package "policy", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// @generated message type with reflection information, may provide speed optimized methods
class SearchI$Type extends MessageType {
    constructor() {
        super("policy.SearchI", [
            { no: 100, name: "filter", kind: "message", T: () => SearchI_Filter },
            { no: 200, name: "object", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SearchI_Object }
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
                case /* policy.SearchI_Filter filter */ 100:
                    message.filter = SearchI_Filter.internalBinaryRead(reader, reader.uint32(), options, message.filter);
                    break;
                case /* repeated policy.SearchI_Object object */ 200:
                    message.object.push(SearchI_Object.internalBinaryRead(reader, reader.uint32(), options));
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
        /* policy.SearchI_Filter filter = 100; */
        if (message.filter)
            SearchI_Filter.internalBinaryWrite(message.filter, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* repeated policy.SearchI_Object object = 200; */
        for (let i = 0; i < message.object.length; i++)
            SearchI_Object.internalBinaryWrite(message.object[i], writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message policy.SearchI
 */
export const SearchI = new SearchI$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchI_Filter$Type extends MessageType {
    constructor() {
        super("policy.SearchI_Filter", [
            { no: 100, name: "paging", kind: "message", T: () => SearchI_Filter_Paging }
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
                case /* policy.SearchI_Filter_Paging paging */ 100:
                    message.paging = SearchI_Filter_Paging.internalBinaryRead(reader, reader.uint32(), options, message.paging);
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
        /* policy.SearchI_Filter_Paging paging = 100; */
        if (message.paging)
            SearchI_Filter_Paging.internalBinaryWrite(message.paging, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message policy.SearchI_Filter
 */
export const SearchI_Filter = new SearchI_Filter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchI_Filter_Paging$Type extends MessageType {
    constructor() {
        super("policy.SearchI_Filter_Paging", [
            { no: 100, name: "perpage", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 200, name: "pointer", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { perpage: "", pointer: "" };
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
                case /* string perpage */ 100:
                    message.perpage = reader.string();
                    break;
                case /* string pointer */ 200:
                    message.pointer = reader.string();
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
        /* string perpage = 100; */
        if (message.perpage !== "")
            writer.tag(100, WireType.LengthDelimited).string(message.perpage);
        /* string pointer = 200; */
        if (message.pointer !== "")
            writer.tag(200, WireType.LengthDelimited).string(message.pointer);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message policy.SearchI_Filter_Paging
 */
export const SearchI_Filter_Paging = new SearchI_Filter_Paging$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchI_Object$Type extends MessageType {
    constructor() {
        super("policy.SearchI_Object", [
            { no: 100, name: "intern", kind: "message", T: () => SearchI_Object_Intern },
            { no: 200, name: "public", kind: "message", T: () => SearchI_Object_Public },
            { no: 300, name: "symbol", kind: "message", T: () => SearchI_Object_Symbol }
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
                case /* policy.SearchI_Object_Intern intern */ 100:
                    message.intern = SearchI_Object_Intern.internalBinaryRead(reader, reader.uint32(), options, message.intern);
                    break;
                case /* policy.SearchI_Object_Public public */ 200:
                    message.public = SearchI_Object_Public.internalBinaryRead(reader, reader.uint32(), options, message.public);
                    break;
                case /* policy.SearchI_Object_Symbol symbol */ 300:
                    message.symbol = SearchI_Object_Symbol.internalBinaryRead(reader, reader.uint32(), options, message.symbol);
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
        /* policy.SearchI_Object_Intern intern = 100; */
        if (message.intern)
            SearchI_Object_Intern.internalBinaryWrite(message.intern, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* policy.SearchI_Object_Public public = 200; */
        if (message.public)
            SearchI_Object_Public.internalBinaryWrite(message.public, writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        /* policy.SearchI_Object_Symbol symbol = 300; */
        if (message.symbol)
            SearchI_Object_Symbol.internalBinaryWrite(message.symbol, writer.tag(300, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message policy.SearchI_Object
 */
export const SearchI_Object = new SearchI_Object$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchI_Object_Intern$Type extends MessageType {
    constructor() {
        super("policy.SearchI_Object_Intern", []);
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
 * @generated MessageType for protobuf message policy.SearchI_Object_Intern
 */
export const SearchI_Object_Intern = new SearchI_Object_Intern$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchI_Object_Public$Type extends MessageType {
    constructor() {
        super("policy.SearchI_Object_Public", [
            { no: 100, name: "kind", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { kind: "" };
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
                case /* string kind */ 100:
                    message.kind = reader.string();
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
        /* string kind = 100; */
        if (message.kind !== "")
            writer.tag(100, WireType.LengthDelimited).string(message.kind);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message policy.SearchI_Object_Public
 */
export const SearchI_Object_Public = new SearchI_Object_Public$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchI_Object_Symbol$Type extends MessageType {
    constructor() {
        super("policy.SearchI_Object_Symbol", [
            { no: 100, name: "ltst", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { ltst: "" };
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
                case /* string ltst */ 100:
                    message.ltst = reader.string();
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
        /* string ltst = 100; */
        if (message.ltst !== "")
            writer.tag(100, WireType.LengthDelimited).string(message.ltst);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message policy.SearchI_Object_Symbol
 */
export const SearchI_Object_Symbol = new SearchI_Object_Symbol$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO$Type extends MessageType {
    constructor() {
        super("policy.SearchO", [
            { no: 100, name: "filter", kind: "message", T: () => SearchO_Filter },
            { no: 200, name: "object", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SearchO_Object }
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
                case /* policy.SearchO_Filter filter */ 100:
                    message.filter = SearchO_Filter.internalBinaryRead(reader, reader.uint32(), options, message.filter);
                    break;
                case /* repeated policy.SearchO_Object object */ 200:
                    message.object.push(SearchO_Object.internalBinaryRead(reader, reader.uint32(), options));
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
        /* policy.SearchO_Filter filter = 100; */
        if (message.filter)
            SearchO_Filter.internalBinaryWrite(message.filter, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* repeated policy.SearchO_Object object = 200; */
        for (let i = 0; i < message.object.length; i++)
            SearchO_Object.internalBinaryWrite(message.object[i], writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message policy.SearchO
 */
export const SearchO = new SearchO$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO_Filter$Type extends MessageType {
    constructor() {
        super("policy.SearchO_Filter", [
            { no: 100, name: "paging", kind: "message", T: () => SearchO_Filter_Paging }
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
                case /* policy.SearchO_Filter_Paging paging */ 100:
                    message.paging = SearchO_Filter_Paging.internalBinaryRead(reader, reader.uint32(), options, message.paging);
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
        /* policy.SearchO_Filter_Paging paging = 100; */
        if (message.paging)
            SearchO_Filter_Paging.internalBinaryWrite(message.paging, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message policy.SearchO_Filter
 */
export const SearchO_Filter = new SearchO_Filter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO_Filter_Paging$Type extends MessageType {
    constructor() {
        super("policy.SearchO_Filter_Paging", [
            { no: 100, name: "intotal", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 200, name: "pointer", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { intotal: "", pointer: "" };
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
                case /* string intotal */ 100:
                    message.intotal = reader.string();
                    break;
                case /* string pointer */ 200:
                    message.pointer = reader.string();
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
        /* string intotal = 100; */
        if (message.intotal !== "")
            writer.tag(100, WireType.LengthDelimited).string(message.intotal);
        /* string pointer = 200; */
        if (message.pointer !== "")
            writer.tag(200, WireType.LengthDelimited).string(message.pointer);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message policy.SearchO_Filter_Paging
 */
export const SearchO_Filter_Paging = new SearchO_Filter_Paging$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO_Object$Type extends MessageType {
    constructor() {
        super("policy.SearchO_Object", [
            { no: 100, name: "extern", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SearchO_Object_Extern },
            { no: 200, name: "intern", kind: "message", T: () => SearchO_Object_Intern },
            { no: 300, name: "public", kind: "message", T: () => SearchO_Object_Public }
        ]);
    }
    create(value) {
        const message = { extern: [] };
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
                case /* repeated policy.SearchO_Object_Extern extern */ 100:
                    message.extern.push(SearchO_Object_Extern.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* policy.SearchO_Object_Intern intern */ 200:
                    message.intern = SearchO_Object_Intern.internalBinaryRead(reader, reader.uint32(), options, message.intern);
                    break;
                case /* policy.SearchO_Object_Public public */ 300:
                    message.public = SearchO_Object_Public.internalBinaryRead(reader, reader.uint32(), options, message.public);
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
        /* repeated policy.SearchO_Object_Extern extern = 100; */
        for (let i = 0; i < message.extern.length; i++)
            SearchO_Object_Extern.internalBinaryWrite(message.extern[i], writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* policy.SearchO_Object_Intern intern = 200; */
        if (message.intern)
            SearchO_Object_Intern.internalBinaryWrite(message.intern, writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        /* policy.SearchO_Object_Public public = 300; */
        if (message.public)
            SearchO_Object_Public.internalBinaryWrite(message.public, writer.tag(300, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message policy.SearchO_Object
 */
export const SearchO_Object = new SearchO_Object$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO_Object_Extern$Type extends MessageType {
    constructor() {
        super("policy.SearchO_Object_Extern", [
            { no: 100, name: "blck", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 200, name: "chid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 300, name: "from", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 400, name: "hash", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 500, name: "time", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { blck: "", chid: "", from: "", hash: "", time: "" };
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
                case /* string blck */ 100:
                    message.blck = reader.string();
                    break;
                case /* string chid */ 200:
                    message.chid = reader.string();
                    break;
                case /* string from */ 300:
                    message.from = reader.string();
                    break;
                case /* string hash */ 400:
                    message.hash = reader.string();
                    break;
                case /* string time */ 500:
                    message.time = reader.string();
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
        /* string blck = 100; */
        if (message.blck !== "")
            writer.tag(100, WireType.LengthDelimited).string(message.blck);
        /* string chid = 200; */
        if (message.chid !== "")
            writer.tag(200, WireType.LengthDelimited).string(message.chid);
        /* string from = 300; */
        if (message.from !== "")
            writer.tag(300, WireType.LengthDelimited).string(message.from);
        /* string hash = 400; */
        if (message.hash !== "")
            writer.tag(400, WireType.LengthDelimited).string(message.hash);
        /* string time = 500; */
        if (message.time !== "")
            writer.tag(500, WireType.LengthDelimited).string(message.time);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message policy.SearchO_Object_Extern
 */
export const SearchO_Object_Extern = new SearchO_Object_Extern$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO_Object_Intern$Type extends MessageType {
    constructor() {
        super("policy.SearchO_Object_Intern", [
            { no: 100, name: "crtd", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 200, name: "plcy", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { crtd: "", plcy: "" };
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
                case /* string crtd */ 100:
                    message.crtd = reader.string();
                    break;
                case /* string plcy */ 200:
                    message.plcy = reader.string();
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
        /* string crtd = 100; */
        if (message.crtd !== "")
            writer.tag(100, WireType.LengthDelimited).string(message.crtd);
        /* string plcy = 200; */
        if (message.plcy !== "")
            writer.tag(200, WireType.LengthDelimited).string(message.plcy);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message policy.SearchO_Object_Intern
 */
export const SearchO_Object_Intern = new SearchO_Object_Intern$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO_Object_Public$Type extends MessageType {
    constructor() {
        super("policy.SearchO_Object_Public", [
            { no: 100, name: "acce", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 200, name: "kind", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 300, name: "memb", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 400, name: "syst", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { acce: "", kind: "", memb: "", syst: "" };
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
                case /* string acce */ 100:
                    message.acce = reader.string();
                    break;
                case /* string kind */ 200:
                    message.kind = reader.string();
                    break;
                case /* string memb */ 300:
                    message.memb = reader.string();
                    break;
                case /* string syst */ 400:
                    message.syst = reader.string();
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
        /* string acce = 100; */
        if (message.acce !== "")
            writer.tag(100, WireType.LengthDelimited).string(message.acce);
        /* string kind = 200; */
        if (message.kind !== "")
            writer.tag(200, WireType.LengthDelimited).string(message.kind);
        /* string memb = 300; */
        if (message.memb !== "")
            writer.tag(300, WireType.LengthDelimited).string(message.memb);
        /* string syst = 400; */
        if (message.syst !== "")
            writer.tag(400, WireType.LengthDelimited).string(message.syst);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message policy.SearchO_Object_Public
 */
export const SearchO_Object_Public = new SearchO_Object_Public$Type();
