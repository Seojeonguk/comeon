'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var overlay = require('../el-overlay');
var dialog = require('../el-dialog');
var directives = require('../directives');

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var script = vue.defineComponent({
  name: "ElDrawer",
  components: {
    [overlay.Overlay.name]: overlay.Overlay
  },
  directives: {
    TrapFocus: directives.TrapFocus
  },
  props: {
    modelValue: {
      type: Boolean,
      required: true
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    beforeClose: Function,
    customClass: {
      type: String,
      default: ""
    },
    direction: {
      type: String,
      default: "rtl",
      validator: (val) => {
        return ["ltr", "rtl", "ttb", "btt"].indexOf(val) !== -1;
      }
    },
    showClose: {
      type: Boolean,
      default: true
    },
    size: {
      type: [String, Number],
      default: "30%"
    },
    title: {
      type: String,
      default: ""
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    withHeader: {
      type: Boolean,
      default: true
    },
    openDelay: {
      type: Number,
      default: 0
    },
    closeDelay: {
      type: Number,
      default: 0
    },
    zIndex: Number,
    modal: {
      type: Boolean,
      default: true
    },
    modalFade: {
      type: Boolean,
      default: true
    },
    modalClass: String,
    lockScroll: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    destroyOnClose: {
      type: Boolean,
      default: false
    }
  },
  emits: ["open", "opened", "close", "closed", "update:modelValue"],
  setup(props, ctx) {
    const drawerRef = vue.ref(null);
    return __spreadProps(__spreadValues({}, dialog.useDialog(props, ctx, drawerRef)), {
      drawerRef,
      isHorizontal: vue.computed(() => props.direction === "rtl" || props.direction === "ltr"),
      drawerSize: vue.computed(() => typeof props.size === "number" ? `${props.size}px` : props.size)
    });
  }
});

const _hoisted_1 = {
  key: 0,
  id: "el-drawer__title",
  class: "el-drawer__header"
};
const _hoisted_2 = /* @__PURE__ */ vue.createVNode("i", { class: "el-drawer__close el-icon el-icon-close" }, null, -1);
const _hoisted_3 = {
  key: 1,
  class: "el-drawer__body"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_overlay = vue.resolveComponent("el-overlay");
  const _directive_trap_focus = vue.resolveDirective("trap-focus");
  return vue.openBlock(), vue.createBlock(vue.Teleport, {
    to: "body",
    disabled: !_ctx.appendToBody
  }, [
    vue.createVNode(vue.Transition, {
      name: "el-drawer-fade",
      onAfterEnter: _ctx.afterEnter,
      onAfterLeave: _ctx.afterLeave,
      onBeforeLeave: _ctx.beforeLeave
    }, {
      default: vue.withCtx(() => [
        vue.withDirectives(vue.createVNode(_component_el_overlay, {
          mask: _ctx.modal,
          "overlay-class": _ctx.modalClass,
          "z-index": _ctx.zIndex,
          onClick: _ctx.onModalClick
        }, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createVNode("div", {
              ref: "drawerRef",
              "aria-modal": "true",
              "aria-labelledby": "el-drawer__title",
              "aria-label": _ctx.title,
              class: ["el-drawer", _ctx.direction, _ctx.customClass],
              style: _ctx.isHorizontal ? "width: " + _ctx.drawerSize : "height: " + _ctx.drawerSize,
              role: "dialog",
              onClick: _cache[2] || (_cache[2] = vue.withModifiers(() => {
              }, ["stop"]))
            }, [
              _ctx.withHeader ? (vue.openBlock(), vue.createBlock("header", _hoisted_1, [
                vue.renderSlot(_ctx.$slots, "title", {}, () => [
                  vue.createVNode("span", {
                    role: "heading",
                    title: _ctx.title
                  }, vue.toDisplayString(_ctx.title), 9, ["title"])
                ]),
                _ctx.showClose ? (vue.openBlock(), vue.createBlock("button", {
                  key: 0,
                  "aria-label": "close " + (_ctx.title || "drawer"),
                  class: "el-drawer__close-btn",
                  type: "button",
                  onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleClose && _ctx.handleClose(...args))
                }, [
                  _hoisted_2
                ], 8, ["aria-label"])) : vue.createCommentVNode("v-if", true)
              ])) : vue.createCommentVNode("v-if", true),
              _ctx.rendered ? (vue.openBlock(), vue.createBlock("section", _hoisted_3, [
                vue.renderSlot(_ctx.$slots, "default")
              ])) : vue.createCommentVNode("v-if", true)
            ], 14, ["aria-label"]), [
              [_directive_trap_focus]
            ])
          ]),
          _: 3
        }, 8, ["mask", "overlay-class", "z-index", "onClick"]), [
          [vue.vShow, _ctx.visible]
        ])
      ]),
      _: 1
    }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
  ], 8, ["disabled"]);
}

script.render = render;
script.__file = "packages/drawer/src/index.vue";

script.install = (app) => {
  app.component(script.name, script);
};
const _Drawer = script;

exports.default = _Drawer;
