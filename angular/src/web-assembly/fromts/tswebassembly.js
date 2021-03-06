
function asmFunc(global, env, buffer) {
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);
  var Math_imul = global.Math.imul;
  var Math_fround = global.Math.fround;
  var Math_abs = global.Math.abs;
  var Math_clz32 = global.Math.clz32;
  var Math_min = global.Math.min;
  var Math_max = global.Math.max;
  var Math_floor = global.Math.floor;
  var Math_ceil = global.Math.ceil;
  var Math_sqrt = global.Math.sqrt;
  var abort = env.abort;
  var nan = global.NaN;
  var infinity = global.Infinity;
  var $lib_builtins_abort = env.abort;
  var $lib_rt_tlsf_ROOT = 0;
  var $lib_rt_tlsf_collectLock = 0;
  var $lib_rt___rtti_base = 176;
  function $lib_rt_tlsf_removeBlock($0, $1) {
    var $2 = 0, $3 = 0, $4 = 0, $5 = 0;
    $2 = HEAP32[$1 >> 2];
    if (!($2 & 1 | 0)) {
      $lib_builtins_abort(0 | 0, 32 | 0, 277 | 0, 13 | 0);
      abort();
    }
    $2 = $2 & -4 | 0;
    if ($2 >>> 0 >= 16 >>> 0) {
      $3 = $2 >>> 0 < 1073741808 >>> 0
    } else {
      $3 = 0
    }
    if (!$3) {
      $lib_builtins_abort(0 | 0, 32 | 0, 279 | 0, 13 | 0);
      abort();
    }
    if ($2 >>> 0 < 256 >>> 0) {
      $4 = $2 >>> 4 | 0;
      $2 = 0;
    } else {
      $3 = $2;
      $2 = 31 - Math_clz32($2) | 0;
      $4 = ($3 >>> ($2 - 4 | 0) | 0) ^ 16 | 0;
      $2 = $2 - 7 | 0;
    }
    if ($2 >>> 0 < 23 >>> 0) {
      $3 = $4 >>> 0 < 16 >>> 0
    } else {
      $3 = 0
    }
    if (!$3) {
      $lib_builtins_abort(0 | 0, 32 | 0, 292 | 0, 13 | 0);
      abort();
    }
    $3 = HEAP32[($1 + 20 | 0) >> 2];
    $5 = HEAP32[($1 + 16 | 0) >> 2];
    if ($5) {
      HEAP32[($5 + 20 | 0) >> 2] = $3
    }
    if ($3) {
      HEAP32[($3 + 16 | 0) >> 2] = $5
    }
    if ((HEAP32[((((($2 << 4 | 0) + $4 | 0) << 2 | 0) + $0 | 0) + 96 | 0) >> 2] | 0) == ($1 | 0)) {
      HEAP32[((((($2 << 4 | 0) + $4 | 0) << 2 | 0) + $0 | 0) + 96 | 0) >> 2] = $3;
      if (!$3) {
        $3 = ($2 << 2 | 0) + $0 | 0;
        $1 = HEAP32[($3 + 4 | 0) >> 2] & ((1 << $4 | 0) ^ -1 | 0) | 0;
        HEAP32[($3 + 4 | 0) >> 2] = $1;
        if (!$1) {
          HEAP32[$0 >> 2] = HEAP32[$0 >> 2] & ((1 << $2 | 0) ^ -1 | 0) | 0
        }
      }
    }
  }

  function $lib_rt_tlsf_insertBlock($0, $1) {
    var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
    if (!$1) {
      $lib_builtins_abort(0 | 0, 32 | 0, 205 | 0, 13 | 0);
      abort();
    }
    $3 = HEAP32[$1 >> 2];
    if (!($3 & 1 | 0)) {
      $lib_builtins_abort(0 | 0, 32 | 0, 207 | 0, 13 | 0);
      abort();
    }
    $4 = ($1 + 16 | 0) + (HEAP32[$1 >> 2] & -4 | 0) | 0;
    $5 = HEAP32[$4 >> 2];
    if ($5 & 1 | 0) {
      $2 = (($3 & -4 | 0) + 16 | 0) + ($5 & -4 | 0) | 0;
      if ($2 >>> 0 < 1073741808 >>> 0) {
        $lib_rt_tlsf_removeBlock($0, $4);
        $3 = $2 | ($3 & 3 | 0) | 0;
        HEAP32[$1 >> 2] = $3;
        $4 = ($1 + 16 | 0) + (HEAP32[$1 >> 2] & -4 | 0) | 0;
        $5 = HEAP32[$4 >> 2];
      }
    }
    if ($3 & 2 | 0) {
      $2 = HEAP32[($1 - 4 | 0) >> 2];
      $6 = HEAP32[$2 >> 2];
      if (!($6 & 1 | 0)) {
        $lib_builtins_abort(0 | 0, 32 | 0, 228 | 0, 15 | 0);
        abort();
      }
      $7 = (($6 & -4 | 0) + 16 | 0) + ($3 & -4 | 0) | 0;
      if ($7 >>> 0 < 1073741808 >>> 0) {
        $lib_rt_tlsf_removeBlock($0, $2);
        $3 = $6 & 3 | 0 | $7 | 0;
        HEAP32[$2 >> 2] = $3;
        $1 = $2;
      }
    }
    HEAP32[$4 >> 2] = $5 | 2 | 0;
    $2 = $3 & -4 | 0;
    if ($2 >>> 0 >= 16 >>> 0) {
      $3 = $2 >>> 0 < 1073741808 >>> 0
    } else {
      $3 = 0
    }
    if (!$3) {
      $lib_builtins_abort(0 | 0, 32 | 0, 243 | 0, 13 | 0);
      abort();
    }
    if (($2 + ($1 + 16 | 0) | 0 | 0) != ($4 | 0)) {
      $lib_builtins_abort(0 | 0, 32 | 0, 244 | 0, 13 | 0);
      abort();
    }
    HEAP32[($4 - 4 | 0) >> 2] = $1;
    if ($2 >>> 0 < 256 >>> 0) {
      $4 = $2 >>> 4 | 0;
      $2 = 0;
    } else {
      $3 = $2;
      $2 = 31 - Math_clz32($2) | 0;
      $4 = ($3 >>> ($2 - 4 | 0) | 0) ^ 16 | 0;
      $2 = $2 - 7 | 0;
    }
    if ($2 >>> 0 < 23 >>> 0) {
      $3 = $4 >>> 0 < 16 >>> 0
    } else {
      $3 = 0
    }
    if (!$3) {
      $lib_builtins_abort(0 | 0, 32 | 0, 260 | 0, 13 | 0);
      abort();
    }
    $3 = HEAP32[((((($2 << 4 | 0) + $4 | 0) << 2 | 0) + $0 | 0) + 96 | 0) >> 2];
    HEAP32[($1 + 16 | 0) >> 2] = 0;
    HEAP32[($1 + 20 | 0) >> 2] = $3;
    if ($3) {
      HEAP32[($3 + 16 | 0) >> 2] = $1
    }
    HEAP32[((((($2 << 4 | 0) + $4 | 0) << 2 | 0) + $0 | 0) + 96 | 0) >> 2] = $1;
    HEAP32[$0 >> 2] = HEAP32[$0 >> 2] | (1 << $2 | 0) | 0;
    $0 = ($2 << 2 | 0) + $0 | 0;
    $1 = HEAP32[($0 + 4 | 0) >> 2] | (1 << $4 | 0) | 0;
    HEAP32[($0 + 4 | 0) >> 2] = $1;
  }

  function $lib_rt_tlsf_addMemory($0, $1, $2) {
    var $3 = 0, $4 = 0;
    if (!(($1 >>> 0 <= $2 >>> 0 ? !($1 & 15 | 0) : 0) ? !($2 & 15 | 0) : 0)) {
      $lib_builtins_abort(0 | 0, 32 | 0, 386 | 0, 4 | 0);
      abort();
    }
    $3 = HEAP32[($0 + 1568 | 0) >> 2];
    if ($3) {
      if ($1 >>> 0 < ($3 + 16 | 0) >>> 0) {
        $lib_builtins_abort(0 | 0, 32 | 0, 396 | 0, 15 | 0);
        abort();
      }
      if (($1 - 16 | 0 | 0) == ($3 | 0)) {
        $4 = HEAP32[$3 >> 2];
        $1 = $1 - 16 | 0;
      }
    } else {
      if ($1 >>> 0 < ($0 + 1572 | 0) >>> 0) {
        $lib_builtins_abort(0 | 0, 32 | 0, 408 | 0, 4 | 0);
        abort();
      }
    }
    $2 = $2 - $1 | 0;
    if ($2 >>> 0 < 48 >>> 0) {
      return
    }
    HEAP32[$1 >> 2] = $4 & 2 | 0 | ($2 - 32 | 0 | 1 | 0) | 0;
    HEAP32[($1 + 16 | 0) >> 2] = 0;
    HEAP32[($1 + 20 | 0) >> 2] = 0;
    $2 = ($1 + $2 | 0) - 16 | 0;
    HEAP32[$2 >> 2] = 2;
    HEAP32[($0 + 1568 | 0) >> 2] = $2;
    $lib_rt_tlsf_insertBlock($0, $1);
  }

  function $lib_rt_tlsf_maybeInitialize() {
    var $0 = 0, $1 = 0, $2 = 0;
    $2 = $lib_rt_tlsf_ROOT;
    if (!$2) {
      $0 = __wasm_memory_size();
      if ((1 | 0) > ($0 | 0)) {
        $0 = (__wasm_memory_grow(1 - $0 | 0 | 0) | 0) < (0 | 0)
      } else {
        $0 = 0
      }
      if ($0) {
        abort()
      }
      $2 = 208;
      HEAP32[208 >> 2] = 0;
      HEAP32[1776 >> 2] = 0;
      for_loop_0: while (1) {
        if ($1 >>> 0 < 23 >>> 0) {
          HEAP32[((($1 << 2 | 0) + 208 | 0) + 4 | 0) >> 2] = 0;
          $0 = 0;
          for_loop_1: while (1) {
            if ($0 >>> 0 < 16 >>> 0) {
              HEAP32[((((($1 << 4 | 0) + $0 | 0) << 2 | 0) + 208 | 0) + 96 | 0) >> 2] = 0;
              $0 = $0 + 1 | 0;
              continue for_loop_1;
            }
            break for_loop_1;
          };
          $1 = $1 + 1 | 0;
          continue for_loop_0;
        }
        break for_loop_0;
      };
      $lib_rt_tlsf_addMemory(208, 1792, __wasm_memory_size() << 16 | 0);
      $lib_rt_tlsf_ROOT = 208;
    }
    return $2;
  }

  function $lib_rt_tlsf_prepareSize($0) {
    if ($0 >>> 0 >= 1073741808 >>> 0) {
      $lib_builtins_abort(80 | 0, 32 | 0, 457 | 0, 29 | 0);
      abort();
    }
    $0 = ($0 + 15 | 0) & -16 | 0;
    return $0 >>> 0 > 16 >>> 0 ? $0 : 16;
  }

  function $lib_rt_tlsf_searchBlock($0, $1) {
    var $2 = 0, $3 = 0;
    if ($1 >>> 0 < 256 >>> 0) {
      $1 = $1 >>> 4 | 0;
      $2 = 0;
    } else {
      $1 = $1 >>> 0 < 536870904 >>> 0 ? ((1 << (27 - Math_clz32($1) | 0) | 0) + $1 | 0) - 1 | 0 : $1;
      $2 = 31 - Math_clz32($1) | 0;
      $1 = ($1 >>> ($2 - 4 | 0) | 0) ^ 16 | 0;
      $2 = $2 - 7 | 0;
    }
    if ($2 >>> 0 < 23 >>> 0) {
      $3 = $1 >>> 0 < 16 >>> 0
    } else {
      $3 = 0
    }
    if (!$3) {
      $lib_builtins_abort(0 | 0, 32 | 0, 338 | 0, 13 | 0);
      abort();
    }
    $1 = HEAP32[((($2 << 2 | 0) + $0 | 0) + 4 | 0) >> 2] & (-1 << $1 | 0) | 0;
    if ($1) {
      $0 = HEAP32[((((__wasm_ctz_i32($1) + ($2 << 4 | 0) | 0) << 2 | 0) + $0 | 0) + 96 | 0) >> 2]
    } else {
      $1 = HEAP32[$0 >> 2] & (-1 << ($2 + 1 | 0) | 0) | 0;
      if ($1) {
        $2 = __wasm_ctz_i32($1);
        $1 = HEAP32[((($2 << 2 | 0) + $0 | 0) + 4 | 0) >> 2];
        if (!$1) {
          $lib_builtins_abort(0 | 0, 32 | 0, 351 | 0, 17 | 0);
          abort();
        }
        $0 = HEAP32[((((__wasm_ctz_i32($1) + ($2 << 4 | 0) | 0) << 2 | 0) + $0 | 0) + 96 | 0) >> 2];
      } else {
        $0 = 0
      }
    }
    return $0;
  }

  function $lib_rt_tlsf_growMemory($0, $1) {
    var $2 = 0, $3 = 0;
    $2 = __wasm_memory_size();
    $3 = $2 << 16 | 0;
    $1 = ((((16 << ((HEAP32[($0 + 1568 | 0) >> 2] | 0) != ($3 - 16 | 0 | 0)) | 0) + ($1 >>> 0 < 536870904 >>> 0 ? ((1 << (27 - Math_clz32($1) | 0) | 0) - 1 | 0) + $1 | 0 : $1) | 0) + 65535 | 0) & -65536 | 0) >>> 16 | 0;
    $3 = ($2 | 0) > ($1 | 0);
    if ((__wasm_memory_grow(($3 ? $2 : $1) | 0) | 0) < (0 | 0)) {
      if ((__wasm_memory_grow($1 | 0) | 0) < (0 | 0)) {
        abort()
      }
    }
    $lib_rt_tlsf_addMemory($0, $2 << 16 | 0, __wasm_memory_size() << 16 | 0);
  }

  function $lib_rt_tlsf_prepareBlock($0, $1, $2) {
    var $3 = 0, $4 = 0;
    $3 = HEAP32[$1 >> 2];
    if ($2 & 15 | 0) {
      $lib_builtins_abort(0 | 0, 32 | 0, 365 | 0, 13 | 0);
      abort();
    }
    $4 = ($3 & -4 | 0) - $2 | 0;
    if ($4 >>> 0 >= 32 >>> 0) {
      HEAP32[$1 >> 2] = $3 & 2 | 0 | $2 | 0;
      $1 = ($1 + 16 | 0) + $2 | 0;
      HEAP32[$1 >> 2] = $4 - 16 | 0 | 1 | 0;
      $lib_rt_tlsf_insertBlock($0, $1);
    } else {
      HEAP32[$1 >> 2] = $3 & -2 | 0;
      $0 = $1 + 16 | 0;
      $2 = HEAP32[($0 + (HEAP32[$1 >> 2] & -4 | 0) | 0) >> 2];
      HEAP32[((HEAP32[$1 >> 2] & -4 | 0) + $0 | 0) >> 2] = $2 & -3 | 0;
    }
  }

  function $lib_rt_tlsf_allocateBlock($0, $1, $2) {
    var $3 = 0, $4 = 0;
    if ($lib_rt_tlsf_collectLock) {
      $lib_builtins_abort(0 | 0, 32 | 0, 490 | 0, 13 | 0);
      abort();
    }
    $4 = $lib_rt_tlsf_prepareSize($1);
    $3 = $lib_rt_tlsf_searchBlock($0, $4);
    if (!$3) {
      $lib_rt_tlsf_collectLock = 1;
      $lib_rt_tlsf_collectLock = 0;
      $3 = $lib_rt_tlsf_searchBlock($0, $4);
      if (!$3) {
        $lib_rt_tlsf_growMemory($0, $4);
        $3 = $lib_rt_tlsf_searchBlock($0, $4);
        if (!$3) {
          $lib_builtins_abort(0 | 0, 32 | 0, 502 | 0, 19 | 0);
          abort();
        }
      }
    }
    if ((HEAP32[$3 >> 2] & -4 | 0) >>> 0 < $4 >>> 0) {
      $lib_builtins_abort(0 | 0, 32 | 0, 510 | 0, 13 | 0);
      abort();
    }
    HEAP32[($3 + 4 | 0) >> 2] = 0;
    HEAP32[($3 + 8 | 0) >> 2] = $2;
    HEAP32[($3 + 12 | 0) >> 2] = $1;
    $lib_rt_tlsf_removeBlock($0, $3);
    $lib_rt_tlsf_prepareBlock($0, $3, $4);
    return $3;
  }

  function $lib_rt_tlsf___alloc($0, $1) {
    $0 = $0 | 0;
    $1 = $1 | 0;
    return $lib_rt_tlsf_allocateBlock($lib_rt_tlsf_maybeInitialize(), $0, $1) + 16 | 0 | 0;
  }

  function $lib_rt_pure_increment($0) {
    var $1 = 0;
    $1 = HEAP32[($0 + 4 | 0) >> 2];
    if (($1 & -268435456 | 0 | 0) != (($1 + 1 | 0) & -268435456 | 0 | 0)) {
      $lib_builtins_abort(0 | 0, 144 | 0, 109 | 0, 2 | 0);
      abort();
    }
    HEAP32[($0 + 4 | 0) >> 2] = $1 + 1 | 0;
    if (HEAP32[$0 >> 2] & 1 | 0) {
      $lib_builtins_abort(0 | 0, 144 | 0, 112 | 0, 13 | 0);
      abort();
    }
  }

  function $lib_rt_pure___retain($0) {
    $0 = $0 | 0;
    if ($0 >>> 0 > 204 >>> 0) {
      $lib_rt_pure_increment($0 - 16 | 0)
    }
    return $0 | 0;
  }

  function $lib_rt_pure___release($0) {
    $0 = $0 | 0;
    if ($0 >>> 0 > 204 >>> 0) {
      $lib_rt_pure_decrement($0 - 16 | 0)
    }
  }

  function assembly_index_sumValues($0, $1) {
    $0 = $0 | 0;
    $1 = $1 | 0;
    return $0 + $1 | 0 | 0;
  }

  function assembly_index_countValues($0, $1) {
    $0 = $0 | 0;
    $1 = $1 | 0;
    for_loop_0: while (1) {
      if (($0 | 0) < ($1 | 0)) {
        $0 = $0 + 1 | 0;
        continue for_loop_0;
      }
      break for_loop_0;
    };
    return 1 | 0;
  }

  function $lib_rt_pure___collect() {

  }

  function $lib_rt_pure_decrement($0) {
    var $1 = 0, $2 = 0;
    $1 = HEAP32[($0 + 4 | 0) >> 2];
    $2 = $1 & 268435455 | 0;
    if (HEAP32[$0 >> 2] & 1 | 0) {
      $lib_builtins_abort(0 | 0, 144 | 0, 122 | 0, 13 | 0);
      abort();
    }
    if (($2 | 0) == (1 | 0)) {
      $lib_rt___visit_members($0 + 16 | 0);
      if ($1 & -2147483648 | 0) {
        $lib_builtins_abort(0 | 0, 144 | 0, 126 | 0, 17 | 0);
        abort();
      }
      HEAP32[$0 >> 2] = HEAP32[$0 >> 2] | 1 | 0;
      $lib_rt_tlsf_insertBlock($lib_rt_tlsf_ROOT, $0);
    } else {
      if ($2 >>> 0 <= 0 >>> 0) {
        $lib_builtins_abort(0 | 0, 144 | 0, 136 | 0, 15 | 0);
        abort();
      }
      HEAP32[($0 + 4 | 0) >> 2] = $2 - 1 | 0 | ($1 & -268435456 | 0) | 0;
    }
  }

  function $lib_rt___visit_members($0) {
    switch$1$default: {
      switch (HEAP32[($0 - 8 | 0) >> 2] | 0) {
        case 0:
        case 1:
          return;
        case 2:
          $0 = HEAP32[$0 >> 2];
          if ($0) {
            if ($0 >>> 0 >= 204 >>> 0) {
              $lib_rt_pure_decrement($0 - 16 | 0)
            }
          }
          return;
        default:
          break switch$1$default;
      };
    }
    abort();
  }

  function __wasm_ctz_i32($0) {
    if ($0) {
      return 31 - Math_clz32(($0 + -1 | 0) ^ $0 | 0) | 0
    }
    return 32;
  }

  var FUNCTION_TABLE = [];
  function __wasm_memory_size() {
    return buffer.byteLength / 65536 | 0;
  }

  function __wasm_memory_grow(pagesToAdd) {
    pagesToAdd = pagesToAdd | 0;
    var oldPages = __wasm_memory_size() | 0;
    var newPages = oldPages + pagesToAdd | 0;
    if ((oldPages < newPages) && (newPages < 65536)) {
      var newBuffer = new ArrayBuffer(Math_imul(newPages, 65536));
      var newHEAP8 = new global.Int8Array(newBuffer);
      newHEAP8.set(HEAP8);
      HEAP8 = newHEAP8;
      HEAP8 = new global.Int8Array(newBuffer);
      HEAP16 = new global.Int16Array(newBuffer);
      HEAP32 = new global.Int32Array(newBuffer);
      HEAPU8 = new global.Uint8Array(newBuffer);
      HEAPU16 = new global.Uint16Array(newBuffer);
      HEAPU32 = new global.Uint32Array(newBuffer);
      HEAPF32 = new global.Float32Array(newBuffer);
      HEAPF64 = new global.Float64Array(newBuffer);
      buffer = newBuffer;
    }
    return oldPages;
  }

  return {
    "memory": Object.create(Object.prototype, {
      "grow": {
        "value": __wasm_memory_grow
      },
      "buffer": {
        "get": function () {
          return buffer;
        }

      }
    }),
    "__alloc": $lib_rt_tlsf___alloc,
    "__retain": $lib_rt_pure___retain,
    "__release": $lib_rt_pure___release,
    "__collect": $lib_rt_pure___collect,
    "sumValues": assembly_index_sumValues,
    "countValues": assembly_index_countValues
  };
}

var memasmFunc = new ArrayBuffer(65536);
for (var base64ReverseLookup = new Uint8Array(123/*'z'+1*/), i = 25; i >= 0; --i) {
  base64ReverseLookup[48 + i] = 52 + i; // '0-9'
  base64ReverseLookup[65 + i] = i; // 'A-Z'
  base64ReverseLookup[97 + i] = 26 + i; // 'a-z'
}
base64ReverseLookup[43] = 62; // '+'
base64ReverseLookup[47] = 63; // '/'
/** @noinline Inlining this function would mean expanding the base64 string 4x times in the source code, which Closure seems to be happy to do. */
function base64DecodeToExistingUint8Array(uint8Array, offset, b64) {
  var b1, b2, i = 0, j = offset, bLength = b64.length, end = offset + (bLength * 3 >> 2);
  if (b64[bLength - 2] == '=') --end;
  if (b64[bLength - 1] == '=') --end;
  for (; i < bLength; i += 4, j += 3) {
    b1 = base64ReverseLookup[b64.charCodeAt(i + 1)];
    b2 = base64ReverseLookup[b64.charCodeAt(i + 2)];
    uint8Array[j] = base64ReverseLookup[b64.charCodeAt(i)] << 2 | b1 >> 4;
    if (j + 1 < end) uint8Array[j + 1] = b1 << 4 | b2 >> 2;
    if (j + 2 < end) uint8Array[j + 2] = b2 << 6 | base64ReverseLookup[b64.charCodeAt(i + 3)];
  }
}
var bufferView = new Uint8Array(memasmFunc);
base64DecodeToExistingUint8Array(bufferView, 16, "HgAAAAEAAAABAAAAHgAAAH4AbABpAGIALwByAHQALwB0AGwAcwBmAC4AdABz");
base64DecodeToExistingUint8Array(bufferView, 64, "KAAAAAEAAAABAAAAKAAAAGEAbABsAG8AYwBhAHQAaQBvAG4AIAB0AG8AbwAgAGwAYQByAGcAZQ==");
base64DecodeToExistingUint8Array(bufferView, 128, "HgAAAAEAAAABAAAAHgAAAH4AbABpAGIALwByAHQALwBwAHUAcgBlAC4AdABz");
base64DecodeToExistingUint8Array(bufferView, 176, "AwAAABAAAAAAAAAAEAAAAAAAAAAQ");
var retasmFunc = asmFunc({ Math, Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, NaN, Infinity }, {
  abort: function () {
    throw new Error('abort');
  },

}, memasmFunc);
export var memory = retasmFunc.memory;
export var __alloc = retasmFunc.__alloc;
export var __retain = retasmFunc.__retain;
export var __release = retasmFunc.__release;
export var __collect = retasmFunc.__collect;
export var sumValues = retasmFunc.sumValues;
export var countValues = retasmFunc.countValues;
export { retasmFunc }
