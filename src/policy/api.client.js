// @generated by protobuf-ts 2.9.1 with parameter output_javascript
// @generated from protobuf file "pbf/policy/api.proto" (package "policy", syntax proto3)
// tslint:disable
import { API } from "./api";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service policy.API
 */
export class APIClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = API.typeName;
        this.methods = API.methods;
        this.options = API.options;
    }
    /**
     * @generated from protobuf rpc: Create(policy.CreateI) returns (policy.CreateO);
     */
    create(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Delete(policy.DeleteI) returns (policy.DeleteO);
     */
    delete(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Search(policy.SearchI) returns (policy.SearchO);
     */
    search(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Update(policy.UpdateI) returns (policy.UpdateO);
     */
    update(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}