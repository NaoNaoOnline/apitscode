/**
 * @fileoverview gRPC-Web generated client stub for description
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.23.4
// source: pbf/description/api.proto

/* eslint-disable */
// @ts-nocheck

import * as grpcWeb from "grpc-web";

import * as pbf_description_create_pb from "../../pbf/description/create_pb";
import * as pbf_description_delete_pb from "../../pbf/description/delete_pb";
import * as pbf_description_search_pb from "../../pbf/description/search_pb";
import * as pbf_description_update_pb from "../../pbf/description/update_pb";

export class APIClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string };
  options_: null | { [index: string]: any };

  constructor(
    hostname: string,
    credentials?: null | { [index: string]: string },
    options?: null | { [index: string]: any },
  ) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options["format"] = "text";

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, "");
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorCreate = new grpcWeb.MethodDescriptor(
    "/description.API/Create",
    grpcWeb.MethodType.UNARY,
    pbf_description_create_pb.CreateI,
    pbf_description_create_pb.CreateO,
    (request: pbf_description_create_pb.CreateI) => {
      return request.serializeBinary();
    },
    pbf_description_create_pb.CreateO.deserializeBinary,
  );

  create(
    request: pbf_description_create_pb.CreateI,
    metadata: grpcWeb.Metadata | null,
  ): Promise<pbf_description_create_pb.CreateO>;

  create(
    request: pbf_description_create_pb.CreateI,
    metadata: grpcWeb.Metadata | null,
    callback: (
      err: grpcWeb.RpcError,
      response: pbf_description_create_pb.CreateO,
    ) => void,
  ): grpcWeb.ClientReadableStream<pbf_description_create_pb.CreateO>;

  create(
    request: pbf_description_create_pb.CreateI,
    metadata: grpcWeb.Metadata | null,
    callback?: (
      err: grpcWeb.RpcError,
      response: pbf_description_create_pb.CreateO,
    ) => void,
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + "/description.API/Create",
        request,
        metadata || {},
        this.methodDescriptorCreate,
        callback,
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + "/description.API/Create",
      request,
      metadata || {},
      this.methodDescriptorCreate,
    );
  }

  methodDescriptorDelete = new grpcWeb.MethodDescriptor(
    "/description.API/Delete",
    grpcWeb.MethodType.UNARY,
    pbf_description_delete_pb.DeleteI,
    pbf_description_delete_pb.DeleteO,
    (request: pbf_description_delete_pb.DeleteI) => {
      return request.serializeBinary();
    },
    pbf_description_delete_pb.DeleteO.deserializeBinary,
  );

  delete(
    request: pbf_description_delete_pb.DeleteI,
    metadata: grpcWeb.Metadata | null,
  ): Promise<pbf_description_delete_pb.DeleteO>;

  delete(
    request: pbf_description_delete_pb.DeleteI,
    metadata: grpcWeb.Metadata | null,
    callback: (
      err: grpcWeb.RpcError,
      response: pbf_description_delete_pb.DeleteO,
    ) => void,
  ): grpcWeb.ClientReadableStream<pbf_description_delete_pb.DeleteO>;

  delete(
    request: pbf_description_delete_pb.DeleteI,
    metadata: grpcWeb.Metadata | null,
    callback?: (
      err: grpcWeb.RpcError,
      response: pbf_description_delete_pb.DeleteO,
    ) => void,
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + "/description.API/Delete",
        request,
        metadata || {},
        this.methodDescriptorDelete,
        callback,
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + "/description.API/Delete",
      request,
      metadata || {},
      this.methodDescriptorDelete,
    );
  }

  methodDescriptorSearch = new grpcWeb.MethodDescriptor(
    "/description.API/Search",
    grpcWeb.MethodType.UNARY,
    pbf_description_search_pb.SearchI,
    pbf_description_search_pb.SearchO,
    (request: pbf_description_search_pb.SearchI) => {
      return request.serializeBinary();
    },
    pbf_description_search_pb.SearchO.deserializeBinary,
  );

  search(
    request: pbf_description_search_pb.SearchI,
    metadata: grpcWeb.Metadata | null,
  ): Promise<pbf_description_search_pb.SearchO>;

  search(
    request: pbf_description_search_pb.SearchI,
    metadata: grpcWeb.Metadata | null,
    callback: (
      err: grpcWeb.RpcError,
      response: pbf_description_search_pb.SearchO,
    ) => void,
  ): grpcWeb.ClientReadableStream<pbf_description_search_pb.SearchO>;

  search(
    request: pbf_description_search_pb.SearchI,
    metadata: grpcWeb.Metadata | null,
    callback?: (
      err: grpcWeb.RpcError,
      response: pbf_description_search_pb.SearchO,
    ) => void,
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + "/description.API/Search",
        request,
        metadata || {},
        this.methodDescriptorSearch,
        callback,
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + "/description.API/Search",
      request,
      metadata || {},
      this.methodDescriptorSearch,
    );
  }

  methodDescriptorUpdate = new grpcWeb.MethodDescriptor(
    "/description.API/Update",
    grpcWeb.MethodType.UNARY,
    pbf_description_update_pb.UpdateI,
    pbf_description_update_pb.UpdateO,
    (request: pbf_description_update_pb.UpdateI) => {
      return request.serializeBinary();
    },
    pbf_description_update_pb.UpdateO.deserializeBinary,
  );

  update(
    request: pbf_description_update_pb.UpdateI,
    metadata: grpcWeb.Metadata | null,
  ): Promise<pbf_description_update_pb.UpdateO>;

  update(
    request: pbf_description_update_pb.UpdateI,
    metadata: grpcWeb.Metadata | null,
    callback: (
      err: grpcWeb.RpcError,
      response: pbf_description_update_pb.UpdateO,
    ) => void,
  ): grpcWeb.ClientReadableStream<pbf_description_update_pb.UpdateO>;

  update(
    request: pbf_description_update_pb.UpdateI,
    metadata: grpcWeb.Metadata | null,
    callback?: (
      err: grpcWeb.RpcError,
      response: pbf_description_update_pb.UpdateO,
    ) => void,
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + "/description.API/Update",
        request,
        metadata || {},
        this.methodDescriptorUpdate,
        callback,
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + "/description.API/Update",
      request,
      metadata || {},
      this.methodDescriptorUpdate,
    );
  }
}
