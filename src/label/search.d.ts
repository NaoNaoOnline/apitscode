// @generated by protobuf-ts 2.9.1 with parameter output_javascript
// @generated from protobuf file "pbf/label/search.proto" (package "label", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * SearchI is the input for searching labels.
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
 *                 "public": {
 *                     "kind": "host"
 *                 }
 *             }
 *         ]
 *     }
 *
 *
 * @generated from protobuf message label.SearchI
 */
export interface SearchI {
  /**
   * @generated from protobuf field: label.SearchI_Filter filter = 100;
   */
  filter?: SearchI_Filter;
  /**
   * @generated from protobuf field: repeated label.SearchI_Object object = 200;
   */
  object: SearchI_Object[];
}
/**
 * @generated from protobuf message label.SearchI_Filter
 */
export interface SearchI_Filter {
  /**
   * @generated from protobuf field: label.SearchI_Filter_Chunking chunking = 100;
   */
  chunking?: SearchI_Filter_Chunking;
}
/**
 * @generated from protobuf message label.SearchI_Filter_Chunking
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
 * @generated from protobuf message label.SearchI_Object
 */
export interface SearchI_Object {
  /**
   * @generated from protobuf field: label.SearchI_Object_Intern intern = 100;
   */
  intern?: SearchI_Object_Intern;
  /**
   * @generated from protobuf field: label.SearchI_Object_Public public = 200;
   */
  public?: SearchI_Object_Public;
}
/**
 * @generated from protobuf message label.SearchI_Object_Intern
 */
export interface SearchI_Object_Intern {}
/**
 * @generated from protobuf message label.SearchI_Object_Public
 */
export interface SearchI_Object_Public {
  /**
   * kind is the label type for which events are being searched, e.g. host for
   * host labels and cate for category labels.
   *
   * @generated from protobuf field: string kind = 100;
   */
  kind: string;
  /**
   * labl is the ID of the label being searched.
   *
   * @generated from protobuf field: string labl = 200;
   */
  labl: string;
}
/**
 * SearchO is the output for searching labels.
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
 *                     "labl": "863826",
 *                     "user": "551265"
 *                 },
 *                 "public": {
 *                     "desc": "Flashbots researches implications of MEV",
 *                     "disc": "https://discord.gg/Flashbots",
 *                     "kind": "host",
 *                     "name": "Flashbots",
 *                     "twit": "https://twitter.com/Flashbots"
 *                 }
 *             },
 *             ...
 *         ]
 *     }
 *
 *
 * @generated from protobuf message label.SearchO
 */
export interface SearchO {
  /**
   * @generated from protobuf field: label.SearchO_Filter filter = 100;
   */
  filter?: SearchO_Filter;
  /**
   * @generated from protobuf field: repeated label.SearchO_Object object = 200;
   */
  object: SearchO_Object[];
}
/**
 * @generated from protobuf message label.SearchO_Filter
 */
export interface SearchO_Filter {}
/**
 * @generated from protobuf message label.SearchO_Object
 */
export interface SearchO_Object {
  /**
   * @generated from protobuf field: label.SearchO_Object_Intern intern = 100;
   */
  intern?: SearchO_Object_Intern;
  /**
   * @generated from protobuf field: label.SearchO_Object_Public public = 200;
   */
  public?: SearchO_Object_Public;
}
/**
 * @generated from protobuf message label.SearchO_Object_Intern
 */
export interface SearchO_Object_Intern {
  /**
   * crtd is the unix timestamp in seconds at which the label got created.
   *
   * @generated from protobuf field: string crtd = 100;
   */
  crtd: string;
  /**
   * labl is the ID of the label being searched.
   *
   * @generated from protobuf field: string labl = 200;
   */
  labl: string;
  /**
   * user is the ID of the user who created this label.
   *
   * @generated from protobuf field: string user = 300;
   */
  user: string;
}
/**
 * @generated from protobuf message label.SearchO_Object_Public
 */
export interface SearchO_Object_Public {
  /**
   * desc is the label's description.
   *
   * @generated from protobuf field: string desc = 100;
   */
  desc: string;
  /**
   * disc is the label's Discord link.
   *
   * @generated from protobuf field: string disc = 200;
   */
  disc: string;
  /**
   * kind is the label type, e.g. host for host labels and cate for category
   * labels.
   *
   * @generated from protobuf field: string kind = 300;
   */
  kind: string;
  /**
   * name is the label name.
   *
   * @generated from protobuf field: string name = 400;
   */
  name: string;
  /**
   * twit is the label's Twitter link.
   *
   * @generated from protobuf field: string twit = 500;
   */
  twit: string;
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
 * @generated MessageType for protobuf message label.SearchI
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
 * @generated MessageType for protobuf message label.SearchI_Filter
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
 * @generated MessageType for protobuf message label.SearchI_Filter_Chunking
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
 * @generated MessageType for protobuf message label.SearchI_Object
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
 * @generated MessageType for protobuf message label.SearchI_Object_Intern
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
 * @generated MessageType for protobuf message label.SearchI_Object_Public
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
 * @generated MessageType for protobuf message label.SearchO
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
 * @generated MessageType for protobuf message label.SearchO_Filter
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
 * @generated MessageType for protobuf message label.SearchO_Object
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
 * @generated MessageType for protobuf message label.SearchO_Object_Intern
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
 * @generated MessageType for protobuf message label.SearchO_Object_Public
 */
export declare const SearchO_Object_Public: SearchO_Object_Public$Type;
export {};
