import * as wasm from './rust_webassembly_bg.wasm';

/**
* @param {number} from
* @param {number} to
* @returns {boolean}
*/
export function add_one(from, to) {
    var ret = wasm.add_one(from, to);
    return ret !== 0;
}

