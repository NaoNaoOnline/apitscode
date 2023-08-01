// @generated by protobuf-ts 2.9.1 with parameter output_javascript
// @generated from protobuf file "pbf/user/search.proto" (package "user", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * SearchI is the input for searching users.
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
 *                     "user": "551265"
 *                 }
 *             }
 *         ]
 *     }
 *
 *
 * @generated from protobuf message user.SearchI
 */
export interface SearchI {
  /**
   * @generated from protobuf field: user.SearchI_Filter filter = 100;
   */
  filter?: SearchI_Filter;
  /**
   * @generated from protobuf field: repeated user.SearchI_Object object = 200;
   */
  object: SearchI_Object[];
}
/**
 * @generated from protobuf message user.SearchI_Filter
 */
export interface SearchI_Filter {
  /**
   * @generated from protobuf field: user.SearchI_Filter_Chunking chunking = 100;
   */
  chunking?: SearchI_Filter_Chunking;
}
/**
 * @generated from protobuf message user.SearchI_Filter_Chunking
 */
export interface SearchI_Filter_Chunking {
  /**
   * @generated from protobuf field: string perpage = 100;
   */
  perpage: string;
  /**
   * @generated from protobuf field: string pointer = 200;
   */
  pointer: string;
}
/**
 * @generated from protobuf message user.SearchI_Object
 */
export interface SearchI_Object {
  /**
   * @generated from protobuf field: user.SearchI_Object_Intern intern = 100;
   */
  intern?: SearchI_Object_Intern;
  /**
   * @generated from protobuf field: user.SearchI_Object_Public public = 200;
   */
  public?: SearchI_Object_Public;
}
/**
 * @generated from protobuf message user.SearchI_Object_Intern
 */
export interface SearchI_Object_Intern {
  /**
   * user is the ID of the user being searched.
   *
   * @generated from protobuf field: string user = 100;
   */
  user: string;
}
/**
 * @generated from protobuf message user.SearchI_Object_Public
 */
export interface SearchI_Object_Public {}
/**
 * SearchO is the output for searching users.
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
 *                     "crtd": "1689001255",
 *                     "user": "551265"
 *                 },
 *                 "public": {
 *                     "name": "xh3b4sd"
 *                 }
 *             },
 *             ...
 *         ]
 *     }
 *
 *
 * @generated from protobuf message user.SearchO
 */
export interface SearchO {
  /**
   * @generated from protobuf field: user.SearchO_Filter filter = 100;
   */
  filter?: SearchO_Filter;
  /**
   * @generated from protobuf field: repeated user.SearchO_Object object = 200;
   */
  object: SearchO_Object[];
}
/**
 * @generated from protobuf message user.SearchO_Filter
 */
export interface SearchO_Filter {}
/**
 * @generated from protobuf message user.SearchO_Object
 */
export interface SearchO_Object {
  /**
   * @generated from protobuf field: user.SearchO_Object_Intern intern = 100;
   */
  intern?: SearchO_Object_Intern;
  /**
   * @generated from protobuf field: user.SearchO_Object_Public public = 200;
   */
  public?: SearchO_Object_Public;
}
/**
 * @generated from protobuf message user.SearchO_Object_Intern
 */
export interface SearchO_Object_Intern {
  /**
   * crtd is the unix timestamp in seconds at which the event got created.
   *
   * @generated from protobuf field: string crtd = 100;
   */
  crtd: string;
  /**
   * user is the ID of the user being searched.
   *
   * @generated from protobuf field: string user = 200;
   */
  user: string;
}
/**
 * @generated from protobuf message user.SearchO_Object_Public
 */
export interface SearchO_Object_Public {
  /**
   * name is the user name.
   *
   * @generated from protobuf field: string name = 100;
   */
  name: string;
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
 * @generated MessageType for protobuf message user.SearchI
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
 * @generated MessageType for protobuf message user.SearchI_Filter
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
 * @generated MessageType for protobuf message user.SearchI_Filter_Chunking
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
  internalBinaryWrite(
    message: SearchI_Object,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message user.SearchI_Object
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
 * @generated MessageType for protobuf message user.SearchI_Object_Intern
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
 * @generated MessageType for protobuf message user.SearchI_Object_Public
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
 * @generated MessageType for protobuf message user.SearchO
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
 * @generated MessageType for protobuf message user.SearchO_Filter
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
 * @generated MessageType for protobuf message user.SearchO_Object
 */
export declare const SearchO_Object: SearchO_Object$Type;
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
 * @generated MessageType for protobuf message user.SearchO_Object_Intern
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
 * @generated MessageType for protobuf message user.SearchO_Object_Public
 */
export declare const SearchO_Object_Public: SearchO_Object_Public$Type;
export {};
