"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var React = require("react");
var typings = require("./external-variable-editor-label.type");
var EditorManager = require("../../../gaea-editor-manager/gaea-editor-manager");
var index_1 = require('nt-web-tooltip');
var index_2 = require('nt-auto-bind');
require("./external-variable-editor-label.css");
var ExternalVariableEditorLabel = function (_React$Component) {
    (0, _inherits3.default)(ExternalVariableEditorLabel, _React$Component);

    function ExternalVariableEditorLabel() {
        (0, _classCallCheck3.default)(this, ExternalVariableEditorLabel);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ExternalVariableEditorLabel.__proto__ || Object.getPrototypeOf(ExternalVariableEditorLabel)).apply(this, arguments));

        _this.state = new typings.State();
        return _this;
    }

    (0, _createClass3.default)(ExternalVariableEditorLabel, [{
        key: "handleUseVariable",
        value: function handleUseVariable() {
            this.props.ExternalVariableEditorAction.setCurrentEditComponentVariableByField(this.props.editInfo.field, null);
            this.props.ExternalVariableEditorAction.hideCurrentEditTool(this.props.index);
        }
    }, {
        key: "handleCancelVariable",
        value: function handleCancelVariable() {
            this.props.ExternalVariableEditorAction.removeCurrentEditComponentVariableByField(this.props.editInfo.field);
            this.props.ExternalVariableEditorAction.showCurrentEditTool(this.props.index);
        }
    }, {
        key: "render",
        value: function render() {
            var variable = this.props.ExternalVariableEditorStore.variables.get(this.props.ViewportStore.currentEditComponentMapUniqueKey + '_' + this.props.editInfo.field);
            if (variable === undefined) {
                return React.createElement(index_1.Tooltip, { title: "点击使用变量" }, React.createElement("div", { className: "nt-editor-gaea-editor-gaea_editor-components-external_variable_editor_label", onClick: this.handleUseVariable }, React.createElement("i", { className: "fa fa-ravelry" })));
            } else {
                return React.createElement(index_1.Tooltip, { title: "点击使用常量" }, React.createElement("div", { className: "nt-editor-gaea-editor-gaea_editor-components-external_variable_editor_label", onClick: this.handleCancelVariable }, React.createElement("i", { className: "fa fa-font" })));
            }
        }
    }]);
    return ExternalVariableEditorLabel;
}(React.Component);
ExternalVariableEditorLabel.defaultProps = new typings.Props();
ExternalVariableEditorLabel.position = 'editorLabel';
__decorate([index_2.autoBindMethod], ExternalVariableEditorLabel.prototype, "handleUseVariable", null);
__decorate([index_2.autoBindMethod], ExternalVariableEditorLabel.prototype, "handleCancelVariable", null);
ExternalVariableEditorLabel = __decorate([EditorManager.observer(['ViewportStore', 'ExternalVariableEditorAction', 'ExternalVariableEditorStore'])], ExternalVariableEditorLabel);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ExternalVariableEditorLabel;