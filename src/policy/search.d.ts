// @generated by protobuf-ts 2.9.1 with parameter output_javascript
// @generated from protobuf file "pbf/policy/search.proto" (package "policy", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * SearchI is the input for searching policies.
 *
 *     {
 *         "filter": {
 *             "paging": {
 *                 "perpage": "50",
 *                 "pointer": "100"
 *             }
 *         },
 *         "object": [
 *             {
 *                 "symbol": {
 *                     "ltst": "default"
 *                 }
 *             }
 *         ]
 *     }
 *
 * For more information about the policy contracts, record types and SMAs, see
 * the contracts repository on Github.
 *
 *     https://github.com/NaoNaoOnline/contracts
 *
 *
 * @generated from protobuf message policy.SearchI
 */
export interface SearchI {
  /**
   * @generated from protobuf field: policy.SearchI_Filter filter = 100;
   */
  filter?: SearchI_Filter;
  /**
   * @generated from protobuf field: repeated policy.SearchI_Object object = 200;
   */
  object: SearchI_Object[];
}
/**
 * @generated from protobuf message policy.SearchI_Filter
 */
export interface SearchI_Filter {
  /**
   * @generated from protobuf field: policy.SearchI_Filter_Paging paging = 100;
   */
  paging?: SearchI_Filter_Paging;
}
/**
 * @generated from protobuf message policy.SearchI_Filter_Paging
 */
export interface SearchI_Filter_Paging {
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
 * @generated from protobuf message policy.SearchI_Object
 */
export interface SearchI_Object {
  /**
   * @generated from protobuf field: policy.SearchI_Object_Intern intern = 100;
   */
  intern?: SearchI_Object_Intern;
  /**
   * @generated from protobuf field: policy.SearchI_Object_Public public = 200;
   */
  public?: SearchI_Object_Public;
  /**
   * @generated from protobuf field: policy.SearchI_Object_Symbol symbol = 300;
   */
  symbol?: SearchI_Object_Symbol;
}
/**
 * @generated from protobuf message policy.SearchI_Object_Intern
 */
export interface SearchI_Object_Intern {}
/**
 * @generated from protobuf message policy.SearchI_Object_Public
 */
export interface SearchI_Object_Public {}
/**
 * @generated from protobuf message policy.SearchI_Object_Symbol
 */
export interface SearchI_Object_Symbol {
  /**
   * ltst set to "default" returns the latest aggregated version of cached
   * policy records indexed from all onchain smart contracts configured. That
   * is, the list of aggregated records representing the currently active
   * authorization states.
   *
   * Note that indexing happens periodically in a background process, which can
   * be triggered by policy members to update the cached state on demand using
   * policy.API/Update.
   *
   * @generated from protobuf field: string ltst = 100;
   */
  ltst: string;
}
/**
 * SearchO is the output for searching policies.
 *
 *     {
 *         "filter": {
 *             "paging": {
 *                 "intotal": "750",
 *                 "pointer": "150"
 *             }
 *         },
 *         "object": [
 *             {
 *                 "extern": [
 *                     {
 *                         "chid": "42161"
 *                     }
 *                 ],
 *                 "intern": {
 *                     "user": "551265"
 *                 },
 *                 "public": {
 *                     "acce": "2",
 *                     "memb": "0x3456",
 *                     "syst": "0"
 *                 }
 *             },
 *             ...
 *         ]
 *     }
 *
 *
 * @generated from protobuf message policy.SearchO
 */
export interface SearchO {
  /**
   * @generated from protobuf field: policy.SearchO_Filter filter = 100;
   */
  filter?: SearchO_Filter;
  /**
   * @generated from protobuf field: repeated policy.SearchO_Object object = 200;
   */
  object: SearchO_Object[];
}
/**
 * @generated from protobuf message policy.SearchO_Filter
 */
export interface SearchO_Filter {
  /**
   * @generated from protobuf field: policy.SearchO_Filter_Paging paging = 100;
   */
  paging?: SearchO_Filter_Paging;
}
/**
 * @generated from protobuf message policy.SearchO_Filter_Paging
 */
export interface SearchO_Filter_Paging {
  /**
   * @generated from protobuf field: string intotal = 100;
   */
  intotal: string;
  /**
   * @generated from protobuf field: string pointer = 200;
   */
  pointer: string;
}
/**
 * @generated from protobuf message policy.SearchO_Object
 */
export interface SearchO_Object {
  /**
   * @generated from protobuf field: repeated policy.SearchO_Object_Extern extern = 100;
   */
  extern: SearchO_Object_Extern[];
  /**
   * @generated from protobuf field: policy.SearchO_Object_Intern intern = 200;
   */
  intern?: SearchO_Object_Intern;
  /**
   * @generated from protobuf field: policy.SearchO_Object_Public public = 300;
   */
  public?: SearchO_Object_Public;
}
/**
 * @generated from protobuf message policy.SearchO_Object_Extern
 */
export interface SearchO_Object_Extern {
  /**
   * chid is the chain ID, the unique identifier representing the blockchain
   * network on which this record is located.
   *
   * @generated from protobuf field: string chid = 100;
   */
  chid: string;
}
/**
 * @generated from protobuf message policy.SearchO_Object_Intern
 */
export interface SearchO_Object_Intern {
  /**
   * user is the user ID matched to this wallet on the fly, if any. We do not
   * persist the direct relationship between policy and user because of several
   * synchronization issues. The user ID will be looked up on demand when
   * searching for polices. It might as well also be that there is no user
   * association for a policy object intermittently.
   *
   * @generated from protobuf field: string user = 100;
   */
  user: string;
}
/**
 * @generated from protobuf message policy.SearchO_Object_Public
 */
export interface SearchO_Object_Public {
  /**
   * acce is the SMA record level, permission or role.
   *
   * @generated from protobuf field: string acce = 100;
   */
  acce: string;
  /**
   * memb is the SMA record account, identity or user.
   *
   * @generated from protobuf field: string memb = 200;
   */
  memb: string;
  /**
   * syst is the SMA record context, resource or scope.
   *
   * @generated from protobuf field: string syst = 300;
   */
  syst: string;
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
 * @generated MessageType for protobuf message policy.SearchI
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
 * @generated MessageType for protobuf message policy.SearchI_Filter
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
 * @generated MessageType for protobuf message policy.SearchI_Filter_Paging
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
 * @generated MessageType for protobuf message policy.SearchI_Object
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
 * @generated MessageType for protobuf message policy.SearchI_Object_Intern
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
 * @generated MessageType for protobuf message policy.SearchI_Object_Public
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
 * @generated MessageType for protobuf message policy.SearchI_Object_Symbol
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
 * @generated MessageType for protobuf message policy.SearchO
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
 * @generated MessageType for protobuf message policy.SearchO_Filter
 */
export declare const SearchO_Filter: SearchO_Filter$Type;
declare class SearchO_Filter_Paging$Type extends MessageType<SearchO_Filter_Paging> {
  constructor();
  create(value?: PartialMessage<SearchO_Filter_Paging>): SearchO_Filter_Paging;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchO_Filter_Paging,
  ): SearchO_Filter_Paging;
  internalBinaryWrite(
    message: SearchO_Filter_Paging,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message policy.SearchO_Filter_Paging
 */
export declare const SearchO_Filter_Paging: SearchO_Filter_Paging$Type;
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
 * @generated MessageType for protobuf message policy.SearchO_Object
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
 * @generated MessageType for protobuf message policy.SearchO_Object_Extern
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
 * @generated MessageType for protobuf message policy.SearchO_Object_Intern
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
 * @generated MessageType for protobuf message policy.SearchO_Object_Public
 */
export declare const SearchO_Object_Public: SearchO_Object_Public$Type;
export {};
