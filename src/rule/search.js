// @generated by protobuf-ts 2.9.1 with parameter output_javascript
// @generated from protobuf file "pbf/rule/search.proto" (package "rule", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// @generated message type with reflection information, may provide speed optimized methods
class SearchI$Type extends MessageType {
    constructor() {
        super("rule.SearchI", [
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
                case /* rule.SearchI_Filter filter */ 100:
                    message.filter = SearchI_Filter.internalBinaryRead(reader, reader.uint32(), options, message.filter);
                    break;
                case /* repeated rule.SearchI_Object object */ 200:
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
        /* rule.SearchI_Filter filter = 100; */
        if (message.filter)
            SearchI_Filter.internalBinaryWrite(message.filter, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* repeated rule.SearchI_Object object = 200; */
        for (let i = 0; i < message.object.length; i++)
            SearchI_Object.internalBinaryWrite(message.object[i], writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message rule.SearchI
 */
export const SearchI = new SearchI$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchI_Filter$Type extends MessageType {
    constructor() {
        super("rule.SearchI_Filter", [
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
                case /* rule.SearchI_Filter_Paging paging */ 100:
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
        /* rule.SearchI_Filter_Paging paging = 100; */
        if (message.paging)
            SearchI_Filter_Paging.internalBinaryWrite(message.paging, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message rule.SearchI_Filter
 */
export const SearchI_Filter = new SearchI_Filter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchI_Filter_Paging$Type extends MessageType {
    constructor() {
        super("rule.SearchI_Filter_Paging", [
            { no: 100, name: "strt", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 200, name: "stop", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { strt: "", stop: "" };
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
                case /* string strt */ 100:
                    message.strt = reader.string();
                    break;
                case /* string stop */ 200:
                    message.stop = reader.string();
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
        /* string strt = 100; */
        if (message.strt !== "")
            writer.tag(100, WireType.LengthDelimited).string(message.strt);
        /* string stop = 200; */
        if (message.stop !== "")
            writer.tag(200, WireType.LengthDelimited).string(message.stop);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message rule.SearchI_Filter_Paging
 */
export const SearchI_Filter_Paging = new SearchI_Filter_Paging$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchI_Object$Type extends MessageType {
    constructor() {
        super("rule.SearchI_Object", [
            { no: 100, name: "intern", kind: "message", T: () => SearchI_Object_Intern },
            { no: 200, name: "public", kind: "message", T: () => SearchI_Object_Public }
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
                case /* rule.SearchI_Object_Intern intern */ 100:
                    message.intern = SearchI_Object_Intern.internalBinaryRead(reader, reader.uint32(), options, message.intern);
                    break;
                case /* rule.SearchI_Object_Public public */ 200:
                    message.public = SearchI_Object_Public.internalBinaryRead(reader, reader.uint32(), options, message.public);
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
        /* rule.SearchI_Object_Intern intern = 100; */
        if (message.intern)
            SearchI_Object_Intern.internalBinaryWrite(message.intern, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* rule.SearchI_Object_Public public = 200; */
        if (message.public)
            SearchI_Object_Public.internalBinaryWrite(message.public, writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message rule.SearchI_Object
 */
export const SearchI_Object = new SearchI_Object$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchI_Object_Intern$Type extends MessageType {
    constructor() {
        super("rule.SearchI_Object_Intern", []);
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
 * @generated MessageType for protobuf message rule.SearchI_Object_Intern
 */
export const SearchI_Object_Intern = new SearchI_Object_Intern$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchI_Object_Public$Type extends MessageType {
    constructor() {
        super("rule.SearchI_Object_Public", [
            { no: 100, name: "list", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { list: "" };
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
                case /* string list */ 100:
                    message.list = reader.string();
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
        /* string list = 100; */
        if (message.list !== "")
            writer.tag(100, WireType.LengthDelimited).string(message.list);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message rule.SearchI_Object_Public
 */
export const SearchI_Object_Public = new SearchI_Object_Public$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO$Type extends MessageType {
    constructor() {
        super("rule.SearchO", [
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
                case /* rule.SearchO_Filter filter */ 100:
                    message.filter = SearchO_Filter.internalBinaryRead(reader, reader.uint32(), options, message.filter);
                    break;
                case /* repeated rule.SearchO_Object object */ 200:
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
        /* rule.SearchO_Filter filter = 100; */
        if (message.filter)
            SearchO_Filter.internalBinaryWrite(message.filter, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* repeated rule.SearchO_Object object = 200; */
        for (let i = 0; i < message.object.length; i++)
            SearchO_Object.internalBinaryWrite(message.object[i], writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message rule.SearchO
 */
export const SearchO = new SearchO$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO_Filter$Type extends MessageType {
    constructor() {
        super("rule.SearchO_Filter", []);
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
 * @generated MessageType for protobuf message rule.SearchO_Filter
 */
export const SearchO_Filter = new SearchO_Filter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO_Object$Type extends MessageType {
    constructor() {
        super("rule.SearchO_Object", [
            { no: 100, name: "intern", kind: "message", T: () => SearchO_Object_Intern },
            { no: 200, name: "public", kind: "message", T: () => SearchO_Object_Public }
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
                case /* rule.SearchO_Object_Intern intern */ 100:
                    message.intern = SearchO_Object_Intern.internalBinaryRead(reader, reader.uint32(), options, message.intern);
                    break;
                case /* rule.SearchO_Object_Public public */ 200:
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
        /* rule.SearchO_Object_Intern intern = 100; */
        if (message.intern)
            SearchO_Object_Intern.internalBinaryWrite(message.intern, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* rule.SearchO_Object_Public public = 200; */
        if (message.public)
            SearchO_Object_Public.internalBinaryWrite(message.public, writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message rule.SearchO_Object
 */
export const SearchO_Object = new SearchO_Object$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO_Object_Intern$Type extends MessageType {
    constructor() {
        super("rule.SearchO_Object_Intern", [
            { no: 100, name: "crtd", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 200, name: "rule", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 300, name: "user", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { crtd: "", rule: "", user: "" };
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
                case /* string rule */ 200:
                    message.rule = reader.string();
                    break;
                case /* string user */ 300:
                    message.user = reader.string();
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
        /* string rule = 200; */
        if (message.rule !== "")
            writer.tag(200, WireType.LengthDelimited).string(message.rule);
        /* string user = 300; */
        if (message.user !== "")
            writer.tag(300, WireType.LengthDelimited).string(message.user);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message rule.SearchO_Object_Intern
 */
export const SearchO_Object_Intern = new SearchO_Object_Intern$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO_Object_Public$Type extends MessageType {
    constructor() {
        super("rule.SearchO_Object_Public", [
            { no: 100, name: "excl", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 200, name: "incl", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 300, name: "kind", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 400, name: "list", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { excl: "", incl: "", kind: "", list: "" };
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
                case /* string excl */ 100:
                    message.excl = reader.string();
                    break;
                case /* string incl */ 200:
                    message.incl = reader.string();
                    break;
                case /* string kind */ 300:
                    message.kind = reader.string();
                    break;
                case /* string list */ 400:
                    message.list = reader.string();
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
        /* string excl = 100; */
        if (message.excl !== "")
            writer.tag(100, WireType.LengthDelimited).string(message.excl);
        /* string incl = 200; */
        if (message.incl !== "")
            writer.tag(200, WireType.LengthDelimited).string(message.incl);
        /* string kind = 300; */
        if (message.kind !== "")
            writer.tag(300, WireType.LengthDelimited).string(message.kind);
        /* string list = 400; */
        if (message.list !== "")
            writer.tag(400, WireType.LengthDelimited).string(message.list);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message rule.SearchO_Object_Public
 */
export const SearchO_Object_Public = new SearchO_Object_Public$Type();
