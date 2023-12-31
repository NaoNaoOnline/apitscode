// @generated by protobuf-ts 2.9.3 with parameter output_javascript
// @generated from protobuf file "pbf/subscription/search.proto" (package "subscription", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * SearchI is the input for searching subscriptions. Note that search queries
 * for subscriptions must be authenticated. Also note that search queries for
 * subscriptions are scoped to the calling user. That is, the caller can only
 * ever search for their own subscriptions.
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
 *                 "intern": {
 *                     "subs": "98762362635"
 *                 }
 *             }
 *         ]
 *     }
 *
 *
 * @generated from protobuf message subscription.SearchI
 */
export interface SearchI {
  /**
   * @generated from protobuf field: subscription.SearchI_Filter filter = 100;
   */
  filter?: SearchI_Filter;
  /**
   * @generated from protobuf field: repeated subscription.SearchI_Object object = 200;
   */
  object: SearchI_Object[];
}
/**
 * @generated from protobuf message subscription.SearchI_Filter
 */
export interface SearchI_Filter {
  /**
   * @generated from protobuf field: subscription.SearchI_Filter_Paging paging = 100;
   */
  paging?: SearchI_Filter_Paging;
}
/**
 * @generated from protobuf message subscription.SearchI_Filter_Paging
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
 * @generated from protobuf message subscription.SearchI_Object
 */
export interface SearchI_Object {
  /**
   * @generated from protobuf field: subscription.SearchI_Object_Intern intern = 100;
   */
  intern?: SearchI_Object_Intern;
  /**
   * @generated from protobuf field: subscription.SearchI_Object_Public public = 200;
   */
  public?: SearchI_Object_Public;
}
/**
 * @generated from protobuf message subscription.SearchI_Object_Intern
 */
export interface SearchI_Object_Intern {
  /**
   * subs is the ID of the subscription being searched.
   *
   * @generated from protobuf field: string subs = 100;
   */
  subs: string;
  /**
   * user is the ID of the user having created the subscription being searched.
   *
   * @generated from protobuf field: string user = 200;
   */
  user: string;
}
/**
 * @generated from protobuf message subscription.SearchI_Object_Public
 */
export interface SearchI_Object_Public {
  /**
   * payr is the user ID of the user paying for the premium subscription being
   * searched.
   *
   * @generated from protobuf field: string payr = 100;
   */
  payr: string;
  /**
   * rcvr is the user ID of the user receiving the premium subscription being
   * searched.
   *
   * @generated from protobuf field: string rcvr = 200;
   */
  rcvr: string;
}
/**
 * SearchO is the output for searching subscriptions.
 *
 *     {
 *         "object": [
 *             {
 *                 "intern": {
 *                     "crtd": "1689001255",
 *                     "stts": "success",
 *                     "subs": "98762362635",
 *                     "user": "551265"
 *                 },
 *                 "public": {
 *                     "crtr": "0x2345",
 *                     "payr": "551265",
 *                     "rcvr": "551265",
 *                     "unix": "1698793200"
 *                 }
 *             },
 *             ...
 *         ]
 *     }
 *
 *
 * @generated from protobuf message subscription.SearchO
 */
export interface SearchO {
  /**
   * @generated from protobuf field: subscription.SearchO_Filter filter = 100;
   */
  filter?: SearchO_Filter;
  /**
   * @generated from protobuf field: repeated subscription.SearchO_Object object = 200;
   */
  object: SearchO_Object[];
}
/**
 * @generated from protobuf message subscription.SearchO_Filter
 */
export interface SearchO_Filter {}
/**
 * @generated from protobuf message subscription.SearchO_Object
 */
export interface SearchO_Object {
  /**
   * @generated from protobuf field: subscription.SearchO_Object_Intern intern = 100;
   */
  intern?: SearchO_Object_Intern;
  /**
   * @generated from protobuf field: subscription.SearchO_Object_Public public = 200;
   */
  public?: SearchO_Object_Public;
}
/**
 * @generated from protobuf message subscription.SearchO_Object_Intern
 */
export interface SearchO_Object_Intern {
  /**
   * crtd is the unix timestamp in seconds at which the subscription got
   * created.
   *
   * @generated from protobuf field: string crtd = 100;
   */
  crtd: string;
  /**
   * fail is the description explaining why a subscription could not be verified
   * successfully. Most subscriptions should not be accompanied by a failure
   * message.
   *
   * @generated from protobuf field: string fail = 200;
   */
  fail: string;
  /**
   * stts is the resource status expressing whether this subscription is active.
   * An active subscription is verified by comparing its offchain and onchain
   * state. Subscriptions found to be invalid will not be marked as active, but
   * will instead be accompanied by
   *
   *     created for a newly created subscriptions
   *     failure for successfully processed subscriptions
   *     success for processed subscriptions found to be invalid
   *
   *
   * @generated from protobuf field: string stts = 300;
   */
  stts: string;
  /**
   * subs is the ID of the subscription being searched.
   *
   * @generated from protobuf field: string subs = 400;
   */
  subs: string;
  /**
   * user is the ID of the user who created this subscription.
   *
   * @generated from protobuf field: string user = 500;
   */
  user: string;
}
/**
 * @generated from protobuf message subscription.SearchO_Object_Public
 */
export interface SearchO_Object_Public {
  /**
   * crtr is the wallet address of a content creator designated for the purpose
   * of accounting. These are the creator addresses getting paid peer-to-peer by
   * users subscribing for accessing premium features.
   *
   * @generated from protobuf field: string crtr = 100;
   */
  crtr: string;
  /**
   * payr is the user ID of the user paying for the premium subscription. This
   * is usually the same user ID as rcvr, but it does not have to be the same.
   * The idea here is that subscriptions can be gifted to other users.
   *
   * @generated from protobuf field: string payr = 200;
   */
  payr: string;
  /**
   * rcvr is the user ID of the user receiving the premium subscription.
   *
   * @generated from protobuf field: string rcvr = 300;
   */
  rcvr: string;
  /**
   * unix is the timestamp of the subscription period. This timestamp must be
   * represented in unix seconds, that is in UTC, pointing to the start of any
   * given month. For instance, 1698793200 is Wed Nov 01 2023 00:00:00 UTC,
   * which would subscribe for the whole month of November 2023.
   *
   * @generated from protobuf field: string unix = 400;
   */
  unix: string;
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
 * @generated MessageType for protobuf message subscription.SearchI
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
 * @generated MessageType for protobuf message subscription.SearchI_Filter
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
 * @generated MessageType for protobuf message subscription.SearchI_Filter_Paging
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
 * @generated MessageType for protobuf message subscription.SearchI_Object
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
 * @generated MessageType for protobuf message subscription.SearchI_Object_Intern
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
 * @generated MessageType for protobuf message subscription.SearchI_Object_Public
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
 * @generated MessageType for protobuf message subscription.SearchO
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
 * @generated MessageType for protobuf message subscription.SearchO_Filter
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
 * @generated MessageType for protobuf message subscription.SearchO_Object
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
 * @generated MessageType for protobuf message subscription.SearchO_Object_Intern
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
 * @generated MessageType for protobuf message subscription.SearchO_Object_Public
 */
export declare const SearchO_Object_Public: SearchO_Object_Public$Type;
export {};
