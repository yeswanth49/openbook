module.exports = {

"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/core.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
*/ // Core API from echarts/src/echarts
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/extension.js [app-ssr] (ecmascript)");
// Import label layout by default.
// TODO will be treeshaked.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$installLabelLayout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/installLabelLayout.js [app-ssr] (ecmascript)");
;
;
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$installLabelLayout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["installLabelLayout"]);
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/core.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/core.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
*/ // These APIs are for more advanced usages
// For example extend charts and components, creating graphic elements, formatting.
__turbopack_context__.s({
    "extendChartView": (()=>extendChartView),
    "extendComponentModel": (()=>extendComponentModel),
    "extendComponentView": (()=>extendComponentView),
    "extendSeriesModel": (()=>extendSeriesModel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Series.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Chart.js [app-ssr] (ecmascript)");
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
;
;
;
;
;
function extendComponentModel(proto) {
    var Model = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].extend(proto);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].registerClass(Model);
    return Model;
}
function extendComponentView(proto) {
    var View = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].extend(proto);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].registerClass(View);
    return View;
}
function extendSeriesModel(proto) {
    var Model = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].extend(proto);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].registerClass(Model);
    return Model;
}
function extendChartView(proto) {
    var View = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].extend(proto);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].registerClass(View);
    return View;
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/helper.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
*/ /**
 * This module exposes helper functions for developing extensions.
 */ __turbopack_context__.s({
    "createList": (()=>createList),
    "createScale": (()=>createScale),
    "createTextStyle": (()=>createTextStyle),
    "dataStack": (()=>dataStack),
    "mixinAxisModelCommonMethods": (()=>mixinAxisModelCommonMethods)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createSeriesData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/createSeriesData.js [app-ssr] (ecmascript)");
// import createGraphFromNodeEdge from './chart/helper/createGraphFromNodeEdge.js';
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisModelCommonMixin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisModelCommonMixin.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/helper/dataStackHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelStyle.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
function createList(seriesModel) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createSeriesData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(null, seriesModel);
}
;
;
var dataStack = {
    isDimensionStacked: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDimensionStacked"],
    enableDataStack: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enableDataStack"],
    getStackedDimension: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStackedDimension"]
};
;
function createScale(dataExtent, option) {
    var axisModel = option;
    if (!(option instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])) {
        axisModel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](option);
    // FIXME
    // Currently AxisModelCommonMixin has nothing to do with the
    // the requirements of `axisHelper.createScaleByModel`. For
    // example the methods `getCategories` and `getOrdinalMeta`
    // are required for `'category'` axis, and ecModel is required
    // for `'time'` axis. But occasionally echarts-gl happened
    // to only use `'value'` axis.
    // zrUtil.mixin(axisModel, AxisModelCommonMixin);
    }
    var scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createScaleByModel"])(axisModel);
    scale.setExtent(dataExtent[0], dataExtent[1]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["niceScaleExtent"])(scale, axisModel);
    return scale;
}
function mixinAxisModelCommonMethods(Model) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mixin"])(Model, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisModelCommonMixin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AxisModelCommonMixin"]);
}
;
;
function createTextStyle(textStyleModel, opts) {
    opts = opts || {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTextStyle"])(textStyleModel, null, null, opts.state !== 'normal');
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/helper.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/helper.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/helper.js [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createDimensions": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$createDimensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDimensions"]),
    "createList": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createList"]),
    "createScale": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createScale"]),
    "createSymbol": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSymbol"]),
    "createTextStyle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createTextStyle"]),
    "dataStack": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["dataStack"]),
    "enableHoverEmphasis": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enableHoverEmphasis"]),
    "getECData": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"]),
    "getLayoutRect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLayoutRect"]),
    "mixinAxisModelCommonMethods": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["mixinAxisModelCommonMethods"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/layout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/innerStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$createDimensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/helper/createDimensions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/symbol.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/states.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/helper.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/helper.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createDimensions": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createDimensions"]),
    "createList": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createList"]),
    "createScale": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createScale"]),
    "createSymbol": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createSymbol"]),
    "createTextStyle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createTextStyle"]),
    "dataStack": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["dataStack"]),
    "enableHoverEmphasis": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["enableHoverEmphasis"]),
    "getECData": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getECData"]),
    "getLayoutRect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getLayoutRect"]),
    "mixinAxisModelCommonMethods": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["mixinAxisModelCommonMethods"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/helper.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/helper.js [app-ssr] (ecmascript) <exports>");
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/number.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
*/ __turbopack_context__.s({});
;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/number.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/number.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/number.js [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MAX_SAFE_INTEGER": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_SAFE_INTEGER"]),
    "asc": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asc"]),
    "getPercentWithPrecision": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPercentWithPrecision"]),
    "getPixelPrecision": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPixelPrecision"]),
    "getPrecision": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrecision"]),
    "getPrecisionSafe": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrecisionSafe"]),
    "isNumeric": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumeric"]),
    "isRadianAroundZero": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isRadianAroundZero"]),
    "linearMap": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["linearMap"]),
    "nice": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nice"]),
    "numericToNumber": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numericToNumber"]),
    "parseDate": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDate"]),
    "quantile": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["quantile"]),
    "quantity": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["quantity"]),
    "quantityExponent": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["quantityExponent"]),
    "reformIntervals": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reformIntervals"]),
    "remRadian": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["remRadian"]),
    "round": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["round"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/number.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/number.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MAX_SAFE_INTEGER": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["MAX_SAFE_INTEGER"]),
    "asc": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["asc"]),
    "getPercentWithPrecision": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getPercentWithPrecision"]),
    "getPixelPrecision": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getPixelPrecision"]),
    "getPrecision": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getPrecision"]),
    "getPrecisionSafe": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getPrecisionSafe"]),
    "isNumeric": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["isNumeric"]),
    "isRadianAroundZero": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["isRadianAroundZero"]),
    "linearMap": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["linearMap"]),
    "nice": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["nice"]),
    "numericToNumber": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["numericToNumber"]),
    "parseDate": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["parseDate"]),
    "quantile": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["quantile"]),
    "quantity": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["quantity"]),
    "quantityExponent": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["quantityExponent"]),
    "reformIntervals": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["reformIntervals"]),
    "remRadian": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["remRadian"]),
    "round": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["round"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/number.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/number.js [app-ssr] (ecmascript) <exports>");
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/time.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
*/ __turbopack_context__.s({});
;
;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/time.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/time.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/time.js [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "format": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"]),
    "parse": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDate"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/time.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/time.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/time.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "format": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["format"]),
    "parse": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["parse"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/time.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/time.js [app-ssr] (ecmascript) <exports>");
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/graphic.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
*/ __turbopack_context__.s({});
;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/graphic.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/graphic.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/graphic.js [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Arc": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Arc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Arc$3e$__["Arc"]),
    "BezierCurve": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$BezierCurve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BezierCurve$3e$__["BezierCurve"]),
    "BoundingRect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BoundingRect$3e$__["BoundingRect"]),
    "Circle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"]),
    "CompoundPath": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$CompoundPath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CompoundPath$3e$__["CompoundPath"]),
    "Ellipse": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Ellipse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ellipse$3e$__["Ellipse"]),
    "Group": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]),
    "Image": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"]),
    "IncrementalDisplayable": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$IncrementalDisplayable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IncrementalDisplayable$3e$__["IncrementalDisplayable"]),
    "Line": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Line$3e$__["Line"]),
    "LinearGradient": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$LinearGradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LinearGradient$3e$__["LinearGradient"]),
    "Polygon": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polygon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Polygon$3e$__["Polygon"]),
    "Polyline": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polyline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Polyline$3e$__["Polyline"]),
    "RadialGradient": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$RadialGradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RadialGradient$3e$__["RadialGradient"]),
    "Rect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]),
    "Ring": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Ring$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ring$3e$__["Ring"]),
    "Sector": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Sector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sector$3e$__["Sector"]),
    "Text": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"]),
    "clipPointsByRect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["clipPointsByRect"]),
    "clipRectByRect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["clipRectByRect"]),
    "createIcon": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createIcon"]),
    "extendPath": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["extendPath"]),
    "extendShape": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["extendShape"]),
    "getShapeClass": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getShapeClass"]),
    "getTransform": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTransform"]),
    "initProps": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initProps"]),
    "makeImage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["makeImage"]),
    "makePath": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["makePath"]),
    "mergePath": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["mergePath"]),
    "registerShape": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerShape"]),
    "resizePath": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resizePath"]),
    "updateProps": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateProps"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/animation/basicTransition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Group.js [app-ssr] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Image.js [app-ssr] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Text.js [app-ssr] (ecmascript) <export default as Text>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Circle.js [app-ssr] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Ellipse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ellipse$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Ellipse.js [app-ssr] (ecmascript) <export default as Ellipse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Sector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sector$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Sector.js [app-ssr] (ecmascript) <export default as Sector>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Ring$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ring$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Ring.js [app-ssr] (ecmascript) <export default as Ring>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polygon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Polygon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Polygon.js [app-ssr] (ecmascript) <export default as Polygon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polyline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Polyline$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Polyline.js [app-ssr] (ecmascript) <export default as Polyline>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Rect.js [app-ssr] (ecmascript) <export default as Rect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Line$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Line.js [app-ssr] (ecmascript) <export default as Line>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$BezierCurve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BezierCurve$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/BezierCurve.js [app-ssr] (ecmascript) <export default as BezierCurve>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Arc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Arc$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Arc.js [app-ssr] (ecmascript) <export default as Arc>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$IncrementalDisplayable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IncrementalDisplayable$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/IncrementalDisplayable.js [app-ssr] (ecmascript) <export default as IncrementalDisplayable>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$CompoundPath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CompoundPath$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/CompoundPath.js [app-ssr] (ecmascript) <export default as CompoundPath>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$LinearGradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LinearGradient$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/LinearGradient.js [app-ssr] (ecmascript) <export default as LinearGradient>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$RadialGradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RadialGradient$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/RadialGradient.js [app-ssr] (ecmascript) <export default as RadialGradient>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BoundingRect$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/BoundingRect.js [app-ssr] (ecmascript) <export default as BoundingRect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/graphic.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/graphic.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Arc": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Arc"]),
    "BezierCurve": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["BezierCurve"]),
    "BoundingRect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["BoundingRect"]),
    "Circle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Circle"]),
    "CompoundPath": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["CompoundPath"]),
    "Ellipse": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Ellipse"]),
    "Group": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Group"]),
    "Image": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Image"]),
    "IncrementalDisplayable": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["IncrementalDisplayable"]),
    "Line": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Line"]),
    "LinearGradient": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["LinearGradient"]),
    "Polygon": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Polygon"]),
    "Polyline": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Polyline"]),
    "RadialGradient": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["RadialGradient"]),
    "Rect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Rect"]),
    "Ring": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Ring"]),
    "Sector": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Sector"]),
    "Text": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Text"]),
    "clipPointsByRect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["clipPointsByRect"]),
    "clipRectByRect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["clipRectByRect"]),
    "createIcon": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createIcon"]),
    "extendPath": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["extendPath"]),
    "extendShape": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["extendShape"]),
    "getShapeClass": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getShapeClass"]),
    "getTransform": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getTransform"]),
    "initProps": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["initProps"]),
    "makeImage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["makeImage"]),
    "makePath": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["makePath"]),
    "mergePath": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["mergePath"]),
    "registerShape": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["registerShape"]),
    "resizePath": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["resizePath"]),
    "updateProps": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["updateProps"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/graphic.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/graphic.js [app-ssr] (ecmascript) <exports>");
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/format.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
*/ __turbopack_context__.s({});
;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/format.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/format.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/format.js [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addCommas": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addCommas"]),
    "capitalFirst": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["capitalFirst"]),
    "encodeHTML": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeHTML"]),
    "formatTime": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatTime"]),
    "formatTpl": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatTpl"]),
    "getTextRect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$legacy$2f$getTextRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTextRect"]),
    "getTooltipMarker": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTooltipMarker"]),
    "normalizeCssArray": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["normalizeCssArray"]),
    "toCamelCase": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toCamelCase"]),
    "truncateText": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$helper$2f$parseText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["truncateText"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$helper$2f$parseText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/helper/parseText.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$legacy$2f$getTextRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/legacy/getTextRect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/format.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/format.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addCommas": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["addCommas"]),
    "capitalFirst": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["capitalFirst"]),
    "encodeHTML": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["encodeHTML"]),
    "formatTime": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["formatTime"]),
    "formatTpl": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["formatTpl"]),
    "getTextRect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getTextRect"]),
    "getTooltipMarker": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getTooltipMarker"]),
    "normalizeCssArray": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["normalizeCssArray"]),
    "toCamelCase": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["toCamelCase"]),
    "truncateText": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["truncateText"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/format.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/format.js [app-ssr] (ecmascript) <exports>");
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/util.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
*/ __turbopack_context__.s({});
;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/util.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/util.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/util.js [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "bind": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"]),
    "clone": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"]),
    "curry": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["curry"]),
    "defaults": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"]),
    "each": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"]),
    "extend": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"]),
    "filter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filter"]),
    "indexOf": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["indexOf"]),
    "inherits": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inherits"]),
    "isArray": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"]),
    "isFunction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"]),
    "isObject": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"]),
    "isString": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"]),
    "map": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"]),
    "merge": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["merge"]),
    "reduce": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reduce"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/util.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/util.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "bind": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["bind"]),
    "clone": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["clone"]),
    "curry": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["curry"]),
    "defaults": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["defaults"]),
    "each": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["each"]),
    "extend": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["extend"]),
    "filter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["filter"]),
    "indexOf": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["indexOf"]),
    "inherits": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["inherits"]),
    "isArray": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["isArray"]),
    "isFunction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["isFunction"]),
    "isObject": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["isObject"]),
    "isString": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["isString"]),
    "map": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["map"]),
    "merge": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["merge"]),
    "reduce": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["reduce"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/util.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/util.js [app-ssr] (ecmascript) <exports>");
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api.js [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Axis": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$Axis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]),
    "ChartView": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]),
    "ComponentModel": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]),
    "ComponentView": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]),
    "List": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$SeriesData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]),
    "Model": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]),
    "SeriesModel": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]),
    "color": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__),
    "env": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]),
    "extendChartView": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["extendChartView"]),
    "extendComponentModel": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["extendComponentModel"]),
    "extendComponentView": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["extendComponentView"]),
    "extendSeriesModel": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["extendSeriesModel"]),
    "format": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__),
    "graphic": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__),
    "helper": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__),
    "innerDrawElementOnCanvas": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$canvas$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brushSingle"]),
    "matrix": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__),
    "number": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__),
    "parseGeoJSON": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$parseGeoJson$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]),
    "parseGeoJson": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$parseGeoJson$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]),
    "setPlatformAPI": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$platform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setPlatformAPI"]),
    "throttle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["throttle"]),
    "time": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__),
    "use": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"]),
    "util": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__),
    "vector": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__),
    "zrUtil": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__),
    "zrender": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$zrender$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Series.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Chart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$SeriesData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/SeriesData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$zrender$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/zrender.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/matrix.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/tool/color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/throttle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/helper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/extension.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$platform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/platform.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$parseGeoJson$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/geo/parseGeoJson.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/time.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/graphic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/format.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/env.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$Axis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/Axis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$canvas$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/canvas/graphic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Axis": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Axis"]),
    "ChartView": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ChartView"]),
    "ComponentModel": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ComponentModel"]),
    "ComponentView": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ComponentView"]),
    "List": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["List"]),
    "Model": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Model"]),
    "SeriesModel": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["SeriesModel"]),
    "color": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["color"]),
    "env": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["env"]),
    "extendChartView": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["extendChartView"]),
    "extendComponentModel": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["extendComponentModel"]),
    "extendComponentView": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["extendComponentView"]),
    "extendSeriesModel": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["extendSeriesModel"]),
    "format": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["format"]),
    "graphic": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["graphic"]),
    "helper": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["helper"]),
    "innerDrawElementOnCanvas": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["innerDrawElementOnCanvas"]),
    "matrix": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["matrix"]),
    "number": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["number"]),
    "parseGeoJSON": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["parseGeoJSON"]),
    "parseGeoJson": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["parseGeoJson"]),
    "setPlatformAPI": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["setPlatformAPI"]),
    "throttle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["throttle"]),
    "time": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["time"]),
    "use": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["use"]),
    "util": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["util"]),
    "vector": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["vector"]),
    "zrUtil": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["zrUtil"]),
    "zrender": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["zrender"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api.js [app-ssr] (ecmascript) <exports>");
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/core.js [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Axis": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Axis"]),
    "ChartView": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChartView"]),
    "ComponentModel": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ComponentModel"]),
    "ComponentView": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ComponentView"]),
    "List": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"]),
    "Model": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Model"]),
    "PRIORITY": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRIORITY"]),
    "SeriesModel": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SeriesModel"]),
    "color": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["color"]),
    "connect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["connect"]),
    "dataTool": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataTool"]),
    "dependencies": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dependencies"]),
    "disConnect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["disConnect"]),
    "disconnect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["disconnect"]),
    "dispose": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispose"]),
    "env": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"]),
    "extendChartView": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extendChartView"]),
    "extendComponentModel": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extendComponentModel"]),
    "extendComponentView": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extendComponentView"]),
    "extendSeriesModel": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extendSeriesModel"]),
    "format": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"]),
    "getCoordinateSystemDimensions": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCoordinateSystemDimensions"]),
    "getInstanceByDom": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInstanceByDom"]),
    "getInstanceById": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInstanceById"]),
    "getMap": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMap"]),
    "graphic": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["graphic"]),
    "helper": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["helper"]),
    "init": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["init"]),
    "innerDrawElementOnCanvas": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["innerDrawElementOnCanvas"]),
    "matrix": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matrix"]),
    "number": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"]),
    "parseGeoJSON": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseGeoJSON"]),
    "parseGeoJson": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseGeoJson"]),
    "registerAction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerAction"]),
    "registerCoordinateSystem": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerCoordinateSystem"]),
    "registerLayout": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerLayout"]),
    "registerLoading": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerLoading"]),
    "registerLocale": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerLocale"]),
    "registerMap": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerMap"]),
    "registerPostInit": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerPostInit"]),
    "registerPostUpdate": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerPostUpdate"]),
    "registerPreprocessor": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerPreprocessor"]),
    "registerProcessor": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerProcessor"]),
    "registerTheme": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerTheme"]),
    "registerTransform": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerTransform"]),
    "registerUpdateLifecycle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerUpdateLifecycle"]),
    "registerVisual": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerVisual"]),
    "setCanvasCreator": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCanvasCreator"]),
    "setPlatformAPI": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setPlatformAPI"]),
    "throttle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["throttle"]),
    "time": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["time"]),
    "use": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"]),
    "util": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"]),
    "vector": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vector"]),
    "version": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]),
    "zrUtil": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zrUtil"]),
    "zrender": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zrender"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/core/echarts.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/core.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/core.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Axis": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Axis"]),
    "ChartView": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ChartView"]),
    "ComponentModel": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ComponentModel"]),
    "ComponentView": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ComponentView"]),
    "List": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["List"]),
    "Model": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Model"]),
    "PRIORITY": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["PRIORITY"]),
    "SeriesModel": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["SeriesModel"]),
    "color": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["color"]),
    "connect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["connect"]),
    "dataTool": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["dataTool"]),
    "dependencies": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["dependencies"]),
    "disConnect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["disConnect"]),
    "disconnect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["disconnect"]),
    "dispose": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["dispose"]),
    "env": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["env"]),
    "extendChartView": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["extendChartView"]),
    "extendComponentModel": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["extendComponentModel"]),
    "extendComponentView": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["extendComponentView"]),
    "extendSeriesModel": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["extendSeriesModel"]),
    "format": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["format"]),
    "getCoordinateSystemDimensions": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getCoordinateSystemDimensions"]),
    "getInstanceByDom": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getInstanceByDom"]),
    "getInstanceById": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getInstanceById"]),
    "getMap": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getMap"]),
    "graphic": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["graphic"]),
    "helper": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["helper"]),
    "init": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["init"]),
    "innerDrawElementOnCanvas": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["innerDrawElementOnCanvas"]),
    "matrix": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["matrix"]),
    "number": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["number"]),
    "parseGeoJSON": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["parseGeoJSON"]),
    "parseGeoJson": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["parseGeoJson"]),
    "registerAction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["registerAction"]),
    "registerCoordinateSystem": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["registerCoordinateSystem"]),
    "registerLayout": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["registerLayout"]),
    "registerLoading": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["registerLoading"]),
    "registerLocale": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["registerLocale"]),
    "registerMap": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["registerMap"]),
    "registerPostInit": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["registerPostInit"]),
    "registerPostUpdate": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["registerPostUpdate"]),
    "registerPreprocessor": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["registerPreprocessor"]),
    "registerProcessor": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["registerProcessor"]),
    "registerTheme": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["registerTheme"]),
    "registerTransform": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["registerTransform"]),
    "registerUpdateLifecycle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["registerUpdateLifecycle"]),
    "registerVisual": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["registerVisual"]),
    "setCanvasCreator": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["setCanvasCreator"]),
    "setPlatformAPI": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["setPlatformAPI"]),
    "throttle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["throttle"]),
    "time": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["time"]),
    "use": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["use"]),
    "util": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["util"]),
    "vector": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["vector"]),
    "version": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["version"]),
    "zrUtil": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["zrUtil"]),
    "zrender": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["zrender"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/core.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$export$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/core.js [app-ssr] (ecmascript) <exports>");
}}),

};

//# sourceMappingURL=91337_echarts_lib_export_87326176._.js.map