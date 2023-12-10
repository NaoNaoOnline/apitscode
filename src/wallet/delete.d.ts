// @generated by protobuf-ts 2.9.3 with parameter output_javascript
// @generated from protobuf file "pbf/wallet/delete.proto" (package "wallet", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * DeleteI is the input for deleting wallets.
 *
 *     {
 *         "object": [
 *             {
 *                 "intern": {
 *                     "wllt": "338912367"
 *                 }
 *             }
 *         ]
 *     }
 *
 *
 * @generated from protobuf message wallet.DeleteI
 */
export interface DeleteI {
  /**
   * @generated from protobuf field: wallet.DeleteI_Filter filter = 100;
   */
  filter?: DeleteI_Filter;
  /**
   * @generated from protobuf field: repeated wallet.DeleteI_Object object = 200;
   */
  object: DeleteI_Object[];
}
/**
 * @generated from protobuf message wallet.DeleteI_Filter
 */
export interface DeleteI_Filter {}
/**
 * @generated from protobuf message wallet.DeleteI_Object
 */
export interface DeleteI_Object {
  /**
   * @generated from protobuf field: wallet.DeleteI_Object_Intern intern = 100;
   */
  intern?: DeleteI_Object_Intern;
  /**
   * @generated from protobuf field: wallet.DeleteI_Object_Public public = 200;
   */
  public?: DeleteI_Object_Public;
}
/**
 * @generated from protobuf message wallet.DeleteI_Object_Intern
 */
export interface DeleteI_Object_Intern {
  /**
   * wllt is the ID of the wallet being deleted.
   *
   * @generated from protobuf field: string wllt = 100;
   */
  wllt: string;
}
/**
 * @generated from protobuf message wallet.DeleteI_Object_Public
 */
export interface DeleteI_Object_Public {}
/**
 * DeleteO is the output for deleting wallets.
 *
 *     {
 *         "object": [
 *             {
 *                 "intern": {
 *                     "stts": "deleted"
 *                 }
 *             }
 *         ]
 *     }
 *
 *
 * @generated from protobuf message wallet.DeleteO
 */
export interface DeleteO {
  /**
   * @generated from protobuf field: wallet.DeleteO_Filter filter = 100;
   */
  filter?: DeleteO_Filter;
  /**
   * @generated from protobuf field: repeated wallet.DeleteO_Object object = 200;
   */
  object: DeleteO_Object[];
}
/**
 * @generated from protobuf message wallet.DeleteO_Filter
 */
export interface DeleteO_Filter {}
/**
 * @generated from protobuf message wallet.DeleteO_Object
 */
export interface DeleteO_Object {
  /**
   * @generated from protobuf field: wallet.DeleteO_Object_Intern intern = 100;
   */
  intern?: DeleteO_Object_Intern;
  /**
   * @generated from protobuf field: wallet.DeleteO_Object_Public public = 200;
   */
  public?: DeleteO_Object_Public;
}
/**
 * @generated from protobuf message wallet.DeleteO_Object_Intern
 */
export interface DeleteO_Object_Intern {
  /**
   * stts is the resource status upon successful wallet deletion.
   *
   * @generated from protobuf field: string stts = 100;
   */
  stts: string;
}
/**
 * @generated from protobuf message wallet.DeleteO_Object_Public
 */
export interface DeleteO_Object_Public {}
declare class DeleteI$Type extends MessageType<DeleteI> {
  constructor();
  create(value?: PartialMessage<DeleteI>): DeleteI;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: DeleteI,
  ): DeleteI;
  internalBinaryWrite(
    message: DeleteI,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message wallet.DeleteI
 */
export declare const DeleteI: DeleteI$Type;
declare class DeleteI_Filter$Type extends MessageType<DeleteI_Filter> {
  constructor();
  create(value?: PartialMessage<DeleteI_Filter>): DeleteI_Filter;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: DeleteI_Filter,
  ): DeleteI_Filter;
  internalBinaryWrite(
    message: DeleteI_Filter,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message wallet.DeleteI_Filter
 */
export declare const DeleteI_Filter: DeleteI_Filter$Type;
declare class DeleteI_Object$Type extends MessageType<DeleteI_Object> {
  constructor();
  create(value?: PartialMessage<DeleteI_Object>): DeleteI_Object;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: DeleteI_Object,
  ): DeleteI_Object;
  internalBinaryWrite(
    message: DeleteI_Object,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message wallet.DeleteI_Object
 */
export declare const DeleteI_Object: DeleteI_Object$Type;
declare class DeleteI_Object_Intern$Type extends MessageType<DeleteI_Object_Intern> {
  constructor();
  create(value?: PartialMessage<DeleteI_Object_Intern>): DeleteI_Object_Intern;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: DeleteI_Object_Intern,
  ): DeleteI_Object_Intern;
  internalBinaryWrite(
    message: DeleteI_Object_Intern,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message wallet.DeleteI_Object_Intern
 */
export declare const DeleteI_Object_Intern: DeleteI_Object_Intern$Type;
declare class DeleteI_Object_Public$Type extends MessageType<DeleteI_Object_Public> {
  constructor();
  create(value?: PartialMessage<DeleteI_Object_Public>): DeleteI_Object_Public;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: DeleteI_Object_Public,
  ): DeleteI_Object_Public;
  internalBinaryWrite(
    message: DeleteI_Object_Public,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message wallet.DeleteI_Object_Public
 */
export declare const DeleteI_Object_Public: DeleteI_Object_Public$Type;
declare class DeleteO$Type extends MessageType<DeleteO> {
  constructor();
  create(value?: PartialMessage<DeleteO>): DeleteO;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: DeleteO,
  ): DeleteO;
  internalBinaryWrite(
    message: DeleteO,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message wallet.DeleteO
 */
export declare const DeleteO: DeleteO$Type;
declare class DeleteO_Filter$Type extends MessageType<DeleteO_Filter> {
  constructor();
  create(value?: PartialMessage<DeleteO_Filter>): DeleteO_Filter;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: DeleteO_Filter,
  ): DeleteO_Filter;
  internalBinaryWrite(
    message: DeleteO_Filter,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message wallet.DeleteO_Filter
 */
export declare const DeleteO_Filter: DeleteO_Filter$Type;
declare class DeleteO_Object$Type extends MessageType<DeleteO_Object> {
  constructor();
  create(value?: PartialMessage<DeleteO_Object>): DeleteO_Object;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: DeleteO_Object,
  ): DeleteO_Object;
  internalBinaryWrite(
    message: DeleteO_Object,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message wallet.DeleteO_Object
 */
export declare const DeleteO_Object: DeleteO_Object$Type;
declare class DeleteO_Object_Intern$Type extends MessageType<DeleteO_Object_Intern> {
  constructor();
  create(value?: PartialMessage<DeleteO_Object_Intern>): DeleteO_Object_Intern;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: DeleteO_Object_Intern,
  ): DeleteO_Object_Intern;
  internalBinaryWrite(
    message: DeleteO_Object_Intern,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message wallet.DeleteO_Object_Intern
 */
export declare const DeleteO_Object_Intern: DeleteO_Object_Intern$Type;
declare class DeleteO_Object_Public$Type extends MessageType<DeleteO_Object_Public> {
  constructor();
  create(value?: PartialMessage<DeleteO_Object_Public>): DeleteO_Object_Public;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: DeleteO_Object_Public,
  ): DeleteO_Object_Public;
  internalBinaryWrite(
    message: DeleteO_Object_Public,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message wallet.DeleteO_Object_Public
 */
export declare const DeleteO_Object_Public: DeleteO_Object_Public$Type;
export {};
