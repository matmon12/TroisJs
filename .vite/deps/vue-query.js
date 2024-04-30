import {
  getCurrentInstance,
  inject,
  isReactive,
  isRef,
  onScopeDispose,
  provide,
  reactive,
  readonly,
  ref,
  toRefs,
  unref,
  watch,
  watchEffect
} from "./chunk-EWG5TRLO.js";
import {
  __commonJS,
  __toESM
} from "./chunk-ZS7NZCD4.js";

// node_modules/remove-accents/index.js
var require_remove_accents = __commonJS({
  "node_modules/remove-accents/index.js"(exports, module) {
    var characterMap = {
      "À": "A",
      "Á": "A",
      "Â": "A",
      "Ã": "A",
      "Ä": "A",
      "Å": "A",
      "Ấ": "A",
      "Ắ": "A",
      "Ẳ": "A",
      "Ẵ": "A",
      "Ặ": "A",
      "Æ": "AE",
      "Ầ": "A",
      "Ằ": "A",
      "Ȃ": "A",
      "Ả": "A",
      "Ạ": "A",
      "Ẩ": "A",
      "Ẫ": "A",
      "Ậ": "A",
      "Ç": "C",
      "Ḉ": "C",
      "È": "E",
      "É": "E",
      "Ê": "E",
      "Ë": "E",
      "Ế": "E",
      "Ḗ": "E",
      "Ề": "E",
      "Ḕ": "E",
      "Ḝ": "E",
      "Ȇ": "E",
      "Ẻ": "E",
      "Ẽ": "E",
      "Ẹ": "E",
      "Ể": "E",
      "Ễ": "E",
      "Ệ": "E",
      "Ì": "I",
      "Í": "I",
      "Î": "I",
      "Ï": "I",
      "Ḯ": "I",
      "Ȋ": "I",
      "Ỉ": "I",
      "Ị": "I",
      "Ð": "D",
      "Ñ": "N",
      "Ò": "O",
      "Ó": "O",
      "Ô": "O",
      "Õ": "O",
      "Ö": "O",
      "Ø": "O",
      "Ố": "O",
      "Ṍ": "O",
      "Ṓ": "O",
      "Ȏ": "O",
      "Ỏ": "O",
      "Ọ": "O",
      "Ổ": "O",
      "Ỗ": "O",
      "Ộ": "O",
      "Ờ": "O",
      "Ở": "O",
      "Ỡ": "O",
      "Ớ": "O",
      "Ợ": "O",
      "Ù": "U",
      "Ú": "U",
      "Û": "U",
      "Ü": "U",
      "Ủ": "U",
      "Ụ": "U",
      "Ử": "U",
      "Ữ": "U",
      "Ự": "U",
      "Ý": "Y",
      "à": "a",
      "á": "a",
      "â": "a",
      "ã": "a",
      "ä": "a",
      "å": "a",
      "ấ": "a",
      "ắ": "a",
      "ẳ": "a",
      "ẵ": "a",
      "ặ": "a",
      "æ": "ae",
      "ầ": "a",
      "ằ": "a",
      "ȃ": "a",
      "ả": "a",
      "ạ": "a",
      "ẩ": "a",
      "ẫ": "a",
      "ậ": "a",
      "ç": "c",
      "ḉ": "c",
      "è": "e",
      "é": "e",
      "ê": "e",
      "ë": "e",
      "ế": "e",
      "ḗ": "e",
      "ề": "e",
      "ḕ": "e",
      "ḝ": "e",
      "ȇ": "e",
      "ẻ": "e",
      "ẽ": "e",
      "ẹ": "e",
      "ể": "e",
      "ễ": "e",
      "ệ": "e",
      "ì": "i",
      "í": "i",
      "î": "i",
      "ï": "i",
      "ḯ": "i",
      "ȋ": "i",
      "ỉ": "i",
      "ị": "i",
      "ð": "d",
      "ñ": "n",
      "ò": "o",
      "ó": "o",
      "ô": "o",
      "õ": "o",
      "ö": "o",
      "ø": "o",
      "ố": "o",
      "ṍ": "o",
      "ṓ": "o",
      "ȏ": "o",
      "ỏ": "o",
      "ọ": "o",
      "ổ": "o",
      "ỗ": "o",
      "ộ": "o",
      "ờ": "o",
      "ở": "o",
      "ỡ": "o",
      "ớ": "o",
      "ợ": "o",
      "ù": "u",
      "ú": "u",
      "û": "u",
      "ü": "u",
      "ủ": "u",
      "ụ": "u",
      "ử": "u",
      "ữ": "u",
      "ự": "u",
      "ý": "y",
      "ÿ": "y",
      "Ā": "A",
      "ā": "a",
      "Ă": "A",
      "ă": "a",
      "Ą": "A",
      "ą": "a",
      "Ć": "C",
      "ć": "c",
      "Ĉ": "C",
      "ĉ": "c",
      "Ċ": "C",
      "ċ": "c",
      "Č": "C",
      "č": "c",
      "C̆": "C",
      "c̆": "c",
      "Ď": "D",
      "ď": "d",
      "Đ": "D",
      "đ": "d",
      "Ē": "E",
      "ē": "e",
      "Ĕ": "E",
      "ĕ": "e",
      "Ė": "E",
      "ė": "e",
      "Ę": "E",
      "ę": "e",
      "Ě": "E",
      "ě": "e",
      "Ĝ": "G",
      "Ǵ": "G",
      "ĝ": "g",
      "ǵ": "g",
      "Ğ": "G",
      "ğ": "g",
      "Ġ": "G",
      "ġ": "g",
      "Ģ": "G",
      "ģ": "g",
      "Ĥ": "H",
      "ĥ": "h",
      "Ħ": "H",
      "ħ": "h",
      "Ḫ": "H",
      "ḫ": "h",
      "Ĩ": "I",
      "ĩ": "i",
      "Ī": "I",
      "ī": "i",
      "Ĭ": "I",
      "ĭ": "i",
      "Į": "I",
      "į": "i",
      "İ": "I",
      "ı": "i",
      "Ĳ": "IJ",
      "ĳ": "ij",
      "Ĵ": "J",
      "ĵ": "j",
      "Ķ": "K",
      "ķ": "k",
      "Ḱ": "K",
      "ḱ": "k",
      "K̆": "K",
      "k̆": "k",
      "Ĺ": "L",
      "ĺ": "l",
      "Ļ": "L",
      "ļ": "l",
      "Ľ": "L",
      "ľ": "l",
      "Ŀ": "L",
      "ŀ": "l",
      "Ł": "l",
      "ł": "l",
      "Ḿ": "M",
      "ḿ": "m",
      "M̆": "M",
      "m̆": "m",
      "Ń": "N",
      "ń": "n",
      "Ņ": "N",
      "ņ": "n",
      "Ň": "N",
      "ň": "n",
      "ŉ": "n",
      "N̆": "N",
      "n̆": "n",
      "Ō": "O",
      "ō": "o",
      "Ŏ": "O",
      "ŏ": "o",
      "Ő": "O",
      "ő": "o",
      "Œ": "OE",
      "œ": "oe",
      "P̆": "P",
      "p̆": "p",
      "Ŕ": "R",
      "ŕ": "r",
      "Ŗ": "R",
      "ŗ": "r",
      "Ř": "R",
      "ř": "r",
      "R̆": "R",
      "r̆": "r",
      "Ȓ": "R",
      "ȓ": "r",
      "Ś": "S",
      "ś": "s",
      "Ŝ": "S",
      "ŝ": "s",
      "Ş": "S",
      "Ș": "S",
      "ș": "s",
      "ş": "s",
      "Š": "S",
      "š": "s",
      "Ţ": "T",
      "ţ": "t",
      "ț": "t",
      "Ț": "T",
      "Ť": "T",
      "ť": "t",
      "Ŧ": "T",
      "ŧ": "t",
      "T̆": "T",
      "t̆": "t",
      "Ũ": "U",
      "ũ": "u",
      "Ū": "U",
      "ū": "u",
      "Ŭ": "U",
      "ŭ": "u",
      "Ů": "U",
      "ů": "u",
      "Ű": "U",
      "ű": "u",
      "Ų": "U",
      "ų": "u",
      "Ȗ": "U",
      "ȗ": "u",
      "V̆": "V",
      "v̆": "v",
      "Ŵ": "W",
      "ŵ": "w",
      "Ẃ": "W",
      "ẃ": "w",
      "X̆": "X",
      "x̆": "x",
      "Ŷ": "Y",
      "ŷ": "y",
      "Ÿ": "Y",
      "Y̆": "Y",
      "y̆": "y",
      "Ź": "Z",
      "ź": "z",
      "Ż": "Z",
      "ż": "z",
      "Ž": "Z",
      "ž": "z",
      "ſ": "s",
      "ƒ": "f",
      "Ơ": "O",
      "ơ": "o",
      "Ư": "U",
      "ư": "u",
      "Ǎ": "A",
      "ǎ": "a",
      "Ǐ": "I",
      "ǐ": "i",
      "Ǒ": "O",
      "ǒ": "o",
      "Ǔ": "U",
      "ǔ": "u",
      "Ǖ": "U",
      "ǖ": "u",
      "Ǘ": "U",
      "ǘ": "u",
      "Ǚ": "U",
      "ǚ": "u",
      "Ǜ": "U",
      "ǜ": "u",
      "Ứ": "U",
      "ứ": "u",
      "Ṹ": "U",
      "ṹ": "u",
      "Ǻ": "A",
      "ǻ": "a",
      "Ǽ": "AE",
      "ǽ": "ae",
      "Ǿ": "O",
      "ǿ": "o",
      "Þ": "TH",
      "þ": "th",
      "Ṕ": "P",
      "ṕ": "p",
      "Ṥ": "S",
      "ṥ": "s",
      "X́": "X",
      "x́": "x",
      "Ѓ": "Г",
      "ѓ": "г",
      "Ќ": "К",
      "ќ": "к",
      "A̋": "A",
      "a̋": "a",
      "E̋": "E",
      "e̋": "e",
      "I̋": "I",
      "i̋": "i",
      "Ǹ": "N",
      "ǹ": "n",
      "Ồ": "O",
      "ồ": "o",
      "Ṑ": "O",
      "ṑ": "o",
      "Ừ": "U",
      "ừ": "u",
      "Ẁ": "W",
      "ẁ": "w",
      "Ỳ": "Y",
      "ỳ": "y",
      "Ȁ": "A",
      "ȁ": "a",
      "Ȅ": "E",
      "ȅ": "e",
      "Ȉ": "I",
      "ȉ": "i",
      "Ȍ": "O",
      "ȍ": "o",
      "Ȑ": "R",
      "ȑ": "r",
      "Ȕ": "U",
      "ȕ": "u",
      "B̌": "B",
      "b̌": "b",
      "Č̣": "C",
      "č̣": "c",
      "Ê̌": "E",
      "ê̌": "e",
      "F̌": "F",
      "f̌": "f",
      "Ǧ": "G",
      "ǧ": "g",
      "Ȟ": "H",
      "ȟ": "h",
      "J̌": "J",
      "ǰ": "j",
      "Ǩ": "K",
      "ǩ": "k",
      "M̌": "M",
      "m̌": "m",
      "P̌": "P",
      "p̌": "p",
      "Q̌": "Q",
      "q̌": "q",
      "Ř̩": "R",
      "ř̩": "r",
      "Ṧ": "S",
      "ṧ": "s",
      "V̌": "V",
      "v̌": "v",
      "W̌": "W",
      "w̌": "w",
      "X̌": "X",
      "x̌": "x",
      "Y̌": "Y",
      "y̌": "y",
      "A̧": "A",
      "a̧": "a",
      "B̧": "B",
      "b̧": "b",
      "Ḑ": "D",
      "ḑ": "d",
      "Ȩ": "E",
      "ȩ": "e",
      "Ɛ̧": "E",
      "ɛ̧": "e",
      "Ḩ": "H",
      "ḩ": "h",
      "I̧": "I",
      "i̧": "i",
      "Ɨ̧": "I",
      "ɨ̧": "i",
      "M̧": "M",
      "m̧": "m",
      "O̧": "O",
      "o̧": "o",
      "Q̧": "Q",
      "q̧": "q",
      "U̧": "U",
      "u̧": "u",
      "X̧": "X",
      "x̧": "x",
      "Z̧": "Z",
      "z̧": "z",
      "й": "и",
      "Й": "И",
      "ё": "е",
      "Ё": "Е"
    };
    var chars = Object.keys(characterMap).join("|");
    var allAccents = new RegExp(chars, "g");
    var firstAccent = new RegExp(chars, "");
    function matcher(match) {
      return characterMap[match];
    }
    var removeAccents2 = function(string) {
      return string.replace(allAccents, matcher);
    };
    var hasAccents = function(string) {
      return !!string.match(firstAccent);
    };
    module.exports = removeAccents2;
    module.exports.has = hasAccents;
    module.exports.remove = removeAccents2;
  }
});

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

// node_modules/react-query/es/core/subscribable.js
var Subscribable = function() {
  function Subscribable2() {
    this.listeners = [];
  }
  var _proto = Subscribable2.prototype;
  _proto.subscribe = function subscribe(listener) {
    var _this = this;
    var callback = listener || function() {
      return void 0;
    };
    this.listeners.push(callback);
    this.onSubscribe();
    return function() {
      _this.listeners = _this.listeners.filter(function(x) {
        return x !== callback;
      });
      _this.onUnsubscribe();
    };
  };
  _proto.hasListeners = function hasListeners() {
    return this.listeners.length > 0;
  };
  _proto.onSubscribe = function onSubscribe() {
  };
  _proto.onUnsubscribe = function onUnsubscribe() {
  };
  return Subscribable2;
}();

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// node_modules/react-query/es/core/utils.js
var isServer = typeof window === "undefined";
function noop() {
  return void 0;
}
function functionalUpdate(updater, input) {
  return typeof updater === "function" ? updater(input) : updater;
}
function isValidTimeout(value) {
  return typeof value === "number" && value >= 0 && value !== Infinity;
}
function ensureQueryKeyArray(value) {
  return Array.isArray(value) ? value : [value];
}
function difference(array1, array2) {
  return array1.filter(function(x) {
    return array2.indexOf(x) === -1;
  });
}
function replaceAt(array, index, value) {
  var copy = array.slice(0);
  copy[index] = value;
  return copy;
}
function timeUntilStale(updatedAt, staleTime) {
  return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function parseQueryArgs(arg1, arg2, arg3) {
  if (!isQueryKey(arg1)) {
    return arg1;
  }
  if (typeof arg2 === "function") {
    return _extends({}, arg3, {
      queryKey: arg1,
      queryFn: arg2
    });
  }
  return _extends({}, arg2, {
    queryKey: arg1
  });
}
function parseFilterArgs(arg1, arg2, arg3) {
  return isQueryKey(arg1) ? [_extends({}, arg2, {
    queryKey: arg1
  }), arg3] : [arg1 || {}, arg2];
}
function mapQueryStatusFilter(active, inactive) {
  if (active === true && inactive === true || active == null && inactive == null) {
    return "all";
  } else if (active === false && inactive === false) {
    return "none";
  } else {
    var isActive = active != null ? active : !inactive;
    return isActive ? "active" : "inactive";
  }
}
function matchQuery(filters, query) {
  var active = filters.active, exact = filters.exact, fetching = filters.fetching, inactive = filters.inactive, predicate = filters.predicate, queryKey = filters.queryKey, stale = filters.stale;
  if (isQueryKey(queryKey)) {
    if (exact) {
      if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
        return false;
      }
    } else if (!partialMatchKey(query.queryKey, queryKey)) {
      return false;
    }
  }
  var queryStatusFilter = mapQueryStatusFilter(active, inactive);
  if (queryStatusFilter === "none") {
    return false;
  } else if (queryStatusFilter !== "all") {
    var isActive = query.isActive();
    if (queryStatusFilter === "active" && !isActive) {
      return false;
    }
    if (queryStatusFilter === "inactive" && isActive) {
      return false;
    }
  }
  if (typeof stale === "boolean" && query.isStale() !== stale) {
    return false;
  }
  if (typeof fetching === "boolean" && query.isFetching() !== fetching) {
    return false;
  }
  if (predicate && !predicate(query)) {
    return false;
  }
  return true;
}
function matchMutation(filters, mutation) {
  var exact = filters.exact, fetching = filters.fetching, predicate = filters.predicate, mutationKey = filters.mutationKey;
  if (isQueryKey(mutationKey)) {
    if (!mutation.options.mutationKey) {
      return false;
    }
    if (exact) {
      if (hashQueryKey(mutation.options.mutationKey) !== hashQueryKey(mutationKey)) {
        return false;
      }
    } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
      return false;
    }
  }
  if (typeof fetching === "boolean" && mutation.state.status === "loading" !== fetching) {
    return false;
  }
  if (predicate && !predicate(mutation)) {
    return false;
  }
  return true;
}
function hashQueryKeyByOptions(queryKey, options) {
  var hashFn = (options == null ? void 0 : options.queryKeyHashFn) || hashQueryKey;
  return hashFn(queryKey);
}
function hashQueryKey(queryKey) {
  var asArray = ensureQueryKeyArray(queryKey);
  return stableValueHash(asArray);
}
function stableValueHash(value) {
  return JSON.stringify(value, function(_, val) {
    return isPlainObject(val) ? Object.keys(val).sort().reduce(function(result, key) {
      result[key] = val[key];
      return result;
    }, {}) : val;
  });
}
function partialMatchKey(a, b) {
  return partialDeepEqual(ensureQueryKeyArray(a), ensureQueryKeyArray(b));
}
function partialDeepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (a && b && typeof a === "object" && typeof b === "object") {
    return !Object.keys(b).some(function(key) {
      return !partialDeepEqual(a[key], b[key]);
    });
  }
  return false;
}
function replaceEqualDeep(a, b) {
  if (a === b) {
    return a;
  }
  var array = Array.isArray(a) && Array.isArray(b);
  if (array || isPlainObject(a) && isPlainObject(b)) {
    var aSize = array ? a.length : Object.keys(a).length;
    var bItems = array ? b : Object.keys(b);
    var bSize = bItems.length;
    var copy = array ? [] : {};
    var equalItems = 0;
    for (var i = 0; i < bSize; i++) {
      var key = array ? i : bItems[i];
      copy[key] = replaceEqualDeep(a[key], b[key]);
      if (copy[key] === a[key]) {
        equalItems++;
      }
    }
    return aSize === bSize && equalItems === aSize ? a : copy;
  }
  return b;
}
function shallowEqualObjects(a, b) {
  if (a && !b || b && !a) {
    return false;
  }
  for (var key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}
function isPlainObject(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  }
  var ctor = o.constructor;
  if (typeof ctor === "undefined") {
    return true;
  }
  var prot = ctor.prototype;
  if (!hasObjectPrototype(prot)) {
    return false;
  }
  if (!prot.hasOwnProperty("isPrototypeOf")) {
    return false;
  }
  return true;
}
function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function isQueryKey(value) {
  return typeof value === "string" || Array.isArray(value);
}
function sleep(timeout) {
  return new Promise(function(resolve) {
    setTimeout(resolve, timeout);
  });
}
function scheduleMicrotask(callback) {
  Promise.resolve().then(callback).catch(function(error) {
    return setTimeout(function() {
      throw error;
    });
  });
}
function getAbortController() {
  if (typeof AbortController === "function") {
    return new AbortController();
  }
}

// node_modules/react-query/es/core/focusManager.js
var FocusManager = function(_Subscribable) {
  _inheritsLoose(FocusManager2, _Subscribable);
  function FocusManager2() {
    var _this;
    _this = _Subscribable.call(this) || this;
    _this.setup = function(onFocus) {
      var _window;
      if (!isServer && ((_window = window) == null ? void 0 : _window.addEventListener)) {
        var listener = function listener2() {
          return onFocus();
        };
        window.addEventListener("visibilitychange", listener, false);
        window.addEventListener("focus", listener, false);
        return function() {
          window.removeEventListener("visibilitychange", listener);
          window.removeEventListener("focus", listener);
        };
      }
    };
    return _this;
  }
  var _proto = FocusManager2.prototype;
  _proto.onSubscribe = function onSubscribe() {
    if (!this.cleanup) {
      this.setEventListener(this.setup);
    }
  };
  _proto.onUnsubscribe = function onUnsubscribe() {
    if (!this.hasListeners()) {
      var _this$cleanup;
      (_this$cleanup = this.cleanup) == null ? void 0 : _this$cleanup.call(this);
      this.cleanup = void 0;
    }
  };
  _proto.setEventListener = function setEventListener(setup) {
    var _this$cleanup2, _this2 = this;
    this.setup = setup;
    (_this$cleanup2 = this.cleanup) == null ? void 0 : _this$cleanup2.call(this);
    this.cleanup = setup(function(focused) {
      if (typeof focused === "boolean") {
        _this2.setFocused(focused);
      } else {
        _this2.onFocus();
      }
    });
  };
  _proto.setFocused = function setFocused(focused) {
    this.focused = focused;
    if (focused) {
      this.onFocus();
    }
  };
  _proto.onFocus = function onFocus() {
    this.listeners.forEach(function(listener) {
      listener();
    });
  };
  _proto.isFocused = function isFocused() {
    if (typeof this.focused === "boolean") {
      return this.focused;
    }
    if (typeof document === "undefined") {
      return true;
    }
    return [void 0, "visible", "prerender"].includes(document.visibilityState);
  };
  return FocusManager2;
}(Subscribable);
var focusManager = new FocusManager();

// node_modules/react-query/es/core/onlineManager.js
var OnlineManager = function(_Subscribable) {
  _inheritsLoose(OnlineManager2, _Subscribable);
  function OnlineManager2() {
    var _this;
    _this = _Subscribable.call(this) || this;
    _this.setup = function(onOnline) {
      var _window;
      if (!isServer && ((_window = window) == null ? void 0 : _window.addEventListener)) {
        var listener = function listener2() {
          return onOnline();
        };
        window.addEventListener("online", listener, false);
        window.addEventListener("offline", listener, false);
        return function() {
          window.removeEventListener("online", listener);
          window.removeEventListener("offline", listener);
        };
      }
    };
    return _this;
  }
  var _proto = OnlineManager2.prototype;
  _proto.onSubscribe = function onSubscribe() {
    if (!this.cleanup) {
      this.setEventListener(this.setup);
    }
  };
  _proto.onUnsubscribe = function onUnsubscribe() {
    if (!this.hasListeners()) {
      var _this$cleanup;
      (_this$cleanup = this.cleanup) == null ? void 0 : _this$cleanup.call(this);
      this.cleanup = void 0;
    }
  };
  _proto.setEventListener = function setEventListener(setup) {
    var _this$cleanup2, _this2 = this;
    this.setup = setup;
    (_this$cleanup2 = this.cleanup) == null ? void 0 : _this$cleanup2.call(this);
    this.cleanup = setup(function(online) {
      if (typeof online === "boolean") {
        _this2.setOnline(online);
      } else {
        _this2.onOnline();
      }
    });
  };
  _proto.setOnline = function setOnline(online) {
    this.online = online;
    if (online) {
      this.onOnline();
    }
  };
  _proto.onOnline = function onOnline() {
    this.listeners.forEach(function(listener) {
      listener();
    });
  };
  _proto.isOnline = function isOnline() {
    if (typeof this.online === "boolean") {
      return this.online;
    }
    if (typeof navigator === "undefined" || typeof navigator.onLine === "undefined") {
      return true;
    }
    return navigator.onLine;
  };
  return OnlineManager2;
}(Subscribable);
var onlineManager = new OnlineManager();

// node_modules/react-query/es/core/retryer.js
function defaultRetryDelay(failureCount) {
  return Math.min(1e3 * Math.pow(2, failureCount), 3e4);
}
function isCancelable(value) {
  return typeof (value == null ? void 0 : value.cancel) === "function";
}
var CancelledError = function CancelledError2(options) {
  this.revert = options == null ? void 0 : options.revert;
  this.silent = options == null ? void 0 : options.silent;
};
function isCancelledError(value) {
  return value instanceof CancelledError;
}
var Retryer = function Retryer2(config) {
  var _this = this;
  var cancelRetry = false;
  var cancelFn;
  var continueFn;
  var promiseResolve;
  var promiseReject;
  this.abort = config.abort;
  this.cancel = function(cancelOptions) {
    return cancelFn == null ? void 0 : cancelFn(cancelOptions);
  };
  this.cancelRetry = function() {
    cancelRetry = true;
  };
  this.continueRetry = function() {
    cancelRetry = false;
  };
  this.continue = function() {
    return continueFn == null ? void 0 : continueFn();
  };
  this.failureCount = 0;
  this.isPaused = false;
  this.isResolved = false;
  this.isTransportCancelable = false;
  this.promise = new Promise(function(outerResolve, outerReject) {
    promiseResolve = outerResolve;
    promiseReject = outerReject;
  });
  var resolve = function resolve2(value) {
    if (!_this.isResolved) {
      _this.isResolved = true;
      config.onSuccess == null ? void 0 : config.onSuccess(value);
      continueFn == null ? void 0 : continueFn();
      promiseResolve(value);
    }
  };
  var reject = function reject2(value) {
    if (!_this.isResolved) {
      _this.isResolved = true;
      config.onError == null ? void 0 : config.onError(value);
      continueFn == null ? void 0 : continueFn();
      promiseReject(value);
    }
  };
  var pause = function pause2() {
    return new Promise(function(continueResolve) {
      continueFn = continueResolve;
      _this.isPaused = true;
      config.onPause == null ? void 0 : config.onPause();
    }).then(function() {
      continueFn = void 0;
      _this.isPaused = false;
      config.onContinue == null ? void 0 : config.onContinue();
    });
  };
  var run = function run2() {
    if (_this.isResolved) {
      return;
    }
    var promiseOrValue;
    try {
      promiseOrValue = config.fn();
    } catch (error) {
      promiseOrValue = Promise.reject(error);
    }
    cancelFn = function cancelFn2(cancelOptions) {
      if (!_this.isResolved) {
        reject(new CancelledError(cancelOptions));
        _this.abort == null ? void 0 : _this.abort();
        if (isCancelable(promiseOrValue)) {
          try {
            promiseOrValue.cancel();
          } catch (_unused) {
          }
        }
      }
    };
    _this.isTransportCancelable = isCancelable(promiseOrValue);
    Promise.resolve(promiseOrValue).then(resolve).catch(function(error) {
      var _config$retry, _config$retryDelay;
      if (_this.isResolved) {
        return;
      }
      var retry = (_config$retry = config.retry) != null ? _config$retry : 3;
      var retryDelay = (_config$retryDelay = config.retryDelay) != null ? _config$retryDelay : defaultRetryDelay;
      var delay = typeof retryDelay === "function" ? retryDelay(_this.failureCount, error) : retryDelay;
      var shouldRetry = retry === true || typeof retry === "number" && _this.failureCount < retry || typeof retry === "function" && retry(_this.failureCount, error);
      if (cancelRetry || !shouldRetry) {
        reject(error);
        return;
      }
      _this.failureCount++;
      config.onFail == null ? void 0 : config.onFail(_this.failureCount, error);
      sleep(delay).then(function() {
        if (!focusManager.isFocused() || !onlineManager.isOnline()) {
          return pause();
        }
      }).then(function() {
        if (cancelRetry) {
          reject(error);
        } else {
          run2();
        }
      });
    });
  };
  run();
};

// node_modules/react-query/es/core/notifyManager.js
var NotifyManager = function() {
  function NotifyManager2() {
    this.queue = [];
    this.transactions = 0;
    this.notifyFn = function(callback) {
      callback();
    };
    this.batchNotifyFn = function(callback) {
      callback();
    };
  }
  var _proto = NotifyManager2.prototype;
  _proto.batch = function batch(callback) {
    var result;
    this.transactions++;
    try {
      result = callback();
    } finally {
      this.transactions--;
      if (!this.transactions) {
        this.flush();
      }
    }
    return result;
  };
  _proto.schedule = function schedule(callback) {
    var _this = this;
    if (this.transactions) {
      this.queue.push(callback);
    } else {
      scheduleMicrotask(function() {
        _this.notifyFn(callback);
      });
    }
  };
  _proto.batchCalls = function batchCalls(callback) {
    var _this2 = this;
    return function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this2.schedule(function() {
        callback.apply(void 0, args);
      });
    };
  };
  _proto.flush = function flush() {
    var _this3 = this;
    var queue = this.queue;
    this.queue = [];
    if (queue.length) {
      scheduleMicrotask(function() {
        _this3.batchNotifyFn(function() {
          queue.forEach(function(callback) {
            _this3.notifyFn(callback);
          });
        });
      });
    }
  };
  _proto.setNotifyFunction = function setNotifyFunction(fn) {
    this.notifyFn = fn;
  };
  _proto.setBatchNotifyFunction = function setBatchNotifyFunction(fn) {
    this.batchNotifyFn = fn;
  };
  return NotifyManager2;
}();
var notifyManager = new NotifyManager();

// node_modules/react-query/es/core/logger.js
var logger = console;
function getLogger() {
  return logger;
}
function setLogger(newLogger) {
  logger = newLogger;
}

// node_modules/react-query/es/core/query.js
var Query = function() {
  function Query2(config) {
    this.abortSignalConsumed = false;
    this.hadObservers = false;
    this.defaultOptions = config.defaultOptions;
    this.setOptions(config.options);
    this.observers = [];
    this.cache = config.cache;
    this.queryKey = config.queryKey;
    this.queryHash = config.queryHash;
    this.initialState = config.state || this.getDefaultState(this.options);
    this.state = this.initialState;
    this.meta = config.meta;
    this.scheduleGc();
  }
  var _proto = Query2.prototype;
  _proto.setOptions = function setOptions(options) {
    var _this$options$cacheTi;
    this.options = _extends({}, this.defaultOptions, options);
    this.meta = options == null ? void 0 : options.meta;
    this.cacheTime = Math.max(this.cacheTime || 0, (_this$options$cacheTi = this.options.cacheTime) != null ? _this$options$cacheTi : 5 * 60 * 1e3);
  };
  _proto.setDefaultOptions = function setDefaultOptions(options) {
    this.defaultOptions = options;
  };
  _proto.scheduleGc = function scheduleGc() {
    var _this = this;
    this.clearGcTimeout();
    if (isValidTimeout(this.cacheTime)) {
      this.gcTimeout = setTimeout(function() {
        _this.optionalRemove();
      }, this.cacheTime);
    }
  };
  _proto.clearGcTimeout = function clearGcTimeout() {
    if (this.gcTimeout) {
      clearTimeout(this.gcTimeout);
      this.gcTimeout = void 0;
    }
  };
  _proto.optionalRemove = function optionalRemove() {
    if (!this.observers.length) {
      if (this.state.isFetching) {
        if (this.hadObservers) {
          this.scheduleGc();
        }
      } else {
        this.cache.remove(this);
      }
    }
  };
  _proto.setData = function setData(updater, options) {
    var _this$options$isDataE, _this$options;
    var prevData = this.state.data;
    var data = functionalUpdate(updater, prevData);
    if ((_this$options$isDataE = (_this$options = this.options).isDataEqual) == null ? void 0 : _this$options$isDataE.call(_this$options, prevData, data)) {
      data = prevData;
    } else if (this.options.structuralSharing !== false) {
      data = replaceEqualDeep(prevData, data);
    }
    this.dispatch({
      data,
      type: "success",
      dataUpdatedAt: options == null ? void 0 : options.updatedAt
    });
    return data;
  };
  _proto.setState = function setState(state, setStateOptions) {
    this.dispatch({
      type: "setState",
      state,
      setStateOptions
    });
  };
  _proto.cancel = function cancel(options) {
    var _this$retryer;
    var promise = this.promise;
    (_this$retryer = this.retryer) == null ? void 0 : _this$retryer.cancel(options);
    return promise ? promise.then(noop).catch(noop) : Promise.resolve();
  };
  _proto.destroy = function destroy() {
    this.clearGcTimeout();
    this.cancel({
      silent: true
    });
  };
  _proto.reset = function reset() {
    this.destroy();
    this.setState(this.initialState);
  };
  _proto.isActive = function isActive() {
    return this.observers.some(function(observer) {
      return observer.options.enabled !== false;
    });
  };
  _proto.isFetching = function isFetching() {
    return this.state.isFetching;
  };
  _proto.isStale = function isStale2() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(function(observer) {
      return observer.getCurrentResult().isStale;
    });
  };
  _proto.isStaleByTime = function isStaleByTime(staleTime) {
    if (staleTime === void 0) {
      staleTime = 0;
    }
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !timeUntilStale(this.state.dataUpdatedAt, staleTime);
  };
  _proto.onFocus = function onFocus() {
    var _this$retryer2;
    var observer = this.observers.find(function(x) {
      return x.shouldFetchOnWindowFocus();
    });
    if (observer) {
      observer.refetch();
    }
    (_this$retryer2 = this.retryer) == null ? void 0 : _this$retryer2.continue();
  };
  _proto.onOnline = function onOnline() {
    var _this$retryer3;
    var observer = this.observers.find(function(x) {
      return x.shouldFetchOnReconnect();
    });
    if (observer) {
      observer.refetch();
    }
    (_this$retryer3 = this.retryer) == null ? void 0 : _this$retryer3.continue();
  };
  _proto.addObserver = function addObserver(observer) {
    if (this.observers.indexOf(observer) === -1) {
      this.observers.push(observer);
      this.hadObservers = true;
      this.clearGcTimeout();
      this.cache.notify({
        type: "observerAdded",
        query: this,
        observer
      });
    }
  };
  _proto.removeObserver = function removeObserver(observer) {
    if (this.observers.indexOf(observer) !== -1) {
      this.observers = this.observers.filter(function(x) {
        return x !== observer;
      });
      if (!this.observers.length) {
        if (this.retryer) {
          if (this.retryer.isTransportCancelable || this.abortSignalConsumed) {
            this.retryer.cancel({
              revert: true
            });
          } else {
            this.retryer.cancelRetry();
          }
        }
        if (this.cacheTime) {
          this.scheduleGc();
        } else {
          this.cache.remove(this);
        }
      }
      this.cache.notify({
        type: "observerRemoved",
        query: this,
        observer
      });
    }
  };
  _proto.getObserversCount = function getObserversCount() {
    return this.observers.length;
  };
  _proto.invalidate = function invalidate() {
    if (!this.state.isInvalidated) {
      this.dispatch({
        type: "invalidate"
      });
    }
  };
  _proto.fetch = function fetch(options, fetchOptions) {
    var _this2 = this, _this$options$behavio, _context$fetchOptions, _abortController$abor;
    if (this.state.isFetching) {
      if (this.state.dataUpdatedAt && (fetchOptions == null ? void 0 : fetchOptions.cancelRefetch)) {
        this.cancel({
          silent: true
        });
      } else if (this.promise) {
        var _this$retryer4;
        (_this$retryer4 = this.retryer) == null ? void 0 : _this$retryer4.continueRetry();
        return this.promise;
      }
    }
    if (options) {
      this.setOptions(options);
    }
    if (!this.options.queryFn) {
      var observer = this.observers.find(function(x) {
        return x.options.queryFn;
      });
      if (observer) {
        this.setOptions(observer.options);
      }
    }
    var queryKey = ensureQueryKeyArray(this.queryKey);
    var abortController = getAbortController();
    var queryFnContext = {
      queryKey,
      pageParam: void 0,
      meta: this.meta
    };
    Object.defineProperty(queryFnContext, "signal", {
      enumerable: true,
      get: function get() {
        if (abortController) {
          _this2.abortSignalConsumed = true;
          return abortController.signal;
        }
        return void 0;
      }
    });
    var fetchFn = function fetchFn2() {
      if (!_this2.options.queryFn) {
        return Promise.reject("Missing queryFn");
      }
      _this2.abortSignalConsumed = false;
      return _this2.options.queryFn(queryFnContext);
    };
    var context = {
      fetchOptions,
      options: this.options,
      queryKey,
      state: this.state,
      fetchFn,
      meta: this.meta
    };
    if ((_this$options$behavio = this.options.behavior) == null ? void 0 : _this$options$behavio.onFetch) {
      var _this$options$behavio2;
      (_this$options$behavio2 = this.options.behavior) == null ? void 0 : _this$options$behavio2.onFetch(context);
    }
    this.revertState = this.state;
    if (!this.state.isFetching || this.state.fetchMeta !== ((_context$fetchOptions = context.fetchOptions) == null ? void 0 : _context$fetchOptions.meta)) {
      var _context$fetchOptions2;
      this.dispatch({
        type: "fetch",
        meta: (_context$fetchOptions2 = context.fetchOptions) == null ? void 0 : _context$fetchOptions2.meta
      });
    }
    this.retryer = new Retryer({
      fn: context.fetchFn,
      abort: abortController == null ? void 0 : (_abortController$abor = abortController.abort) == null ? void 0 : _abortController$abor.bind(abortController),
      onSuccess: function onSuccess(data) {
        _this2.setData(data);
        _this2.cache.config.onSuccess == null ? void 0 : _this2.cache.config.onSuccess(data, _this2);
        if (_this2.cacheTime === 0) {
          _this2.optionalRemove();
        }
      },
      onError: function onError(error) {
        if (!(isCancelledError(error) && error.silent)) {
          _this2.dispatch({
            type: "error",
            error
          });
        }
        if (!isCancelledError(error)) {
          _this2.cache.config.onError == null ? void 0 : _this2.cache.config.onError(error, _this2);
          getLogger().error(error);
        }
        if (_this2.cacheTime === 0) {
          _this2.optionalRemove();
        }
      },
      onFail: function onFail() {
        _this2.dispatch({
          type: "failed"
        });
      },
      onPause: function onPause() {
        _this2.dispatch({
          type: "pause"
        });
      },
      onContinue: function onContinue() {
        _this2.dispatch({
          type: "continue"
        });
      },
      retry: context.options.retry,
      retryDelay: context.options.retryDelay
    });
    this.promise = this.retryer.promise;
    return this.promise;
  };
  _proto.dispatch = function dispatch(action) {
    var _this3 = this;
    this.state = this.reducer(this.state, action);
    notifyManager.batch(function() {
      _this3.observers.forEach(function(observer) {
        observer.onQueryUpdate(action);
      });
      _this3.cache.notify({
        query: _this3,
        type: "queryUpdated",
        action
      });
    });
  };
  _proto.getDefaultState = function getDefaultState2(options) {
    var data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
    var hasInitialData = typeof options.initialData !== "undefined";
    var initialDataUpdatedAt = hasInitialData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
    var hasData = typeof data !== "undefined";
    return {
      data,
      dataUpdateCount: 0,
      dataUpdatedAt: hasData ? initialDataUpdatedAt != null ? initialDataUpdatedAt : Date.now() : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchMeta: null,
      isFetching: false,
      isInvalidated: false,
      isPaused: false,
      status: hasData ? "success" : "idle"
    };
  };
  _proto.reducer = function reducer2(state, action) {
    var _action$meta, _action$dataUpdatedAt;
    switch (action.type) {
      case "failed":
        return _extends({}, state, {
          fetchFailureCount: state.fetchFailureCount + 1
        });
      case "pause":
        return _extends({}, state, {
          isPaused: true
        });
      case "continue":
        return _extends({}, state, {
          isPaused: false
        });
      case "fetch":
        return _extends({}, state, {
          fetchFailureCount: 0,
          fetchMeta: (_action$meta = action.meta) != null ? _action$meta : null,
          isFetching: true,
          isPaused: false
        }, !state.dataUpdatedAt && {
          error: null,
          status: "loading"
        });
      case "success":
        return _extends({}, state, {
          data: action.data,
          dataUpdateCount: state.dataUpdateCount + 1,
          dataUpdatedAt: (_action$dataUpdatedAt = action.dataUpdatedAt) != null ? _action$dataUpdatedAt : Date.now(),
          error: null,
          fetchFailureCount: 0,
          isFetching: false,
          isInvalidated: false,
          isPaused: false,
          status: "success"
        });
      case "error":
        var error = action.error;
        if (isCancelledError(error) && error.revert && this.revertState) {
          return _extends({}, this.revertState);
        }
        return _extends({}, state, {
          error,
          errorUpdateCount: state.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: state.fetchFailureCount + 1,
          isFetching: false,
          isPaused: false,
          status: "error"
        });
      case "invalidate":
        return _extends({}, state, {
          isInvalidated: true
        });
      case "setState":
        return _extends({}, state, action.state);
      default:
        return state;
    }
  };
  return Query2;
}();

// node_modules/react-query/es/core/queryCache.js
var QueryCache = function(_Subscribable) {
  _inheritsLoose(QueryCache3, _Subscribable);
  function QueryCache3(config) {
    var _this;
    _this = _Subscribable.call(this) || this;
    _this.config = config || {};
    _this.queries = [];
    _this.queriesMap = {};
    return _this;
  }
  var _proto = QueryCache3.prototype;
  _proto.build = function build(client, options, state) {
    var _options$queryHash;
    var queryKey = options.queryKey;
    var queryHash = (_options$queryHash = options.queryHash) != null ? _options$queryHash : hashQueryKeyByOptions(queryKey, options);
    var query = this.get(queryHash);
    if (!query) {
      query = new Query({
        cache: this,
        queryKey,
        queryHash,
        options: client.defaultQueryOptions(options),
        state,
        defaultOptions: client.getQueryDefaults(queryKey),
        meta: options.meta
      });
      this.add(query);
    }
    return query;
  };
  _proto.add = function add(query) {
    if (!this.queriesMap[query.queryHash]) {
      this.queriesMap[query.queryHash] = query;
      this.queries.push(query);
      this.notify({
        type: "queryAdded",
        query
      });
    }
  };
  _proto.remove = function remove(query) {
    var queryInMap = this.queriesMap[query.queryHash];
    if (queryInMap) {
      query.destroy();
      this.queries = this.queries.filter(function(x) {
        return x !== query;
      });
      if (queryInMap === query) {
        delete this.queriesMap[query.queryHash];
      }
      this.notify({
        type: "queryRemoved",
        query
      });
    }
  };
  _proto.clear = function clear() {
    var _this2 = this;
    notifyManager.batch(function() {
      _this2.queries.forEach(function(query) {
        _this2.remove(query);
      });
    });
  };
  _proto.get = function get(queryHash) {
    return this.queriesMap[queryHash];
  };
  _proto.getAll = function getAll() {
    return this.queries;
  };
  _proto.find = function find(arg1, arg2) {
    var _parseFilterArgs = parseFilterArgs(arg1, arg2), filters = _parseFilterArgs[0];
    if (typeof filters.exact === "undefined") {
      filters.exact = true;
    }
    return this.queries.find(function(query) {
      return matchQuery(filters, query);
    });
  };
  _proto.findAll = function findAll(arg1, arg2) {
    var _parseFilterArgs2 = parseFilterArgs(arg1, arg2), filters = _parseFilterArgs2[0];
    return Object.keys(filters).length > 0 ? this.queries.filter(function(query) {
      return matchQuery(filters, query);
    }) : this.queries;
  };
  _proto.notify = function notify(event) {
    var _this3 = this;
    notifyManager.batch(function() {
      _this3.listeners.forEach(function(listener) {
        listener(event);
      });
    });
  };
  _proto.onFocus = function onFocus() {
    var _this4 = this;
    notifyManager.batch(function() {
      _this4.queries.forEach(function(query) {
        query.onFocus();
      });
    });
  };
  _proto.onOnline = function onOnline() {
    var _this5 = this;
    notifyManager.batch(function() {
      _this5.queries.forEach(function(query) {
        query.onOnline();
      });
    });
  };
  return QueryCache3;
}(Subscribable);

// node_modules/react-query/es/core/mutation.js
var Mutation = function() {
  function Mutation2(config) {
    this.options = _extends({}, config.defaultOptions, config.options);
    this.mutationId = config.mutationId;
    this.mutationCache = config.mutationCache;
    this.observers = [];
    this.state = config.state || getDefaultState();
    this.meta = config.meta;
  }
  var _proto = Mutation2.prototype;
  _proto.setState = function setState(state) {
    this.dispatch({
      type: "setState",
      state
    });
  };
  _proto.addObserver = function addObserver(observer) {
    if (this.observers.indexOf(observer) === -1) {
      this.observers.push(observer);
    }
  };
  _proto.removeObserver = function removeObserver(observer) {
    this.observers = this.observers.filter(function(x) {
      return x !== observer;
    });
  };
  _proto.cancel = function cancel() {
    if (this.retryer) {
      this.retryer.cancel();
      return this.retryer.promise.then(noop).catch(noop);
    }
    return Promise.resolve();
  };
  _proto.continue = function _continue() {
    if (this.retryer) {
      this.retryer.continue();
      return this.retryer.promise;
    }
    return this.execute();
  };
  _proto.execute = function execute() {
    var _this = this;
    var data;
    var restored = this.state.status === "loading";
    var promise = Promise.resolve();
    if (!restored) {
      this.dispatch({
        type: "loading",
        variables: this.options.variables
      });
      promise = promise.then(function() {
        _this.mutationCache.config.onMutate == null ? void 0 : _this.mutationCache.config.onMutate(_this.state.variables, _this);
      }).then(function() {
        return _this.options.onMutate == null ? void 0 : _this.options.onMutate(_this.state.variables);
      }).then(function(context) {
        if (context !== _this.state.context) {
          _this.dispatch({
            type: "loading",
            context,
            variables: _this.state.variables
          });
        }
      });
    }
    return promise.then(function() {
      return _this.executeMutation();
    }).then(function(result) {
      data = result;
      _this.mutationCache.config.onSuccess == null ? void 0 : _this.mutationCache.config.onSuccess(data, _this.state.variables, _this.state.context, _this);
    }).then(function() {
      return _this.options.onSuccess == null ? void 0 : _this.options.onSuccess(data, _this.state.variables, _this.state.context);
    }).then(function() {
      return _this.options.onSettled == null ? void 0 : _this.options.onSettled(data, null, _this.state.variables, _this.state.context);
    }).then(function() {
      _this.dispatch({
        type: "success",
        data
      });
      return data;
    }).catch(function(error) {
      _this.mutationCache.config.onError == null ? void 0 : _this.mutationCache.config.onError(error, _this.state.variables, _this.state.context, _this);
      getLogger().error(error);
      return Promise.resolve().then(function() {
        return _this.options.onError == null ? void 0 : _this.options.onError(error, _this.state.variables, _this.state.context);
      }).then(function() {
        return _this.options.onSettled == null ? void 0 : _this.options.onSettled(void 0, error, _this.state.variables, _this.state.context);
      }).then(function() {
        _this.dispatch({
          type: "error",
          error
        });
        throw error;
      });
    });
  };
  _proto.executeMutation = function executeMutation() {
    var _this2 = this, _this$options$retry;
    this.retryer = new Retryer({
      fn: function fn() {
        if (!_this2.options.mutationFn) {
          return Promise.reject("No mutationFn found");
        }
        return _this2.options.mutationFn(_this2.state.variables);
      },
      onFail: function onFail() {
        _this2.dispatch({
          type: "failed"
        });
      },
      onPause: function onPause() {
        _this2.dispatch({
          type: "pause"
        });
      },
      onContinue: function onContinue() {
        _this2.dispatch({
          type: "continue"
        });
      },
      retry: (_this$options$retry = this.options.retry) != null ? _this$options$retry : 0,
      retryDelay: this.options.retryDelay
    });
    return this.retryer.promise;
  };
  _proto.dispatch = function dispatch(action) {
    var _this3 = this;
    this.state = reducer(this.state, action);
    notifyManager.batch(function() {
      _this3.observers.forEach(function(observer) {
        observer.onMutationUpdate(action);
      });
      _this3.mutationCache.notify(_this3);
    });
  };
  return Mutation2;
}();
function getDefaultState() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    isPaused: false,
    status: "idle",
    variables: void 0
  };
}
function reducer(state, action) {
  switch (action.type) {
    case "failed":
      return _extends({}, state, {
        failureCount: state.failureCount + 1
      });
    case "pause":
      return _extends({}, state, {
        isPaused: true
      });
    case "continue":
      return _extends({}, state, {
        isPaused: false
      });
    case "loading":
      return _extends({}, state, {
        context: action.context,
        data: void 0,
        error: null,
        isPaused: false,
        status: "loading",
        variables: action.variables
      });
    case "success":
      return _extends({}, state, {
        data: action.data,
        error: null,
        status: "success",
        isPaused: false
      });
    case "error":
      return _extends({}, state, {
        data: void 0,
        error: action.error,
        failureCount: state.failureCount + 1,
        isPaused: false,
        status: "error"
      });
    case "setState":
      return _extends({}, state, action.state);
    default:
      return state;
  }
}

// node_modules/react-query/es/core/mutationCache.js
var MutationCache = function(_Subscribable) {
  _inheritsLoose(MutationCache3, _Subscribable);
  function MutationCache3(config) {
    var _this;
    _this = _Subscribable.call(this) || this;
    _this.config = config || {};
    _this.mutations = [];
    _this.mutationId = 0;
    return _this;
  }
  var _proto = MutationCache3.prototype;
  _proto.build = function build(client, options, state) {
    var mutation = new Mutation({
      mutationCache: this,
      mutationId: ++this.mutationId,
      options: client.defaultMutationOptions(options),
      state,
      defaultOptions: options.mutationKey ? client.getMutationDefaults(options.mutationKey) : void 0,
      meta: options.meta
    });
    this.add(mutation);
    return mutation;
  };
  _proto.add = function add(mutation) {
    this.mutations.push(mutation);
    this.notify(mutation);
  };
  _proto.remove = function remove(mutation) {
    this.mutations = this.mutations.filter(function(x) {
      return x !== mutation;
    });
    mutation.cancel();
    this.notify(mutation);
  };
  _proto.clear = function clear() {
    var _this2 = this;
    notifyManager.batch(function() {
      _this2.mutations.forEach(function(mutation) {
        _this2.remove(mutation);
      });
    });
  };
  _proto.getAll = function getAll() {
    return this.mutations;
  };
  _proto.find = function find(filters) {
    if (typeof filters.exact === "undefined") {
      filters.exact = true;
    }
    return this.mutations.find(function(mutation) {
      return matchMutation(filters, mutation);
    });
  };
  _proto.findAll = function findAll(filters) {
    return this.mutations.filter(function(mutation) {
      return matchMutation(filters, mutation);
    });
  };
  _proto.notify = function notify(mutation) {
    var _this3 = this;
    notifyManager.batch(function() {
      _this3.listeners.forEach(function(listener) {
        listener(mutation);
      });
    });
  };
  _proto.onFocus = function onFocus() {
    this.resumePausedMutations();
  };
  _proto.onOnline = function onOnline() {
    this.resumePausedMutations();
  };
  _proto.resumePausedMutations = function resumePausedMutations() {
    var pausedMutations = this.mutations.filter(function(x) {
      return x.state.isPaused;
    });
    return notifyManager.batch(function() {
      return pausedMutations.reduce(function(promise, mutation) {
        return promise.then(function() {
          return mutation.continue().catch(noop);
        });
      }, Promise.resolve());
    });
  };
  return MutationCache3;
}(Subscribable);

// node_modules/react-query/es/core/infiniteQueryBehavior.js
function infiniteQueryBehavior() {
  return {
    onFetch: function onFetch(context) {
      context.fetchFn = function() {
        var _context$fetchOptions, _context$fetchOptions2, _context$fetchOptions3, _context$fetchOptions4, _context$state$data, _context$state$data2;
        var refetchPage = (_context$fetchOptions = context.fetchOptions) == null ? void 0 : (_context$fetchOptions2 = _context$fetchOptions.meta) == null ? void 0 : _context$fetchOptions2.refetchPage;
        var fetchMore = (_context$fetchOptions3 = context.fetchOptions) == null ? void 0 : (_context$fetchOptions4 = _context$fetchOptions3.meta) == null ? void 0 : _context$fetchOptions4.fetchMore;
        var pageParam = fetchMore == null ? void 0 : fetchMore.pageParam;
        var isFetchingNextPage = (fetchMore == null ? void 0 : fetchMore.direction) === "forward";
        var isFetchingPreviousPage = (fetchMore == null ? void 0 : fetchMore.direction) === "backward";
        var oldPages = ((_context$state$data = context.state.data) == null ? void 0 : _context$state$data.pages) || [];
        var oldPageParams = ((_context$state$data2 = context.state.data) == null ? void 0 : _context$state$data2.pageParams) || [];
        var abortController = getAbortController();
        var abortSignal = abortController == null ? void 0 : abortController.signal;
        var newPageParams = oldPageParams;
        var cancelled = false;
        var queryFn = context.options.queryFn || function() {
          return Promise.reject("Missing queryFn");
        };
        var buildNewPages = function buildNewPages2(pages, param2, page, previous) {
          newPageParams = previous ? [param2].concat(newPageParams) : [].concat(newPageParams, [param2]);
          return previous ? [page].concat(pages) : [].concat(pages, [page]);
        };
        var fetchPage = function fetchPage2(pages, manual2, param2, previous) {
          if (cancelled) {
            return Promise.reject("Cancelled");
          }
          if (typeof param2 === "undefined" && !manual2 && pages.length) {
            return Promise.resolve(pages);
          }
          var queryFnContext = {
            queryKey: context.queryKey,
            signal: abortSignal,
            pageParam: param2,
            meta: context.meta
          };
          var queryFnResult = queryFn(queryFnContext);
          var promise2 = Promise.resolve(queryFnResult).then(function(page) {
            return buildNewPages(pages, param2, page, previous);
          });
          if (isCancelable(queryFnResult)) {
            var promiseAsAny = promise2;
            promiseAsAny.cancel = queryFnResult.cancel;
          }
          return promise2;
        };
        var promise;
        if (!oldPages.length) {
          promise = fetchPage([]);
        } else if (isFetchingNextPage) {
          var manual = typeof pageParam !== "undefined";
          var param = manual ? pageParam : getNextPageParam(context.options, oldPages);
          promise = fetchPage(oldPages, manual, param);
        } else if (isFetchingPreviousPage) {
          var _manual = typeof pageParam !== "undefined";
          var _param = _manual ? pageParam : getPreviousPageParam(context.options, oldPages);
          promise = fetchPage(oldPages, _manual, _param, true);
        } else {
          (function() {
            newPageParams = [];
            var manual2 = typeof context.options.getNextPageParam === "undefined";
            var shouldFetchFirstPage = refetchPage && oldPages[0] ? refetchPage(oldPages[0], 0, oldPages) : true;
            promise = shouldFetchFirstPage ? fetchPage([], manual2, oldPageParams[0]) : Promise.resolve(buildNewPages([], oldPageParams[0], oldPages[0]));
            var _loop = function _loop2(i2) {
              promise = promise.then(function(pages) {
                var shouldFetchNextPage = refetchPage && oldPages[i2] ? refetchPage(oldPages[i2], i2, oldPages) : true;
                if (shouldFetchNextPage) {
                  var _param2 = manual2 ? oldPageParams[i2] : getNextPageParam(context.options, pages);
                  return fetchPage(pages, manual2, _param2);
                }
                return Promise.resolve(buildNewPages(pages, oldPageParams[i2], oldPages[i2]));
              });
            };
            for (var i = 1; i < oldPages.length; i++) {
              _loop(i);
            }
          })();
        }
        var finalPromise = promise.then(function(pages) {
          return {
            pages,
            pageParams: newPageParams
          };
        });
        var finalPromiseAsAny = finalPromise;
        finalPromiseAsAny.cancel = function() {
          cancelled = true;
          abortController == null ? void 0 : abortController.abort();
          if (isCancelable(promise)) {
            promise.cancel();
          }
        };
        return finalPromise;
      };
    }
  };
}
function getNextPageParam(options, pages) {
  return options.getNextPageParam == null ? void 0 : options.getNextPageParam(pages[pages.length - 1], pages);
}
function getPreviousPageParam(options, pages) {
  return options.getPreviousPageParam == null ? void 0 : options.getPreviousPageParam(pages[0], pages);
}
function hasNextPage(options, pages) {
  if (options.getNextPageParam && Array.isArray(pages)) {
    var nextPageParam = getNextPageParam(options, pages);
    return typeof nextPageParam !== "undefined" && nextPageParam !== null && nextPageParam !== false;
  }
}
function hasPreviousPage(options, pages) {
  if (options.getPreviousPageParam && Array.isArray(pages)) {
    var previousPageParam = getPreviousPageParam(options, pages);
    return typeof previousPageParam !== "undefined" && previousPageParam !== null && previousPageParam !== false;
  }
}

// node_modules/react-query/es/core/queryClient.js
var QueryClient = function() {
  function QueryClient3(config) {
    if (config === void 0) {
      config = {};
    }
    this.queryCache = config.queryCache || new QueryCache();
    this.mutationCache = config.mutationCache || new MutationCache();
    this.defaultOptions = config.defaultOptions || {};
    this.queryDefaults = [];
    this.mutationDefaults = [];
  }
  var _proto = QueryClient3.prototype;
  _proto.mount = function mount() {
    var _this = this;
    this.unsubscribeFocus = focusManager.subscribe(function() {
      if (focusManager.isFocused() && onlineManager.isOnline()) {
        _this.mutationCache.onFocus();
        _this.queryCache.onFocus();
      }
    });
    this.unsubscribeOnline = onlineManager.subscribe(function() {
      if (focusManager.isFocused() && onlineManager.isOnline()) {
        _this.mutationCache.onOnline();
        _this.queryCache.onOnline();
      }
    });
  };
  _proto.unmount = function unmount() {
    var _this$unsubscribeFocu, _this$unsubscribeOnli;
    (_this$unsubscribeFocu = this.unsubscribeFocus) == null ? void 0 : _this$unsubscribeFocu.call(this);
    (_this$unsubscribeOnli = this.unsubscribeOnline) == null ? void 0 : _this$unsubscribeOnli.call(this);
  };
  _proto.isFetching = function isFetching(arg1, arg2) {
    var _parseFilterArgs = parseFilterArgs(arg1, arg2), filters = _parseFilterArgs[0];
    filters.fetching = true;
    return this.queryCache.findAll(filters).length;
  };
  _proto.isMutating = function isMutating(filters) {
    return this.mutationCache.findAll(_extends({}, filters, {
      fetching: true
    })).length;
  };
  _proto.getQueryData = function getQueryData(queryKey, filters) {
    var _this$queryCache$find;
    return (_this$queryCache$find = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find.state.data;
  };
  _proto.getQueriesData = function getQueriesData(queryKeyOrFilters) {
    return this.getQueryCache().findAll(queryKeyOrFilters).map(function(_ref) {
      var queryKey = _ref.queryKey, state = _ref.state;
      var data = state.data;
      return [queryKey, data];
    });
  };
  _proto.setQueryData = function setQueryData(queryKey, updater, options) {
    var parsedOptions = parseQueryArgs(queryKey);
    var defaultedOptions = this.defaultQueryOptions(parsedOptions);
    return this.queryCache.build(this, defaultedOptions).setData(updater, options);
  };
  _proto.setQueriesData = function setQueriesData(queryKeyOrFilters, updater, options) {
    var _this2 = this;
    return notifyManager.batch(function() {
      return _this2.getQueryCache().findAll(queryKeyOrFilters).map(function(_ref2) {
        var queryKey = _ref2.queryKey;
        return [queryKey, _this2.setQueryData(queryKey, updater, options)];
      });
    });
  };
  _proto.getQueryState = function getQueryState2(queryKey, filters) {
    var _this$queryCache$find2;
    return (_this$queryCache$find2 = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find2.state;
  };
  _proto.removeQueries = function removeQueries(arg1, arg2) {
    var _parseFilterArgs2 = parseFilterArgs(arg1, arg2), filters = _parseFilterArgs2[0];
    var queryCache = this.queryCache;
    notifyManager.batch(function() {
      queryCache.findAll(filters).forEach(function(query) {
        queryCache.remove(query);
      });
    });
  };
  _proto.resetQueries = function resetQueries(arg1, arg2, arg3) {
    var _this3 = this;
    var _parseFilterArgs3 = parseFilterArgs(arg1, arg2, arg3), filters = _parseFilterArgs3[0], options = _parseFilterArgs3[1];
    var queryCache = this.queryCache;
    var refetchFilters = _extends({}, filters, {
      active: true
    });
    return notifyManager.batch(function() {
      queryCache.findAll(filters).forEach(function(query) {
        query.reset();
      });
      return _this3.refetchQueries(refetchFilters, options);
    });
  };
  _proto.cancelQueries = function cancelQueries(arg1, arg2, arg3) {
    var _this4 = this;
    var _parseFilterArgs4 = parseFilterArgs(arg1, arg2, arg3), filters = _parseFilterArgs4[0], _parseFilterArgs4$ = _parseFilterArgs4[1], cancelOptions = _parseFilterArgs4$ === void 0 ? {} : _parseFilterArgs4$;
    if (typeof cancelOptions.revert === "undefined") {
      cancelOptions.revert = true;
    }
    var promises = notifyManager.batch(function() {
      return _this4.queryCache.findAll(filters).map(function(query) {
        return query.cancel(cancelOptions);
      });
    });
    return Promise.all(promises).then(noop).catch(noop);
  };
  _proto.invalidateQueries = function invalidateQueries(arg1, arg2, arg3) {
    var _ref3, _filters$refetchActiv, _filters$refetchInact, _this5 = this;
    var _parseFilterArgs5 = parseFilterArgs(arg1, arg2, arg3), filters = _parseFilterArgs5[0], options = _parseFilterArgs5[1];
    var refetchFilters = _extends({}, filters, {
      // if filters.refetchActive is not provided and filters.active is explicitly false,
      // e.g. invalidateQueries({ active: false }), we don't want to refetch active queries
      active: (_ref3 = (_filters$refetchActiv = filters.refetchActive) != null ? _filters$refetchActiv : filters.active) != null ? _ref3 : true,
      inactive: (_filters$refetchInact = filters.refetchInactive) != null ? _filters$refetchInact : false
    });
    return notifyManager.batch(function() {
      _this5.queryCache.findAll(filters).forEach(function(query) {
        query.invalidate();
      });
      return _this5.refetchQueries(refetchFilters, options);
    });
  };
  _proto.refetchQueries = function refetchQueries(arg1, arg2, arg3) {
    var _this6 = this;
    var _parseFilterArgs6 = parseFilterArgs(arg1, arg2, arg3), filters = _parseFilterArgs6[0], options = _parseFilterArgs6[1];
    var promises = notifyManager.batch(function() {
      return _this6.queryCache.findAll(filters).map(function(query) {
        return query.fetch(void 0, _extends({}, options, {
          meta: {
            refetchPage: filters == null ? void 0 : filters.refetchPage
          }
        }));
      });
    });
    var promise = Promise.all(promises).then(noop);
    if (!(options == null ? void 0 : options.throwOnError)) {
      promise = promise.catch(noop);
    }
    return promise;
  };
  _proto.fetchQuery = function fetchQuery(arg1, arg2, arg3) {
    var parsedOptions = parseQueryArgs(arg1, arg2, arg3);
    var defaultedOptions = this.defaultQueryOptions(parsedOptions);
    if (typeof defaultedOptions.retry === "undefined") {
      defaultedOptions.retry = false;
    }
    var query = this.queryCache.build(this, defaultedOptions);
    return query.isStaleByTime(defaultedOptions.staleTime) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
  };
  _proto.prefetchQuery = function prefetchQuery(arg1, arg2, arg3) {
    return this.fetchQuery(arg1, arg2, arg3).then(noop).catch(noop);
  };
  _proto.fetchInfiniteQuery = function fetchInfiniteQuery(arg1, arg2, arg3) {
    var parsedOptions = parseQueryArgs(arg1, arg2, arg3);
    parsedOptions.behavior = infiniteQueryBehavior();
    return this.fetchQuery(parsedOptions);
  };
  _proto.prefetchInfiniteQuery = function prefetchInfiniteQuery(arg1, arg2, arg3) {
    return this.fetchInfiniteQuery(arg1, arg2, arg3).then(noop).catch(noop);
  };
  _proto.cancelMutations = function cancelMutations() {
    var _this7 = this;
    var promises = notifyManager.batch(function() {
      return _this7.mutationCache.getAll().map(function(mutation) {
        return mutation.cancel();
      });
    });
    return Promise.all(promises).then(noop).catch(noop);
  };
  _proto.resumePausedMutations = function resumePausedMutations() {
    return this.getMutationCache().resumePausedMutations();
  };
  _proto.executeMutation = function executeMutation(options) {
    return this.mutationCache.build(this, options).execute();
  };
  _proto.getQueryCache = function getQueryCache() {
    return this.queryCache;
  };
  _proto.getMutationCache = function getMutationCache() {
    return this.mutationCache;
  };
  _proto.getDefaultOptions = function getDefaultOptions() {
    return this.defaultOptions;
  };
  _proto.setDefaultOptions = function setDefaultOptions(options) {
    this.defaultOptions = options;
  };
  _proto.setQueryDefaults = function setQueryDefaults(queryKey, options) {
    var result = this.queryDefaults.find(function(x) {
      return hashQueryKey(queryKey) === hashQueryKey(x.queryKey);
    });
    if (result) {
      result.defaultOptions = options;
    } else {
      this.queryDefaults.push({
        queryKey,
        defaultOptions: options
      });
    }
  };
  _proto.getQueryDefaults = function getQueryDefaults(queryKey) {
    var _this$queryDefaults$f;
    return queryKey ? (_this$queryDefaults$f = this.queryDefaults.find(function(x) {
      return partialMatchKey(queryKey, x.queryKey);
    })) == null ? void 0 : _this$queryDefaults$f.defaultOptions : void 0;
  };
  _proto.setMutationDefaults = function setMutationDefaults(mutationKey, options) {
    var result = this.mutationDefaults.find(function(x) {
      return hashQueryKey(mutationKey) === hashQueryKey(x.mutationKey);
    });
    if (result) {
      result.defaultOptions = options;
    } else {
      this.mutationDefaults.push({
        mutationKey,
        defaultOptions: options
      });
    }
  };
  _proto.getMutationDefaults = function getMutationDefaults(mutationKey) {
    var _this$mutationDefault;
    return mutationKey ? (_this$mutationDefault = this.mutationDefaults.find(function(x) {
      return partialMatchKey(mutationKey, x.mutationKey);
    })) == null ? void 0 : _this$mutationDefault.defaultOptions : void 0;
  };
  _proto.defaultQueryOptions = function defaultQueryOptions(options) {
    if (options == null ? void 0 : options._defaulted) {
      return options;
    }
    var defaultedOptions = _extends({}, this.defaultOptions.queries, this.getQueryDefaults(options == null ? void 0 : options.queryKey), options, {
      _defaulted: true
    });
    if (!defaultedOptions.queryHash && defaultedOptions.queryKey) {
      defaultedOptions.queryHash = hashQueryKeyByOptions(defaultedOptions.queryKey, defaultedOptions);
    }
    return defaultedOptions;
  };
  _proto.defaultQueryObserverOptions = function defaultQueryObserverOptions(options) {
    return this.defaultQueryOptions(options);
  };
  _proto.defaultMutationOptions = function defaultMutationOptions(options) {
    if (options == null ? void 0 : options._defaulted) {
      return options;
    }
    return _extends({}, this.defaultOptions.mutations, this.getMutationDefaults(options == null ? void 0 : options.mutationKey), options, {
      _defaulted: true
    });
  };
  _proto.clear = function clear() {
    this.queryCache.clear();
    this.mutationCache.clear();
  };
  return QueryClient3;
}();

// node_modules/react-query/es/core/queryObserver.js
var QueryObserver = function(_Subscribable) {
  _inheritsLoose(QueryObserver2, _Subscribable);
  function QueryObserver2(client, options) {
    var _this;
    _this = _Subscribable.call(this) || this;
    _this.client = client;
    _this.options = options;
    _this.trackedProps = [];
    _this.selectError = null;
    _this.bindMethods();
    _this.setOptions(options);
    return _this;
  }
  var _proto = QueryObserver2.prototype;
  _proto.bindMethods = function bindMethods() {
    this.remove = this.remove.bind(this);
    this.refetch = this.refetch.bind(this);
  };
  _proto.onSubscribe = function onSubscribe() {
    if (this.listeners.length === 1) {
      this.currentQuery.addObserver(this);
      if (shouldFetchOnMount(this.currentQuery, this.options)) {
        this.executeFetch();
      }
      this.updateTimers();
    }
  };
  _proto.onUnsubscribe = function onUnsubscribe() {
    if (!this.listeners.length) {
      this.destroy();
    }
  };
  _proto.shouldFetchOnReconnect = function shouldFetchOnReconnect() {
    return shouldFetchOn(this.currentQuery, this.options, this.options.refetchOnReconnect);
  };
  _proto.shouldFetchOnWindowFocus = function shouldFetchOnWindowFocus() {
    return shouldFetchOn(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
  };
  _proto.destroy = function destroy() {
    this.listeners = [];
    this.clearTimers();
    this.currentQuery.removeObserver(this);
  };
  _proto.setOptions = function setOptions(options, notifyOptions) {
    var prevOptions = this.options;
    var prevQuery = this.currentQuery;
    this.options = this.client.defaultQueryObserverOptions(options);
    if (typeof this.options.enabled !== "undefined" && typeof this.options.enabled !== "boolean") {
      throw new Error("Expected enabled to be a boolean");
    }
    if (!this.options.queryKey) {
      this.options.queryKey = prevOptions.queryKey;
    }
    this.updateQuery();
    var mounted = this.hasListeners();
    if (mounted && shouldFetchOptionally(this.currentQuery, prevQuery, this.options, prevOptions)) {
      this.executeFetch();
    }
    this.updateResult(notifyOptions);
    if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || this.options.staleTime !== prevOptions.staleTime)) {
      this.updateStaleTimeout();
    }
    var nextRefetchInterval = this.computeRefetchInterval();
    if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || nextRefetchInterval !== this.currentRefetchInterval)) {
      this.updateRefetchInterval(nextRefetchInterval);
    }
  };
  _proto.getOptimisticResult = function getOptimisticResult(options) {
    var defaultedOptions = this.client.defaultQueryObserverOptions(options);
    var query = this.client.getQueryCache().build(this.client, defaultedOptions);
    return this.createResult(query, defaultedOptions);
  };
  _proto.getCurrentResult = function getCurrentResult() {
    return this.currentResult;
  };
  _proto.trackResult = function trackResult(result, defaultedOptions) {
    var _this2 = this;
    var trackedResult = {};
    var trackProp = function trackProp2(key) {
      if (!_this2.trackedProps.includes(key)) {
        _this2.trackedProps.push(key);
      }
    };
    Object.keys(result).forEach(function(key) {
      Object.defineProperty(trackedResult, key, {
        configurable: false,
        enumerable: true,
        get: function get() {
          trackProp(key);
          return result[key];
        }
      });
    });
    if (defaultedOptions.useErrorBoundary || defaultedOptions.suspense) {
      trackProp("error");
    }
    return trackedResult;
  };
  _proto.getNextResult = function getNextResult(options) {
    var _this3 = this;
    return new Promise(function(resolve, reject) {
      var unsubscribe = _this3.subscribe(function(result) {
        if (!result.isFetching) {
          unsubscribe();
          if (result.isError && (options == null ? void 0 : options.throwOnError)) {
            reject(result.error);
          } else {
            resolve(result);
          }
        }
      });
    });
  };
  _proto.getCurrentQuery = function getCurrentQuery() {
    return this.currentQuery;
  };
  _proto.remove = function remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  };
  _proto.refetch = function refetch(options) {
    return this.fetch(_extends({}, options, {
      meta: {
        refetchPage: options == null ? void 0 : options.refetchPage
      }
    }));
  };
  _proto.fetchOptimistic = function fetchOptimistic(options) {
    var _this4 = this;
    var defaultedOptions = this.client.defaultQueryObserverOptions(options);
    var query = this.client.getQueryCache().build(this.client, defaultedOptions);
    return query.fetch().then(function() {
      return _this4.createResult(query, defaultedOptions);
    });
  };
  _proto.fetch = function fetch(fetchOptions) {
    var _this5 = this;
    return this.executeFetch(fetchOptions).then(function() {
      _this5.updateResult();
      return _this5.currentResult;
    });
  };
  _proto.executeFetch = function executeFetch(fetchOptions) {
    this.updateQuery();
    var promise = this.currentQuery.fetch(this.options, fetchOptions);
    if (!(fetchOptions == null ? void 0 : fetchOptions.throwOnError)) {
      promise = promise.catch(noop);
    }
    return promise;
  };
  _proto.updateStaleTimeout = function updateStaleTimeout() {
    var _this6 = this;
    this.clearStaleTimeout();
    if (isServer || this.currentResult.isStale || !isValidTimeout(this.options.staleTime)) {
      return;
    }
    var time = timeUntilStale(this.currentResult.dataUpdatedAt, this.options.staleTime);
    var timeout = time + 1;
    this.staleTimeoutId = setTimeout(function() {
      if (!_this6.currentResult.isStale) {
        _this6.updateResult();
      }
    }, timeout);
  };
  _proto.computeRefetchInterval = function computeRefetchInterval() {
    var _this$options$refetch;
    return typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (_this$options$refetch = this.options.refetchInterval) != null ? _this$options$refetch : false;
  };
  _proto.updateRefetchInterval = function updateRefetchInterval(nextInterval) {
    var _this7 = this;
    this.clearRefetchInterval();
    this.currentRefetchInterval = nextInterval;
    if (isServer || this.options.enabled === false || !isValidTimeout(this.currentRefetchInterval) || this.currentRefetchInterval === 0) {
      return;
    }
    this.refetchIntervalId = setInterval(function() {
      if (_this7.options.refetchIntervalInBackground || focusManager.isFocused()) {
        _this7.executeFetch();
      }
    }, this.currentRefetchInterval);
  };
  _proto.updateTimers = function updateTimers() {
    this.updateStaleTimeout();
    this.updateRefetchInterval(this.computeRefetchInterval());
  };
  _proto.clearTimers = function clearTimers() {
    this.clearStaleTimeout();
    this.clearRefetchInterval();
  };
  _proto.clearStaleTimeout = function clearStaleTimeout() {
    if (this.staleTimeoutId) {
      clearTimeout(this.staleTimeoutId);
      this.staleTimeoutId = void 0;
    }
  };
  _proto.clearRefetchInterval = function clearRefetchInterval() {
    if (this.refetchIntervalId) {
      clearInterval(this.refetchIntervalId);
      this.refetchIntervalId = void 0;
    }
  };
  _proto.createResult = function createResult(query, options) {
    var prevQuery = this.currentQuery;
    var prevOptions = this.options;
    var prevResult = this.currentResult;
    var prevResultState = this.currentResultState;
    var prevResultOptions = this.currentResultOptions;
    var queryChange = query !== prevQuery;
    var queryInitialState = queryChange ? query.state : this.currentQueryInitialState;
    var prevQueryResult = queryChange ? this.currentResult : this.previousQueryResult;
    var state = query.state;
    var dataUpdatedAt = state.dataUpdatedAt, error = state.error, errorUpdatedAt = state.errorUpdatedAt, isFetching = state.isFetching, status = state.status;
    var isPreviousData = false;
    var isPlaceholderData = false;
    var data;
    if (options.optimisticResults) {
      var mounted = this.hasListeners();
      var fetchOnMount = !mounted && shouldFetchOnMount(query, options);
      var fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
      if (fetchOnMount || fetchOptionally) {
        isFetching = true;
        if (!dataUpdatedAt) {
          status = "loading";
        }
      }
    }
    if (options.keepPreviousData && !state.dataUpdateCount && (prevQueryResult == null ? void 0 : prevQueryResult.isSuccess) && status !== "error") {
      data = prevQueryResult.data;
      dataUpdatedAt = prevQueryResult.dataUpdatedAt;
      status = prevQueryResult.status;
      isPreviousData = true;
    } else if (options.select && typeof state.data !== "undefined") {
      if (prevResult && state.data === (prevResultState == null ? void 0 : prevResultState.data) && options.select === this.selectFn) {
        data = this.selectResult;
      } else {
        try {
          this.selectFn = options.select;
          data = options.select(state.data);
          if (options.structuralSharing !== false) {
            data = replaceEqualDeep(prevResult == null ? void 0 : prevResult.data, data);
          }
          this.selectResult = data;
          this.selectError = null;
        } catch (selectError) {
          getLogger().error(selectError);
          this.selectError = selectError;
        }
      }
    } else {
      data = state.data;
    }
    if (typeof options.placeholderData !== "undefined" && typeof data === "undefined" && (status === "loading" || status === "idle")) {
      var placeholderData;
      if ((prevResult == null ? void 0 : prevResult.isPlaceholderData) && options.placeholderData === (prevResultOptions == null ? void 0 : prevResultOptions.placeholderData)) {
        placeholderData = prevResult.data;
      } else {
        placeholderData = typeof options.placeholderData === "function" ? options.placeholderData() : options.placeholderData;
        if (options.select && typeof placeholderData !== "undefined") {
          try {
            placeholderData = options.select(placeholderData);
            if (options.structuralSharing !== false) {
              placeholderData = replaceEqualDeep(prevResult == null ? void 0 : prevResult.data, placeholderData);
            }
            this.selectError = null;
          } catch (selectError) {
            getLogger().error(selectError);
            this.selectError = selectError;
          }
        }
      }
      if (typeof placeholderData !== "undefined") {
        status = "success";
        data = placeholderData;
        isPlaceholderData = true;
      }
    }
    if (this.selectError) {
      error = this.selectError;
      data = this.selectResult;
      errorUpdatedAt = Date.now();
      status = "error";
    }
    var result = {
      status,
      isLoading: status === "loading",
      isSuccess: status === "success",
      isError: status === "error",
      isIdle: status === "idle",
      data,
      dataUpdatedAt,
      error,
      errorUpdatedAt,
      failureCount: state.fetchFailureCount,
      errorUpdateCount: state.errorUpdateCount,
      isFetched: state.dataUpdateCount > 0 || state.errorUpdateCount > 0,
      isFetchedAfterMount: state.dataUpdateCount > queryInitialState.dataUpdateCount || state.errorUpdateCount > queryInitialState.errorUpdateCount,
      isFetching,
      isRefetching: isFetching && status !== "loading",
      isLoadingError: status === "error" && state.dataUpdatedAt === 0,
      isPlaceholderData,
      isPreviousData,
      isRefetchError: status === "error" && state.dataUpdatedAt !== 0,
      isStale: isStale(query, options),
      refetch: this.refetch,
      remove: this.remove
    };
    return result;
  };
  _proto.shouldNotifyListeners = function shouldNotifyListeners(result, prevResult) {
    if (!prevResult) {
      return true;
    }
    var _this$options = this.options, notifyOnChangeProps = _this$options.notifyOnChangeProps, notifyOnChangePropsExclusions = _this$options.notifyOnChangePropsExclusions;
    if (!notifyOnChangeProps && !notifyOnChangePropsExclusions) {
      return true;
    }
    if (notifyOnChangeProps === "tracked" && !this.trackedProps.length) {
      return true;
    }
    var includedProps = notifyOnChangeProps === "tracked" ? this.trackedProps : notifyOnChangeProps;
    return Object.keys(result).some(function(key) {
      var typedKey = key;
      var changed = result[typedKey] !== prevResult[typedKey];
      var isIncluded = includedProps == null ? void 0 : includedProps.some(function(x) {
        return x === key;
      });
      var isExcluded = notifyOnChangePropsExclusions == null ? void 0 : notifyOnChangePropsExclusions.some(function(x) {
        return x === key;
      });
      return changed && !isExcluded && (!includedProps || isIncluded);
    });
  };
  _proto.updateResult = function updateResult(notifyOptions) {
    var prevResult = this.currentResult;
    this.currentResult = this.createResult(this.currentQuery, this.options);
    this.currentResultState = this.currentQuery.state;
    this.currentResultOptions = this.options;
    if (shallowEqualObjects(this.currentResult, prevResult)) {
      return;
    }
    var defaultNotifyOptions = {
      cache: true
    };
    if ((notifyOptions == null ? void 0 : notifyOptions.listeners) !== false && this.shouldNotifyListeners(this.currentResult, prevResult)) {
      defaultNotifyOptions.listeners = true;
    }
    this.notify(_extends({}, defaultNotifyOptions, notifyOptions));
  };
  _proto.updateQuery = function updateQuery() {
    var query = this.client.getQueryCache().build(this.client, this.options);
    if (query === this.currentQuery) {
      return;
    }
    var prevQuery = this.currentQuery;
    this.currentQuery = query;
    this.currentQueryInitialState = query.state;
    this.previousQueryResult = this.currentResult;
    if (this.hasListeners()) {
      prevQuery == null ? void 0 : prevQuery.removeObserver(this);
      query.addObserver(this);
    }
  };
  _proto.onQueryUpdate = function onQueryUpdate(action) {
    var notifyOptions = {};
    if (action.type === "success") {
      notifyOptions.onSuccess = true;
    } else if (action.type === "error" && !isCancelledError(action.error)) {
      notifyOptions.onError = true;
    }
    this.updateResult(notifyOptions);
    if (this.hasListeners()) {
      this.updateTimers();
    }
  };
  _proto.notify = function notify(notifyOptions) {
    var _this8 = this;
    notifyManager.batch(function() {
      if (notifyOptions.onSuccess) {
        _this8.options.onSuccess == null ? void 0 : _this8.options.onSuccess(_this8.currentResult.data);
        _this8.options.onSettled == null ? void 0 : _this8.options.onSettled(_this8.currentResult.data, null);
      } else if (notifyOptions.onError) {
        _this8.options.onError == null ? void 0 : _this8.options.onError(_this8.currentResult.error);
        _this8.options.onSettled == null ? void 0 : _this8.options.onSettled(void 0, _this8.currentResult.error);
      }
      if (notifyOptions.listeners) {
        _this8.listeners.forEach(function(listener) {
          listener(_this8.currentResult);
        });
      }
      if (notifyOptions.cache) {
        _this8.client.getQueryCache().notify({
          query: _this8.currentQuery,
          type: "observerResultsUpdated"
        });
      }
    });
  };
  return QueryObserver2;
}(Subscribable);
function shouldLoadOnMount(query, options) {
  return options.enabled !== false && !query.state.dataUpdatedAt && !(query.state.status === "error" && options.retryOnMount === false);
}
function shouldFetchOnMount(query, options) {
  return shouldLoadOnMount(query, options) || query.state.dataUpdatedAt > 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
  if (options.enabled !== false) {
    var value = typeof field === "function" ? field(query) : field;
    return value === "always" || value !== false && isStale(query, options);
  }
  return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
  return options.enabled !== false && (query !== prevQuery || prevOptions.enabled === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
  return query.isStaleByTime(options.staleTime);
}

// node_modules/react-query/es/core/queriesObserver.js
var QueriesObserver = function(_Subscribable) {
  _inheritsLoose(QueriesObserver2, _Subscribable);
  function QueriesObserver2(client, queries) {
    var _this;
    _this = _Subscribable.call(this) || this;
    _this.client = client;
    _this.queries = [];
    _this.result = [];
    _this.observers = [];
    _this.observersMap = {};
    if (queries) {
      _this.setQueries(queries);
    }
    return _this;
  }
  var _proto = QueriesObserver2.prototype;
  _proto.onSubscribe = function onSubscribe() {
    var _this2 = this;
    if (this.listeners.length === 1) {
      this.observers.forEach(function(observer) {
        observer.subscribe(function(result) {
          _this2.onUpdate(observer, result);
        });
      });
    }
  };
  _proto.onUnsubscribe = function onUnsubscribe() {
    if (!this.listeners.length) {
      this.destroy();
    }
  };
  _proto.destroy = function destroy() {
    this.listeners = [];
    this.observers.forEach(function(observer) {
      observer.destroy();
    });
  };
  _proto.setQueries = function setQueries(queries, notifyOptions) {
    this.queries = queries;
    this.updateObservers(notifyOptions);
  };
  _proto.getCurrentResult = function getCurrentResult() {
    return this.result;
  };
  _proto.getOptimisticResult = function getOptimisticResult(queries) {
    return this.findMatchingObservers(queries).map(function(match) {
      return match.observer.getOptimisticResult(match.defaultedQueryOptions);
    });
  };
  _proto.findMatchingObservers = function findMatchingObservers(queries) {
    var _this3 = this;
    var prevObservers = this.observers;
    var defaultedQueryOptions = queries.map(function(options) {
      return _this3.client.defaultQueryObserverOptions(options);
    });
    var matchingObservers = defaultedQueryOptions.flatMap(function(defaultedOptions) {
      var match = prevObservers.find(function(observer) {
        return observer.options.queryHash === defaultedOptions.queryHash;
      });
      if (match != null) {
        return [{
          defaultedQueryOptions: defaultedOptions,
          observer: match
        }];
      }
      return [];
    });
    var matchedQueryHashes = matchingObservers.map(function(match) {
      return match.defaultedQueryOptions.queryHash;
    });
    var unmatchedQueries = defaultedQueryOptions.filter(function(defaultedOptions) {
      return !matchedQueryHashes.includes(defaultedOptions.queryHash);
    });
    var unmatchedObservers = prevObservers.filter(function(prevObserver) {
      return !matchingObservers.some(function(match) {
        return match.observer === prevObserver;
      });
    });
    var newOrReusedObservers = unmatchedQueries.map(function(options, index) {
      if (options.keepPreviousData) {
        var previouslyUsedObserver = unmatchedObservers[index];
        if (previouslyUsedObserver !== void 0) {
          return {
            defaultedQueryOptions: options,
            observer: previouslyUsedObserver
          };
        }
      }
      return {
        defaultedQueryOptions: options,
        observer: _this3.getObserver(options)
      };
    });
    var sortMatchesByOrderOfQueries = function sortMatchesByOrderOfQueries2(a, b) {
      return defaultedQueryOptions.indexOf(a.defaultedQueryOptions) - defaultedQueryOptions.indexOf(b.defaultedQueryOptions);
    };
    return matchingObservers.concat(newOrReusedObservers).sort(sortMatchesByOrderOfQueries);
  };
  _proto.getObserver = function getObserver(options) {
    var defaultedOptions = this.client.defaultQueryObserverOptions(options);
    var currentObserver = this.observersMap[defaultedOptions.queryHash];
    return currentObserver != null ? currentObserver : new QueryObserver(this.client, defaultedOptions);
  };
  _proto.updateObservers = function updateObservers(notifyOptions) {
    var _this4 = this;
    notifyManager.batch(function() {
      var prevObservers = _this4.observers;
      var newObserverMatches = _this4.findMatchingObservers(_this4.queries);
      newObserverMatches.forEach(function(match) {
        return match.observer.setOptions(match.defaultedQueryOptions, notifyOptions);
      });
      var newObservers = newObserverMatches.map(function(match) {
        return match.observer;
      });
      var newObserversMap = Object.fromEntries(newObservers.map(function(observer) {
        return [observer.options.queryHash, observer];
      }));
      var newResult = newObservers.map(function(observer) {
        return observer.getCurrentResult();
      });
      var hasIndexChange = newObservers.some(function(observer, index) {
        return observer !== prevObservers[index];
      });
      if (prevObservers.length === newObservers.length && !hasIndexChange) {
        return;
      }
      _this4.observers = newObservers;
      _this4.observersMap = newObserversMap;
      _this4.result = newResult;
      if (!_this4.hasListeners()) {
        return;
      }
      difference(prevObservers, newObservers).forEach(function(observer) {
        observer.destroy();
      });
      difference(newObservers, prevObservers).forEach(function(observer) {
        observer.subscribe(function(result) {
          _this4.onUpdate(observer, result);
        });
      });
      _this4.notify();
    });
  };
  _proto.onUpdate = function onUpdate(observer, result) {
    var index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.result = replaceAt(this.result, index, result);
      this.notify();
    }
  };
  _proto.notify = function notify() {
    var _this5 = this;
    notifyManager.batch(function() {
      _this5.listeners.forEach(function(listener) {
        listener(_this5.result);
      });
    });
  };
  return QueriesObserver2;
}(Subscribable);

// node_modules/react-query/es/core/infiniteQueryObserver.js
var InfiniteQueryObserver = function(_QueryObserver) {
  _inheritsLoose(InfiniteQueryObserver2, _QueryObserver);
  function InfiniteQueryObserver2(client, options) {
    return _QueryObserver.call(this, client, options) || this;
  }
  var _proto = InfiniteQueryObserver2.prototype;
  _proto.bindMethods = function bindMethods() {
    _QueryObserver.prototype.bindMethods.call(this);
    this.fetchNextPage = this.fetchNextPage.bind(this);
    this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
  };
  _proto.setOptions = function setOptions(options, notifyOptions) {
    _QueryObserver.prototype.setOptions.call(this, _extends({}, options, {
      behavior: infiniteQueryBehavior()
    }), notifyOptions);
  };
  _proto.getOptimisticResult = function getOptimisticResult(options) {
    options.behavior = infiniteQueryBehavior();
    return _QueryObserver.prototype.getOptimisticResult.call(this, options);
  };
  _proto.fetchNextPage = function fetchNextPage(options) {
    var _options$cancelRefetc;
    return this.fetch({
      // TODO consider removing `?? true` in future breaking change, to be consistent with `refetch` API (see https://github.com/tannerlinsley/react-query/issues/2617)
      cancelRefetch: (_options$cancelRefetc = options == null ? void 0 : options.cancelRefetch) != null ? _options$cancelRefetc : true,
      throwOnError: options == null ? void 0 : options.throwOnError,
      meta: {
        fetchMore: {
          direction: "forward",
          pageParam: options == null ? void 0 : options.pageParam
        }
      }
    });
  };
  _proto.fetchPreviousPage = function fetchPreviousPage(options) {
    var _options$cancelRefetc2;
    return this.fetch({
      // TODO consider removing `?? true` in future breaking change, to be consistent with `refetch` API (see https://github.com/tannerlinsley/react-query/issues/2617)
      cancelRefetch: (_options$cancelRefetc2 = options == null ? void 0 : options.cancelRefetch) != null ? _options$cancelRefetc2 : true,
      throwOnError: options == null ? void 0 : options.throwOnError,
      meta: {
        fetchMore: {
          direction: "backward",
          pageParam: options == null ? void 0 : options.pageParam
        }
      }
    });
  };
  _proto.createResult = function createResult(query, options) {
    var _state$data, _state$data2, _state$fetchMeta, _state$fetchMeta$fetc, _state$fetchMeta2, _state$fetchMeta2$fet;
    var state = query.state;
    var result = _QueryObserver.prototype.createResult.call(this, query, options);
    return _extends({}, result, {
      fetchNextPage: this.fetchNextPage,
      fetchPreviousPage: this.fetchPreviousPage,
      hasNextPage: hasNextPage(options, (_state$data = state.data) == null ? void 0 : _state$data.pages),
      hasPreviousPage: hasPreviousPage(options, (_state$data2 = state.data) == null ? void 0 : _state$data2.pages),
      isFetchingNextPage: state.isFetching && ((_state$fetchMeta = state.fetchMeta) == null ? void 0 : (_state$fetchMeta$fetc = _state$fetchMeta.fetchMore) == null ? void 0 : _state$fetchMeta$fetc.direction) === "forward",
      isFetchingPreviousPage: state.isFetching && ((_state$fetchMeta2 = state.fetchMeta) == null ? void 0 : (_state$fetchMeta2$fet = _state$fetchMeta2.fetchMore) == null ? void 0 : _state$fetchMeta2$fet.direction) === "backward"
    });
  };
  return InfiniteQueryObserver2;
}(QueryObserver);

// node_modules/react-query/es/core/mutationObserver.js
var MutationObserver = function(_Subscribable) {
  _inheritsLoose(MutationObserver2, _Subscribable);
  function MutationObserver2(client, options) {
    var _this;
    _this = _Subscribable.call(this) || this;
    _this.client = client;
    _this.setOptions(options);
    _this.bindMethods();
    _this.updateResult();
    return _this;
  }
  var _proto = MutationObserver2.prototype;
  _proto.bindMethods = function bindMethods() {
    this.mutate = this.mutate.bind(this);
    this.reset = this.reset.bind(this);
  };
  _proto.setOptions = function setOptions(options) {
    this.options = this.client.defaultMutationOptions(options);
  };
  _proto.onUnsubscribe = function onUnsubscribe() {
    if (!this.listeners.length) {
      var _this$currentMutation;
      (_this$currentMutation = this.currentMutation) == null ? void 0 : _this$currentMutation.removeObserver(this);
    }
  };
  _proto.onMutationUpdate = function onMutationUpdate(action) {
    this.updateResult();
    var notifyOptions = {
      listeners: true
    };
    if (action.type === "success") {
      notifyOptions.onSuccess = true;
    } else if (action.type === "error") {
      notifyOptions.onError = true;
    }
    this.notify(notifyOptions);
  };
  _proto.getCurrentResult = function getCurrentResult() {
    return this.currentResult;
  };
  _proto.reset = function reset() {
    this.currentMutation = void 0;
    this.updateResult();
    this.notify({
      listeners: true
    });
  };
  _proto.mutate = function mutate(variables, options) {
    this.mutateOptions = options;
    if (this.currentMutation) {
      this.currentMutation.removeObserver(this);
    }
    this.currentMutation = this.client.getMutationCache().build(this.client, _extends({}, this.options, {
      variables: typeof variables !== "undefined" ? variables : this.options.variables
    }));
    this.currentMutation.addObserver(this);
    return this.currentMutation.execute();
  };
  _proto.updateResult = function updateResult() {
    var state = this.currentMutation ? this.currentMutation.state : getDefaultState();
    var result = _extends({}, state, {
      isLoading: state.status === "loading",
      isSuccess: state.status === "success",
      isError: state.status === "error",
      isIdle: state.status === "idle",
      mutate: this.mutate,
      reset: this.reset
    });
    this.currentResult = result;
  };
  _proto.notify = function notify(options) {
    var _this2 = this;
    notifyManager.batch(function() {
      if (_this2.mutateOptions) {
        if (options.onSuccess) {
          _this2.mutateOptions.onSuccess == null ? void 0 : _this2.mutateOptions.onSuccess(_this2.currentResult.data, _this2.currentResult.variables, _this2.currentResult.context);
          _this2.mutateOptions.onSettled == null ? void 0 : _this2.mutateOptions.onSettled(_this2.currentResult.data, null, _this2.currentResult.variables, _this2.currentResult.context);
        } else if (options.onError) {
          _this2.mutateOptions.onError == null ? void 0 : _this2.mutateOptions.onError(_this2.currentResult.error, _this2.currentResult.variables, _this2.currentResult.context);
          _this2.mutateOptions.onSettled == null ? void 0 : _this2.mutateOptions.onSettled(void 0, _this2.currentResult.error, _this2.currentResult.variables, _this2.currentResult.context);
        }
      }
      if (options.listeners) {
        _this2.listeners.forEach(function(listener) {
          listener(_this2.currentResult);
        });
      }
    });
  };
  return MutationObserver2;
}(Subscribable);

// node_modules/react-query/es/core/hydration.js
function dehydrateMutation(mutation) {
  return {
    mutationKey: mutation.options.mutationKey,
    state: mutation.state
  };
}
function dehydrateQuery(query) {
  return {
    state: query.state,
    queryKey: query.queryKey,
    queryHash: query.queryHash
  };
}
function defaultShouldDehydrateMutation(mutation) {
  return mutation.state.isPaused;
}
function defaultShouldDehydrateQuery(query) {
  return query.state.status === "success";
}
function dehydrate(client, options) {
  var _options, _options2;
  options = options || {};
  var mutations = [];
  var queries = [];
  if (((_options = options) == null ? void 0 : _options.dehydrateMutations) !== false) {
    var shouldDehydrateMutation = options.shouldDehydrateMutation || defaultShouldDehydrateMutation;
    client.getMutationCache().getAll().forEach(function(mutation) {
      if (shouldDehydrateMutation(mutation)) {
        mutations.push(dehydrateMutation(mutation));
      }
    });
  }
  if (((_options2 = options) == null ? void 0 : _options2.dehydrateQueries) !== false) {
    var shouldDehydrateQuery = options.shouldDehydrateQuery || defaultShouldDehydrateQuery;
    client.getQueryCache().getAll().forEach(function(query) {
      if (shouldDehydrateQuery(query)) {
        queries.push(dehydrateQuery(query));
      }
    });
  }
  return {
    mutations,
    queries
  };
}
function hydrate(client, dehydratedState, options) {
  if (typeof dehydratedState !== "object" || dehydratedState === null) {
    return;
  }
  var mutationCache = client.getMutationCache();
  var queryCache = client.getQueryCache();
  var mutations = dehydratedState.mutations || [];
  var queries = dehydratedState.queries || [];
  mutations.forEach(function(dehydratedMutation) {
    var _options$defaultOptio;
    mutationCache.build(client, _extends({}, options == null ? void 0 : (_options$defaultOptio = options.defaultOptions) == null ? void 0 : _options$defaultOptio.mutations, {
      mutationKey: dehydratedMutation.mutationKey
    }), dehydratedMutation.state);
  });
  queries.forEach(function(dehydratedQuery) {
    var _options$defaultOptio2;
    var query = queryCache.get(dehydratedQuery.queryHash);
    if (query) {
      if (query.state.dataUpdatedAt < dehydratedQuery.state.dataUpdatedAt) {
        query.setState(dehydratedQuery.state);
      }
      return;
    }
    queryCache.build(client, _extends({}, options == null ? void 0 : (_options$defaultOptio2 = options.defaultOptions) == null ? void 0 : _options$defaultOptio2.queries, {
      queryKey: dehydratedQuery.queryKey,
      queryHash: dehydratedQuery.queryHash
    }), dehydratedQuery.state);
  });
}

// node_modules/vue-query/node_modules/vue-demi/lib/index.esm.js
var isVue2 = false;

// node_modules/match-sorter/dist/match-sorter.esm.js
var import_remove_accents = __toESM(require_remove_accents());
var rankings = {
  CASE_SENSITIVE_EQUAL: 7,
  EQUAL: 6,
  STARTS_WITH: 5,
  WORD_STARTS_WITH: 4,
  CONTAINS: 3,
  ACRONYM: 2,
  MATCHES: 1,
  NO_MATCH: 0
};
var defaultBaseSortFn = (a, b) => String(a.rankedValue).localeCompare(String(b.rankedValue));
function matchSorter(items, value, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    keys,
    threshold = rankings.MATCHES,
    baseSort = defaultBaseSortFn,
    sorter = (matchedItems2) => matchedItems2.sort((a, b) => sortRankedValues(a, b, baseSort))
  } = options;
  const matchedItems = items.reduce(reduceItemsToRanked, []);
  return sorter(matchedItems).map((_ref) => {
    let {
      item
    } = _ref;
    return item;
  });
  function reduceItemsToRanked(matches, item, index) {
    const rankingInfo = getHighestRanking(item, keys, value, options);
    const {
      rank,
      keyThreshold = threshold
    } = rankingInfo;
    if (rank >= keyThreshold) {
      matches.push({
        ...rankingInfo,
        item,
        index
      });
    }
    return matches;
  }
}
matchSorter.rankings = rankings;
function getHighestRanking(item, keys, value, options) {
  if (!keys) {
    const stringItem = item;
    return {
      // ends up being duplicate of 'item' in matches but consistent
      rankedValue: stringItem,
      rank: getMatchRanking(stringItem, value, options),
      keyIndex: -1,
      keyThreshold: options.threshold
    };
  }
  const valuesToRank = getAllValuesToRank(item, keys);
  return valuesToRank.reduce((_ref2, _ref3, i) => {
    let {
      rank,
      rankedValue,
      keyIndex,
      keyThreshold
    } = _ref2;
    let {
      itemValue,
      attributes
    } = _ref3;
    let newRank = getMatchRanking(itemValue, value, options);
    let newRankedValue = rankedValue;
    const {
      minRanking,
      maxRanking,
      threshold
    } = attributes;
    if (newRank < minRanking && newRank >= rankings.MATCHES) {
      newRank = minRanking;
    } else if (newRank > maxRanking) {
      newRank = maxRanking;
    }
    if (newRank > rank) {
      rank = newRank;
      keyIndex = i;
      keyThreshold = threshold;
      newRankedValue = itemValue;
    }
    return {
      rankedValue: newRankedValue,
      rank,
      keyIndex,
      keyThreshold
    };
  }, {
    rankedValue: item,
    rank: rankings.NO_MATCH,
    keyIndex: -1,
    keyThreshold: options.threshold
  });
}
function getMatchRanking(testString, stringToRank, options) {
  testString = prepareValueForComparison(testString, options);
  stringToRank = prepareValueForComparison(stringToRank, options);
  if (stringToRank.length > testString.length) {
    return rankings.NO_MATCH;
  }
  if (testString === stringToRank) {
    return rankings.CASE_SENSITIVE_EQUAL;
  }
  testString = testString.toLowerCase();
  stringToRank = stringToRank.toLowerCase();
  if (testString === stringToRank) {
    return rankings.EQUAL;
  }
  if (testString.startsWith(stringToRank)) {
    return rankings.STARTS_WITH;
  }
  if (testString.includes(` ${stringToRank}`)) {
    return rankings.WORD_STARTS_WITH;
  }
  if (testString.includes(stringToRank)) {
    return rankings.CONTAINS;
  } else if (stringToRank.length === 1) {
    return rankings.NO_MATCH;
  }
  if (getAcronym(testString).includes(stringToRank)) {
    return rankings.ACRONYM;
  }
  return getClosenessRanking(testString, stringToRank);
}
function getAcronym(string) {
  let acronym = "";
  const wordsInString = string.split(" ");
  wordsInString.forEach((wordInString) => {
    const splitByHyphenWords = wordInString.split("-");
    splitByHyphenWords.forEach((splitByHyphenWord) => {
      acronym += splitByHyphenWord.substr(0, 1);
    });
  });
  return acronym;
}
function getClosenessRanking(testString, stringToRank) {
  let matchingInOrderCharCount = 0;
  let charNumber = 0;
  function findMatchingCharacter(matchChar, string, index) {
    for (let j = index, J = string.length; j < J; j++) {
      const stringChar = string[j];
      if (stringChar === matchChar) {
        matchingInOrderCharCount += 1;
        return j + 1;
      }
    }
    return -1;
  }
  function getRanking(spread2) {
    const spreadPercentage = 1 / spread2;
    const inOrderPercentage = matchingInOrderCharCount / stringToRank.length;
    const ranking = rankings.MATCHES + inOrderPercentage * spreadPercentage;
    return ranking;
  }
  const firstIndex = findMatchingCharacter(stringToRank[0], testString, 0);
  if (firstIndex < 0) {
    return rankings.NO_MATCH;
  }
  charNumber = firstIndex;
  for (let i = 1, I = stringToRank.length; i < I; i++) {
    const matchChar = stringToRank[i];
    charNumber = findMatchingCharacter(matchChar, testString, charNumber);
    const found = charNumber > -1;
    if (!found) {
      return rankings.NO_MATCH;
    }
  }
  const spread = charNumber - firstIndex;
  return getRanking(spread);
}
function sortRankedValues(a, b, baseSort) {
  const aFirst = -1;
  const bFirst = 1;
  const {
    rank: aRank,
    keyIndex: aKeyIndex
  } = a;
  const {
    rank: bRank,
    keyIndex: bKeyIndex
  } = b;
  const same = aRank === bRank;
  if (same) {
    if (aKeyIndex === bKeyIndex) {
      return baseSort(a, b);
    } else {
      return aKeyIndex < bKeyIndex ? aFirst : bFirst;
    }
  } else {
    return aRank > bRank ? aFirst : bFirst;
  }
}
function prepareValueForComparison(value, _ref4) {
  let {
    keepDiacritics
  } = _ref4;
  value = `${value}`;
  if (!keepDiacritics) {
    value = (0, import_remove_accents.default)(value);
  }
  return value;
}
function getItemValues(item, key) {
  if (typeof key === "object") {
    key = key.key;
  }
  let value;
  if (typeof key === "function") {
    value = key(item);
  } else if (item == null) {
    value = null;
  } else if (Object.hasOwnProperty.call(item, key)) {
    value = item[key];
  } else if (key.includes(".")) {
    return getNestedValues(key, item);
  } else {
    value = null;
  }
  if (value == null) {
    return [];
  }
  if (Array.isArray(value)) {
    return value;
  }
  return [String(value)];
}
function getNestedValues(path, item) {
  const keys = path.split(".");
  let values = [item];
  for (let i = 0, I = keys.length; i < I; i++) {
    const nestedKey = keys[i];
    let nestedValues = [];
    for (let j = 0, J = values.length; j < J; j++) {
      const nestedItem = values[j];
      if (nestedItem == null)
        continue;
      if (Object.hasOwnProperty.call(nestedItem, nestedKey)) {
        const nestedValue = nestedItem[nestedKey];
        if (nestedValue != null) {
          nestedValues.push(nestedValue);
        }
      } else if (nestedKey === "*") {
        nestedValues = nestedValues.concat(nestedItem);
      }
    }
    values = nestedValues;
  }
  if (Array.isArray(values[0])) {
    const result = [];
    return result.concat(...values);
  }
  return values;
}
function getAllValuesToRank(item, keys) {
  const allValues = [];
  for (let j = 0, J = keys.length; j < J; j++) {
    const key = keys[j];
    const attributes = getKeyAttributes(key);
    const itemValues = getItemValues(item, key);
    for (let i = 0, I = itemValues.length; i < I; i++) {
      allValues.push({
        itemValue: itemValues[i],
        attributes
      });
    }
  }
  return allValues;
}
var defaultKeyAttributes = {
  maxRanking: Infinity,
  minRanking: -Infinity
};
function getKeyAttributes(key) {
  if (typeof key === "string") {
    return defaultKeyAttributes;
  }
  return {
    ...defaultKeyAttributes,
    ...key
  };
}

// node_modules/vue-query/esm/index.js
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
var VUE_QUERY_CLIENT = "VUE_QUERY_CLIENT";
function getClientKey(key) {
  var suffix = key ? ":".concat(key) : "";
  return "".concat(VUE_QUERY_CLIENT).concat(suffix);
}
function isQueryKey2(value) {
  return typeof value === "string" || Array.isArray(value);
}
function parseQueryArgs2(arg1, arg2, arg3) {
  if (arg2 === void 0) {
    arg2 = {};
  }
  if (arg3 === void 0) {
    arg3 = {};
  }
  var options;
  if (!isQueryKey2(arg1)) {
    options = arg1;
  } else if (typeof arg2 === "function") {
    options = __assign(__assign({}, toRefs(reactive(arg3))), { queryKey: arg1, queryFn: arg2 });
  } else {
    options = __assign(__assign({}, toRefs(reactive(arg2))), { queryKey: arg1 });
  }
  return reactive(options);
}
function parseFilterArgs2(arg1, arg2) {
  if (isQueryKey2(arg1)) {
    return Object.assign(arg2, { queryKey: arg1 });
  }
  return arg1 || {};
}
function parseMutationArgs(arg1, arg2, arg3) {
  if (arg2 === void 0) {
    arg2 = {};
  }
  if (arg3 === void 0) {
    arg3 = {};
  }
  if (isQueryKey2(arg1)) {
    if (typeof arg2 === "function") {
      return Object.assign(arg3, {
        mutationKey: arg1,
        mutationFn: arg2
      });
    }
    return Object.assign(arg2, { mutationKey: arg1 });
  }
  if (typeof arg1 === "function") {
    return Object.assign(arg2, { mutationFn: arg1 });
  }
  return arg1;
}
function parseMutationFilterArgs(arg1, arg2) {
  if (isQueryKey2(arg1)) {
    return Object.assign(arg2, {
      mutationKey: arg1
    });
  }
  return arg1;
}
function updateState(state, update) {
  Object.keys(state).forEach(function(key) {
    state[key] = update[key];
  });
}
function cloneDeep(value, customizer) {
  if (customizer) {
    var result = customizer(value);
    if (result !== void 0 || isRef(value)) {
      return result;
    }
  }
  if (Array.isArray(value)) {
    return value.map(function(val) {
      return cloneDeep(val, customizer);
    });
  }
  if (typeof value === "object" && isPlainObject2(value)) {
    var entries = Object.entries(value).map(function(_a) {
      var key = _a[0], val = _a[1];
      return [
        key,
        cloneDeep(val, customizer)
      ];
    });
    return Object.fromEntries(entries);
  }
  return value;
}
function cloneDeepUnref(obj) {
  return cloneDeep(obj, function(val) {
    if (isRef(val)) {
      return cloneDeepUnref(unref(val));
    }
  });
}
function isPlainObject2(value) {
  if (Object.prototype.toString.call(value) !== "[object Object]") {
    return false;
  }
  var prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}
function useQueryClient(id) {
  var _a;
  if (id === void 0) {
    id = "";
  }
  var vm = (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy;
  if (!vm) {
    throw new Error("vue-query hooks can only be used inside setup() function.");
  }
  var key = getClientKey(id);
  var queryClient = inject(key);
  if (!queryClient) {
    throw new Error("No 'queryClient' found in Vue context, use 'VueQueryPlugin' to properly initialize the library.");
  }
  return queryClient;
}
var QueryCache2 = (
  /** @class */
  function(_super) {
    __extends(QueryCache3, _super);
    function QueryCache3() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    QueryCache3.prototype.find = function(arg1, arg2) {
      var arg1Unreffed = cloneDeepUnref(arg1);
      var arg2Unreffed = cloneDeepUnref(arg2);
      return _super.prototype.find.call(this, arg1Unreffed, arg2Unreffed);
    };
    QueryCache3.prototype.findAll = function(arg1, arg2) {
      var arg1Unreffed = cloneDeepUnref(arg1);
      var arg2Unreffed = cloneDeepUnref(arg2);
      if (isQueryKey2(arg1Unreffed)) {
        return _super.prototype.findAll.call(this, arg1Unreffed, arg2Unreffed);
      }
      return _super.prototype.findAll.call(this, arg1Unreffed);
    };
    return QueryCache3;
  }(QueryCache)
);
var MutationCache2 = (
  /** @class */
  function(_super) {
    __extends(MutationCache3, _super);
    function MutationCache3() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    MutationCache3.prototype.find = function(filters) {
      return _super.prototype.find.call(this, cloneDeepUnref(filters));
    };
    MutationCache3.prototype.findAll = function(filters) {
      return _super.prototype.findAll.call(this, cloneDeepUnref(filters));
    };
    return MutationCache3;
  }(MutationCache)
);
var QueryClient2 = (
  /** @class */
  function(_super) {
    __extends(QueryClient3, _super);
    function QueryClient3(config) {
      if (config === void 0) {
        config = {};
      }
      var unreffedConfig = cloneDeepUnref(config);
      var vueQueryConfig = {
        defaultOptions: cloneDeepUnref(unreffedConfig.defaultOptions),
        queryCache: unreffedConfig.queryCache || new QueryCache2(),
        mutationCache: unreffedConfig.mutationCache || new MutationCache2()
      };
      return _super.call(this, vueQueryConfig) || this;
    }
    QueryClient3.prototype.isFetching = function(arg1, arg2) {
      var arg1Unreffed = cloneDeepUnref(arg1);
      var arg2Unreffed = cloneDeepUnref(arg2);
      if (isQueryKey2(arg1Unreffed)) {
        return _super.prototype.isFetching.call(this, arg1Unreffed, arg2Unreffed);
      }
      return _super.prototype.isFetching.call(this, arg1Unreffed);
    };
    QueryClient3.prototype.isMutating = function(filters) {
      return _super.prototype.isMutating.call(this, cloneDeepUnref(filters));
    };
    QueryClient3.prototype.getQueryData = function(queryKey, filters) {
      return _super.prototype.getQueryData.call(this, cloneDeepUnref(queryKey), cloneDeepUnref(filters));
    };
    QueryClient3.prototype.getQueriesData = function(queryKeyOrFilters) {
      var unreffed = cloneDeepUnref(queryKeyOrFilters);
      if (isQueryKey2(unreffed)) {
        return _super.prototype.getQueriesData.call(this, unreffed);
      }
      return _super.prototype.getQueriesData.call(this, unreffed);
    };
    QueryClient3.prototype.setQueryData = function(queryKey, updater, options) {
      return _super.prototype.setQueryData.call(this, cloneDeepUnref(queryKey), updater, cloneDeepUnref(options));
    };
    QueryClient3.prototype.setQueriesData = function(queryKeyOrFilters, updater, options) {
      var arg1Unreffed = cloneDeepUnref(queryKeyOrFilters);
      var arg3Unreffed = cloneDeepUnref(options);
      if (isQueryKey2(arg1Unreffed)) {
        return _super.prototype.setQueriesData.call(this, arg1Unreffed, updater, arg3Unreffed);
      }
      return _super.prototype.setQueriesData.call(this, arg1Unreffed, updater, arg3Unreffed);
    };
    QueryClient3.prototype.getQueryState = function(queryKey, filters) {
      return _super.prototype.getQueryState.call(this, cloneDeepUnref(queryKey), cloneDeepUnref(filters));
    };
    QueryClient3.prototype.removeQueries = function(arg1, arg2) {
      var arg1Unreffed = cloneDeepUnref(arg1);
      if (isQueryKey2(arg1Unreffed)) {
        return _super.prototype.removeQueries.call(this, arg1Unreffed, cloneDeepUnref(arg2));
      }
      return _super.prototype.removeQueries.call(this, arg1Unreffed);
    };
    QueryClient3.prototype.resetQueries = function(arg1, arg2, arg3) {
      var arg1Unreffed = cloneDeepUnref(arg1);
      var arg2Unreffed = cloneDeepUnref(arg2);
      if (isQueryKey2(arg1Unreffed)) {
        return _super.prototype.resetQueries.call(this, arg1Unreffed, arg2Unreffed, cloneDeepUnref(arg3));
      }
      return _super.prototype.resetQueries.call(this, arg1Unreffed, arg2Unreffed);
    };
    QueryClient3.prototype.cancelQueries = function(arg1, arg2, arg3) {
      var arg1Unreffed = cloneDeepUnref(arg1);
      var arg2Unreffed = cloneDeepUnref(arg2);
      if (isQueryKey2(arg1Unreffed)) {
        return _super.prototype.cancelQueries.call(this, arg1Unreffed, arg2Unreffed, cloneDeepUnref(arg3));
      }
      return _super.prototype.cancelQueries.call(this, arg1Unreffed, arg2Unreffed);
    };
    QueryClient3.prototype.invalidateQueries = function(arg1, arg2, arg3) {
      var arg1Unreffed = cloneDeepUnref(arg1);
      var arg2Unreffed = cloneDeepUnref(arg2);
      if (isQueryKey2(arg1Unreffed)) {
        return _super.prototype.invalidateQueries.call(this, arg1Unreffed, arg2Unreffed, cloneDeepUnref(arg3));
      }
      return _super.prototype.invalidateQueries.call(this, arg1Unreffed, arg2Unreffed);
    };
    QueryClient3.prototype.refetchQueries = function(arg1, arg2, arg3) {
      var arg1Unreffed = cloneDeepUnref(arg1);
      var arg2Unreffed = cloneDeepUnref(arg2);
      if (isQueryKey2(arg1Unreffed)) {
        return _super.prototype.refetchQueries.call(this, arg1Unreffed, arg2Unreffed, cloneDeepUnref(arg3));
      }
      return _super.prototype.refetchQueries.call(this, arg1Unreffed, arg2Unreffed);
    };
    QueryClient3.prototype.fetchQuery = function(arg1, arg2, arg3) {
      var arg1Unreffed = cloneDeepUnref(arg1);
      var arg2Unreffed = cloneDeepUnref(arg2);
      if (isQueryKey2(arg1Unreffed)) {
        return _super.prototype.fetchQuery.call(this, arg1Unreffed, arg2Unreffed, cloneDeepUnref(arg3));
      }
      return _super.prototype.fetchQuery.call(this, arg1Unreffed);
    };
    QueryClient3.prototype.prefetchQuery = function(arg1, arg2, arg3) {
      return _super.prototype.prefetchQuery.call(this, cloneDeepUnref(arg1), cloneDeepUnref(arg2), cloneDeepUnref(arg3));
    };
    QueryClient3.prototype.fetchInfiniteQuery = function(arg1, arg2, arg3) {
      var arg1Unreffed = cloneDeepUnref(arg1);
      var arg2Unreffed = cloneDeepUnref(arg2);
      if (isQueryKey2(arg1Unreffed)) {
        return _super.prototype.fetchInfiniteQuery.call(this, arg1Unreffed, arg2Unreffed, cloneDeepUnref(arg3));
      }
      return _super.prototype.fetchInfiniteQuery.call(this, arg1Unreffed);
    };
    QueryClient3.prototype.prefetchInfiniteQuery = function(arg1, arg2, arg3) {
      return _super.prototype.prefetchInfiniteQuery.call(this, cloneDeepUnref(arg1), cloneDeepUnref(arg2), cloneDeepUnref(arg3));
    };
    QueryClient3.prototype.setDefaultOptions = function(options) {
      _super.prototype.setDefaultOptions.call(this, cloneDeepUnref(options));
    };
    QueryClient3.prototype.setQueryDefaults = function(queryKey, options) {
      _super.prototype.setQueryDefaults.call(this, cloneDeepUnref(queryKey), cloneDeepUnref(options));
    };
    QueryClient3.prototype.getQueryDefaults = function(queryKey) {
      return _super.prototype.getQueryDefaults.call(this, cloneDeepUnref(queryKey));
    };
    QueryClient3.prototype.setMutationDefaults = function(mutationKey, options) {
      _super.prototype.setMutationDefaults.call(this, cloneDeepUnref(mutationKey), cloneDeepUnref(options));
    };
    QueryClient3.prototype.getMutationDefaults = function(mutationKey) {
      return _super.prototype.getMutationDefaults.call(this, cloneDeepUnref(mutationKey));
    };
    return QueryClient3;
  }(QueryClient)
);
function useQueryProvider(arg1, id) {
  if (arg1 === void 0) {
    arg1 = {};
  }
  if (id === void 0) {
    id = "";
  }
  var client = arg1 instanceof QueryClient2 ? arg1 : new QueryClient2(arg1);
  client.mount();
  var key = getClientKey(id);
  provide(key, client);
  onScopeDispose(function() {
    client.unmount();
  });
}
function getDevtoolsGlobalHook() {
  return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
  return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
}
var isProxyAvailable = typeof Proxy === "function";
var HOOK_SETUP = "devtools-plugin:setup";
var HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
var supported;
var perf;
function isPerformanceSupported() {
  var _a;
  if (supported !== void 0) {
    return supported;
  }
  if (typeof window !== "undefined" && window.performance) {
    supported = true;
    perf = window.performance;
  } else if (typeof global !== "undefined" && ((_a = global.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
    supported = true;
    perf = global.perf_hooks.performance;
  } else {
    supported = false;
  }
  return supported;
}
function now() {
  return isPerformanceSupported() ? perf.now() : Date.now();
}
var ApiProxy = class {
  constructor(plugin, hook) {
    this.target = null;
    this.targetQueue = [];
    this.onQueue = [];
    this.plugin = plugin;
    this.hook = hook;
    const defaultSettings = {};
    if (plugin.settings) {
      for (const id in plugin.settings) {
        const item = plugin.settings[id];
        defaultSettings[id] = item.defaultValue;
      }
    }
    const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
    let currentSettings = Object.assign({}, defaultSettings);
    try {
      const raw = localStorage.getItem(localSettingsSaveId);
      const data = JSON.parse(raw);
      Object.assign(currentSettings, data);
    } catch (e) {
    }
    this.fallbacks = {
      getSettings() {
        return currentSettings;
      },
      setSettings(value) {
        try {
          localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
        } catch (e) {
        }
        currentSettings = value;
      },
      now() {
        return now();
      }
    };
    if (hook) {
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId2, value) => {
        if (pluginId2 === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
    }
    this.proxiedOn = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target.on[prop];
        } else {
          return (...args) => {
            this.onQueue.push({
              method: prop,
              args
            });
          };
        }
      }
    });
    this.proxiedTarget = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target[prop];
        } else if (prop === "on") {
          return this.proxiedOn;
        } else if (Object.keys(this.fallbacks).includes(prop)) {
          return (...args) => {
            this.targetQueue.push({
              method: prop,
              args,
              resolve: () => {
              }
            });
            return this.fallbacks[prop](...args);
          };
        } else {
          return (...args) => {
            return new Promise((resolve) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve
              });
            });
          };
        }
      }
    });
  }
  async setRealTarget(target) {
    this.target = target;
    for (const item of this.onQueue) {
      this.target.on[item.method](...item.args);
    }
    for (const item of this.targetQueue) {
      item.resolve(await this.target[item.method](...item.args));
    }
  }
};
function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
  const descriptor = pluginDescriptor;
  const target = getTarget();
  const hook = getDevtoolsGlobalHook();
  const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
  if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
    hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
  } else {
    const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
    const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
    list.push({
      pluginDescriptor: descriptor,
      setupFn,
      proxy
    });
    if (proxy)
      setupFn(proxy.proxiedTarget);
  }
}
var QueryState;
(function(QueryState2) {
  QueryState2[QueryState2["Fetching"] = 0] = "Fetching";
  QueryState2[QueryState2["Fresh"] = 1] = "Fresh";
  QueryState2[QueryState2["Stale"] = 2] = "Stale";
  QueryState2[QueryState2["Inactive"] = 3] = "Inactive";
})(QueryState || (QueryState = {}));
function getQueryState(query) {
  if (query.isFetching()) {
    return QueryState.Fetching;
  }
  if (!query.getObserversCount()) {
    return QueryState.Inactive;
  }
  if (query.isStale()) {
    return QueryState.Stale;
  }
  return QueryState.Fresh;
}
function getQueryStateLabel(query) {
  var queryState = getQueryState(query);
  if (queryState === QueryState.Fetching) {
    return "fetching";
  }
  if (queryState === QueryState.Stale) {
    return "stale";
  }
  if (queryState === QueryState.Inactive) {
    return "inactive";
  }
  return "fresh";
}
function getQueryStatusFg(query) {
  var queryState = getQueryState(query);
  if (queryState === QueryState.Stale) {
    return 0;
  }
  return 16777215;
}
function getQueryStatusBg(query) {
  var queryState = getQueryState(query);
  if (queryState === QueryState.Fetching) {
    return 27647;
  }
  if (queryState === QueryState.Stale) {
    return 16757248;
  }
  if (queryState === QueryState.Inactive) {
    return 4148832;
  }
  return 33575;
}
var queryHashSort = function(a, b) {
  return String(a.queryHash).localeCompare(b.queryHash);
};
var dateSort = function(a, b) {
  return a.state.dataUpdatedAt < b.state.dataUpdatedAt ? 1 : -1;
};
var statusAndDateSort = function(a, b) {
  if (getQueryState(a) === getQueryState(b)) {
    return dateSort(a, b);
  }
  return getQueryState(a) > getQueryState(b) ? 1 : -1;
};
var sortFns = {
  "Status > Last Updated": statusAndDateSort,
  "Query Hash": queryHashSort,
  "Last Updated": dateSort
};
var pluginId = "vue-query";
var pluginName = "Vue Query";
function setupDevtools(app, queryClient) {
  setupDevtoolsPlugin({
    id: pluginId,
    label: pluginName,
    packageName: "vue-query",
    homepage: "https://github.com/DamianOsipiuk/vue-query",
    logo: "https://vue-query.vercel.app/vue-query.svg",
    app,
    settings: {
      baseSort: {
        type: "choice",
        component: "button-group",
        label: "Sort Cache Entries",
        options: [
          {
            label: "ASC",
            value: 1
          },
          {
            label: "DESC",
            value: -1
          }
        ],
        defaultValue: 1
      },
      sortFn: {
        type: "choice",
        label: "Sort Function",
        options: Object.keys(sortFns).map(function(key) {
          return {
            label: key,
            value: key
          };
        }),
        defaultValue: Object.keys(sortFns)[0]
      }
    }
  }, function(api) {
    var queryCache = queryClient.getQueryCache();
    api.addInspector({
      id: pluginId,
      label: pluginName,
      icon: "api",
      nodeActions: [
        {
          icon: "cloud_download",
          tooltip: "Refetch",
          action: function(queryHash) {
            var _a;
            (_a = queryCache.get(queryHash)) === null || _a === void 0 ? void 0 : _a.fetch();
          }
        },
        {
          icon: "alarm",
          tooltip: "Invalidate",
          action: function(queryHash) {
            var query = queryCache.get(queryHash);
            queryClient.invalidateQueries(query.queryKey);
          }
        },
        {
          icon: "settings_backup_restore",
          tooltip: "Reset",
          action: function(queryHash) {
            var _a;
            (_a = queryCache.get(queryHash)) === null || _a === void 0 ? void 0 : _a.reset();
          }
        },
        {
          icon: "delete",
          tooltip: "Remove",
          action: function(queryHash) {
            var query = queryCache.get(queryHash);
            queryCache.remove(query);
          }
        }
      ]
    });
    api.addTimelineLayer({
      id: pluginId,
      label: pluginName,
      color: 16767308
    });
    queryCache.subscribe(function(event) {
      api.sendInspectorTree(pluginId);
      api.sendInspectorState(pluginId);
      if (event && ["queryAdded", "queryRemoved", "queryUpdated"].includes(event.type)) {
        api.addTimelineEvent({
          layerId: pluginId,
          event: {
            title: event.type,
            subtitle: event.query.queryHash,
            time: api.now(),
            data: __assign({ queryHash: event.query.queryHash }, event)
          }
        });
      }
    });
    api.on.getInspectorTree(function(payload) {
      if (payload.inspectorId === pluginId) {
        var queries = queryCache.getAll();
        var settings_1 = api.getSettings();
        var filtered = matchSorter(queries, payload.filter, {
          keys: ["queryHash"],
          baseSort: function(a, b) {
            return sortFns[settings_1.sortFn](a.item, b.item) * settings_1.baseSort;
          }
        });
        var nodes = filtered.map(function(query) {
          var stateLabel = getQueryStateLabel(query);
          return {
            id: query.queryHash,
            label: query.queryHash,
            tags: [
              {
                label: "".concat(stateLabel, " [").concat(query.getObserversCount(), "]"),
                textColor: getQueryStatusFg(query),
                backgroundColor: getQueryStatusBg(query)
              }
            ]
          };
        });
        payload.rootNodes = nodes;
      }
    });
    api.on.getInspectorState(function(payload) {
      if (payload.inspectorId === pluginId) {
        var query = queryCache.get(payload.nodeId);
        if (!query) {
          return;
        }
        payload.state = {
          " Query Details": [
            {
              key: "Query key",
              value: query.queryHash
            },
            {
              key: "Query status",
              value: getQueryStateLabel(query)
            },
            {
              key: "Observers",
              value: query.getObserversCount()
            },
            {
              key: "Last Updated",
              value: new Date(query.state.dataUpdatedAt).toLocaleTimeString()
            }
          ],
          "Data Explorer": [
            {
              key: "Data",
              value: query.state.data
            }
          ],
          "Query Explorer": [
            {
              key: "Query",
              value: query
            }
          ]
        };
      }
    });
  });
}
var VueQueryPlugin = {
  install: function(app, options) {
    var _a;
    if (options === void 0) {
      options = {};
    }
    var clientKey = getClientKey(options.queryClientKey);
    var client;
    if ("queryClient" in options && options.queryClient) {
      client = options.queryClient;
    } else {
      if (options.contextSharing && typeof window !== "undefined") {
        if (!window.__VUE_QUERY_CONTEXT__) {
          var clientConfig = "queryClientConfig" in options ? options.queryClientConfig : void 0;
          client = new QueryClient2(clientConfig);
          window.__VUE_QUERY_CONTEXT__ = client;
        } else {
          client = window.__VUE_QUERY_CONTEXT__;
        }
      } else {
        var clientConfig = "queryClientConfig" in options ? options.queryClientConfig : void 0;
        client = new QueryClient2(clientConfig);
      }
    }
    client.mount();
    var cleanup = function() {
      var _a2;
      client.unmount();
      (_a2 = options.additionalClients) === null || _a2 === void 0 ? void 0 : _a2.forEach(function(additionalClient) {
        additionalClient.queryClient.unmount();
      });
    };
    if (app.onUnmount) {
      app.onUnmount(cleanup);
    } else {
      var originalUnmount_1 = app.unmount;
      app.unmount = function vueQueryUnmount() {
        cleanup();
        originalUnmount_1();
      };
    }
    if (isVue2) {
      app.mixin({
        beforeCreate: function() {
          var _this = this;
          var _a2;
          if (!this._provided) {
            var provideCache_1 = {};
            Object.defineProperty(this, "_provided", {
              get: function() {
                return provideCache_1;
              },
              set: function(v) {
                return Object.assign(provideCache_1, v);
              }
            });
          }
          this._provided[clientKey] = client;
          (_a2 = options.additionalClients) === null || _a2 === void 0 ? void 0 : _a2.forEach(function(additionalClient) {
            var key = getClientKey(additionalClient.queryClientKey);
            _this._provided[key] = additionalClient.queryClient;
            additionalClient.queryClient.mount();
          });
          if (true) {
            if (this === this.$root) {
              setupDevtools(this, client);
            }
          }
        }
      });
    } else {
      app.provide(clientKey, client);
      (_a = options.additionalClients) === null || _a === void 0 ? void 0 : _a.forEach(function(additionalClient) {
        var key = getClientKey(additionalClient.queryClientKey);
        app.provide(key, additionalClient.queryClient);
        additionalClient.queryClient.mount();
      });
      if (true) {
        setupDevtools(app, client);
      }
    }
  }
};
function useBaseQuery(Observer, arg1, arg2, arg3) {
  if (arg2 === void 0) {
    arg2 = {};
  }
  if (arg3 === void 0) {
    arg3 = {};
  }
  var options = getQueryUnreffedOptions();
  var queryClient = useQueryClient(options.queryClientKey);
  var defaultedOptions = queryClient.defaultQueryObserverOptions(options);
  var observer = new Observer(queryClient, defaultedOptions);
  var state = reactive(observer.getCurrentResult());
  var unsubscribe = observer.subscribe(function(result) {
    updateState(state, result);
  });
  watch([function() {
    return arg1;
  }, function() {
    return arg2;
  }, function() {
    return arg3;
  }], function() {
    observer.setOptions(queryClient.defaultQueryObserverOptions(getQueryUnreffedOptions()));
  }, { deep: true });
  onScopeDispose(function() {
    unsubscribe();
  });
  return __assign(__assign({}, toRefs(readonly(state))), { suspense: function() {
    return observer.fetchOptimistic(defaultedOptions);
  } });
  function getQueryUnreffedOptions() {
    var options2;
    if (!isQueryKey2(arg1)) {
      options2 = arg1;
    } else if (typeof arg2 === "function") {
      options2 = __assign(__assign({}, arg3), { queryKey: arg1, queryFn: arg2 });
    } else {
      options2 = __assign(__assign({}, arg2), { queryKey: arg1 });
    }
    return cloneDeepUnref(options2);
  }
}
function useQuery(arg1, arg2, arg3) {
  return useBaseQuery(QueryObserver, arg1, arg2, arg3);
}
function useQueries(queries) {
  var _a;
  var unreffedQueries = cloneDeepUnref(queries);
  var queryClientKey = (_a = unreffedQueries[0]) === null || _a === void 0 ? void 0 : _a.queryClientKey;
  var queryClient = useQueryClient(queryClientKey);
  var defaultedQueries = unreffedQueries.map(function(options) {
    return queryClient.defaultQueryObserverOptions(options);
  });
  var observer = new QueriesObserver(queryClient, defaultedQueries);
  var state = reactive(observer.getCurrentResult());
  var unsubscribe = observer.subscribe(function(result) {
    state.splice.apply(state, __spreadArray([0, state.length], result, false));
  });
  if (isRef(queries) || isReactive(queries)) {
    watch(queries, function() {
      var defaulted = cloneDeepUnref(queries).map(function(options) {
        return queryClient.defaultQueryObserverOptions(options);
      });
      observer.setQueries(defaulted);
    });
  }
  onScopeDispose(function() {
    unsubscribe();
  });
  return readonly(state);
}
function useInfiniteQuery(arg1, arg2, arg3) {
  return useBaseQuery(InfiniteQueryObserver, arg1, arg2, arg3);
}
function useMutation(arg1, arg2, arg3) {
  var options = parseMutationArgs(arg1, arg2, arg3);
  var queryClient = useQueryClient(options.queryClientKey);
  var observer = new MutationObserver(queryClient, options);
  var state = reactive(observer.getCurrentResult());
  var unsubscribe = observer.subscribe(function() {
    updateState(state, observer.getCurrentResult());
  });
  var mutate = function(variables, mutateOptions) {
    observer.mutate(variables, mutateOptions).catch(function() {
    });
  };
  watchEffect(function() {
    observer.setOptions(options);
  });
  onScopeDispose(function() {
    unsubscribe();
  });
  var resultRefs = toRefs(readonly(state));
  return __assign(__assign({}, resultRefs), { mutate, mutateAsync: state.mutate });
}
function useIsFetching(arg1, arg2) {
  var filters = ref({});
  var parsedFilters = parseFilterArgs2(arg1, arg2);
  filters.value = parsedFilters;
  var queryClient = useQueryClient(parsedFilters.queryClientKey);
  var isFetching = ref(queryClient.isFetching(filters.value));
  var unsubscribe = queryClient.getQueryCache().subscribe(function() {
    isFetching.value = queryClient.isFetching(filters.value);
  });
  watchEffect(function() {
    var parsedFiltersUpdate = parseFilterArgs2(arg1, arg2);
    filters.value = parsedFiltersUpdate;
  });
  onScopeDispose(function() {
    unsubscribe();
  });
  return isFetching;
}
function useIsMutating(arg1, arg2) {
  var filters = parseMutationFilterArgs(arg1, arg2);
  var queryClient = useQueryClient(filters === null || filters === void 0 ? void 0 : filters.queryClientKey);
  var isMutating = ref(queryClient.isMutating(filters));
  var unsubscribe = queryClient.getMutationCache().subscribe(function() {
    isMutating.value = queryClient.isMutating(filters);
  });
  onScopeDispose(function() {
    unsubscribe();
  });
  return isMutating;
}
export {
  InfiniteQueryObserver,
  MutationCache2 as MutationCache,
  MutationObserver,
  QueriesObserver,
  QueryCache2 as QueryCache,
  QueryClient2 as QueryClient,
  QueryObserver,
  VUE_QUERY_CLIENT,
  VueQueryPlugin,
  dehydrate,
  focusManager,
  hydrate,
  parseFilterArgs2 as parseFilterArgs,
  parseMutationArgs,
  parseMutationFilterArgs,
  parseQueryArgs2 as parseQueryArgs,
  setLogger,
  useInfiniteQuery,
  useIsFetching,
  useIsMutating,
  useMutation,
  useQueries,
  useQuery,
  useQueryClient,
  useQueryProvider
};
/*! Bundled license information:

match-sorter/dist/match-sorter.esm.js:
  (**
   * @name match-sorter
   * @license MIT license.
   * @copyright (c) 2020 Kent C. Dodds
   * @author Kent C. Dodds <me@kentcdodds.com> (https://kentcdodds.com)
   *)

vue-query/esm/index.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=vue-query.js.map
