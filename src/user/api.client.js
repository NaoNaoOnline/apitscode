// @generated by protobuf-ts 2.9.0 with parameter output_javascript
// @generated from protobuf file "pbf/user/api.proto" (package "user", syntax proto3)
// tslint:disable
import { API } from "./api";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service user.API
 */
export class APIClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = API.typeName;
        this.methods = API.methods;
        this.options = API.options;
    }
    /**
     * @generated from protobuf rpc: Create(user.CreateI) returns (user.CreateO);
     */
    create(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Delete(user.DeleteI) returns (user.DeleteO);
     */
    delete(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Search(user.SearchI) returns (user.SearchO);
     */
    search(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Update(user.UpdateI) returns (user.UpdateO);
     */
    update(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
