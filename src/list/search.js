// @generated by protobuf-ts 2.9.1 with parameter output_javascript
// @generated from protobuf file "pbf/list/search.proto" (package "list", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// @generated message type with reflection information, may provide speed optimized methods
class SearchI$Type extends MessageType {
    constructor() {
        super("list.SearchI", [
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
                case /* list.SearchI_Filter filter */ 100:
                    message.filter = SearchI_Filter.internalBinaryRead(reader, reader.uint32(), options, message.filter);
                    break;
                case /* repeated list.SearchI_Object object */ 200:
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
        /* list.SearchI_Filter filter = 100; */
        if (message.filter)
            SearchI_Filter.internalBinaryWrite(message.filter, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* repeated list.SearchI_Object object = 200; */
        for (let i = 0; i < message.object.length; i++)
            SearchI_Object.internalBinaryWrite(message.object[i], writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message list.SearchI
 */
export const SearchI = new SearchI$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchI_Filter$Type extends MessageType {
    constructor() {
        super("list.SearchI_Filter", [
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
                case /* list.SearchI_Filter_Paging paging */ 100:
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
        /* list.SearchI_Filter_Paging paging = 100; */
        if (message.paging)
            SearchI_Filter_Paging.internalBinaryWrite(message.paging, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message list.SearchI_Filter
 */
export const SearchI_Filter = new SearchI_Filter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchI_Filter_Paging$Type extends MessageType {
    constructor() {
        super("list.SearchI_Filter_Paging", [
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
 * @generated MessageType for protobuf message list.SearchI_Filter_Paging
 */
export const SearchI_Filter_Paging = new SearchI_Filter_Paging$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchI_Object$Type extends MessageType {
    constructor() {
        super("list.SearchI_Object", [
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
                case /* list.SearchI_Object_Intern intern */ 100:
                    message.intern = SearchI_Object_Intern.internalBinaryRead(reader, reader.uint32(), options, message.intern);
                    break;
                case /* list.SearchI_Object_Public public */ 200:
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
        /* list.SearchI_Object_Intern intern = 100; */
        if (message.intern)
            SearchI_Object_Intern.internalBinaryWrite(message.intern, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* list.SearchI_Object_Public public = 200; */
        if (message.public)
            SearchI_Object_Public.internalBinaryWrite(message.public, writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message list.SearchI_Object
 */
export const SearchI_Object = new SearchI_Object$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchI_Object_Intern$Type extends MessageType {
    constructor() {
        super("list.SearchI_Object_Intern", [
            { no: 100, name: "user", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { user: "" };
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
                case /* string user */ 100:
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
        /* string user = 100; */
        if (message.user !== "")
            writer.tag(100, WireType.LengthDelimited).string(message.user);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message list.SearchI_Object_Intern
 */
export const SearchI_Object_Intern = new SearchI_Object_Intern$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchI_Object_Public$Type extends MessageType {
    constructor() {
        super("list.SearchI_Object_Public", []);
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
 * @generated MessageType for protobuf message list.SearchI_Object_Public
 */
export const SearchI_Object_Public = new SearchI_Object_Public$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO$Type extends MessageType {
    constructor() {
        super("list.SearchO", [
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
                case /* list.SearchO_Filter filter */ 100:
                    message.filter = SearchO_Filter.internalBinaryRead(reader, reader.uint32(), options, message.filter);
                    break;
                case /* repeated list.SearchO_Object object */ 200:
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
        /* list.SearchO_Filter filter = 100; */
        if (message.filter)
            SearchO_Filter.internalBinaryWrite(message.filter, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* repeated list.SearchO_Object object = 200; */
        for (let i = 0; i < message.object.length; i++)
            SearchO_Object.internalBinaryWrite(message.object[i], writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message list.SearchO
 */
export const SearchO = new SearchO$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO_Filter$Type extends MessageType {
    constructor() {
        super("list.SearchO_Filter", [
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
                case /* list.SearchO_Filter_Paging paging */ 100:
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
        /* list.SearchO_Filter_Paging paging = 100; */
        if (message.paging)
            SearchO_Filter_Paging.internalBinaryWrite(message.paging, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message list.SearchO_Filter
 */
export const SearchO_Filter = new SearchO_Filter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO_Filter_Paging$Type extends MessageType {
    constructor() {
        super("list.SearchO_Filter_Paging", [
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
 * @generated MessageType for protobuf message list.SearchO_Filter_Paging
 */
export const SearchO_Filter_Paging = new SearchO_Filter_Paging$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO_Object$Type extends MessageType {
    constructor() {
        super("list.SearchO_Object", [
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
                case /* list.SearchO_Object_Intern intern */ 100:
                    message.intern = SearchO_Object_Intern.internalBinaryRead(reader, reader.uint32(), options, message.intern);
                    break;
                case /* list.SearchO_Object_Public public */ 200:
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
        /* list.SearchO_Object_Intern intern = 100; */
        if (message.intern)
            SearchO_Object_Intern.internalBinaryWrite(message.intern, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* list.SearchO_Object_Public public = 200; */
        if (message.public)
            SearchO_Object_Public.internalBinaryWrite(message.public, writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message list.SearchO_Object
 */
export const SearchO_Object = new SearchO_Object$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO_Object_Intern$Type extends MessageType {
    constructor() {
        super("list.SearchO_Object_Intern", [
            { no: 100, name: "crtd", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 200, name: "list", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 300, name: "user", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { crtd: "", list: "", user: "" };
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
                case /* string list */ 200:
                    message.list = reader.string();
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
        /* string list = 200; */
        if (message.list !== "")
            writer.tag(200, WireType.LengthDelimited).string(message.list);
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
 * @generated MessageType for protobuf message list.SearchO_Object_Intern
 */
export const SearchO_Object_Intern = new SearchO_Object_Intern$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO_Object_Public$Type extends MessageType {
    constructor() {
        super("list.SearchO_Object_Public", [
            { no: 100, name: "desc", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { desc: "" };
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
                case /* string desc */ 100:
                    message.desc = reader.string();
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
        /* string desc = 100; */
        if (message.desc !== "")
            writer.tag(100, WireType.LengthDelimited).string(message.desc);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message list.SearchO_Object_Public
 */
export const SearchO_Object_Public = new SearchO_Object_Public$Type();
