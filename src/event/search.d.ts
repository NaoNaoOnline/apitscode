// @generated by protobuf-ts 2.9.0 with parameter output_javascript
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
 *         "filter": [
 *             "chunking": {
 *                 "perpage": "50",
 *                 "pointer": "100"
 *             }
 *         ],
 *         "object": [
 *             {
 *                 "intern": {
 *                     "event.naonao.online/labels": "<id>,<id>,<id>"
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
   * @generated from protobuf field: event.SearchI_Filter filter = 1;
   */
  filter?: SearchI_Filter;
  /**
   * @generated from protobuf field: repeated event.SearchI_Object object = 2;
   */
  object: SearchI_Object[];
}
/**
 * @generated from protobuf message event.SearchI_Filter
 */
export interface SearchI_Filter {
  /**
   * @generated from protobuf field: event.SearchI_Filter_Chunking chunking = 1;
   */
  chunking?: SearchI_Filter_Chunking;
}
/**
 * @generated from protobuf message event.SearchI_Filter_Chunking
 */
export interface SearchI_Filter_Chunking {
  /**
   * @generated from protobuf field: string perpage = 1;
   */
  perpage: string;
  /**
   * @generated from protobuf field: string pointer = 2;
   */
  pointer: string;
}
/**
 * @generated from protobuf message event.SearchI_Object
 */
export interface SearchI_Object {
  /**
   * @generated from protobuf field: map<string, string> intern = 1;
   */
  intern: {
    [key: string]: string;
  };
  /**
   * @generated from protobuf field: event.SearchI_Object_Public public = 2;
   */
  public?: SearchI_Object_Public;
}
/**
 * @generated from protobuf message event.SearchI_Object_Public
 */
export interface SearchI_Object_Public {}
/**
 * SearchO is the output for searching events.
 *
 *     {
 *         "filter": [
 *             "chunking": {
 *                 "perpage": "50",
 *                 "pointer": "150"
 *             }
 *         ],
 *         "object": [
 *             {
 *                 "intern": {
 *                     "event.naonao.online/id": "<id>",
 *                     "event.naonao.online/created": "<unix>"
 *                 },
 *                 "public": {
 *                     "dura": "3600",
 *                     "host": "551265",
 *                     "labl": "863826",
 *                     "link": "https://google.com",
 *                     "time": "1689001255",
 *                     "user": "551265"
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
   * @generated from protobuf field: event.SearchO_Filter filter = 1;
   */
  filter?: SearchO_Filter;
  /**
   * @generated from protobuf field: repeated event.SearchO_Object object = 2;
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
   * @generated from protobuf field: map<string, string> intern = 1;
   */
  intern: {
    [key: string]: string;
  };
  /**
   * @generated from protobuf field: event.SearchO_Object_Public public = 2;
   */
  public?: SearchO_Object_Public;
}
/**
 * @generated from protobuf message event.SearchO_Object_Public
 */
export interface SearchO_Object_Public {
  /**
   * dura is the estimated duration of the scheduled event.
   *
   * @generated from protobuf field: string dura = 1;
   */
  dura: string;
  /**
   * host is the internal host ID expected to host the scheduled event.
   *
   * @generated from protobuf field: string host = 2;
   */
  host: string;
  /**
   * labl is the label ID under which the scheduled event is categorized.
   *
   * @generated from protobuf field: string labl = 3;
   */
  labl: string;
  /**
   * link is the online location at which the scheduled event is expected to
   * take place. For IRL events this may just be some informational website.
   *
   * @generated from protobuf field: string link = 4;
   */
  link: string;
  /**
   * time is the unix timestamp in seconds at which the scheduled event is
   * expected to start.
   *
   * @generated from protobuf field: string time = 5;
   */
  time: string;
  /**
   * user is the user ID creating this scheduled event. Effectively hosts may be
   * the very users creating their own events within NaoNao. Regardless anyone
   * should be able to create scheduled events for any host.
   *
   * @generated from protobuf field: string user = 6;
   */
  user: string;
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
declare class SearchI_Filter_Chunking$Type extends MessageType<SearchI_Filter_Chunking> {
  constructor();
  create(
    value?: PartialMessage<SearchI_Filter_Chunking>,
  ): SearchI_Filter_Chunking;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchI_Filter_Chunking,
  ): SearchI_Filter_Chunking;
  internalBinaryWrite(
    message: SearchI_Filter_Chunking,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message event.SearchI_Filter_Chunking
 */
export declare const SearchI_Filter_Chunking: SearchI_Filter_Chunking$Type;
declare class SearchI_Object$Type extends MessageType<SearchI_Object> {
  constructor();
  create(value?: PartialMessage<SearchI_Object>): SearchI_Object;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchI_Object,
  ): SearchI_Object;
  private binaryReadMap1;
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
  private binaryReadMap1;
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