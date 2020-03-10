var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __makeTemplateObject = undefined && undefined.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var lit_element_1 = require("lit-element");

var class_map_1 = require("lit-html/directives/class-map");

var TButton =
/** @class */
function (_super) {
  __extends(TButton, _super);

  function TButton() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.theme = 'default';
    _this.iconLeft = '';
    _this.iconRight = '';
    _this.iconOnly = false;
    _this.classes = {};
    return _this;
  }

  Object.defineProperty(TButton, "styles", {
    get: function () {
      return lit_element_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      .btn {\n        box-sizing: border-box;\n        margin: 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-radius: 4px;\n        font-size: 14px;\n        font-weight: 500;\n        min-height: 32px;\n        min-width: 96px;\n      }\n      .btn:hover {\n        cursor: pointer;\n      }\n      .btn--sm {\n        min-height: 28px;\n      }\n      .btn--lg {\n        min-height: 40px;\n      }\n      .btn--primary {\n        background-color: #ec1a2e;\n        color: #ffffff;\n        border: 0;\n      }\n      .btn--primary:hover {\n        background-color: #a9000f;\n      }\n      .btn--primary:active {\n        background-color: #76000a;\n      }\n      .btn--primary:disabled {\n        background-color: #ccd9e0;\n        color: #575a65;\n      }\n      .btn--secondary {\n        background-color: #ffffff;\n        color: #ec1a2e;\n        border: 2px solid #ec1a2e;\n      }\n      .btn--link {\n        padding: 0;\n        color: #ec1a2e;\n        border: 0;\n        min-width: 0;\n      }\n      .btn--icon {\n        padding: 0 10px;\n        min-width: 0;\n      }\n      .l-icon {\n        margin-right: 10px;\n      }\n      .r-icon {\n        margin-left: 10px;\n      }\n    "], ["\n      .btn {\n        box-sizing: border-box;\n        margin: 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-radius: 4px;\n        font-size: 14px;\n        font-weight: 500;\n        min-height: 32px;\n        min-width: 96px;\n      }\n      .btn:hover {\n        cursor: pointer;\n      }\n      .btn--sm {\n        min-height: 28px;\n      }\n      .btn--lg {\n        min-height: 40px;\n      }\n      .btn--primary {\n        background-color: #ec1a2e;\n        color: #ffffff;\n        border: 0;\n      }\n      .btn--primary:hover {\n        background-color: #a9000f;\n      }\n      .btn--primary:active {\n        background-color: #76000a;\n      }\n      .btn--primary:disabled {\n        background-color: #ccd9e0;\n        color: #575a65;\n      }\n      .btn--secondary {\n        background-color: #ffffff;\n        color: #ec1a2e;\n        border: 2px solid #ec1a2e;\n      }\n      .btn--link {\n        padding: 0;\n        color: #ec1a2e;\n        border: 0;\n        min-width: 0;\n      }\n      .btn--icon {\n        padding: 0 10px;\n        min-width: 0;\n      }\n      .l-icon {\n        margin-right: 10px;\n      }\n      .r-icon {\n        margin-left: 10px;\n      }\n    "])));
    },
    enumerable: true,
    configurable: true
  });

  TButton.prototype.render = function () {
    this.classes = {
      'btn': true,
      'btn--sm': this.size === 'small',
      'btn--lg': this.size === 'large',
      'btn--primary': this.theme === 'default',
      'btn--secondary': this.theme === 'secondary',
      'btn--link': this.theme === 'link',
      'btn--icon': this.iconOnly
    };
    return lit_element_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      <button class=\"", "\">\n        <span class=\"l-icon\"><slot name=\"l-icon\"></slot></span>\n        <span><slot></slot></span>\n        <span class=\"r-icon\"><slot name=\"r-icon\"></slot></span>\n      </button>\n    "], ["\n      <button class=\"", "\">\n        <span class=\"l-icon\"><slot name=\"l-icon\"></slot></span>\n        <span><slot></slot></span>\n        <span class=\"r-icon\"><slot name=\"r-icon\"></slot></span>\n      </button>\n    "])), class_map_1.classMap(this.classes));
  };

  __decorate([lit_element_1.property({
    type: String
  }), __metadata("design:type", String)], TButton.prototype, "label", void 0);

  __decorate([lit_element_1.property({
    type: String
  }), __metadata("design:type", String)], TButton.prototype, "size", void 0);

  __decorate([lit_element_1.property({
    type: String
  }), __metadata("design:type", String)], TButton.prototype, "theme", void 0);

  __decorate([lit_element_1.property({
    type: String
  }), __metadata("design:type", String)], TButton.prototype, "iconLeft", void 0);

  __decorate([lit_element_1.property({
    type: String
  }), __metadata("design:type", String)], TButton.prototype, "iconRight", void 0);

  __decorate([lit_element_1.property({
    type: Boolean
  }), __metadata("design:type", Boolean)], TButton.prototype, "iconOnly", void 0);

  TButton = __decorate([lit_element_1.customElement("t-button")], TButton);
  return TButton;
}(lit_element_1.LitElement);

exports.TButton = TButton;
var templateObject_1, templateObject_2;

var __extends$1 = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __makeTemplateObject$1 = undefined && undefined.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata$1 = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var lit_element_1$1 = require("lit-element");

require("@material/mwc-icon");

var TButton$1 =
/** @class */
function (_super) {
  __extends$1(TButton, _super);

  function TButton() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.glyph = 'info';
    return _this;
  }

  Object.defineProperty(TButton, "styles", {
    get: function () {
      return lit_element_1$1.css(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject$1(["\n      :host {\n        display: flex;\n      }\n    "], ["\n      :host {\n        display: flex;\n      }\n    "])));
    },
    enumerable: true,
    configurable: true
  });

  TButton.prototype.render = function () {
    return lit_element_1$1.html(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject$1(["\n      <mwc-icon>", "</mwc-icon>\n    "], ["\n      <mwc-icon>", "</mwc-icon>\n    "])), this.glyph);
  };

  __decorate$1([lit_element_1$1.property({
    type: String
  }), __metadata$1("design:type", String)], TButton.prototype, "glyph", void 0);

  TButton = __decorate$1([lit_element_1$1.customElement("t-icon")], TButton);
  return TButton;
}(lit_element_1$1.LitElement);

exports.TButton = TButton$1;
var templateObject_1$1, templateObject_2$1;

var __extends$2 = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __makeTemplateObject$2 = undefined && undefined.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var __decorate$2 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata$2 = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var lit_element_1$2 = require("lit-element");

var TButton$2 =
/** @class */
function (_super) {
  __extends$2(TButton, _super);

  function TButton() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.glyph = 'info';
    return _this;
  }

  Object.defineProperty(TButton, "styles", {
    get: function () {
      return lit_element_1$2.css(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject$2(["\n      :host {\n        display: flex;\n      }\n    "], ["\n      :host {\n        display: flex;\n      }\n    "])));
    },
    enumerable: true,
    configurable: true
  });

  TButton.prototype.render = function () {
    return lit_element_1$2.html(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject$2(["\n      <label>\n        <span><slot></slot></span>\n        <input type=\"text\" />\n      </label>\n    "], ["\n      <label>\n        <span><slot></slot></span>\n        <input type=\"text\" />\n      </label>\n    "])));
  };

  __decorate$2([lit_element_1$2.property({
    type: String
  }), __metadata$2("design:type", String)], TButton.prototype, "glyph", void 0);

  TButton = __decorate$2([lit_element_1$2.customElement("t-input")], TButton);
  return TButton;
}(lit_element_1$2.LitElement);

exports.TButton = TButton$2;
var templateObject_1$2, templateObject_2$2;
//# sourceMappingURL=index.js.map
