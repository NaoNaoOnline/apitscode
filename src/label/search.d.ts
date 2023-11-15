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
 *         "filter": {
 *             "paging": {
 *                 "strt": "0",
 *                 "stop": "49"
 *             }
 *         },
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
   * @generated from protobuf field: label.SearchI_Filter_Paging paging = 100;
   */
  paging?: SearchI_Filter_Paging;
}
/**
 * @generated from protobuf message label.SearchI_Filter_Paging
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
export interface SearchI_Object_Intern {
  /**
   * labl is the ID of the label being searched.
   *
   * @generated from protobuf field: string labl = 100;
   */
  labl: string;
  /**
   * user is the ID of the user having created the labels being searched. If
   * searching for labels created by a particular user, the search query object
   * must not contain any other fields.
   *
   * @generated from protobuf field: string user = 200;
   */
  user: string;
}
/**
 * @generated from protobuf message label.SearchI_Object_Public
 */
export interface SearchI_Object_Public {
  /**
   * kind is the label type for which labels are being searched.
   *
   *     bltn for system labels
   *     cate for category labels
   *     host for host labels
   *
   *
   * @generated from protobuf field: string kind = 100;
   */
  kind: string;
}
/**
 * SearchO is the output for searching labels.
 *
 *     {
 *         "object": [
 *             {
 *                 "intern": {
 *                     "crtd": "1689001255",
 *                     "labl": "863826",
 *                     "user": "551265"
 *                 },
 *                 "public": {
 *                     "desc": "Flashbots researches implications of MEV",
 *                     "kind": "host",
 *                     "name": "Flashbots",
 *                     "prfl": {
 *                         "Twitter": "FlashbotsFDN",
 *                         "Warpcast": "flashbots"
 *                     }
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
   * kind is the label type.
   *
   *     bltn for system labels
   *     cate for category labels
   *     host for host labels
   *
   *
   * @generated from protobuf field: string kind = 200;
   */
  kind: string;
  /**
   * name is the label name.
   *
   * @generated from protobuf field: string name = 300;
   */
  name: string;
  /**
   * prfl is the map of external accounts related to this label. These accounts
   * may point to references about this label or to the label owner on other
   * platforms.
   *
   * @generated from protobuf field: map<string, string> prfl = 400;
   */
  prfl: {
    [key: string]: string;
  };
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
 * @generated MessageType for protobuf message label.SearchI_Filter_Paging
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
  private binaryReadMap400;
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
