module.exports = {

"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/AxisBuilder.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Group.js [app-ssr] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Line$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Line.js [app-ssr] (ecmascript) <export default as Line>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Text.js [app-ssr] (ecmascript) <export default as Text>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/innerStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelStyle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/symbol.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/matrix.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelLayoutHelper.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
var PI = Math.PI;
/**
 * A final axis is translated and rotated from a "standard axis".
 * So opt.position and opt.rotation is required.
 *
 * A standard axis is and axis from [0, 0] to [0, axisExtent[1]],
 * for example: (0, 0) ------------> (0, 50)
 *
 * nameDirection or tickDirection or labelDirection is 1 means tick
 * or label is below the standard axis, whereas is -1 means above
 * the standard axis. labelOffset means offset between label and axis,
 * which is useful when 'onZero', where axisLabel is in the grid and
 * label in outside grid.
 *
 * Tips: like always,
 * positive rotation represents anticlockwise, and negative rotation
 * represents clockwise.
 * The direction of position coordinate is the same as the direction
 * of screen coordinate.
 *
 * Do not need to consider axis 'inverse', which is auto processed by
 * axis extent.
 */ var AxisBuilder = /** @class */ function() {
    function AxisBuilder(axisModel, opt) {
        this.group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
        this.opt = opt;
        this.axisModel = axisModel;
        // Default value
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"])(opt, {
            labelOffset: 0,
            nameDirection: 1,
            tickDirection: 1,
            labelDirection: 1,
            silent: true,
            handleAutoShown: function() {
                return true;
            }
        });
        // FIXME Not use a separate text group?
        var transformGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]({
            x: opt.position[0],
            y: opt.position[1],
            rotation: opt.rotation
        });
        // this.group.add(transformGroup);
        // this._transformGroup = transformGroup;
        transformGroup.updateTransform();
        this._transformGroup = transformGroup;
    }
    AxisBuilder.prototype.hasBuilder = function(name) {
        return !!builders[name];
    };
    AxisBuilder.prototype.add = function(name) {
        builders[name](this.opt, this.axisModel, this.group, this._transformGroup);
    };
    AxisBuilder.prototype.getGroup = function() {
        return this.group;
    };
    AxisBuilder.innerTextLayout = function(axisRotation, textRotation, direction) {
        var rotationDiff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["remRadian"])(textRotation - axisRotation);
        var textAlign;
        var textVerticalAlign;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isRadianAroundZero"])(rotationDiff)) {
            // Label is parallel with axis line.
            textVerticalAlign = direction > 0 ? 'top' : 'bottom';
            textAlign = 'center';
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isRadianAroundZero"])(rotationDiff - PI)) {
            // Label is inverse parallel with axis line.
            textVerticalAlign = direction > 0 ? 'bottom' : 'top';
            textAlign = 'center';
        } else {
            textVerticalAlign = 'middle';
            if (rotationDiff > 0 && rotationDiff < PI) {
                textAlign = direction > 0 ? 'right' : 'left';
            } else {
                textAlign = direction > 0 ? 'left' : 'right';
            }
        }
        return {
            rotation: rotationDiff,
            textAlign: textAlign,
            textVerticalAlign: textVerticalAlign
        };
    };
    AxisBuilder.makeAxisEventDataBase = function(axisModel) {
        var eventData = {
            componentType: axisModel.mainType,
            componentIndex: axisModel.componentIndex
        };
        eventData[axisModel.mainType + 'Index'] = axisModel.componentIndex;
        return eventData;
    };
    AxisBuilder.isLabelSilent = function(axisModel) {
        var tooltipOpt = axisModel.get('tooltip');
        return axisModel.get('silent') || !(axisModel.get('triggerEvent') || tooltipOpt && tooltipOpt.show);
    };
    return AxisBuilder;
}();
;
var builders = {
    axisLine: function(opt, axisModel, group, transformGroup) {
        var shown = axisModel.get([
            'axisLine',
            'show'
        ]);
        if (shown === 'auto' && opt.handleAutoShown) {
            shown = opt.handleAutoShown('axisLine');
        }
        if (!shown) {
            return;
        }
        var extent = axisModel.axis.getExtent();
        var matrix = transformGroup.transform;
        var pt1 = [
            extent[0],
            0
        ];
        var pt2 = [
            extent[1],
            0
        ];
        var inverse = pt1[0] > pt2[0];
        if (matrix) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyTransform"])(pt1, pt1, matrix);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyTransform"])(pt2, pt2, matrix);
        }
        var lineStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])({
            lineCap: 'round'
        }, axisModel.getModel([
            'axisLine',
            'lineStyle'
        ]).getLineStyle());
        var line = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Line$3e$__["Line"]({
            shape: {
                x1: pt1[0],
                y1: pt1[1],
                x2: pt2[0],
                y2: pt2[1]
            },
            style: lineStyle,
            strokeContainThreshold: opt.strokeContainThreshold || 5,
            silent: true,
            z2: 1
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subPixelOptimizeLine"])(line.shape, line.style.lineWidth);
        line.anid = 'line';
        group.add(line);
        var arrows = axisModel.get([
            'axisLine',
            'symbol'
        ]);
        if (arrows != null) {
            var arrowSize = axisModel.get([
                'axisLine',
                'symbolSize'
            ]);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(arrows)) {
                // Use the same arrow for start and end point
                arrows = [
                    arrows,
                    arrows
                ];
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(arrowSize) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(arrowSize)) {
                // Use the same size for width and height
                arrowSize = [
                    arrowSize,
                    arrowSize
                ];
            }
            var arrowOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeSymbolOffset"])(axisModel.get([
                'axisLine',
                'symbolOffset'
            ]) || 0, arrowSize);
            var symbolWidth_1 = arrowSize[0];
            var symbolHeight_1 = arrowSize[1];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])([
                {
                    rotate: opt.rotation + Math.PI / 2,
                    offset: arrowOffset[0],
                    r: 0
                },
                {
                    rotate: opt.rotation - Math.PI / 2,
                    offset: arrowOffset[1],
                    r: Math.sqrt((pt1[0] - pt2[0]) * (pt1[0] - pt2[0]) + (pt1[1] - pt2[1]) * (pt1[1] - pt2[1]))
                }
            ], function(point, index) {
                if (arrows[index] !== 'none' && arrows[index] != null) {
                    var symbol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSymbol"])(arrows[index], -symbolWidth_1 / 2, -symbolHeight_1 / 2, symbolWidth_1, symbolHeight_1, lineStyle.stroke, true);
                    // Calculate arrow position with offset
                    var r = point.r + point.offset;
                    var pt = inverse ? pt2 : pt1;
                    symbol.attr({
                        rotation: point.rotate,
                        x: pt[0] + r * Math.cos(opt.rotation),
                        y: pt[1] - r * Math.sin(opt.rotation),
                        silent: true,
                        z2: 11
                    });
                    group.add(symbol);
                }
            });
        }
    },
    axisTickLabel: function(opt, axisModel, group, transformGroup) {
        var ticksEls = buildAxisMajorTicks(group, transformGroup, axisModel, opt);
        var labelEls = buildAxisLabel(group, transformGroup, axisModel, opt);
        fixMinMaxLabelShow(axisModel, labelEls, ticksEls);
        buildAxisMinorTicks(group, transformGroup, axisModel, opt.tickDirection);
        // This bit fixes the label overlap issue for the time chart.
        // See https://github.com/apache/echarts/issues/14266 for more.
        if (axisModel.get([
            'axisLabel',
            'hideOverlap'
        ])) {
            var labelList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepareLayoutList"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(labelEls, function(label) {
                return {
                    label: label,
                    priority: label.z2,
                    defaultAttr: {
                        ignore: label.ignore
                    }
                };
            }));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hideOverlap"])(labelList);
        }
    },
    axisName: function(opt, axisModel, group, transformGroup) {
        var name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve"])(opt.axisName, axisModel.get('name'));
        if (!name) {
            return;
        }
        var nameLocation = axisModel.get('nameLocation');
        var nameDirection = opt.nameDirection;
        var textStyleModel = axisModel.getModel('nameTextStyle');
        var gap = axisModel.get('nameGap') || 0;
        var extent = axisModel.axis.getExtent();
        var gapSignal = extent[0] > extent[1] ? -1 : 1;
        var pos = [
            nameLocation === 'start' ? extent[0] - gapSignal * gap : nameLocation === 'end' ? extent[1] + gapSignal * gap : (extent[0] + extent[1]) / 2,
            // Reuse labelOffset.
            isNameLocationCenter(nameLocation) ? opt.labelOffset + nameDirection * gap : 0
        ];
        var labelLayout;
        var nameRotation = axisModel.get('nameRotate');
        if (nameRotation != null) {
            nameRotation = nameRotation * PI / 180; // To radian.
        }
        var axisNameAvailableWidth;
        if (isNameLocationCenter(nameLocation)) {
            labelLayout = AxisBuilder.innerTextLayout(opt.rotation, nameRotation != null ? nameRotation : opt.rotation, // Adapt to axis.
            nameDirection);
        } else {
            labelLayout = endTextLayout(opt.rotation, nameLocation, nameRotation || 0, extent);
            axisNameAvailableWidth = opt.axisNameAvailableWidth;
            if (axisNameAvailableWidth != null) {
                axisNameAvailableWidth = Math.abs(axisNameAvailableWidth / Math.sin(labelLayout.rotation));
                !isFinite(axisNameAvailableWidth) && (axisNameAvailableWidth = null);
            }
        }
        var textFont = textStyleModel.getFont();
        var truncateOpt = axisModel.get('nameTruncate', true) || {};
        var ellipsis = truncateOpt.ellipsis;
        var maxWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve"])(opt.nameTruncateMaxWidth, truncateOpt.maxWidth, axisNameAvailableWidth);
        var textEl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"]({
            x: pos[0],
            y: pos[1],
            rotation: labelLayout.rotation,
            silent: AxisBuilder.isLabelSilent(axisModel),
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTextStyle"])(textStyleModel, {
                text: name,
                font: textFont,
                overflow: 'truncate',
                width: maxWidth,
                ellipsis: ellipsis,
                fill: textStyleModel.getTextColor() || axisModel.get([
                    'axisLine',
                    'lineStyle',
                    'color'
                ]),
                align: textStyleModel.get('align') || labelLayout.textAlign,
                verticalAlign: textStyleModel.get('verticalAlign') || labelLayout.textVerticalAlign
            }),
            z2: 1
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setTooltipConfig"])({
            el: textEl,
            componentModel: axisModel,
            itemName: name
        });
        textEl.__fullText = name;
        // Id for animation
        textEl.anid = 'name';
        if (axisModel.get('triggerEvent')) {
            var eventData = AxisBuilder.makeAxisEventDataBase(axisModel);
            eventData.targetType = 'axisName';
            eventData.name = name;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(textEl).eventData = eventData;
        }
        // FIXME
        transformGroup.add(textEl);
        textEl.updateTransform();
        group.add(textEl);
        textEl.decomposeTransform();
    }
};
function endTextLayout(rotation, textPosition, textRotate, extent) {
    var rotationDiff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["remRadian"])(textRotate - rotation);
    var textAlign;
    var textVerticalAlign;
    var inverse = extent[0] > extent[1];
    var onLeft = textPosition === 'start' && !inverse || textPosition !== 'start' && inverse;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isRadianAroundZero"])(rotationDiff - PI / 2)) {
        textVerticalAlign = onLeft ? 'bottom' : 'top';
        textAlign = 'center';
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isRadianAroundZero"])(rotationDiff - PI * 1.5)) {
        textVerticalAlign = onLeft ? 'top' : 'bottom';
        textAlign = 'center';
    } else {
        textVerticalAlign = 'middle';
        if (rotationDiff < PI * 1.5 && rotationDiff > PI / 2) {
            textAlign = onLeft ? 'left' : 'right';
        } else {
            textAlign = onLeft ? 'right' : 'left';
        }
    }
    return {
        rotation: rotationDiff,
        textAlign: textAlign,
        textVerticalAlign: textVerticalAlign
    };
}
function fixMinMaxLabelShow(axisModel, labelEls, tickEls) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldShowAllLabels"])(axisModel.axis)) {
        return;
    }
    // If min or max are user set, we need to check
    // If the tick on min(max) are overlap on their neighbour tick
    // If they are overlapped, we need to hide the min(max) tick label
    var showMinLabel = axisModel.get([
        'axisLabel',
        'showMinLabel'
    ]);
    var showMaxLabel = axisModel.get([
        'axisLabel',
        'showMaxLabel'
    ]);
    // FIXME
    // Have not consider onBand yet, where tick els is more than label els.
    labelEls = labelEls || [];
    tickEls = tickEls || [];
    var firstLabel = labelEls[0];
    var nextLabel = labelEls[1];
    var lastLabel = labelEls[labelEls.length - 1];
    var prevLabel = labelEls[labelEls.length - 2];
    var firstTick = tickEls[0];
    var nextTick = tickEls[1];
    var lastTick = tickEls[tickEls.length - 1];
    var prevTick = tickEls[tickEls.length - 2];
    if (showMinLabel === false) {
        ignoreEl(firstLabel);
        ignoreEl(firstTick);
    } else if (isTwoLabelOverlapped(firstLabel, nextLabel)) {
        if (showMinLabel) {
            ignoreEl(nextLabel);
            ignoreEl(nextTick);
        } else {
            ignoreEl(firstLabel);
            ignoreEl(firstTick);
        }
    }
    if (showMaxLabel === false) {
        ignoreEl(lastLabel);
        ignoreEl(lastTick);
    } else if (isTwoLabelOverlapped(prevLabel, lastLabel)) {
        if (showMaxLabel) {
            ignoreEl(prevLabel);
            ignoreEl(prevTick);
        } else {
            ignoreEl(lastLabel);
            ignoreEl(lastTick);
        }
    }
}
function ignoreEl(el) {
    el && (el.ignore = true);
}
function isTwoLabelOverlapped(current, next) {
    // current and next has the same rotation.
    var firstRect = current && current.getBoundingRect().clone();
    var nextRect = next && next.getBoundingRect().clone();
    if (!firstRect || !nextRect) {
        return;
    }
    // When checking intersect of two rotated labels, we use mRotationBack
    // to avoid that boundingRect is enlarge when using `boundingRect.applyTransform`.
    var mRotationBack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["identity"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotate"])(mRotationBack, mRotationBack, -current.rotation);
    firstRect.applyTransform((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"])([], mRotationBack, current.getLocalTransform()));
    nextRect.applyTransform((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"])([], mRotationBack, next.getLocalTransform()));
    return firstRect.intersect(nextRect);
}
function isNameLocationCenter(nameLocation) {
    return nameLocation === 'middle' || nameLocation === 'center';
}
function createTicks(ticksCoords, tickTransform, tickEndCoord, tickLineStyle, anidPrefix) {
    var tickEls = [];
    var pt1 = [];
    var pt2 = [];
    for(var i = 0; i < ticksCoords.length; i++){
        var tickCoord = ticksCoords[i].coord;
        pt1[0] = tickCoord;
        pt1[1] = 0;
        pt2[0] = tickCoord;
        pt2[1] = tickEndCoord;
        if (tickTransform) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyTransform"])(pt1, pt1, tickTransform);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyTransform"])(pt2, pt2, tickTransform);
        }
        // Tick line, Not use group transform to have better line draw
        var tickEl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Line$3e$__["Line"]({
            shape: {
                x1: pt1[0],
                y1: pt1[1],
                x2: pt2[0],
                y2: pt2[1]
            },
            style: tickLineStyle,
            z2: 2,
            autoBatch: true,
            silent: true
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subPixelOptimizeLine"])(tickEl.shape, tickEl.style.lineWidth);
        tickEl.anid = anidPrefix + '_' + ticksCoords[i].tickValue;
        tickEls.push(tickEl);
    }
    return tickEls;
}
function buildAxisMajorTicks(group, transformGroup, axisModel, opt) {
    var axis = axisModel.axis;
    var tickModel = axisModel.getModel('axisTick');
    var shown = tickModel.get('show');
    if (shown === 'auto' && opt.handleAutoShown) {
        shown = opt.handleAutoShown('axisTick');
    }
    if (!shown || axis.scale.isBlank()) {
        return;
    }
    var lineStyleModel = tickModel.getModel('lineStyle');
    var tickEndCoord = opt.tickDirection * tickModel.get('length');
    var ticksCoords = axis.getTicksCoords();
    var ticksEls = createTicks(ticksCoords, transformGroup.transform, tickEndCoord, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"])(lineStyleModel.getLineStyle(), {
        stroke: axisModel.get([
            'axisLine',
            'lineStyle',
            'color'
        ])
    }), 'ticks');
    for(var i = 0; i < ticksEls.length; i++){
        group.add(ticksEls[i]);
    }
    return ticksEls;
}
function buildAxisMinorTicks(group, transformGroup, axisModel, tickDirection) {
    var axis = axisModel.axis;
    var minorTickModel = axisModel.getModel('minorTick');
    if (!minorTickModel.get('show') || axis.scale.isBlank()) {
        return;
    }
    var minorTicksCoords = axis.getMinorTicksCoords();
    if (!minorTicksCoords.length) {
        return;
    }
    var lineStyleModel = minorTickModel.getModel('lineStyle');
    var tickEndCoord = tickDirection * minorTickModel.get('length');
    var minorTickLineStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"])(lineStyleModel.getLineStyle(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"])(axisModel.getModel('axisTick').getLineStyle(), {
        stroke: axisModel.get([
            'axisLine',
            'lineStyle',
            'color'
        ])
    }));
    for(var i = 0; i < minorTicksCoords.length; i++){
        var minorTicksEls = createTicks(minorTicksCoords[i], transformGroup.transform, tickEndCoord, minorTickLineStyle, 'minorticks_' + i);
        for(var k = 0; k < minorTicksEls.length; k++){
            group.add(minorTicksEls[k]);
        }
    }
}
function buildAxisLabel(group, transformGroup, axisModel, opt) {
    var axis = axisModel.axis;
    var show = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve"])(opt.axisLabelShow, axisModel.get([
        'axisLabel',
        'show'
    ]));
    if (!show || axis.scale.isBlank()) {
        return;
    }
    var labelModel = axisModel.getModel('axisLabel');
    var labelMargin = labelModel.get('margin');
    var labels = axis.getViewLabels();
    // Special label rotate.
    var labelRotation = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve"])(opt.labelRotate, labelModel.get('rotate')) || 0) * PI / 180;
    var labelLayout = AxisBuilder.innerTextLayout(opt.rotation, labelRotation, opt.labelDirection);
    var rawCategoryData = axisModel.getCategories && axisModel.getCategories(true);
    var labelEls = [];
    var silent = AxisBuilder.isLabelSilent(axisModel);
    var triggerEvent = axisModel.get('triggerEvent');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(labels, function(labelItem, index) {
        var tickValue = axis.scale.type === 'ordinal' ? axis.scale.getRawOrdinalNumber(labelItem.tickValue) : labelItem.tickValue;
        var formattedLabel = labelItem.formattedLabel;
        var rawLabel = labelItem.rawLabel;
        var itemLabelModel = labelModel;
        if (rawCategoryData && rawCategoryData[tickValue]) {
            var rawCategoryItem = rawCategoryData[tickValue];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(rawCategoryItem) && rawCategoryItem.textStyle) {
                itemLabelModel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](rawCategoryItem.textStyle, labelModel, axisModel.ecModel);
            }
        }
        var textColor = itemLabelModel.getTextColor() || axisModel.get([
            'axisLine',
            'lineStyle',
            'color'
        ]);
        var tickCoord = axis.dataToCoord(tickValue);
        var align = itemLabelModel.getShallow('align', true) || labelLayout.textAlign;
        var alignMin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"])(itemLabelModel.getShallow('alignMinLabel', true), align);
        var alignMax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"])(itemLabelModel.getShallow('alignMaxLabel', true), align);
        var verticalAlign = itemLabelModel.getShallow('verticalAlign', true) || itemLabelModel.getShallow('baseline', true) || labelLayout.textVerticalAlign;
        var verticalAlignMin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"])(itemLabelModel.getShallow('verticalAlignMinLabel', true), verticalAlign);
        var verticalAlignMax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"])(itemLabelModel.getShallow('verticalAlignMaxLabel', true), verticalAlign);
        var textEl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"]({
            x: tickCoord,
            y: opt.labelOffset + opt.labelDirection * labelMargin,
            rotation: labelLayout.rotation,
            silent: silent,
            z2: 10 + (labelItem.level || 0),
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTextStyle"])(itemLabelModel, {
                text: formattedLabel,
                align: index === 0 ? alignMin : index === labels.length - 1 ? alignMax : align,
                verticalAlign: index === 0 ? verticalAlignMin : index === labels.length - 1 ? verticalAlignMax : verticalAlign,
                fill: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(textColor) ? textColor(// (1) In category axis with data zoom, tick is not the original
                // index of axis.data. So tick should not be exposed to user
                // in category axis.
                // (2) Compatible with previous version, which always use formatted label as
                // input. But in interval scale the formatted label is like '223,445', which
                // maked user replace ','. So we modify it to return original val but remain
                // it as 'string' to avoid error in replacing.
                axis.type === 'category' ? rawLabel : axis.type === 'value' ? tickValue + '' : tickValue, index) : textColor
            })
        });
        textEl.anid = 'label_' + tickValue;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setTooltipConfig"])({
            el: textEl,
            componentModel: axisModel,
            itemName: formattedLabel,
            formatterParamsExtra: {
                isTruncated: function() {
                    return textEl.isTruncated;
                },
                value: rawLabel,
                tickIndex: index
            }
        });
        // Pack data for mouse event
        if (triggerEvent) {
            var eventData = AxisBuilder.makeAxisEventDataBase(axisModel);
            eventData.targetType = 'axisLabel';
            eventData.value = rawLabel;
            eventData.tickIndex = index;
            if (axis.type === 'category') {
                eventData.dataIndex = tickValue;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(textEl).eventData = eventData;
        }
        // FIXME
        transformGroup.add(textEl);
        textEl.updateTransform();
        labelEls.push(textEl);
        group.add(textEl);
        textEl.decomposeTransform();
    });
    return labelEls;
}
const __TURBOPACK__default__export__ = AxisBuilder;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/AxisView.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$modelHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axisPointer/modelHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Component.js [app-ssr] (ecmascript)");
;
;
;
var axisPointerClazz = {};
/**
 * Base class of AxisView.
 */ var AxisView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(AxisView, _super);
    function AxisView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = AxisView.type;
        return _this;
    }
    /**
   * @override
   */ AxisView.prototype.render = function(axisModel, ecModel, api, payload) {
        // FIXME
        // This process should proformed after coordinate systems updated
        // (axis scale updated), and should be performed each time update.
        // So put it here temporarily, although it is not appropriate to
        // put a model-writing procedure in `view`.
        this.axisPointerClass && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$modelHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fixValue"])(axisModel);
        _super.prototype.render.apply(this, arguments);
        this._doUpdateAxisPointerClass(axisModel, api, true);
    };
    /**
   * Action handler.
   */ AxisView.prototype.updateAxisPointer = function(axisModel, ecModel, api, payload) {
        this._doUpdateAxisPointerClass(axisModel, api, false);
    };
    /**
   * @override
   */ AxisView.prototype.remove = function(ecModel, api) {
        var axisPointer = this._axisPointer;
        axisPointer && axisPointer.remove(api);
    };
    /**
   * @override
   */ AxisView.prototype.dispose = function(ecModel, api) {
        this._disposeAxisPointer(api);
        _super.prototype.dispose.apply(this, arguments);
    };
    AxisView.prototype._doUpdateAxisPointerClass = function(axisModel, api, forceRender) {
        var Clazz = AxisView.getAxisPointerClass(this.axisPointerClass);
        if (!Clazz) {
            return;
        }
        var axisPointerModel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$modelHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAxisPointerModel"])(axisModel);
        axisPointerModel ? (this._axisPointer || (this._axisPointer = new Clazz())).render(axisModel, axisPointerModel, api, forceRender) : this._disposeAxisPointer(api);
    };
    AxisView.prototype._disposeAxisPointer = function(api) {
        this._axisPointer && this._axisPointer.dispose(api);
        this._axisPointer = null;
    };
    AxisView.registerAxisPointerClass = function(type, clazz) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (axisPointerClazz[type]) {
                throw new Error('axisPointer ' + type + ' exists');
            }
        }
        axisPointerClazz[type] = clazz;
    };
    ;
    AxisView.getAxisPointerClass = function(type) {
        return type && axisPointerClazz[type];
    };
    ;
    AxisView.type = 'axis';
    return AxisView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = AxisView;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/axisSplitHelper.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_context__.s({
    "rectCoordAxisBuildSplitArea": (()=>rectCoordAxisBuildSplitArea),
    "rectCoordAxisHandleRemove": (()=>rectCoordAxisHandleRemove)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Rect.js [app-ssr] (ecmascript) <export default as Rect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
;
;
;
var inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeInner"])();
function rectCoordAxisBuildSplitArea(axisView, axisGroup, axisModel, gridModel) {
    var axis = axisModel.axis;
    if (axis.scale.isBlank()) {
        return;
    }
    // TODO: TYPE
    var splitAreaModel = axisModel.getModel('splitArea');
    var areaStyleModel = splitAreaModel.getModel('areaStyle');
    var areaColors = areaStyleModel.get('color');
    var gridRect = gridModel.coordinateSystem.getRect();
    var ticksCoords = axis.getTicksCoords({
        tickModel: splitAreaModel,
        clamp: true
    });
    if (!ticksCoords.length) {
        return;
    }
    // For Making appropriate splitArea animation, the color and anid
    // should be corresponding to previous one if possible.
    var areaColorsLen = areaColors.length;
    var lastSplitAreaColors = inner(axisView).splitAreaColors;
    var newSplitAreaColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHashMap"])();
    var colorIndex = 0;
    if (lastSplitAreaColors) {
        for(var i = 0; i < ticksCoords.length; i++){
            var cIndex = lastSplitAreaColors.get(ticksCoords[i].tickValue);
            if (cIndex != null) {
                colorIndex = (cIndex + (areaColorsLen - 1) * i) % areaColorsLen;
                break;
            }
        }
    }
    var prev = axis.toGlobalCoord(ticksCoords[0].coord);
    var areaStyle = areaStyleModel.getAreaStyle();
    areaColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(areaColors) ? areaColors : [
        areaColors
    ];
    for(var i = 1; i < ticksCoords.length; i++){
        var tickCoord = axis.toGlobalCoord(ticksCoords[i].coord);
        var x = void 0;
        var y = void 0;
        var width = void 0;
        var height = void 0;
        if (axis.isHorizontal()) {
            x = prev;
            y = gridRect.y;
            width = tickCoord - x;
            height = gridRect.height;
            prev = x + width;
        } else {
            x = gridRect.x;
            y = prev;
            width = gridRect.width;
            height = tickCoord - y;
            prev = y + height;
        }
        var tickValue = ticksCoords[i - 1].tickValue;
        tickValue != null && newSplitAreaColors.set(tickValue, colorIndex);
        axisGroup.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]({
            anid: tickValue != null ? 'area_' + tickValue : null,
            shape: {
                x: x,
                y: y,
                width: width,
                height: height
            },
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"])({
                fill: areaColors[colorIndex]
            }, areaStyle),
            autoBatch: true,
            silent: true
        }));
        colorIndex = (colorIndex + 1) % areaColorsLen;
    }
    inner(axisView).splitAreaColors = newSplitAreaColors;
}
function rectCoordAxisHandleRemove(axisView) {
    inner(axisView).splitAreaColors = null;
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/CartesianAxisView.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_context__.s({
    "CartesianXAxisView": (()=>CartesianXAxisView),
    "CartesianYAxisView": (()=>CartesianYAxisView),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Group.js [app-ssr] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Line$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Line.js [app-ssr] (ecmascript) <export default as Line>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/AxisBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/AxisView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$cartesianAxisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/cartesian/cartesianAxisHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisSplitHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/axisSplitHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/scale/helper.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
var axisBuilderAttrs = [
    'axisLine',
    'axisTickLabel',
    'axisName'
];
var selfBuilderAttrs = [
    'splitArea',
    'splitLine',
    'minorSplitLine'
];
var CartesianAxisView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(CartesianAxisView, _super);
    function CartesianAxisView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = CartesianAxisView.type;
        _this.axisPointerClass = 'CartesianAxisPointer';
        return _this;
    }
    /**
   * @override
   */ CartesianAxisView.prototype.render = function(axisModel, ecModel, api, payload) {
        this.group.removeAll();
        var oldAxisGroup = this._axisGroup;
        this._axisGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
        this.group.add(this._axisGroup);
        if (!axisModel.get('show')) {
            return;
        }
        var gridModel = axisModel.getCoordSysModel();
        var layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$cartesianAxisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layout"])(gridModel, axisModel);
        var axisBuilder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](axisModel, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])({
            handleAutoShown: function(elementType) {
                var cartesians = gridModel.coordinateSystem.getCartesians();
                for(var i = 0; i < cartesians.length; i++){
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isIntervalOrLogScale"])(cartesians[i].getOtherAxis(axisModel.axis).scale)) {
                        // Still show axis tick or axisLine if other axis is value / log
                        return true;
                    }
                }
                // Not show axisTick or axisLine if other axis is category / time
                return false;
            }
        }, layout));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(axisBuilderAttrs, axisBuilder.add, axisBuilder);
        this._axisGroup.add(axisBuilder.getGroup());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(selfBuilderAttrs, function(name) {
            if (axisModel.get([
                name,
                'show'
            ])) {
                axisElementBuilders[name](this, this._axisGroup, axisModel, gridModel);
            }
        }, this);
        // THIS is a special case for bar racing chart.
        // Update the axis label from the natural initial layout to
        // sorted layout should has no animation.
        var isInitialSortFromBarRacing = payload && payload.type === 'changeAxisOrder' && payload.isInitSort;
        if (!isInitialSortFromBarRacing) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["groupTransition"])(oldAxisGroup, this._axisGroup, axisModel);
        }
        _super.prototype.render.call(this, axisModel, ecModel, api, payload);
    };
    CartesianAxisView.prototype.remove = function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisSplitHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rectCoordAxisHandleRemove"])(this);
    };
    CartesianAxisView.type = 'cartesianAxis';
    return CartesianAxisView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
var axisElementBuilders = {
    splitLine: function(axisView, axisGroup, axisModel, gridModel) {
        var axis = axisModel.axis;
        if (axis.scale.isBlank()) {
            return;
        }
        var splitLineModel = axisModel.getModel('splitLine');
        var lineStyleModel = splitLineModel.getModel('lineStyle');
        var lineColors = lineStyleModel.get('color');
        var showMinLine = splitLineModel.get('showMinLine') !== false;
        var showMaxLine = splitLineModel.get('showMaxLine') !== false;
        lineColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(lineColors) ? lineColors : [
            lineColors
        ];
        var gridRect = gridModel.coordinateSystem.getRect();
        var isHorizontal = axis.isHorizontal();
        var lineCount = 0;
        var ticksCoords = axis.getTicksCoords({
            tickModel: splitLineModel
        });
        var p1 = [];
        var p2 = [];
        var lineStyle = lineStyleModel.getLineStyle();
        for(var i = 0; i < ticksCoords.length; i++){
            var tickCoord = axis.toGlobalCoord(ticksCoords[i].coord);
            if (i === 0 && !showMinLine || i === ticksCoords.length - 1 && !showMaxLine) {
                continue;
            }
            var tickValue = ticksCoords[i].tickValue;
            if (isHorizontal) {
                p1[0] = tickCoord;
                p1[1] = gridRect.y;
                p2[0] = tickCoord;
                p2[1] = gridRect.y + gridRect.height;
            } else {
                p1[0] = gridRect.x;
                p1[1] = tickCoord;
                p2[0] = gridRect.x + gridRect.width;
                p2[1] = tickCoord;
            }
            var colorIndex = lineCount++ % lineColors.length;
            var line = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Line$3e$__["Line"]({
                anid: tickValue != null ? 'line_' + tickValue : null,
                autoBatch: true,
                shape: {
                    x1: p1[0],
                    y1: p1[1],
                    x2: p2[0],
                    y2: p2[1]
                },
                style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"])({
                    stroke: lineColors[colorIndex]
                }, lineStyle),
                silent: true
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subPixelOptimizeLine"])(line.shape, lineStyle.lineWidth);
            axisGroup.add(line);
        }
    },
    minorSplitLine: function(axisView, axisGroup, axisModel, gridModel) {
        var axis = axisModel.axis;
        var minorSplitLineModel = axisModel.getModel('minorSplitLine');
        var lineStyleModel = minorSplitLineModel.getModel('lineStyle');
        var gridRect = gridModel.coordinateSystem.getRect();
        var isHorizontal = axis.isHorizontal();
        var minorTicksCoords = axis.getMinorTicksCoords();
        if (!minorTicksCoords.length) {
            return;
        }
        var p1 = [];
        var p2 = [];
        var lineStyle = lineStyleModel.getLineStyle();
        for(var i = 0; i < minorTicksCoords.length; i++){
            for(var k = 0; k < minorTicksCoords[i].length; k++){
                var tickCoord = axis.toGlobalCoord(minorTicksCoords[i][k].coord);
                if (isHorizontal) {
                    p1[0] = tickCoord;
                    p1[1] = gridRect.y;
                    p2[0] = tickCoord;
                    p2[1] = gridRect.y + gridRect.height;
                } else {
                    p1[0] = gridRect.x;
                    p1[1] = tickCoord;
                    p2[0] = gridRect.x + gridRect.width;
                    p2[1] = tickCoord;
                }
                var line = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Line$3e$__["Line"]({
                    anid: 'minor_line_' + minorTicksCoords[i][k].tickValue,
                    autoBatch: true,
                    shape: {
                        x1: p1[0],
                        y1: p1[1],
                        x2: p2[0],
                        y2: p2[1]
                    },
                    style: lineStyle,
                    silent: true
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subPixelOptimizeLine"])(line.shape, lineStyle.lineWidth);
                axisGroup.add(line);
            }
        }
    },
    splitArea: function(axisView, axisGroup, axisModel, gridModel) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisSplitHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rectCoordAxisBuildSplitArea"])(axisView, axisGroup, axisModel, gridModel);
    }
};
var CartesianXAxisView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(CartesianXAxisView, _super);
    function CartesianXAxisView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = CartesianXAxisView.type;
        return _this;
    }
    CartesianXAxisView.type = 'xAxis';
    return CartesianXAxisView;
}(CartesianAxisView);
;
var CartesianYAxisView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(CartesianYAxisView, _super);
    function CartesianYAxisView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = CartesianXAxisView.type;
        return _this;
    }
    CartesianYAxisView.type = 'yAxis';
    return CartesianYAxisView;
}(CartesianAxisView);
;
const __TURBOPACK__default__export__ = CartesianAxisView;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/ParallelAxisView.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/AxisBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$BrushController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/helper/BrushController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$brushHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/helper/brushHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Group.js [app-ssr] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BoundingRect$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/BoundingRect.js [app-ssr] (ecmascript) <export default as BoundingRect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Component.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
var elementList = [
    'axisLine',
    'axisTickLabel',
    'axisName'
];
var ParallelAxisView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(ParallelAxisView, _super);
    function ParallelAxisView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ParallelAxisView.type;
        return _this;
    }
    ParallelAxisView.prototype.init = function(ecModel, api) {
        _super.prototype.init.apply(this, arguments);
        (this._brushController = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$BrushController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](api.getZr())).on('brush', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"])(this._onBrush, this));
    };
    ParallelAxisView.prototype.render = function(axisModel, ecModel, api, payload) {
        if (fromAxisAreaSelect(axisModel, ecModel, payload)) {
            return;
        }
        this.axisModel = axisModel;
        this.api = api;
        this.group.removeAll();
        var oldAxisGroup = this._axisGroup;
        this._axisGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
        this.group.add(this._axisGroup);
        if (!axisModel.get('show')) {
            return;
        }
        var coordSysModel = getCoordSysModel(axisModel, ecModel);
        var coordSys = coordSysModel.coordinateSystem;
        var areaSelectStyle = axisModel.getAreaSelectStyle();
        var areaWidth = areaSelectStyle.width;
        var dim = axisModel.axis.dim;
        var axisLayout = coordSys.getAxisLayout(dim);
        var builderOpt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])({
            strokeContainThreshold: areaWidth
        }, axisLayout);
        var axisBuilder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](axisModel, builderOpt);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(elementList, axisBuilder.add, axisBuilder);
        this._axisGroup.add(axisBuilder.getGroup());
        this._refreshBrushController(builderOpt, areaSelectStyle, axisModel, coordSysModel, areaWidth, api);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["groupTransition"])(oldAxisGroup, this._axisGroup, axisModel);
    };
    // /**
    //  * @override
    //  */
    // updateVisual(axisModel, ecModel, api, payload) {
    //     this._brushController && this._brushController
    //         .updateCovers(getCoverInfoList(axisModel));
    // }
    ParallelAxisView.prototype._refreshBrushController = function(builderOpt, areaSelectStyle, axisModel, coordSysModel, areaWidth, api) {
        // After filtering, axis may change, select area needs to be update.
        var extent = axisModel.axis.getExtent();
        var extentLen = extent[1] - extent[0];
        var extra = Math.min(30, Math.abs(extentLen) * 0.1); // Arbitrary value.
        // width/height might be negative, which will be
        // normalized in BoundingRect.
        var rect = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BoundingRect$3e$__["BoundingRect"].create({
            x: extent[0],
            y: -areaWidth / 2,
            width: extentLen,
            height: areaWidth
        });
        rect.x -= extra;
        rect.width += 2 * extra;
        this._brushController.mount({
            enableGlobalPan: true,
            rotation: builderOpt.rotation,
            x: builderOpt.position[0],
            y: builderOpt.position[1]
        }).setPanels([
            {
                panelId: 'pl',
                clipPath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$brushHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeRectPanelClipPath"])(rect),
                isTargetByCursor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$brushHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeRectIsTargetByCursor"])(rect, api, coordSysModel),
                getLinearBrushOtherExtent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$brushHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeLinearBrushOtherExtent"])(rect, 0)
            }
        ]).enableBrush({
            brushType: 'lineX',
            brushStyle: areaSelectStyle,
            removeOnClick: true
        }).updateCovers(getCoverInfoList(axisModel));
    };
    ParallelAxisView.prototype._onBrush = function(eventParam) {
        var coverInfoList = eventParam.areas;
        // Do not cache these object, because the mey be changed.
        var axisModel = this.axisModel;
        var axis = axisModel.axis;
        var intervals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(coverInfoList, function(coverInfo) {
            return [
                axis.coordToData(coverInfo.range[0], true),
                axis.coordToData(coverInfo.range[1], true)
            ];
        });
        // If realtime is true, action is not dispatched on drag end, because
        // the drag end emits the same params with the last drag move event,
        // and may have some delay when using touch pad.
        if (!axisModel.option.realtime === eventParam.isEnd || eventParam.removeOnClick) {
            // jshint ignore:line
            this.api.dispatchAction({
                type: 'axisAreaSelect',
                parallelAxisId: axisModel.id,
                intervals: intervals
            });
        }
    };
    ParallelAxisView.prototype.dispose = function() {
        this._brushController.dispose();
    };
    ParallelAxisView.type = 'parallelAxis';
    return ParallelAxisView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
function fromAxisAreaSelect(axisModel, ecModel, payload) {
    return payload && payload.type === 'axisAreaSelect' && ecModel.findComponents({
        mainType: 'parallelAxis',
        query: payload
    })[0] === axisModel;
}
function getCoverInfoList(axisModel) {
    var axis = axisModel.axis;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(axisModel.activeIntervals, function(interval) {
        return {
            brushType: 'lineX',
            panelId: 'pl',
            range: [
                axis.dataToCoord(interval[0], true),
                axis.dataToCoord(interval[1], true)
            ]
        };
    });
}
function getCoordSysModel(axisModel, ecModel) {
    return ecModel.getComponent('parallel', axisModel.get('parallelIndex'));
}
const __TURBOPACK__default__export__ = ParallelAxisView;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/parallelAxisAction.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_context__.s({
    "installParallelActions": (()=>installParallelActions)
});
var actionInfo = {
    type: 'axisAreaSelect',
    event: 'axisAreaSelected'
};
function installParallelActions(registers) {
    registers.registerAction(actionInfo, function(payload, ecModel) {
        ecModel.eachComponent({
            mainType: 'parallelAxis',
            query: payload
        }, function(parallelAxisModel) {
            parallelAxisModel.axis.model.setActiveIntervals(payload.intervals);
        });
    });
    /**
   * @payload
   */ registers.registerAction('parallelAxisExpand', function(payload, ecModel) {
        ecModel.eachComponent({
            mainType: 'parallel',
            query: payload
        }, function(parallelModel) {
            parallelModel.setAxisExpand(payload);
        });
    });
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/AngleAxisView.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelStyle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/AxisView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/AxisBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/innerStore.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
var elementList = [
    'axisLine',
    'axisLabel',
    'axisTick',
    'minorTick',
    'splitLine',
    'minorSplitLine',
    'splitArea'
];
function getAxisLineShape(polar, rExtent, angle) {
    rExtent[1] > rExtent[0] && (rExtent = rExtent.slice().reverse());
    var start = polar.coordToPoint([
        rExtent[0],
        angle
    ]);
    var end = polar.coordToPoint([
        rExtent[1],
        angle
    ]);
    return {
        x1: start[0],
        y1: start[1],
        x2: end[0],
        y2: end[1]
    };
}
function getRadiusIdx(polar) {
    var radiusAxis = polar.getRadiusAxis();
    return radiusAxis.inverse ? 0 : 1;
}
// Remove the last tick which will overlap the first tick
function fixAngleOverlap(list) {
    var firstItem = list[0];
    var lastItem = list[list.length - 1];
    if (firstItem && lastItem && Math.abs(Math.abs(firstItem.coord - lastItem.coord) - 360) < 1e-4) {
        list.pop();
    }
}
var AngleAxisView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(AngleAxisView, _super);
    function AngleAxisView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = AngleAxisView.type;
        _this.axisPointerClass = 'PolarAxisPointer';
        return _this;
    }
    AngleAxisView.prototype.render = function(angleAxisModel, ecModel) {
        this.group.removeAll();
        if (!angleAxisModel.get('show')) {
            return;
        }
        var angleAxis = angleAxisModel.axis;
        var polar = angleAxis.polar;
        var radiusExtent = polar.getRadiusAxis().getExtent();
        var ticksAngles = angleAxis.getTicksCoords();
        var minorTickAngles = angleAxis.getMinorTicksCoords();
        var labels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(angleAxis.getViewLabels(), function(labelItem) {
            labelItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"])(labelItem);
            var scale = angleAxis.scale;
            var tickValue = scale.type === 'ordinal' ? scale.getRawOrdinalNumber(labelItem.tickValue) : labelItem.tickValue;
            labelItem.coord = angleAxis.dataToCoord(tickValue);
            return labelItem;
        });
        fixAngleOverlap(labels);
        fixAngleOverlap(ticksAngles);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(elementList, function(name) {
            if (angleAxisModel.get([
                name,
                'show'
            ]) && (!angleAxis.scale.isBlank() || name === 'axisLine')) {
                angelAxisElementsBuilders[name](this.group, angleAxisModel, polar, ticksAngles, minorTickAngles, radiusExtent, labels);
            }
        }, this);
    };
    AngleAxisView.type = 'angleAxis';
    return AngleAxisView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
var angelAxisElementsBuilders = {
    axisLine: function(group, angleAxisModel, polar, ticksAngles, minorTickAngles, radiusExtent) {
        var lineStyleModel = angleAxisModel.getModel([
            'axisLine',
            'lineStyle'
        ]);
        var angleAxis = polar.getAngleAxis();
        var RADIAN = Math.PI / 180;
        var angleExtent = angleAxis.getExtent();
        // extent id of the axis radius (r0 and r)
        var rId = getRadiusIdx(polar);
        var r0Id = rId ? 0 : 1;
        var shape;
        var shapeType = Math.abs(angleExtent[1] - angleExtent[0]) === 360 ? 'Circle' : 'Arc';
        if (radiusExtent[r0Id] === 0) {
            shape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[shapeType]({
                shape: {
                    cx: polar.cx,
                    cy: polar.cy,
                    r: radiusExtent[rId],
                    startAngle: -angleExtent[0] * RADIAN,
                    endAngle: -angleExtent[1] * RADIAN,
                    clockwise: angleAxis.inverse
                },
                style: lineStyleModel.getLineStyle(),
                z2: 1,
                silent: true
            });
        } else {
            shape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Ring({
                shape: {
                    cx: polar.cx,
                    cy: polar.cy,
                    r: radiusExtent[rId],
                    r0: radiusExtent[r0Id]
                },
                style: lineStyleModel.getLineStyle(),
                z2: 1,
                silent: true
            });
        }
        shape.style.fill = null;
        group.add(shape);
    },
    axisTick: function(group, angleAxisModel, polar, ticksAngles, minorTickAngles, radiusExtent) {
        var tickModel = angleAxisModel.getModel('axisTick');
        var tickLen = (tickModel.get('inside') ? -1 : 1) * tickModel.get('length');
        var radius = radiusExtent[getRadiusIdx(polar)];
        var lines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(ticksAngles, function(tickAngleItem) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Line({
                shape: getAxisLineShape(polar, [
                    radius,
                    radius + tickLen
                ], tickAngleItem.coord)
            });
        });
        group.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.mergePath(lines, {
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"])(tickModel.getModel('lineStyle').getLineStyle(), {
                stroke: angleAxisModel.get([
                    'axisLine',
                    'lineStyle',
                    'color'
                ])
            })
        }));
    },
    minorTick: function(group, angleAxisModel, polar, tickAngles, minorTickAngles, radiusExtent) {
        if (!minorTickAngles.length) {
            return;
        }
        var tickModel = angleAxisModel.getModel('axisTick');
        var minorTickModel = angleAxisModel.getModel('minorTick');
        var tickLen = (tickModel.get('inside') ? -1 : 1) * minorTickModel.get('length');
        var radius = radiusExtent[getRadiusIdx(polar)];
        var lines = [];
        for(var i = 0; i < minorTickAngles.length; i++){
            for(var k = 0; k < minorTickAngles[i].length; k++){
                lines.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Line({
                    shape: getAxisLineShape(polar, [
                        radius,
                        radius + tickLen
                    ], minorTickAngles[i][k].coord)
                }));
            }
        }
        group.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.mergePath(lines, {
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"])(minorTickModel.getModel('lineStyle').getLineStyle(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"])(tickModel.getLineStyle(), {
                stroke: angleAxisModel.get([
                    'axisLine',
                    'lineStyle',
                    'color'
                ])
            }))
        }));
    },
    axisLabel: function(group, angleAxisModel, polar, ticksAngles, minorTickAngles, radiusExtent, labels) {
        var rawCategoryData = angleAxisModel.getCategories(true);
        var commonLabelModel = angleAxisModel.getModel('axisLabel');
        var labelMargin = commonLabelModel.get('margin');
        var triggerEvent = angleAxisModel.get('triggerEvent');
        // Use length of ticksAngles because it may remove the last tick to avoid overlapping
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(labels, function(labelItem, idx) {
            var labelModel = commonLabelModel;
            var tickValue = labelItem.tickValue;
            var r = radiusExtent[getRadiusIdx(polar)];
            var p = polar.coordToPoint([
                r + labelMargin,
                labelItem.coord
            ]);
            var cx = polar.cx;
            var cy = polar.cy;
            var labelTextAlign = Math.abs(p[0] - cx) / r < 0.3 ? 'center' : p[0] > cx ? 'left' : 'right';
            var labelTextVerticalAlign = Math.abs(p[1] - cy) / r < 0.3 ? 'middle' : p[1] > cy ? 'top' : 'bottom';
            if (rawCategoryData && rawCategoryData[tickValue]) {
                var rawCategoryItem = rawCategoryData[tickValue];
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(rawCategoryItem) && rawCategoryItem.textStyle) {
                    labelModel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](rawCategoryItem.textStyle, commonLabelModel, commonLabelModel.ecModel);
                }
            }
            var textEl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Text({
                silent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isLabelSilent(angleAxisModel),
                style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTextStyle"])(labelModel, {
                    x: p[0],
                    y: p[1],
                    fill: labelModel.getTextColor() || angleAxisModel.get([
                        'axisLine',
                        'lineStyle',
                        'color'
                    ]),
                    text: labelItem.formattedLabel,
                    align: labelTextAlign,
                    verticalAlign: labelTextVerticalAlign
                })
            });
            group.add(textEl);
            // Pack data for mouse event
            if (triggerEvent) {
                var eventData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].makeAxisEventDataBase(angleAxisModel);
                eventData.targetType = 'axisLabel';
                eventData.value = labelItem.rawLabel;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(textEl).eventData = eventData;
            }
        }, this);
    },
    splitLine: function(group, angleAxisModel, polar, ticksAngles, minorTickAngles, radiusExtent) {
        var splitLineModel = angleAxisModel.getModel('splitLine');
        var lineStyleModel = splitLineModel.getModel('lineStyle');
        var lineColors = lineStyleModel.get('color');
        var lineCount = 0;
        lineColors = lineColors instanceof Array ? lineColors : [
            lineColors
        ];
        var splitLines = [];
        for(var i = 0; i < ticksAngles.length; i++){
            var colorIndex = lineCount++ % lineColors.length;
            splitLines[colorIndex] = splitLines[colorIndex] || [];
            splitLines[colorIndex].push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Line({
                shape: getAxisLineShape(polar, radiusExtent, ticksAngles[i].coord)
            }));
        }
        // Simple optimization
        // Batching the lines if color are the same
        for(var i = 0; i < splitLines.length; i++){
            group.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.mergePath(splitLines[i], {
                style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"])({
                    stroke: lineColors[i % lineColors.length]
                }, lineStyleModel.getLineStyle()),
                silent: true,
                z: angleAxisModel.get('z')
            }));
        }
    },
    minorSplitLine: function(group, angleAxisModel, polar, ticksAngles, minorTickAngles, radiusExtent) {
        if (!minorTickAngles.length) {
            return;
        }
        var minorSplitLineModel = angleAxisModel.getModel('minorSplitLine');
        var lineStyleModel = minorSplitLineModel.getModel('lineStyle');
        var lines = [];
        for(var i = 0; i < minorTickAngles.length; i++){
            for(var k = 0; k < minorTickAngles[i].length; k++){
                lines.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Line({
                    shape: getAxisLineShape(polar, radiusExtent, minorTickAngles[i][k].coord)
                }));
            }
        }
        group.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.mergePath(lines, {
            style: lineStyleModel.getLineStyle(),
            silent: true,
            z: angleAxisModel.get('z')
        }));
    },
    splitArea: function(group, angleAxisModel, polar, ticksAngles, minorTickAngles, radiusExtent) {
        if (!ticksAngles.length) {
            return;
        }
        var splitAreaModel = angleAxisModel.getModel('splitArea');
        var areaStyleModel = splitAreaModel.getModel('areaStyle');
        var areaColors = areaStyleModel.get('color');
        var lineCount = 0;
        areaColors = areaColors instanceof Array ? areaColors : [
            areaColors
        ];
        var splitAreas = [];
        var RADIAN = Math.PI / 180;
        var prevAngle = -ticksAngles[0].coord * RADIAN;
        var r0 = Math.min(radiusExtent[0], radiusExtent[1]);
        var r1 = Math.max(radiusExtent[0], radiusExtent[1]);
        var clockwise = angleAxisModel.get('clockwise');
        for(var i = 1, len = ticksAngles.length; i <= len; i++){
            var coord = i === len ? ticksAngles[0].coord : ticksAngles[i].coord;
            var colorIndex = lineCount++ % areaColors.length;
            splitAreas[colorIndex] = splitAreas[colorIndex] || [];
            splitAreas[colorIndex].push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Sector({
                shape: {
                    cx: polar.cx,
                    cy: polar.cy,
                    r0: r0,
                    r: r1,
                    startAngle: prevAngle,
                    endAngle: -coord * RADIAN,
                    clockwise: clockwise
                },
                silent: true
            }));
            prevAngle = -coord * RADIAN;
        }
        // Simple optimization
        // Batching the lines if color are the same
        for(var i = 0; i < splitAreas.length; i++){
            group.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.mergePath(splitAreas[i], {
                style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"])({
                    fill: areaColors[i % areaColors.length]
                }, areaStyleModel.getAreaStyle()),
                silent: true
            }));
        }
    }
};
const __TURBOPACK__default__export__ = AngleAxisView;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/RadiusAxisView.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/AxisBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/AxisView.js [app-ssr] (ecmascript)");
;
;
;
;
;
var axisBuilderAttrs = [
    'axisLine',
    'axisTickLabel',
    'axisName'
];
var selfBuilderAttrs = [
    'splitLine',
    'splitArea',
    'minorSplitLine'
];
var RadiusAxisView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(RadiusAxisView, _super);
    function RadiusAxisView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = RadiusAxisView.type;
        _this.axisPointerClass = 'PolarAxisPointer';
        return _this;
    }
    RadiusAxisView.prototype.render = function(radiusAxisModel, ecModel) {
        this.group.removeAll();
        if (!radiusAxisModel.get('show')) {
            return;
        }
        var oldAxisGroup = this._axisGroup;
        var newAxisGroup = this._axisGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Group();
        this.group.add(newAxisGroup);
        var radiusAxis = radiusAxisModel.axis;
        var polar = radiusAxis.polar;
        var angleAxis = polar.getAngleAxis();
        var ticksCoords = radiusAxis.getTicksCoords();
        var minorTicksCoords = radiusAxis.getMinorTicksCoords();
        var axisAngle = angleAxis.getExtent()[0];
        var radiusExtent = radiusAxis.getExtent();
        var layout = layoutAxis(polar, radiusAxisModel, axisAngle);
        var axisBuilder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](radiusAxisModel, layout);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(axisBuilderAttrs, axisBuilder.add, axisBuilder);
        newAxisGroup.add(axisBuilder.getGroup());
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.groupTransition(oldAxisGroup, newAxisGroup, radiusAxisModel);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(selfBuilderAttrs, function(name) {
            if (radiusAxisModel.get([
                name,
                'show'
            ]) && !radiusAxis.scale.isBlank()) {
                axisElementBuilders[name](this.group, radiusAxisModel, polar, axisAngle, radiusExtent, ticksCoords, minorTicksCoords);
            }
        }, this);
    };
    RadiusAxisView.type = 'radiusAxis';
    return RadiusAxisView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
var axisElementBuilders = {
    splitLine: function(group, radiusAxisModel, polar, axisAngle, radiusExtent, ticksCoords) {
        var splitLineModel = radiusAxisModel.getModel('splitLine');
        var lineStyleModel = splitLineModel.getModel('lineStyle');
        var lineColors = lineStyleModel.get('color');
        var lineCount = 0;
        var angleAxis = polar.getAngleAxis();
        var RADIAN = Math.PI / 180;
        var angleExtent = angleAxis.getExtent();
        var shapeType = Math.abs(angleExtent[1] - angleExtent[0]) === 360 ? 'Circle' : 'Arc';
        lineColors = lineColors instanceof Array ? lineColors : [
            lineColors
        ];
        var splitLines = [];
        for(var i = 0; i < ticksCoords.length; i++){
            var colorIndex = lineCount++ % lineColors.length;
            splitLines[colorIndex] = splitLines[colorIndex] || [];
            splitLines[colorIndex].push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[shapeType]({
                shape: {
                    cx: polar.cx,
                    cy: polar.cy,
                    // ensure circle radius >= 0
                    r: Math.max(ticksCoords[i].coord, 0),
                    startAngle: -angleExtent[0] * RADIAN,
                    endAngle: -angleExtent[1] * RADIAN,
                    clockwise: angleAxis.inverse
                }
            }));
        }
        // Simple optimization
        // Batching the lines if color are the same
        for(var i = 0; i < splitLines.length; i++){
            group.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.mergePath(splitLines[i], {
                style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"])({
                    stroke: lineColors[i % lineColors.length],
                    fill: null
                }, lineStyleModel.getLineStyle()),
                silent: true
            }));
        }
    },
    minorSplitLine: function(group, radiusAxisModel, polar, axisAngle, radiusExtent, ticksCoords, minorTicksCoords) {
        if (!minorTicksCoords.length) {
            return;
        }
        var minorSplitLineModel = radiusAxisModel.getModel('minorSplitLine');
        var lineStyleModel = minorSplitLineModel.getModel('lineStyle');
        var lines = [];
        for(var i = 0; i < minorTicksCoords.length; i++){
            for(var k = 0; k < minorTicksCoords[i].length; k++){
                lines.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Circle({
                    shape: {
                        cx: polar.cx,
                        cy: polar.cy,
                        r: minorTicksCoords[i][k].coord
                    }
                }));
            }
        }
        group.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.mergePath(lines, {
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"])({
                fill: null
            }, lineStyleModel.getLineStyle()),
            silent: true
        }));
    },
    splitArea: function(group, radiusAxisModel, polar, axisAngle, radiusExtent, ticksCoords) {
        if (!ticksCoords.length) {
            return;
        }
        var splitAreaModel = radiusAxisModel.getModel('splitArea');
        var areaStyleModel = splitAreaModel.getModel('areaStyle');
        var areaColors = areaStyleModel.get('color');
        var lineCount = 0;
        areaColors = areaColors instanceof Array ? areaColors : [
            areaColors
        ];
        var splitAreas = [];
        var prevRadius = ticksCoords[0].coord;
        for(var i = 1; i < ticksCoords.length; i++){
            var colorIndex = lineCount++ % areaColors.length;
            splitAreas[colorIndex] = splitAreas[colorIndex] || [];
            splitAreas[colorIndex].push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Sector({
                shape: {
                    cx: polar.cx,
                    cy: polar.cy,
                    r0: prevRadius,
                    r: ticksCoords[i].coord,
                    startAngle: 0,
                    endAngle: Math.PI * 2
                },
                silent: true
            }));
            prevRadius = ticksCoords[i].coord;
        }
        // Simple optimization
        // Batching the lines if color are the same
        for(var i = 0; i < splitAreas.length; i++){
            group.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.mergePath(splitAreas[i], {
                style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"])({
                    fill: areaColors[i % areaColors.length]
                }, areaStyleModel.getAreaStyle()),
                silent: true
            }));
        }
    }
};
/**
 * @inner
 */ function layoutAxis(polar, radiusAxisModel, axisAngle) {
    return {
        position: [
            polar.cx,
            polar.cy
        ],
        rotation: axisAngle / 180 * Math.PI,
        labelDirection: -1,
        tickDirection: -1,
        nameDirection: 1,
        labelRotate: radiusAxisModel.getModel('axisLabel').get('rotate'),
        // Over splitLine and splitArea
        z2: 1
    };
}
const __TURBOPACK__default__export__ = RadiusAxisView;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/SingleAxisView.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/AxisBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Group.js [app-ssr] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Line$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Line.js [app-ssr] (ecmascript) <export default as Line>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$single$2f$singleAxisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/single/singleAxisHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/AxisView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisSplitHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/axisSplitHelper.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
var axisBuilderAttrs = [
    'axisLine',
    'axisTickLabel',
    'axisName'
];
var selfBuilderAttrs = [
    'splitArea',
    'splitLine'
];
var SingleAxisView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(SingleAxisView, _super);
    function SingleAxisView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = SingleAxisView.type;
        _this.axisPointerClass = 'SingleAxisPointer';
        return _this;
    }
    SingleAxisView.prototype.render = function(axisModel, ecModel, api, payload) {
        var group = this.group;
        group.removeAll();
        var oldAxisGroup = this._axisGroup;
        this._axisGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
        var layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$single$2f$singleAxisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layout"])(axisModel);
        var axisBuilder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](axisModel, layout);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(axisBuilderAttrs, axisBuilder.add, axisBuilder);
        group.add(this._axisGroup);
        group.add(axisBuilder.getGroup());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(selfBuilderAttrs, function(name) {
            if (axisModel.get([
                name,
                'show'
            ])) {
                axisElementBuilders[name](this, this.group, this._axisGroup, axisModel);
            }
        }, this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["groupTransition"])(oldAxisGroup, this._axisGroup, axisModel);
        _super.prototype.render.call(this, axisModel, ecModel, api, payload);
    };
    SingleAxisView.prototype.remove = function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisSplitHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rectCoordAxisHandleRemove"])(this);
    };
    SingleAxisView.type = 'singleAxis';
    return SingleAxisView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
var axisElementBuilders = {
    splitLine: function(axisView, group, axisGroup, axisModel) {
        var axis = axisModel.axis;
        if (axis.scale.isBlank()) {
            return;
        }
        var splitLineModel = axisModel.getModel('splitLine');
        var lineStyleModel = splitLineModel.getModel('lineStyle');
        var lineColors = lineStyleModel.get('color');
        lineColors = lineColors instanceof Array ? lineColors : [
            lineColors
        ];
        var lineWidth = lineStyleModel.get('width');
        var gridRect = axisModel.coordinateSystem.getRect();
        var isHorizontal = axis.isHorizontal();
        var splitLines = [];
        var lineCount = 0;
        var ticksCoords = axis.getTicksCoords({
            tickModel: splitLineModel
        });
        var p1 = [];
        var p2 = [];
        for(var i = 0; i < ticksCoords.length; ++i){
            var tickCoord = axis.toGlobalCoord(ticksCoords[i].coord);
            if (isHorizontal) {
                p1[0] = tickCoord;
                p1[1] = gridRect.y;
                p2[0] = tickCoord;
                p2[1] = gridRect.y + gridRect.height;
            } else {
                p1[0] = gridRect.x;
                p1[1] = tickCoord;
                p2[0] = gridRect.x + gridRect.width;
                p2[1] = tickCoord;
            }
            var line = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Line$3e$__["Line"]({
                shape: {
                    x1: p1[0],
                    y1: p1[1],
                    x2: p2[0],
                    y2: p2[1]
                },
                silent: true
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subPixelOptimizeLine"])(line.shape, lineWidth);
            var colorIndex = lineCount++ % lineColors.length;
            splitLines[colorIndex] = splitLines[colorIndex] || [];
            splitLines[colorIndex].push(line);
        }
        var lineStyle = lineStyleModel.getLineStyle([
            'color'
        ]);
        for(var i = 0; i < splitLines.length; ++i){
            group.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["mergePath"])(splitLines[i], {
                style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"])({
                    stroke: lineColors[i % lineColors.length]
                }, lineStyle),
                silent: true
            }));
        }
    },
    splitArea: function(axisView, group, axisGroup, axisModel) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisSplitHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rectCoordAxisBuildSplitArea"])(axisView, axisGroup, axisModel, axisModel);
    }
};
const __TURBOPACK__default__export__ = SingleAxisView;
}}),

};

//# sourceMappingURL=91337_echarts_lib_component_axis_7dfcfa63._.js.map