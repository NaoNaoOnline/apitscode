// @generated by protobuf-ts 2.9.1 with parameter output_javascript
// @generated from protobuf file "pbf/label/create.proto" (package "label", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * CreateI is the input for creating labels.
 *
 *     {
 *         "object": [
 *             {
 *                 "public": {
 *                     "desc": "Flashbots researches implications of MEV",
 *                     "disc": "https://discord.gg/Flashbots",
 *                     "kind": "host",
 *                     "name": "Flashbots",
 *                     "twit": "https://twitter.com/Flashbots"
 *                 }
 *             }
 *         ]
 *     }
 *
 *
 * @generated from protobuf message label.CreateI
 */
export interface CreateI {
  /**
   * @generated from protobuf field: label.CreateI_Filter filter = 100;
   */
  filter?: CreateI_Filter;
  /**
   * @generated from protobuf field: repeated label.CreateI_Object object = 200;
   */
  object: CreateI_Object[];
}
/**
 * @generated from protobuf message label.CreateI_Filter
 */
export interface CreateI_Filter {}
/**
 * @generated from protobuf message label.CreateI_Object
 */
export interface CreateI_Object {
  /**
   * @generated from protobuf field: label.CreateI_Object_Intern intern = 100;
   */
  intern?: CreateI_Object_Intern;
  /**
   * @generated from protobuf field: label.CreateI_Object_Public public = 200;
   */
  public?: CreateI_Object_Public;
}
/**
 * @generated from protobuf message label.CreateI_Object_Intern
 */
export interface CreateI_Object_Intern {}
/**
 * @generated from protobuf message label.CreateI_Object_Public
 */
export interface CreateI_Object_Public {
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
   * kind is the label type for which the label is being created.
   *
   *     cate for category labels
   *     host for host labels
   *
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
/**
 * CreateO is the output for creating labels.
 *
 *     {
 *         "object": [
 *             {
 *                 "intern": {
 *                     "crtd": "1689001255",
 *                     "labl": "863826"
 *                 }
 *             }
 *         ]
 *     }
 *
 *
 * @generated from protobuf message label.CreateO
 */
export interface CreateO {
  /**
   * @generated from protobuf field: label.CreateO_Filter filter = 100;
   */
  filter?: CreateO_Filter;
  /**
   * @generated from protobuf field: repeated label.CreateO_Object object = 200;
   */
  object: CreateO_Object[];
}
/**
 * @generated from protobuf message label.CreateO_Filter
 */
export interface CreateO_Filter {}
/**
 * @generated from protobuf message label.CreateO_Object
 */
export interface CreateO_Object {
  /**
   * @generated from protobuf field: label.CreateO_Object_Intern intern = 100;
   */
  intern?: CreateO_Object_Intern;
  /**
   * @generated from protobuf field: label.CreateO_Object_Public public = 200;
   */
  public?: CreateO_Object_Public;
}
/**
 * @generated from protobuf message label.CreateO_Object_Intern
 */
export interface CreateO_Object_Intern {
  /**
   * crtd is the unix timestamp in seconds at which the label got created.
   *
   * @generated from protobuf field: string crtd = 100;
   */
  crtd: string;
  /**
   * labl is the ID of the label being created.
   *
   * @generated from protobuf field: string labl = 200;
   */
  labl: string;
}
/**
 * @generated from protobuf message label.CreateO_Object_Public
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
 * @generated MessageType for protobuf message label.CreateI
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
 * @generated MessageType for protobuf message label.CreateI_Filter
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
 * @generated MessageType for protobuf message label.CreateI_Object
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
 * @generated MessageType for protobuf message label.CreateI_Object_Intern
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
 * @generated MessageType for protobuf message label.CreateI_Object_Public
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
 * @generated MessageType for protobuf message label.CreateO
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
 * @generated MessageType for protobuf message label.CreateO_Filter
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
 * @generated MessageType for protobuf message label.CreateO_Object
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
 * @generated MessageType for protobuf message label.CreateO_Object_Intern
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
 * @generated MessageType for protobuf message label.CreateO_Object_Public
 */
export declare const CreateO_Object_Public: CreateO_Object_Public$Type;
export {};
