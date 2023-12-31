// @generated by protobuf-ts 2.9.3 with parameter output_javascript
// @generated from protobuf file "pbf/event/search.proto" (package "event", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// @generated message type with reflection information, may provide speed optimized methods
class SearchI$Type extends MessageType {
    constructor() {
        super("event.SearchI", [
            { no: 100, name: "filter", kind: "message", T: () => SearchI_Filter },
            { no: 200, name: "object", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SearchI_Object }
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
                case /* event.SearchI_Filter filter */ 100:
                    message.filter = SearchI_Filter.internalBinaryRead(reader, reader.uint32(), options, message.filter);
                    break;
                case /* repeated event.SearchI_Object object */ 200:
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
        /* event.SearchI_Filter filter = 100; */
        if (message.filter)
            SearchI_Filter.internalBinaryWrite(message.filter, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* repeated event.SearchI_Object object = 200; */
        for (let i = 0; i < message.object.length; i++)
            SearchI_Object.internalBinaryWrite(message.object[i], writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message event.SearchI
 */
export const SearchI = new SearchI$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchI_Filter$Type extends MessageType {
    constructor() {
        super("event.SearchI_Filter", [
            { no: 100, name: "paging", kind: "message", T: () => SearchI_Filter_Paging }
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
                case /* event.SearchI_Filter_Paging paging */ 100:
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
        /* event.SearchI_Filter_Paging paging = 100; */
        if (message.paging)
            SearchI_Filter_Paging.internalBinaryWrite(message.paging, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message event.SearchI_Filter
 */
export const SearchI_Filter = new SearchI_Filter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchI_Filter_Paging$Type extends MessageType {
    constructor() {
        super("event.SearchI_Filter_Paging", [
            { no: 100, name: "kind", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 200, name: "strt", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 300, name: "stop", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.kind = "";
        message.strt = "";
        message.stop = "";
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
                case /* string strt */ 200:
                    message.strt = reader.string();
                    break;
                case /* string stop */ 300:
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
        /* string kind = 100; */
        if (message.kind !== "")
            writer.tag(100, WireType.LengthDelimited).string(message.kind);
        /* string strt = 200; */
        if (message.strt !== "")
            writer.tag(200, WireType.LengthDelimited).string(message.strt);
        /* string stop = 300; */
        if (message.stop !== "")
            writer.tag(300, WireType.LengthDelimited).string(message.stop);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message event.SearchI_Filter_Paging
 */
export const SearchI_Filter_Paging = new SearchI_Filter_Paging$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchI_Object$Type extends MessageType {
    constructor() {
        super("event.SearchI_Object", [
            { no: 100, name: "intern", kind: "message", T: () => SearchI_Object_Intern },
            { no: 200, name: "public", kind: "message", T: () => SearchI_Object_Public },
            { no: 300, name: "symbol", kind: "message", T: () => SearchI_Object_Symbol }
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
                case /* event.SearchI_Object_Intern intern */ 100:
                    message.intern = SearchI_Object_Intern.internalBinaryRead(reader, reader.uint32(), options, message.intern);
                    break;
                case /* event.SearchI_Object_Public public */ 200:
                    message.public = SearchI_Object_Public.internalBinaryRead(reader, reader.uint32(), options, message.public);
                    break;
                case /* event.SearchI_Object_Symbol symbol */ 300:
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
        /* event.SearchI_Object_Intern intern = 100; */
        if (message.intern)
            SearchI_Object_Intern.internalBinaryWrite(message.intern, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* event.SearchI_Object_Public public = 200; */
        if (message.public)
            SearchI_Object_Public.internalBinaryWrite(message.public, writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        /* event.SearchI_Object_Symbol symbol = 300; */
        if (message.symbol)
            SearchI_Object_Symbol.internalBinaryWrite(message.symbol, writer.tag(300, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message event.SearchI_Object
 */
export const SearchI_Object = new SearchI_Object$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchI_Object_Intern$Type extends MessageType {
    constructor() {
        super("event.SearchI_Object_Intern", [
            { no: 100, name: "evnt", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 200, name: "user", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.evnt = "";
        message.user = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string evnt */ 100:
                    message.evnt = reader.string();
                    break;
                case /* string user */ 200:
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
        /* string evnt = 100; */
        if (message.evnt !== "")
            writer.tag(100, WireType.LengthDelimited).string(message.evnt);
        /* string user = 200; */
        if (message.user !== "")
            writer.tag(200, WireType.LengthDelimited).string(message.user);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message event.SearchI_Object_Intern
 */
export const SearchI_Object_Intern = new SearchI_Object_Intern$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchI_Object_Public$Type extends MessageType {
    constructor() {
        super("event.SearchI_Object_Public", [
            { no: 100, name: "cate", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 200, name: "host", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.cate = "";
        message.host = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string cate */ 100:
                    message.cate = reader.string();
                    break;
                case /* string host */ 200:
                    message.host = reader.string();
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
        /* string cate = 100; */
        if (message.cate !== "")
            writer.tag(100, WireType.LengthDelimited).string(message.cate);
        /* string host = 200; */
        if (message.host !== "")
            writer.tag(200, WireType.LengthDelimited).string(message.host);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message event.SearchI_Object_Public
 */
export const SearchI_Object_Public = new SearchI_Object_Public$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchI_Object_Symbol$Type extends MessageType {
    constructor() {
        super("event.SearchI_Object_Symbol", [
            { no: 100, name: "like", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 200, name: "list", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 300, name: "time", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.like = "";
        message.list = "";
        message.time = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string like */ 100:
                    message.like = reader.string();
                    break;
                case /* string list */ 200:
                    message.list = reader.string();
                    break;
                case /* string time */ 300:
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
        /* string like = 100; */
        if (message.like !== "")
            writer.tag(100, WireType.LengthDelimited).string(message.like);
        /* string list = 200; */
        if (message.list !== "")
            writer.tag(200, WireType.LengthDelimited).string(message.list);
        /* string time = 300; */
        if (message.time !== "")
            writer.tag(300, WireType.LengthDelimited).string(message.time);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message event.SearchI_Object_Symbol
 */
export const SearchI_Object_Symbol = new SearchI_Object_Symbol$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO$Type extends MessageType {
    constructor() {
        super("event.SearchO", [
            { no: 100, name: "filter", kind: "message", T: () => SearchO_Filter },
            { no: 200, name: "object", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SearchO_Object }
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
                case /* event.SearchO_Filter filter */ 100:
                    message.filter = SearchO_Filter.internalBinaryRead(reader, reader.uint32(), options, message.filter);
                    break;
                case /* repeated event.SearchO_Object object */ 200:
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
        /* event.SearchO_Filter filter = 100; */
        if (message.filter)
            SearchO_Filter.internalBinaryWrite(message.filter, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* repeated event.SearchO_Object object = 200; */
        for (let i = 0; i < message.object.length; i++)
            SearchO_Object.internalBinaryWrite(message.object[i], writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message event.SearchO
 */
export const SearchO = new SearchO$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO_Filter$Type extends MessageType {
    constructor() {
        super("event.SearchO_Filter", []);
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
 * @generated MessageType for protobuf message event.SearchO_Filter
 */
export const SearchO_Filter = new SearchO_Filter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO_Object$Type extends MessageType {
    constructor() {
        super("event.SearchO_Object", [
            { no: 100, name: "extern", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SearchO_Object_Extern },
            { no: 200, name: "intern", kind: "message", T: () => SearchO_Object_Intern },
            { no: 300, name: "public", kind: "message", T: () => SearchO_Object_Public }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.extern = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated event.SearchO_Object_Extern extern */ 100:
                    message.extern.push(SearchO_Object_Extern.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* event.SearchO_Object_Intern intern */ 200:
                    message.intern = SearchO_Object_Intern.internalBinaryRead(reader, reader.uint32(), options, message.intern);
                    break;
                case /* event.SearchO_Object_Public public */ 300:
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
        /* repeated event.SearchO_Object_Extern extern = 100; */
        for (let i = 0; i < message.extern.length; i++)
            SearchO_Object_Extern.internalBinaryWrite(message.extern[i], writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* event.SearchO_Object_Intern intern = 200; */
        if (message.intern)
            SearchO_Object_Intern.internalBinaryWrite(message.intern, writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        /* event.SearchO_Object_Public public = 300; */
        if (message.public)
            SearchO_Object_Public.internalBinaryWrite(message.public, writer.tag(300, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message event.SearchO_Object
 */
export const SearchO_Object = new SearchO_Object$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO_Object_Extern$Type extends MessageType {
    constructor() {
        super("event.SearchO_Object_Extern", [
            { no: 100, name: "amnt", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 200, name: "kind", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 300, name: "user", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.amnt = "";
        message.kind = "";
        message.user = false;
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string amnt */ 100:
                    message.amnt = reader.string();
                    break;
                case /* string kind */ 200:
                    message.kind = reader.string();
                    break;
                case /* bool user */ 300:
                    message.user = reader.bool();
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
        /* string amnt = 100; */
        if (message.amnt !== "")
            writer.tag(100, WireType.LengthDelimited).string(message.amnt);
        /* string kind = 200; */
        if (message.kind !== "")
            writer.tag(200, WireType.LengthDelimited).string(message.kind);
        /* bool user = 300; */
        if (message.user !== false)
            writer.tag(300, WireType.Varint).bool(message.user);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message event.SearchO_Object_Extern
 */
export const SearchO_Object_Extern = new SearchO_Object_Extern$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO_Object_Intern$Type extends MessageType {
    constructor() {
        super("event.SearchO_Object_Intern", [
            { no: 100, name: "crtd", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 200, name: "evnt", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 300, name: "list", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 400, name: "user", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.crtd = "";
        message.evnt = "";
        message.list = "";
        message.user = "";
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
                case /* string evnt */ 200:
                    message.evnt = reader.string();
                    break;
                case /* string list */ 300:
                    message.list = reader.string();
                    break;
                case /* string user */ 400:
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
        /* string evnt = 200; */
        if (message.evnt !== "")
            writer.tag(200, WireType.LengthDelimited).string(message.evnt);
        /* string list = 300; */
        if (message.list !== "")
            writer.tag(300, WireType.LengthDelimited).string(message.list);
        /* string user = 400; */
        if (message.user !== "")
            writer.tag(400, WireType.LengthDelimited).string(message.user);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message event.SearchO_Object_Intern
 */
export const SearchO_Object_Intern = new SearchO_Object_Intern$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO_Object_Public$Type extends MessageType {
    constructor() {
        super("event.SearchO_Object_Public", [
            { no: 100, name: "cate", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 200, name: "dura", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 300, name: "host", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 400, name: "link", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 500, name: "time", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.cate = "";
        message.dura = "";
        message.host = "";
        message.link = "";
        message.time = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string cate */ 100:
                    message.cate = reader.string();
                    break;
                case /* string dura */ 200:
                    message.dura = reader.string();
                    break;
                case /* string host */ 300:
                    message.host = reader.string();
                    break;
                case /* string link */ 400:
                    message.link = reader.string();
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
        /* string cate = 100; */
        if (message.cate !== "")
            writer.tag(100, WireType.LengthDelimited).string(message.cate);
        /* string dura = 200; */
        if (message.dura !== "")
            writer.tag(200, WireType.LengthDelimited).string(message.dura);
        /* string host = 300; */
        if (message.host !== "")
            writer.tag(300, WireType.LengthDelimited).string(message.host);
        /* string link = 400; */
        if (message.link !== "")
            writer.tag(400, WireType.LengthDelimited).string(message.link);
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
 * @generated MessageType for protobuf message event.SearchO_Object_Public
 */
export const SearchO_Object_Public = new SearchO_Object_Public$Type();
