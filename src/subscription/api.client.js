// @generated by protobuf-ts 2.9.3 with parameter output_javascript
// @generated from protobuf file "pbf/subscription/api.proto" (package "subscription", syntax proto3)
// tslint:disable
import { API } from "./api";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service subscription.API
 */
export class APIClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = API.typeName;
        this.methods = API.methods;
        this.options = API.options;
    }
    /**
     * @generated from protobuf rpc: Create(subscription.CreateI) returns (subscription.CreateO);
     */
    create(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Delete(subscription.DeleteI) returns (subscription.DeleteO);
     */
    delete(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Search(subscription.SearchI) returns (subscription.SearchO);
     */
    search(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Update(subscription.UpdateI) returns (subscription.UpdateO);
     */
    update(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
