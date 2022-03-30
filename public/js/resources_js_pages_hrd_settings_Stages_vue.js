"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_hrd_settings_Stages_vue"],{

/***/ "./node_modules/@element-plus/icons-vue/dist/es/circle-plus.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/@element-plus/icons-vue/dist/es/circle-plus.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ circlePlus)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _virtual_plugin_vue_export_helper_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_virtual/plugin-vue_export-helper.mjs */ "./node_modules/@element-plus/icons-vue/dist/es/_virtual/plugin-vue_export-helper.mjs");



const _sfc_main = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "CirclePlus"
});
const _hoisted_1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1);
const _hoisted_3 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0z"
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
const _hoisted_5 = [
  _hoisted_2,
  _hoisted_3,
  _hoisted_4
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1, _hoisted_5);
}
var circlePlus = /* @__PURE__ */ (0,_virtual_plugin_vue_export_helper_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(_sfc_main, [["render", _sfc_render]]);




/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScriptLoader": () => (/* binding */ ScriptLoader)
/* harmony export */ });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js");
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var createState = function () { return ({
    listeners: [],
    scriptId: (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.uuid)('tiny-script'),
    scriptLoaded: false
}); };
var CreateScriptLoader = function () {
    var state = createState();
    var injectScriptTag = function (scriptId, doc, url, callback) {
        var scriptTag = doc.createElement('script');
        scriptTag.referrerPolicy = 'origin';
        scriptTag.type = 'application/javascript';
        scriptTag.id = scriptId;
        scriptTag.src = url;
        var handler = function () {
            scriptTag.removeEventListener('load', handler);
            callback();
        };
        scriptTag.addEventListener('load', handler);
        if (doc.head) {
            doc.head.appendChild(scriptTag);
        }
    };
    var load = function (doc, url, callback) {
        if (state.scriptLoaded) {
            callback();
        }
        else {
            state.listeners.push(callback);
            if (!doc.getElementById(state.scriptId)) {
                injectScriptTag(state.scriptId, doc, url, function () {
                    state.listeners.forEach(function (fn) { return fn(); });
                    state.scriptLoaded = true;
                });
            }
        }
    };
    // Only to be used by tests.
    var reinitialize = function () {
        state = createState();
    };
    return {
        load: load,
        reinitialize: reinitialize
    };
};
var ScriptLoader = CreateScriptLoader();



/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTinymce": () => (/* binding */ getTinymce)
/* harmony export */ });
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var getGlobal = function () { return (typeof window !== 'undefined' ? window : __webpack_require__.g); };
var getTinymce = function () {
    var global = getGlobal();
    return global && global.tinymce ? global.tinymce : null;
};



/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bindHandlers": () => (/* binding */ bindHandlers),
/* harmony export */   "bindModelHandlers": () => (/* binding */ bindModelHandlers),
/* harmony export */   "initEditor": () => (/* binding */ initEditor),
/* harmony export */   "isNullOrUndefined": () => (/* binding */ isNullOrUndefined),
/* harmony export */   "isTextarea": () => (/* binding */ isTextarea),
/* harmony export */   "isValidKey": () => (/* binding */ isValidKey),
/* harmony export */   "mergePlugins": () => (/* binding */ mergePlugins),
/* harmony export */   "uuid": () => (/* binding */ uuid)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var validEvents = [
    'onActivate',
    'onAddUndo',
    'onBeforeAddUndo',
    'onBeforeExecCommand',
    'onBeforeGetContent',
    'onBeforeRenderUI',
    'onBeforeSetContent',
    'onBeforePaste',
    'onBlur',
    'onChange',
    'onClearUndos',
    'onClick',
    'onContextMenu',
    'onCopy',
    'onCut',
    'onDblclick',
    'onDeactivate',
    'onDirty',
    'onDrag',
    'onDragDrop',
    'onDragEnd',
    'onDragGesture',
    'onDragOver',
    'onDrop',
    'onExecCommand',
    'onFocus',
    'onFocusIn',
    'onFocusOut',
    'onGetContent',
    'onHide',
    'onInit',
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
    'onLoadContent',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onNodeChange',
    'onObjectResizeStart',
    'onObjectResized',
    'onObjectSelected',
    'onPaste',
    'onPostProcess',
    'onPostRender',
    'onPreProcess',
    'onProgressState',
    'onRedo',
    'onRemove',
    'onReset',
    'onSaveContent',
    'onSelectionChange',
    'onSetAttrib',
    'onSetContent',
    'onShow',
    'onSubmit',
    'onUndo',
    'onVisualAid'
];
var isValidKey = function (key) {
    return validEvents.map(function (event) { return event.toLowerCase(); }).indexOf(key.toLowerCase()) !== -1;
};
var bindHandlers = function (initEvent, listeners, editor) {
    Object.keys(listeners)
        .filter(isValidKey)
        .forEach(function (key) {
        var handler = listeners[key];
        if (typeof handler === 'function') {
            if (key === 'onInit') {
                handler(initEvent, editor);
            }
            else {
                editor.on(key.substring(2), function (e) { return handler(e, editor); });
            }
        }
    });
};
var bindModelHandlers = function (props, ctx, editor, modelValue) {
    var modelEvents = props.modelEvents ? props.modelEvents : null;
    var normalizedEvents = Array.isArray(modelEvents) ? modelEvents.join(' ') : modelEvents;
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(modelValue, function (val, prevVal) {
        if (editor && typeof val === 'string' && val !== prevVal && val !== editor.getContent({ format: props.outputFormat })) {
            editor.setContent(val);
        }
    });
    editor.on(normalizedEvents ? normalizedEvents : 'change input undo redo', function () {
        ctx.emit('update:modelValue', editor.getContent({ format: props.outputFormat }));
    });
};
var initEditor = function (initEvent, props, ctx, editor, modelValue, content) {
    editor.setContent(content());
    if (ctx.attrs['onUpdate:modelValue']) {
        bindModelHandlers(props, ctx, editor, modelValue);
    }
    bindHandlers(initEvent, ctx.attrs, editor);
};
var unique = 0;
var uuid = function (prefix) {
    var time = Date.now();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
var isTextarea = function (element) {
    return element !== null && element.tagName.toLowerCase() === 'textarea';
};
var normalizePluginArray = function (plugins) {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
var mergePlugins = function (initPlugins, inputPlugins) {
    return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
};
var isNullOrUndefined = function (value) {
    return value === null || value === undefined;
};



/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Editor": () => (/* binding */ Editor)
/* harmony export */ });
/* harmony import */ var _ScriptLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ScriptLoader */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js");
/* harmony import */ var _TinyMCE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TinyMCE */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js");
/* harmony import */ var _EditorPropTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditorPropTypes */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};





var renderInline = function (ce, id, elementRef, tagName) {
    return ce(tagName ? tagName : 'div', {
        id: id,
        ref: elementRef
    });
};
var renderIframe = function (ce, id, elementRef) {
    return ce('textarea', {
        id: id,
        visibility: 'hidden',
        ref: elementRef
    });
};
var Editor = (0,vue__WEBPACK_IMPORTED_MODULE_4__.defineComponent)({
    props: _EditorPropTypes__WEBPACK_IMPORTED_MODULE_3__.editorProps,
    setup: function (props, ctx) {
        var conf = props.init ? __assign({}, props.init) : {};
        var _a = (0,vue__WEBPACK_IMPORTED_MODULE_4__.toRefs)(props), disabled = _a.disabled, modelValue = _a.modelValue, tagName = _a.tagName;
        var element = (0,vue__WEBPACK_IMPORTED_MODULE_4__.ref)(null);
        var vueEditor = null;
        var elementId = props.id || (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.uuid)('tiny-vue');
        var inlineEditor = (props.init && props.init.inline) || props.inline;
        var modelBind = !!ctx.attrs['onUpdate:modelValue'];
        var mounting = true;
        var initialValue = props.initialValue ? props.initialValue : '';
        var cache = '';
        var getContent = function (isMounting) { return modelBind ?
            function () { return ((modelValue === null || modelValue === void 0 ? void 0 : modelValue.value) ? modelValue.value : ''); } :
            function () { return isMounting ? initialValue : cache; }; };
        var initWrapper = function () {
            var content = getContent(mounting);
            var finalInit = __assign(__assign({}, conf), { readonly: props.disabled, selector: "#" + elementId, plugins: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.mergePlugins)(conf.plugins, props.plugins), toolbar: props.toolbar || (conf.toolbar), inline: inlineEditor, setup: function (editor) {
                    vueEditor = editor;
                    editor.on('init', function (e) { return (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.initEditor)(e, props, ctx, editor, modelValue, content); });
                    if (typeof conf.setup === 'function') {
                        conf.setup(editor);
                    }
                } });
            if ((0,_Utils__WEBPACK_IMPORTED_MODULE_2__.isTextarea)(element.value)) {
                element.value.style.visibility = '';
            }
            (0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)().init(finalInit);
            mounting = false;
        };
        (0,vue__WEBPACK_IMPORTED_MODULE_4__.watch)(disabled, function (disable) {
            var _a;
            if (vueEditor !== null) {
                if (typeof ((_a = vueEditor.mode) === null || _a === void 0 ? void 0 : _a.set) === 'function') {
                    vueEditor.mode.set(disable ? 'readonly' : 'design');
                }
                else {
                    vueEditor.setMode(disable ? 'readonly' : 'design');
                }
            }
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_4__.watch)(tagName, function (_) {
            var _a;
            if (!modelBind) {
                cache = vueEditor.getContent();
            }
            (_a = (0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)()) === null || _a === void 0 ? void 0 : _a.remove(vueEditor);
            (0,vue__WEBPACK_IMPORTED_MODULE_4__.nextTick)(function () { return initWrapper(); });
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_4__.onMounted)(function () {
            if ((0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)() !== null) {
                initWrapper();
            }
            else if (element.value && element.value.ownerDocument) {
                var channel = props.cloudChannel ? props.cloudChannel : '5';
                var apiKey = props.apiKey ? props.apiKey : 'no-api-key';
                var scriptSrc = (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(props.tinymceScriptSrc) ?
                    "https://cdn.tiny.cloud/1/" + apiKey + "/tinymce/" + channel + "/tinymce.min.js" :
                    props.tinymceScriptSrc;
                _ScriptLoader__WEBPACK_IMPORTED_MODULE_0__.ScriptLoader.load(element.value.ownerDocument, scriptSrc, initWrapper);
            }
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_4__.onBeforeUnmount)(function () {
            if ((0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)() !== null) {
                (0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)().remove(vueEditor);
            }
        });
        if (!inlineEditor) {
            (0,vue__WEBPACK_IMPORTED_MODULE_4__.onActivated)(function () {
                if (!mounting) {
                    initWrapper();
                }
            });
            (0,vue__WEBPACK_IMPORTED_MODULE_4__.onDeactivated)(function () {
                var _a;
                if (!modelBind) {
                    cache = vueEditor.getContent();
                }
                (_a = (0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)()) === null || _a === void 0 ? void 0 : _a.remove(vueEditor);
            });
        }
        var rerender = function (init) {
            var _a;
            cache = vueEditor.getContent();
            (_a = (0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)()) === null || _a === void 0 ? void 0 : _a.remove(vueEditor);
            conf = __assign(__assign({}, conf), init);
            (0,vue__WEBPACK_IMPORTED_MODULE_4__.nextTick)(function () { return initWrapper(); });
        };
        ctx.expose({
            rerender: rerender
        });
        return function () { return inlineEditor ?
            renderInline(vue__WEBPACK_IMPORTED_MODULE_4__.h, elementId, element, props.tagName) :
            renderIframe(vue__WEBPACK_IMPORTED_MODULE_4__.h, elementId, element); };
    }
});


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editorProps": () => (/* binding */ editorProps)
/* harmony export */ });
var editorProps = {
    apiKey: String,
    cloudChannel: String,
    id: String,
    init: Object,
    initialValue: String,
    inline: Boolean,
    modelEvents: [String, Array],
    plugins: [String, Array],
    tagName: String,
    toolbar: [String, Array],
    modelValue: String,
    disabled: Boolean,
    tinymceScriptSrc: String,
    outputFormat: {
        type: String,
        validator: function (prop) { return prop === 'html' || prop === 'text'; }
    },
};


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Editor */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js");
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_Editor__WEBPACK_IMPORTED_MODULE_0__.Editor);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/EmailContent.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/EmailContent.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @element-plus/icons-vue */ "./node_modules/@element-plus/icons-vue/dist/es/circle-plus.mjs");
/* harmony import */ var vue_toastification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-toastification */ "./node_modules/vue-toastification/dist/index.mjs");
/* harmony import */ var _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js");
/* harmony import */ var _EmailHtml_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EmailHtml.vue */ "./resources/js/components/company/settings/stages/EmailHtml.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var toast = (0,vue_toastification__WEBPACK_IMPORTED_MODULE_2__.useToast)(); //Email

    var edit = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
    var templatesList = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    var currentTemplate = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    var ruleFormRef2 = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)();

    var getTemplatesList = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_5___default().get("/api/v1/hrd/mail_templates").then( /*#__PURE__*/function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(res) {
                    var id;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            templatesList.value = res.data;
                            console.log(templatesList.value);

                            if (templatesList.value.length && !currentTemplate.value) {
                              id = _toConsumableArray(res.data)[0].id;
                              getTemplateInfo(id);
                            }

                          case 3:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x) {
                    return _ref3.apply(this, arguments);
                  };
                }());

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function getTemplatesList() {
        return _ref2.apply(this, arguments);
      };
    }();

    var getTemplateInfo = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_5___default().get("/api/v1/hrd/mail_templates/" + id).then(function (res) {
                  currentTemplate.value = res.data;
                  edit.value = false;
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function getTemplateInfo(_x2) {
        return _ref4.apply(this, arguments);
      };
    }();

    var addTemplate = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_5___default().post("/api/v1/hrd/mail_templates").then(function () {
                  console.log("success");
                  getTemplatesList();
                  toast.success("Успешно создано!");
                  edit.value = false;
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function addTemplate() {
        return _ref5.apply(this, arguments);
      };
    }();

    var updateTemplate = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(formEl) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (formEl) {
                  _context6.next = 2;
                  break;
                }

                return _context6.abrupt("return");

              case 2:
                _context6.next = 4;
                return formEl.validate( /*#__PURE__*/function () {
                  var _ref7 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(valid, fields) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            if (!valid) {
                              _context5.next = 11;
                              break;
                            }

                            _context5.prev = 1;
                            _context5.next = 4;
                            return axios__WEBPACK_IMPORTED_MODULE_5___default().put("/api/v1/hrd/mail_templates/".concat(currentTemplate.value.id), currentTemplate.value).then(function () {
                              getTemplatesList();
                              edit.value = false;
                            });

                          case 4:
                            _context5.next = 9;
                            break;

                          case 6:
                            _context5.prev = 6;
                            _context5.t0 = _context5["catch"](1);

                            if (_context5.t0.response) {
                              toast.error(_context5.t0.response.data.message);
                            } else if (_context5.t0.request) {
                              toast.error(_context5.t0.request);
                            } else {
                              toast.error(_context5.t0.message);
                            }

                          case 9:
                            _context5.next = 12;
                            break;

                          case 11:
                            console.log("error submit!", fields);

                          case 12:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5, null, [[1, 6]]);
                  }));

                  return function (_x4, _x5) {
                    return _ref7.apply(this, arguments);
                  };
                }());

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function updateTemplate(_x3) {
        return _ref6.apply(this, arguments);
      };
    }();

    var cancelUpdate = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                getTemplateInfo(currentTemplate.value.id);
                console.log(currentTemplate.value);
                edit.value = false;

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function cancelUpdate() {
        return _ref8.apply(this, arguments);
      };
    }();

    var deleteTemplate = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_5___default()["delete"]("/api/v1/hrd/mail_templates/" + id).then(function () {
                  currentTemplate.value = null;
                  getTemplatesList();
                  edit.value = false;
                });

              case 2:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function deleteTemplate(_x6) {
        return _ref9.apply(this, arguments);
      };
    }();

    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)(function () {
      return getTemplatesList();
    });
    var __returned__ = {
      toast: toast,
      edit: edit,
      templatesList: templatesList,
      currentTemplate: currentTemplate,
      ruleFormRef2: ruleFormRef2,
      getTemplatesList: getTemplatesList,
      getTemplateInfo: getTemplateInfo,
      addTemplate: addTemplate,
      updateTemplate: updateTemplate,
      cancelUpdate: cancelUpdate,
      deleteTemplate: deleteTemplate,
      ref: vue__WEBPACK_IMPORTED_MODULE_1__.ref,
      computed: vue__WEBPACK_IMPORTED_MODULE_1__.computed,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_1__.onMounted,
      CirclePlus: _element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
      useToast: vue_toastification__WEBPACK_IMPORTED_MODULE_2__.useToast,
      Editor: _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
      EmailHtml: _EmailHtml_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
      axios: (axios__WEBPACK_IMPORTED_MODULE_5___default())
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/EmailHtml.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/EmailHtml.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    title: String,
    description: String
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_1__.useStore)();
    var company = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.state.company.company;
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(store.dispatch("company/getCompanyInfo"));
    var __returned__ = {
      store: store,
      company: company,
      props: props,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      useStore: vuex__WEBPACK_IMPORTED_MODULE_1__.useStore
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/PositionsContent.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/PositionsContent.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @element-plus/icons-vue */ "./node_modules/@element-plus/icons-vue/dist/es/circle-plus.mjs");
/* harmony import */ var vue_toastification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-toastification */ "./node_modules/vue-toastification/dist/index.mjs");
/* harmony import */ var _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js");
/* harmony import */ var _EmailHtml_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EmailHtml.vue */ "./resources/js/components/company/settings/stages/EmailHtml.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var toast = (0,vue_toastification__WEBPACK_IMPORTED_MODULE_2__.useToast)(); //Email

    var edit = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
    var templatesList = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    var currentTemplate = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    var ruleFormRef2 = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)();

    var getTemplatesList = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_5___default().get("/api/v1/hrd/positions").then( /*#__PURE__*/function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(res) {
                    var id;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            templatesList.value = res.data;
                            console.log(templatesList.value);

                            if (templatesList.value.length && !currentTemplate.value) {
                              id = _toConsumableArray(res.data)[0].id;
                              getTemplateInfo(id);
                            }

                          case 3:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x) {
                    return _ref3.apply(this, arguments);
                  };
                }());

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function getTemplatesList() {
        return _ref2.apply(this, arguments);
      };
    }();

    var getTemplateInfo = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_5___default().get("/api/v1/hrd/positions/" + id).then(function (res) {
                  currentTemplate.value = res.data;
                  edit.value = false;
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function getTemplateInfo(_x2) {
        return _ref4.apply(this, arguments);
      };
    }();

    var addTemplate = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_5___default().post("/api/v1/hrd/positions").then(function () {
                  console.log("success");
                  getTemplatesList();
                  toast.success("Успешно создано!");
                  edit.value = false;
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function addTemplate() {
        return _ref5.apply(this, arguments);
      };
    }();

    var updateTemplate = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(formEl) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (formEl) {
                  _context6.next = 2;
                  break;
                }

                return _context6.abrupt("return");

              case 2:
                _context6.next = 4;
                return formEl.validate( /*#__PURE__*/function () {
                  var _ref7 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(valid, fields) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            if (!valid) {
                              _context5.next = 11;
                              break;
                            }

                            _context5.prev = 1;
                            _context5.next = 4;
                            return axios__WEBPACK_IMPORTED_MODULE_5___default().put("/api/v1/hrd/positions/".concat(currentTemplate.value.id), currentTemplate.value).then(function () {
                              getTemplatesList();
                              edit.value = false;
                            });

                          case 4:
                            _context5.next = 9;
                            break;

                          case 6:
                            _context5.prev = 6;
                            _context5.t0 = _context5["catch"](1);

                            if (_context5.t0.response) {
                              toast.error(_context5.t0.response.data.message);
                            } else if (_context5.t0.request) {
                              toast.error(_context5.t0.request);
                            } else {
                              toast.error(_context5.t0.message);
                            }

                          case 9:
                            _context5.next = 12;
                            break;

                          case 11:
                            console.log("error submit!", fields);

                          case 12:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5, null, [[1, 6]]);
                  }));

                  return function (_x4, _x5) {
                    return _ref7.apply(this, arguments);
                  };
                }());

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function updateTemplate(_x3) {
        return _ref6.apply(this, arguments);
      };
    }();

    var cancelUpdate = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                getTemplateInfo(currentTemplate.value.id);
                console.log(currentTemplate.value);
                edit.value = false;

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function cancelUpdate() {
        return _ref8.apply(this, arguments);
      };
    }();

    var deleteTemplate = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_5___default()["delete"]("/api/v1/hrd/positions/" + id).then(function () {
                  currentTemplate.value = null;
                  getTemplatesList();
                  edit.value = false;
                });

              case 2:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function deleteTemplate(_x6) {
        return _ref9.apply(this, arguments);
      };
    }();

    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)(function () {
      return getTemplatesList();
    });
    var __returned__ = {
      toast: toast,
      edit: edit,
      templatesList: templatesList,
      currentTemplate: currentTemplate,
      ruleFormRef2: ruleFormRef2,
      getTemplatesList: getTemplatesList,
      getTemplateInfo: getTemplateInfo,
      addTemplate: addTemplate,
      updateTemplate: updateTemplate,
      cancelUpdate: cancelUpdate,
      deleteTemplate: deleteTemplate,
      ref: vue__WEBPACK_IMPORTED_MODULE_1__.ref,
      computed: vue__WEBPACK_IMPORTED_MODULE_1__.computed,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_1__.onMounted,
      CirclePlus: _element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
      useToast: vue_toastification__WEBPACK_IMPORTED_MODULE_2__.useToast,
      Editor: _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
      EmailHtml: _EmailHtml_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
      axios: (axios__WEBPACK_IMPORTED_MODULE_5___default())
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/StagesContent.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/StagesContent.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _components_company_settings_stages_StructureUsers_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/company/settings/stages/StructureUsers.vue */ "./resources/js/components/company/settings/stages/StructureUsers.vue");
/* harmony import */ var _element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @element-plus/icons-vue */ "./node_modules/@element-plus/icons-vue/dist/es/circle-plus.mjs");
/* harmony import */ var _element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @element-plus/icons-vue */ "./node_modules/@element-plus/icons-vue/dist/es/search.mjs");
/* harmony import */ var vue_toastification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-toastification */ "./node_modules/vue-toastification/dist/index.mjs");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var toast = (0,vue_toastification__WEBPACK_IMPORTED_MODULE_3__.useToast)();
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_4__.useStore)();
    var ruleFormRef = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)();
    var ruleFormRef2 = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)();
    var edit = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
    var addStageModal = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
    var currentStage = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    var myTable = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null); //stages

    var stages = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)({
      title: "",
      subtitle: "",
      color: "#DBE4EB"
    });
    var stagesList = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);

    var stagess = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get("/api/v1/hrd/stages").then(function (res) {
                  stagesList.value = res.data;

                  if (stagesList.value.length && !currentStage.value) {
                    var id = _toConsumableArray(res.data)[0].id;

                    getStageInfo(id);
                  }
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function stagess() {
        return _ref2.apply(this, arguments);
      };
    }();

    var getStageInfo = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get("/api/v1/hrd/stages/" + id).then(function (res) {
                  currentStage.value = res.data;
                  edit.value = false;
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function getStageInfo(_x) {
        return _ref3.apply(this, arguments);
      };
    }();

    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)(function () {
      return stagess();
    });

    var submitForm = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(formEl) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (formEl) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return");

              case 2:
                _context4.next = 4;
                return formEl.validate( /*#__PURE__*/function () {
                  var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(valid, fields) {
                    var errors;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            if (!valid) {
                              _context3.next = 11;
                              break;
                            }

                            _context3.prev = 1;
                            _context3.next = 4;
                            return axios.post("/api/v1/hrd/stages", stages.value).then(function () {
                              console.log("success");
                              stagess();
                              addStageModal.value = false;
                              toast.success("Успешно создано!");
                              edit.value = false;
                            });

                          case 4:
                            _context3.next = 9;
                            break;

                          case 6:
                            _context3.prev = 6;
                            _context3.t0 = _context3["catch"](1);

                            if (_context3.t0.response.data.errors) {
                              errors = _context3.t0.response.data.errors;
                              Object.entries(errors).map(function (obj) {
                                var key = obj[0];
                                var value = obj[1];
                                value.map(function (error) {
                                  toast.error(error);
                                });
                              });
                            } else if (_context3.t0.response) {
                              toast.error(_context3.t0.response.data.message);
                            } else if (_context3.t0.request) {
                              toast.error(_context3.t0.request);
                            } else {
                              toast.error(_context3.t0.message);
                            }

                          case 9:
                            _context3.next = 12;
                            break;

                          case 11:
                            console.log("error submit!", fields);

                          case 12:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, null, [[1, 6]]);
                  }));

                  return function (_x3, _x4) {
                    return _ref5.apply(this, arguments);
                  };
                }());

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function submitForm(_x2) {
        return _ref4.apply(this, arguments);
      };
    }();

    var updateStage = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(formEl) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (formEl) {
                  _context6.next = 2;
                  break;
                }

                return _context6.abrupt("return");

              case 2:
                _context6.next = 4;
                return formEl.validate( /*#__PURE__*/function () {
                  var _ref7 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(valid, fields) {
                    var errors;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            if (!valid) {
                              _context5.next = 11;
                              break;
                            }

                            _context5.prev = 1;
                            _context5.next = 4;
                            return axios.put("/api/v1/hrd/stages/".concat(currentStage.value.id), currentStage.value).then(function () {
                              stagess();
                              edit.value = false;
                            });

                          case 4:
                            _context5.next = 9;
                            break;

                          case 6:
                            _context5.prev = 6;
                            _context5.t0 = _context5["catch"](1);

                            if (_context5.t0.response.data.errors) {
                              errors = _context5.t0.response.data.errors;
                              Object.entries(errors).map(function (obj) {
                                var key = obj[0];
                                var value = obj[1];
                                value.map(function (error) {
                                  toast.error(error);
                                });
                              });
                            } else if (_context5.t0.response) {
                              toast.error(_context5.t0.response.data.message);
                            } else if (_context5.t0.request) {
                              toast.error(_context5.t0.request);
                            } else {
                              toast.error(_context5.t0.message);
                            }

                          case 9:
                            _context5.next = 12;
                            break;

                          case 11:
                            console.log("error submit!", fields);

                          case 12:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5, null, [[1, 6]]);
                  }));

                  return function (_x6, _x7) {
                    return _ref7.apply(this, arguments);
                  };
                }());

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function updateStage(_x5) {
        return _ref6.apply(this, arguments);
      };
    }();

    var cancelUpdate = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                getStageInfo(currentStage.value.id);
                console.log(currentStage.value);
                edit.value = false;

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function cancelUpdate() {
        return _ref8.apply(this, arguments);
      };
    }();

    var deleteStage = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return axios["delete"]("/api/v1/hrd/stages/" + id).then(function () {
                  currentStage.value = null;
                  stagess();
                  edit.value = false;
                });

              case 2:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function deleteStage(_x8) {
        return _ref9.apply(this, arguments);
      };
    }(); //users


    var searchTerm = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)("");
    var columns = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([{
      label: "ФИО",
      field: "surname"
    }, {
      label: "Email",
      field: "user.email"
    }, {
      label: "Структура",
      field: "user.phone"
    }, {
      label: "Действие",
      field: "edit",
      width: "150px"
    }]);
    var columns2 = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([{
      label: "ФИО",
      field: "surname"
    }]);
    var users = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
    var addUserToStageModal = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);

    var addUsers = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee9(selectedUsers) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                data = {
                  stage_id: currentStage.value.id,
                  ids: selectedUsers
                };
                _context9.next = 3;
                return axios.post("/api/v1/hrd/stages/setUsers", data).then(function () {
                  getStageInfo(currentStage.value.id);
                  addUserToStageModal.value = false;
                });

              case 3:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      return function addUsers(_x9) {
        return _ref10.apply(this, arguments);
      };
    }();

    var deleteUser = /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee10(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return axios.post("/api/v1/hrd/stages/deleteUser/" + id).then(function () {
                  console.log("success");
                  getStageInfo(currentStage.value.id);
                });

              case 2:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      return function deleteUser(_x10) {
        return _ref11.apply(this, arguments);
      };
    }();

    var allUsers = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(function () {
      return store.state.employees.all;
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)(store.dispatch("employees/getAllEmployees"));
    var rows = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
    var __returned__ = {
      toast: toast,
      store: store,
      ruleFormRef: ruleFormRef,
      ruleFormRef2: ruleFormRef2,
      edit: edit,
      addStageModal: addStageModal,
      currentStage: currentStage,
      myTable: myTable,
      stages: stages,
      stagesList: stagesList,
      stagess: stagess,
      getStageInfo: getStageInfo,
      submitForm: submitForm,
      updateStage: updateStage,
      cancelUpdate: cancelUpdate,
      deleteStage: deleteStage,
      searchTerm: searchTerm,
      columns: columns,
      columns2: columns2,
      users: users,
      addUserToStageModal: addUserToStageModal,
      addUsers: addUsers,
      deleteUser: deleteUser,
      allUsers: allUsers,
      rows: rows,
      computed: vue__WEBPACK_IMPORTED_MODULE_1__.computed,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_1__.onMounted,
      ref: vue__WEBPACK_IMPORTED_MODULE_1__.ref,
      StructureUsers: _components_company_settings_stages_StructureUsers_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      CirclePlus: _element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
      Search: _element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
      useToast: vue_toastification__WEBPACK_IMPORTED_MODULE_3__.useToast,
      useStore: vuex__WEBPACK_IMPORTED_MODULE_4__.useStore
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/StructureContent.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/StructureContent.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @element-plus/icons-vue */ "./node_modules/@element-plus/icons-vue/dist/es/circle-plus.mjs");
/* harmony import */ var _element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @element-plus/icons-vue */ "./node_modules/@element-plus/icons-vue/dist/es/search.mjs");
/* harmony import */ var _element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @element-plus/icons-vue */ "./node_modules/@element-plus/icons-vue/dist/es/arrow-down.mjs");
/* harmony import */ var _element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @element-plus/icons-vue */ "./node_modules/@element-plus/icons-vue/dist/es/arrow-up.mjs");
/* harmony import */ var _StructureUsers_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StructureUsers.vue */ "./resources/js/components/company/settings/stages/StructureUsers.vue");
/* harmony import */ var vue_toastification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-toastification */ "./node_modules/vue-toastification/dist/index.mjs");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var toast = (0,vue_toastification__WEBPACK_IMPORTED_MODULE_3__.useToast)();
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_4__.useStore)();
    var edit = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
    var id = 1000;

    var append = function append(data) {
      stages.value.parent_id = data.id;
      addStructureModal.value = true;
    };

    var toggle = function toggle(id) {
      var item = structuresList.value.find(function (data) {
        return data.id === id;
      });
      item.toggle = !item.toggle;
      console.log(item.toggle);
    };

    var currentStructure = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    var structuresList = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);

    var getStructuresList = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get("/api/v1/hrd/structures").then( /*#__PURE__*/function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(res) {
                    var _id;

                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            structuresList.value = res.data;
                            console.log(structuresList.value);

                            if (structuresList.value.length && !currentStructure.value) {
                              _id = _toConsumableArray(res.data)[0].id;
                              getStructureInfo(_id);
                            }

                          case 3:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x) {
                    return _ref3.apply(this, arguments);
                  };
                }());

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function getStructuresList() {
        return _ref2.apply(this, arguments);
      };
    }();

    var getStructureInfo = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.get("/api/v1/hrd/structures/" + id).then(function (res) {
                  currentStructure.value = res.data;
                  edit.value = false;
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function getStructureInfo(_x2) {
        return _ref4.apply(this, arguments);
      };
    }();

    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)(function () {
      return getStructuresList();
    });
    var columns = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([{
      label: "ФИО",
      field: "surname"
    }, {
      label: "Email",
      field: "user.email"
    }, {
      label: "Структура",
      field: "user.phone"
    }, {
      label: "Действие",
      field: "edit",
      width: "150px"
    }]);
    var columns2 = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([{
      label: "ФИО",
      field: "surname"
    }]);
    var ruleFormRef = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)();
    var stages = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)({
      name: "",
      parent_id: ""
    });
    var addStructureModal = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);

    var submitForm = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(formEl) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (formEl) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt("return");

              case 2:
                _context5.next = 4;
                return formEl.validate( /*#__PURE__*/function () {
                  var _ref6 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(valid, fields) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            if (!valid) {
                              _context4.next = 11;
                              break;
                            }

                            _context4.prev = 1;
                            _context4.next = 4;
                            return axios.post("/api/v1/hrd/structures", stages.value).then(function () {
                              console.log("success");
                              getStructuresList();
                              addStructureModal.value = false;
                              toast.success("Успешно создано!");
                              edit.value = false;
                              stages.value = {
                                name: "",
                                parent_id: ""
                              };
                            });

                          case 4:
                            _context4.next = 9;
                            break;

                          case 6:
                            _context4.prev = 6;
                            _context4.t0 = _context4["catch"](1);

                            if (_context4.t0.response) {
                              toast.error(_context4.t0.response.data.message);
                            } else if (_context4.t0.request) {
                              toast.error(_context4.t0.request);
                            } else {
                              toast.error(_context4.t0.message);
                            }

                          case 9:
                            _context4.next = 12;
                            break;

                          case 11:
                            console.log("error submit!", fields);

                          case 12:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4, null, [[1, 6]]);
                  }));

                  return function (_x4, _x5) {
                    return _ref6.apply(this, arguments);
                  };
                }());

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function submitForm(_x3) {
        return _ref5.apply(this, arguments);
      };
    }();

    var addUsers = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(selectedUsers) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                data = {
                  structure_id: currentStructure.value.id,
                  ids: selectedUsers
                };
                _context6.next = 3;
                return axios.post("/api/v1/hrd/structures/setUsers", data).then(function () {
                  getStructureInfo(currentStructure.value.id); // addUserToStageModal.value = false;
                });

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function addUsers(_x6) {
        return _ref7.apply(this, arguments);
      };
    }();

    var deleteUser = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return axios.post("/api/v1/hrd/structures/deleteUser/" + id).then(function () {
                  console.log("success");
                  getStructureInfo(currentStructure.value.id);
                });

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function deleteUser(_x7) {
        return _ref8.apply(this, arguments);
      };
    }();

    var allUsers = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(function () {
      return store.state.employees.all;
    });
    var structureUsers = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)(store.dispatch("employees/getAllEmployees"));
    var ruleFormRef2 = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)();

    var updateStructure = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee9(formEl) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (formEl) {
                  _context9.next = 2;
                  break;
                }

                return _context9.abrupt("return");

              case 2:
                _context9.next = 4;
                return formEl.validate( /*#__PURE__*/function () {
                  var _ref10 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8(valid, fields) {
                    var errors;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            if (!valid) {
                              _context8.next = 11;
                              break;
                            }

                            _context8.prev = 1;
                            _context8.next = 4;
                            return axios.put("/api/v1/hrd/structures/".concat(currentStructure.value.id), currentStructure.value).then(function () {
                              getStructuresList();
                              edit.value = false;
                            });

                          case 4:
                            _context8.next = 9;
                            break;

                          case 6:
                            _context8.prev = 6;
                            _context8.t0 = _context8["catch"](1);

                            if (_context8.t0.response.data.errors) {
                              errors = _context8.t0.response.data.errors;
                              Object.entries(errors).map(function (obj) {
                                var key = obj[0];
                                var value = obj[1];
                                value.map(function (error) {
                                  toast.error(error);
                                });
                              });
                            } else if (_context8.t0.response) {
                              toast.error(_context8.t0.response.data.message);
                            } else if (_context8.t0.request) {
                              toast.error(_context8.t0.request);
                            } else {
                              toast.error(_context8.t0.message);
                            }

                          case 9:
                            _context8.next = 12;
                            break;

                          case 11:
                            console.log("error submit!", fields);

                          case 12:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8, null, [[1, 6]]);
                  }));

                  return function (_x9, _x10) {
                    return _ref10.apply(this, arguments);
                  };
                }());

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      return function updateStructure(_x8) {
        return _ref9.apply(this, arguments);
      };
    }();

    var cancelUpdate = /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee10() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                getStructureInfo(currentStructure.value.id);
                console.log(currentStructure.value);
                edit.value = false;

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      return function cancelUpdate() {
        return _ref11.apply(this, arguments);
      };
    }();

    var deleteStructure = /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee11(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return axios["delete"]("/api/v1/hrd/structures/" + id).then(function () {
                  currentStructure.value = null;
                  getStructuresList();
                  edit.value = false;
                });

              case 2:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      return function deleteStructure(_x11) {
        return _ref12.apply(this, arguments);
      };
    }();

    var __returned__ = {
      toast: toast,
      store: store,
      edit: edit,
      id: id,
      append: append,
      toggle: toggle,
      currentStructure: currentStructure,
      structuresList: structuresList,
      getStructuresList: getStructuresList,
      getStructureInfo: getStructureInfo,
      columns: columns,
      columns2: columns2,
      ruleFormRef: ruleFormRef,
      stages: stages,
      addStructureModal: addStructureModal,
      submitForm: submitForm,
      addUsers: addUsers,
      deleteUser: deleteUser,
      allUsers: allUsers,
      structureUsers: structureUsers,
      ruleFormRef2: ruleFormRef2,
      updateStructure: updateStructure,
      cancelUpdate: cancelUpdate,
      deleteStructure: deleteStructure,
      ref: vue__WEBPACK_IMPORTED_MODULE_1__.ref,
      computed: vue__WEBPACK_IMPORTED_MODULE_1__.computed,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_1__.onMounted,
      useStore: vuex__WEBPACK_IMPORTED_MODULE_4__.useStore,
      CirclePlus: _element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
      Search: _element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
      ArrowDown: _element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
      ArrowUp: _element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
      StructureUsers: _StructureUsers_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      useToast: vue_toastification__WEBPACK_IMPORTED_MODULE_3__.useToast
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/StructureUsers.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/StructureUsers.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @element-plus/icons-vue */ "./node_modules/@element-plus/icons-vue/dist/es/circle-plus.mjs");
/* harmony import */ var _element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @element-plus/icons-vue */ "./node_modules/@element-plus/icons-vue/dist/es/search.mjs");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    title: String,
    allUsers: Array,
    structureUsers: Array,
    columns: Array,
    allUsersColumn: Array,
    currentTitle: String,
    style: String
  },
  emits: ["getUsers", "deleteUser"],
  setup: function setup(__props, _ref) {
    var expose = _ref.expose,
        emit = _ref.emit;
    expose();
    var props = __props;
    console.log("props", props.structureUsers);
    var searchTerm = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)("");
    var myTable = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)();
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_2__.useStore)();
    var users = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
    var addUserToStageModal = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);

    var addUserToStage = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                myTable.value.selectedRows.map(function (item) {
                  users.value.push(item.id);
                });
                console.log(users.value);
                emit("getUsers", users.value);
                addUserToStageModal.value = false;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function addUserToStage() {
        return _ref2.apply(this, arguments);
      };
    }();

    var deleteUser = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                emit("deleteUser", id);

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function deleteUser(_x) {
        return _ref3.apply(this, arguments);
      };
    }();

    var __returned__ = {
      emit: emit,
      props: props,
      searchTerm: searchTerm,
      myTable: myTable,
      store: store,
      users: users,
      addUserToStageModal: addUserToStageModal,
      addUserToStage: addUserToStage,
      deleteUser: deleteUser,
      computed: vue__WEBPACK_IMPORTED_MODULE_1__.computed,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_1__.onMounted,
      ref: vue__WEBPACK_IMPORTED_MODULE_1__.ref,
      CirclePlus: _element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
      Search: _element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
      useStore: vuex__WEBPACK_IMPORTED_MODULE_2__.useStore
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/hrd/settings/Stages.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/hrd/settings/Stages.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_company_settings_stages_StagesContent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/company/settings/stages/StagesContent.vue */ "./resources/js/components/company/settings/stages/StagesContent.vue");
/* harmony import */ var _components_company_settings_stages_StructureContent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/company/settings/stages/StructureContent.vue */ "./resources/js/components/company/settings/stages/StructureContent.vue");
/* harmony import */ var _components_company_settings_stages_EmailContent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/company/settings/stages/EmailContent.vue */ "./resources/js/components/company/settings/stages/EmailContent.vue");
/* harmony import */ var _components_company_settings_stages_PositionsContent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/company/settings/stages/PositionsContent.vue */ "./resources/js/components/company/settings/stages/PositionsContent.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_4__.useStore)();
    var activeName = store.state.stages.activeName;

    var handleClick = function handleClick(tab, event) {
      console.log(tab.props.name);
    };

    var __returned__ = {
      store: store,
      activeName: activeName,
      handleClick: handleClick,
      StagesContent: _components_company_settings_stages_StagesContent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      StructureContent: _components_company_settings_stages_StructureContent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      EmailContent: _components_company_settings_stages_EmailContent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      PositionsContent: _components_company_settings_stages_PositionsContent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
      useStore: vuex__WEBPACK_IMPORTED_MODULE_4__.useStore
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/EmailContent.vue?vue&type=template&id=bddc06b0":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/EmailContent.vue?vue&type=template&id=bddc06b0 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "tab-wrap"
};
var _hoisted_2 = {
  "class": "tab-navigate"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Добавить шаблон");

var _hoisted_4 = ["onClick"];
var _hoisted_5 = ["innerHTML"];
var _hoisted_6 = {
  "class": "tab-content"
};
var _hoisted_7 = {
  key: 0,
  "class": "tab-header"
};
var _hoisted_8 = {
  "class": "flex items-center rounded-b-[6px]"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Редактировать", -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "flex items-center rounded-b-[6px]"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Удалить", -1
/* HOISTED */
);

var _hoisted_12 = {
  key: 1,
  "class": "tab-body"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Сохранить");

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Отменить");

var _hoisted_15 = {
  key: 1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_el_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-button");

  var _component_unicon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("unicon");

  var _component_el_dropdown_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-dropdown-item");

  var _component_el_dropdown_menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-dropdown-menu");

  var _component_el_dropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-dropdown");

  var _component_el_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-input");

  var _component_el_form_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-form-item");

  var _component_el_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-form");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_button, {
    "class": "w-full",
    color: "#7734FC",
    style: {
      "color": "#fff"
    },
    icon: $setup.CirclePlus,
    onClick: $setup.addTemplate
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["icon"]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.templatesList, function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: item.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["nodes mt-3.5", $setup.currentTemplate ? $setup.currentTemplate.id == item.id ? 'active' : '' : index === 0 ? 'active' : '']),
      onClick: function onClick($event) {
        return $setup.getTemplateInfo(item.id);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.title) + " ", 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "font-normal text-[14px] text-[#6D767E] mt-1 line-clamp-3 description",
      innerHTML: item.description
    }, null, 8
    /* PROPS */
    , _hoisted_5)], 10
    /* CLASS, PROPS */
    , _hoisted_4)]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [$setup.currentTemplate ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.currentTemplate.title), 1
  /* TEXT */
  )]), $setup.edit ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $setup.deleteTemplate($setup.currentTemplate.id);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_unicon, {
    name: "times-circle",
    fill: "red"
  })])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_el_dropdown, {
    key: 1,
    trigger: "click"
  }, {
    dropdown: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_dropdown_menu, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_dropdown_item, {
            onClick: _cache[1] || (_cache[1] = function ($event) {
              return $setup.edit = true;
            })
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_unicon, {
                name: "pen",
                "class": "mr-2",
                fill: "#191B1D"
              }), _hoisted_9])];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_dropdown_item, {
            onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
              return $setup.deleteTemplate($setup.currentTemplate.id);
            }, ["prevent"]))
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_unicon, {
                name: "trash-alt",
                "class": "mr-2",
                fill: " #FF2727"
              }), _hoisted_11])];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_unicon, {
        "class": "row-edit",
        name: "ellipsis-h"
      })];
    }),
    _: 1
    /* STABLE */

  }))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.currentTemplate ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_12, [$setup.edit ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_el_form, {
    key: 0,
    ref: "ruleFormRef2",
    model: $setup.currentTemplate,
    "label-position": "top",
    size: "large",
    "class": "mb-10"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form_item, {
        prop: "title",
        rules: {
          required: true,
          message: 'Обязательное поле',
          trigger: 'blur'
        },
        label: "Тема письма",
        "class": "w-[260px]"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_input, {
            modelValue: $setup.currentTemplate.title,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
              return $setup.currentTemplate.title = $event;
            })
          }, null, 8
          /* PROPS */
          , ["modelValue"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form_item, {
        prop: "description",
        rules: {
          required: true,
          message: 'Обязательное поле',
          trigger: 'blur'
        },
        label: "Описание",
        "class": "w-full"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Editor"], {
            "api-key": "smq93pmzmcw471hivrg6vts22kyeef3k0dejf17b3545v7zw",
            modelValue: $setup.currentTemplate.description,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
              return $setup.currentTemplate.description = $event;
            }),
            init: {
              height: 500,
              menubar: false,
              plugins: ['advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen', 'insertdatetime media table paste code help wordcount'],
              toolbar: 'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help'
            }
          }, null, 8
          /* PROPS */
          , ["modelValue"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_button, {
        type: "primary",
        color: "#FF6854",
        onClick: _cache[5] || (_cache[5] = function ($event) {
          return $setup.updateTemplate($setup.ruleFormRef2);
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_13];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_button, {
        type: "primary",
        color: "#F0F4F7",
        style: {
          "color": "#6d767e"
        },
        onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.cancelUpdate, ["prevent"])
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_14];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["onClick"])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["model"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["EmailHtml"], {
    title: $setup.currentTemplate.title,
    description: $setup.currentTemplate.description
  }, null, 8
  /* PROPS */
  , ["title", "description"])]))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/EmailHtml.vue?vue&type=template&id=03a3fbe8&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/EmailHtml.vue?vue&type=template&id=03a3fbe8&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-03a3fbe8"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  border: "0",
  cellpadding: "0",
  cellspacing: "0",
  "class": "nl-container",
  role: "presentation",
  style: {
    "mso-table-lspace": "0pt",
    "mso-table-rspace": "0pt",
    "background-color": "#fff",
    "margin-top": "20px"
  },
  width: "100%"
};
var _hoisted_2 = {
  align: "center",
  border: "0",
  cellpadding: "0",
  cellspacing: "0",
  "class": "row row-1",
  role: "presentation",
  style: {
    "mso-table-lspace": "0pt",
    "mso-table-rspace": "0pt",
    "border-radius": "10px"
  },
  width: "100%"
};
var _hoisted_3 = {
  align: "center",
  border: "0",
  cellpadding: "0",
  cellspacing: "0",
  "class": "row-content stack",
  role: "presentation",
  style: {
    "mso-table-lspace": "0pt",
    "mso-table-rspace": "0pt",
    "background-color": "#6d767e",
    "color": "#000000",
    "width": "600px",
    "border-top-left-radius": "10px",
    "border-top-right-radius": "10px"
  },
  width: "600"
};
var _hoisted_4 = {
  "class": "column column-1",
  style: {
    "mso-table-lspace": "0pt",
    "mso-table-rspace": "0pt",
    "font-weight": "400",
    "text-align": "left",
    "vertical-align": "top",
    "border-top": "0px",
    "border-right": "0px",
    "border-bottom": "0px",
    "border-left": "0px"
  },
  width: "16.666666666666668%"
};
var _hoisted_5 = {
  border: "0",
  cellpadding: "0",
  cellspacing: "0",
  "class": "image_block",
  role: "presentation",
  style: {
    "mso-table-lspace": "0pt",
    "mso-table-rspace": "0pt"
  },
  width: "100%"
};
var _hoisted_6 = {
  style: {
    "width": "100%",
    "padding-right": "0px",
    "padding-left": "0px",
    "padding-top": "25px",
    "padding-bottom": "60px"
  }
};
var _hoisted_7 = {
  align: "center",
  style: {
    "line-height": "10px"
  }
};
var _hoisted_8 = ["src"];
var _hoisted_9 = {
  "class": "column column-2",
  style: {
    "mso-table-lspace": "0pt",
    "mso-table-rspace": "0pt",
    "font-weight": "400",
    "text-align": "left",
    "vertical-align": "top",
    "border-top": "0px",
    "border-right": "0px",
    "border-bottom": "0px",
    "border-left": "0px"
  },
  width: "83.33333333333333%"
};
var _hoisted_10 = {
  border: "0",
  cellpadding: "0",
  cellspacing: "0",
  "class": "heading_block",
  role: "presentation",
  style: {
    "mso-table-lspace": "0pt",
    "mso-table-rspace": "0pt"
  },
  width: "100%"
};
var _hoisted_11 = {
  style: {
    "width": "100%",
    "text-align": "center",
    "padding-top": "45px",
    "padding-right": "10px",
    "padding-bottom": "15px",
    "padding-left": "10px"
  }
};
var _hoisted_12 = {
  style: {
    "margin": "0",
    "color": "#ffffff",
    "font-size": "23px",
    "font-family": "Arial,",
    "line-height": "120%",
    "text-align": "left",
    "direction": "ltr",
    "font-weight": "700",
    "letter-spacing": "normal",
    "margin-top": "0",
    "margin-bottom": "0"
  }
};
var _hoisted_13 = {
  align: "center",
  border: "0",
  cellpadding: "0",
  cellspacing: "0",
  "class": "row row-2",
  role: "presentation",
  style: {
    "mso-table-lspace": "0pt",
    "mso-table-rspace": "0pt",
    "/* width": "300px",
    "*/\n                            background": "#f0f4f7",
    "max-width": "600px"
  },
  width: "100%"
};
var _hoisted_14 = {
  style: {
    "width": "200px"
  }
};
var _hoisted_15 = {
  style: {
    "background": "#f0f4f7"
  }
};
var _hoisted_16 = {
  align: "center",
  border: "0",
  cellpadding: "0",
  cellspacing: "0",
  "class": "row-content stack",
  role: "presentation",
  style: {
    "mso-table-lspace": "0pt",
    "mso-table-rspace": "0pt",
    "background-color": "#ffffff",
    "color": "#000000",
    "width": "550px",
    "border-radius": "30px",
    "margin-top": "-40px"
  },
  width: "600"
};
var _hoisted_17 = {
  style: {
    "border-radius": "20px"
  }
};
var _hoisted_18 = {
  "class": "column column-1",
  style: {
    "mso-table-lspace": "0pt",
    "mso-table-rspace": "0pt",
    "font-weight": "400",
    "text-align": "left",
    "vertical-align": "top",
    "background-color": "#ffffff",
    "padding-left": "10px",
    "padding-right": "10px",
    "padding-top": "20px",
    "padding-bottom": "20px",
    "border-top": "0px",
    "border-right": "0px",
    "border-bottom": "0px",
    "border-left": "0px",
    "border-radius": "10px"
  },
  width: "100%"
};
var _hoisted_19 = {
  border: "0",
  cellpadding: "10",
  cellspacing: "0",
  "class": "paragraph_block",
  role: "presentation",
  style: {
    "mso-table-lspace": "0pt",
    "mso-table-rspace": "0pt"
  },
  width: "100%"
};
var _hoisted_20 = {
  style: {
    "color": "#000000",
    "font-size": "14px",
    "font-family": "Arial,",
    "font-weight": "400",
    "line-height": "120%",
    "text-align": "left",
    "direction": "ltr",
    "letter-spacing": "0px"
  }
};
var _hoisted_21 = ["innerHTML"];

var _hoisted_22 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#",
    style: {
      "display": "block",
      "padding": "10px",
      "max-width": "170px",
      "background": "#ff6854",
      "border-radius": "10px",
      "color": "#fff",
      "text-decoration": "none",
      "margin-top": "30px",
      "font-size": "14px",
      "text-align": "center"
    }
  }, " Перейти в onboard", -1
  /* HOISTED */
  );
});

var _hoisted_23 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", {
    align: "center",
    border: "0",
    cellpadding: "0",
    cellspacing: "0",
    "class": "row row-3",
    role: "presentation",
    style: {
      "mso-table-lspace": "0pt",
      "mso-table-rspace": "0pt",
      "padding-top": "50px",
      "background": "#f0f4f7",
      "max-width": "600px"
    },
    width: "100%"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", {
    align: "center",
    border: "0",
    cellpadding: "0",
    cellspacing: "0",
    "class": "row-content stack",
    role: "presentation",
    style: {
      "mso-table-lspace": "0pt",
      "mso-table-rspace": "0pt",
      "color": "#000000",
      "width": "600px"
    },
    width: "600"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": "column column-1",
    style: {
      "mso-table-lspace": "0pt",
      "mso-table-rspace": "0pt",
      "font-weight": "400",
      "text-align": "left",
      "vertical-align": "top",
      "border-top": "0px",
      "border-right": "0px",
      "border-bottom": "0px",
      "border-left": "0px"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", {
    border: "0",
    cellpadding: "0",
    cellspacing: "0",
    "class": "paragraph_block",
    role: "presentation",
    style: {
      "mso-table-lspace": "0pt",
      "mso-table-rspace": "0pt",
      "padding-left": "20px"
    },
    width: "100%"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    style: {
      "padding-top": "40px",
      "padding-left": "20px"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    style: {
      "color": "#000000",
      "font-size": "13px",
      "font-family": "Arial,",
      "font-weight": "400",
      "line-height": "120%",
      "text-align": "left",
      "direction": "ltr",
      "letter-spacing": "0px"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://www.linkpicture.com/q/map_5.png",
    alt: ""
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "010 000, г. Нур-Султан, пр. Женис, 11")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    style: {
      "padding-top": "5px",
      "padding-left": "20px"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    style: {
      "color": "#000000",
      "font-size": "13px",
      "font-family": "Arial,",
      "font-weight": "400",
      "line-height": "16px",
      "text-align": "left",
      "direction": "ltr",
      "letter-spacing": "0px"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://www.linkpicture.com/q/phone_7.png",
    alt: ""
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "8 (7172) 71 84 63")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    style: {
      "padding-top": "7px",
      "padding-left": "20px"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    style: {
      "font-size": "14px",
      "font-family": "Arial,",
      "font-weight": "400",
      "text-align": "left",
      "direction": "ltr",
      "letter-spacing": "0px",
      "color": "#3a3a3a",
      "opacity": "0.5"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "© 2022 OnBoard")])])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": "column column-2",
    style: {
      "mso-table-lspace": "0pt",
      "mso-table-rspace": "0pt",
      "font-weight": "400",
      "text-align": "left",
      "vertical-align": "top",
      "border-top": "0px",
      "border-right": "0px",
      "border-bottom": "0px",
      "border-left": "0px",
      "padding-right": "20px"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", {
    border: "0",
    cellpadding: "0",
    cellspacing: "0",
    "class": "paragraph_block",
    role: "presentation",
    style: {
      "mso-table-lspace": "0pt",
      "mso-table-rspace": "0pt"
    },
    width: "100%"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    style: {
      "padding-top": "40px",
      "padding-right": "10px",
      "padding-bottom": "15px",
      "padding-left": "10px"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    style: {
      "color": "#000000",
      "font-size": "14px",
      "font-family": "Arial,",
      "font-weight": "400",
      "line-height": "120%",
      "text-align": "right",
      "direction": "ltr",
      "letter-spacing": "0px"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://www.linkpicture.com/q/facebook_48.png",
    alt: ""
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://www.linkpicture.com/q/instagram_8.png",
    alt: ""
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://www.linkpicture.com/q/telegram_3.png",
    alt: ""
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://www.linkpicture.com/q/twitter_8.png",
    alt: ""
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://www.linkpicture.com/q/whatsapp_149.png",
    alt: ""
  })])])])])])])])])])])])])], -1
  /* HOISTED */
  );
});

var _hoisted_24 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", {
    align: "center",
    border: "0",
    cellpadding: "0",
    cellspacing: "0",
    "class": "row",
    role: "presentation",
    style: {
      "mso-table-lspace": "0pt",
      "mso-table-rspace": "0pt",
      "background": "#f0f4f7",
      "max-width": "600px",
      "border-bottom-left-radius": "10px",
      "border-bottom-right-radius": "10px"
    },
    width: "100%"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    style: {
      "text-align": "center",
      "margin-top": "40px",
      "padding-bottom": "60px"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://www.linkpicture.com/q/onboard_1.png",
    alt: ""
  })])])])])], -1
  /* HOISTED */
  );
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $setup.company.logo,
    style: {
      "display": "block",
      "height": "70px",
      "border": "0",
      "width": "70px",
      "max-width": "100%",
      "border-radius": "50%",
      "object-fit": "cover"
    },
    width: "65"
  }, null, 8
  /* PROPS */
  , _hoisted_8)])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.company.company_name), 1
  /* TEXT */
  )])])])])])])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    style: {
      "margin": "0"
    },
    innerHTML: $props.description
  }, null, 8
  /* PROPS */
  , _hoisted_21), _hoisted_22])])])])])])])])])])])])]), _hoisted_23, _hoisted_24])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End ")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/PositionsContent.vue?vue&type=template&id=390624cc":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/PositionsContent.vue?vue&type=template&id=390624cc ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "tab-wrap"
};
var _hoisted_2 = {
  "class": "tab-navigate"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Добавить должность");

var _hoisted_4 = ["onClick"];
var _hoisted_5 = {
  "class": "tab-content"
};
var _hoisted_6 = {
  key: 0,
  "class": "tab-header"
};
var _hoisted_7 = {
  "class": "flex items-center rounded-b-[6px]"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Редактировать", -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "flex items-center rounded-b-[6px]"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Удалить", -1
/* HOISTED */
);

var _hoisted_11 = {
  key: 1,
  "class": "tab-body"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Сохранить");

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Отменить");

var _hoisted_14 = {
  key: 1
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "title"
}, "Описание должности", -1
/* HOISTED */
);

var _hoisted_16 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_el_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-button");

  var _component_unicon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("unicon");

  var _component_el_dropdown_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-dropdown-item");

  var _component_el_dropdown_menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-dropdown-menu");

  var _component_el_dropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-dropdown");

  var _component_el_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-input");

  var _component_el_form_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-form-item");

  var _component_el_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-form");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_button, {
    "class": "w-full",
    color: "#7734FC",
    style: {
      "color": "#fff"
    },
    icon: $setup.CirclePlus,
    onClick: $setup.addTemplate
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["icon"]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.templatesList, function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: item.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["nodes mt-3.5", $setup.currentTemplate ? $setup.currentTemplate.id == item.id ? 'active' : '' : index === 0 ? 'active' : '']),
      onClick: function onClick($event) {
        return $setup.getTemplateInfo(item.id);
      }
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.title), 11
    /* TEXT, CLASS, PROPS */
    , _hoisted_4)]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [$setup.currentTemplate ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.currentTemplate.title), 1
  /* TEXT */
  )]), $setup.edit ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $setup.deleteTemplate($setup.currentTemplate.id);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_unicon, {
    name: "times-circle",
    fill: "red"
  })])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_el_dropdown, {
    key: 1,
    trigger: "click"
  }, {
    dropdown: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_dropdown_menu, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_dropdown_item, {
            onClick: _cache[1] || (_cache[1] = function ($event) {
              return $setup.edit = true;
            })
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_unicon, {
                name: "pen",
                "class": "mr-2",
                fill: "#191B1D"
              }), _hoisted_8])];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_dropdown_item, {
            onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
              return $setup.deleteTemplate($setup.currentTemplate.id);
            }, ["prevent"]))
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_unicon, {
                name: "trash-alt",
                "class": "mr-2",
                fill: " #FF2727"
              }), _hoisted_10])];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_unicon, {
        "class": "row-edit",
        name: "ellipsis-h"
      })];
    }),
    _: 1
    /* STABLE */

  }))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.currentTemplate ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [$setup.edit ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_el_form, {
    key: 0,
    ref: "ruleFormRef2",
    model: $setup.currentTemplate,
    "label-position": "top",
    size: "large",
    "class": "mb-10"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form_item, {
        prop: "title",
        rules: {
          required: true,
          message: 'Обязательное поле',
          trigger: 'blur'
        },
        label: "Тема письма",
        "class": "w-[260px]"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_input, {
            modelValue: $setup.currentTemplate.title,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
              return $setup.currentTemplate.title = $event;
            })
          }, null, 8
          /* PROPS */
          , ["modelValue"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form_item, {
        prop: "description",
        rules: {
          required: true,
          message: 'Обязательное поле',
          trigger: 'blur'
        },
        label: "Описание",
        "class": "w-full"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Editor"], {
            "api-key": "smq93pmzmcw471hivrg6vts22kyeef3k0dejf17b3545v7zw",
            modelValue: $setup.currentTemplate.description,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
              return $setup.currentTemplate.description = $event;
            }),
            init: {
              height: 500,
              menubar: false,
              plugins: ['advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen', 'insertdatetime media table paste code help wordcount'],
              toolbar: 'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help'
            }
          }, null, 8
          /* PROPS */
          , ["modelValue"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_button, {
        type: "primary",
        color: "#FF6854",
        onClick: _cache[5] || (_cache[5] = function ($event) {
          return $setup.updateTemplate($setup.ruleFormRef2);
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_12];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_button, {
        type: "primary",
        color: "#F0F4F7",
        style: {
          "color": "#6d767e"
        },
        onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.cancelUpdate, ["prevent"])
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_13];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["onClick"])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["model"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    innerHTML: $setup.currentTemplate.description
  }, null, 8
  /* PROPS */
  , _hoisted_16)]))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/StagesContent.vue?vue&type=template&id=54695d29":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/StagesContent.vue?vue&type=template&id=54695d29 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "tab-wrap"
};
var _hoisted_2 = {
  "class": "tab-navigate"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Добавить этап");

var _hoisted_4 = {
  "class": "stages"
};
var _hoisted_5 = ["onClick"];
var _hoisted_6 = {
  "class": "stage-num"
};
var _hoisted_7 = {
  "class": "title"
};
var _hoisted_8 = {
  "class": "subtitle"
};
var _hoisted_9 = {
  "class": "tab-content"
};
var _hoisted_10 = {
  key: 0,
  "class": "tab-header"
};
var _hoisted_11 = {
  key: 0
};
var _hoisted_12 = {
  key: 1
};
var _hoisted_13 = {
  "class": "flex items-center rounded-b-[6px]"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Редактировать", -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "flex items-center rounded-b-[6px]"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Удалить", -1
/* HOISTED */
);

var _hoisted_17 = {
  key: 1,
  "class": "tab-body"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "title"
}, "Отображение", -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "titles"
};
var _hoisted_20 = {
  "class": "subtitle"
};
var _hoisted_21 = {
  "class": "flex gap-6"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Сохранить");

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Отменить");

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "el-dialog__title"
}, "Новый этап отбора", -1
/* HOISTED */
);

var _hoisted_25 = {
  "class": "flex gap-6"
};
var _hoisted_26 = {
  "class": "dialog-footer"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Сохранить");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_el_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-button");

  var _component_unicon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("unicon");

  var _component_el_dropdown_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-dropdown-item");

  var _component_el_dropdown_menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-dropdown-menu");

  var _component_el_dropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-dropdown");

  var _component_el_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-input");

  var _component_el_form_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-form-item");

  var _component_el_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-form");

  var _component_el_dialog = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-dialog");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_button, {
    "class": "w-full",
    color: "#7734FC",
    style: {
      "color": "#fff"
    },
    icon: $setup.CirclePlus,
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.addStageModal = true;
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["icon"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.stagesList, function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "stage",
      key: item.id,
      onClick: function onClick($event) {
        return $setup.getStageInfo(item.id);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(index), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["stage-name", $setup.currentStage ? $setup.currentStage.id == item.id ? 'active' : '' : index === 0 ? 'active' : ''])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "color",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)("background-color: ".concat(item.color))
    }, null, 4
    /* STYLE */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.title), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.subtitle), 1
    /* TEXT */
    )])], 2
    /* CLASS */
    )], 8
    /* PROPS */
    , _hoisted_5);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [$setup.currentStage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, [$setup.edit ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_11, " Настройка этапа -")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_12)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.stagesList.find(function (item) {
    return item.id === $setup.currentStage.id;
  }).title), 1
  /* TEXT */
  )]), $setup.edit ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $setup.deleteStage($setup.currentStage.id);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_unicon, {
    name: "times-circle",
    fill: "red"
  })])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_el_dropdown, {
    key: 1,
    trigger: "click"
  }, {
    dropdown: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_dropdown_menu, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_dropdown_item, {
            onClick: _cache[2] || (_cache[2] = function ($event) {
              return $setup.edit = true;
            })
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_unicon, {
                name: "pen",
                "class": "mr-2",
                fill: "#191B1D"
              }), _hoisted_14])];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_dropdown_item, {
            onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
              return $setup.deleteStage($setup.currentStage.id);
            }, ["prevent"]))
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_unicon, {
                name: "trash-alt",
                "class": "mr-2",
                fill: " #FF2727"
              }), _hoisted_16])];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_unicon, {
        "class": "row-edit",
        name: "ellipsis-h"
      })];
    }),
    _: 1
    /* STABLE */

  }))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.currentStage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_17, [_hoisted_18, !$setup.edit ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "stage-card",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)("background-color: ".concat($setup.currentStage.color))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.currentStage.title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.currentStage.subtitle), 1
  /* TEXT */
  )], 4
  /* STYLE */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_el_form, {
    key: 1,
    ref: "ruleFormRef2",
    model: $setup.currentStage,
    "label-position": "top",
    size: "large"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form_item, {
        prop: "title",
        rules: {
          required: true,
          message: 'Обязательное поле',
          trigger: 'blur'
        },
        label: "Заголовок этапа",
        "class": "w-[260px]"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_input, {
            modelValue: $setup.currentStage.title,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
              return $setup.currentStage.title = $event;
            })
          }, null, 8
          /* PROPS */
          , ["modelValue"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form_item, {
        label: "Подзаголовок этапа",
        "class": "w-[260px]"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_input, {
            modelValue: $setup.currentStage.subtitle,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
              return $setup.currentStage.subtitle = $event;
            })
          }, null, 8
          /* PROPS */
          , ["modelValue"])];
        }),
        _: 1
        /* STABLE */

      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form_item, {
        prop: "color",
        rules: {
          required: true,
          message: 'Обязательное поле',
          trigger: 'blur'
        },
        label: "Цвет",
        "class": "w-[150px]"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_input, {
            modelValue: $setup.currentStage.color,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
              return $setup.currentStage.color = $event;
            }),
            type: "color"
          }, null, 8
          /* PROPS */
          , ["modelValue"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_button, {
        type: "primary",
        color: "#FF6854",
        onClick: _cache[7] || (_cache[7] = function ($event) {
          return $setup.updateStage($setup.ruleFormRef2);
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_22];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_button, {
        type: "primary",
        color: "#F0F4F7",
        style: {
          "color": "#6d767e"
        },
        onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.cancelUpdate, ["prevent"])
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_23];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["onClick"])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["model"])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["StructureUsers"], {
    style: 'mt-10',
    title: "Доступы",
    allUsers: $setup.allUsers,
    structureUsers: $setup.currentStage.stage_users,
    columns: $setup.columns,
    allUsersColumn: $setup.columns2,
    currentTitle: $setup.currentStage.title,
    onGetUsers: $setup.addUsers,
    onDeleteUser: $setup.deleteUser
  }, null, 8
  /* PROPS */
  , ["allUsers", "structureUsers", "columns", "allUsersColumn", "currentTitle"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_dialog, {
    modelValue: $setup.addStageModal,
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $setup.addStageModal = $event;
    }),
    "custom-class": "text-left",
    width: "max-content"
  }, {
    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_24];
    }),
    footer: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_button, {
        type: "primary",
        onClick: _cache[11] || (_cache[11] = function ($event) {
          return $setup.submitForm($setup.ruleFormRef);
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_27];
        }),
        _: 1
        /* STABLE */

      })])];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form, {
        ref: "ruleFormRef",
        model: $setup.stages,
        "label-position": "top",
        size: "large"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form_item, {
            prop: "title",
            rules: {
              required: true,
              message: 'Обязательное поле',
              trigger: 'blur'
            },
            label: "Заголовок этапа",
            "class": "w-[260px]"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_input, {
                modelValue: $setup.stages.title,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
                  return $setup.stages.title = $event;
                })
              }, null, 8
              /* PROPS */
              , ["modelValue"])];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form_item, {
            label: "Подзаголовок этапа",
            "class": "w-[260px]"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_input, {
                modelValue: $setup.stages.subtitle,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
                  return $setup.stages.subtitle = $event;
                })
              }, null, 8
              /* PROPS */
              , ["modelValue"])];
            }),
            _: 1
            /* STABLE */

          })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form_item, {
            prop: "color",
            rules: {
              required: true,
              message: 'Обязательное поле',
              trigger: 'blur'
            },
            label: "Цвет",
            "class": "w-[150px]"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_input, {
                modelValue: $setup.stages.color,
                "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
                  return $setup.stages.color = $event;
                }),
                type: "color"
              }, null, 8
              /* PROPS */
              , ["modelValue"])];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["model"])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/StructureContent.vue?vue&type=template&id=1d607cf1":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/StructureContent.vue?vue&type=template&id=1d607cf1 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "tab-wrap"
};
var _hoisted_2 = {
  "class": "tab-navigate"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Добавить департамент");

var _hoisted_4 = ["onClick"];
var _hoisted_5 = {
  "class": "flex items-center mt-4"
};
var _hoisted_6 = ["onClick"];

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/users.svg",
  alt: ""
}, null, -1
/* HOISTED */
);

var _hoisted_8 = {
  key: 0
};
var _hoisted_9 = {
  "class": "nodes-wrap"
};
var _hoisted_10 = ["onClick"];

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "mt-2.5",
  src: "/images/users.svg",
  alt: ""
}, null, -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "nodes-children"
};
var _hoisted_13 = {
  "class": "nodes-wrap nodes-wrap__last"
};
var _hoisted_14 = ["onClick"];

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Добавить департамент ");

var _hoisted_16 = {
  key: 1
};
var _hoisted_17 = {
  "class": "nodes-children"
};
var _hoisted_18 = {
  "class": "nodes-wrap nodes-wrap__last"
};
var _hoisted_19 = ["onClick"];

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Добавить департамент ");

var _hoisted_21 = {
  "class": "tab-content"
};
var _hoisted_22 = {
  key: 0,
  "class": "tab-header"
};
var _hoisted_23 = {
  "class": "flex items-center rounded-b-[6px]"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Редактировать", -1
/* HOISTED */
);

var _hoisted_25 = {
  "class": "flex items-center rounded-b-[6px]"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Удалить", -1
/* HOISTED */
);

var _hoisted_27 = {
  key: 1,
  "class": "tab-body"
};
var _hoisted_28 = {
  "class": "flex gap-6"
};

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Сохранить");

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Отменить");

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "el-dialog__title"
}, "Новое подразделение", -1
/* HOISTED */
);

var _hoisted_32 = {
  "class": "flex gap-6"
};
var _hoisted_33 = {
  "class": "dialog-footer"
};

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Сохранить");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_el_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-button");

  var _component_el_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-icon");

  var _component_unicon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("unicon");

  var _component_el_dropdown_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-dropdown-item");

  var _component_el_dropdown_menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-dropdown-menu");

  var _component_el_dropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-dropdown");

  var _component_el_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-input");

  var _component_el_form_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-form-item");

  var _component_el_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-form");

  var _component_el_dialog = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-dialog");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_button, {
    "class": "w-full",
    color: "#7734FC",
    style: {
      "color": "#fff"
    },
    icon: $setup.CirclePlus,
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.addStructureModal = true;
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["icon"]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.structuresList, function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: item.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["nodes mt-3.5", $setup.currentStructure ? $setup.currentStructure.id == item.id ? 'active' : '' : index === 0 ? 'active' : '']),
      onClick: function onClick($event) {
        return $setup.getStructureInfo(item.id);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name) + " ", 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      onClick: function onClick($event) {
        return $setup.toggle(item.id);
      },
      "class": "mr-2.5"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_icon, null, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ArrowDown"])];
      }),
      _: 1
      /* STABLE */

    })], 8
    /* PROPS */
    , _hoisted_6), _hoisted_7])], 10
    /* CLASS, PROPS */
    , _hoisted_4), item.toggle ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(item.children, function (child) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        "class": "nodes-children",
        key: child.id
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["nodes nodes-child", $setup.currentStructure ? $setup.currentStructure.id == child.id ? 'active' : '' : index === 0 ? 'active' : '']),
        onClick: function onClick($event) {
          return $setup.getStructureInfo(child.id);
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(child.name) + " ", 1
      /* TEXT */
      ), _hoisted_11], 10
      /* CLASS, PROPS */
      , _hoisted_10)])]);
    }), 128
    /* KEYED_FRAGMENT */
    )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "nodes nodes-child nodes-add",
      onClick: function onClick($event) {
        return $setup.append(item);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_icon, {
      color: "#7734FC"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["CirclePlus"])];
      }),
      _: 1
      /* STABLE */

    }), _hoisted_15], 8
    /* PROPS */
    , _hoisted_14)])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.currentStructure && item.id === $setup.currentStructure.id && !item.toggle ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "nodes nodes-child nodes-add",
      onClick: function onClick($event) {
        return $setup.append(item);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_icon, {
      color: "#7734FC"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["CirclePlus"])];
      }),
      _: 1
      /* STABLE */

    }), _hoisted_20], 8
    /* PROPS */
    , _hoisted_19)])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [$setup.currentStructure ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.currentStructure.name), 1
  /* TEXT */
  )]), $setup.edit ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $setup.deleteStructure($setup.currentStructure.id);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_unicon, {
    name: "times-circle",
    fill: "red"
  })])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_el_dropdown, {
    key: 1,
    trigger: "click"
  }, {
    dropdown: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_dropdown_menu, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_dropdown_item, {
            onClick: _cache[2] || (_cache[2] = function ($event) {
              return $setup.edit = true;
            })
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_unicon, {
                name: "pen",
                "class": "mr-2",
                fill: "#191B1D"
              }), _hoisted_24])];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_dropdown_item, {
            onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
              return $setup.deleteStructure($setup.currentStructure.id);
            }, ["prevent"]))
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_unicon, {
                name: "trash-alt",
                "class": "mr-2",
                fill: " #FF2727"
              }), _hoisted_26])];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_unicon, {
        "class": "row-edit",
        name: "ellipsis-h"
      })];
    }),
    _: 1
    /* STABLE */

  }))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.currentStructure ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_27, [$setup.edit ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_el_form, {
    key: 0,
    ref: "ruleFormRef2",
    model: $setup.currentStructure,
    "label-position": "top",
    size: "large",
    "class": "mb-10"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form_item, {
        prop: "name",
        rules: {
          required: true,
          message: 'Обязательное поле',
          trigger: 'blur'
        },
        label: "Название",
        "class": "w-[260px]"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_input, {
            modelValue: $setup.currentStructure.name,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
              return $setup.currentStructure.name = $event;
            })
          }, null, 8
          /* PROPS */
          , ["modelValue"])];
        }),
        _: 1
        /* STABLE */

      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_button, {
        type: "primary",
        color: "#FF6854",
        onClick: _cache[5] || (_cache[5] = function ($event) {
          return $setup.updateStructure($setup.ruleFormRef2);
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_29];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_button, {
        type: "primary",
        color: "#F0F4F7",
        style: {
          "color": "#6d767e"
        },
        onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.cancelUpdate, ["prevent"])
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_30];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["onClick"])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["model"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["StructureUsers"], {
    title: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 (".concat($setup.currentStructure.structure_users.length, ")"),
    allUsers: $setup.allUsers,
    structureUsers: $setup.currentStructure.structure_users,
    columns: $setup.columns,
    allUsersColumn: $setup.columns2,
    currentTitle: "asdas",
    onGetUsers: $setup.addUsers,
    onDeleteUser: $setup.deleteUser
  }, null, 8
  /* PROPS */
  , ["title", "allUsers", "structureUsers", "columns", "allUsersColumn"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_dialog, {
    modelValue: $setup.addStructureModal,
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $setup.addStructureModal = $event;
    }),
    "custom-class": "text-left",
    width: "max-content"
  }, {
    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_31];
    }),
    footer: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_button, {
        type: "primary",
        onClick: _cache[7] || (_cache[7] = function ($event) {
          return $setup.submitForm($setup.ruleFormRef);
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_34];
        }),
        _: 1
        /* STABLE */

      })])];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form, {
        ref: "ruleFormRef",
        model: $setup.stages,
        "label-position": "top",
        size: "large"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form_item, {
            prop: "name",
            rules: {
              required: true,
              message: 'Обязательное поле',
              trigger: 'blur'
            },
            label: "Название",
            "class": "w-[260px]"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_input, {
                modelValue: $setup.stages.name,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
                  return $setup.stages.name = $event;
                })
              }, null, 8
              /* PROPS */
              , ["modelValue"])];
            }),
            _: 1
            /* STABLE */

          })])];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["model"])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/StructureUsers.vue?vue&type=template&id=6194e200":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/StructureUsers.vue?vue&type=template&id=6194e200 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex gap-2.5 mb-5"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Добавить сотрудника");

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Пусто");

var _hoisted_4 = {
  key: 0
};
var _hoisted_5 = {
  key: 1,
  "class": "edit-buttons"
};
var _hoisted_6 = ["onClick"];
var _hoisted_7 = {
  key: 2
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "el-dialog__title"
}, "Добавить доступ", -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "text-sm font-normal mt-3"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Пусто");

var _hoisted_12 = {
  key: 0
};
var _hoisted_13 = {
  "class": "user-card flex items-center"
};
var _hoisted_14 = {
  "class": "dialog-footer"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Сохранить");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_el_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-icon");

  var _component_el_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-input");

  var _component_el_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-button");

  var _component_unicon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("unicon");

  var _component_vue_good_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vue-good-table");

  var _component_el_avatar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-avatar");

  var _component_el_form_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-form-item");

  var _component_el_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-form");

  var _component_el_dialog = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-dialog");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["title", $props.style])
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.title), 3
  /* TEXT, CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_input, {
    modelValue: $setup.searchTerm,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.searchTerm = $event;
    }),
    "class": "!w-[260px]",
    placeholder: "Поиск по таблице"
  }, {
    prefix: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_icon, {
        "class": "el-input__icon"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Search"])];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_button, {
    type: "primary",
    color: "#DBE4EB",
    style: {
      "color": "#191b1d"
    },
    icon: $setup.CirclePlus,
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.addUserToStageModal = true;
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_2];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["icon"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vue_good_table, {
    columns: $props.columns,
    rows: $props.structureUsers,
    "line-numbers": true,
    "search-options": {
      enabled: true,
      externalQuery: $setup.searchTerm
    },
    "pagination-options": {
      enabled: true,
      mode: 'pages',
      rowsPerPageLabel: 'Записей на странице',
      perPageDropdown: [20, 40, 50],
      nextLabel: '',
      prevLabel: '',
      pageLabel: '',
      ofLabel: 'из'
    },
    styleClass: "vgt-table bordered lll"
  }, {
    emptystate: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3];
    }),
    "table-row": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (props) {
      return [props.column.field == 'surname' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(props.row.user.surname) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(props.row.user.name), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), props.column.field == 'edit' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return $setup.deleteUser(props.row.id);
        }, ["prevent"])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_unicon, {
        name: "times-circle",
        fill: "red"
      })], 8
      /* PROPS */
      , _hoisted_6)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(props.formattedRow[props.column.field]), 1
      /* TEXT */
      ))];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["columns", "rows", "search-options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_dialog, {
    modelValue: $setup.addUserToStageModal,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.addUserToStageModal = $event;
    }),
    "custom-class": "text-left addUser",
    width: "30%"
  }, {
    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_8, _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_10, "Этап - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.currentTitle), 1
      /* TEXT */
      )];
    }),
    footer: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_button, {
        type: "primary",
        onClick: $setup.addUserToStage
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_15];
        }),
        _: 1
        /* STABLE */

      })])];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form, {
        ref: "ruleFormRef3",
        model: _ctx.stages,
        "label-position": "top",
        size: "large"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form_item, null, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vue_good_table, {
                columns: $props.allUsersColumn,
                rows: $props.allUsers,
                "line-numbers": false,
                "select-options": {
                  enabled: true
                },
                "search-options": {
                  enabled: true,
                  externalQuery: $setup.searchTerm
                },
                "pagination-options": {
                  enabled: false
                },
                styleClass: "vgt-table bordered lll",
                ref: "myTable"
              }, {
                emptystate: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_11];
                }),
                "table-row": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (props) {
                  return [props.column.field == 'surname' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_avatar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(props.row.surname) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(props.row.name), 1
                  /* TEXT */
                  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(props.row.detail !== null ? props.row.detail.structure.name : ""), 1
                  /* TEXT */
                  )])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
                }),
                _: 1
                /* STABLE */

              }, 8
              /* PROPS */
              , ["columns", "rows", "search-options"])];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["model"])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/hrd/settings/Stages.vue?vue&type=template&id=45087973":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/hrd/settings/Stages.vue?vue&type=template&id=45087973 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "page-content"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_el_tab_pane = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-tab-pane");

  var _component_el_tabs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-tabs");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_tabs, {
    modelValue: $setup.activeName,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.activeName = $event;
    }),
    "class": "demo-tabs",
    onTabClick: $setup.handleClick
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_tab_pane, {
        lazy: "",
        label: "Этапы отбора",
        name: "setting/stages"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["StagesContent"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_tab_pane, {
        lazy: "",
        label: "Шаблоны писем",
        name: "company"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["EmailContent"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_tab_pane, {
        lazy: "",
        label: "Структура компании",
        name: "setting/structure"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["StructureContent"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_tab_pane, {
        lazy: "",
        label: "Должности",
        name: "setting/positions"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["PositionsContent"])];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/EmailContent.vue?vue&type=style&index=0&id=bddc06b0&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/EmailContent.vue?vue&type=style&index=0&id=bddc06b0&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".description * {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 16px;\n  margin: 0;\n  color: #6d767e;\n}\n.nodes {\n  background: #ffffff;\n  border: 1px solid #c4d1d9;\n  border-radius: 10px;\n  padding: 20px 16px;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 16px;\n  cursor: pointer;\n  color: #191b1d;\n}\n.nodes.active {\n  background: rgba(119, 52, 252, 0.1);\n  border: 1px solid #7734fc;\n}\n.nodes-child {\n  margin-left: 30px;\n  position: relative;\n}\n.nodes-wrap {\n  position: relative;\n  padding-top: 15px;\n}\n.nodes-wrap::before {\n  content: \"\";\n  position: absolute;\n  left: 13px;\n  top: calc(60%);\n  width: 17px;\n  height: 0;\n  border-top: 1px solid #c4d1d9;\n}\n.nodes-wrap::after {\n  content: \"\";\n  position: absolute;\n  left: 13px;\n  top: 0;\n  width: 1px;\n  height: 100%;\n  border-right: 1px solid #c4d1d9;\n}\n.nodes-wrap__last::after {\n  content: \"\";\n  position: absolute;\n  left: 13px;\n  top: 0;\n  width: 1px;\n  height: 60%;\n  border-right: 1px solid #c4d1d9;\n}\n.nodes-add {\n  padding: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #7734fc;\n  font-weight: 400;\n  font-size: 12.5px;\n  line-height: 15px;\n  cursor: pointer;\n}\n.nodes-add .el-icon {\n  margin-right: 5px;\n}\n.nodes-add:hover {\n  background: rgba(119, 52, 252, 0.1);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/PositionsContent.vue?vue&type=style&index=0&id=390624cc&lang=scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/PositionsContent.vue?vue&type=style&index=0&id=390624cc&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".description * {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 16px;\n  margin: 0;\n  color: #6d767e;\n}\n.nodes {\n  background: #ffffff;\n  border: 1px solid #c4d1d9;\n  border-radius: 10px;\n  padding: 13px 16px;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 16px;\n  cursor: pointer;\n  color: #191b1d;\n}\n.nodes.active {\n  background: rgba(119, 52, 252, 0.1);\n  border: 1px solid #7734fc;\n}\n.nodes-child {\n  margin-left: 30px;\n  position: relative;\n}\n.nodes-wrap {\n  position: relative;\n  padding-top: 15px;\n}\n.nodes-wrap::before {\n  content: \"\";\n  position: absolute;\n  left: 13px;\n  top: calc(60%);\n  width: 17px;\n  height: 0;\n  border-top: 1px solid #c4d1d9;\n}\n.nodes-wrap::after {\n  content: \"\";\n  position: absolute;\n  left: 13px;\n  top: 0;\n  width: 1px;\n  height: 100%;\n  border-right: 1px solid #c4d1d9;\n}\n.nodes-wrap__last::after {\n  content: \"\";\n  position: absolute;\n  left: 13px;\n  top: 0;\n  width: 1px;\n  height: 60%;\n  border-right: 1px solid #c4d1d9;\n}\n.nodes-add {\n  padding: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #7734fc;\n  font-weight: 400;\n  font-size: 12.5px;\n  line-height: 15px;\n  cursor: pointer;\n}\n.nodes-add .el-icon {\n  margin-right: 5px;\n}\n.nodes-add:hover {\n  background: rgba(119, 52, 252, 0.1);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/StructureContent.vue?vue&type=style&index=0&id=1d607cf1&lang=scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/StructureContent.vue?vue&type=style&index=0&id=1d607cf1&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".nodes {\n  background: #ffffff;\n  border: 1px solid #c4d1d9;\n  border-radius: 10px;\n  padding: 20px 16px;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 16px;\n  cursor: pointer;\n  color: #191b1d;\n}\n.nodes.active {\n  background: rgba(119, 52, 252, 0.1);\n  border: 1px solid #7734fc;\n}\n.nodes-child {\n  margin-left: 30px;\n  position: relative;\n}\n.nodes-wrap {\n  position: relative;\n  padding-top: 15px;\n}\n.nodes-wrap::before {\n  content: \"\";\n  position: absolute;\n  left: 13px;\n  top: calc(60%);\n  width: 17px;\n  height: 0;\n  border-top: 1px solid #c4d1d9;\n}\n.nodes-wrap::after {\n  content: \"\";\n  position: absolute;\n  left: 13px;\n  top: 0;\n  width: 1px;\n  height: 100%;\n  border-right: 1px solid #c4d1d9;\n}\n.nodes-wrap__last::after {\n  content: \"\";\n  position: absolute;\n  left: 13px;\n  top: 0;\n  width: 1px;\n  height: 60%;\n  border-right: 1px solid #c4d1d9;\n}\n.nodes-add {\n  padding: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #7734fc;\n  font-weight: 400;\n  font-size: 12.5px;\n  line-height: 15px;\n  cursor: pointer;\n}\n.nodes-add .el-icon {\n  margin-right: 5px;\n}\n.nodes-add:hover {\n  background: rgba(119, 52, 252, 0.1);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/hrd/settings/Stages.vue?vue&type=style&index=0&id=45087973&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/hrd/settings/Stages.vue?vue&type=style&index=0&id=45087973&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".user-card h4 {\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 17px;\n  color: #191b1d;\n  margin-bottom: 4px;\n}\n.user-card p {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 16px;\n  color: #6d767e;\n}\n.user-card .el-avatar {\n  margin-right: 12px;\n}\n.addUser .vgt-responsive {\n  border-radius: 0;\n}\n.addUser .vgt-selection-info-row {\n  display: none;\n}\n.addUser .vgt-table thead th,\n.addUser .vgt-table th.vgt-checkbox-col {\n  background: transparent;\n}\n.addUser .vgt-table.bordered td,\n.addUser .vgt-table.bordered th {\n  border: none;\n}\n.addUser .vgt-table.bordered th {\n  padding-left: 20px;\n}\n.addUser .vgt-table.bordered tr {\n  border-top: 1px solid #dcdfe6;\n  border-bottom: 1px solid #dcdfe6;\n}\n.addUser .vgt-responsive thead {\n  display: none !important;\n}\n.addUser .vgt-wrap {\n  width: 100%;\n}\n.addUser .el-dialog__body {\n  padding-left: 0;\n  padding-right: 0;\n}\n.stage-card {\n  height: 55px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 5px 21px;\n  border-radius: 10px;\n  background: #fff;\n  width: 241px;\n}\n.stage-card .titles {\n  font-weight: 700;\n  font-size: 13px;\n  line-height: 16px;\n  color: #191b1d;\n}\n.stage-card .subtitle {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 15px;\n  color: #6d767e;\n}\n.el-tabs__header {\n  margin-bottom: 0;\n}\n.tab-wrap {\n  height: 100vh;\n  display: flex;\n}\n.tab-navigate {\n  width: 320px;\n  min-width: 320px;\n  height: 100%;\n  margin-top: 20px;\n  padding-right: 20px;\n}\n.tab-content {\n  height: 100%;\n  width: 100%;\n  border-left: 1px solid #dbe4eb;\n}\n.tab-content .tab-header {\n  width: 100%;\n  padding: 21px 20px;\n  background: #f0f4f7;\n  display: flex;\n  align-items: center;\n}\n.tab-content .tab-header h3 {\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 19px;\n  color: #191b1d;\n  margin-right: 15px;\n}\n.tab-content .tab-body {\n  padding: 30px 20px;\n}\n.tab-content .tab-body .title {\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 19px;\n  color: #6d767e;\n  margin-bottom: 15px;\n}\n.stages {\n  margin-top: 20px;\n}\n.stage {\n  display: flex;\n  align-items: center;\n  margin-bottom: 15px;\n  cursor: pointer;\n}\n.stage-num {\n  background: #f0f4f7;\n  border-radius: 8px;\n  width: 23px;\n  height: 24px;\n  min-width: 23px;\n  min-height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  font-weight: 700;\n  font-size: 13px;\n  line-height: 16px;\n}\n.stage-name {\n  display: flex;\n  align-items: center;\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: 10px;\n  width: 100%;\n  padding: 16px 19px;\n  min-height: 60px;\n}\n.stage-name.active {\n  background: rgba(119, 52, 252, 0.08);\n  border: 1px solid #7734fc;\n}\n.stage-name .color {\n  width: 16px;\n  height: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  margin-right: 16px;\n  background: #dbe4eb;\n  border-radius: 50%;\n}\n.stage-name .title {\n  font-weight: 700;\n  font-size: 13px;\n  line-height: 16px;\n  color: #191b1d;\n}\n.stage-name .subtitle {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 15px;\n  color: #6d767e;\n}\n.stage:hover .stage-name {\n  border: 1px solid #7734fc;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/EmailHtml.vue?vue&type=style&index=0&id=03a3fbe8&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/EmailHtml.vue?vue&type=style&index=0&id=03a3fbe8&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nimg[data-v-03a3fbe8] {\n    max-width: unset;\n    margin-right: 5px;\n    display: unset;\n}\n#MessageViewBody a[data-v-03a3fbe8] {\n    color: inherit;\n    text-decoration: none;\n}\np[data-v-03a3fbe8] {\n    line-height: inherit;\n}\n@media (max-width: 620px) {\n.icons-inner[data-v-03a3fbe8] {\n        text-align: center;\n}\n.icons-inner td[data-v-03a3fbe8] {\n        margin: 0 auto;\n}\n.row-content[data-v-03a3fbe8] {\n        width: 100% !important;\n}\n.column .border[data-v-03a3fbe8] {\n        display: none;\n}\n.stack .column[data-v-03a3fbe8] {\n        width: 100%;\n        display: block;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/EmailContent.vue?vue&type=style&index=0&id=bddc06b0&lang=scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/EmailContent.vue?vue&type=style&index=0&id=bddc06b0&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EmailContent_vue_vue_type_style_index_0_id_bddc06b0_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EmailContent.vue?vue&type=style&index=0&id=bddc06b0&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/EmailContent.vue?vue&type=style&index=0&id=bddc06b0&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EmailContent_vue_vue_type_style_index_0_id_bddc06b0_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EmailContent_vue_vue_type_style_index_0_id_bddc06b0_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/PositionsContent.vue?vue&type=style&index=0&id=390624cc&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/PositionsContent.vue?vue&type=style&index=0&id=390624cc&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PositionsContent_vue_vue_type_style_index_0_id_390624cc_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PositionsContent.vue?vue&type=style&index=0&id=390624cc&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/PositionsContent.vue?vue&type=style&index=0&id=390624cc&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PositionsContent_vue_vue_type_style_index_0_id_390624cc_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PositionsContent_vue_vue_type_style_index_0_id_390624cc_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/StructureContent.vue?vue&type=style&index=0&id=1d607cf1&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/StructureContent.vue?vue&type=style&index=0&id=1d607cf1&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StructureContent_vue_vue_type_style_index_0_id_1d607cf1_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./StructureContent.vue?vue&type=style&index=0&id=1d607cf1&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/StructureContent.vue?vue&type=style&index=0&id=1d607cf1&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StructureContent_vue_vue_type_style_index_0_id_1d607cf1_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StructureContent_vue_vue_type_style_index_0_id_1d607cf1_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/hrd/settings/Stages.vue?vue&type=style&index=0&id=45087973&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/hrd/settings/Stages.vue?vue&type=style&index=0&id=45087973&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Stages_vue_vue_type_style_index_0_id_45087973_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Stages.vue?vue&type=style&index=0&id=45087973&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/hrd/settings/Stages.vue?vue&type=style&index=0&id=45087973&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Stages_vue_vue_type_style_index_0_id_45087973_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Stages_vue_vue_type_style_index_0_id_45087973_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/EmailHtml.vue?vue&type=style&index=0&id=03a3fbe8&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/EmailHtml.vue?vue&type=style&index=0&id=03a3fbe8&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EmailHtml_vue_vue_type_style_index_0_id_03a3fbe8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EmailHtml.vue?vue&type=style&index=0&id=03a3fbe8&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/EmailHtml.vue?vue&type=style&index=0&id=03a3fbe8&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EmailHtml_vue_vue_type_style_index_0_id_03a3fbe8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EmailHtml_vue_vue_type_style_index_0_id_03a3fbe8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/company/settings/stages/EmailContent.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/company/settings/stages/EmailContent.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EmailContent_vue_vue_type_template_id_bddc06b0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailContent.vue?vue&type=template&id=bddc06b0 */ "./resources/js/components/company/settings/stages/EmailContent.vue?vue&type=template&id=bddc06b0");
/* harmony import */ var _EmailContent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailContent.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/company/settings/stages/EmailContent.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _EmailContent_vue_vue_type_style_index_0_id_bddc06b0_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmailContent.vue?vue&type=style&index=0&id=bddc06b0&lang=scss */ "./resources/js/components/company/settings/stages/EmailContent.vue?vue&type=style&index=0&id=bddc06b0&lang=scss");
/* harmony import */ var C_Users_eldar_Documents_OnBoard_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_eldar_Documents_OnBoard_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_EmailContent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_EmailContent_vue_vue_type_template_id_bddc06b0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/company/settings/stages/EmailContent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/company/settings/stages/EmailHtml.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/company/settings/stages/EmailHtml.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EmailHtml_vue_vue_type_template_id_03a3fbe8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailHtml.vue?vue&type=template&id=03a3fbe8&scoped=true */ "./resources/js/components/company/settings/stages/EmailHtml.vue?vue&type=template&id=03a3fbe8&scoped=true");
/* harmony import */ var _EmailHtml_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailHtml.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/company/settings/stages/EmailHtml.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _EmailHtml_vue_vue_type_style_index_0_id_03a3fbe8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmailHtml.vue?vue&type=style&index=0&id=03a3fbe8&scoped=true&lang=css */ "./resources/js/components/company/settings/stages/EmailHtml.vue?vue&type=style&index=0&id=03a3fbe8&scoped=true&lang=css");
/* harmony import */ var C_Users_eldar_Documents_OnBoard_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_eldar_Documents_OnBoard_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_EmailHtml_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_EmailHtml_vue_vue_type_template_id_03a3fbe8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-03a3fbe8"],['__file',"resources/js/components/company/settings/stages/EmailHtml.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/company/settings/stages/PositionsContent.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/company/settings/stages/PositionsContent.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PositionsContent_vue_vue_type_template_id_390624cc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PositionsContent.vue?vue&type=template&id=390624cc */ "./resources/js/components/company/settings/stages/PositionsContent.vue?vue&type=template&id=390624cc");
/* harmony import */ var _PositionsContent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PositionsContent.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/company/settings/stages/PositionsContent.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _PositionsContent_vue_vue_type_style_index_0_id_390624cc_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PositionsContent.vue?vue&type=style&index=0&id=390624cc&lang=scss */ "./resources/js/components/company/settings/stages/PositionsContent.vue?vue&type=style&index=0&id=390624cc&lang=scss");
/* harmony import */ var C_Users_eldar_Documents_OnBoard_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_eldar_Documents_OnBoard_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_PositionsContent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PositionsContent_vue_vue_type_template_id_390624cc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/company/settings/stages/PositionsContent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/company/settings/stages/StagesContent.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/company/settings/stages/StagesContent.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StagesContent_vue_vue_type_template_id_54695d29__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StagesContent.vue?vue&type=template&id=54695d29 */ "./resources/js/components/company/settings/stages/StagesContent.vue?vue&type=template&id=54695d29");
/* harmony import */ var _StagesContent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StagesContent.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/company/settings/stages/StagesContent.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_eldar_Documents_OnBoard_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_eldar_Documents_OnBoard_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_StagesContent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_StagesContent_vue_vue_type_template_id_54695d29__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/company/settings/stages/StagesContent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/company/settings/stages/StructureContent.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/company/settings/stages/StructureContent.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StructureContent_vue_vue_type_template_id_1d607cf1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StructureContent.vue?vue&type=template&id=1d607cf1 */ "./resources/js/components/company/settings/stages/StructureContent.vue?vue&type=template&id=1d607cf1");
/* harmony import */ var _StructureContent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StructureContent.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/company/settings/stages/StructureContent.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _StructureContent_vue_vue_type_style_index_0_id_1d607cf1_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StructureContent.vue?vue&type=style&index=0&id=1d607cf1&lang=scss */ "./resources/js/components/company/settings/stages/StructureContent.vue?vue&type=style&index=0&id=1d607cf1&lang=scss");
/* harmony import */ var C_Users_eldar_Documents_OnBoard_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_eldar_Documents_OnBoard_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_StructureContent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_StructureContent_vue_vue_type_template_id_1d607cf1__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/company/settings/stages/StructureContent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/company/settings/stages/StructureUsers.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/company/settings/stages/StructureUsers.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StructureUsers_vue_vue_type_template_id_6194e200__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StructureUsers.vue?vue&type=template&id=6194e200 */ "./resources/js/components/company/settings/stages/StructureUsers.vue?vue&type=template&id=6194e200");
/* harmony import */ var _StructureUsers_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StructureUsers.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/company/settings/stages/StructureUsers.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_eldar_Documents_OnBoard_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_eldar_Documents_OnBoard_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_StructureUsers_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_StructureUsers_vue_vue_type_template_id_6194e200__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/company/settings/stages/StructureUsers.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/hrd/settings/Stages.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/hrd/settings/Stages.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Stages_vue_vue_type_template_id_45087973__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stages.vue?vue&type=template&id=45087973 */ "./resources/js/pages/hrd/settings/Stages.vue?vue&type=template&id=45087973");
/* harmony import */ var _Stages_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stages.vue?vue&type=script&setup=true&lang=js */ "./resources/js/pages/hrd/settings/Stages.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Stages_vue_vue_type_style_index_0_id_45087973_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stages.vue?vue&type=style&index=0&id=45087973&lang=scss */ "./resources/js/pages/hrd/settings/Stages.vue?vue&type=style&index=0&id=45087973&lang=scss");
/* harmony import */ var C_Users_eldar_Documents_OnBoard_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_eldar_Documents_OnBoard_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Stages_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Stages_vue_vue_type_template_id_45087973__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/hrd/settings/Stages.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/company/settings/stages/EmailContent.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/company/settings/stages/EmailContent.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EmailContent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EmailContent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EmailContent.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/EmailContent.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/company/settings/stages/EmailHtml.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/company/settings/stages/EmailHtml.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EmailHtml_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EmailHtml_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EmailHtml.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/EmailHtml.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/company/settings/stages/PositionsContent.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/company/settings/stages/PositionsContent.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PositionsContent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PositionsContent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PositionsContent.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/PositionsContent.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/company/settings/stages/StagesContent.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/company/settings/stages/StagesContent.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StagesContent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StagesContent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./StagesContent.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/StagesContent.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/company/settings/stages/StructureContent.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/company/settings/stages/StructureContent.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StructureContent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StructureContent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./StructureContent.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/StructureContent.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/company/settings/stages/StructureUsers.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/company/settings/stages/StructureUsers.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StructureUsers_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StructureUsers_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./StructureUsers.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/StructureUsers.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/hrd/settings/Stages.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/hrd/settings/Stages.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Stages_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Stages_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Stages.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/hrd/settings/Stages.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/company/settings/stages/EmailContent.vue?vue&type=template&id=bddc06b0":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/company/settings/stages/EmailContent.vue?vue&type=template&id=bddc06b0 ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EmailContent_vue_vue_type_template_id_bddc06b0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EmailContent_vue_vue_type_template_id_bddc06b0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EmailContent.vue?vue&type=template&id=bddc06b0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/EmailContent.vue?vue&type=template&id=bddc06b0");


/***/ }),

/***/ "./resources/js/components/company/settings/stages/EmailHtml.vue?vue&type=template&id=03a3fbe8&scoped=true":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/company/settings/stages/EmailHtml.vue?vue&type=template&id=03a3fbe8&scoped=true ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EmailHtml_vue_vue_type_template_id_03a3fbe8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EmailHtml_vue_vue_type_template_id_03a3fbe8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EmailHtml.vue?vue&type=template&id=03a3fbe8&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/EmailHtml.vue?vue&type=template&id=03a3fbe8&scoped=true");


/***/ }),

/***/ "./resources/js/components/company/settings/stages/PositionsContent.vue?vue&type=template&id=390624cc":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/company/settings/stages/PositionsContent.vue?vue&type=template&id=390624cc ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PositionsContent_vue_vue_type_template_id_390624cc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PositionsContent_vue_vue_type_template_id_390624cc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PositionsContent.vue?vue&type=template&id=390624cc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/PositionsContent.vue?vue&type=template&id=390624cc");


/***/ }),

/***/ "./resources/js/components/company/settings/stages/StagesContent.vue?vue&type=template&id=54695d29":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/company/settings/stages/StagesContent.vue?vue&type=template&id=54695d29 ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StagesContent_vue_vue_type_template_id_54695d29__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StagesContent_vue_vue_type_template_id_54695d29__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./StagesContent.vue?vue&type=template&id=54695d29 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/StagesContent.vue?vue&type=template&id=54695d29");


/***/ }),

/***/ "./resources/js/components/company/settings/stages/StructureContent.vue?vue&type=template&id=1d607cf1":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/company/settings/stages/StructureContent.vue?vue&type=template&id=1d607cf1 ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StructureContent_vue_vue_type_template_id_1d607cf1__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StructureContent_vue_vue_type_template_id_1d607cf1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./StructureContent.vue?vue&type=template&id=1d607cf1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/StructureContent.vue?vue&type=template&id=1d607cf1");


/***/ }),

/***/ "./resources/js/components/company/settings/stages/StructureUsers.vue?vue&type=template&id=6194e200":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/company/settings/stages/StructureUsers.vue?vue&type=template&id=6194e200 ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StructureUsers_vue_vue_type_template_id_6194e200__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StructureUsers_vue_vue_type_template_id_6194e200__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./StructureUsers.vue?vue&type=template&id=6194e200 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/StructureUsers.vue?vue&type=template&id=6194e200");


/***/ }),

/***/ "./resources/js/pages/hrd/settings/Stages.vue?vue&type=template&id=45087973":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/hrd/settings/Stages.vue?vue&type=template&id=45087973 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Stages_vue_vue_type_template_id_45087973__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Stages_vue_vue_type_template_id_45087973__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Stages.vue?vue&type=template&id=45087973 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/hrd/settings/Stages.vue?vue&type=template&id=45087973");


/***/ }),

/***/ "./resources/js/components/company/settings/stages/EmailContent.vue?vue&type=style&index=0&id=bddc06b0&lang=scss":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/company/settings/stages/EmailContent.vue?vue&type=style&index=0&id=bddc06b0&lang=scss ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EmailContent_vue_vue_type_style_index_0_id_bddc06b0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EmailContent.vue?vue&type=style&index=0&id=bddc06b0&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/EmailContent.vue?vue&type=style&index=0&id=bddc06b0&lang=scss");


/***/ }),

/***/ "./resources/js/components/company/settings/stages/PositionsContent.vue?vue&type=style&index=0&id=390624cc&lang=scss":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/company/settings/stages/PositionsContent.vue?vue&type=style&index=0&id=390624cc&lang=scss ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PositionsContent_vue_vue_type_style_index_0_id_390624cc_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PositionsContent.vue?vue&type=style&index=0&id=390624cc&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/PositionsContent.vue?vue&type=style&index=0&id=390624cc&lang=scss");


/***/ }),

/***/ "./resources/js/components/company/settings/stages/StructureContent.vue?vue&type=style&index=0&id=1d607cf1&lang=scss":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/company/settings/stages/StructureContent.vue?vue&type=style&index=0&id=1d607cf1&lang=scss ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StructureContent_vue_vue_type_style_index_0_id_1d607cf1_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./StructureContent.vue?vue&type=style&index=0&id=1d607cf1&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/StructureContent.vue?vue&type=style&index=0&id=1d607cf1&lang=scss");


/***/ }),

/***/ "./resources/js/pages/hrd/settings/Stages.vue?vue&type=style&index=0&id=45087973&lang=scss":
/*!*************************************************************************************************!*\
  !*** ./resources/js/pages/hrd/settings/Stages.vue?vue&type=style&index=0&id=45087973&lang=scss ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Stages_vue_vue_type_style_index_0_id_45087973_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Stages.vue?vue&type=style&index=0&id=45087973&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/hrd/settings/Stages.vue?vue&type=style&index=0&id=45087973&lang=scss");


/***/ }),

/***/ "./resources/js/components/company/settings/stages/EmailHtml.vue?vue&type=style&index=0&id=03a3fbe8&scoped=true&lang=css":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/company/settings/stages/EmailHtml.vue?vue&type=style&index=0&id=03a3fbe8&scoped=true&lang=css ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EmailHtml_vue_vue_type_style_index_0_id_03a3fbe8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EmailHtml.vue?vue&type=style&index=0&id=03a3fbe8&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/company/settings/stages/EmailHtml.vue?vue&type=style&index=0&id=03a3fbe8&scoped=true&lang=css");


/***/ })

}]);