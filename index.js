const fs = require("fs");
const loader = require("@assemblyscript/loader");
// const imports = buildImports();
const imports = { /* imports go here */};
const wasmModule = loader.instantiateSync(fs.readFileSync(__dirname + "/build/optimized.wasm"), imports);
module.exports = wasmModule.exports;
console.log(module.exports.add(1, 2));

let data = module.exports.tryJson("{\"x\": \"a\", \"y\": 1024}");
console.log(data);

function buildImports() {
    const imports = { /* imports go here */};
    imports.env = imports.env || {}
    imports.env.memoryBase = imports.env.memoryBase || 0
    if (!imports.env.memory) {
        imports.env.memory = new WebAssembly.Memory({initial: 256})
    }
    imports.env.tableBase = imports.env.tableBase || 0
    if (!imports.env.table) {
        imports.env.table = new WebAssembly.Table({initial: 0, element: 'anyfunc'})
    }
    imports.env.stackSave = imports.env.stackRestore = function () {
        return 1000;
    };
    return imports
}