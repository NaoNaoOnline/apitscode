// @generated by protobuf-ts 2.9.3 with parameter output_javascript
// @generated from protobuf file "pbf/description/create.proto" (package "description", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * CreateI is the input for creating descriptions.
 *
 *     {
 *         "object": [
 *             {
 *                 "public": {
 *                     "evnt": "778237",
 *                     "text": "In this Hackathon we build awesome stuff!"
 *                 }
 *             }
 *         ]
 *     }
 *
 *
 * @generated from protobuf message description.CreateI
 */
export interface CreateI {
  /**
   * @generated from protobuf field: description.CreateI_Filter filter = 100;
   */
  filter?: CreateI_Filter;
  /**
   * @generated from protobuf field: repeated description.CreateI_Object object = 200;
   */
  object: CreateI_Object[];
}
/**
 * @generated from protobuf message description.CreateI_Filter
 */
export interface CreateI_Filter {}
/**
 * @generated from protobuf message description.CreateI_Object
 */
export interface CreateI_Object {
  /**
   * @generated from protobuf field: description.CreateI_Object_Intern intern = 100;
   */
  intern?: CreateI_Object_Intern;
  /**
   * @generated from protobuf field: description.CreateI_Object_Public public = 200;
   */
  public?: CreateI_Object_Public;
}
/**
 * @generated from protobuf message description.CreateI_Object_Intern
 */
export interface CreateI_Object_Intern {}
/**
 * @generated from protobuf message description.CreateI_Object_Public
 */
export interface CreateI_Object_Public {
  /**
   * evnt is the event ID this description is mapped to.
   *
   * @generated from protobuf field: string evnt = 100;
   */
  evnt: string;
  /**
   * text is the description explaining what this event is about.
   *
   * @generated from protobuf field: string text = 200;
   */
  text: string;
}
/**
 * CreateO is the output for creating descriptions.
 *
 *     {
 *         "object": [
 *             {
 *                 "intern": {
 *                     "crtd": "1689001255",
 *                     "desc": "98972893"
 *                 }
 *             }
 *         ]
 *     }
 *
 *
 * @generated from protobuf message description.CreateO
 */
export interface CreateO {
  /**
   * @generated from protobuf field: description.CreateO_Filter filter = 100;
   */
  filter?: CreateO_Filter;
  /**
   * @generated from protobuf field: repeated description.CreateO_Object object = 200;
   */
  object: CreateO_Object[];
}
/**
 * @generated from protobuf message description.CreateO_Filter
 */
export interface CreateO_Filter {}
/**
 * @generated from protobuf message description.CreateO_Object
 */
export interface CreateO_Object {
  /**
   * @generated from protobuf field: description.CreateO_Object_Intern intern = 100;
   */
  intern?: CreateO_Object_Intern;
  /**
   * @generated from protobuf field: description.CreateO_Object_Public public = 200;
   */
  public?: CreateO_Object_Public;
}
/**
 * @generated from protobuf message description.CreateO_Object_Intern
 */
export interface CreateO_Object_Intern {
  /**
   * crtd is the unix timestamp in seconds at which the description got created.
   *
   * @generated from protobuf field: string crtd = 100;
   */
  crtd: string;
  /**
   * desc is the ID of the description being created.
   *
   * @generated from protobuf field: string desc = 200;
   */
  desc: string;
}
/**
 * @generated from protobuf message description.CreateO_Object_Public
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
 * @generated MessageType for protobuf message description.CreateI
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
 * @generated MessageType for protobuf message description.CreateI_Filter
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
 * @generated MessageType for protobuf message description.CreateI_Object
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
 * @generated MessageType for protobuf message description.CreateI_Object_Intern
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
 * @generated MessageType for protobuf message description.CreateI_Object_Public
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
 * @generated MessageType for protobuf message description.CreateO
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
 * @generated MessageType for protobuf message description.CreateO_Filter
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
 * @generated MessageType for protobuf message description.CreateO_Object
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
 * @generated MessageType for protobuf message description.CreateO_Object_Intern
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
 * @generated MessageType for protobuf message description.CreateO_Object_Public
 */
export declare const CreateO_Object_Public: CreateO_Object_Public$Type;
export {};
