// @generated by protobuf-ts 2.9.0
// @generated from protobuf file "pbf/user/api.proto" (package "user", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { API } from "./api";
import type { UpdateO } from "./update";
import type { UpdateI } from "./update";
import type { SearchO } from "./search";
import type { SearchI } from "./search";
import type { DeleteO } from "./delete";
import type { DeleteI } from "./delete";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { CreateO } from "./create";
import type { CreateI } from "./create";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service user.API
 */
export interface IAPIClient {
  /**
   * @generated from protobuf rpc: Create(user.CreateI) returns (user.CreateO);
   */
  create(input: CreateI, options?: RpcOptions): UnaryCall<CreateI, CreateO>;
  /**
   * @generated from protobuf rpc: Delete(user.DeleteI) returns (user.DeleteO);
   */
  delete(input: DeleteI, options?: RpcOptions): UnaryCall<DeleteI, DeleteO>;
  /**
   * @generated from protobuf rpc: Search(user.SearchI) returns (user.SearchO);
   */
  search(input: SearchI, options?: RpcOptions): UnaryCall<SearchI, SearchO>;
  /**
   * @generated from protobuf rpc: Update(user.UpdateI) returns (user.UpdateO);
   */
  update(input: UpdateI, options?: RpcOptions): UnaryCall<UpdateI, UpdateO>;
}
/**
 * @generated from protobuf service user.API
 */
export class APIClient implements IAPIClient, ServiceInfo {
  typeName = API.typeName;
  methods = API.methods;
  options = API.options;
  constructor(private readonly _transport: RpcTransport) {}
  /**
   * @generated from protobuf rpc: Create(user.CreateI) returns (user.CreateO);
   */
  create(input: CreateI, options?: RpcOptions): UnaryCall<CreateI, CreateO> {
    const method = this.methods[0],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<CreateI, CreateO>(
      "unary",
      this._transport,
      method,
      opt,
      input,
    );
  }
  /**
   * @generated from protobuf rpc: Delete(user.DeleteI) returns (user.DeleteO);
   */
  delete(input: DeleteI, options?: RpcOptions): UnaryCall<DeleteI, DeleteO> {
    const method = this.methods[1],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<DeleteI, DeleteO>(
      "unary",
      this._transport,
      method,
      opt,
      input,
    );
  }
  /**
   * @generated from protobuf rpc: Search(user.SearchI) returns (user.SearchO);
   */
  search(input: SearchI, options?: RpcOptions): UnaryCall<SearchI, SearchO> {
    const method = this.methods[2],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<SearchI, SearchO>(
      "unary",
      this._transport,
      method,
      opt,
      input,
    );
  }
  /**
   * @generated from protobuf rpc: Update(user.UpdateI) returns (user.UpdateO);
   */
  update(input: UpdateI, options?: RpcOptions): UnaryCall<UpdateI, UpdateO> {
    const method = this.methods[3],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<UpdateI, UpdateO>(
      "unary",
      this._transport,
      method,
      opt,
      input,
    );
  }
}
