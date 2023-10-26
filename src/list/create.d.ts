// @generated by protobuf-ts 2.9.1 with parameter output_javascript
// @generated from protobuf file "pbf/list/create.proto" (package "list", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * CreateI is the input for creating lists. Note that create queries for lists
 * must be authenticated. Also note that create queries for lists are scoped to
 * the calling user. That is, the caller can only ever create lists for
 * themselves.
 *
 *     {
 *         "object": [
 *             {
 *                 "public": {
 *                     "desc": "where CT personalities meet"
 *                 }
 *             }
 *         ]
 *     }
 *
 *
 * @generated from protobuf message list.CreateI
 */
export interface CreateI {
  /**
   * @generated from protobuf field: list.CreateI_Filter filter = 100;
   */
  filter?: CreateI_Filter;
  /**
   * @generated from protobuf field: repeated list.CreateI_Object object = 200;
   */
  object: CreateI_Object[];
}
/**
 * @generated from protobuf message list.CreateI_Filter
 */
export interface CreateI_Filter {}
/**
 * @generated from protobuf message list.CreateI_Object
 */
export interface CreateI_Object {
  /**
   * @generated from protobuf field: list.CreateI_Object_Intern intern = 100;
   */
  intern?: CreateI_Object_Intern;
  /**
   * @generated from protobuf field: list.CreateI_Object_Public public = 200;
   */
  public?: CreateI_Object_Public;
}
/**
 * @generated from protobuf message list.CreateI_Object_Intern
 */
export interface CreateI_Object_Intern {}
/**
 * @generated from protobuf message list.CreateI_Object_Public
 */
export interface CreateI_Object_Public {
  /**
   * desc is the list's description.
   *
   * @generated from protobuf field: string desc = 100;
   */
  desc: string;
}
/**
 * CreateO is the output for creating lists.
 *
 *     {
 *         "object": [
 *             {
 *                 "intern": {
 *                     "crtd": "1689001255",
 *                     "list": "986763351"
 *                 }
 *             }
 *         ]
 *     }
 *
 *
 * @generated from protobuf message list.CreateO
 */
export interface CreateO {
  /**
   * @generated from protobuf field: list.CreateO_Filter filter = 100;
   */
  filter?: CreateO_Filter;
  /**
   * @generated from protobuf field: repeated list.CreateO_Object object = 200;
   */
  object: CreateO_Object[];
}
/**
 * @generated from protobuf message list.CreateO_Filter
 */
export interface CreateO_Filter {}
/**
 * @generated from protobuf message list.CreateO_Object
 */
export interface CreateO_Object {
  /**
   * @generated from protobuf field: list.CreateO_Object_Intern intern = 100;
   */
  intern?: CreateO_Object_Intern;
  /**
   * @generated from protobuf field: list.CreateO_Object_Public public = 200;
   */
  public?: CreateO_Object_Public;
}
/**
 * @generated from protobuf message list.CreateO_Object_Intern
 */
export interface CreateO_Object_Intern {
  /**
   * crtd is the unix timestamp in seconds at which the list got created.
   *
   * @generated from protobuf field: string crtd = 100;
   */
  crtd: string;
  /**
   * list is the ID of the list being created.
   *
   * @generated from protobuf field: string list = 200;
   */
  list: string;
}
/**
 * @generated from protobuf message list.CreateO_Object_Public
 */
export interface CreateO_Object_Public {}
declare class CreateI$Type extends MessageType<CreateI> {
  constructor();
  create(value?: PartialMessage<CreateI>): CreateI;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: CreateI,
  ): CreateI;
  internalBinaryWrite(
    message: CreateI,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message list.CreateI
 */
export declare const CreateI: CreateI$Type;
declare class CreateI_Filter$Type extends MessageType<CreateI_Filter> {
  constructor();
  create(value?: PartialMessage<CreateI_Filter>): CreateI_Filter;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: CreateI_Filter,
  ): CreateI_Filter;
  internalBinaryWrite(
    message: CreateI_Filter,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message list.CreateI_Filter
 */
export declare const CreateI_Filter: CreateI_Filter$Type;
declare class CreateI_Object$Type extends MessageType<CreateI_Object> {
  constructor();
  create(value?: PartialMessage<CreateI_Object>): CreateI_Object;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: CreateI_Object,
  ): CreateI_Object;
  internalBinaryWrite(
    message: CreateI_Object,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message list.CreateI_Object
 */
export declare const CreateI_Object: CreateI_Object$Type;
declare class CreateI_Object_Intern$Type extends MessageType<CreateI_Object_Intern> {
  constructor();
  create(value?: PartialMessage<CreateI_Object_Intern>): CreateI_Object_Intern;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: CreateI_Object_Intern,
  ): CreateI_Object_Intern;
  internalBinaryWrite(
    message: CreateI_Object_Intern,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message list.CreateI_Object_Intern
 */
export declare const CreateI_Object_Intern: CreateI_Object_Intern$Type;
declare class CreateI_Object_Public$Type extends MessageType<CreateI_Object_Public> {
  constructor();
  create(value?: PartialMessage<CreateI_Object_Public>): CreateI_Object_Public;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: CreateI_Object_Public,
  ): CreateI_Object_Public;
  internalBinaryWrite(
    message: CreateI_Object_Public,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message list.CreateI_Object_Public
 */
export declare const CreateI_Object_Public: CreateI_Object_Public$Type;
declare class CreateO$Type extends MessageType<CreateO> {
  constructor();
  create(value?: PartialMessage<CreateO>): CreateO;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: CreateO,
  ): CreateO;
  internalBinaryWrite(
    message: CreateO,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message list.CreateO
 */
export declare const CreateO: CreateO$Type;
declare class CreateO_Filter$Type extends MessageType<CreateO_Filter> {
  constructor();
  create(value?: PartialMessage<CreateO_Filter>): CreateO_Filter;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: CreateO_Filter,
  ): CreateO_Filter;
  internalBinaryWrite(
    message: CreateO_Filter,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message list.CreateO_Filter
 */
export declare const CreateO_Filter: CreateO_Filter$Type;
declare class CreateO_Object$Type extends MessageType<CreateO_Object> {
  constructor();
  create(value?: PartialMessage<CreateO_Object>): CreateO_Object;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: CreateO_Object,
  ): CreateO_Object;
  internalBinaryWrite(
    message: CreateO_Object,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message list.CreateO_Object
 */
export declare const CreateO_Object: CreateO_Object$Type;
declare class CreateO_Object_Intern$Type extends MessageType<CreateO_Object_Intern> {
  constructor();
  create(value?: PartialMessage<CreateO_Object_Intern>): CreateO_Object_Intern;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: CreateO_Object_Intern,
  ): CreateO_Object_Intern;
  internalBinaryWrite(
    message: CreateO_Object_Intern,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message list.CreateO_Object_Intern
 */
export declare const CreateO_Object_Intern: CreateO_Object_Intern$Type;
declare class CreateO_Object_Public$Type extends MessageType<CreateO_Object_Public> {
  constructor();
  create(value?: PartialMessage<CreateO_Object_Public>): CreateO_Object_Public;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: CreateO_Object_Public,
  ): CreateO_Object_Public;
  internalBinaryWrite(
    message: CreateO_Object_Public,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message list.CreateO_Object_Public
 */
export declare const CreateO_Object_Public: CreateO_Object_Public$Type;
export {};
