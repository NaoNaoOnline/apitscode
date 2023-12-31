// @generated by protobuf-ts 2.9.3 with parameter output_javascript
// @generated from protobuf file "pbf/policy/update.proto" (package "policy", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * UpdateI is the input for updating policies.
 *
 *     {
 *         "object": [
 *             {
 *                 "symbol": {
 *                     "sync": "dflt"
 *                 }
 *             }
 *         ]
 *     }
 *
 *
 * @generated from protobuf message policy.UpdateI
 */
export interface UpdateI {
  /**
   * @generated from protobuf field: policy.UpdateI_Filter filter = 100;
   */
  filter?: UpdateI_Filter;
  /**
   * @generated from protobuf field: repeated policy.UpdateI_Object object = 200;
   */
  object: UpdateI_Object[];
}
/**
 * @generated from protobuf message policy.UpdateI_Filter
 */
export interface UpdateI_Filter {}
/**
 * @generated from protobuf message policy.UpdateI_Object
 */
export interface UpdateI_Object {
  /**
   * @generated from protobuf field: policy.UpdateI_Object_Intern intern = 100;
   */
  intern?: UpdateI_Object_Intern;
  /**
   * @generated from protobuf field: policy.UpdateI_Object_Public public = 200;
   */
  public?: UpdateI_Object_Public;
  /**
   * @generated from protobuf field: policy.UpdateI_Object_Symbol symbol = 300;
   */
  symbol?: UpdateI_Object_Symbol;
  /**
   * @generated from protobuf field: repeated policy.UpdateI_Object_Update update = 400;
   */
  update: UpdateI_Object_Update[];
}
/**
 * @generated from protobuf message policy.UpdateI_Object_Intern
 */
export interface UpdateI_Object_Intern {}
/**
 * @generated from protobuf message policy.UpdateI_Object_Public
 */
export interface UpdateI_Object_Public {}
/**
 * @generated from protobuf message policy.UpdateI_Object_Symbol
 */
export interface UpdateI_Object_Symbol {
  /**
   * pntr must be left empty when initiating a new update lifecycle with sync
   * set to "dflt". As shown below, the update response contains a pointer that
   * can be provided in a delayed consecutive call, again with sync set to
   * "dflt". As long as the provided pointer equals the internally tracked
   * value, the background process to synchronize onchain and offchain state is
   * still in progress. Once the internal pointer differs from the provided pntr
   * value here, the status "updated" will be returned.
   *
   * @generated from protobuf field: string pntr = 100;
   */
  pntr: string;
  /**
   * sync set to "dflt" starts a background process to synchronize onchain and
   * offchain state. That way the current state can be fetched on demand by
   * policy members without having to wait for the scheduled background job to
   * be triggered.
   *
   * @generated from protobuf field: string sync = 200;
   */
  sync: string;
}
/**
 * @generated from protobuf message policy.UpdateI_Object_Update
 */
export interface UpdateI_Object_Update {}
/**
 * UpdateO is the output for updating policies.
 *
 *     {
 *         "object": [
 *             {
 *                 "intern": {
 *                     "stts": "started"
 *                 },
 *                 "symbol": {
 *                     "pntr": "1689001255"
 *                 }
 *             }
 *         ]
 *     }
 *
 *
 * @generated from protobuf message policy.UpdateO
 */
export interface UpdateO {
  /**
   * @generated from protobuf field: policy.UpdateO_Filter filter = 100;
   */
  filter?: UpdateO_Filter;
  /**
   * @generated from protobuf field: repeated policy.UpdateO_Object object = 200;
   */
  object: UpdateO_Object[];
}
/**
 * @generated from protobuf message policy.UpdateO_Filter
 */
export interface UpdateO_Filter {}
/**
 * @generated from protobuf message policy.UpdateO_Object
 */
export interface UpdateO_Object {
  /**
   * @generated from protobuf field: policy.UpdateO_Object_Intern intern = 100;
   */
  intern?: UpdateO_Object_Intern;
  /**
   * @generated from protobuf field: policy.UpdateO_Object_Public public = 200;
   */
  public?: UpdateO_Object_Public;
  /**
   * @generated from protobuf field: policy.UpdateO_Object_Symbol symbol = 300;
   */
  symbol?: UpdateO_Object_Symbol;
}
/**
 * @generated from protobuf message policy.UpdateO_Object_Intern
 */
export interface UpdateO_Object_Intern {
  /**
   * stts is the resource status upon successful policy modification.
   *
   *     started for the first call when a new update lifecycle was initiated
   *     waiting for consecutive calls, as long as pointers are equal
   *     updated for finished lifecycle updates, as soon as pointers differ
   *
   *
   * @generated from protobuf field: string stts = 100;
   */
  stts: string;
}
/**
 * @generated from protobuf message policy.UpdateO_Object_Public
 */
export interface UpdateO_Object_Public {}
/**
 * @generated from protobuf message policy.UpdateO_Object_Symbol
 */
export interface UpdateO_Object_Symbol {
  /**
   * pntr is the internally tracked timestamp of the most recent update
   * lifecycle. The pointer returned here can be provided in a delayed
   * consecutive call, again with sync set to "dflt".
   *
   * @generated from protobuf field: string pntr = 100;
   */
  pntr: string;
}
declare class UpdateI$Type extends MessageType<UpdateI> {
  constructor();
  create(value?: PartialMessage<UpdateI>): UpdateI;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: UpdateI,
  ): UpdateI;
  internalBinaryWrite(
    message: UpdateI,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message policy.UpdateI
 */
export declare const UpdateI: UpdateI$Type;
declare class UpdateI_Filter$Type extends MessageType<UpdateI_Filter> {
  constructor();
  create(value?: PartialMessage<UpdateI_Filter>): UpdateI_Filter;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: UpdateI_Filter,
  ): UpdateI_Filter;
  internalBinaryWrite(
    message: UpdateI_Filter,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message policy.UpdateI_Filter
 */
export declare const UpdateI_Filter: UpdateI_Filter$Type;
declare class UpdateI_Object$Type extends MessageType<UpdateI_Object> {
  constructor();
  create(value?: PartialMessage<UpdateI_Object>): UpdateI_Object;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: UpdateI_Object,
  ): UpdateI_Object;
  internalBinaryWrite(
    message: UpdateI_Object,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message policy.UpdateI_Object
 */
export declare const UpdateI_Object: UpdateI_Object$Type;
declare class UpdateI_Object_Intern$Type extends MessageType<UpdateI_Object_Intern> {
  constructor();
  create(value?: PartialMessage<UpdateI_Object_Intern>): UpdateI_Object_Intern;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: UpdateI_Object_Intern,
  ): UpdateI_Object_Intern;
  internalBinaryWrite(
    message: UpdateI_Object_Intern,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message policy.UpdateI_Object_Intern
 */
export declare const UpdateI_Object_Intern: UpdateI_Object_Intern$Type;
declare class UpdateI_Object_Public$Type extends MessageType<UpdateI_Object_Public> {
  constructor();
  create(value?: PartialMessage<UpdateI_Object_Public>): UpdateI_Object_Public;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: UpdateI_Object_Public,
  ): UpdateI_Object_Public;
  internalBinaryWrite(
    message: UpdateI_Object_Public,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message policy.UpdateI_Object_Public
 */
export declare const UpdateI_Object_Public: UpdateI_Object_Public$Type;
declare class UpdateI_Object_Symbol$Type extends MessageType<UpdateI_Object_Symbol> {
  constructor();
  create(value?: PartialMessage<UpdateI_Object_Symbol>): UpdateI_Object_Symbol;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: UpdateI_Object_Symbol,
  ): UpdateI_Object_Symbol;
  internalBinaryWrite(
    message: UpdateI_Object_Symbol,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message policy.UpdateI_Object_Symbol
 */
export declare const UpdateI_Object_Symbol: UpdateI_Object_Symbol$Type;
declare class UpdateI_Object_Update$Type extends MessageType<UpdateI_Object_Update> {
  constructor();
  create(value?: PartialMessage<UpdateI_Object_Update>): UpdateI_Object_Update;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: UpdateI_Object_Update,
  ): UpdateI_Object_Update;
  internalBinaryWrite(
    message: UpdateI_Object_Update,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message policy.UpdateI_Object_Update
 */
export declare const UpdateI_Object_Update: UpdateI_Object_Update$Type;
declare class UpdateO$Type extends MessageType<UpdateO> {
  constructor();
  create(value?: PartialMessage<UpdateO>): UpdateO;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: UpdateO,
  ): UpdateO;
  internalBinaryWrite(
    message: UpdateO,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message policy.UpdateO
 */
export declare const UpdateO: UpdateO$Type;
declare class UpdateO_Filter$Type extends MessageType<UpdateO_Filter> {
  constructor();
  create(value?: PartialMessage<UpdateO_Filter>): UpdateO_Filter;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: UpdateO_Filter,
  ): UpdateO_Filter;
  internalBinaryWrite(
    message: UpdateO_Filter,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message policy.UpdateO_Filter
 */
export declare const UpdateO_Filter: UpdateO_Filter$Type;
declare class UpdateO_Object$Type extends MessageType<UpdateO_Object> {
  constructor();
  create(value?: PartialMessage<UpdateO_Object>): UpdateO_Object;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: UpdateO_Object,
  ): UpdateO_Object;
  internalBinaryWrite(
    message: UpdateO_Object,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message policy.UpdateO_Object
 */
export declare const UpdateO_Object: UpdateO_Object$Type;
declare class UpdateO_Object_Intern$Type extends MessageType<UpdateO_Object_Intern> {
  constructor();
  create(value?: PartialMessage<UpdateO_Object_Intern>): UpdateO_Object_Intern;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: UpdateO_Object_Intern,
  ): UpdateO_Object_Intern;
  internalBinaryWrite(
    message: UpdateO_Object_Intern,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message policy.UpdateO_Object_Intern
 */
export declare const UpdateO_Object_Intern: UpdateO_Object_Intern$Type;
declare class UpdateO_Object_Public$Type extends MessageType<UpdateO_Object_Public> {
  constructor();
  create(value?: PartialMessage<UpdateO_Object_Public>): UpdateO_Object_Public;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: UpdateO_Object_Public,
  ): UpdateO_Object_Public;
  internalBinaryWrite(
    message: UpdateO_Object_Public,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message policy.UpdateO_Object_Public
 */
export declare const UpdateO_Object_Public: UpdateO_Object_Public$Type;
declare class UpdateO_Object_Symbol$Type extends MessageType<UpdateO_Object_Symbol> {
  constructor();
  create(value?: PartialMessage<UpdateO_Object_Symbol>): UpdateO_Object_Symbol;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: UpdateO_Object_Symbol,
  ): UpdateO_Object_Symbol;
  internalBinaryWrite(
    message: UpdateO_Object_Symbol,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message policy.UpdateO_Object_Symbol
 */
export declare const UpdateO_Object_Symbol: UpdateO_Object_Symbol$Type;
export {};
