webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};

	/* script */
	__vue_exports__ = __webpack_require__(13);

	/* template */
	var __vue_template__ = __webpack_require__(26);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/zhangwei/Work/Web/Vuejs/src/components/login/user-login.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;

	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-0614b64c", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-0614b64c", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] user-login.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}

	module.exports = __vue_exports__;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _userName = __webpack_require__(14);

	var _userName2 = _interopRequireDefault(_userName);

	var _userSubmit = __webpack_require__(17);

	var _userSubmit2 = _interopRequireDefault(_userSubmit);

	var _userArea = __webpack_require__(20);

	var _userArea2 = _interopRequireDefault(_userArea);

	var _userFavs = __webpack_require__(23);

	var _userFavs2 = _interopRequireDefault(_userFavs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//


	exports.default = {
	  mounted: function mounted() {
	    this.$children.forEach(function (child) {
	      child.$on('childChange', this.setValue);
	    }.bind(this));
	  },
	  data: function data() {
	    return {
	      username: "",
	      isadmin: false,
	      userarea: 0
	    };
	  },

	  methods: {
	    setValue: function setValue(key, value) {
	      this.$data[key] = value;
	    },
	    show: function show() {
	      alert(this.userarea);
	    }
	  },
	  components: {
	    "user-name": _userName2.default,
	    "user-submit": _userSubmit2.default,
	    "user-area": _userArea2.default,
	    "user-favs": _userFavs2.default
	  }
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};

	/* script */
	__vue_exports__ = __webpack_require__(15);

	/* template */
	var __vue_template__ = __webpack_require__(16);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/zhangwei/Work/Web/Vuejs/src/components/login/user/user-name.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;

	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-2de4b97c", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-2de4b97c", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] user-name.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}

	module.exports = __vue_exports__;

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: ["placeholder"],
	  methods: {
	    userNameChange: function userNameChange() {
	      this.$emit("childChange", 'username', this.username);
	    }
	  },
	  data: function data() {
	    return {
	      username: ""
	    };
	  }
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    staticClass: "form-group"
	  }, [_h('label', ["用户名"]), " ", _h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.username),
	      expression: "username"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "type": "text",
	      "placeholder": _vm.placeholder
	    },
	    domProps: {
	      "value": _vm._s(_vm.username)
	    },
	    on: {
	      "change": _vm.userNameChange,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.username = $event.target.value
	      }
	    }
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2de4b97c", module.exports)
	  }
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};

	/* script */
	__vue_exports__ = __webpack_require__(18);

	/* template */
	var __vue_template__ = __webpack_require__(19);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/zhangwei/Work/Web/Vuejs/src/components/login/user/user-submit.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;

	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-375ade49", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-375ade49", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] user-submit.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}

	module.exports = __vue_exports__;

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//

	exports.default = {
	  methods: {
	    test: function test() {
	      alert(this.$parent.$refs.uname.$data.username);
	    }
	  }
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    staticClass: "form-group"
	  }, [_h('button', {
	    staticClass: "btn btn-success",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": _vm.test
	    }
	  }, ["提交"])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-375ade49", module.exports)
	  }
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};

	/* script */
	__vue_exports__ = __webpack_require__(21);

	/* template */
	var __vue_template__ = __webpack_require__(22);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/zhangwei/Work/Web/Vuejs/src/components/login/user/user-area.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;

	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-5ce03e7e", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-5ce03e7e", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] user-area.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}

	module.exports = __vue_exports__;

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  methods: {
	    selectedChange: function selectedChange() {
	      this.$emit('childChange', 'userarea', this.selectedAreaData);
	    }
	  },
	  data: function data() {
	    return {
	      selectedAreaData: 0,
	      areas: [{
	        'value': 0,
	        'text': '-请选择-'
	      }, {
	        'value': 1,
	        'text': '上海'
	      }, {
	        'value': 2,
	        'text': '南京'
	      }, {
	        'value': 3,
	        'text': '北京'
	      }]
	    };
	  }
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    staticClass: "from-group"
	  }, [_h('label', ["所属区域"]), " ", _h('div', [_h('select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.selectedAreaData),
	      expression: "selectedAreaData"
	    }],
	    staticClass: "form-control",
	    on: {
	      "change": [function($event) {
	        _vm.selectedAreaData = Array.prototype.filter.call($event.target.options, function(o) {
	          return o.selected
	        }).map(function(o) {
	          var val = "_value" in o ? o._value : o.value;
	          return val
	        })[0]
	      }, _vm.selectedChange]
	    }
	  }, [_vm._l((_vm.areas), function(area) {
	    return _h('option', {
	      domProps: {
	        "value": area.value
	      }
	    }, [_vm._s(area.text)])
	  })])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5ce03e7e", module.exports)
	  }
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};

	/* script */
	__vue_exports__ = __webpack_require__(24);

	/* template */
	var __vue_template__ = __webpack_require__(25);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/zhangwei/Work/Web/Vuejs/src/components/login/user/user-favs.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;

	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-02078dae", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-02078dae", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] user-favs.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}

	module.exports = __vue_exports__;

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  data: function data() {
	    return {
	      inputTxt: '',
	      favs: [{
	        'class1': '开发类',
	        'class2': ['js', 'html', 'css']
	      }, {
	        'class1': '编程类',
	        'class2': ['java', 'php', 'python']
	      }]
	    };
	  },

	  methods: {
	    showTable: function showTable() {
	      return this.inputTxt != "";
	    },
	    filterClass2: function filterClass2(val) {
	      return val.filter(function (v) {
	        return v.indexOf(this.inputTxt) >= 0;
	      }.bind(this));
	    }
	  },
	  computed: {
	    getFavs: function getFavs() {
	      return this.favs.filter(function (value) {
	        if (value.class2.filter(function (v) {
	          return v.indexOf(this.inputTxt) >= 0;
	        }.bind(this)).length > 0) {
	          return true;
	        }
	        return false;
	      }.bind(this));
	    }
	  }
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    staticClass: "form-group"
	  }, [_h('label', ["你的爱好："]), " ", _h('div', [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.inputTxt),
	      expression: "inputTxt"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "type": "text"
	    },
	    domProps: {
	      "value": _vm._s(_vm.inputTxt)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.inputTxt = $event.target.value
	      }
	    }
	  }), " ", (_vm.showTable()) ? _h('table', [_vm._m(0), " ", _h('tbody', [_vm._l((_vm.getFavs), function(fav) {
	    return _h('tr', [_h('td', [_vm._s(fav.class1)]), " ", _h('td', [_vm._l((_vm.filterClass2(fav.class2)), function(code) {
	      return _h('a', {
	        attrs: {
	          "href": "#"
	        }
	      }, ["\n            " + _vm._s(code) + "\n          "])
	    })])])
	  })])]) : _vm._e()])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('thead', [_h('th', ["类别1"]), " ", _h('th', ["类别2"])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-02078dae", module.exports)
	  }
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    attrs: {
	      "id": "row"
	    }
	  }, [_h('form', {
	    staticClass: "form-horizontal",
	    attrs: {
	      "role": "form"
	    }
	  }, [(_vm.isadmin) ? _h('h2', ["管理员登录"]) : _h('h2', ["用户登录"]), " ", " ", _h('user-name', {
	    ref: "uname",
	    attrs: {
	      "placeholder": "请输入用户名"
	    }
	  }), " ", _h('user-area'), " ", _h('user-favs'), " ", _h('user-submit'), " ", _h('a', {
	    staticClass: "btn btn-primary",
	    attrs: {
	      "href": "#"
	    },
	    on: {
	      "click": _vm.show
	    }
	  }, ["测试"])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0614b64c", module.exports)
	  }
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};

	/* script */
	__vue_exports__ = __webpack_require__(28);

	/* template */
	var __vue_template__ = __webpack_require__(29);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/zhangwei/Work/Web/Vuejs/src/components/login/user-news.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;

	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-24bbed72", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-24bbed72", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] user-news.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}

	module.exports = __vue_exports__;

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  data: function data() {
	    return {
	      newslist: [{
	        newsid: 101,
	        pubtime: "2016-10-01",
	        title: "新闻1",
	        desc: "描述1"
	      }, {
	        newsid: 102,
	        pubtime: "2016-10-02",
	        title: "新闻2",
	        desc: "描述2"
	      }, {
	        newsid: 103,
	        pubtime: "2016-10-03",
	        title: "新闻3",
	        desc: "描述3"
	      }, {
	        newsid: 104,
	        pubtime: "2016-10-04",
	        title: "新闻4",
	        desc: "描述4"
	      }, {
	        newsid: 105,
	        pubtime: "2016-10-05",
	        title: "新闻5",
	        desc: "描述5"
	      }]
	    };
	  }
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    staticClass: "news-list"
	  }, [_h('div', {
	    staticClass: "row"
	  }, [_vm._l((_vm.newslist), function(news) {
	    return _h('div', {
	      staticClass: "page-header"
	    }, [_h('h2', [_h('router-link', {
	      attrs: {
	        "to": {
	          name: 'newsdetail',
	          params: {
	            newsid: news.newsid
	          }
	        }
	      }
	    }, [_vm._s(news.title)]), _h('small', [_vm._s(news.pubtime)])]), " ", _h('p', ["\n        " + _vm._s(news.desc) + "\n      "])])
	  })])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-24bbed72", module.exports)
	  }
	}

/***/ }
]);