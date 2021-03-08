# assemblyscript-wasm-4-envoy

> assemblyscript 尚未成熟 此时进场 为时太早；很多基础都不具备
> 且社区释放的sample功能非常有限 无法实现稍微有点逻辑功能的wasm
> 2021.3.8

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