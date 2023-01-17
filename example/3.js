const fs = require('fs');
const {parse} = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;

let jscode = fs.readFileSync("./source/3.js", {
    encoding: "utf-8"
});
let ast = parse(jscode);

function _0x562d(_0x43bab0, _0x409c85) {
    var _0x56737b = _0x5673();

    _0x562d = function (_0x562d64, _0x5373fd) {
        _0x562d64 = _0x562d64 - 359;
        var _0x68e716 = _0x56737b[_0x562d64];
        return _0x68e716;
    };

    return _0x562d(_0x43bab0, _0x409c85);
}

function _0x5673() {
    var _0x3a2380 = ['endHandler', 'appendTo', 'observable', './_object-keys-internal', 'mouseLeftClickDataTimer', 'pure', 'currentStyle', 'common', './_property-desc', './_cof', 'DEFAULT', 'insensitive', 'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,', 'link', 'fbcd9d2d', 'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,', 'shumei_captcha_form_result', 'setRegisterData', 'channel', 'domains', '加载失败', 'checkCallback', "<span class=\"shumei_captcha_network_timeout\">", '0px', 'insensitive_success', 'shumei_captcha_reload_btn', "Load failure", 'compatMode', 'errMsg', 'moveHandler', 'answer_', 'open', './_iter-step', 'registerUrl', './_to-primitive', 'base64Encode', 'insensitiveMode', 'fixProduct', 'innerHeight', 'return', "Javascript load failure", 'imagesLoaded', 'returnValue', 'head', '__webdriver_script_function', ":&nbsp;&nbsp; <img src=\"", '点击完成验证', 'stylesheet', 'babel-runtime/helpers/defineProperty', '重置失败', 'getEncryptContent', 'shumei_captcha_slide_wrapper', 'shumei_show', 'htmlNetwork', 'isString', 'createElement', 'virtual', "shumei_captcha_form_result shumei_hide", 'backgroundImage', '_bindNetworkEvent', 'spatial_select', 'Array', 'click', "<div class=\"shumei_captcha_img_loadding_wrapper\">", '请按成语顺序点击', "<div class=\"shumei_captcha_slide_btn\"></div>", 'setDomStyle', 'outerHeight', 'selectHandler', '网络请求异常', "<div class=\"shumei_captcha shumei_captcha_wrapper\">", 'bind', 'entries', 'isObject', 'mouse', '_closeCallback', 'keyboadStatus', 'runBotDetection', '0e2c9f60', 'auto_slide', 'concat', 'product', "<div class=\"shumei_captcha_slide_wrapper\">", '12829ZSuHUx', 'captchaTypeUrl', 'CSS资源加载失败', 'attachEvent', './_has', 'pageY', 'bottom', 'http://', 'insensitive_disabled', '/pr/v1.0.1/img/icon-popup-refresh.png', "<div class=\"shumei_captcha_slide_tips\">", 'isWidthInvalid', '__core-js_shared__', "<div class=\"shumei_captcha shumei_captcha_mask shumei_hide\"></div>", "Config load failure", 'forEach', 'show', 'getAutoSlideDefaultHtml', 'absolute', '</div>', 'onError', 'cellectFullPageData', 'getJSONP', ':&nbsp;&nbsp;', 'captchaEl', '__esModule', '__fxdriver_unwrapped', 'insensitiveEl', 'cache_', 'isExtensible', '/pr/v1.0.1/img/icon-move-square.png', '/pr/v1.0.1/img/icon-default.png', 'maskBindClose', 'default', 'https', 'navigator', 'SMCaptcha', 'global', 'trueHeight', "<div class=\"shumei_captcha_img_wrapper\">", 'shumei_captcha_img_wrapper', './_array-includes', 'findChild', "Css load failure", "<div class=\"shumei_captcha_footer_close_btn\"></div>", 'blockWidth', 'getBoundingClientRect', 'core-js/library/fn/symbol/iterator', 'pageX', 'sshummei', 'name', './smStringify', "%;\" data-index=\"", 'isNumber', 'SERVER_ERROR', 'mouseRightClickDataTimer', './_ctx', 'slide_disabled', 'clearEvent', 'changeRefreshBtnStatus', 'loadCss', 'appId', 'initFreshEvent', './_dom-create', '/pr/v1.0.1/img/icon-cry.png', 'overHandler', 'disableCaptcha', 'closeHandler', '_captcha', 'undefined', 'slideTipsEl', 'defineProperty', 'loadScript', 'babel-runtime/helpers/typeof', 'background-position', '/ca/v2/fverify', 'floatImagePosition', 'mouseover', " is not an object!", 'base64Decode', 'getValidate', "Accessors not supported!", 'hasClass', "<div class=\"shumei_captcha_insensitive_tips\">", "Symbol is not a constructor!", 'slide', 'rel', "<div class=\"shumei_catpcha_footer_wrapper\">", '__key', '__selenium_unwrapped', "        ", '8dde790a', 'fVerifyUrlV2', 'clientHeight', 'symbols', "<div class=\"shumei_captcha_slide_tips_wrapper\">", 'async', 'min', "<a href=\"###\" class=\"shumei_captcha_reload_btn\">", 'getCurrentTime', './_enum-bug-keys', './_object-create', '../pkg/smUtils', './_enum-keys', 'prototype', 'enumerable', 'selectData', 'imageLoadedBgEl', 'hide', '_hidden', 'debug', 'clientY', 'Null', 'core-js/library/fn/object/define-property', 'isIe678', 'getAutoSlidePopupHtml', 'innerWidth', './_to-integer', 'mousemoveDataTimer', 'SDKVER', 'button', "\0\0\0\0\0\0\0\0", 'touchmove', 'sm_', 'mouseMoveY', 'mouseLeftClick', 'userAgent', '&nbsp;', 'sliderPlaceholder', 'mousemoveData', 'slideSlotEl', '52px', 'callee', '1.0.1', 'join', 'isInitialized', 'insensitiveHandler', 'web_mobile', "\" class=\"icon_select_img\"/>", 'fixSize', 'order', './smLoad', 'changeImageStatus', 'removeElement', 'extend', "<input class=\"shumei_captcha_input_rid\" type=\"hidden\" name=\"rid\" value=\"", 'status', './_descriptors', 'bindForm', 'getIterator', './_html', '46f7b863', 'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,', 'touchstart', 'reload', 'ceil', 'apiConf', 'keys', 'saveFullPageData', "<div class=\"shumei_captcha_img_loaded_wrapper shumei_hide\">", 'fpMouseLeftClickY', 'scrollTop', '002d711e', '_config', 'clientX', 'getInsensitiveDefaultHtml', 'ontouchstart', '__selenium_evaluate', 'getElementById', 'boolean', './_wks-ext', 'excuteCallback', 'toLowerCase', './_object-gopd', 'div', 'onReady', 'write', 'appendTo参数异常', '../../modules/web.dom.iterable', '_obj', '9766a85f', '__driver_unwrapped', '_Selenium_IDE_Recorder', 'KEY', 'Firebug', './_object-gopn-ext', 'startHandler', 'getSelectDefaultHtml', 'mouseEndX', '../../modules/_wks-ext', '../core-js/object/define-property', 'addClass', 'Undefined', "<div class=\"shumei_captcha\">", 'mode', 'isBoolean', 'width', 'shumei_captcha_img_load_error_wrapper', '_data', 'mouseRightClick', "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='", 'getElementsByTagName', '[null]', 'floatOutHandler', 'parentNode', 'complete', './_set-to-string-tag', 'errorTips', 'imageFreshBtnEl', 'fromCharCode', '获取配置参数异常', 'closePanelEvent', 'IE_PROTO', 'fpMouseClickHandler', "Please click in order", 'MODULE_NOT_FOUND', 'network', '_formDom', '参数不合法', 'UTF-8', '/ca/v1/fverify', "<div class=\"shumei_captcha shumei_captcha_popup_wrapper shumei_hide\">", 'fpMousemoveX', 'Math', 'core-js/library/fn/get-iterator', 'onSuccess', 'opr', './_object-gpo', 'mouseout', 'type', '/pr/v1.0.1/img/icon-disabled.png', 'init', 'search', './_shared-key', 'footFreshBtnEl', 'loading...', 'fVerifyUrl', 'outerWidth', '/pr/v1.0.1/img/bg-network.png', "<div class=\"shumei_captcha_insensitive_tips_wrapper\">", 'select_success', 'split', '2358652MTObcE', './_string-at', 'console', 'FIREFOX', 'JS-SDK资源加载失败', '</span>', 'fpMouseRightClickX', 'setRootDom', 'fixProductSuccessStatus', 'getOwnPropertyNames', 'apply', '3442b96a', 'rversion', 'random', '图片加载失败', '../pkg/smConfig', 'shumei_captcha_slide_tips_wrapper', './_to-absolute-index', 'tracer', 'lang', 'data-index', 'pageYOffset', './_is-object', '../pkg/smImagesConf', 'popup', 'object', '10MifGqw', 'registerData', '../../modules/es6.symbol', 'document', 'wks', 'getRootDom', 'src', '24hswBbo', './_hide', 'documentElement', "<div class=\"shumei_captcha_img_load_error_wrapper shumei_hide\">", '__userConf', './_wks-define', '/pr/v1.0.1/img/bg-loading.png', 'captchaType', 'mouseData', 'hasOwnProperty', 'appendChild', "Image load failure", "<div class=\"shumei_captcha_img_load_error_icon\"></div>", 'saveEventList', 'fail', 'getPopupHtml', 'DES', 'substr', 'slide_success', 'Symbol.', 'call', 'PASS', '__webdriver_unwrapped', 'initOnceEvent', "<div class=\"shumei_captcha_insensitive_wrapper insensitive_disabled\">", 'insensitiveProduct', 'closeBtnEl', 'mousemove', './_an-object', 'fpMouseRightClickY', 'done', 'slideTipsTextEl', '/script', 'BackCompat', 'null', 'SMSdk', '2124351ETFOBE', 'inputEls', 'rootDom', 'captcha.fengkongcloud.cn', 'isRegisterInvalid', '_phantom', 'getOs', "Click to verification", "<div class=\"shumei_captcha_slide_process\"></div>", './_is-array', 'toPrimitive', "<div class=\"shumei_captcha_img_refresh_btn\"></div>", 'floatOverHandler', 'toString', 'all', '../../modules/es7.symbol.observable', 'refreshHandler', '_pannel', './_redefine', 'insensitiveHandlerCallback', 'keyboard', 'css', 'contentWindow', 'imageLoadedEl', 'constructor', 'makeURL', 'target', 'logError', './_object-dp', 'values', 'trueUnit', 'set', "<div class=\"shumei_captcha_answer\" style=\"top:", 'clientWidth', 'load', "[object Window]", 'clearClassStatus', 'callback', 'normalizeDomain', '22693891HGINmt', 'shumei_captcha_slide_tips', '加载中...', 'scrollLeft', 'touches', 'exports', './_wks', '/ca/v1/conf', '禁用验证码失败', 'preventDefaultHandler', '</a>', 'checkApi', 'float', './_global', 'data', '@@iterator', "</div>\n                        </div>", 'event', "<div class=\"shumei_captcha_img_load_error_tips\">", 'host', 'select', 'rid', 'log', '/pr/v1.0.1/img/icon-move.png', './_object-dps', '1275784cJbFWt', '../modules/web.dom.iterable', 'getTime', 'JSON', "Cannot call a class as a function", '_errorCallback', 'shumei_captcha_footer_refresh_btn', 'initDom', './_object-gops', 'className', 'Arguments', 'smDebounce', 'imageEl', 'success', " is not iterable!", "\"></div>\n                        </div>", 'verify', 'setAttribute', 'loadImage', 'shumei_captcha_input_rid', 'input', 'zh-cn', '100%', 'driver', 'shumei_captcha_popup_wrapper', '../modules/core.get-iterator', 'http', 'body', './_defined', '2.6.10', 'shumei_captcha_img_loaded_wrapper', "<div class=\"shumei_captcha_img_loaded_fg_wrapper\">", 'startRequestTime', './_object-pie', 'getSlideDefaultHtml', 'shumei_captcha_slide_btn', 'updateAnswerHtml', 'mouseMoveX', 'fixIE', 'protocol', './_classof', './smLangMessage', 'getElementByTagName', 'registCaptcha', 'maxTouchPoints', 'outHandler', 'webdriver', 'loadImages', "', sizingMethod='crop')", 'next', 'getDeviceId', 'shumei_hide', 'getResult', 'fixConfig', 'saveMouseData', 'location', 'trackerDomain', 'selectPosData', 'stringify', 'offsetParent', 'string', '__defineGetter__', 'seq_select', 'shumei_captcha_insensitive_wrapper', 'value', 'imageLoadedFgEl', 'addEventListener', 'insensitive_fail', 'embed', 'fgEl', "<div class=\"shumei_captcha_footer_refresh_btn\"></div>", 'keyup', 'indexOf', 'getRegisterData', 'trueWidth', 'babel-runtime/core-js/get-iterator', './_to-object', 'top', 'getSelectPopupHtml', 'onreadystatechange', './_object-keys', " is not a symbol!", 'message', 'initEvent', 'customData', 'function', 'mouseRightClickData', 'iterator', 'removeEvent', 'toLocaleLowerCase', 'style', 'slide_hover', "Can't call method on  ", './smUtils', 'disabled', 'detachEvent', 'isArray', 'floatOutTimer', '2502720FzZNvh', 'slideEl', "Cannot find module '", '__webdriver_evaluate', 'pass', 'selenium', 'width:参数不合法', './_shared', 'tipsMessage', 'floor', 'appVersion', 'getSlidePopupHtml', 'organization', 'propertyIsEnumerable', './smObject', '../pkg/smLangMessage', 'chrome', " is not a function!", 'mousedown', './_export', 'fpMousemoveY', 'smThrottle', 'captcha.fengkongcloud.com', './_core', 'versions', 'push', 'onresize', 'getInsensitiveCaTypeApi', 'setResult', '/pr/v1.0.1/img/icon-disabled-square.png', '/pr/v1.0.1/img/icon-success.png', '无感验证码,暂不支持:', 'web', 'mouseEndY', 'fpKeyboardHandler', 'getMousePos', 'loading', './smEncrypt', 'selectPlaceholder', 'onerror', '_each', 'replace', 'showCaptcha', "<div class=\"shumei_captcha_slide_slot\"></div>", 'getOwnPropertySymbols', '../pkg/smCaptcha', 'shumei_captcha_slide_slot', 'asyncIterator', 'String', 'QObject', 'onClose', "<div class=\"shumei_captcha_insensitive_content\">", 'buildTpl', '6d767bb8', 'domain', '_successCallback', 'bindEvent', 'toStringTag', '_buildErrorHtml', 'icon_select', 'innerHTML', 'getAttribute', '/pr/v1.0.1/img/icon-refresh.png', 'slideProcessEl', 'Sequentum', 'offsetTop', '../pkg/smObject', 'checkConsoleIsOpenHandler', './_fails', 'getMainDom', './_iter-define', 'shumei_captcha_loaded_img_bg', "\" />", '%;left:', 'answer_content', 'getDefaultHtml', 'panelEl', 'display', 'symbol', 'keyboardData', 'intervalTimer', '9a037822', 'riskLevel', 'number', 'shumei_captcha_mask', 'act.os', 'endTime', 'VERSION', 'get', 'match', 'image', 'isPc', 'maskEl', './_iterators', 'changePannelStatus', 'mouseLeftClickData', './_add-to-unscopables', 'insensitive_default', "\">\n                            <div class=\"answer_content\" data-index=\"", '455fYDKZQ', 'fromElement', './_to-length', 'Symbol', 'removeChild', 'callSelenium', './_meta', 'resetForm', 'preventDefault', "<div class=\"shumei_captcha_img_loaded_bg_wrapper\">", 'resetPosition', 'reset', './img/pixel.gif', 'imageLoadingEl', 'charCodeAt', 'ondragstart', 'img', 'deviceId', 'smStringify', 'touchend', 'valueOf', 'smGetElByClassName', 'readyState', 'babel-runtime/helpers/classCallCheck', 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf', './_uid', 'registerApi', 'TextTrackList,TouchList', 'startTime', 'mouseup', 'code', 'normalizePath', 'trackerPath', 'REVIEW', 'shumei_captcha_insensitive_tips', "© 2019 Denis Pushkarev (zloirock.ru)", 'Object', 'substring', 'select_fail', 'getElementsByClassName', '42px', 'splice', 'charAt', '48930pcFBtG', 'charset', '/exception', '../../modules/es6.object.define-property', 'length', 'mouseStartX', 'slideBtnEl', '../../modules/_core', 'detail', "<img class=\"shumei_captcha_loaded_img_fg\" />", 'slideWidth', '_readyCallback', '168', './_to-iobject', 'fpMouseLeftClickX', 'external', 'javascript:', 'shumei_captcha_img_refresh_btn', 'DataTimer', 'sort', './_ie8-dom-define', "<img class=\"shumei_captcha_loaded_img_bg\" />", "Params invalid", '<font>', '/pr/v1.0.1/img/icon-close.png', 'fpMousemoveHandler', '0d212bfb', 'web_pc', 'slice', 'auto', '3GcZsqy', 'preventExtensions', 'left', '_selenium', '__nightmare', 'imageLoadedBgWrapperEl', '网络不给力|点击重试', '71dd5aa1', '/pr/v1.0.1/img/icon-success-square.png', 'updateTplStatus', '/pr/v1.0.1/img/icon-fail.png', "<div class=\"shumei_captcha_img_loading_tips\">", '../pkg/smLoad', 'onload', 'removeClass', 'getElementByClassName', 'slide_fail', 'NEED', './_library', 'removeEventListener', 'https://', 'imageLoadErrorEl'];

    _0x5673 = function () {
        return _0x3a2380;
    };

    return _0x5673();
}

(function (_0x19485c, _0x349dc3) {
    var _0x11ab83 = _0x562d;

    var _0x4a2632 = _0x19485c();

    while (true) {
        try {
            var _0x2a94e0 = -parseInt(_0x11ab83(925)) / 1 + parseInt(_0x11ab83(550)) / 2 * (parseInt(_0x11ab83(820)) / 3) + -parseInt(_0x11ab83(417)) / 4 + -parseInt(_0x11ab83(648)) / 5 + parseInt(_0x11ab83(790)) / 6 * (-parseInt(_0x11ab83(747)) / 7) + parseInt(_0x11ab83(450)) / 8 * (-parseInt(_0x11ab83(486)) / 9) + parseInt(_0x11ab83(443)) / 10 * (parseInt(_0x11ab83(525)) / 11);

            if (_0x2a94e0 === _0x349dc3) {
                break;
            } else {
                _0x4a2632['push'](_0x4a2632['shift']());
            }
        } catch (_0x1c5304) {
            _0x4a2632['push'](_0x4a2632['shift']());
        }
    }
})(_0x5673, 359745);

function _0x4d93ac(_0x2381d7) {
    var _0x2b87ec = _0x47334e;
    return _0x2381d7 && _0x2381d7[_0x2b87ec(950)] ? _0x2381d7 : {
        'default': _0x2381d7
    };
}

const CallExpressToLiteral =
    {
        CallExpression(path) {
            let {scope, node} = path;

            let {callee, arguments} = node;
            let name = callee.name;


            if (!name || !name.startsWith('_0x')) {
                return;
            }
            console.log(name)
            try {
                const {confident,value} = path.evaluate()
                console.log("confident:",confident,"value",value)
                path.replaceWith(types.valueToNode(value));
            } catch (e) {

            }
            scope.crawl();


        }
    }


traverse(ast, CallExpressToLiteral);
console.log("end")
let {code} = generator(ast);
console.log(code);