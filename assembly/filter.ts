// this exports the required functions for the proxy to interact with us.
// @ts-ignore
export * from "@solo-io/proxy-runtime/proxy";
import {
    RootContext,
    Context,
    registerRootContext,
    FilterHeadersStatusValues,
    stream_context
} from "@solo-io/proxy-runtime";
import {JSON} from "assemblyscript-json";
import "wasi"
import {Console} from "as-wasi"

class AddHeaderRoot extends RootContext {
    createContext(context_id: u32): Context {
        return new AddHeader(context_id, this);
    }
}

class AddHeader extends Context {
    constructor(context_id: u32, root_context: AddHeaderRoot) {
        super(context_id, root_context);
    }

    onResponseHeaders(a: u32, end_of_stream: bool): FilterHeadersStatusValues {
        const root_context = this.root_context;
        let configuration = root_context.getConfiguration();
        Console.log("configuration=" + configuration)
        if (configuration == "") {
            Console.log("configuration is empty");
            stream_context.headers.response.add("hello", "world!");
        } else {
            Console.log("parse configuration");
            // let headTag: JSON.Value = JSON.parse(configuration);
            // Console.log("parse=" + headTag.toString());
            stream_context.headers.response.add("hello", configuration);
        }
        return FilterHeadersStatusValues.Continue;
    }
}

registerRootContext((context_id: u32) => {
    return new AddHeaderRoot(context_id);
}, "header_filter");