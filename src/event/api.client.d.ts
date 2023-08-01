// @generated by protobuf-ts 2.9.1 with parameter output_javascript
// @generated from protobuf file "pbf/event/api.proto" (package "event", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { UpdateO } from "./update";
import type { UpdateI } from "./update";
import type { SearchO } from "./search";
import type { SearchI } from "./search";
import type { DeleteO } from "./delete";
import type { DeleteI } from "./delete";
import type { CreateO } from "./create";
import type { CreateI } from "./create";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service event.API
 */
export interface IAPIClient {
  /**
   * @generated from protobuf rpc: Create(event.CreateI) returns (event.CreateO);
   */
  create(input: CreateI, options?: RpcOptions): UnaryCall<CreateI, CreateO>;
  /**
   * @generated from protobuf rpc: Delete(event.DeleteI) returns (event.DeleteO);
   */
  delete(input: DeleteI, options?: RpcOptions): UnaryCall<DeleteI, DeleteO>;
  /**
   * @generated from protobuf rpc: Search(event.SearchI) returns (event.SearchO);
   */
  search(input: SearchI, options?: RpcOptions): UnaryCall<SearchI, SearchO>;
  /**
   * @generated from protobuf rpc: Update(event.UpdateI) returns (event.UpdateO);
   */
  update(input: UpdateI, options?: RpcOptions): UnaryCall<UpdateI, UpdateO>;
}
/**
 * @generated from protobuf service event.API
 */
export declare class APIClient implements IAPIClient, ServiceInfo {
  private readonly _transport;
  typeName: any;
  methods: any;
  options: any;
  constructor(_transport: RpcTransport);
  /**
   * @generated from protobuf rpc: Create(event.CreateI) returns (event.CreateO);
   */
  create(input: CreateI, options?: RpcOptions): UnaryCall<CreateI, CreateO>;
  /**
   * @generated from protobuf rpc: Delete(event.DeleteI) returns (event.DeleteO);
   */
  delete(input: DeleteI, options?: RpcOptions): UnaryCall<DeleteI, DeleteO>;
  /**
   * @generated from protobuf rpc: Search(event.SearchI) returns (event.SearchO);
   */
  search(input: SearchI, options?: RpcOptions): UnaryCall<SearchI, SearchO>;
  /**
   * @generated from protobuf rpc: Update(event.UpdateI) returns (event.UpdateO);
   */
  update(input: UpdateI, options?: RpcOptions): UnaryCall<UpdateI, UpdateO>;
}
