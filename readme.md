# assemblyscript-wasm-4-envoy

### common wasm
#### init
```bash
npm init -y 
npm install --save-dev assemblyscript
npx asinit .
```

#### build
```bash
#npm install --save-dev assemblyscript
npm run asbuild
```

#### run locally
```bash
node index.js
3
```

### wasm for envoy 
```bash
npm install --save assemblyscript-json
npm run asbuild:filter
```

### reference
- https://www.npmjs.com/package/@solo-io/proxy-runtime
- https://github.com/solo-io/proxy-runtime/issues/36
- https://www.npmjs.com/package/assemblyscript-json
- https://www.assemblyscript.org/introduction.html