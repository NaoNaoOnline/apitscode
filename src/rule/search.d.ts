// @generated by protobuf-ts 2.9.3 with parameter output_javascript
// @generated from protobuf file "pbf/rule/search.proto" (package "rule", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * SearchI is the input for searching rules. Note that search queries for rules
 * must be authenticated. Also note that search queries for rules are scoped to
 * the calling user. That is, the caller can only ever search for their own
 * rules.
 *
 *     {
 *         "filter": {
 *             "paging": {
 *                 "kind": "page",
 *                 "strt": "0",
 *                 "stop": "49"
 *             }
 *         },
 *         "object": [
 *             {
 *                 "public": {
 *                     "list": "986763351"
 *                 }
 *             }
 *         ]
 *     }
 *
 *
 * @generated from protobuf message rule.SearchI
 */
export interface SearchI {
  /**
   * @generated from protobuf field: rule.SearchI_Filter filter = 100;
   */
  filter?: SearchI_Filter;
  /**
   * @generated from protobuf field: repeated rule.SearchI_Object object = 200;
   */
  object: SearchI_Object[];
}
/**
 * @generated from protobuf message rule.SearchI_Filter
 */
export interface SearchI_Filter {
  /**
   * @generated from protobuf field: rule.SearchI_Filter_Paging paging = 100;
   */
  paging?: SearchI_Filter_Paging;
}
/**
 * @generated from protobuf message rule.SearchI_Filter_Paging
 */
export interface SearchI_Filter_Paging {
  /**
   * @generated from protobuf field: string kind = 100;
   */
  kind: string;
  /**
   * @generated from protobuf field: string strt = 200;
   */
  strt: string;
  /**
   * @generated from protobuf field: string stop = 300;
   */
  stop: string;
}
/**
 * @generated from protobuf message rule.SearchI_Object
 */
export interface SearchI_Object {
  /**
   * @generated from protobuf field: rule.SearchI_Object_Intern intern = 100;
   */
  intern?: SearchI_Object_Intern;
  /**
   * @generated from protobuf field: rule.SearchI_Object_Public public = 200;
   */
  public?: SearchI_Object_Public;
}
/**
 * @generated from protobuf message rule.SearchI_Object_Intern
 */
export interface SearchI_Object_Intern {}
/**
 * @generated from protobuf message rule.SearchI_Object_Public
 */
export interface SearchI_Object_Public {
  /**
   * list is the ID of the list for which to search all associated rules.
   *
   * @generated from protobuf field: string list = 100;
   */
  list: string;
}
/**
 * SearchO is the output for searching rules.
 *
 *     {
 *         "object": [
 *             {
 *                 "intern": {
 *                     "crtd": "1689001255",
 *                     "rule": "21371336",
 *                     "user": "551265"
 *                 },
 *                 "public": {
 *                     "incl": "863826",
 *                     "kind": "host",
 *                     "list": "986763351"
 *                 }
 *             },
 *             ...
 *         ]
 *     }
 *
 *
 * @generated from protobuf message rule.SearchO
 */
export interface SearchO {
  /**
   * @generated from protobuf field: rule.SearchO_Filter filter = 100;
   */
  filter?: SearchO_Filter;
  /**
   * @generated from protobuf field: repeated rule.SearchO_Object object = 200;
   */
  object: SearchO_Object[];
}
/**
 * @generated from protobuf message rule.SearchO_Filter
 */
export interface SearchO_Filter {}
/**
 * @generated from protobuf message rule.SearchO_Object
 */
export interface SearchO_Object {
  /**
   * @generated from protobuf field: rule.SearchO_Object_Intern intern = 100;
   */
  intern?: SearchO_Object_Intern;
  /**
   * @generated from protobuf field: rule.SearchO_Object_Public public = 200;
   */
  public?: SearchO_Object_Public;
}
/**
 * @generated from protobuf message rule.SearchO_Object_Intern
 */
export interface SearchO_Object_Intern {
  /**
   * crtd is the unix timestamp in seconds at which the rule got created.
   *
   * @generated from protobuf field: string crtd = 100;
   */
  crtd: string;
  /**
   * rule is the ID of the rule being searched.
   *
   * @generated from protobuf field: string rule = 200;
   */
  rule: string;
  /**
   * user is the ID of the user who created this rule.
   *
   * @generated from protobuf field: string user = 300;
   */
  user: string;
}
/**
 * @generated from protobuf message rule.SearchO_Object_Public
 */
export interface SearchO_Object_Public {
  /**
   * excl is the rule's object ID to remove from the associated list, if any.
   *
   * @generated from protobuf field: string excl = 100;
   */
  excl: string;
  /**
   * incl is the rule's object ID to add to the associated list, if any.
   *
   * @generated from protobuf field: string incl = 200;
   */
  incl: string;
  /**
   * kind is the rule's object type defining the resource for included and
   * excluded object IDs. kind set to "host" includes and excludes the
   * respective host label IDs when computing the associated list.
   *
   *     cate for adding or removing events matching the given category IDs
   *     evnt for adding or removing events matching the given event IDs
   *     host for adding or removing events matching the given host IDs
   *     user for adding or removing events created by the given user IDs
   *
   *
   * @generated from protobuf field: string kind = 300;
   */
  kind: string;
  /**
   * list is the list ID this rule is mapped to.
   *
   * @generated from protobuf field: string list = 400;
   */
  list: string;
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
 * @generated MessageType for protobuf message rule.SearchI
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
 * @generated MessageType for protobuf message rule.SearchI_Filter
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
 * @generated MessageType for protobuf message rule.SearchI_Filter_Paging
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
 * @generated MessageType for protobuf message rule.SearchI_Object
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
 * @generated MessageType for protobuf message rule.SearchI_Object_Intern
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
 * @generated MessageType for protobuf message rule.SearchI_Object_Public
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
 * @generated MessageType for protobuf message rule.SearchO
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
 * @generated MessageType for protobuf message rule.SearchO_Filter
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
 * @generated MessageType for protobuf message rule.SearchO_Object
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
 * @generated MessageType for protobuf message rule.SearchO_Object_Intern
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
 * @generated MessageType for protobuf message rule.SearchO_Object_Public
 */
export declare const SearchO_Object_Public: SearchO_Object_Public$Type;
export {};
