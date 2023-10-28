// @generated by protobuf-ts 2.9.1 with parameter output_javascript
// @generated from protobuf file "pbf/event/search.proto" (package "event", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * SearchI is the input for searching events.
 *
 *     {
 *         "filter": {
 *             "paging": {
 *                 "strt": "0",
 *                 "stop": "49"
 *             }
 *         },
 *         "object": [
 *             {
 *                 "public": {
 *                     "cate": "863826"
 *                 }
 *             }
 *         ]
 *     }
 *
 *
 * @generated from protobuf message event.SearchI
 */
export interface SearchI {
  /**
   * @generated from protobuf field: event.SearchI_Filter filter = 100;
   */
  filter?: SearchI_Filter;
  /**
   * @generated from protobuf field: repeated event.SearchI_Object object = 200;
   */
  object: SearchI_Object[];
}
/**
 * @generated from protobuf message event.SearchI_Filter
 */
export interface SearchI_Filter {
  /**
   * @generated from protobuf field: event.SearchI_Filter_Paging paging = 100;
   */
  paging?: SearchI_Filter_Paging;
}
/**
 * @generated from protobuf message event.SearchI_Filter_Paging
 */
export interface SearchI_Filter_Paging {
  /**
   * @generated from protobuf field: string strt = 100;
   */
  strt: string;
  /**
   * @generated from protobuf field: string stop = 200;
   */
  stop: string;
}
/**
 * @generated from protobuf message event.SearchI_Object
 */
export interface SearchI_Object {
  /**
   * @generated from protobuf field: event.SearchI_Object_Intern intern = 100;
   */
  intern?: SearchI_Object_Intern;
  /**
   * @generated from protobuf field: event.SearchI_Object_Public public = 200;
   */
  public?: SearchI_Object_Public;
  /**
   * @generated from protobuf field: event.SearchI_Object_Symbol symbol = 300;
   */
  symbol?: SearchI_Object_Symbol;
}
/**
 * @generated from protobuf message event.SearchI_Object_Intern
 */
export interface SearchI_Object_Intern {
  /**
   * evnt is the ID of the event being searched. If searching for a particular
   * event, the search query object must not contain any other fields.
   *
   * @generated from protobuf field: string evnt = 100;
   */
  evnt: string;
  /**
   * user is the ID of the user having created the events being searched. If
   * searching for events created by a particular user, the search query object
   * must not contain any other fields.
   *
   * @generated from protobuf field: string user = 200;
   */
  user: string;
}
/**
 * @generated from protobuf message event.SearchI_Object_Public
 */
export interface SearchI_Object_Public {
  /**
   * cate is the ID of the category label for which events are being searched.
   *
   * Providing multiple host and category labels within the same search query
   * object means to search for the intersection of all the given labels within
   * that search query context. That is, searching for { A, B, C } returns event
   * objects that are associated to A, B and C.
   *
   * @generated from protobuf field: string cate = 100;
   */
  cate: string;
  /**
   * host is the ID of the host label for which events are being searched.
   *
   * Providing multiple host and category labels within the same search query
   * object means to search for the intersection of all the given labels within
   * that search query context. That is, searching for { A, B, C } returns event
   * objects that are associated to A, B and C.
   *
   * @generated from protobuf field: string host = 200;
   */
  host: string;
}
/**
 * @generated from protobuf message event.SearchI_Object_Symbol
 */
export interface SearchI_Object_Symbol {
  /**
   * list set to any valid list ID returns all of the event objects matching the
   * provided list's criteria. Paging is available by providing absolute numbers
   * as pointers for the underyling ordered objects.
   *
   * @generated from protobuf field: string list = 100;
   */
  list: string;
  /**
   * ltst set to "default" returns the latest event objects indexed by event
   * start time. That is, the list of events that are going on right now,
   * including events that already happened, and events that will happen in the
   * near future. The time horizon of the "default" search query is limited to
   * one week in the past and one week in the future. Paging is available by
   * providing unix timestamps as pointers for the underyling ordered objects,
   * where the unix timestamps refer to the start time of the respective events,
   * that is, when they are happening.
   *
   * @generated from protobuf field: string ltst = 200;
   */
  ltst: string;
  /**
   * rctn set to "default" returns the event objects indexed by the calling
   * user's reactions. That is, the list of events that the calling user reacted
   * to in the past. Neither the amount nor the kind of reactions to any event
   * matter. If the calling user reacted to an event, it will be returned here.
   * Paging is available by providing absolute numbers as pointers for the
   * underyling ordered objects.
   *
   * @generated from protobuf field: string rctn = 300;
   */
  rctn: string;
}
/**
 * SearchO is the output for searching events.
 *
 *     {
 *         "object": [
 *             {
 *                 "extern": [
 *                     {
 *                         "amnt": "1047",
 *                         "kind": "link",
 *                         "user": true
 *                     }
 *                 ],
 *                 "intern": {
 *                     "crtd": "1689001255",
 *                     "evnt": "778237",
 *                     "user": "551265"
 *                 },
 *                 "public": {
 *                     "cate": "863826",
 *                     "dura": "3600",
 *                     "host": "233923",
 *                     "link": "https://google.com",
 *                     "time": "1689001255"
 *                 }
 *             },
 *             ...
 *         ]
 *     }
 *
 *
 * @generated from protobuf message event.SearchO
 */
export interface SearchO {
  /**
   * @generated from protobuf field: event.SearchO_Filter filter = 100;
   */
  filter?: SearchO_Filter;
  /**
   * @generated from protobuf field: repeated event.SearchO_Object object = 200;
   */
  object: SearchO_Object[];
}
/**
 * @generated from protobuf message event.SearchO_Filter
 */
export interface SearchO_Filter {}
/**
 * @generated from protobuf message event.SearchO_Object
 */
export interface SearchO_Object {
  /**
   * @generated from protobuf field: repeated event.SearchO_Object_Extern extern = 100;
   */
  extern: SearchO_Object_Extern[];
  /**
   * @generated from protobuf field: event.SearchO_Object_Intern intern = 200;
   */
  intern?: SearchO_Object_Intern;
  /**
   * @generated from protobuf field: event.SearchO_Object_Public public = 300;
   */
  public?: SearchO_Object_Public;
}
/**
 * @generated from protobuf message event.SearchO_Object_Extern
 */
export interface SearchO_Object_Extern {
  /**
   * amnt is the number of reactions this event received for the specified kind.
   *
   * @generated from protobuf field: string amnt = 100;
   */
  amnt: string;
  /**
   * kind is the type of reaction this event received.
   *
   *     link for users clicking the event link while the event is happening
   *
   *
   * @generated from protobuf field: string kind = 200;
   */
  kind: string;
  /**
   * user expresses whether the calling user reacted to this event with the
   * specified reaction kind.
   *
   * @generated from protobuf field: bool user = 300;
   */
  user: boolean;
}
/**
 * @generated from protobuf message event.SearchO_Object_Intern
 */
export interface SearchO_Object_Intern {
  /**
   * crtd is the unix timestamp in seconds at which the event got created.
   *
   * @generated from protobuf field: string crtd = 100;
   */
  crtd: string;
  /**
   * evnt is the ID of the event being searched.
   *
   * @generated from protobuf field: string evnt = 200;
   */
  evnt: string;
  /**
   * user is the ID of the user who created this event.
   *
   * @generated from protobuf field: string user = 300;
   */
  user: string;
}
/**
 * @generated from protobuf message event.SearchO_Object_Public
 */
export interface SearchO_Object_Public {
  /**
   * cate is the comma separated list of label IDs under which the event is
   * categorized.
   *
   * @generated from protobuf field: string cate = 100;
   */
  cate: string;
  /**
   * dura is the estimated duration of the event in seconds.
   *
   * @generated from protobuf field: string dura = 200;
   */
  dura: string;
  /**
   * host is the internal host ID expected to host the event.
   *
   * @generated from protobuf field: string host = 300;
   */
  host: string;
  /**
   * link is the online location at which the event is expected to take place.
   * For IRL events this may just be some informational website.
   *
   * @generated from protobuf field: string link = 400;
   */
  link: string;
  /**
   * time is the unix timestamp in seconds at which the event is expected to
   * start.
   *
   * @generated from protobuf field: string time = 500;
   */
  time: string;
}
declare class SearchI$Type extends MessageType<SearchI> {
  constructor();
  create(value?: PartialMessage<SearchI>): SearchI;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchI,
  ): SearchI;
  internalBinaryWrite(
    message: SearchI,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message event.SearchI
 */
export declare const SearchI: SearchI$Type;
declare class SearchI_Filter$Type extends MessageType<SearchI_Filter> {
  constructor();
  create(value?: PartialMessage<SearchI_Filter>): SearchI_Filter;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchI_Filter,
  ): SearchI_Filter;
  internalBinaryWrite(
    message: SearchI_Filter,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message event.SearchI_Filter
 */
export declare const SearchI_Filter: SearchI_Filter$Type;
declare class SearchI_Filter_Paging$Type extends MessageType<SearchI_Filter_Paging> {
  constructor();
  create(value?: PartialMessage<SearchI_Filter_Paging>): SearchI_Filter_Paging;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchI_Filter_Paging,
  ): SearchI_Filter_Paging;
  internalBinaryWrite(
    message: SearchI_Filter_Paging,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message event.SearchI_Filter_Paging
 */
export declare const SearchI_Filter_Paging: SearchI_Filter_Paging$Type;
declare class SearchI_Object$Type extends MessageType<SearchI_Object> {
  constructor();
  create(value?: PartialMessage<SearchI_Object>): SearchI_Object;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchI_Object,
  ): SearchI_Object;
  internalBinaryWrite(
    message: SearchI_Object,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message event.SearchI_Object
 */
export declare const SearchI_Object: SearchI_Object$Type;
declare class SearchI_Object_Intern$Type extends MessageType<SearchI_Object_Intern> {
  constructor();
  create(value?: PartialMessage<SearchI_Object_Intern>): SearchI_Object_Intern;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchI_Object_Intern,
  ): SearchI_Object_Intern;
  internalBinaryWrite(
    message: SearchI_Object_Intern,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message event.SearchI_Object_Intern
 */
export declare const SearchI_Object_Intern: SearchI_Object_Intern$Type;
declare class SearchI_Object_Public$Type extends MessageType<SearchI_Object_Public> {
  constructor();
  create(value?: PartialMessage<SearchI_Object_Public>): SearchI_Object_Public;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchI_Object_Public,
  ): SearchI_Object_Public;
  internalBinaryWrite(
    message: SearchI_Object_Public,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message event.SearchI_Object_Public
 */
export declare const SearchI_Object_Public: SearchI_Object_Public$Type;
declare class SearchI_Object_Symbol$Type extends MessageType<SearchI_Object_Symbol> {
  constructor();
  create(value?: PartialMessage<SearchI_Object_Symbol>): SearchI_Object_Symbol;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchI_Object_Symbol,
  ): SearchI_Object_Symbol;
  internalBinaryWrite(
    message: SearchI_Object_Symbol,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message event.SearchI_Object_Symbol
 */
export declare const SearchI_Object_Symbol: SearchI_Object_Symbol$Type;
declare class SearchO$Type extends MessageType<SearchO> {
  constructor();
  create(value?: PartialMessage<SearchO>): SearchO;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchO,
  ): SearchO;
  internalBinaryWrite(
    message: SearchO,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message event.SearchO
 */
export declare const SearchO: SearchO$Type;
declare class SearchO_Filter$Type extends MessageType<SearchO_Filter> {
  constructor();
  create(value?: PartialMessage<SearchO_Filter>): SearchO_Filter;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchO_Filter,
  ): SearchO_Filter;
  internalBinaryWrite(
    message: SearchO_Filter,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message event.SearchO_Filter
 */
export declare const SearchO_Filter: SearchO_Filter$Type;
declare class SearchO_Object$Type extends MessageType<SearchO_Object> {
  constructor();
  create(value?: PartialMessage<SearchO_Object>): SearchO_Object;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchO_Object,
  ): SearchO_Object;
  internalBinaryWrite(
    message: SearchO_Object,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message event.SearchO_Object
 */
export declare const SearchO_Object: SearchO_Object$Type;
declare class SearchO_Object_Extern$Type extends MessageType<SearchO_Object_Extern> {
  constructor();
  create(value?: PartialMessage<SearchO_Object_Extern>): SearchO_Object_Extern;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchO_Object_Extern,
  ): SearchO_Object_Extern;
  internalBinaryWrite(
    message: SearchO_Object_Extern,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message event.SearchO_Object_Extern
 */
export declare const SearchO_Object_Extern: SearchO_Object_Extern$Type;
declare class SearchO_Object_Intern$Type extends MessageType<SearchO_Object_Intern> {
  constructor();
  create(value?: PartialMessage<SearchO_Object_Intern>): SearchO_Object_Intern;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchO_Object_Intern,
  ): SearchO_Object_Intern;
  internalBinaryWrite(
    message: SearchO_Object_Intern,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message event.SearchO_Object_Intern
 */
export declare const SearchO_Object_Intern: SearchO_Object_Intern$Type;
declare class SearchO_Object_Public$Type extends MessageType<SearchO_Object_Public> {
  constructor();
  create(value?: PartialMessage<SearchO_Object_Public>): SearchO_Object_Public;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchO_Object_Public,
  ): SearchO_Object_Public;
  internalBinaryWrite(
    message: SearchO_Object_Public,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message event.SearchO_Object_Public
 */
export declare const SearchO_Object_Public: SearchO_Object_Public$Type;
export {};
