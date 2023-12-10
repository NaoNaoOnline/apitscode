// @generated by protobuf-ts 2.9.3 with parameter output_javascript
// @generated from protobuf file "pbf/rule/api.proto" (package "rule", syntax proto3)
// tslint:disable
import { API } from "./api";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service rule.API
 */
export class APIClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = API.typeName;
        this.methods = API.methods;
        this.options = API.options;
    }
    /**
     * @generated from protobuf rpc: Create(rule.CreateI) returns (rule.CreateO);
     */
    create(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Delete(rule.DeleteI) returns (rule.DeleteO);
     */
    delete(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Search(rule.SearchI) returns (rule.SearchO);
     */
    search(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Update(rule.UpdateI) returns (rule.UpdateO);
     */
    update(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
