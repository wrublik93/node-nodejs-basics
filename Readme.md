# Node.js basics

## Scripts for check:  

### File system (src/fs)
"fs:create": "node src/fs/create.js",  
"fs:copy": "node src/fs/copy.js",  
"fs:rename": "node src/fs/rename.js",  
"fs:delete": "node src/fs/delete.js",  
"fs:list": "node src/fs/list.js",  
"fs:read": "node src/fs/read.js",  

### Command line interface(src/cli)
"cli:env": "name1=value1 name2=value2 node src/cli/env.js",  
"cli:args": "node src/cli/args.js --propName value --prop2Name value2",  

### Modules(src/modules)
"modules:cjsToEsm": "node src/modules/cjsToEsm.mjs",  

### Hash (src/hash)
"hash:calchash": "node src/hash/calcHash.js",  


### Streams (src/streams)
"stream:read": "node src/streams/read.js",  
"stream:write": "node src/streams/write.js",  
"stream:transform": "node src/streams/transform.js",  

### Zlib (src/zip)
"zip:compress": "node src/zip/compress.js",  
"zip:decompress": "node src/zip/decompress.js",  

### Worker Threads (src/wt)
"wt:worker": "node src/wt/worker.js",  

### Child Processes (src/cp)
"cp:cp": "node src/cp/cp.js"  