(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/CoordinateSystem.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "isCoordinateSystemType": (()=>isCoordinateSystemType)
});
function isCoordinateSystemType(coordSys, type) {
    return coordSys.type === type;
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/cartesian/GridModel.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Component.js [app-client] (ecmascript)");
;
;
var GridModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(GridModel, _super);
    function GridModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GridModel.type = 'grid';
    GridModel.dependencies = [
        'xAxis',
        'yAxis'
    ];
    GridModel.layoutMode = 'box';
    GridModel.defaultOption = {
        show: false,
        // zlevel: 0,
        z: 0,
        left: '10%',
        top: 60,
        right: '10%',
        bottom: 70,
        // If grid size contain label
        containLabel: false,
        // width: {totalWidth} - left - right,
        // height: {totalHeight} - top - bottom,
        backgroundColor: 'rgba(0,0,0,0)',
        borderWidth: 1,
        borderColor: '#ccc'
    };
    return GridModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = GridModel;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisModelCommonMixin.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
*/ // eslint-disable-next-line @typescript-eslint/no-unused-vars
__turbopack_context__.s({
    "AxisModelCommonMixin": (()=>AxisModelCommonMixin)
});
var AxisModelCommonMixin = /** @class */ function() {
    function AxisModelCommonMixin() {}
    AxisModelCommonMixin.prototype.getNeedCrossZero = function() {
        var option = this.option;
        return !option.scale;
    };
    /**
   * Should be implemented by each axis model if necessary.
   * @return coordinate system model
   */ AxisModelCommonMixin.prototype.getCoordSysModel = function() {
        return;
    };
    return AxisModelCommonMixin;
}();
;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/cartesian/AxisModel.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "CartesianAxisModel": (()=>CartesianAxisModel),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisModelCommonMixin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisModelCommonMixin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
;
;
;
;
;
var CartesianAxisModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(CartesianAxisModel, _super);
    function CartesianAxisModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CartesianAxisModel.prototype.getCoordSysModel = function() {
        return this.getReferringComponents('grid', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SINGLE_REFERRING"]).models[0];
    };
    CartesianAxisModel.type = 'cartesian2dAxis';
    return CartesianAxisModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixin"])(CartesianAxisModel, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisModelCommonMixin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxisModelCommonMixin"]);
const __TURBOPACK__default__export__ = CartesianAxisModel;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisDefault.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
var defaultOption = {
    show: true,
    // zlevel: 0,
    z: 0,
    // Inverse the axis.
    inverse: false,
    // Axis name displayed.
    name: '',
    // 'start' | 'middle' | 'end'
    nameLocation: 'end',
    // By degree. By default auto rotate by nameLocation.
    nameRotate: null,
    nameTruncate: {
        maxWidth: null,
        ellipsis: '...',
        placeholder: '.'
    },
    // Use global text style by default.
    nameTextStyle: {},
    // The gap between axisName and axisLine.
    nameGap: 15,
    // Default `false` to support tooltip.
    silent: false,
    // Default `false` to avoid legacy user event listener fail.
    triggerEvent: false,
    tooltip: {
        show: false
    },
    axisPointer: {},
    axisLine: {
        show: true,
        onZero: true,
        onZeroAxisIndex: null,
        lineStyle: {
            color: '#6E7079',
            width: 1,
            type: 'solid'
        },
        // The arrow at both ends the the axis.
        symbol: [
            'none',
            'none'
        ],
        symbolSize: [
            10,
            15
        ]
    },
    axisTick: {
        show: true,
        // Whether axisTick is inside the grid or outside the grid.
        inside: false,
        // The length of axisTick.
        length: 5,
        lineStyle: {
            width: 1
        }
    },
    axisLabel: {
        show: true,
        // Whether axisLabel is inside the grid or outside the grid.
        inside: false,
        rotate: 0,
        // true | false | null/undefined (auto)
        showMinLabel: null,
        // true | false | null/undefined (auto)
        showMaxLabel: null,
        margin: 8,
        // formatter: null,
        fontSize: 12
    },
    splitLine: {
        show: true,
        showMinLine: true,
        showMaxLine: true,
        lineStyle: {
            color: [
                '#E0E6F1'
            ],
            width: 1,
            type: 'solid'
        }
    },
    splitArea: {
        show: false,
        areaStyle: {
            color: [
                'rgba(250,250,250,0.2)',
                'rgba(210,219,238,0.2)'
            ]
        }
    }
};
var categoryAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])({
    // The gap at both ends of the axis. For categoryAxis, boolean.
    boundaryGap: true,
    // Set false to faster category collection.
    deduplication: null,
    // splitArea: {
    // show: false
    // },
    splitLine: {
        show: false
    },
    axisTick: {
        // If tick is align with label when boundaryGap is true
        alignWithLabel: false,
        interval: 'auto'
    },
    axisLabel: {
        interval: 'auto'
    }
}, defaultOption);
var valueAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])({
    boundaryGap: [
        0,
        0
    ],
    axisLine: {
        // Not shown when other axis is categoryAxis in cartesian
        show: 'auto'
    },
    axisTick: {
        // Not shown when other axis is categoryAxis in cartesian
        show: 'auto'
    },
    // TODO
    // min/max: [30, datamin, 60] or [20, datamin] or [datamin, 60]
    splitNumber: 5,
    minorTick: {
        // Minor tick, not available for cateogry axis.
        show: false,
        // Split number of minor ticks. The value should be in range of (0, 100)
        splitNumber: 5,
        // Length of minor tick
        length: 3,
        // Line style
        lineStyle: {
        }
    },
    minorSplitLine: {
        show: false,
        lineStyle: {
            color: '#F4F7FD',
            width: 1
        }
    }
}, defaultOption);
var timeAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])({
    splitNumber: 6,
    axisLabel: {
        // To eliminate labels that are not nice
        showMinLabel: false,
        showMaxLabel: false,
        rich: {
            primary: {
                fontWeight: 'bold'
            }
        }
    },
    splitLine: {
        show: false
    }
}, valueAxis);
var logAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"])({
    logBase: 10
}, valueAxis);
const __TURBOPACK__default__export__ = {
    category: categoryAxis,
    value: valueAxis,
    time: timeAxis,
    log: logAxis
};
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisCommonTypes.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "AXIS_TYPES": (()=>AXIS_TYPES)
});
var AXIS_TYPES = {
    value: 1,
    category: 1,
    time: 1,
    log: 1
};
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisModelCreator.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "default": (()=>axisModelCreator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisDefault$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisDefault.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/layout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$OrdinalMeta$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/OrdinalMeta.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisCommonTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisCommonTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
;
;
;
;
;
function axisModelCreator(registers, axisName, BaseAxisModelClass, extraDefaultOption) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisCommonTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AXIS_TYPES"], function(v, axisType) {
        var defaultOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisDefault$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][axisType], true), extraDefaultOption, true);
        var AxisModel = /** @class */ function(_super) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(AxisModel, _super);
            function AxisModel() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.type = axisName + 'Axis.' + axisType;
                return _this;
            }
            AxisModel.prototype.mergeDefaultAndTheme = function(option, ecModel) {
                var layoutMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchLayoutMode"])(this);
                var inputPositionParams = layoutMode ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLayoutParams"])(option) : {};
                var themeModel = ecModel.getTheme();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])(option, themeModel.get(axisType + 'Axis'));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])(option, this.getDefaultOption());
                option.type = getAxisType(option);
                if (layoutMode) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeLayoutParam"])(option, inputPositionParams, layoutMode);
                }
            };
            AxisModel.prototype.optionUpdated = function() {
                var thisOption = this.option;
                if (thisOption.type === 'category') {
                    this.__ordinalMeta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$OrdinalMeta$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createByAxisModel(this);
                }
            };
            /**
       * Should not be called before all of 'getInitailData' finished.
       * Because categories are collected during initializing data.
       */ AxisModel.prototype.getCategories = function(rawData) {
                var option = this.option;
                // FIXME
                // warning if called before all of 'getInitailData' finished.
                if (option.type === 'category') {
                    if (rawData) {
                        return option.data;
                    }
                    return this.__ordinalMeta.categories;
                }
            };
            AxisModel.prototype.getOrdinalMeta = function() {
                return this.__ordinalMeta;
            };
            AxisModel.type = axisName + 'Axis.' + axisType;
            AxisModel.defaultOption = defaultOption;
            return AxisModel;
        }(BaseAxisModelClass);
        registers.registerComponentModel(AxisModel);
    });
    registers.registerSubTypeDefaulter(axisName + 'Axis', getAxisType);
}
function getAxisType(option) {
    // Default axis with data is category axis
    return option.type || (option.data ? 'category' : 'value');
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/scaleRawExtentInfo.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "ScaleRawExtentInfo": (()=>ScaleRawExtentInfo),
    "ensureScaleRawExtentInfo": (()=>ensureScaleRawExtentInfo),
    "parseAxisModelMinMax": (()=>parseAxisModelMinMax)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/contain/text.js [app-client] (ecmascript)");
;
;
var ScaleRawExtentInfo = /** @class */ function() {
    function ScaleRawExtentInfo(scale, model, // Usually: data extent from all series on this axis.
    originalExtent) {
        this._prepareParams(scale, model, originalExtent);
    }
    /**
   * Parameters depending on outside (like model, user callback)
   * are prepared and fixed here.
   */ ScaleRawExtentInfo.prototype._prepareParams = function(scale, model, // Usually: data extent from all series on this axis.
    dataExtent) {
        if (dataExtent[1] < dataExtent[0]) {
            dataExtent = [
                NaN,
                NaN
            ];
        }
        this._dataMin = dataExtent[0];
        this._dataMax = dataExtent[1];
        var isOrdinal = this._isOrdinal = scale.type === 'ordinal';
        this._needCrossZero = scale.type === 'interval' && model.getNeedCrossZero && model.getNeedCrossZero();
        var axisMinValue = model.get('min', true);
        if (axisMinValue == null) {
            axisMinValue = model.get('startValue', true);
        }
        var modelMinRaw = this._modelMinRaw = axisMinValue;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(modelMinRaw)) {
            // This callback always provides users the full data extent (before data is filtered).
            this._modelMinNum = parseAxisModelMinMax(scale, modelMinRaw({
                min: dataExtent[0],
                max: dataExtent[1]
            }));
        } else if (modelMinRaw !== 'dataMin') {
            this._modelMinNum = parseAxisModelMinMax(scale, modelMinRaw);
        }
        var modelMaxRaw = this._modelMaxRaw = model.get('max', true);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(modelMaxRaw)) {
            // This callback always provides users the full data extent (before data is filtered).
            this._modelMaxNum = parseAxisModelMinMax(scale, modelMaxRaw({
                min: dataExtent[0],
                max: dataExtent[1]
            }));
        } else if (modelMaxRaw !== 'dataMax') {
            this._modelMaxNum = parseAxisModelMinMax(scale, modelMaxRaw);
        }
        if (isOrdinal) {
            // FIXME: there is a flaw here: if there is no "block" data processor like `dataZoom`,
            // and progressive rendering is using, here the category result might just only contain
            // the processed chunk rather than the entire result.
            this._axisDataLen = model.getCategories().length;
        } else {
            var boundaryGap = model.get('boundaryGap');
            var boundaryGapArr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(boundaryGap) ? boundaryGap : [
                boundaryGap || 0,
                boundaryGap || 0
            ];
            if (typeof boundaryGapArr[0] === 'boolean' || typeof boundaryGapArr[1] === 'boolean') {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn('Boolean type for boundaryGap is only ' + 'allowed for ordinal axis. Please use string in ' + 'percentage instead, e.g., "20%". Currently, ' + 'boundaryGap is set to be 0.');
                }
                this._boundaryGapInner = [
                    0,
                    0
                ];
            } else {
                this._boundaryGapInner = [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(boundaryGapArr[0], 1),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(boundaryGapArr[1], 1)
                ];
            }
        }
    };
    /**
   * Calculate extent by prepared parameters.
   * This method has no external dependency and can be called duplicatedly,
   * getting the same result.
   * If parameters changed, should call this method to recalcuate.
   */ ScaleRawExtentInfo.prototype.calculate = function() {
        // Notice: When min/max is not set (that is, when there are null/undefined,
        // which is the most common case), these cases should be ensured:
        // (1) For 'ordinal', show all axis.data.
        // (2) For others:
        //      + `boundaryGap` is applied (if min/max set, boundaryGap is
        //      disabled).
        //      + If `needCrossZero`, min/max should be zero, otherwise, min/max should
        //      be the result that originalExtent enlarged by boundaryGap.
        // (3) If no data, it should be ensured that `scale.setBlank` is set.
        var isOrdinal = this._isOrdinal;
        var dataMin = this._dataMin;
        var dataMax = this._dataMax;
        var axisDataLen = this._axisDataLen;
        var boundaryGapInner = this._boundaryGapInner;
        var span = !isOrdinal ? dataMax - dataMin || Math.abs(dataMin) : null;
        // Currently if a `'value'` axis model min is specified as 'dataMin'/'dataMax',
        // `boundaryGap` will not be used. It's the different from specifying as `null`/`undefined`.
        var min = this._modelMinRaw === 'dataMin' ? dataMin : this._modelMinNum;
        var max = this._modelMaxRaw === 'dataMax' ? dataMax : this._modelMaxNum;
        // If `_modelMinNum`/`_modelMaxNum` is `null`/`undefined`, should not be fixed.
        var minFixed = min != null;
        var maxFixed = max != null;
        if (min == null) {
            min = isOrdinal ? axisDataLen ? 0 : NaN : dataMin - boundaryGapInner[0] * span;
        }
        if (max == null) {
            max = isOrdinal ? axisDataLen ? axisDataLen - 1 : NaN : dataMax + boundaryGapInner[1] * span;
        }
        (min == null || !isFinite(min)) && (min = NaN);
        (max == null || !isFinite(max)) && (max = NaN);
        var isBlank = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eqNaN"])(min) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eqNaN"])(max) || isOrdinal && !axisDataLen;
        // If data extent modified, need to recalculated to ensure cross zero.
        if (this._needCrossZero) {
            // Axis is over zero and min is not set
            if (min > 0 && max > 0 && !minFixed) {
                min = 0;
            // minFixed = true;
            }
            // Axis is under zero and max is not set
            if (min < 0 && max < 0 && !maxFixed) {
                max = 0;
            // maxFixed = true;
            }
        // PENDING:
        // When `needCrossZero` and all data is positive/negative, should it be ensured
        // that the results processed by boundaryGap are positive/negative?
        // If so, here `minFixed`/`maxFixed` need to be set.
        }
        var determinedMin = this._determinedMin;
        var determinedMax = this._determinedMax;
        if (determinedMin != null) {
            min = determinedMin;
            minFixed = true;
        }
        if (determinedMax != null) {
            max = determinedMax;
            maxFixed = true;
        }
        // Ensure min/max be finite number or NaN here. (not to be null/undefined)
        // `NaN` means min/max axis is blank.
        return {
            min: min,
            max: max,
            minFixed: minFixed,
            maxFixed: maxFixed,
            isBlank: isBlank
        };
    };
    ScaleRawExtentInfo.prototype.modifyDataMinMax = function(minMaxName, val) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(!this.frozen);
        }
        this[DATA_MIN_MAX_ATTR[minMaxName]] = val;
    };
    ScaleRawExtentInfo.prototype.setDeterminedMinMax = function(minMaxName, val) {
        var attr = DETERMINED_MIN_MAX_ATTR[minMaxName];
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(!this.frozen && this[attr] == null);
        }
        this[attr] = val;
    };
    ScaleRawExtentInfo.prototype.freeze = function() {
        // @ts-ignore
        this.frozen = true;
    };
    return ScaleRawExtentInfo;
}();
;
var DETERMINED_MIN_MAX_ATTR = {
    min: '_determinedMin',
    max: '_determinedMax'
};
var DATA_MIN_MAX_ATTR = {
    min: '_dataMin',
    max: '_dataMax'
};
function ensureScaleRawExtentInfo(scale, model, // Usually: data extent from all series on this axis.
originalExtent) {
    // Do not permit to recreate.
    var rawExtentInfo = scale.rawExtentInfo;
    if (rawExtentInfo) {
        return rawExtentInfo;
    }
    rawExtentInfo = new ScaleRawExtentInfo(scale, model, originalExtent);
    // @ts-ignore
    scale.rawExtentInfo = rawExtentInfo;
    return rawExtentInfo;
}
function parseAxisModelMinMax(scale, minMax) {
    return minMax == null ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eqNaN"])(minMax) ? NaN : scale.parse(minMax);
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisHelper.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "createScaleByModel": (()=>createScaleByModel),
    "estimateLabelUnionRect": (()=>estimateLabelUnionRect),
    "getAxisRawValue": (()=>getAxisRawValue),
    "getDataDimensionsOnAxis": (()=>getDataDimensionsOnAxis),
    "getOptionCategoryInterval": (()=>getOptionCategoryInterval),
    "getScaleExtent": (()=>getScaleExtent),
    "ifAxisCrossZero": (()=>ifAxisCrossZero),
    "makeLabelFormatter": (()=>makeLabelFormatter),
    "niceScaleExtent": (()=>niceScaleExtent),
    "shouldShowAllLabels": (()=>shouldShowAllLabels),
    "unionAxisExtentFromData": (()=>unionAxisExtentFromData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Ordinal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/scale/Ordinal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Interval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/scale/Interval.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/scale/Scale.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$layout$2f$barGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/layout/barGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/BoundingRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/scale/Time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/scale/Log.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/helper/dataStackHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$scaleRawExtentInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/scaleRawExtentInfo.js [app-client] (ecmascript)");
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
function getScaleExtent(scale, model) {
    var scaleType = scale.type;
    var rawExtentResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$scaleRawExtentInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureScaleRawExtentInfo"])(scale, model, scale.getExtent()).calculate();
    scale.setBlank(rawExtentResult.isBlank);
    var min = rawExtentResult.min;
    var max = rawExtentResult.max;
    // If bars are placed on a base axis of type time or interval account for axis boundary overflow and current axis
    // is base axis
    // FIXME
    // (1) Consider support value axis, where below zero and axis `onZero` should be handled properly.
    // (2) Refactor the logic with `barGrid`. Is it not need to `makeBarWidthAndOffsetInfo` twice with different extent?
    //     Should not depend on series type `bar`?
    // (3) Fix that might overlap when using dataZoom.
    // (4) Consider other chart types using `barGrid`?
    // See #6728, #4862, `test/bar-overflow-time-plot.html`
    var ecModel = model.ecModel;
    if (ecModel && scaleType === 'time' /* || scaleType === 'interval' */ ) {
        var barSeriesModels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$layout$2f$barGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareLayoutBarSeries"])('bar', ecModel);
        var isBaseAxisAndHasBarSeries_1 = false;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(barSeriesModels, function(seriesModel) {
            isBaseAxisAndHasBarSeries_1 = isBaseAxisAndHasBarSeries_1 || seriesModel.getBaseAxis() === model.axis;
        });
        if (isBaseAxisAndHasBarSeries_1) {
            // Calculate placement of bars on axis. TODO should be decoupled
            // with barLayout
            var barWidthAndOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$layout$2f$barGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeColumnLayout"])(barSeriesModels);
            // Adjust axis min and max to account for overflow
            var adjustedScale = adjustScaleForOverflow(min, max, model, barWidthAndOffset);
            min = adjustedScale.min;
            max = adjustedScale.max;
        }
    }
    return {
        extent: [
            min,
            max
        ],
        // "fix" means "fixed", the value should not be
        // changed in the subsequent steps.
        fixMin: rawExtentResult.minFixed,
        fixMax: rawExtentResult.maxFixed
    };
}
function adjustScaleForOverflow(min, max, model, // Only support cartesian coord yet.
barWidthAndOffset) {
    // Get Axis Length
    var axisExtent = model.axis.getExtent();
    var axisLength = Math.abs(axisExtent[1] - axisExtent[0]);
    // Get bars on current base axis and calculate min and max overflow
    var barsOnCurrentAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$layout$2f$barGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieveColumnLayout"])(barWidthAndOffset, model.axis);
    if (barsOnCurrentAxis === undefined) {
        return {
            min: min,
            max: max
        };
    }
    var minOverflow = Infinity;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(barsOnCurrentAxis, function(item) {
        minOverflow = Math.min(item.offset, minOverflow);
    });
    var maxOverflow = -Infinity;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(barsOnCurrentAxis, function(item) {
        maxOverflow = Math.max(item.offset + item.width, maxOverflow);
    });
    minOverflow = Math.abs(minOverflow);
    maxOverflow = Math.abs(maxOverflow);
    var totalOverFlow = minOverflow + maxOverflow;
    // Calculate required buffer based on old range and overflow
    var oldRange = max - min;
    var oldRangePercentOfNew = 1 - (minOverflow + maxOverflow) / axisLength;
    var overflowBuffer = oldRange / oldRangePercentOfNew - oldRange;
    max += overflowBuffer * (maxOverflow / totalOverFlow);
    min -= overflowBuffer * (minOverflow / totalOverFlow);
    return {
        min: min,
        max: max
    };
}
function niceScaleExtent(scale, inModel) {
    var model = inModel;
    var extentInfo = getScaleExtent(scale, model);
    var extent = extentInfo.extent;
    var splitNumber = model.get('splitNumber');
    if (scale instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
        scale.base = model.get('logBase');
    }
    var scaleType = scale.type;
    var interval = model.get('interval');
    var isIntervalOrTime = scaleType === 'interval' || scaleType === 'time';
    scale.setExtent(extent[0], extent[1]);
    scale.calcNiceExtent({
        splitNumber: splitNumber,
        fixMin: extentInfo.fixMin,
        fixMax: extentInfo.fixMax,
        minInterval: isIntervalOrTime ? model.get('minInterval') : null,
        maxInterval: isIntervalOrTime ? model.get('maxInterval') : null
    });
    // If some one specified the min, max. And the default calculated interval
    // is not good enough. He can specify the interval. It is often appeared
    // in angle axis with angle 0 - 360. Interval calculated in interval scale is hard
    // to be 60.
    // FIXME
    if (interval != null) {
        scale.setInterval && scale.setInterval(interval);
    }
}
function createScaleByModel(model, axisType) {
    axisType = axisType || model.get('type');
    if (axisType) {
        switch(axisType){
            // Buildin scale
            case 'category':
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Ordinal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                    ordinalMeta: model.getOrdinalMeta ? model.getOrdinalMeta() : model.getCategories(),
                    extent: [
                        Infinity,
                        -Infinity
                    ]
                });
            case 'time':
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                    locale: model.ecModel.getLocaleModel(),
                    useUTC: model.ecModel.get('useUTC')
                });
            default:
                // case 'value'/'interval', 'log', or others.
                return new (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getClass(axisType) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Interval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
        }
    }
}
function ifAxisCrossZero(axis) {
    var dataExtent = axis.scale.getExtent();
    var min = dataExtent[0];
    var max = dataExtent[1];
    return !(min > 0 && max > 0 || min < 0 && max < 0);
}
function makeLabelFormatter(axis) {
    var labelFormatter = axis.getLabelModel().get('formatter');
    var categoryTickStart = axis.type === 'category' ? axis.scale.getExtent()[0] : null;
    if (axis.scale.type === 'time') {
        return function(tpl) {
            return function(tick, idx) {
                return axis.scale.getFormattedLabel(tick, idx, tpl);
            };
        }(labelFormatter);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(labelFormatter)) {
        return function(tpl) {
            return function(tick) {
                // For category axis, get raw value; for numeric axis,
                // get formatted label like '1,333,444'.
                var label = axis.scale.getLabel(tick);
                var text = tpl.replace('{value}', label != null ? label : '');
                return text;
            };
        }(labelFormatter);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(labelFormatter)) {
        return function(cb) {
            return function(tick, idx) {
                // The original intention of `idx` is "the index of the tick in all ticks".
                // But the previous implementation of category axis do not consider the
                // `axisLabel.interval`, which cause that, for example, the `interval` is
                // `1`, then the ticks "name5", "name7", "name9" are displayed, where the
                // corresponding `idx` are `0`, `2`, `4`, but not `0`, `1`, `2`. So we keep
                // the definition here for back compatibility.
                if (categoryTickStart != null) {
                    idx = tick.value - categoryTickStart;
                }
                return cb(getAxisRawValue(axis, tick), idx, tick.level != null ? {
                    level: tick.level
                } : null);
            };
        }(labelFormatter);
    } else {
        return function(tick) {
            return axis.scale.getLabel(tick);
        };
    }
}
function getAxisRawValue(axis, tick) {
    // In category axis with data zoom, tick is not the original
    // index of axis.data. So tick should not be exposed to user
    // in category axis.
    return axis.type === 'category' ? axis.scale.getLabel(tick) : tick.value;
}
function estimateLabelUnionRect(axis) {
    var axisModel = axis.model;
    var scale = axis.scale;
    if (!axisModel.get([
        'axisLabel',
        'show'
    ]) || scale.isBlank()) {
        return;
    }
    var realNumberScaleTicks;
    var tickCount;
    var categoryScaleExtent = scale.getExtent();
    // Optimize for large category data, avoid call `getTicks()`.
    if (scale instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Ordinal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
        tickCount = scale.count();
    } else {
        realNumberScaleTicks = scale.getTicks();
        tickCount = realNumberScaleTicks.length;
    }
    var axisLabelModel = axis.getLabelModel();
    var labelFormatter = makeLabelFormatter(axis);
    var rect;
    var step = 1;
    // Simple optimization for large amount of labels
    if (tickCount > 40) {
        step = Math.ceil(tickCount / 40);
    }
    for(var i = 0; i < tickCount; i += step){
        var tick = realNumberScaleTicks ? realNumberScaleTicks[i] : {
            value: categoryScaleExtent[0] + i
        };
        var label = labelFormatter(tick, i);
        var unrotatedSingleRect = axisLabelModel.getTextRect(label);
        var singleRect = rotateTextRect(unrotatedSingleRect, axisLabelModel.get('rotate') || 0);
        rect ? rect.union(singleRect) : rect = singleRect;
    }
    return rect;
}
function rotateTextRect(textRect, rotate) {
    var rotateRadians = rotate * Math.PI / 180;
    var beforeWidth = textRect.width;
    var beforeHeight = textRect.height;
    var afterWidth = beforeWidth * Math.abs(Math.cos(rotateRadians)) + Math.abs(beforeHeight * Math.sin(rotateRadians));
    var afterHeight = beforeWidth * Math.abs(Math.sin(rotateRadians)) + Math.abs(beforeHeight * Math.cos(rotateRadians));
    var rotatedRect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](textRect.x, textRect.y, afterWidth, afterHeight);
    return rotatedRect;
}
function getOptionCategoryInterval(model) {
    var interval = model.get('interval');
    return interval == null ? 'auto' : interval;
}
function shouldShowAllLabels(axis) {
    return axis.type === 'category' && getOptionCategoryInterval(axis.getLabelModel()) === 0;
}
function getDataDimensionsOnAxis(data, axisDim) {
    // Remove duplicated dat dimensions caused by `getStackedDimension`.
    var dataDimMap = {};
    // Currently `mapDimensionsAll` will contain stack result dimension ('__\0ecstackresult').
    // PENDING: is it reasonable? Do we need to remove the original dim from "coord dim" since
    // there has been stacked result dim?
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(data.mapDimensionsAll(axisDim), function(dataDim) {
        // For example, the extent of the original dimension
        // is [0.1, 0.5], the extent of the `stackResultDimension`
        // is [7, 9], the final extent should NOT include [0.1, 0.5],
        // because there is no graphic corresponding to [0.1, 0.5].
        // See the case in `test/area-stack.html` `main1`, where area line
        // stack needs `yAxis` not start from 0.
        dataDimMap[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStackedDimension"])(data, dataDim)] = true;
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keys"])(dataDimMap);
}
function unionAxisExtentFromData(dataExtent, data, axisDim) {
    if (data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(getDataDimensionsOnAxis(data, axisDim), function(dim) {
            var seriesExtent = data.getApproximateExtent(dim);
            seriesExtent[0] < dataExtent[0] && (dataExtent[0] = seriesExtent[0]);
            seriesExtent[1] > dataExtent[1] && (dataExtent[1] = seriesExtent[1]);
        });
    }
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/cartesian/Cartesian.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
var Cartesian = /** @class */ function() {
    function Cartesian(name) {
        this.type = 'cartesian';
        this._dimList = [];
        this._axes = {};
        this.name = name || '';
    }
    Cartesian.prototype.getAxis = function(dim) {
        return this._axes[dim];
    };
    Cartesian.prototype.getAxes = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(this._dimList, function(dim) {
            return this._axes[dim];
        }, this);
    };
    Cartesian.prototype.getAxesByScale = function(scaleType) {
        scaleType = scaleType.toLowerCase();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"])(this.getAxes(), function(axis) {
            return axis.scale.type === scaleType;
        });
    };
    Cartesian.prototype.addAxis = function(axis) {
        var dim = axis.dim;
        this._axes[dim] = axis;
        this._dimList.push(dim);
    };
    return Cartesian;
}();
;
const __TURBOPACK__default__export__ = Cartesian;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/cartesian/Cartesian2D.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "cartesian2DDimensions": (()=>cartesian2DDimensions),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/BoundingRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$Cartesian$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/cartesian/Cartesian.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/matrix.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/vector.js [app-client] (ecmascript)");
;
;
;
;
;
var cartesian2DDimensions = [
    'x',
    'y'
];
function canCalculateAffineTransform(scale) {
    return scale.type === 'interval' || scale.type === 'time';
}
var Cartesian2D = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(Cartesian2D, _super);
    function Cartesian2D() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'cartesian2d';
        _this.dimensions = cartesian2DDimensions;
        return _this;
    }
    /**
   * Calculate an affine transform matrix if two axes are time or value.
   * It's mainly for accelartion on the large time series data.
   */ Cartesian2D.prototype.calcAffineTransform = function() {
        this._transform = this._invTransform = null;
        var xAxisScale = this.getAxis('x').scale;
        var yAxisScale = this.getAxis('y').scale;
        if (!canCalculateAffineTransform(xAxisScale) || !canCalculateAffineTransform(yAxisScale)) {
            return;
        }
        var xScaleExtent = xAxisScale.getExtent();
        var yScaleExtent = yAxisScale.getExtent();
        var start = this.dataToPoint([
            xScaleExtent[0],
            yScaleExtent[0]
        ]);
        var end = this.dataToPoint([
            xScaleExtent[1],
            yScaleExtent[1]
        ]);
        var xScaleSpan = xScaleExtent[1] - xScaleExtent[0];
        var yScaleSpan = yScaleExtent[1] - yScaleExtent[0];
        if (!xScaleSpan || !yScaleSpan) {
            return;
        }
        // Accelerate data to point calculation on the special large time series data.
        var scaleX = (end[0] - start[0]) / xScaleSpan;
        var scaleY = (end[1] - start[1]) / yScaleSpan;
        var translateX = start[0] - xScaleExtent[0] * scaleX;
        var translateY = start[1] - yScaleExtent[0] * scaleY;
        var m = this._transform = [
            scaleX,
            0,
            0,
            scaleY,
            translateX,
            translateY
        ];
        this._invTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invert"])([], m);
    };
    /**
   * Base axis will be used on stacking.
   */ Cartesian2D.prototype.getBaseAxis = function() {
        return this.getAxesByScale('ordinal')[0] || this.getAxesByScale('time')[0] || this.getAxis('x');
    };
    Cartesian2D.prototype.containPoint = function(point) {
        var axisX = this.getAxis('x');
        var axisY = this.getAxis('y');
        return axisX.contain(axisX.toLocalCoord(point[0])) && axisY.contain(axisY.toLocalCoord(point[1]));
    };
    Cartesian2D.prototype.containData = function(data) {
        return this.getAxis('x').containData(data[0]) && this.getAxis('y').containData(data[1]);
    };
    Cartesian2D.prototype.containZone = function(data1, data2) {
        var zoneDiag1 = this.dataToPoint(data1);
        var zoneDiag2 = this.dataToPoint(data2);
        var area = this.getArea();
        var zone = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](zoneDiag1[0], zoneDiag1[1], zoneDiag2[0] - zoneDiag1[0], zoneDiag2[1] - zoneDiag1[1]);
        return area.intersect(zone);
    };
    Cartesian2D.prototype.dataToPoint = function(data, clamp, out) {
        out = out || [];
        var xVal = data[0];
        var yVal = data[1];
        // Fast path
        if (this._transform && xVal != null && isFinite(xVal) && yVal != null && isFinite(yVal)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyTransform"])(out, data, this._transform);
        }
        var xAxis = this.getAxis('x');
        var yAxis = this.getAxis('y');
        out[0] = xAxis.toGlobalCoord(xAxis.dataToCoord(xVal, clamp));
        out[1] = yAxis.toGlobalCoord(yAxis.dataToCoord(yVal, clamp));
        return out;
    };
    Cartesian2D.prototype.clampData = function(data, out) {
        var xScale = this.getAxis('x').scale;
        var yScale = this.getAxis('y').scale;
        var xAxisExtent = xScale.getExtent();
        var yAxisExtent = yScale.getExtent();
        var x = xScale.parse(data[0]);
        var y = yScale.parse(data[1]);
        out = out || [];
        out[0] = Math.min(Math.max(Math.min(xAxisExtent[0], xAxisExtent[1]), x), Math.max(xAxisExtent[0], xAxisExtent[1]));
        out[1] = Math.min(Math.max(Math.min(yAxisExtent[0], yAxisExtent[1]), y), Math.max(yAxisExtent[0], yAxisExtent[1]));
        return out;
    };
    Cartesian2D.prototype.pointToData = function(point, clamp) {
        var out = [];
        if (this._invTransform) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyTransform"])(out, point, this._invTransform);
        }
        var xAxis = this.getAxis('x');
        var yAxis = this.getAxis('y');
        out[0] = xAxis.coordToData(xAxis.toLocalCoord(point[0]), clamp);
        out[1] = yAxis.coordToData(yAxis.toLocalCoord(point[1]), clamp);
        return out;
    };
    Cartesian2D.prototype.getOtherAxis = function(axis) {
        return this.getAxis(axis.dim === 'x' ? 'y' : 'x');
    };
    /**
   * Get rect area of cartesian.
   * Area will have a contain function to determine if a point is in the coordinate system.
   */ Cartesian2D.prototype.getArea = function(tolerance) {
        tolerance = tolerance || 0;
        var xExtent = this.getAxis('x').getGlobalExtent();
        var yExtent = this.getAxis('y').getGlobalExtent();
        var x = Math.min(xExtent[0], xExtent[1]) - tolerance;
        var y = Math.min(yExtent[0], yExtent[1]) - tolerance;
        var width = Math.max(xExtent[0], xExtent[1]) - x + tolerance;
        var height = Math.max(yExtent[0], yExtent[1]) - y + tolerance;
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](x, y, width, height);
    };
    return Cartesian2D;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$Cartesian$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
;
const __TURBOPACK__default__export__ = Cartesian2D;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisTickLabelBuilder.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "calculateCategoryInterval": (()=>calculateCategoryInterval),
    "createAxisLabels": (()=>createAxisLabels),
    "createAxisTicks": (()=>createAxisTicks)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/contain/text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisHelper.js [app-client] (ecmascript)");
;
;
;
;
var inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInner"])();
function tickValuesToNumbers(axis, values) {
    var nums = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(values, function(val) {
        return axis.scale.parse(val);
    });
    if (axis.type === 'time' && nums.length > 0) {
        // Time axis needs duplicate first/last tick (see TimeScale.getTicks())
        // The first and last tick/label don't get drawn
        nums.sort();
        nums.unshift(nums[0]);
        nums.push(nums[nums.length - 1]);
    }
    return nums;
}
function createAxisLabels(axis) {
    var custom = axis.getLabelModel().get('customValues');
    if (custom) {
        var labelFormatter_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeLabelFormatter"])(axis);
        var extent_1 = axis.scale.getExtent();
        var tickNumbers = tickValuesToNumbers(axis, custom);
        var ticks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"])(tickNumbers, function(val) {
            return val >= extent_1[0] && val <= extent_1[1];
        });
        return {
            labels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(ticks, function(numval) {
                var tick = {
                    value: numval
                };
                return {
                    formattedLabel: labelFormatter_1(tick),
                    rawLabel: axis.scale.getLabel(tick),
                    tickValue: numval
                };
            })
        };
    }
    // Only ordinal scale support tick interval
    return axis.type === 'category' ? makeCategoryLabels(axis) : makeRealNumberLabels(axis);
}
function createAxisTicks(axis, tickModel) {
    var custom = axis.getTickModel().get('customValues');
    if (custom) {
        var extent_2 = axis.scale.getExtent();
        var tickNumbers = tickValuesToNumbers(axis, custom);
        return {
            ticks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"])(tickNumbers, function(val) {
                return val >= extent_2[0] && val <= extent_2[1];
            })
        };
    }
    // Only ordinal scale support tick interval
    return axis.type === 'category' ? makeCategoryTicks(axis, tickModel) : {
        ticks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(axis.scale.getTicks(), function(tick) {
            return tick.value;
        })
    };
}
function makeCategoryLabels(axis) {
    var labelModel = axis.getLabelModel();
    var result = makeCategoryLabelsActually(axis, labelModel);
    return !labelModel.get('show') || axis.scale.isBlank() ? {
        labels: [],
        labelCategoryInterval: result.labelCategoryInterval
    } : result;
}
function makeCategoryLabelsActually(axis, labelModel) {
    var labelsCache = getListCache(axis, 'labels');
    var optionLabelInterval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOptionCategoryInterval"])(labelModel);
    var result = listCacheGet(labelsCache, optionLabelInterval);
    if (result) {
        return result;
    }
    var labels;
    var numericLabelInterval;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(optionLabelInterval)) {
        labels = makeLabelsByCustomizedCategoryInterval(axis, optionLabelInterval);
    } else {
        numericLabelInterval = optionLabelInterval === 'auto' ? makeAutoCategoryInterval(axis) : optionLabelInterval;
        labels = makeLabelsByNumericCategoryInterval(axis, numericLabelInterval);
    }
    // Cache to avoid calling interval function repeatedly.
    return listCacheSet(labelsCache, optionLabelInterval, {
        labels: labels,
        labelCategoryInterval: numericLabelInterval
    });
}
function makeCategoryTicks(axis, tickModel) {
    var ticksCache = getListCache(axis, 'ticks');
    var optionTickInterval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOptionCategoryInterval"])(tickModel);
    var result = listCacheGet(ticksCache, optionTickInterval);
    if (result) {
        return result;
    }
    var ticks;
    var tickCategoryInterval;
    // Optimize for the case that large category data and no label displayed,
    // we should not return all ticks.
    if (!tickModel.get('show') || axis.scale.isBlank()) {
        ticks = [];
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(optionTickInterval)) {
        ticks = makeLabelsByCustomizedCategoryInterval(axis, optionTickInterval, true);
    } else if (optionTickInterval === 'auto') {
        var labelsResult = makeCategoryLabelsActually(axis, axis.getLabelModel());
        tickCategoryInterval = labelsResult.labelCategoryInterval;
        ticks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(labelsResult.labels, function(labelItem) {
            return labelItem.tickValue;
        });
    } else {
        tickCategoryInterval = optionTickInterval;
        ticks = makeLabelsByNumericCategoryInterval(axis, tickCategoryInterval, true);
    }
    // Cache to avoid calling interval function repeatedly.
    return listCacheSet(ticksCache, optionTickInterval, {
        ticks: ticks,
        tickCategoryInterval: tickCategoryInterval
    });
}
function makeRealNumberLabels(axis) {
    var ticks = axis.scale.getTicks();
    var labelFormatter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeLabelFormatter"])(axis);
    return {
        labels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(ticks, function(tick, idx) {
            return {
                level: tick.level,
                formattedLabel: labelFormatter(tick, idx),
                rawLabel: axis.scale.getLabel(tick),
                tickValue: tick.value
            };
        })
    };
}
function getListCache(axis, prop) {
    // Because key can be a function, and cache size always is small, we use array cache.
    return inner(axis)[prop] || (inner(axis)[prop] = []);
}
function listCacheGet(cache, key) {
    for(var i = 0; i < cache.length; i++){
        if (cache[i].key === key) {
            return cache[i].value;
        }
    }
}
function listCacheSet(cache, key, value) {
    cache.push({
        key: key,
        value: value
    });
    return value;
}
function makeAutoCategoryInterval(axis) {
    var result = inner(axis).autoInterval;
    return result != null ? result : inner(axis).autoInterval = axis.calculateCategoryInterval();
}
function calculateCategoryInterval(axis) {
    var params = fetchAutoCategoryIntervalCalculationParams(axis);
    var labelFormatter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeLabelFormatter"])(axis);
    var rotation = (params.axisRotate - params.labelRotate) / 180 * Math.PI;
    var ordinalScale = axis.scale;
    var ordinalExtent = ordinalScale.getExtent();
    // Providing this method is for optimization:
    // avoid generating a long array by `getTicks`
    // in large category data case.
    var tickCount = ordinalScale.count();
    if (ordinalExtent[1] - ordinalExtent[0] < 1) {
        return 0;
    }
    var step = 1;
    // Simple optimization. Empirical value: tick count should less than 40.
    if (tickCount > 40) {
        step = Math.max(1, Math.floor(tickCount / 40));
    }
    var tickValue = ordinalExtent[0];
    var unitSpan = axis.dataToCoord(tickValue + 1) - axis.dataToCoord(tickValue);
    var unitW = Math.abs(unitSpan * Math.cos(rotation));
    var unitH = Math.abs(unitSpan * Math.sin(rotation));
    var maxW = 0;
    var maxH = 0;
    // Caution: Performance sensitive for large category data.
    // Consider dataZoom, we should make appropriate step to avoid O(n) loop.
    for(; tickValue <= ordinalExtent[1]; tickValue += step){
        var width = 0;
        var height = 0;
        // Not precise, do not consider align and vertical align
        // and each distance from axis line yet.
        var rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBoundingRect"])(labelFormatter({
            value: tickValue
        }), params.font, 'center', 'top');
        // Magic number
        width = rect.width * 1.3;
        height = rect.height * 1.3;
        // Min size, void long loop.
        maxW = Math.max(maxW, width, 7);
        maxH = Math.max(maxH, height, 7);
    }
    var dw = maxW / unitW;
    var dh = maxH / unitH;
    // 0/0 is NaN, 1/0 is Infinity.
    isNaN(dw) && (dw = Infinity);
    isNaN(dh) && (dh = Infinity);
    var interval = Math.max(0, Math.floor(Math.min(dw, dh)));
    var cache = inner(axis.model);
    var axisExtent = axis.getExtent();
    var lastAutoInterval = cache.lastAutoInterval;
    var lastTickCount = cache.lastTickCount;
    // Use cache to keep interval stable while moving zoom window,
    // otherwise the calculated interval might jitter when the zoom
    // window size is close to the interval-changing size.
    // For example, if all of the axis labels are `a, b, c, d, e, f, g`.
    // The jitter will cause that sometimes the displayed labels are
    // `a, d, g` (interval: 2) sometimes `a, c, e`(interval: 1).
    if (lastAutoInterval != null && lastTickCount != null && Math.abs(lastAutoInterval - interval) <= 1 && Math.abs(lastTickCount - tickCount) <= 1 && lastAutoInterval > interval && cache.axisExtent0 === axisExtent[0] && cache.axisExtent1 === axisExtent[1]) {
        interval = lastAutoInterval;
    } else {
        cache.lastTickCount = tickCount;
        cache.lastAutoInterval = interval;
        cache.axisExtent0 = axisExtent[0];
        cache.axisExtent1 = axisExtent[1];
    }
    return interval;
}
function fetchAutoCategoryIntervalCalculationParams(axis) {
    var labelModel = axis.getLabelModel();
    return {
        axisRotate: axis.getRotate ? axis.getRotate() : axis.isHorizontal && !axis.isHorizontal() ? 90 : 0,
        labelRotate: labelModel.get('rotate') || 0,
        font: labelModel.getFont()
    };
}
function makeLabelsByNumericCategoryInterval(axis, categoryInterval, onlyTick) {
    var labelFormatter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeLabelFormatter"])(axis);
    var ordinalScale = axis.scale;
    var ordinalExtent = ordinalScale.getExtent();
    var labelModel = axis.getLabelModel();
    var result = [];
    // TODO: axisType: ordinalTime, pick the tick from each month/day/year/...
    var step = Math.max((categoryInterval || 0) + 1, 1);
    var startTick = ordinalExtent[0];
    var tickCount = ordinalScale.count();
    // Calculate start tick based on zero if possible to keep label consistent
    // while zooming and moving while interval > 0. Otherwise the selection
    // of displayable ticks and symbols probably keep changing.
    // 3 is empirical value.
    if (startTick !== 0 && step > 1 && tickCount / step > 2) {
        startTick = Math.round(Math.ceil(startTick / step) * step);
    }
    // (1) Only add min max label here but leave overlap checking
    // to render stage, which also ensure the returned list
    // suitable for splitLine and splitArea rendering.
    // (2) Scales except category always contain min max label so
    // do not need to perform this process.
    var showAllLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldShowAllLabels"])(axis);
    var includeMinLabel = labelModel.get('showMinLabel') || showAllLabel;
    var includeMaxLabel = labelModel.get('showMaxLabel') || showAllLabel;
    if (includeMinLabel && startTick !== ordinalExtent[0]) {
        addItem(ordinalExtent[0]);
    }
    // Optimize: avoid generating large array by `ordinalScale.getTicks()`.
    var tickValue = startTick;
    for(; tickValue <= ordinalExtent[1]; tickValue += step){
        addItem(tickValue);
    }
    if (includeMaxLabel && tickValue - step !== ordinalExtent[1]) {
        addItem(ordinalExtent[1]);
    }
    function addItem(tickValue) {
        var tickObj = {
            value: tickValue
        };
        result.push(onlyTick ? tickValue : {
            formattedLabel: labelFormatter(tickObj),
            rawLabel: ordinalScale.getLabel(tickObj),
            tickValue: tickValue
        });
    }
    return result;
}
function makeLabelsByCustomizedCategoryInterval(axis, categoryInterval, onlyTick) {
    var ordinalScale = axis.scale;
    var labelFormatter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeLabelFormatter"])(axis);
    var result = [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(ordinalScale.getTicks(), function(tick) {
        var rawLabel = ordinalScale.getLabel(tick);
        var tickValue = tick.value;
        if (categoryInterval(tick.value, rawLabel)) {
            result.push(onlyTick ? tickValue : {
                formattedLabel: labelFormatter(tick),
                rawLabel: rawLabel,
                tickValue: tickValue
            });
        }
    });
    return result;
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/Axis.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisTickLabelBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisTickLabelBuilder.js [app-client] (ecmascript)");
;
;
;
var NORMALIZED_EXTENT = [
    0,
    1
];
/**
 * Base class of Axis.
 */ var Axis = /** @class */ function() {
    function Axis(dim, scale, extent) {
        this.onBand = false;
        this.inverse = false;
        this.dim = dim;
        this.scale = scale;
        this._extent = extent || [
            0,
            0
        ];
    }
    /**
   * If axis extent contain given coord
   */ Axis.prototype.contain = function(coord) {
        var extent = this._extent;
        var min = Math.min(extent[0], extent[1]);
        var max = Math.max(extent[0], extent[1]);
        return coord >= min && coord <= max;
    };
    /**
   * If axis extent contain given data
   */ Axis.prototype.containData = function(data) {
        return this.scale.contain(data);
    };
    /**
   * Get coord extent.
   */ Axis.prototype.getExtent = function() {
        return this._extent.slice();
    };
    /**
   * Get precision used for formatting
   */ Axis.prototype.getPixelPrecision = function(dataExtent) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPixelPrecision"])(dataExtent || this.scale.getExtent(), this._extent);
    };
    /**
   * Set coord extent
   */ Axis.prototype.setExtent = function(start, end) {
        var extent = this._extent;
        extent[0] = start;
        extent[1] = end;
    };
    /**
   * Convert data to coord. Data is the rank if it has an ordinal scale
   */ Axis.prototype.dataToCoord = function(data, clamp) {
        var extent = this._extent;
        var scale = this.scale;
        data = scale.normalize(data);
        if (this.onBand && scale.type === 'ordinal') {
            extent = extent.slice();
            fixExtentWithBands(extent, scale.count());
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linearMap"])(data, NORMALIZED_EXTENT, extent, clamp);
    };
    /**
   * Convert coord to data. Data is the rank if it has an ordinal scale
   */ Axis.prototype.coordToData = function(coord, clamp) {
        var extent = this._extent;
        var scale = this.scale;
        if (this.onBand && scale.type === 'ordinal') {
            extent = extent.slice();
            fixExtentWithBands(extent, scale.count());
        }
        var t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linearMap"])(coord, extent, NORMALIZED_EXTENT, clamp);
        return this.scale.scale(t);
    };
    /**
   * Convert pixel point to data in axis
   */ Axis.prototype.pointToData = function(point, clamp) {
        // Should be implemented in derived class if necessary.
        return;
    };
    /**
   * Different from `zrUtil.map(axis.getTicks(), axis.dataToCoord, axis)`,
   * `axis.getTicksCoords` considers `onBand`, which is used by
   * `boundaryGap:true` of category axis and splitLine and splitArea.
   * @param opt.tickModel default: axis.model.getModel('axisTick')
   * @param opt.clamp If `true`, the first and the last
   *        tick must be at the axis end points. Otherwise, clip ticks
   *        that outside the axis extent.
   */ Axis.prototype.getTicksCoords = function(opt) {
        opt = opt || {};
        var tickModel = opt.tickModel || this.getTickModel();
        var result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisTickLabelBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAxisTicks"])(this, tickModel);
        var ticks = result.ticks;
        var ticksCoords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(ticks, function(tickVal) {
            return {
                coord: this.dataToCoord(this.scale.type === 'ordinal' ? this.scale.getRawOrdinalNumber(tickVal) : tickVal),
                tickValue: tickVal
            };
        }, this);
        var alignWithLabel = tickModel.get('alignWithLabel');
        fixOnBandTicksCoords(this, ticksCoords, alignWithLabel, opt.clamp);
        return ticksCoords;
    };
    Axis.prototype.getMinorTicksCoords = function() {
        if (this.scale.type === 'ordinal') {
            // Category axis doesn't support minor ticks
            return [];
        }
        var minorTickModel = this.model.getModel('minorTick');
        var splitNumber = minorTickModel.get('splitNumber');
        // Protection.
        if (!(splitNumber > 0 && splitNumber < 100)) {
            splitNumber = 5;
        }
        var minorTicks = this.scale.getMinorTicks(splitNumber);
        var minorTicksCoords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(minorTicks, function(minorTicksGroup) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(minorTicksGroup, function(minorTick) {
                return {
                    coord: this.dataToCoord(minorTick),
                    tickValue: minorTick
                };
            }, this);
        }, this);
        return minorTicksCoords;
    };
    Axis.prototype.getViewLabels = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisTickLabelBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAxisLabels"])(this).labels;
    };
    Axis.prototype.getLabelModel = function() {
        return this.model.getModel('axisLabel');
    };
    /**
   * Notice here we only get the default tick model. For splitLine
   * or splitArea, we should pass the splitLineModel or splitAreaModel
   * manually when calling `getTicksCoords`.
   * In GL, this method may be overridden to:
   * `axisModel.getModel('axisTick', grid3DModel.getModel('axisTick'));`
   */ Axis.prototype.getTickModel = function() {
        return this.model.getModel('axisTick');
    };
    /**
   * Get width of band
   */ Axis.prototype.getBandWidth = function() {
        var axisExtent = this._extent;
        var dataExtent = this.scale.getExtent();
        var len = dataExtent[1] - dataExtent[0] + (this.onBand ? 1 : 0);
        // Fix #2728, avoid NaN when only one data.
        len === 0 && (len = 1);
        var size = Math.abs(axisExtent[1] - axisExtent[0]);
        return Math.abs(size) / len;
    };
    /**
   * Only be called in category axis.
   * Can be overridden, consider other axes like in 3D.
   * @return Auto interval for cateogry axis tick and label
   */ Axis.prototype.calculateCategoryInterval = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisTickLabelBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateCategoryInterval"])(this);
    };
    return Axis;
}();
function fixExtentWithBands(extent, nTick) {
    var size = extent[1] - extent[0];
    var len = nTick;
    var margin = size / len / 2;
    extent[0] += margin;
    extent[1] -= margin;
}
// If axis has labels [1, 2, 3, 4]. Bands on the axis are
// |---1---|---2---|---3---|---4---|.
// So the displayed ticks and splitLine/splitArea should between
// each data item, otherwise cause misleading (e.g., split tow bars
// of a single data item when there are two bar series).
// Also consider if tickCategoryInterval > 0 and onBand, ticks and
// splitLine/spliteArea should layout appropriately corresponding
// to displayed labels. (So we should not use `getBandWidth` in this
// case).
function fixOnBandTicksCoords(axis, ticksCoords, alignWithLabel, clamp) {
    var ticksLen = ticksCoords.length;
    if (!axis.onBand || alignWithLabel || !ticksLen) {
        return;
    }
    var axisExtent = axis.getExtent();
    var last;
    var diffSize;
    if (ticksLen === 1) {
        ticksCoords[0].coord = axisExtent[0];
        last = ticksCoords[1] = {
            coord: axisExtent[1],
            tickValue: ticksCoords[0].tickValue
        };
    } else {
        var crossLen = ticksCoords[ticksLen - 1].tickValue - ticksCoords[0].tickValue;
        var shift_1 = (ticksCoords[ticksLen - 1].coord - ticksCoords[0].coord) / crossLen;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(ticksCoords, function(ticksItem) {
            ticksItem.coord -= shift_1 / 2;
        });
        var dataExtent = axis.scale.getExtent();
        diffSize = 1 + dataExtent[1] - ticksCoords[ticksLen - 1].tickValue;
        last = {
            coord: ticksCoords[ticksLen - 1].coord + shift_1 * diffSize,
            tickValue: dataExtent[1] + 1
        };
        ticksCoords.push(last);
    }
    var inverse = axisExtent[0] > axisExtent[1];
    // Handling clamp.
    if (littleThan(ticksCoords[0].coord, axisExtent[0])) {
        clamp ? ticksCoords[0].coord = axisExtent[0] : ticksCoords.shift();
    }
    if (clamp && littleThan(axisExtent[0], ticksCoords[0].coord)) {
        ticksCoords.unshift({
            coord: axisExtent[0]
        });
    }
    if (littleThan(axisExtent[1], last.coord)) {
        clamp ? last.coord = axisExtent[1] : ticksCoords.pop();
    }
    if (clamp && littleThan(last.coord, axisExtent[1])) {
        ticksCoords.push({
            coord: axisExtent[1]
        });
    }
    function littleThan(a, b) {
        // Avoid rounding error cause calculated tick coord different with extent.
        // It may cause an extra unnecessary tick added.
        a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(a);
        b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(b);
        return inverse ? a > b : a < b;
    }
}
const __TURBOPACK__default__export__ = Axis;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/cartesian/Axis2D.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$Axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/Axis.js [app-client] (ecmascript)");
;
;
var Axis2D = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(Axis2D, _super);
    function Axis2D(dim, scale, coordExtent, axisType, position) {
        var _this = _super.call(this, dim, scale, coordExtent) || this;
        /**
     * Index of axis, can be used as key
     * Injected outside.
     */ _this.index = 0;
        _this.type = axisType || 'value';
        _this.position = position || 'bottom';
        return _this;
    }
    Axis2D.prototype.isHorizontal = function() {
        var position = this.position;
        return position === 'top' || position === 'bottom';
    };
    /**
   * Each item cooresponds to this.getExtent(), which
   * means globalExtent[0] may greater than globalExtent[1],
   * unless `asc` is input.
   *
   * @param {boolean} [asc]
   * @return {Array.<number>}
   */ Axis2D.prototype.getGlobalExtent = function(asc) {
        var ret = this.getExtent();
        ret[0] = this.toGlobalCoord(ret[0]);
        ret[1] = this.toGlobalCoord(ret[1]);
        asc && ret[0] > ret[1] && ret.reverse();
        return ret;
    };
    Axis2D.prototype.pointToData = function(point, clamp) {
        return this.coordToData(this.toLocalCoord(point[this.dim === 'x' ? 0 : 1]), clamp);
    };
    /**
   * Set ordinalSortInfo
   * @param info new OrdinalSortInfo
   */ Axis2D.prototype.setCategorySortInfo = function(info) {
        if (this.type !== 'category') {
            return false;
        }
        this.model.option.categorySortInfo = info;
        this.scale.setSortInfo(info);
    };
    return Axis2D;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$Axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = Axis2D;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/cartesian/cartesianAxisHelper.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "findAxisModels": (()=>findAxisModels),
    "isCartesian2DSeries": (()=>isCartesian2DSeries),
    "layout": (()=>layout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
;
;
function layout(gridModel, axisModel, opt) {
    opt = opt || {};
    var grid = gridModel.coordinateSystem;
    var axis = axisModel.axis;
    var layout = {};
    var otherAxisOnZeroOf = axis.getAxesOnZeroOf()[0];
    var rawAxisPosition = axis.position;
    var axisPosition = otherAxisOnZeroOf ? 'onZero' : rawAxisPosition;
    var axisDim = axis.dim;
    var rect = grid.getRect();
    var rectBound = [
        rect.x,
        rect.x + rect.width,
        rect.y,
        rect.y + rect.height
    ];
    var idx = {
        left: 0,
        right: 1,
        top: 0,
        bottom: 1,
        onZero: 2
    };
    var axisOffset = axisModel.get('offset') || 0;
    var posBound = axisDim === 'x' ? [
        rectBound[2] - axisOffset,
        rectBound[3] + axisOffset
    ] : [
        rectBound[0] - axisOffset,
        rectBound[1] + axisOffset
    ];
    if (otherAxisOnZeroOf) {
        var onZeroCoord = otherAxisOnZeroOf.toGlobalCoord(otherAxisOnZeroOf.dataToCoord(0));
        posBound[idx.onZero] = Math.max(Math.min(onZeroCoord, posBound[1]), posBound[0]);
    }
    // Axis position
    layout.position = [
        axisDim === 'y' ? posBound[idx[axisPosition]] : rectBound[0],
        axisDim === 'x' ? posBound[idx[axisPosition]] : rectBound[3]
    ];
    // Axis rotation
    layout.rotation = Math.PI / 2 * (axisDim === 'x' ? 0 : 1);
    // Tick and label direction, x y is axisDim
    var dirMap = {
        top: -1,
        bottom: 1,
        left: -1,
        right: 1
    };
    layout.labelDirection = layout.tickDirection = layout.nameDirection = dirMap[rawAxisPosition];
    layout.labelOffset = otherAxisOnZeroOf ? posBound[idx[rawAxisPosition]] - posBound[idx.onZero] : 0;
    if (axisModel.get([
        'axisTick',
        'inside'
    ])) {
        layout.tickDirection = -layout.tickDirection;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve"])(opt.labelInside, axisModel.get([
        'axisLabel',
        'inside'
    ]))) {
        layout.labelDirection = -layout.labelDirection;
    }
    // Special label rotation
    var labelRotate = axisModel.get([
        'axisLabel',
        'rotate'
    ]);
    layout.labelRotate = axisPosition === 'top' ? -labelRotate : labelRotate;
    // Over splitLine and splitArea
    layout.z2 = 1;
    return layout;
}
function isCartesian2DSeries(seriesModel) {
    return seriesModel.get('coordinateSystem') === 'cartesian2d';
}
function findAxisModels(seriesModel) {
    var axisModelMap = {
        xAxisModel: null,
        yAxisModel: null
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(axisModelMap, function(v, key) {
        var axisType = key.replace(/Model$/, '');
        var axisModel = seriesModel.getReferringComponents(axisType, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SINGLE_REFERRING"]).models[0];
        if ("TURBOPACK compile-time truthy", 1) {
            if (!axisModel) {
                throw new Error(axisType + ' "' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve3"])(seriesModel.get(axisType + 'Index'), seriesModel.get(axisType + 'Id'), 0) + '" not found');
            }
        }
        axisModelMap[key] = axisModel;
    });
    return axisModelMap;
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisAlignTicks.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "alignScaleTicks": (()=>alignScaleTicks)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Interval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/scale/Interval.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/log.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/scale/helper.js [app-client] (ecmascript)");
;
;
;
;
;
var mathLog = Math.log;
function alignScaleTicks(scale, axisModel, alignToScale) {
    var intervalScaleProto = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Interval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].prototype;
    // NOTE: There is a precondition for log scale  here:
    // In log scale we store _interval and _extent of exponent value.
    // So if we use the method of InternalScale to set/get these data.
    // It process the exponent value, which is linear and what we want here.
    var alignToTicks = intervalScaleProto.getTicks.call(alignToScale);
    var alignToNicedTicks = intervalScaleProto.getTicks.call(alignToScale, true);
    var alignToSplitNumber = alignToTicks.length - 1;
    var alignToInterval = intervalScaleProto.getInterval.call(alignToScale);
    var scaleExtent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getScaleExtent"])(scale, axisModel);
    var rawExtent = scaleExtent.extent;
    var isMinFixed = scaleExtent.fixMin;
    var isMaxFixed = scaleExtent.fixMax;
    if (scale.type === 'log') {
        var logBase = mathLog(scale.base);
        rawExtent = [
            mathLog(rawExtent[0]) / logBase,
            mathLog(rawExtent[1]) / logBase
        ];
    }
    scale.setExtent(rawExtent[0], rawExtent[1]);
    scale.calcNiceExtent({
        splitNumber: alignToSplitNumber,
        fixMin: isMinFixed,
        fixMax: isMaxFixed
    });
    var extent = intervalScaleProto.getExtent.call(scale);
    // Need to update the rawExtent.
    // Because value in rawExtent may be not parsed. e.g. 'dataMin', 'dataMax'
    if (isMinFixed) {
        rawExtent[0] = extent[0];
    }
    if (isMaxFixed) {
        rawExtent[1] = extent[1];
    }
    var interval = intervalScaleProto.getInterval.call(scale);
    var min = rawExtent[0];
    var max = rawExtent[1];
    if (isMinFixed && isMaxFixed) {
        // User set min, max, divide to get new interval
        interval = (max - min) / alignToSplitNumber;
    } else if (isMinFixed) {
        max = rawExtent[0] + interval * alignToSplitNumber;
        // User set min, expand extent on the other side
        while(max < rawExtent[1] && isFinite(max) && isFinite(rawExtent[1])){
            interval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["increaseInterval"])(interval);
            max = rawExtent[0] + interval * alignToSplitNumber;
        }
    } else if (isMaxFixed) {
        // User set max, expand extent on the other side
        min = rawExtent[1] - interval * alignToSplitNumber;
        while(min > rawExtent[0] && isFinite(min) && isFinite(rawExtent[0])){
            interval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["increaseInterval"])(interval);
            min = rawExtent[1] - interval * alignToSplitNumber;
        }
    } else {
        var nicedSplitNumber = scale.getTicks().length - 1;
        if (nicedSplitNumber > alignToSplitNumber) {
            interval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["increaseInterval"])(interval);
        }
        var range = interval * alignToSplitNumber;
        max = Math.ceil(rawExtent[1] / interval) * interval;
        min = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(max - range);
        // Not change the result that crossing zero.
        if (min < 0 && rawExtent[0] >= 0) {
            min = 0;
            max = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(range);
        } else if (max > 0 && rawExtent[1] <= 0) {
            max = 0;
            min = -(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(range);
        }
    }
    // Adjust min, max based on the extent of alignTo. When min or max is set in alignTo scale
    var t0 = (alignToTicks[0].value - alignToNicedTicks[0].value) / alignToInterval;
    var t1 = (alignToTicks[alignToSplitNumber].value - alignToNicedTicks[alignToSplitNumber].value) / alignToInterval;
    // NOTE: Must in setExtent -> setInterval -> setNiceExtent order.
    intervalScaleProto.setExtent.call(scale, min + interval * t0, max + interval * t1);
    intervalScaleProto.setInterval.call(scale, interval);
    if (t0 || t1) {
        intervalScaleProto.setNiceExtent.call(scale, min + interval, max - interval);
    }
    if ("TURBOPACK compile-time truthy", 1) {
        var ticks = intervalScaleProto.getTicks.call(scale);
        if (ticks[1] && (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValueNice"])(interval) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrecisionSafe"])(ticks[1].value) > (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrecisionSafe"])(interval))) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warn"])(// eslint-disable-next-line
            "The ticks may be not readable when set min: " + axisModel.get('min') + ", max: " + axisModel.get('max') + " and alignTicks: true");
        }
    }
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/cartesian/Grid.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
 * Grid is a region which contains at most 4 cartesian systems
 *
 * TODO Default cartesian
 */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/layout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$Cartesian2D$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/cartesian/Cartesian2D.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$Axis2D$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/cartesian/Axis2D.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$cartesianAxisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/cartesian/cartesianAxisHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/scale/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisAlignTicks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisAlignTicks.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var Grid = /** @class */ function() {
    function Grid(gridModel, ecModel, api) {
        // FIXME:TS where used (different from registered type 'cartesian2d')?
        this.type = 'grid';
        this._coordsMap = {};
        this._coordsList = [];
        this._axesMap = {};
        this._axesList = [];
        this.axisPointerEnabled = true;
        this.dimensions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$Cartesian2D$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cartesian2DDimensions"];
        this._initCartesian(gridModel, ecModel, api);
        this.model = gridModel;
    }
    Grid.prototype.getRect = function() {
        return this._rect;
    };
    Grid.prototype.update = function(ecModel, api) {
        var axesMap = this._axesMap;
        this._updateScale(ecModel, this.model);
        function updateAxisTicks(axes) {
            var alignTo;
            // Axis is added in order of axisIndex.
            var axesIndices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keys"])(axes);
            var len = axesIndices.length;
            if (!len) {
                return;
            }
            var axisNeedsAlign = [];
            // Process once and calculate the ticks for those don't use alignTicks.
            for(var i = len - 1; i >= 0; i--){
                var idx = +axesIndices[i]; // Convert to number.
                var axis = axes[idx];
                var model = axis.model;
                var scale = axis.scale;
                if (// Only value and log axis without interval support alignTicks.
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIntervalOrLogScale"])(scale) && model.get('alignTicks') && model.get('interval') == null) {
                    axisNeedsAlign.push(axis);
                } else {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["niceScaleExtent"])(scale, model);
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIntervalOrLogScale"])(scale)) {
                        // Can only align to interval or log axis.
                        alignTo = axis;
                    }
                }
            }
            ;
            // All axes has set alignTicks. Pick the first one.
            // PENDING. Should we find the axis that both set interval, min, max and align to this one?
            if (axisNeedsAlign.length) {
                if (!alignTo) {
                    alignTo = axisNeedsAlign.pop();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["niceScaleExtent"])(alignTo.scale, alignTo.model);
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(axisNeedsAlign, function(axis) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisAlignTicks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alignScaleTicks"])(axis.scale, axis.model, alignTo.scale);
                });
            }
        }
        updateAxisTicks(axesMap.x);
        updateAxisTicks(axesMap.y);
        // Key: axisDim_axisIndex, value: boolean, whether onZero target.
        var onZeroRecords = {};
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(axesMap.x, function(xAxis) {
            fixAxisOnZero(axesMap, 'y', xAxis, onZeroRecords);
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(axesMap.y, function(yAxis) {
            fixAxisOnZero(axesMap, 'x', yAxis, onZeroRecords);
        });
        // Resize again if containLabel is enabled
        // FIXME It may cause getting wrong grid size in data processing stage
        this.resize(this.model, api);
    };
    /**
   * Resize the grid
   */ Grid.prototype.resize = function(gridModel, api, ignoreContainLabel) {
        var boxLayoutParams = gridModel.getBoxLayoutParams();
        var isContainLabel = !ignoreContainLabel && gridModel.get('containLabel');
        var gridRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLayoutRect"])(boxLayoutParams, {
            width: api.getWidth(),
            height: api.getHeight()
        });
        this._rect = gridRect;
        var axesList = this._axesList;
        adjustAxes();
        // Minus label size
        if (isContainLabel) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(axesList, function(axis) {
                if (!axis.model.get([
                    'axisLabel',
                    'inside'
                ])) {
                    var labelUnionRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["estimateLabelUnionRect"])(axis);
                    if (labelUnionRect) {
                        var dim = axis.isHorizontal() ? 'height' : 'width';
                        var margin = axis.model.get([
                            'axisLabel',
                            'margin'
                        ]);
                        gridRect[dim] -= labelUnionRect[dim] + margin;
                        if (axis.position === 'top') {
                            gridRect.y += labelUnionRect.height + margin;
                        } else if (axis.position === 'left') {
                            gridRect.x += labelUnionRect.width + margin;
                        }
                    }
                }
            });
            adjustAxes();
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(this._coordsList, function(coord) {
            // Calculate affine matrix to accelerate the data to point transform.
            // If all the axes scales are time or value.
            coord.calcAffineTransform();
        });
        function adjustAxes() {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(axesList, function(axis) {
                var isHorizontal = axis.isHorizontal();
                var extent = isHorizontal ? [
                    0,
                    gridRect.width
                ] : [
                    0,
                    gridRect.height
                ];
                var idx = axis.inverse ? 1 : 0;
                axis.setExtent(extent[idx], extent[1 - idx]);
                updateAxisTransform(axis, isHorizontal ? gridRect.x : gridRect.y);
            });
        }
    };
    Grid.prototype.getAxis = function(dim, axisIndex) {
        var axesMapOnDim = this._axesMap[dim];
        if (axesMapOnDim != null) {
            return axesMapOnDim[axisIndex || 0];
        }
    };
    Grid.prototype.getAxes = function() {
        return this._axesList.slice();
    };
    Grid.prototype.getCartesian = function(xAxisIndex, yAxisIndex) {
        if (xAxisIndex != null && yAxisIndex != null) {
            var key = 'x' + xAxisIndex + 'y' + yAxisIndex;
            return this._coordsMap[key];
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(xAxisIndex)) {
            yAxisIndex = xAxisIndex.yAxisIndex;
            xAxisIndex = xAxisIndex.xAxisIndex;
        }
        for(var i = 0, coordList = this._coordsList; i < coordList.length; i++){
            if (coordList[i].getAxis('x').index === xAxisIndex || coordList[i].getAxis('y').index === yAxisIndex) {
                return coordList[i];
            }
        }
    };
    Grid.prototype.getCartesians = function() {
        return this._coordsList.slice();
    };
    /**
   * @implements
   */ Grid.prototype.convertToPixel = function(ecModel, finder, value) {
        var target = this._findConvertTarget(finder);
        return target.cartesian ? target.cartesian.dataToPoint(value) : target.axis ? target.axis.toGlobalCoord(target.axis.dataToCoord(value)) : null;
    };
    /**
   * @implements
   */ Grid.prototype.convertFromPixel = function(ecModel, finder, value) {
        var target = this._findConvertTarget(finder);
        return target.cartesian ? target.cartesian.pointToData(value) : target.axis ? target.axis.coordToData(target.axis.toLocalCoord(value)) : null;
    };
    Grid.prototype._findConvertTarget = function(finder) {
        var seriesModel = finder.seriesModel;
        var xAxisModel = finder.xAxisModel || seriesModel && seriesModel.getReferringComponents('xAxis', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SINGLE_REFERRING"]).models[0];
        var yAxisModel = finder.yAxisModel || seriesModel && seriesModel.getReferringComponents('yAxis', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SINGLE_REFERRING"]).models[0];
        var gridModel = finder.gridModel;
        var coordsList = this._coordsList;
        var cartesian;
        var axis;
        if (seriesModel) {
            cartesian = seriesModel.coordinateSystem;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexOf"])(coordsList, cartesian) < 0 && (cartesian = null);
        } else if (xAxisModel && yAxisModel) {
            cartesian = this.getCartesian(xAxisModel.componentIndex, yAxisModel.componentIndex);
        } else if (xAxisModel) {
            axis = this.getAxis('x', xAxisModel.componentIndex);
        } else if (yAxisModel) {
            axis = this.getAxis('y', yAxisModel.componentIndex);
        } else if (gridModel) {
            var grid = gridModel.coordinateSystem;
            if (grid === this) {
                cartesian = this._coordsList[0];
            }
        }
        return {
            cartesian: cartesian,
            axis: axis
        };
    };
    /**
   * @implements
   */ Grid.prototype.containPoint = function(point) {
        var coord = this._coordsList[0];
        if (coord) {
            return coord.containPoint(point);
        }
    };
    /**
   * Initialize cartesian coordinate systems
   */ Grid.prototype._initCartesian = function(gridModel, ecModel, api) {
        var _this = this;
        var grid = this;
        var axisPositionUsed = {
            left: false,
            right: false,
            top: false,
            bottom: false
        };
        var axesMap = {
            x: {},
            y: {}
        };
        var axesCount = {
            x: 0,
            y: 0
        };
        // Create axis
        ecModel.eachComponent('xAxis', createAxisCreator('x'), this);
        ecModel.eachComponent('yAxis', createAxisCreator('y'), this);
        if (!axesCount.x || !axesCount.y) {
            // Roll back when there no either x or y axis
            this._axesMap = {};
            this._axesList = [];
            return;
        }
        this._axesMap = axesMap;
        // Create cartesian2d
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(axesMap.x, function(xAxis, xAxisIndex) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(axesMap.y, function(yAxis, yAxisIndex) {
                var key = 'x' + xAxisIndex + 'y' + yAxisIndex;
                var cartesian = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$Cartesian2D$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](key);
                cartesian.master = _this;
                cartesian.model = gridModel;
                _this._coordsMap[key] = cartesian;
                _this._coordsList.push(cartesian);
                cartesian.addAxis(xAxis);
                cartesian.addAxis(yAxis);
            });
        });
        function createAxisCreator(dimName) {
            return function(axisModel, idx) {
                if (!isAxisUsedInTheGrid(axisModel, gridModel)) {
                    return;
                }
                var axisPosition = axisModel.get('position');
                if (dimName === 'x') {
                    // Fix position
                    if (axisPosition !== 'top' && axisPosition !== 'bottom') {
                        // Default bottom of X
                        axisPosition = axisPositionUsed.bottom ? 'top' : 'bottom';
                    }
                } else {
                    // Fix position
                    if (axisPosition !== 'left' && axisPosition !== 'right') {
                        // Default left of Y
                        axisPosition = axisPositionUsed.left ? 'right' : 'left';
                    }
                }
                axisPositionUsed[axisPosition] = true;
                var axis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$Axis2D$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](dimName, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScaleByModel"])(axisModel), [
                    0,
                    0
                ], axisModel.get('type'), axisPosition);
                var isCategory = axis.type === 'category';
                axis.onBand = isCategory && axisModel.get('boundaryGap');
                axis.inverse = axisModel.get('inverse');
                // Inject axis into axisModel
                axisModel.axis = axis;
                // Inject axisModel into axis
                axis.model = axisModel;
                // Inject grid info axis
                axis.grid = grid;
                // Index of axis, can be used as key
                axis.index = idx;
                grid._axesList.push(axis);
                axesMap[dimName][idx] = axis;
                axesCount[dimName]++;
            };
        }
    };
    /**
   * Update cartesian properties from series.
   */ Grid.prototype._updateScale = function(ecModel, gridModel) {
        // Reset scale
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(this._axesList, function(axis) {
            axis.scale.setExtent(Infinity, -Infinity);
            if (axis.type === 'category') {
                var categorySortInfo = axis.model.get('categorySortInfo');
                axis.scale.setSortInfo(categorySortInfo);
            }
        });
        ecModel.eachSeries(function(seriesModel) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$cartesianAxisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCartesian2DSeries"])(seriesModel)) {
                var axesModelMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$cartesianAxisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findAxisModels"])(seriesModel);
                var xAxisModel = axesModelMap.xAxisModel;
                var yAxisModel = axesModelMap.yAxisModel;
                if (!isAxisUsedInTheGrid(xAxisModel, gridModel) || !isAxisUsedInTheGrid(yAxisModel, gridModel)) {
                    return;
                }
                var cartesian = this.getCartesian(xAxisModel.componentIndex, yAxisModel.componentIndex);
                var data = seriesModel.getData();
                var xAxis = cartesian.getAxis('x');
                var yAxis = cartesian.getAxis('y');
                unionExtent(data, xAxis);
                unionExtent(data, yAxis);
            }
        }, this);
        function unionExtent(data, axis) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDataDimensionsOnAxis"])(data, axis.dim), function(dim) {
                axis.scale.unionExtentFromData(data, dim);
            });
        }
    };
    /**
   * @param dim 'x' or 'y' or 'auto' or null/undefined
   */ Grid.prototype.getTooltipAxes = function(dim) {
        var baseAxes = [];
        var otherAxes = [];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(this.getCartesians(), function(cartesian) {
            var baseAxis = dim != null && dim !== 'auto' ? cartesian.getAxis(dim) : cartesian.getBaseAxis();
            var otherAxis = cartesian.getOtherAxis(baseAxis);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexOf"])(baseAxes, baseAxis) < 0 && baseAxes.push(baseAxis);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexOf"])(otherAxes, otherAxis) < 0 && otherAxes.push(otherAxis);
        });
        return {
            baseAxes: baseAxes,
            otherAxes: otherAxes
        };
    };
    Grid.create = function(ecModel, api) {
        var grids = [];
        ecModel.eachComponent('grid', function(gridModel, idx) {
            var grid = new Grid(gridModel, ecModel, api);
            grid.name = 'grid_' + idx;
            // dataSampling requires axis extent, so resize
            // should be performed in create stage.
            grid.resize(gridModel, api, true);
            gridModel.coordinateSystem = grid;
            grids.push(grid);
        });
        // Inject the coordinateSystems into seriesModel
        ecModel.eachSeries(function(seriesModel) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$cartesianAxisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCartesian2DSeries"])(seriesModel)) {
                return;
            }
            var axesModelMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$cartesianAxisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findAxisModels"])(seriesModel);
            var xAxisModel = axesModelMap.xAxisModel;
            var yAxisModel = axesModelMap.yAxisModel;
            var gridModel = xAxisModel.getCoordSysModel();
            if ("TURBOPACK compile-time truthy", 1) {
                if (!gridModel) {
                    throw new Error('Grid "' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve3"])(xAxisModel.get('gridIndex'), xAxisModel.get('gridId'), 0) + '" not found');
                }
                if (xAxisModel.getCoordSysModel() !== yAxisModel.getCoordSysModel()) {
                    throw new Error('xAxis and yAxis must use the same grid');
                }
            }
            var grid = gridModel.coordinateSystem;
            seriesModel.coordinateSystem = grid.getCartesian(xAxisModel.componentIndex, yAxisModel.componentIndex);
        });
        return grids;
    };
    // For deciding which dimensions to use when creating list data
    Grid.dimensions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$Cartesian2D$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cartesian2DDimensions"];
    return Grid;
}();
/**
 * Check if the axis is used in the specified grid.
 */ function isAxisUsedInTheGrid(axisModel, gridModel) {
    return axisModel.getCoordSysModel() === gridModel;
}
function fixAxisOnZero(axesMap, otherAxisDim, axis, // Key: see `getOnZeroRecordKey`
onZeroRecords) {
    axis.getAxesOnZeroOf = function() {
        // TODO: onZero of multiple axes.
        return otherAxisOnZeroOf ? [
            otherAxisOnZeroOf
        ] : [];
    };
    // onZero can not be enabled in these two situations:
    // 1. When any other axis is a category axis.
    // 2. When no axis is cross 0 point.
    var otherAxes = axesMap[otherAxisDim];
    var otherAxisOnZeroOf;
    var axisModel = axis.model;
    var onZero = axisModel.get([
        'axisLine',
        'onZero'
    ]);
    var onZeroAxisIndex = axisModel.get([
        'axisLine',
        'onZeroAxisIndex'
    ]);
    if (!onZero) {
        return;
    }
    // If target axis is specified.
    if (onZeroAxisIndex != null) {
        if (canOnZeroToAxis(otherAxes[onZeroAxisIndex])) {
            otherAxisOnZeroOf = otherAxes[onZeroAxisIndex];
        }
    } else {
        // Find the first available other axis.
        for(var idx in otherAxes){
            if (otherAxes.hasOwnProperty(idx) && canOnZeroToAxis(otherAxes[idx]) && !onZeroRecords[getOnZeroRecordKey(otherAxes[idx])]) {
                otherAxisOnZeroOf = otherAxes[idx];
                break;
            }
        }
    }
    if (otherAxisOnZeroOf) {
        onZeroRecords[getOnZeroRecordKey(otherAxisOnZeroOf)] = true;
    }
    function getOnZeroRecordKey(axis) {
        return axis.dim + '_' + axis.index;
    }
}
function canOnZeroToAxis(axis) {
    return axis && axis.type !== 'category' && axis.type !== 'time' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifAxisCrossZero"])(axis);
}
function updateAxisTransform(axis, coordBase) {
    var axisExtent = axis.getExtent();
    var axisExtentSum = axisExtent[0] + axisExtent[1];
    // Fast transform
    axis.toGlobalCoord = axis.dim === 'x' ? function(coord) {
        return coord + coordBase;
    } : function(coord) {
        return axisExtentSum - coord + coordBase;
    };
    axis.toLocalCoord = axis.dim === 'x' ? function(coord) {
        return coord - coordBase;
    } : function(coord) {
        return axisExtentSum - coord + coordBase;
    };
}
const __TURBOPACK__default__export__ = Grid;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/radar/RadarModel.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisDefault$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisDefault.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisModelCommonMixin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisModelCommonMixin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Component.js [app-client] (ecmascript)");
;
;
;
;
;
;
var valueAxisDefault = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisDefault$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].value;
function defaultsShow(opt, show) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"])({
        show: show
    }, opt);
}
var RadarModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(RadarModel, _super);
    function RadarModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = RadarModel.type;
        return _this;
    }
    RadarModel.prototype.optionUpdated = function() {
        var boundaryGap = this.get('boundaryGap');
        var splitNumber = this.get('splitNumber');
        var scale = this.get('scale');
        var axisLine = this.get('axisLine');
        var axisTick = this.get('axisTick');
        // let axisType = this.get('axisType');
        var axisLabel = this.get('axisLabel');
        var nameTextStyle = this.get('axisName');
        var showName = this.get([
            'axisName',
            'show'
        ]);
        var nameFormatter = this.get([
            'axisName',
            'formatter'
        ]);
        var nameGap = this.get('axisNameGap');
        var triggerEvent = this.get('triggerEvent');
        var indicatorModels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(this.get('indicator') || [], function(indicatorOpt) {
            // PENDING
            if (indicatorOpt.max != null && indicatorOpt.max > 0 && !indicatorOpt.min) {
                indicatorOpt.min = 0;
            } else if (indicatorOpt.min != null && indicatorOpt.min < 0 && !indicatorOpt.max) {
                indicatorOpt.max = 0;
            }
            var iNameTextStyle = nameTextStyle;
            if (indicatorOpt.color != null) {
                iNameTextStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"])({
                    color: indicatorOpt.color
                }, nameTextStyle);
            }
            // Use same configuration
            var innerIndicatorOpt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"])(indicatorOpt), {
                boundaryGap: boundaryGap,
                splitNumber: splitNumber,
                scale: scale,
                axisLine: axisLine,
                axisTick: axisTick,
                // axisType: axisType,
                axisLabel: axisLabel,
                // Compatible with 2 and use text
                name: indicatorOpt.text,
                showName: showName,
                nameLocation: 'end',
                nameGap: nameGap,
                // min: 0,
                nameTextStyle: iNameTextStyle,
                triggerEvent: triggerEvent
            }, false);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(nameFormatter)) {
                var indName = innerIndicatorOpt.name;
                innerIndicatorOpt.name = nameFormatter.replace('{value}', indName != null ? indName : '');
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(nameFormatter)) {
                innerIndicatorOpt.name = nameFormatter(innerIndicatorOpt.name, innerIndicatorOpt);
            }
            var model = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](innerIndicatorOpt, null, this.ecModel);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixin"])(model, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisModelCommonMixin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxisModelCommonMixin"].prototype);
            // For triggerEvent.
            model.mainType = 'radar';
            model.componentIndex = this.componentIndex;
            return model;
        }, this);
        this._indicatorModels = indicatorModels;
    };
    RadarModel.prototype.getIndicatorModels = function() {
        return this._indicatorModels;
    };
    RadarModel.type = 'radar';
    RadarModel.defaultOption = {
        // zlevel: 0,
        z: 0,
        center: [
            '50%',
            '50%'
        ],
        radius: '75%',
        startAngle: 90,
        axisName: {
            show: true
        },
        boundaryGap: [
            0,
            0
        ],
        splitNumber: 5,
        axisNameGap: 15,
        scale: false,
        // Polygon or circle
        shape: 'polygon',
        axisLine: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])({
            lineStyle: {
                color: '#bbb'
            }
        }, valueAxisDefault.axisLine),
        axisLabel: defaultsShow(valueAxisDefault.axisLabel, false),
        axisTick: defaultsShow(valueAxisDefault.axisTick, false),
        // axisType: 'value',
        splitLine: defaultsShow(valueAxisDefault.splitLine, true),
        splitArea: defaultsShow(valueAxisDefault.splitArea, true),
        // {text, min, max}
        indicator: []
    };
    return RadarModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = RadarModel;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/radar/IndicatorAxis.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$Axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/Axis.js [app-client] (ecmascript)");
;
;
var IndicatorAxis = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(IndicatorAxis, _super);
    function IndicatorAxis(dim, scale, radiusExtent) {
        var _this = _super.call(this, dim, scale, radiusExtent) || this;
        _this.type = 'value';
        _this.angle = 0;
        _this.name = '';
        return _this;
    }
    return IndicatorAxis;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$Axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = IndicatorAxis;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/radar/Radar.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
*/ // TODO clockwise
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$radar$2f$IndicatorAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/radar/IndicatorAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Interval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/scale/Interval.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisAlignTicks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisAlignTicks.js [app-client] (ecmascript)");
;
;
;
;
;
var Radar = /** @class */ function() {
    function Radar(radarModel, ecModel, api) {
        /**
     *
     * Radar dimensions
     */ this.dimensions = [];
        this._model = radarModel;
        this._indicatorAxes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(radarModel.getIndicatorModels(), function(indicatorModel, idx) {
            var dim = 'indicator_' + idx;
            var indicatorAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$radar$2f$IndicatorAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](dim, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Interval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]());
            indicatorAxis.name = indicatorModel.get('name');
            // Inject model and axis
            indicatorAxis.model = indicatorModel;
            indicatorModel.axis = indicatorAxis;
            this.dimensions.push(dim);
            return indicatorAxis;
        }, this);
        this.resize(radarModel, api);
    }
    Radar.prototype.getIndicatorAxes = function() {
        return this._indicatorAxes;
    };
    Radar.prototype.dataToPoint = function(value, indicatorIndex) {
        var indicatorAxis = this._indicatorAxes[indicatorIndex];
        return this.coordToPoint(indicatorAxis.dataToCoord(value), indicatorIndex);
    };
    // TODO: API should be coordToPoint([coord, indicatorIndex])
    Radar.prototype.coordToPoint = function(coord, indicatorIndex) {
        var indicatorAxis = this._indicatorAxes[indicatorIndex];
        var angle = indicatorAxis.angle;
        var x = this.cx + coord * Math.cos(angle);
        var y = this.cy - coord * Math.sin(angle);
        return [
            x,
            y
        ];
    };
    Radar.prototype.pointToData = function(pt) {
        var dx = pt[0] - this.cx;
        var dy = pt[1] - this.cy;
        var radius = Math.sqrt(dx * dx + dy * dy);
        dx /= radius;
        dy /= radius;
        var radian = Math.atan2(-dy, dx);
        // Find the closest angle
        // FIXME index can calculated directly
        var minRadianDiff = Infinity;
        var closestAxis;
        var closestAxisIdx = -1;
        for(var i = 0; i < this._indicatorAxes.length; i++){
            var indicatorAxis = this._indicatorAxes[i];
            var diff = Math.abs(radian - indicatorAxis.angle);
            if (diff < minRadianDiff) {
                closestAxis = indicatorAxis;
                closestAxisIdx = i;
                minRadianDiff = diff;
            }
        }
        return [
            closestAxisIdx,
            +(closestAxis && closestAxis.coordToData(radius))
        ];
    };
    Radar.prototype.resize = function(radarModel, api) {
        var center = radarModel.get('center');
        var viewWidth = api.getWidth();
        var viewHeight = api.getHeight();
        var viewSize = Math.min(viewWidth, viewHeight) / 2;
        this.cx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(center[0], viewWidth);
        this.cy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(center[1], viewHeight);
        this.startAngle = radarModel.get('startAngle') * Math.PI / 180;
        // radius may be single value like `20`, `'80%'`, or array like `[10, '80%']`
        var radius = radarModel.get('radius');
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(radius) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(radius)) {
            radius = [
                0,
                radius
            ];
        }
        this.r0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(radius[0], viewSize);
        this.r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(radius[1], viewSize);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(this._indicatorAxes, function(indicatorAxis, idx) {
            indicatorAxis.setExtent(this.r0, this.r);
            var angle = this.startAngle + idx * Math.PI * 2 / this._indicatorAxes.length;
            // Normalize to [-PI, PI]
            angle = Math.atan2(Math.sin(angle), Math.cos(angle));
            indicatorAxis.angle = angle;
        }, this);
    };
    Radar.prototype.update = function(ecModel, api) {
        var indicatorAxes = this._indicatorAxes;
        var radarModel = this._model;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(indicatorAxes, function(indicatorAxis) {
            indicatorAxis.scale.setExtent(Infinity, -Infinity);
        });
        ecModel.eachSeriesByType('radar', function(radarSeries, idx) {
            if (radarSeries.get('coordinateSystem') !== 'radar' || ecModel.getComponent('radar', radarSeries.get('radarIndex')) !== radarModel) {
                return;
            }
            var data = radarSeries.getData();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(indicatorAxes, function(indicatorAxis) {
                indicatorAxis.scale.unionExtentFromData(data, data.mapDimension(indicatorAxis.dim));
            });
        }, this);
        var splitNumber = radarModel.get('splitNumber');
        var dummyScale = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Interval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
        dummyScale.setExtent(0, splitNumber);
        dummyScale.setInterval(1);
        // Force all the axis fixing the maxSplitNumber.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(indicatorAxes, function(indicatorAxis, idx) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisAlignTicks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alignScaleTicks"])(indicatorAxis.scale, indicatorAxis.model, dummyScale);
        });
    };
    Radar.prototype.convertToPixel = function(ecModel, finder, value) {
        console.warn('Not implemented.');
        return null;
    };
    Radar.prototype.convertFromPixel = function(ecModel, finder, pixel) {
        console.warn('Not implemented.');
        return null;
    };
    Radar.prototype.containPoint = function(point) {
        console.warn('Not implemented.');
        return false;
    };
    Radar.create = function(ecModel, api) {
        var radarList = [];
        ecModel.eachComponent('radar', function(radarModel) {
            var radar = new Radar(radarModel, ecModel, api);
            radarList.push(radar);
            radarModel.coordinateSystem = radar;
        });
        ecModel.eachSeriesByType('radar', function(radarSeries) {
            if (radarSeries.get('coordinateSystem') === 'radar') {
                // Inject coordinate system
                // @ts-ignore
                radarSeries.coordinateSystem = radarList[radarSeries.get('radarIndex') || 0];
            }
        });
        return radarList;
    };
    /**
   * Radar dimensions is based on the data
   */ Radar.dimensions = [];
    return Radar;
}();
const __TURBOPACK__default__export__ = Radar;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/geo/Region.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "GeoJSONLineStringGeometry": (()=>GeoJSONLineStringGeometry),
    "GeoJSONPolygonGeometry": (()=>GeoJSONPolygonGeometry),
    "GeoJSONRegion": (()=>GeoJSONRegion),
    "GeoSVGRegion": (()=>GeoSVGRegion),
    "Region": (()=>Region)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/BoundingRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$polygon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/contain/polygon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/matrix.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
;
;
;
;
;
var TMP_TRANSFORM = [];
function transformPoints(points, transform) {
    for(var p = 0; p < points.length; p++){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyTransform"])(points[p], points[p], transform);
    }
}
function updateBBoxFromPoints(points, min, max, projection) {
    for(var i = 0; i < points.length; i++){
        var p = points[i];
        if (projection) {
            // projection may return null point.
            p = projection.project(p);
        }
        if (p && isFinite(p[0]) && isFinite(p[1])) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(min, min, p);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(max, max, p);
        }
    }
}
function centroid(points) {
    var signedArea = 0;
    var cx = 0;
    var cy = 0;
    var len = points.length;
    var x0 = points[len - 1][0];
    var y0 = points[len - 1][1];
    // Polygon should been closed.
    for(var i = 0; i < len; i++){
        var x1 = points[i][0];
        var y1 = points[i][1];
        var a = x0 * y1 - x1 * y0;
        signedArea += a;
        cx += (x0 + x1) * a;
        cy += (y0 + y1) * a;
        x0 = x1;
        y0 = y1;
    }
    return signedArea ? [
        cx / signedArea / 3,
        cy / signedArea / 3,
        signedArea
    ] : [
        points[0][0] || 0,
        points[0][1] || 0
    ];
}
var Region = /** @class */ function() {
    function Region(name) {
        this.name = name;
    }
    Region.prototype.setCenter = function(center) {
        this._center = center;
    };
    /**
   * Get center point in data unit. That is,
   * for GeoJSONRegion, the unit is lat/lng,
   * for GeoSVGRegion, the unit is SVG local coord.
   */ Region.prototype.getCenter = function() {
        var center = this._center;
        if (!center) {
            // In most cases there are no need to calculate this center.
            // So calculate only when called.
            center = this._center = this.calcCenter();
        }
        return center;
    };
    return Region;
}();
;
var GeoJSONPolygonGeometry = /** @class */ function() {
    function GeoJSONPolygonGeometry(exterior, interiors) {
        this.type = 'polygon';
        this.exterior = exterior;
        this.interiors = interiors;
    }
    return GeoJSONPolygonGeometry;
}();
;
var GeoJSONLineStringGeometry = /** @class */ function() {
    function GeoJSONLineStringGeometry(points) {
        this.type = 'linestring';
        this.points = points;
    }
    return GeoJSONLineStringGeometry;
}();
;
var GeoJSONRegion = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(GeoJSONRegion, _super);
    function GeoJSONRegion(name, geometries, cp) {
        var _this = _super.call(this, name) || this;
        _this.type = 'geoJSON';
        _this.geometries = geometries;
        _this._center = cp && [
            cp[0],
            cp[1]
        ];
        return _this;
    }
    GeoJSONRegion.prototype.calcCenter = function() {
        var geometries = this.geometries;
        var largestGeo;
        var largestGeoSize = 0;
        for(var i = 0; i < geometries.length; i++){
            var geo = geometries[i];
            var exterior = geo.exterior;
            // Simple trick to use points count instead of polygon area as region size.
            // Ignore linestring
            var size = exterior && exterior.length;
            if (size > largestGeoSize) {
                largestGeo = geo;
                largestGeoSize = size;
            }
        }
        if (largestGeo) {
            return centroid(largestGeo.exterior);
        }
        // from bounding rect by default.
        var rect = this.getBoundingRect();
        return [
            rect.x + rect.width / 2,
            rect.y + rect.height / 2
        ];
    };
    GeoJSONRegion.prototype.getBoundingRect = function(projection) {
        var rect = this._rect;
        // Always recalculate if using projection.
        if (rect && !projection) {
            return rect;
        }
        var min = [
            Infinity,
            Infinity
        ];
        var max = [
            -Infinity,
            -Infinity
        ];
        var geometries = this.geometries;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(geometries, function(geo) {
            if (geo.type === 'polygon') {
                // Doesn't consider hole
                updateBBoxFromPoints(geo.exterior, min, max, projection);
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(geo.points, function(points) {
                    updateBBoxFromPoints(points, min, max, projection);
                });
            }
        });
        // Normalie invalid bounding.
        if (!(isFinite(min[0]) && isFinite(min[1]) && isFinite(max[0]) && isFinite(max[1]))) {
            min[0] = min[1] = max[0] = max[1] = 0;
        }
        rect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](min[0], min[1], max[0] - min[0], max[1] - min[1]);
        if (!projection) {
            this._rect = rect;
        }
        return rect;
    };
    GeoJSONRegion.prototype.contain = function(coord) {
        var rect = this.getBoundingRect();
        var geometries = this.geometries;
        if (!rect.contain(coord[0], coord[1])) {
            return false;
        }
        loopGeo: for(var i = 0, len = geometries.length; i < len; i++){
            var geo = geometries[i];
            // Only support polygon.
            if (geo.type !== 'polygon') {
                continue;
            }
            var exterior = geo.exterior;
            var interiors = geo.interiors;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$polygon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contain"])(exterior, coord[0], coord[1])) {
                // Not in the region if point is in the hole.
                for(var k = 0; k < (interiors ? interiors.length : 0); k++){
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$polygon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contain"])(interiors[k], coord[0], coord[1])) {
                        continue loopGeo;
                    }
                }
                return true;
            }
        }
        return false;
    };
    /**
   * Transform the raw coords to target bounding.
   * @param x
   * @param y
   * @param width
   * @param height
   */ GeoJSONRegion.prototype.transformTo = function(x, y, width, height) {
        var rect = this.getBoundingRect();
        var aspect = rect.width / rect.height;
        if (!width) {
            width = aspect * height;
        } else if (!height) {
            height = width / aspect;
        }
        var target = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](x, y, width, height);
        var transform = rect.calculateTransform(target);
        var geometries = this.geometries;
        for(var i = 0; i < geometries.length; i++){
            var geo = geometries[i];
            if (geo.type === 'polygon') {
                transformPoints(geo.exterior, transform);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(geo.interiors, function(interior) {
                    transformPoints(interior, transform);
                });
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(geo.points, function(points) {
                    transformPoints(points, transform);
                });
            }
        }
        rect = this._rect;
        rect.copy(target);
        // Update center
        this._center = [
            rect.x + rect.width / 2,
            rect.y + rect.height / 2
        ];
    };
    GeoJSONRegion.prototype.cloneShallow = function(name) {
        name == null && (name = this.name);
        var newRegion = new GeoJSONRegion(name, this.geometries, this._center);
        newRegion._rect = this._rect;
        newRegion.transformTo = null; // Simply avoid to be called.
        return newRegion;
    };
    return GeoJSONRegion;
}(Region);
;
var GeoSVGRegion = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(GeoSVGRegion, _super);
    function GeoSVGRegion(name, elOnlyForCalculate) {
        var _this = _super.call(this, name) || this;
        _this.type = 'geoSVG';
        _this._elOnlyForCalculate = elOnlyForCalculate;
        return _this;
    }
    GeoSVGRegion.prototype.calcCenter = function() {
        var el = this._elOnlyForCalculate;
        var rect = el.getBoundingRect();
        var center = [
            rect.x + rect.width / 2,
            rect.y + rect.height / 2
        ];
        var mat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"])(TMP_TRANSFORM);
        var target = el;
        while(target && !target.isGeoSVGGraphicRoot){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"])(mat, target.getLocalTransform(), mat);
            target = target.parent;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invert"])(mat, mat);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyTransform"])(center, center, mat);
        return center;
    };
    return GeoSVGRegion;
}(Region);
;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/geo/GeoSVGResource.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "GeoSVGResource": (()=>GeoSVGResource)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$parseSVG$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/tool/parseSVG.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Group.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Rect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/BoundingRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$parseXML$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/tool/parseXML.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$Region$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/geo/Region.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
/**
 * "region available" means that: enable users to set attribute `name="xxx"` on those tags
 * to make it be a region.
 * 1. region styles and its label styles can be defined in echarts opton:
 * ```js
 * geo: {
 *     regions: [{
 *         name: 'xxx',
 *         itemStyle: { ... },
 *         label: { ... }
 *     }, {
 *         ...
 *     },
 *     ...]
 * };
 * ```
 * 2. name can be duplicated in different SVG tag. All of the tags with the same name share
 * a region option. For exampel if there are two <path> representing two lung lobes. They have
 * no common parents but both of them need to display label "lung" inside.
 */ var REGION_AVAILABLE_SVG_TAG_MAP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashMap"])([
    'rect',
    'circle',
    'line',
    'ellipse',
    'polygon',
    'polyline',
    'path',
    // <text> <tspan> are also enabled because some SVG might paint text itself,
    // but still need to trigger events or tooltip.
    'text',
    'tspan',
    // <g> is also enabled because this case: if multiple tags share one name
    // and need label displayed, every tags will display the name, which is not
    // expected. So we can put them into a <g name="xxx">. Thereby only one label
    // displayed and located based on the bounding rect of the <g>.
    'g'
]);
var GeoSVGResource = /** @class */ function() {
    function GeoSVGResource(mapName, svg) {
        this.type = 'geoSVG';
        // All used graphics. key: hostKey, value: root
        this._usedGraphicMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashMap"])();
        // All unused graphics.
        this._freedGraphics = [];
        this._mapName = mapName;
        // Only perform parse to XML object here, which might be time
        // consiming for large SVG.
        // Although convert XML to zrender element is also time consiming,
        // if we do it here, the clone of zrender elements has to be
        // required. So we do it once for each geo instance, util real
        // performance issues call for optimizing it.
        this._parsedXML = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$parseXML$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseXML"])(svg);
    }
    GeoSVGResource.prototype.load = function() {
        // In the "load" stage, graphic need to be built to
        // get boundingRect for geo coordinate system.
        var firstGraphic = this._firstGraphic;
        // Create the return data structure only when first graphic created.
        // Because they will be used in geo coordinate system update stage,
        // and `regions` will be mounted at `geo` coordinate system,
        // in which there is no "view" info, so that it should better not to
        // make references to graphic elements.
        if (!firstGraphic) {
            firstGraphic = this._firstGraphic = this._buildGraphic(this._parsedXML);
            this._freedGraphics.push(firstGraphic);
            this._boundingRect = this._firstGraphic.boundingRect.clone();
            // PENDING: `nameMap` will not be supported until some real requirement come.
            // if (nameMap) {
            //     named = applyNameMap(named, nameMap);
            // }
            var _a = createRegions(firstGraphic.named), regions = _a.regions, regionsMap = _a.regionsMap;
            this._regions = regions;
            this._regionsMap = regionsMap;
        }
        return {
            boundingRect: this._boundingRect,
            regions: this._regions,
            regionsMap: this._regionsMap
        };
    };
    GeoSVGResource.prototype._buildGraphic = function(svgXML) {
        var result;
        var rootFromParse;
        try {
            result = svgXML && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$parseSVG$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseSVG"])(svgXML, {
                ignoreViewBox: true,
                ignoreRootClip: true
            }) || {};
            rootFromParse = result.root;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(rootFromParse != null);
        } catch (e) {
            throw new Error('Invalid svg format\n' + e.message);
        }
        // Note: we keep the covenant that the root has no transform. So always add an extra root.
        var root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
        root.add(rootFromParse);
        root.isGeoSVGGraphicRoot = true;
        // [THE_RULE_OF_VIEWPORT_AND_VIEWBOX]
        //
        // Consider: `<svg width="..." height="..." viewBox="...">`
        // - the `width/height` we call it `svgWidth/svgHeight` for short.
        // - `(0, 0, svgWidth, svgHeight)` defines the viewport of the SVG, or say,
        //   "viewport boundingRect", or `boundingRect` for short.
        // - `viewBox` defines the transform from the real content ot the viewport.
        //   `viewBox` has the same unit as the content of SVG.
        //   If `viewBox` exists, a transform is defined, so the unit of `svgWidth/svgHeight` become
        //   different from the content of SVG. Otherwise, they are the same.
        //
        // If both `svgWidth/svgHeight/viewBox` are specified in a SVG file, the transform rule will be:
        // 0. `boundingRect` is `(0, 0, svgWidth, svgHeight)`. Set it to Geo['_rect'] (View['_rect']).
        // 1. Make a transform from `viewBox` to `boundingRect`.
        //    Note: only support `preserveAspectRatio 'xMidYMid'` here. That is, this transform will preserve
        //    the aspect ratio.
        // 2. Make a transform from boundingRect to Geo['_viewRect'] (View['_viewRect'])
        //    (`Geo`/`View` will do this job).
        //    Note: this transform might not preserve aspect radio, which depending on how users specify
        //    viewRect in echarts option (e.g., `geo.left/top/width/height` will not preserve aspect ratio,
        //    but `geo.layoutCenter/layoutSize` will preserve aspect ratio).
        //
        // If `svgWidth/svgHeight` not specified, we use `viewBox` as the `boundingRect` to make the SVG
        // layout look good.
        //
        // If neither `svgWidth/svgHeight` nor `viewBox` are not specified, we calculate the boundingRect
        // of the SVG content and use them to make SVG layout look good.
        var svgWidth = result.width;
        var svgHeight = result.height;
        var viewBoxRect = result.viewBoxRect;
        var boundingRect = this._boundingRect;
        if (!boundingRect) {
            var bRectX = void 0;
            var bRectY = void 0;
            var bRectWidth = void 0;
            var bRectHeight = void 0;
            if (svgWidth != null) {
                bRectX = 0;
                bRectWidth = svgWidth;
            } else if (viewBoxRect) {
                bRectX = viewBoxRect.x;
                bRectWidth = viewBoxRect.width;
            }
            if (svgHeight != null) {
                bRectY = 0;
                bRectHeight = svgHeight;
            } else if (viewBoxRect) {
                bRectY = viewBoxRect.y;
                bRectHeight = viewBoxRect.height;
            }
            // If both viewBox and svgWidth/svgHeight not specified,
            // we have to determine how to layout those element to make them look good.
            if (bRectX == null || bRectY == null) {
                var calculatedBoundingRect = rootFromParse.getBoundingRect();
                if (bRectX == null) {
                    bRectX = calculatedBoundingRect.x;
                    bRectWidth = calculatedBoundingRect.width;
                }
                if (bRectY == null) {
                    bRectY = calculatedBoundingRect.y;
                    bRectHeight = calculatedBoundingRect.height;
                }
            }
            boundingRect = this._boundingRect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](bRectX, bRectY, bRectWidth, bRectHeight);
        }
        if (viewBoxRect) {
            var viewBoxTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$parseSVG$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["makeViewBoxTransform"])(viewBoxRect, boundingRect);
            // Only support `preserveAspectRatio 'xMidYMid'`
            rootFromParse.scaleX = rootFromParse.scaleY = viewBoxTransform.scale;
            rootFromParse.x = viewBoxTransform.x;
            rootFromParse.y = viewBoxTransform.y;
        }
        // SVG needs to clip based on `viewBox`. And some SVG files really rely on this feature.
        // They do not strictly confine all of the content inside a display rect, but deliberately
        // use a `viewBox` to define a displayable rect.
        // PENDING:
        // The drawback of the `setClipPath` here is: the region label (genereted by echarts) near the
        // edge might also be clipped, because region labels are put as `textContent` of the SVG path.
        root.setClipPath(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
            shape: boundingRect.plain()
        }));
        var named = [];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(result.named, function(namedItem) {
            if (REGION_AVAILABLE_SVG_TAG_MAP.get(namedItem.svgNodeTagLower) != null) {
                named.push(namedItem);
                setSilent(namedItem.el);
            }
        });
        return {
            root: root,
            boundingRect: boundingRect,
            named: named
        };
    };
    /**
   * Consider:
   * (1) One graphic element can not be shared by different `geoView` running simultaneously.
   *     Notice, also need to consider multiple echarts instances share a `mapRecord`.
   * (2) Converting SVG to graphic elements is time consuming.
   * (3) In the current architecture, `load` should be called frequently to get boundingRect,
   *     and it is called without view info.
   * So we maintain graphic elements in this module, and enables `view` to use/return these
   * graphics from/to the pool with it's uid.
   */ GeoSVGResource.prototype.useGraphic = function(hostKey /* , nameMap: NameMap */ ) {
        var usedRootMap = this._usedGraphicMap;
        var svgGraphic = usedRootMap.get(hostKey);
        if (svgGraphic) {
            return svgGraphic;
        }
        svgGraphic = this._freedGraphics.pop() || this._buildGraphic(this._parsedXML);
        usedRootMap.set(hostKey, svgGraphic);
        // PENDING: `nameMap` will not be supported until some real requirement come.
        // `nameMap` can only be obtained from echarts option.
        // The original `named` must not be modified.
        // if (nameMap) {
        //     svgGraphic = extend({}, svgGraphic);
        //     svgGraphic.named = applyNameMap(svgGraphic.named, nameMap);
        // }
        return svgGraphic;
    };
    GeoSVGResource.prototype.freeGraphic = function(hostKey) {
        var usedRootMap = this._usedGraphicMap;
        var svgGraphic = usedRootMap.get(hostKey);
        if (svgGraphic) {
            usedRootMap.removeKey(hostKey);
            this._freedGraphics.push(svgGraphic);
        }
    };
    return GeoSVGResource;
}();
;
function setSilent(el) {
    // Only named element has silent: false, other elements should
    // act as background and has no user interaction.
    el.silent = false;
    // text|tspan will be converted to group.
    if (el.isGroup) {
        el.traverse(function(child) {
            child.silent = false;
        });
    }
}
function createRegions(named) {
    var regions = [];
    var regionsMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashMap"])();
    // Create resions only for the first graphic.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(named, function(namedItem) {
        // Region has feature to calculate center for tooltip or other features.
        // If there is a <g name="xxx">, the center should be the center of the
        // bounding rect of the g.
        if (namedItem.namedFrom != null) {
            return;
        }
        var region = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$Region$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeoSVGRegion"](namedItem.name, namedItem.el);
        // PENDING: if `nameMap` supported, this region can not be mounted on
        // `this`, but can only be created each time `load()` called.
        regions.push(region);
        // PENDING: if multiple tag named with the same name, only one will be
        // found by `_regionsMap`. `_regionsMap` is used to find a coordinate
        // by name. We use `region.getCenter()` as the coordinate.
        regionsMap.set(namedItem.name, region);
    });
    return {
        regions: regions,
        regionsMap: regionsMap
    };
} // PENDING: `nameMap` will not be supported until some real requirement come.
 // /**
 //  * Use the alias in geoNameMap.
 //  * The input `named` must not be modified.
 //  */
 // function applyNameMap(
 //     named: GeoSVGGraphicRecord['named'],
 //     nameMap: NameMap
 // ): GeoSVGGraphicRecord['named'] {
 //     const result = [] as GeoSVGGraphicRecord['named'];
 //     for (let i = 0; i < named.length; i++) {
 //         let regionGraphic = named[i];
 //         const name = regionGraphic.name;
 //         if (nameMap && nameMap.hasOwnProperty(name)) {
 //             regionGraphic = extend({}, regionGraphic);
 //             regionGraphic.name = name;
 //         }
 //         result.push(regionGraphic);
 //     }
 //     return result;
 // }
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/geo/parseGeoJson.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
 * Parse and decode geo json
 */ __turbopack_context__.s({
    "default": (()=>parseGeoJSON)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$Region$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/geo/Region.js [app-client] (ecmascript)");
;
;
function decode(json) {
    if (!json.UTF8Encoding) {
        return json;
    }
    var jsonCompressed = json;
    var encodeScale = jsonCompressed.UTF8Scale;
    if (encodeScale == null) {
        encodeScale = 1024;
    }
    var features = jsonCompressed.features;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(features, function(feature) {
        var geometry = feature.geometry;
        var encodeOffsets = geometry.encodeOffsets;
        var coordinates = geometry.coordinates;
        // Geometry may be appeded manually in the script after json loaded.
        // In this case this geometry is usually not encoded.
        if (!encodeOffsets) {
            return;
        }
        switch(geometry.type){
            case 'LineString':
                geometry.coordinates = decodeRing(coordinates, encodeOffsets, encodeScale);
                break;
            case 'Polygon':
                decodeRings(coordinates, encodeOffsets, encodeScale);
                break;
            case 'MultiLineString':
                decodeRings(coordinates, encodeOffsets, encodeScale);
                break;
            case 'MultiPolygon':
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(coordinates, function(rings, idx) {
                    return decodeRings(rings, encodeOffsets[idx], encodeScale);
                });
        }
    });
    // Has been decoded
    jsonCompressed.UTF8Encoding = false;
    return jsonCompressed;
}
function decodeRings(rings, encodeOffsets, encodeScale) {
    for(var c = 0; c < rings.length; c++){
        rings[c] = decodeRing(rings[c], encodeOffsets[c], encodeScale);
    }
}
function decodeRing(coordinate, encodeOffsets, encodeScale) {
    var result = [];
    var prevX = encodeOffsets[0];
    var prevY = encodeOffsets[1];
    for(var i = 0; i < coordinate.length; i += 2){
        var x = coordinate.charCodeAt(i) - 64;
        var y = coordinate.charCodeAt(i + 1) - 64;
        // ZigZag decoding
        x = x >> 1 ^ -(x & 1);
        y = y >> 1 ^ -(y & 1);
        // Delta deocding
        x += prevX;
        y += prevY;
        prevX = x;
        prevY = y;
        // Dequantize
        result.push([
            x / encodeScale,
            y / encodeScale
        ]);
    }
    return result;
}
function parseGeoJSON(geoJson, nameProperty) {
    geoJson = decode(geoJson);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"])(geoJson.features, function(featureObj) {
        // Output of mapshaper may have geometry null
        return featureObj.geometry && featureObj.properties && featureObj.geometry.coordinates.length > 0;
    }), function(featureObj) {
        var properties = featureObj.properties;
        var geo = featureObj.geometry;
        var geometries = [];
        switch(geo.type){
            case 'Polygon':
                var coordinates = geo.coordinates;
                // According to the GeoJSON specification.
                // First must be exterior, and the rest are all interior(holes).
                geometries.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$Region$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeoJSONPolygonGeometry"](coordinates[0], coordinates.slice(1)));
                break;
            case 'MultiPolygon':
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(geo.coordinates, function(item) {
                    if (item[0]) {
                        geometries.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$Region$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeoJSONPolygonGeometry"](item[0], item.slice(1)));
                    }
                });
                break;
            case 'LineString':
                geometries.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$Region$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeoJSONLineStringGeometry"]([
                    geo.coordinates
                ]));
                break;
            case 'MultiLineString':
                geometries.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$Region$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeoJSONLineStringGeometry"](geo.coordinates));
        }
        var region = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$Region$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeoJSONRegion"](properties[nameProperty || 'name'], geometries, properties.cp);
        region.properties = properties;
        return region;
    });
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/geo/fix/nanhai.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
*/ // Fix for 南海诸岛
__turbopack_context__.s({
    "default": (()=>fixNanhai)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$Region$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/geo/Region.js [app-client] (ecmascript)");
;
;
var geoCoord = [
    126,
    25
];
var nanhaiName = '南海诸岛';
var points = [
    [
        [
            0,
            3.5
        ],
        [
            7,
            11.2
        ],
        [
            15,
            11.9
        ],
        [
            30,
            7
        ],
        [
            42,
            0.7
        ],
        [
            52,
            0.7
        ],
        [
            56,
            7.7
        ],
        [
            59,
            0.7
        ],
        [
            64,
            0.7
        ],
        [
            64,
            0
        ],
        [
            5,
            0
        ],
        [
            0,
            3.5
        ]
    ],
    [
        [
            13,
            16.1
        ],
        [
            19,
            14.7
        ],
        [
            16,
            21.7
        ],
        [
            11,
            23.1
        ],
        [
            13,
            16.1
        ]
    ],
    [
        [
            12,
            32.2
        ],
        [
            14,
            38.5
        ],
        [
            15,
            38.5
        ],
        [
            13,
            32.2
        ],
        [
            12,
            32.2
        ]
    ],
    [
        [
            16,
            47.6
        ],
        [
            12,
            53.2
        ],
        [
            13,
            53.2
        ],
        [
            18,
            47.6
        ],
        [
            16,
            47.6
        ]
    ],
    [
        [
            6,
            64.4
        ],
        [
            8,
            70
        ],
        [
            9,
            70
        ],
        [
            8,
            64.4
        ],
        [
            6,
            64.4
        ]
    ],
    [
        [
            23,
            82.6
        ],
        [
            29,
            79.8
        ],
        [
            30,
            79.8
        ],
        [
            25,
            82.6
        ],
        [
            23,
            82.6
        ]
    ],
    [
        [
            37,
            70.7
        ],
        [
            43,
            62.3
        ],
        [
            44,
            62.3
        ],
        [
            39,
            70.7
        ],
        [
            37,
            70.7
        ]
    ],
    [
        [
            48,
            51.1
        ],
        [
            51,
            45.5
        ],
        [
            53,
            45.5
        ],
        [
            50,
            51.1
        ],
        [
            48,
            51.1
        ]
    ],
    [
        [
            51,
            35
        ],
        [
            51,
            28.7
        ],
        [
            53,
            28.7
        ],
        [
            53,
            35
        ],
        [
            51,
            35
        ]
    ],
    [
        [
            52,
            22.4
        ],
        [
            55,
            17.5
        ],
        [
            56,
            17.5
        ],
        [
            53,
            22.4
        ],
        [
            52,
            22.4
        ]
    ],
    [
        [
            58,
            12.6
        ],
        [
            62,
            7
        ],
        [
            63,
            7
        ],
        [
            60,
            12.6
        ],
        [
            58,
            12.6
        ]
    ],
    [
        [
            0,
            3.5
        ],
        [
            0,
            93.1
        ],
        [
            64,
            93.1
        ],
        [
            64,
            0
        ],
        [
            63,
            0
        ],
        [
            63,
            92.4
        ],
        [
            1,
            92.4
        ],
        [
            1,
            3.5
        ],
        [
            0,
            3.5
        ]
    ]
];
for(var i = 0; i < points.length; i++){
    for(var k = 0; k < points[i].length; k++){
        points[i][k][0] /= 10.5;
        points[i][k][1] /= -10.5 / 0.75;
        points[i][k][0] += geoCoord[0];
        points[i][k][1] += geoCoord[1];
    }
}
function fixNanhai(mapType, regions) {
    if (mapType === 'china') {
        for(var i = 0; i < regions.length; i++){
            // Already exists.
            if (regions[i].name === nanhaiName) {
                return;
            }
        }
        regions.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$Region$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeoJSONRegion"](nanhaiName, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(points, function(exterior) {
            return {
                type: 'polygon',
                exterior: exterior
            };
        }), geoCoord));
    }
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/geo/fix/textCoord.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "default": (()=>fixTextCoords)
});
var coordsOffsetMap = {
    '南海诸岛': [
        32,
        80
    ],
    // 全国
    '广东': [
        0,
        -10
    ],
    '香港': [
        10,
        5
    ],
    '澳门': [
        -10,
        10
    ],
    // '北京': [-10, 0],
    '天津': [
        5,
        5
    ]
};
function fixTextCoords(mapType, region) {
    if (mapType === 'china') {
        var coordFix = coordsOffsetMap[region.name];
        if (coordFix) {
            var cp = region.getCenter();
            cp[0] += coordFix[0] / 10.5;
            cp[1] += -coordFix[1] / (10.5 / 0.75);
            region.setCenter(cp);
        }
    }
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/geo/fix/diaoyuIsland.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
*/ // Fix for 钓鱼岛
// let Region = require('../Region');
// let zrUtil = require('zrender/lib/core/util');
// let geoCoord = [126, 25];
__turbopack_context__.s({
    "default": (()=>fixDiaoyuIsland)
});
var points = [
    [
        [
            123.45165252685547,
            25.73527164402261
        ],
        [
            123.49731445312499,
            25.73527164402261
        ],
        [
            123.49731445312499,
            25.750734064600884
        ],
        [
            123.45165252685547,
            25.750734064600884
        ],
        [
            123.45165252685547,
            25.73527164402261
        ]
    ]
];
function fixDiaoyuIsland(mapType, region) {
    if (mapType === 'china' && region.name === '台湾') {
        region.geometries.push({
            type: 'polygon',
            exterior: points[0]
        });
    }
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/geo/GeoJSONResource.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "GeoJSONResource": (()=>GeoJSONResource)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$parseGeoJson$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/geo/parseGeoJson.js [app-client] (ecmascript)");
// Built-in GEO fixer.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$fix$2f$nanhai$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/geo/fix/nanhai.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$fix$2f$textCoord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/geo/fix/textCoord.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$fix$2f$diaoyuIsland$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/geo/fix/diaoyuIsland.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/BoundingRect.js [app-client] (ecmascript)");
;
;
;
;
;
;
var DEFAULT_NAME_PROPERTY = 'name';
var GeoJSONResource = /** @class */ function() {
    function GeoJSONResource(mapName, geoJSON, specialAreas) {
        this.type = 'geoJSON';
        this._parsedMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashMap"])();
        this._mapName = mapName;
        this._specialAreas = specialAreas;
        // PENDING: delay the parse to the first usage to rapid up the FMP?
        this._geoJSON = parseInput(geoJSON);
    }
    /**
   * @param nameMap can be null/undefined
   * @param nameProperty can be null/undefined
   */ GeoJSONResource.prototype.load = function(nameMap, nameProperty) {
        nameProperty = nameProperty || DEFAULT_NAME_PROPERTY;
        var parsed = this._parsedMap.get(nameProperty);
        if (!parsed) {
            var rawRegions = this._parseToRegions(nameProperty);
            parsed = this._parsedMap.set(nameProperty, {
                regions: rawRegions,
                boundingRect: calculateBoundingRect(rawRegions)
            });
        }
        var regionsMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashMap"])();
        var finalRegions = [];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(parsed.regions, function(region) {
            var regionName = region.name;
            // Try use the alias in geoNameMap
            if (nameMap && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasOwn"])(nameMap, regionName)) {
                region = region.cloneShallow(regionName = nameMap[regionName]);
            }
            finalRegions.push(region);
            regionsMap.set(regionName, region);
        });
        return {
            regions: finalRegions,
            boundingRect: parsed.boundingRect || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0, 0, 0, 0),
            regionsMap: regionsMap
        };
    };
    GeoJSONResource.prototype._parseToRegions = function(nameProperty) {
        var mapName = this._mapName;
        var geoJSON = this._geoJSON;
        var rawRegions;
        // https://jsperf.com/try-catch-performance-overhead
        try {
            rawRegions = geoJSON ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$parseGeoJson$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(geoJSON, nameProperty) : [];
        } catch (e) {
            throw new Error('Invalid geoJson format\n' + e.message);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$fix$2f$nanhai$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mapName, rawRegions);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(rawRegions, function(region) {
            var regionName = region.name;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$fix$2f$textCoord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mapName, region);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$fix$2f$diaoyuIsland$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mapName, region);
            // Some area like Alaska in USA map needs to be tansformed
            // to look better
            var specialArea = this._specialAreas && this._specialAreas[regionName];
            if (specialArea) {
                region.transformTo(specialArea.left, specialArea.top, specialArea.width, specialArea.height);
            }
        }, this);
        return rawRegions;
    };
    /**
   * Only for exporting to users.
   * **MUST NOT** used internally.
   */ GeoJSONResource.prototype.getMapForUser = function() {
        return {
            // For backward compatibility, use geoJson
            // PENDING: it has been returning them without clone.
            // do we need to avoid outsite modification?
            geoJson: this._geoJSON,
            geoJSON: this._geoJSON,
            specialAreas: this._specialAreas
        };
    };
    return GeoJSONResource;
}();
;
function calculateBoundingRect(regions) {
    var rect;
    for(var i = 0; i < regions.length; i++){
        var regionRect = regions[i].getBoundingRect();
        rect = rect || regionRect.clone();
        rect.union(regionRect);
    }
    return rect;
}
function parseInput(source) {
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(source) ? source : typeof JSON !== 'undefined' && JSON.parse ? JSON.parse(source) : new Function('return (' + source + ');')();
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/geo/geoSourceManager.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$GeoSVGResource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/geo/GeoSVGResource.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$GeoJSONResource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/geo/GeoJSONResource.js [app-client] (ecmascript)");
;
;
;
var storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashMap"])();
const __TURBOPACK__default__export__ = {
    /**
   * Compatible with previous `echarts.registerMap`.
   *
   * @usage
   * ```js
   *
   * echarts.registerMap('USA', geoJson, specialAreas);
   *
   * echarts.registerMap('USA', {
   *     geoJson: geoJson,
   *     specialAreas: {...}
   * });
   * echarts.registerMap('USA', {
   *     geoJSON: geoJson,
   *     specialAreas: {...}
   * });
   *
   * echarts.registerMap('airport', {
   *     svg: svg
   * }
   * ```
   *
   * Note:
   * Do not support that register multiple geoJSON or SVG
   * one map name. Because different geoJSON and SVG have
   * different unit. It's not easy to make sure how those
   * units are mapping/normalize.
   * If intending to use multiple geoJSON or SVG, we can
   * use multiple geo coordinate system.
   */ registerMap: function(mapName, rawDef, rawSpecialAreas) {
        if (rawDef.svg) {
            var resource = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$GeoSVGResource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeoSVGResource"](mapName, rawDef.svg);
            storage.set(mapName, resource);
        } else {
            // Recommend:
            //     echarts.registerMap('eu', { geoJSON: xxx, specialAreas: xxx });
            // Backward compatibility:
            //     echarts.registerMap('eu', geoJSON, specialAreas);
            //     echarts.registerMap('eu', { geoJson: xxx, specialAreas: xxx });
            var geoJSON = rawDef.geoJson || rawDef.geoJSON;
            if (geoJSON && !rawDef.features) {
                rawSpecialAreas = rawDef.specialAreas;
            } else {
                geoJSON = rawDef;
            }
            var resource = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$GeoJSONResource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeoJSONResource"](mapName, geoJSON, rawSpecialAreas);
            storage.set(mapName, resource);
        }
    },
    getGeoResource: function(mapName) {
        return storage.get(mapName);
    },
    /**
   * Only for exporting to users.
   * **MUST NOT** used internally.
   */ getMapForUser: function(mapName) {
        var resource = storage.get(mapName);
        // Do not support return SVG until some real requirement come.
        return resource && resource.type === 'geoJSON' && resource.getMapForUser();
    },
    load: function(mapName, nameMap, nameProperty) {
        var resource = storage.get(mapName);
        if (!resource) {
            if ("TURBOPACK compile-time truthy", 1) {
                console.error('Map ' + mapName + ' not exists. The GeoJSON of the map must be provided.');
            }
            return;
        }
        return resource.load(nameMap, nameProperty);
    }
};
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/View.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
/**
 * Simple view coordinate system
 * Mapping given x, y to transformd view x, y
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/matrix.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/BoundingRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Transformable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/Transformable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js [app-client] (ecmascript)");
;
;
;
;
;
;
var v2ApplyTransform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyTransform"];
var View = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(View, _super);
    function View(name) {
        var _this = _super.call(this) || this;
        _this.type = 'view';
        _this.dimensions = [
            'x',
            'y'
        ];
        /**
     * Represents the transform brought by roam/zoom.
     * If `View['_viewRect']` applies roam transform,
     * we can get the final displayed rect.
     */ _this._roamTransformable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Transformable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
        /**
     * Represents the transform from `View['_rect']` to `View['_viewRect']`.
     */ _this._rawTransformable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Transformable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
        _this.name = name;
        return _this;
    }
    View.prototype.setBoundingRect = function(x, y, width, height) {
        this._rect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](x, y, width, height);
        return this._rect;
    };
    /**
   * @return {module:zrender/core/BoundingRect}
   */ View.prototype.getBoundingRect = function() {
        return this._rect;
    };
    View.prototype.setViewRect = function(x, y, width, height) {
        this._transformTo(x, y, width, height);
        this._viewRect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](x, y, width, height);
    };
    /**
   * Transformed to particular position and size
   */ View.prototype._transformTo = function(x, y, width, height) {
        var rect = this.getBoundingRect();
        var rawTransform = this._rawTransformable;
        rawTransform.transform = rect.calculateTransform(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](x, y, width, height));
        var rawParent = rawTransform.parent;
        rawTransform.parent = null;
        rawTransform.decomposeTransform();
        rawTransform.parent = rawParent;
        this._updateTransform();
    };
    /**
   * Set center of view
   */ View.prototype.setCenter = function(centerCoord, api) {
        if (!centerCoord) {
            return;
        }
        this._center = [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(centerCoord[0], api.getWidth()),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(centerCoord[1], api.getHeight())
        ];
        this._updateCenterAndZoom();
    };
    View.prototype.setZoom = function(zoom) {
        zoom = zoom || 1;
        var zoomLimit = this.zoomLimit;
        if (zoomLimit) {
            if (zoomLimit.max != null) {
                zoom = Math.min(zoomLimit.max, zoom);
            }
            if (zoomLimit.min != null) {
                zoom = Math.max(zoomLimit.min, zoom);
            }
        }
        this._zoom = zoom;
        this._updateCenterAndZoom();
    };
    /**
   * Get default center without roam
   */ View.prototype.getDefaultCenter = function() {
        // Rect before any transform
        var rawRect = this.getBoundingRect();
        var cx = rawRect.x + rawRect.width / 2;
        var cy = rawRect.y + rawRect.height / 2;
        return [
            cx,
            cy
        ];
    };
    View.prototype.getCenter = function() {
        return this._center || this.getDefaultCenter();
    };
    View.prototype.getZoom = function() {
        return this._zoom || 1;
    };
    View.prototype.getRoamTransform = function() {
        return this._roamTransformable.getLocalTransform();
    };
    /**
   * Remove roam
   */ View.prototype._updateCenterAndZoom = function() {
        // Must update after view transform updated
        var rawTransformMatrix = this._rawTransformable.getLocalTransform();
        var roamTransform = this._roamTransformable;
        var defaultCenter = this.getDefaultCenter();
        var center = this.getCenter();
        var zoom = this.getZoom();
        center = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyTransform"])([], center, rawTransformMatrix);
        defaultCenter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyTransform"])([], defaultCenter, rawTransformMatrix);
        roamTransform.originX = center[0];
        roamTransform.originY = center[1];
        roamTransform.x = defaultCenter[0] - center[0];
        roamTransform.y = defaultCenter[1] - center[1];
        roamTransform.scaleX = roamTransform.scaleY = zoom;
        this._updateTransform();
    };
    /**
   * Update transform props on `this` based on the current
   * `this._roamTransformable` and `this._rawTransformable`.
   */ View.prototype._updateTransform = function() {
        var roamTransformable = this._roamTransformable;
        var rawTransformable = this._rawTransformable;
        rawTransformable.parent = roamTransformable;
        roamTransformable.updateTransform();
        rawTransformable.updateTransform();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"])(this.transform || (this.transform = []), rawTransformable.transform || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])());
        this._rawTransform = rawTransformable.getLocalTransform();
        this.invTransform = this.invTransform || [];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invert"])(this.invTransform, this.transform);
        this.decomposeTransform();
    };
    View.prototype.getTransformInfo = function() {
        var rawTransformable = this._rawTransformable;
        var roamTransformable = this._roamTransformable;
        // Because roamTransformabel has `originX/originY` modified,
        // but the caller of `getTransformInfo` can not handle `originX/originY`,
        // so need to recalculate them.
        var dummyTransformable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Transformable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
        dummyTransformable.transform = roamTransformable.transform;
        dummyTransformable.decomposeTransform();
        return {
            roam: {
                x: dummyTransformable.x,
                y: dummyTransformable.y,
                scaleX: dummyTransformable.scaleX,
                scaleY: dummyTransformable.scaleY
            },
            raw: {
                x: rawTransformable.x,
                y: rawTransformable.y,
                scaleX: rawTransformable.scaleX,
                scaleY: rawTransformable.scaleY
            }
        };
    };
    View.prototype.getViewRect = function() {
        return this._viewRect;
    };
    /**
   * Get view rect after roam transform
   */ View.prototype.getViewRectAfterRoam = function() {
        var rect = this.getBoundingRect().clone();
        rect.applyTransform(this.transform);
        return rect;
    };
    /**
   * Convert a single (lon, lat) data item to (x, y) point.
   */ View.prototype.dataToPoint = function(data, noRoam, out) {
        var transform = noRoam ? this._rawTransform : this.transform;
        out = out || [];
        return transform ? v2ApplyTransform(out, data, transform) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"])(out, data);
    };
    /**
   * Convert a (x, y) point to (lon, lat) data
   */ View.prototype.pointToData = function(point) {
        var invTransform = this.invTransform;
        return invTransform ? v2ApplyTransform([], point, invTransform) : [
            point[0],
            point[1]
        ];
    };
    View.prototype.convertToPixel = function(ecModel, finder, value) {
        var coordSys = getCoordSys(finder);
        return coordSys === this ? coordSys.dataToPoint(value) : null;
    };
    View.prototype.convertFromPixel = function(ecModel, finder, pixel) {
        var coordSys = getCoordSys(finder);
        return coordSys === this ? coordSys.pointToData(pixel) : null;
    };
    /**
   * @implements
   */ View.prototype.containPoint = function(point) {
        return this.getViewRectAfterRoam().contain(point[0], point[1]);
    };
    View.dimensions = [
        'x',
        'y'
    ];
    return View;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Transformable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
function getCoordSys(finder) {
    var seriesModel = finder.seriesModel;
    return seriesModel ? seriesModel.coordinateSystem : null; // e.g., graph.
}
const __TURBOPACK__default__export__ = View;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/geo/Geo.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "default": (()=>__TURBOPACK__default__export__),
    "geo2DDimensions": (()=>geo2DDimensions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/BoundingRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$View$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/View.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$geoSourceManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/geo/geoSourceManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/log.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
var GEO_DEFAULT_PARAMS = {
    'geoJSON': {
        aspectScale: 0.75,
        invertLongitute: true
    },
    'geoSVG': {
        aspectScale: 1,
        invertLongitute: false
    }
};
var geo2DDimensions = [
    'lng',
    'lat'
];
var Geo = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(Geo, _super);
    function Geo(name, map, opt) {
        var _this = _super.call(this, name) || this;
        _this.dimensions = geo2DDimensions;
        _this.type = 'geo';
        // Only store specified name coord via `addGeoCoord`.
        _this._nameCoordMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashMap"])();
        _this.map = map;
        var projection = opt.projection;
        var source = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$geoSourceManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].load(map, opt.nameMap, opt.nameProperty);
        var resource = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$geoSourceManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getGeoResource(map);
        var resourceType = _this.resourceType = resource ? resource.type : null;
        var regions = _this.regions = source.regions;
        var defaultParams = GEO_DEFAULT_PARAMS[resource.type];
        _this._regionsMap = source.regionsMap;
        _this.regions = source.regions;
        if (("TURBOPACK compile-time value", "development") !== 'production' && projection) {
            // Do some check
            if (resourceType === 'geoSVG') {
                if ("TURBOPACK compile-time truthy", 1) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warn"])("Map " + map + " with SVG source can't use projection. Only GeoJSON source supports projection.");
                }
                projection = null;
            }
            if (!(projection.project && projection.unproject)) {
                if ("TURBOPACK compile-time truthy", 1) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warn"])('project and unproject must be both provided in the projeciton.');
                }
                projection = null;
            }
        }
        _this.projection = projection;
        var boundingRect;
        if (projection) {
            // Can't reuse the raw bounding rect
            for(var i = 0; i < regions.length; i++){
                var regionRect = regions[i].getBoundingRect(projection);
                boundingRect = boundingRect || regionRect.clone();
                boundingRect.union(regionRect);
            }
        } else {
            boundingRect = source.boundingRect;
        }
        _this.setBoundingRect(boundingRect.x, boundingRect.y, boundingRect.width, boundingRect.height);
        // aspectScale and invertLongitute actually is the parameters default raw projection.
        // So we ignore them if projection is given.
        // Ignore default aspect scale if projection exits.
        _this.aspectScale = projection ? 1 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve2"])(opt.aspectScale, defaultParams.aspectScale);
        // Not invert longitude if projection exits.
        _this._invertLongitute = projection ? false : defaultParams.invertLongitute;
        return _this;
    }
    Geo.prototype._transformTo = function(x, y, width, height) {
        var rect = this.getBoundingRect();
        var invertLongitute = this._invertLongitute;
        rect = rect.clone();
        if (invertLongitute) {
            // Longitude is inverted.
            rect.y = -rect.y - rect.height;
        }
        var rawTransformable = this._rawTransformable;
        rawTransformable.transform = rect.calculateTransform(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](x, y, width, height));
        var rawParent = rawTransformable.parent;
        rawTransformable.parent = null;
        rawTransformable.decomposeTransform();
        rawTransformable.parent = rawParent;
        if (invertLongitute) {
            rawTransformable.scaleY = -rawTransformable.scaleY;
        }
        this._updateTransform();
    };
    Geo.prototype.getRegion = function(name) {
        return this._regionsMap.get(name);
    };
    Geo.prototype.getRegionByCoord = function(coord) {
        var regions = this.regions;
        for(var i = 0; i < regions.length; i++){
            var region = regions[i];
            if (region.type === 'geoJSON' && region.contain(coord)) {
                return regions[i];
            }
        }
    };
    /**
   * Add geoCoord for indexing by name
   */ Geo.prototype.addGeoCoord = function(name, geoCoord) {
        this._nameCoordMap.set(name, geoCoord);
    };
    /**
   * Get geoCoord by name
   */ Geo.prototype.getGeoCoord = function(name) {
        var region = this._regionsMap.get(name);
        // Calculate center only on demand.
        return this._nameCoordMap.get(name) || region && region.getCenter();
    };
    Geo.prototype.dataToPoint = function(data, noRoam, out) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(data)) {
            // Map area name to geoCoord
            data = this.getGeoCoord(data);
        }
        if (data) {
            var projection = this.projection;
            if (projection) {
                // projection may return null point.
                data = projection.project(data);
            }
            return data && this.projectedToPoint(data, noRoam, out);
        }
    };
    Geo.prototype.pointToData = function(point) {
        var projection = this.projection;
        if (projection) {
            // projection may return null point.
            point = projection.unproject(point);
        }
        return point && this.pointToProjected(point);
    };
    /**
   * Point to projected data. Same with pointToData when projection is used.
   */ Geo.prototype.pointToProjected = function(point) {
        return _super.prototype.pointToData.call(this, point);
    };
    Geo.prototype.projectedToPoint = function(projected, noRoam, out) {
        return _super.prototype.dataToPoint.call(this, projected, noRoam, out);
    };
    Geo.prototype.convertToPixel = function(ecModel, finder, value) {
        var coordSys = getCoordSys(finder);
        return coordSys === this ? coordSys.dataToPoint(value) : null;
    };
    Geo.prototype.convertFromPixel = function(ecModel, finder, pixel) {
        var coordSys = getCoordSys(finder);
        return coordSys === this ? coordSys.pointToData(pixel) : null;
    };
    return Geo;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$View$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixin"])(Geo, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$View$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
function getCoordSys(finder) {
    var geoModel = finder.geoModel;
    var seriesModel = finder.seriesModel;
    return geoModel ? geoModel.coordinateSystem : seriesModel ? seriesModel.coordinateSystem // For map series.
     || (seriesModel.getReferringComponents('geo', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SINGLE_REFERRING"]).models[0] || {}).coordinateSystem : null;
}
const __TURBOPACK__default__export__ = Geo;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/geo/geoCreator.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$Geo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/geo/Geo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/layout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$geoSourceManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/geo/geoSourceManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/vector.js [app-client] (ecmascript)");
;
;
;
;
;
;
/**
 * Resize method bound to the geo
 */ function resizeGeo(geoModel, api) {
    var boundingCoords = geoModel.get('boundingCoords');
    if (boundingCoords != null) {
        var leftTop_1 = boundingCoords[0];
        var rightBottom_1 = boundingCoords[1];
        if (!(isFinite(leftTop_1[0]) && isFinite(leftTop_1[1]) && isFinite(rightBottom_1[0]) && isFinite(rightBottom_1[1]))) {
            if ("TURBOPACK compile-time truthy", 1) {
                console.error('Invalid boundingCoords');
            }
        } else {
            // Sample around the lng/lat rect and use projection to calculate actual bounding rect.
            var projection_1 = this.projection;
            if (projection_1) {
                var xMin = leftTop_1[0];
                var yMin = leftTop_1[1];
                var xMax = rightBottom_1[0];
                var yMax = rightBottom_1[1];
                leftTop_1 = [
                    Infinity,
                    Infinity
                ];
                rightBottom_1 = [
                    -Infinity,
                    -Infinity
                ];
                // TODO better way?
                var sampleLine = function(x0, y0, x1, y1) {
                    var dx = x1 - x0;
                    var dy = y1 - y0;
                    for(var i = 0; i <= 100; i++){
                        var p = i / 100;
                        var pt = projection_1.project([
                            x0 + dx * p,
                            y0 + dy * p
                        ]);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(leftTop_1, leftTop_1, pt);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(rightBottom_1, rightBottom_1, pt);
                    }
                };
                // Top
                sampleLine(xMin, yMin, xMax, yMin);
                // Right
                sampleLine(xMax, yMin, xMax, yMax);
                // Bottom
                sampleLine(xMax, yMax, xMin, yMax);
                // Left
                sampleLine(xMin, yMax, xMax, yMin);
            }
            this.setBoundingRect(leftTop_1[0], leftTop_1[1], rightBottom_1[0] - leftTop_1[0], rightBottom_1[1] - leftTop_1[1]);
        }
    }
    var rect = this.getBoundingRect();
    var centerOption = geoModel.get('layoutCenter');
    var sizeOption = geoModel.get('layoutSize');
    var viewWidth = api.getWidth();
    var viewHeight = api.getHeight();
    var aspect = rect.width / rect.height * this.aspectScale;
    var useCenterAndSize = false;
    var center;
    var size;
    if (centerOption && sizeOption) {
        center = [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(centerOption[0], viewWidth),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(centerOption[1], viewHeight)
        ];
        size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(sizeOption, Math.min(viewWidth, viewHeight));
        if (!isNaN(center[0]) && !isNaN(center[1]) && !isNaN(size)) {
            useCenterAndSize = true;
        } else {
            if ("TURBOPACK compile-time truthy", 1) {
                console.warn('Given layoutCenter or layoutSize data are invalid. Use left/top/width/height instead.');
            }
        }
    }
    var viewRect;
    if (useCenterAndSize) {
        viewRect = {};
        if (aspect > 1) {
            // Width is same with size
            viewRect.width = size;
            viewRect.height = size / aspect;
        } else {
            viewRect.height = size;
            viewRect.width = size * aspect;
        }
        viewRect.y = center[1] - viewRect.height / 2;
        viewRect.x = center[0] - viewRect.width / 2;
    } else {
        // Use left/top/width/height
        var boxLayoutOption = geoModel.getBoxLayoutParams();
        boxLayoutOption.aspect = aspect;
        viewRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLayoutRect"])(boxLayoutOption, {
            width: viewWidth,
            height: viewHeight
        });
    }
    this.setViewRect(viewRect.x, viewRect.y, viewRect.width, viewRect.height);
    this.setCenter(geoModel.get('center'), api);
    this.setZoom(geoModel.get('zoom'));
}
// Back compat for ECharts2, where the coord map is set on map series:
// {type: 'map', geoCoord: {'cityA': [116.46,39.92], 'cityA': [119.12,24.61]}},
function setGeoCoords(geo, model) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(model.get('geoCoord'), function(geoCoord, name) {
        geo.addGeoCoord(name, geoCoord);
    });
}
var GeoCreator = /** @class */ function() {
    function GeoCreator() {
        // For deciding which dimensions to use when creating list data
        this.dimensions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$Geo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["geo2DDimensions"];
    }
    GeoCreator.prototype.create = function(ecModel, api) {
        var geoList = [];
        function getCommonGeoProperties(model) {
            return {
                nameProperty: model.get('nameProperty'),
                aspectScale: model.get('aspectScale'),
                projection: model.get('projection')
            };
        }
        // FIXME Create each time may be slow
        ecModel.eachComponent('geo', function(geoModel, idx) {
            var mapName = geoModel.get('map');
            var geo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$Geo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](mapName + idx, mapName, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])({
                nameMap: geoModel.get('nameMap')
            }, getCommonGeoProperties(geoModel)));
            geo.zoomLimit = geoModel.get('scaleLimit');
            geoList.push(geo);
            // setGeoCoords(geo, geoModel);
            geoModel.coordinateSystem = geo;
            geo.model = geoModel;
            // Inject resize method
            geo.resize = resizeGeo;
            geo.resize(geoModel, api);
        });
        ecModel.eachSeries(function(seriesModel) {
            var coordSys = seriesModel.get('coordinateSystem');
            if (coordSys === 'geo') {
                var geoIndex = seriesModel.get('geoIndex') || 0;
                seriesModel.coordinateSystem = geoList[geoIndex];
            }
        });
        // If has map series
        var mapModelGroupBySeries = {};
        ecModel.eachSeriesByType('map', function(seriesModel) {
            if (!seriesModel.getHostGeoModel()) {
                var mapType = seriesModel.getMapType();
                mapModelGroupBySeries[mapType] = mapModelGroupBySeries[mapType] || [];
                mapModelGroupBySeries[mapType].push(seriesModel);
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(mapModelGroupBySeries, function(mapSeries, mapType) {
            var nameMapList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(mapSeries, function(singleMapSeries) {
                return singleMapSeries.get('nameMap');
            });
            var geo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$Geo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](mapType, mapType, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])({
                nameMap: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAll"])(nameMapList)
            }, getCommonGeoProperties(mapSeries[0])));
            geo.zoomLimit = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve"].apply(null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(mapSeries, function(singleMapSeries) {
                return singleMapSeries.get('scaleLimit');
            }));
            geoList.push(geo);
            // Inject resize method
            geo.resize = resizeGeo;
            geo.resize(mapSeries[0], api);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(mapSeries, function(singleMapSeries) {
                singleMapSeries.coordinateSystem = geo;
                setGeoCoords(geo, singleMapSeries);
            });
        });
        return geoList;
    };
    /**
   * Fill given regions array
   */ GeoCreator.prototype.getFilledRegions = function(originRegionArr, mapName, nameMap, nameProperty) {
        // Not use the original
        var regionsArr = (originRegionArr || []).slice();
        var dataNameMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashMap"])();
        for(var i = 0; i < regionsArr.length; i++){
            dataNameMap.set(regionsArr[i].name, regionsArr[i]);
        }
        var source = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$geoSourceManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].load(mapName, nameMap, nameProperty);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(source.regions, function(region) {
            var name = region.name;
            var regionOption = dataNameMap.get(name);
            // apply specified echarts style in GeoJSON data
            var specifiedGeoJSONRegionStyle = region.properties && region.properties.echartsStyle;
            if (!regionOption) {
                regionOption = {
                    name: name
                };
                regionsArr.push(regionOption);
            }
            specifiedGeoJSONRegionStyle && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])(regionOption, specifiedGeoJSONRegionStyle);
        });
        return regionsArr;
    };
    return GeoCreator;
}();
var geoCreator = new GeoCreator();
const __TURBOPACK__default__export__ = geoCreator;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/geo/GeoModel.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$geoCreator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/geo/geoCreator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$geoSourceManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/geo/geoSourceManager.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var GeoModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(GeoModel, _super);
    function GeoModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = GeoModel.type;
        return _this;
    }
    GeoModel.prototype.init = function(option, parentModel, ecModel) {
        var source = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$geoSourceManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getGeoResource(option.map);
        if (source && source.type === 'geoJSON') {
            var itemStyle = option.itemStyle = option.itemStyle || {};
            if (!('color' in itemStyle)) {
                itemStyle.color = '#eee';
            }
        }
        this.mergeDefaultAndTheme(option, ecModel);
        // Default label emphasis `show`
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultEmphasis"])(option, 'label', [
            'show'
        ]);
    };
    GeoModel.prototype.optionUpdated = function() {
        var _this = this;
        var option = this.option;
        option.regions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$geo$2f$geoCreator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getFilledRegions(option.regions, option.map, option.nameMap, option.nameProperty);
        var selectedMap = {};
        this._optionModelMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduce"])(option.regions || [], function(optionModelMap, regionOpt) {
            var regionName = regionOpt.name;
            if (regionName) {
                optionModelMap.set(regionName, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](regionOpt, _this, _this.ecModel));
                if (regionOpt.selected) {
                    selectedMap[regionName] = true;
                }
            }
            return optionModelMap;
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashMap"])());
        if (!option.selectedMap) {
            option.selectedMap = selectedMap;
        }
    };
    /**
   * Get model of region.
   */ GeoModel.prototype.getRegionModel = function(name) {
        return this._optionModelMap.get(name) || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](null, this, this.ecModel);
    };
    /**
   * Format label
   * @param name Region name
   */ GeoModel.prototype.getFormattedLabel = function(name, status) {
        var regionModel = this.getRegionModel(name);
        var formatter = status === 'normal' ? regionModel.get([
            'label',
            'formatter'
        ]) : regionModel.get([
            'emphasis',
            'label',
            'formatter'
        ]);
        var params = {
            name: name
        };
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(formatter)) {
            params.status = status;
            return formatter(params);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(formatter)) {
            return formatter.replace('{a}', name != null ? name : '');
        }
    };
    GeoModel.prototype.setZoom = function(zoom) {
        this.option.zoom = zoom;
    };
    GeoModel.prototype.setCenter = function(center) {
        this.option.center = center;
    };
    // PENGING If selectedMode is null ?
    GeoModel.prototype.select = function(name) {
        var option = this.option;
        var selectedMode = option.selectedMode;
        if (!selectedMode) {
            return;
        }
        if (selectedMode !== 'multiple') {
            option.selectedMap = null;
        }
        var selectedMap = option.selectedMap || (option.selectedMap = {});
        selectedMap[name] = true;
    };
    GeoModel.prototype.unSelect = function(name) {
        var selectedMap = this.option.selectedMap;
        if (selectedMap) {
            selectedMap[name] = false;
        }
    };
    GeoModel.prototype.toggleSelected = function(name) {
        this[this.isSelected(name) ? 'unSelect' : 'select'](name);
    };
    GeoModel.prototype.isSelected = function(name) {
        var selectedMap = this.option.selectedMap;
        return !!(selectedMap && selectedMap[name]);
    };
    GeoModel.type = 'geo';
    GeoModel.layoutMode = 'box';
    GeoModel.defaultOption = {
        // zlevel: 0,
        z: 0,
        show: true,
        left: 'center',
        top: 'center',
        // Default value:
        // for geoSVG source: 1,
        // for geoJSON source: 0.75.
        aspectScale: null,
        // /// Layout with center and size
        // If you want to put map in a fixed size box with right aspect ratio
        // This two properties may be more convenient
        // layoutCenter: [50%, 50%]
        // layoutSize: 100
        silent: false,
        // Map type
        map: '',
        // Define left-top, right-bottom coords to control view
        // For example, [ [180, 90], [-180, -90] ]
        boundingCoords: null,
        // Default on center of map
        center: null,
        zoom: 1,
        scaleLimit: null,
        // selectedMode: false
        label: {
            show: false,
            color: '#000'
        },
        itemStyle: {
            borderWidth: 0.5,
            borderColor: '#444'
        },
        emphasis: {
            label: {
                show: true,
                color: 'rgb(100,0,0)'
            },
            itemStyle: {
                color: 'rgba(255,215,0,0.8)'
            }
        },
        select: {
            label: {
                show: true,
                color: 'rgb(100,0,0)'
            },
            itemStyle: {
                color: 'rgba(255,215,0,0.8)'
            }
        },
        regions: []
    };
    return GeoModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = GeoModel;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/parallel/parallelPreprocessor.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "default": (()=>parallelPreprocessor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
;
;
function parallelPreprocessor(option) {
    createParallelIfNeeded(option);
    mergeAxisOptionFromParallel(option);
}
/**
 * Create a parallel coordinate if not exists.
 * @inner
 */ function createParallelIfNeeded(option) {
    if (option.parallel) {
        return;
    }
    var hasParallelSeries = false;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(option.series, function(seriesOpt) {
        if (seriesOpt && seriesOpt.type === 'parallel') {
            hasParallelSeries = true;
        }
    });
    if (hasParallelSeries) {
        option.parallel = [
            {}
        ];
    }
}
/**
 * Merge aixs definition from parallel option (if exists) to axis option.
 * @inner
 */ function mergeAxisOptionFromParallel(option) {
    var axes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeToArray"])(option.parallelAxis);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(axes, function(axisOption) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(axisOption)) {
            return;
        }
        var parallelIndex = axisOption.parallelIndex || 0;
        var parallelOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeToArray"])(option.parallel)[parallelIndex];
        if (parallelOption && parallelOption.parallelAxisDefault) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])(axisOption, parallelOption.parallelAxisDefault, false);
        }
    });
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/parallel/ParallelModel.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Component.js [app-client] (ecmascript)");
;
;
;
var ParallelModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(ParallelModel, _super);
    function ParallelModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ParallelModel.type;
        return _this;
    }
    ParallelModel.prototype.init = function() {
        _super.prototype.init.apply(this, arguments);
        this.mergeOption({});
    };
    ParallelModel.prototype.mergeOption = function(newOption) {
        var thisOption = this.option;
        newOption && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])(thisOption, newOption, true);
        this._initDimensions();
    };
    /**
   * Whether series or axis is in this coordinate system.
   */ ParallelModel.prototype.contains = function(model, ecModel) {
        var parallelIndex = model.get('parallelIndex');
        return parallelIndex != null && ecModel.getComponent('parallel', parallelIndex) === this;
    };
    ParallelModel.prototype.setAxisExpand = function(opt) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])([
            'axisExpandable',
            'axisExpandCenter',
            'axisExpandCount',
            'axisExpandWidth',
            'axisExpandWindow'
        ], function(name) {
            if (opt.hasOwnProperty(name)) {
                // @ts-ignore FIXME: why "never" inferred in this.option[name]?
                this.option[name] = opt[name];
            }
        }, this);
    };
    ParallelModel.prototype._initDimensions = function() {
        var dimensions = this.dimensions = [];
        var parallelAxisIndex = this.parallelAxisIndex = [];
        var axisModels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"])(this.ecModel.queryComponents({
            mainType: 'parallelAxis'
        }), function(axisModel) {
            // Can not use this.contains here, because
            // initialization has not been completed yet.
            return (axisModel.get('parallelIndex') || 0) === this.componentIndex;
        }, this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(axisModels, function(axisModel) {
            dimensions.push('dim' + axisModel.get('dim'));
            parallelAxisIndex.push(axisModel.componentIndex);
        });
    };
    ParallelModel.type = 'parallel';
    ParallelModel.dependencies = [
        'parallelAxis'
    ];
    ParallelModel.layoutMode = 'box';
    ParallelModel.defaultOption = {
        // zlevel: 0,
        z: 0,
        left: 80,
        top: 60,
        right: 80,
        bottom: 60,
        // width: {totalWidth} - left - right,
        // height: {totalHeight} - top - bottom,
        layout: 'horizontal',
        // FIXME
        // naming?
        axisExpandable: false,
        axisExpandCenter: null,
        axisExpandCount: 0,
        axisExpandWidth: 50,
        axisExpandRate: 17,
        axisExpandDebounce: 50,
        // [out, in, jumpTarget]. In percentage. If use [null, 0.05], null means full.
        // Do not doc to user until necessary.
        axisExpandSlideTriggerArea: [
            -0.15,
            0.05,
            0.4
        ],
        axisExpandTriggerOn: 'click',
        parallelAxisDefault: null
    };
    return ParallelModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = ParallelModel;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/parallel/ParallelAxis.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$Axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/Axis.js [app-client] (ecmascript)");
;
;
var ParallelAxis = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(ParallelAxis, _super);
    function ParallelAxis(dim, scale, coordExtent, axisType, axisIndex) {
        var _this = _super.call(this, dim, scale, coordExtent) || this;
        _this.type = axisType || 'value';
        _this.axisIndex = axisIndex;
        return _this;
    }
    ParallelAxis.prototype.isHorizontal = function() {
        return this.coordinateSystem.getModel().get('layout') !== 'horizontal';
    };
    return ParallelAxis;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$Axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = ParallelAxis;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/parallel/Parallel.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
 * Parallel Coordinates
 * <https://en.wikipedia.org/wiki/Parallel_coordinates>
 */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/matrix.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/layout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$parallel$2f$ParallelAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/parallel/ParallelAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$sliderMove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/helper/sliderMove.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var each = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"];
var mathMin = Math.min;
var mathMax = Math.max;
var mathFloor = Math.floor;
var mathCeil = Math.ceil;
var round = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"];
var PI = Math.PI;
var Parallel = /** @class */ function() {
    function Parallel(parallelModel, ecModel, api) {
        this.type = 'parallel';
        /**
     * key: dimension
     */ this._axesMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashMap"])();
        /**
     * key: dimension
     * value: {position: [], rotation, }
     */ this._axesLayout = {};
        this.dimensions = parallelModel.dimensions;
        this._model = parallelModel;
        this._init(parallelModel, ecModel, api);
    }
    Parallel.prototype._init = function(parallelModel, ecModel, api) {
        var dimensions = parallelModel.dimensions;
        var parallelAxisIndex = parallelModel.parallelAxisIndex;
        each(dimensions, function(dim, idx) {
            var axisIndex = parallelAxisIndex[idx];
            var axisModel = ecModel.getComponent('parallelAxis', axisIndex);
            var axis = this._axesMap.set(dim, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$parallel$2f$ParallelAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](dim, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScaleByModel"])(axisModel), [
                0,
                0
            ], axisModel.get('type'), axisIndex));
            var isCategory = axis.type === 'category';
            axis.onBand = isCategory && axisModel.get('boundaryGap');
            axis.inverse = axisModel.get('inverse');
            // Injection
            axisModel.axis = axis;
            axis.model = axisModel;
            axis.coordinateSystem = axisModel.coordinateSystem = this;
        }, this);
    };
    /**
   * Update axis scale after data processed
   */ Parallel.prototype.update = function(ecModel, api) {
        this._updateAxesFromSeries(this._model, ecModel);
    };
    Parallel.prototype.containPoint = function(point) {
        var layoutInfo = this._makeLayoutInfo();
        var axisBase = layoutInfo.axisBase;
        var layoutBase = layoutInfo.layoutBase;
        var pixelDimIndex = layoutInfo.pixelDimIndex;
        var pAxis = point[1 - pixelDimIndex];
        var pLayout = point[pixelDimIndex];
        return pAxis >= axisBase && pAxis <= axisBase + layoutInfo.axisLength && pLayout >= layoutBase && pLayout <= layoutBase + layoutInfo.layoutLength;
    };
    Parallel.prototype.getModel = function() {
        return this._model;
    };
    /**
   * Update properties from series
   */ Parallel.prototype._updateAxesFromSeries = function(parallelModel, ecModel) {
        ecModel.eachSeries(function(seriesModel) {
            if (!parallelModel.contains(seriesModel, ecModel)) {
                return;
            }
            var data = seriesModel.getData();
            each(this.dimensions, function(dim) {
                var axis = this._axesMap.get(dim);
                axis.scale.unionExtentFromData(data, data.mapDimension(dim));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["niceScaleExtent"])(axis.scale, axis.model);
            }, this);
        }, this);
    };
    /**
   * Resize the parallel coordinate system.
   */ Parallel.prototype.resize = function(parallelModel, api) {
        this._rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLayoutRect"])(parallelModel.getBoxLayoutParams(), {
            width: api.getWidth(),
            height: api.getHeight()
        });
        this._layoutAxes();
    };
    Parallel.prototype.getRect = function() {
        return this._rect;
    };
    Parallel.prototype._makeLayoutInfo = function() {
        var parallelModel = this._model;
        var rect = this._rect;
        var xy = [
            'x',
            'y'
        ];
        var wh = [
            'width',
            'height'
        ];
        var layout = parallelModel.get('layout');
        var pixelDimIndex = layout === 'horizontal' ? 0 : 1;
        var layoutLength = rect[wh[pixelDimIndex]];
        var layoutExtent = [
            0,
            layoutLength
        ];
        var axisCount = this.dimensions.length;
        var axisExpandWidth = restrict(parallelModel.get('axisExpandWidth'), layoutExtent);
        var axisExpandCount = restrict(parallelModel.get('axisExpandCount') || 0, [
            0,
            axisCount
        ]);
        var axisExpandable = parallelModel.get('axisExpandable') && axisCount > 3 && axisCount > axisExpandCount && axisExpandCount > 1 && axisExpandWidth > 0 && layoutLength > 0;
        // `axisExpandWindow` is According to the coordinates of [0, axisExpandLength],
        // for sake of consider the case that axisCollapseWidth is 0 (when screen is narrow),
        // where collapsed axes should be overlapped.
        var axisExpandWindow = parallelModel.get('axisExpandWindow');
        var winSize;
        if (!axisExpandWindow) {
            winSize = restrict(axisExpandWidth * (axisExpandCount - 1), layoutExtent);
            var axisExpandCenter = parallelModel.get('axisExpandCenter') || mathFloor(axisCount / 2);
            axisExpandWindow = [
                axisExpandWidth * axisExpandCenter - winSize / 2
            ];
            axisExpandWindow[1] = axisExpandWindow[0] + winSize;
        } else {
            winSize = restrict(axisExpandWindow[1] - axisExpandWindow[0], layoutExtent);
            axisExpandWindow[1] = axisExpandWindow[0] + winSize;
        }
        var axisCollapseWidth = (layoutLength - winSize) / (axisCount - axisExpandCount);
        // Avoid axisCollapseWidth is too small.
        axisCollapseWidth < 3 && (axisCollapseWidth = 0);
        // Find the first and last indices > ewin[0] and < ewin[1].
        var winInnerIndices = [
            mathFloor(round(axisExpandWindow[0] / axisExpandWidth, 1)) + 1,
            mathCeil(round(axisExpandWindow[1] / axisExpandWidth, 1)) - 1
        ];
        // Pos in ec coordinates.
        var axisExpandWindow0Pos = axisCollapseWidth / axisExpandWidth * axisExpandWindow[0];
        return {
            layout: layout,
            pixelDimIndex: pixelDimIndex,
            layoutBase: rect[xy[pixelDimIndex]],
            layoutLength: layoutLength,
            axisBase: rect[xy[1 - pixelDimIndex]],
            axisLength: rect[wh[1 - pixelDimIndex]],
            axisExpandable: axisExpandable,
            axisExpandWidth: axisExpandWidth,
            axisCollapseWidth: axisCollapseWidth,
            axisExpandWindow: axisExpandWindow,
            axisCount: axisCount,
            winInnerIndices: winInnerIndices,
            axisExpandWindow0Pos: axisExpandWindow0Pos
        };
    };
    Parallel.prototype._layoutAxes = function() {
        var rect = this._rect;
        var axes = this._axesMap;
        var dimensions = this.dimensions;
        var layoutInfo = this._makeLayoutInfo();
        var layout = layoutInfo.layout;
        axes.each(function(axis) {
            var axisExtent = [
                0,
                layoutInfo.axisLength
            ];
            var idx = axis.inverse ? 1 : 0;
            axis.setExtent(axisExtent[idx], axisExtent[1 - idx]);
        });
        each(dimensions, function(dim, idx) {
            var posInfo = (layoutInfo.axisExpandable ? layoutAxisWithExpand : layoutAxisWithoutExpand)(idx, layoutInfo);
            var positionTable = {
                horizontal: {
                    x: posInfo.position,
                    y: layoutInfo.axisLength
                },
                vertical: {
                    x: 0,
                    y: posInfo.position
                }
            };
            var rotationTable = {
                horizontal: PI / 2,
                vertical: 0
            };
            var position = [
                positionTable[layout].x + rect.x,
                positionTable[layout].y + rect.y
            ];
            var rotation = rotationTable[layout];
            var transform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotate"])(transform, transform, rotation);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translate"])(transform, transform, position);
            // TODO
            // tick layout info
            // TODO
            // update dimensions info based on axis order.
            this._axesLayout[dim] = {
                position: position,
                rotation: rotation,
                transform: transform,
                axisNameAvailableWidth: posInfo.axisNameAvailableWidth,
                axisLabelShow: posInfo.axisLabelShow,
                nameTruncateMaxWidth: posInfo.nameTruncateMaxWidth,
                tickDirection: 1,
                labelDirection: 1
            };
        }, this);
    };
    /**
   * Get axis by dim.
   */ Parallel.prototype.getAxis = function(dim) {
        return this._axesMap.get(dim);
    };
    /**
   * Convert a dim value of a single item of series data to Point.
   */ Parallel.prototype.dataToPoint = function(value, dim) {
        return this.axisCoordToPoint(this._axesMap.get(dim).dataToCoord(value), dim);
    };
    /**
   * Travel data for one time, get activeState of each data item.
   * @param start the start dataIndex that travel from.
   * @param end the next dataIndex of the last dataIndex will be travel.
   */ Parallel.prototype.eachActiveState = function(data, callback, start, end) {
        start == null && (start = 0);
        end == null && (end = data.count());
        var axesMap = this._axesMap;
        var dimensions = this.dimensions;
        var dataDimensions = [];
        var axisModels = [];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(dimensions, function(axisDim) {
            dataDimensions.push(data.mapDimension(axisDim));
            axisModels.push(axesMap.get(axisDim).model);
        });
        var hasActiveSet = this.hasAxisBrushed();
        for(var dataIndex = start; dataIndex < end; dataIndex++){
            var activeState = void 0;
            if (!hasActiveSet) {
                activeState = 'normal';
            } else {
                activeState = 'active';
                var values = data.getValues(dataDimensions, dataIndex);
                for(var j = 0, lenj = dimensions.length; j < lenj; j++){
                    var state = axisModels[j].getActiveState(values[j]);
                    if (state === 'inactive') {
                        activeState = 'inactive';
                        break;
                    }
                }
            }
            callback(activeState, dataIndex);
        }
    };
    /**
   * Whether has any activeSet.
   */ Parallel.prototype.hasAxisBrushed = function() {
        var dimensions = this.dimensions;
        var axesMap = this._axesMap;
        var hasActiveSet = false;
        for(var j = 0, lenj = dimensions.length; j < lenj; j++){
            if (axesMap.get(dimensions[j]).model.getActiveState() !== 'normal') {
                hasActiveSet = true;
            }
        }
        return hasActiveSet;
    };
    /**
   * Convert coords of each axis to Point.
   *  Return point. For example: [10, 20]
   */ Parallel.prototype.axisCoordToPoint = function(coord, dim) {
        var axisLayout = this._axesLayout[dim];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["applyTransform"])([
            coord,
            0
        ], axisLayout.transform);
    };
    /**
   * Get axis layout.
   */ Parallel.prototype.getAxisLayout = function(dim) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"])(this._axesLayout[dim]);
    };
    /**
   * @return {Object} {axisExpandWindow, delta, behavior: 'jump' | 'slide' | 'none'}.
   */ Parallel.prototype.getSlidedAxisExpandWindow = function(point) {
        var layoutInfo = this._makeLayoutInfo();
        var pixelDimIndex = layoutInfo.pixelDimIndex;
        var axisExpandWindow = layoutInfo.axisExpandWindow.slice();
        var winSize = axisExpandWindow[1] - axisExpandWindow[0];
        var extent = [
            0,
            layoutInfo.axisExpandWidth * (layoutInfo.axisCount - 1)
        ];
        // Out of the area of coordinate system.
        if (!this.containPoint(point)) {
            return {
                behavior: 'none',
                axisExpandWindow: axisExpandWindow
            };
        }
        // Convert the point from global to expand coordinates.
        var pointCoord = point[pixelDimIndex] - layoutInfo.layoutBase - layoutInfo.axisExpandWindow0Pos;
        // For dragging operation convenience, the window should not be
        // slided when mouse is the center area of the window.
        var delta;
        var behavior = 'slide';
        var axisCollapseWidth = layoutInfo.axisCollapseWidth;
        var triggerArea = this._model.get('axisExpandSlideTriggerArea');
        // But consider touch device, jump is necessary.
        var useJump = triggerArea[0] != null;
        if (axisCollapseWidth) {
            if (useJump && axisCollapseWidth && pointCoord < winSize * triggerArea[0]) {
                behavior = 'jump';
                delta = pointCoord - winSize * triggerArea[2];
            } else if (useJump && axisCollapseWidth && pointCoord > winSize * (1 - triggerArea[0])) {
                behavior = 'jump';
                delta = pointCoord - winSize * (1 - triggerArea[2]);
            } else {
                (delta = pointCoord - winSize * triggerArea[1]) >= 0 && (delta = pointCoord - winSize * (1 - triggerArea[1])) <= 0 && (delta = 0);
            }
            delta *= layoutInfo.axisExpandWidth / axisCollapseWidth;
            delta ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$sliderMove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(delta, axisExpandWindow, extent, 'all') : behavior = 'none';
        } else {
            var winSize2 = axisExpandWindow[1] - axisExpandWindow[0];
            var pos = extent[1] * pointCoord / winSize2;
            axisExpandWindow = [
                mathMax(0, pos - winSize2 / 2)
            ];
            axisExpandWindow[1] = mathMin(extent[1], axisExpandWindow[0] + winSize2);
            axisExpandWindow[0] = axisExpandWindow[1] - winSize2;
        }
        return {
            axisExpandWindow: axisExpandWindow,
            behavior: behavior
        };
    };
    return Parallel;
}();
function restrict(len, extent) {
    return mathMin(mathMax(len, extent[0]), extent[1]);
}
function layoutAxisWithoutExpand(axisIndex, layoutInfo) {
    var step = layoutInfo.layoutLength / (layoutInfo.axisCount - 1);
    return {
        position: step * axisIndex,
        axisNameAvailableWidth: step,
        axisLabelShow: true
    };
}
function layoutAxisWithExpand(axisIndex, layoutInfo) {
    var layoutLength = layoutInfo.layoutLength;
    var axisExpandWidth = layoutInfo.axisExpandWidth;
    var axisCount = layoutInfo.axisCount;
    var axisCollapseWidth = layoutInfo.axisCollapseWidth;
    var winInnerIndices = layoutInfo.winInnerIndices;
    var position;
    var axisNameAvailableWidth = axisCollapseWidth;
    var axisLabelShow = false;
    var nameTruncateMaxWidth;
    if (axisIndex < winInnerIndices[0]) {
        position = axisIndex * axisCollapseWidth;
        nameTruncateMaxWidth = axisCollapseWidth;
    } else if (axisIndex <= winInnerIndices[1]) {
        position = layoutInfo.axisExpandWindow0Pos + axisIndex * axisExpandWidth - layoutInfo.axisExpandWindow[0];
        axisNameAvailableWidth = axisExpandWidth;
        axisLabelShow = true;
    } else {
        position = layoutLength - (axisCount - 1 - axisIndex) * axisCollapseWidth;
        nameTruncateMaxWidth = axisCollapseWidth;
    }
    return {
        position: position,
        axisNameAvailableWidth: axisNameAvailableWidth,
        axisLabelShow: axisLabelShow,
        nameTruncateMaxWidth: nameTruncateMaxWidth
    };
}
const __TURBOPACK__default__export__ = Parallel;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/parallel/parallelCreator.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
 * Parallel coordinate system creater.
 */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$parallel$2f$Parallel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/parallel/Parallel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
;
;
function createParallelCoordSys(ecModel, api) {
    var coordSysList = [];
    ecModel.eachComponent('parallel', function(parallelModel, idx) {
        var coordSys = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$parallel$2f$Parallel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](parallelModel, ecModel, api);
        coordSys.name = 'parallel_' + idx;
        coordSys.resize(parallelModel, api);
        parallelModel.coordinateSystem = coordSys;
        coordSys.model = parallelModel;
        coordSysList.push(coordSys);
    });
    // Inject the coordinateSystems into seriesModel
    ecModel.eachSeries(function(seriesModel) {
        if (seriesModel.get('coordinateSystem') === 'parallel') {
            var parallelModel = seriesModel.getReferringComponents('parallel', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SINGLE_REFERRING"]).models[0];
            seriesModel.coordinateSystem = parallelModel.coordinateSystem;
        }
    });
    return coordSysList;
}
var parallelCoordSysCreator = {
    create: createParallelCoordSys
};
const __TURBOPACK__default__export__ = parallelCoordSysCreator;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/parallel/AxisModel.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$mixin$2f$makeStyleMapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/mixin/makeStyleMapper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisModelCommonMixin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisModelCommonMixin.js [app-client] (ecmascript)");
;
;
;
;
;
;
var ParallelAxisModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(ParallelAxisModel, _super);
    function ParallelAxisModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ParallelAxisModel.type;
        /**
     * @readOnly
     */ _this.activeIntervals = [];
        return _this;
    }
    ParallelAxisModel.prototype.getAreaSelectStyle = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$mixin$2f$makeStyleMapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            [
                'fill',
                'color'
            ],
            [
                'lineWidth',
                'borderWidth'
            ],
            [
                'stroke',
                'borderColor'
            ],
            [
                'width',
                'width'
            ],
            [
                'opacity',
                'opacity'
            ]
        ])(this.getModel('areaSelectStyle'));
    };
    /**
   * The code of this feature is put on AxisModel but not ParallelAxis,
   * because axisModel can be alive after echarts updating but instance of
   * ParallelAxis having been disposed. this._activeInterval should be kept
   * when action dispatched (i.e. legend click).
   *
   * @param intervals `interval.length === 0` means set all active.
   */ ParallelAxisModel.prototype.setActiveIntervals = function(intervals) {
        var activeIntervals = this.activeIntervals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"])(intervals);
        // Normalize
        if (activeIntervals) {
            for(var i = activeIntervals.length - 1; i >= 0; i--){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asc"])(activeIntervals[i]);
            }
        }
    };
    /**
   * @param value When only attempting detect whether 'no activeIntervals set',
   *        `value` is not needed to be input.
   */ ParallelAxisModel.prototype.getActiveState = function(value) {
        var activeIntervals = this.activeIntervals;
        if (!activeIntervals.length) {
            return 'normal';
        }
        if (value == null || isNaN(+value)) {
            return 'inactive';
        }
        // Simple optimization
        if (activeIntervals.length === 1) {
            var interval = activeIntervals[0];
            if (interval[0] <= value && value <= interval[1]) {
                return 'active';
            }
        } else {
            for(var i = 0, len = activeIntervals.length; i < len; i++){
                if (activeIntervals[i][0] <= value && value <= activeIntervals[i][1]) {
                    return 'active';
                }
            }
        }
        return 'inactive';
    };
    return ParallelAxisModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixin"])(ParallelAxisModel, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisModelCommonMixin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxisModelCommonMixin"]);
const __TURBOPACK__default__export__ = ParallelAxisModel;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/cartesian/prepareCustom.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "default": (()=>cartesianPrepareCustom)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
function dataToCoordSize(dataSize, dataItem) {
    // dataItem is necessary in log axis.
    dataItem = dataItem || [
        0,
        0
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])([
        'x',
        'y'
    ], function(dim, dimIdx) {
        var axis = this.getAxis(dim);
        var val = dataItem[dimIdx];
        var halfSize = dataSize[dimIdx] / 2;
        return axis.type === 'category' ? axis.getBandWidth() : Math.abs(axis.dataToCoord(val - halfSize) - axis.dataToCoord(val + halfSize));
    }, this);
}
function cartesianPrepareCustom(coordSys) {
    var rect = coordSys.master.getRect();
    return {
        coordSys: {
            // The name exposed to user is always 'cartesian2d' but not 'grid'.
            type: 'cartesian2d',
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height
        },
        api: {
            coord: function(data) {
                // do not provide "out" param
                return coordSys.dataToPoint(data);
            },
            size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"])(dataToCoordSize, coordSys)
        }
    };
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/geo/prepareCustom.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "default": (()=>geoPrepareCustom)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
function dataToCoordSize(dataSize, dataItem) {
    dataItem = dataItem || [
        0,
        0
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])([
        0,
        1
    ], function(dimIdx) {
        var val = dataItem[dimIdx];
        var halfSize = dataSize[dimIdx] / 2;
        var p1 = [];
        var p2 = [];
        p1[dimIdx] = val - halfSize;
        p2[dimIdx] = val + halfSize;
        p1[1 - dimIdx] = p2[1 - dimIdx] = dataItem[1 - dimIdx];
        return Math.abs(this.dataToPoint(p1)[dimIdx] - this.dataToPoint(p2)[dimIdx]);
    }, this);
}
function geoPrepareCustom(coordSys) {
    var rect = coordSys.getBoundingRect();
    return {
        coordSys: {
            type: 'geo',
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height,
            zoom: coordSys.getZoom()
        },
        api: {
            coord: function(data) {
                // do not provide "out" and noRoam param,
                // Compatible with this usage:
                // echarts.util.map(item.points, api.coord)
                return coordSys.dataToPoint(data);
            },
            size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"])(dataToCoordSize, coordSys)
        }
    };
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/single/prepareCustom.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "default": (()=>singlePrepareCustom)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
function dataToCoordSize(dataSize, dataItem) {
    // dataItem is necessary in log axis.
    var axis = this.getAxis();
    var val = dataItem instanceof Array ? dataItem[0] : dataItem;
    var halfSize = (dataSize instanceof Array ? dataSize[0] : dataSize) / 2;
    return axis.type === 'category' ? axis.getBandWidth() : Math.abs(axis.dataToCoord(val - halfSize) - axis.dataToCoord(val + halfSize));
}
function singlePrepareCustom(coordSys) {
    var rect = coordSys.getRect();
    return {
        coordSys: {
            type: 'singleAxis',
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height
        },
        api: {
            coord: function(val) {
                // do not provide "out" param
                return coordSys.dataToPoint(val);
            },
            size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"])(dataToCoordSize, coordSys)
        }
    };
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/polar/prepareCustom.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "default": (()=>polarPrepareCustom)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
// import AngleAxis from './AngleAxis.js';
function dataToCoordSize(dataSize, dataItem) {
    // dataItem is necessary in log axis.
    dataItem = dataItem || [
        0,
        0
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])([
        'Radius',
        'Angle'
    ], function(dim, dimIdx) {
        var getterName = 'get' + dim + 'Axis';
        // TODO: TYPE Check Angle Axis
        var axis = this[getterName]();
        var val = dataItem[dimIdx];
        var halfSize = dataSize[dimIdx] / 2;
        var result = axis.type === 'category' ? axis.getBandWidth() : Math.abs(axis.dataToCoord(val - halfSize) - axis.dataToCoord(val + halfSize));
        if (dim === 'Angle') {
            result = result * Math.PI / 180;
        }
        return result;
    }, this);
}
function polarPrepareCustom(coordSys) {
    var radiusAxis = coordSys.getRadiusAxis();
    var angleAxis = coordSys.getAngleAxis();
    var radius = radiusAxis.getExtent();
    radius[0] > radius[1] && radius.reverse();
    return {
        coordSys: {
            type: 'polar',
            cx: coordSys.cx,
            cy: coordSys.cy,
            r: radius[1],
            r0: radius[0]
        },
        api: {
            coord: function(data) {
                var radius = radiusAxis.dataToRadius(data[0]);
                var angle = angleAxis.dataToAngle(data[1]);
                var coord = coordSys.coordToPoint([
                    radius,
                    angle
                ]);
                coord.push(radius, angle * Math.PI / 180);
                return coord;
            },
            size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"])(dataToCoordSize, coordSys)
        }
    };
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/calendar/prepareCustom.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "default": (()=>calendarPrepareCustom)
});
function calendarPrepareCustom(coordSys) {
    var rect = coordSys.getRect();
    var rangeInfo = coordSys.getRangeInfo();
    return {
        coordSys: {
            type: 'calendar',
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height,
            cellWidth: coordSys.getCellWidth(),
            cellHeight: coordSys.getCellHeight(),
            rangeInfo: {
                start: rangeInfo.start,
                end: rangeInfo.end,
                weeks: rangeInfo.weeks,
                dayCount: rangeInfo.allDay
            }
        },
        api: {
            coord: function(data, clamp) {
                return coordSys.dataToPoint(data, clamp);
            }
        }
    };
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/polar/PolarModel.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Component.js [app-client] (ecmascript)");
;
;
var PolarModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PolarModel, _super);
    function PolarModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = PolarModel.type;
        return _this;
    }
    PolarModel.prototype.findAxisModel = function(axisType) {
        var foundAxisModel;
        var ecModel = this.ecModel;
        ecModel.eachComponent(axisType, function(axisModel) {
            if (axisModel.getCoordSysModel() === this) {
                foundAxisModel = axisModel;
            }
        }, this);
        return foundAxisModel;
    };
    PolarModel.type = 'polar';
    PolarModel.dependencies = [
        'radiusAxis',
        'angleAxis'
    ];
    PolarModel.defaultOption = {
        // zlevel: 0,
        z: 0,
        center: [
            '50%',
            '50%'
        ],
        radius: '80%'
    };
    return PolarModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PolarModel;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/polar/AxisModel.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "AngleAxisModel": (()=>AngleAxisModel),
    "PolarAxisModel": (()=>PolarAxisModel),
    "RadiusAxisModel": (()=>RadiusAxisModel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisModelCommonMixin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisModelCommonMixin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
;
;
;
;
;
var PolarAxisModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PolarAxisModel, _super);
    function PolarAxisModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PolarAxisModel.prototype.getCoordSysModel = function() {
        return this.getReferringComponents('polar', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SINGLE_REFERRING"]).models[0];
    };
    PolarAxisModel.type = 'polarAxis';
    return PolarAxisModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixin"])(PolarAxisModel, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisModelCommonMixin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxisModelCommonMixin"]);
;
var AngleAxisModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(AngleAxisModel, _super);
    function AngleAxisModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = AngleAxisModel.type;
        return _this;
    }
    AngleAxisModel.type = 'angleAxis';
    return AngleAxisModel;
}(PolarAxisModel);
;
var RadiusAxisModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(RadiusAxisModel, _super);
    function RadiusAxisModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = RadiusAxisModel.type;
        return _this;
    }
    RadiusAxisModel.type = 'radiusAxis';
    return RadiusAxisModel;
}(PolarAxisModel);
;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/polar/RadiusAxis.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$Axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/Axis.js [app-client] (ecmascript)");
;
;
var RadiusAxis = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(RadiusAxis, _super);
    function RadiusAxis(scale, radiusExtent) {
        return _super.call(this, 'radius', scale, radiusExtent) || this;
    }
    RadiusAxis.prototype.pointToData = function(point, clamp) {
        return this.polar.pointToData(point, clamp)[this.dim === 'radius' ? 0 : 1];
    };
    return RadiusAxis;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$Axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
RadiusAxis.prototype.dataToRadius = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$Axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].prototype.dataToCoord;
RadiusAxis.prototype.radiusToData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$Axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].prototype.coordToData;
const __TURBOPACK__default__export__ = RadiusAxis;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/polar/AngleAxis.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/contain/text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$Axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/Axis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
;
;
;
;
var inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInner"])();
var AngleAxis = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(AngleAxis, _super);
    function AngleAxis(scale, angleExtent) {
        return _super.call(this, 'angle', scale, angleExtent || [
            0,
            360
        ]) || this;
    }
    AngleAxis.prototype.pointToData = function(point, clamp) {
        return this.polar.pointToData(point, clamp)[this.dim === 'radius' ? 0 : 1];
    };
    /**
   * Only be called in category axis.
   * Angle axis uses text height to decide interval
   *
   * @override
   * @return {number} Auto interval for cateogry axis tick and label
   */ AngleAxis.prototype.calculateCategoryInterval = function() {
        var axis = this;
        var labelModel = axis.getLabelModel();
        var ordinalScale = axis.scale;
        var ordinalExtent = ordinalScale.getExtent();
        // Providing this method is for optimization:
        // avoid generating a long array by `getTicks`
        // in large category data case.
        var tickCount = ordinalScale.count();
        if (ordinalExtent[1] - ordinalExtent[0] < 1) {
            return 0;
        }
        var tickValue = ordinalExtent[0];
        var unitSpan = axis.dataToCoord(tickValue + 1) - axis.dataToCoord(tickValue);
        var unitH = Math.abs(unitSpan);
        // Not precise, just use height as text width
        // and each distance from axis line yet.
        var rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBoundingRect"])(tickValue == null ? '' : tickValue + '', labelModel.getFont(), 'center', 'top');
        var maxH = Math.max(rect.height, 7);
        var dh = maxH / unitH;
        // 0/0 is NaN, 1/0 is Infinity.
        isNaN(dh) && (dh = Infinity);
        var interval = Math.max(0, Math.floor(dh));
        var cache = inner(axis.model);
        var lastAutoInterval = cache.lastAutoInterval;
        var lastTickCount = cache.lastTickCount;
        // Use cache to keep interval stable while moving zoom window,
        // otherwise the calculated interval might jitter when the zoom
        // window size is close to the interval-changing size.
        if (lastAutoInterval != null && lastTickCount != null && Math.abs(lastAutoInterval - interval) <= 1 && Math.abs(lastTickCount - tickCount) <= 1 && lastAutoInterval > interval) {
            interval = lastAutoInterval;
        } else {
            cache.lastTickCount = tickCount;
            cache.lastAutoInterval = interval;
        }
        return interval;
    };
    return AngleAxis;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$Axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
AngleAxis.prototype.dataToAngle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$Axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].prototype.dataToCoord;
AngleAxis.prototype.angleToData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$Axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].prototype.coordToData;
const __TURBOPACK__default__export__ = AngleAxis;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/polar/Polar.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "default": (()=>__TURBOPACK__default__export__),
    "polarDimensions": (()=>polarDimensions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$polar$2f$RadiusAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/polar/RadiusAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$polar$2f$AngleAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/polar/AngleAxis.js [app-client] (ecmascript)");
;
;
var polarDimensions = [
    'radius',
    'angle'
];
var Polar = /** @class */ function() {
    function Polar(name) {
        this.dimensions = polarDimensions;
        this.type = 'polar';
        /**
     * x of polar center
     */ this.cx = 0;
        /**
     * y of polar center
     */ this.cy = 0;
        this._radiusAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$polar$2f$RadiusAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
        this._angleAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$polar$2f$AngleAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
        this.axisPointerEnabled = true;
        this.name = name || '';
        this._radiusAxis.polar = this._angleAxis.polar = this;
    }
    /**
   * If contain coord
   */ Polar.prototype.containPoint = function(point) {
        var coord = this.pointToCoord(point);
        return this._radiusAxis.contain(coord[0]) && this._angleAxis.contain(coord[1]);
    };
    /**
   * If contain data
   */ Polar.prototype.containData = function(data) {
        return this._radiusAxis.containData(data[0]) && this._angleAxis.containData(data[1]);
    };
    Polar.prototype.getAxis = function(dim) {
        var key = '_' + dim + 'Axis';
        return this[key];
    };
    Polar.prototype.getAxes = function() {
        return [
            this._radiusAxis,
            this._angleAxis
        ];
    };
    /**
   * Get axes by type of scale
   */ Polar.prototype.getAxesByScale = function(scaleType) {
        var axes = [];
        var angleAxis = this._angleAxis;
        var radiusAxis = this._radiusAxis;
        angleAxis.scale.type === scaleType && axes.push(angleAxis);
        radiusAxis.scale.type === scaleType && axes.push(radiusAxis);
        return axes;
    };
    Polar.prototype.getAngleAxis = function() {
        return this._angleAxis;
    };
    Polar.prototype.getRadiusAxis = function() {
        return this._radiusAxis;
    };
    Polar.prototype.getOtherAxis = function(axis) {
        var angleAxis = this._angleAxis;
        return axis === angleAxis ? this._radiusAxis : angleAxis;
    };
    /**
   * Base axis will be used on stacking.
   *
   */ Polar.prototype.getBaseAxis = function() {
        return this.getAxesByScale('ordinal')[0] || this.getAxesByScale('time')[0] || this.getAngleAxis();
    };
    Polar.prototype.getTooltipAxes = function(dim) {
        var baseAxis = dim != null && dim !== 'auto' ? this.getAxis(dim) : this.getBaseAxis();
        return {
            baseAxes: [
                baseAxis
            ],
            otherAxes: [
                this.getOtherAxis(baseAxis)
            ]
        };
    };
    /**
   * Convert a single data item to (x, y) point.
   * Parameter data is an array which the first element is radius and the second is angle
   */ Polar.prototype.dataToPoint = function(data, clamp) {
        return this.coordToPoint([
            this._radiusAxis.dataToRadius(data[0], clamp),
            this._angleAxis.dataToAngle(data[1], clamp)
        ]);
    };
    /**
   * Convert a (x, y) point to data
   */ Polar.prototype.pointToData = function(point, clamp) {
        var coord = this.pointToCoord(point);
        return [
            this._radiusAxis.radiusToData(coord[0], clamp),
            this._angleAxis.angleToData(coord[1], clamp)
        ];
    };
    /**
   * Convert a (x, y) point to (radius, angle) coord
   */ Polar.prototype.pointToCoord = function(point) {
        var dx = point[0] - this.cx;
        var dy = point[1] - this.cy;
        var angleAxis = this.getAngleAxis();
        var extent = angleAxis.getExtent();
        var minAngle = Math.min(extent[0], extent[1]);
        var maxAngle = Math.max(extent[0], extent[1]);
        // Fix fixed extent in polarCreator
        // FIXME
        angleAxis.inverse ? minAngle = maxAngle - 360 : maxAngle = minAngle + 360;
        var radius = Math.sqrt(dx * dx + dy * dy);
        dx /= radius;
        dy /= radius;
        var radian = Math.atan2(-dy, dx) / Math.PI * 180;
        // move to angleExtent
        var dir = radian < minAngle ? 1 : -1;
        while(radian < minAngle || radian > maxAngle){
            radian += dir * 360;
        }
        return [
            radius,
            radian
        ];
    };
    /**
   * Convert a (radius, angle) coord to (x, y) point
   */ Polar.prototype.coordToPoint = function(coord) {
        var radius = coord[0];
        var radian = coord[1] / 180 * Math.PI;
        var x = Math.cos(radian) * radius + this.cx;
        // Inverse the y
        var y = -Math.sin(radian) * radius + this.cy;
        return [
            x,
            y
        ];
    };
    /**
   * Get ring area of cartesian.
   * Area will have a contain function to determine if a point is in the coordinate system.
   */ Polar.prototype.getArea = function() {
        var angleAxis = this.getAngleAxis();
        var radiusAxis = this.getRadiusAxis();
        var radiusExtent = radiusAxis.getExtent().slice();
        radiusExtent[0] > radiusExtent[1] && radiusExtent.reverse();
        var angleExtent = angleAxis.getExtent();
        var RADIAN = Math.PI / 180;
        var EPSILON = 1e-4;
        return {
            cx: this.cx,
            cy: this.cy,
            r0: radiusExtent[0],
            r: radiusExtent[1],
            startAngle: -angleExtent[0] * RADIAN,
            endAngle: -angleExtent[1] * RADIAN,
            clockwise: angleAxis.inverse,
            contain: function(x, y) {
                // It's a ring shape.
                // Start angle and end angle don't matter
                var dx = x - this.cx;
                var dy = y - this.cy;
                var d2 = dx * dx + dy * dy;
                var r = this.r;
                var r0 = this.r0;
                // minus a tiny value 1e-4 in double side to avoid being clipped unexpectedly
                // r == r0 contain nothing
                return r !== r0 && d2 - EPSILON <= r * r && d2 + EPSILON >= r0 * r0;
            }
        };
    };
    Polar.prototype.convertToPixel = function(ecModel, finder, value) {
        var coordSys = getCoordSys(finder);
        return coordSys === this ? this.dataToPoint(value) : null;
    };
    Polar.prototype.convertFromPixel = function(ecModel, finder, pixel) {
        var coordSys = getCoordSys(finder);
        return coordSys === this ? this.pointToData(pixel) : null;
    };
    return Polar;
}();
function getCoordSys(finder) {
    var seriesModel = finder.seriesModel;
    var polarModel = finder.polarModel;
    return polarModel && polarModel.coordinateSystem || seriesModel && seriesModel.coordinateSystem;
}
const __TURBOPACK__default__export__ = Polar;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/polar/polarCreator.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
*/ // TODO Axis scale
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$polar$2f$Polar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/polar/Polar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
;
;
;
;
;
/**
 * Resize method bound to the polar
 */ function resizePolar(polar, polarModel, api) {
    var center = polarModel.get('center');
    var width = api.getWidth();
    var height = api.getHeight();
    polar.cx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(center[0], width);
    polar.cy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(center[1], height);
    var radiusAxis = polar.getRadiusAxis();
    var size = Math.min(width, height) / 2;
    var radius = polarModel.get('radius');
    if (radius == null) {
        radius = [
            0,
            '100%'
        ];
    } else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(radius)) {
        // r0 = 0
        radius = [
            0,
            radius
        ];
    }
    var parsedRadius = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(radius[0], size),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(radius[1], size)
    ];
    radiusAxis.inverse ? radiusAxis.setExtent(parsedRadius[1], parsedRadius[0]) : radiusAxis.setExtent(parsedRadius[0], parsedRadius[1]);
}
/**
 * Update polar
 */ function updatePolarScale(ecModel, api) {
    var polar = this;
    var angleAxis = polar.getAngleAxis();
    var radiusAxis = polar.getRadiusAxis();
    // Reset scale
    angleAxis.scale.setExtent(Infinity, -Infinity);
    radiusAxis.scale.setExtent(Infinity, -Infinity);
    ecModel.eachSeries(function(seriesModel) {
        if (seriesModel.coordinateSystem === polar) {
            var data_1 = seriesModel.getData();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDataDimensionsOnAxis"])(data_1, 'radius'), function(dim) {
                radiusAxis.scale.unionExtentFromData(data_1, dim);
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDataDimensionsOnAxis"])(data_1, 'angle'), function(dim) {
                angleAxis.scale.unionExtentFromData(data_1, dim);
            });
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["niceScaleExtent"])(angleAxis.scale, angleAxis.model);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["niceScaleExtent"])(radiusAxis.scale, radiusAxis.model);
    // Fix extent of category angle axis
    if (angleAxis.type === 'category' && !angleAxis.onBand) {
        var extent = angleAxis.getExtent();
        var diff = 360 / angleAxis.scale.count();
        angleAxis.inverse ? extent[1] += diff : extent[1] -= diff;
        angleAxis.setExtent(extent[0], extent[1]);
    }
}
function isAngleAxisModel(axisModel) {
    return axisModel.mainType === 'angleAxis';
}
/**
 * Set common axis properties
 */ function setAxis(axis, axisModel) {
    var _a;
    axis.type = axisModel.get('type');
    axis.scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScaleByModel"])(axisModel);
    axis.onBand = axisModel.get('boundaryGap') && axis.type === 'category';
    axis.inverse = axisModel.get('inverse');
    if (isAngleAxisModel(axisModel)) {
        axis.inverse = axis.inverse !== axisModel.get('clockwise');
        var startAngle = axisModel.get('startAngle');
        var endAngle = (_a = axisModel.get('endAngle')) !== null && _a !== void 0 ? _a : startAngle + (axis.inverse ? -360 : 360);
        axis.setExtent(startAngle, endAngle);
    }
    // Inject axis instance
    axisModel.axis = axis;
    axis.model = axisModel;
}
var polarCreator = {
    dimensions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$polar$2f$Polar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polarDimensions"],
    create: function(ecModel, api) {
        var polarList = [];
        ecModel.eachComponent('polar', function(polarModel, idx) {
            var polar = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$polar$2f$Polar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](idx + '');
            // Inject resize and update method
            polar.update = updatePolarScale;
            var radiusAxis = polar.getRadiusAxis();
            var angleAxis = polar.getAngleAxis();
            var radiusAxisModel = polarModel.findAxisModel('radiusAxis');
            var angleAxisModel = polarModel.findAxisModel('angleAxis');
            setAxis(radiusAxis, radiusAxisModel);
            setAxis(angleAxis, angleAxisModel);
            resizePolar(polar, polarModel, api);
            polarList.push(polar);
            polarModel.coordinateSystem = polar;
            polar.model = polarModel;
        });
        // Inject coordinateSystem to series
        ecModel.eachSeries(function(seriesModel) {
            if (seriesModel.get('coordinateSystem') === 'polar') {
                var polarModel = seriesModel.getReferringComponents('polar', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SINGLE_REFERRING"]).models[0];
                if ("TURBOPACK compile-time truthy", 1) {
                    if (!polarModel) {
                        throw new Error('Polar "' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve"])(seriesModel.get('polarIndex'), seriesModel.get('polarId'), 0) + '" not found');
                    }
                }
                seriesModel.coordinateSystem = polarModel.coordinateSystem;
            }
        });
        return polarList;
    }
};
const __TURBOPACK__default__export__ = polarCreator;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/single/singleAxisHelper.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "layout": (()=>layout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
function layout(axisModel, opt) {
    opt = opt || {};
    var single = axisModel.coordinateSystem;
    var axis = axisModel.axis;
    var layout = {};
    var axisPosition = axis.position;
    var orient = axis.orient;
    var rect = single.getRect();
    var rectBound = [
        rect.x,
        rect.x + rect.width,
        rect.y,
        rect.y + rect.height
    ];
    var positionMap = {
        horizontal: {
            top: rectBound[2],
            bottom: rectBound[3]
        },
        vertical: {
            left: rectBound[0],
            right: rectBound[1]
        }
    };
    layout.position = [
        orient === 'vertical' ? positionMap.vertical[axisPosition] : rectBound[0],
        orient === 'horizontal' ? positionMap.horizontal[axisPosition] : rectBound[3]
    ];
    var r = {
        horizontal: 0,
        vertical: 1
    };
    layout.rotation = Math.PI / 2 * r[orient];
    var directionMap = {
        top: -1,
        bottom: 1,
        right: 1,
        left: -1
    };
    layout.labelDirection = layout.tickDirection = layout.nameDirection = directionMap[axisPosition];
    if (axisModel.get([
        'axisTick',
        'inside'
    ])) {
        layout.tickDirection = -layout.tickDirection;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve"])(opt.labelInside, axisModel.get([
        'axisLabel',
        'inside'
    ]))) {
        layout.labelDirection = -layout.labelDirection;
    }
    var labelRotation = opt.rotate;
    labelRotation == null && (labelRotation = axisModel.get([
        'axisLabel',
        'rotate'
    ]));
    layout.labelRotation = axisPosition === 'top' ? -labelRotation : labelRotation;
    layout.z2 = 1;
    return layout;
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/single/AxisModel.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisModelCommonMixin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisModelCommonMixin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
;
;
;
var SingleAxisModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(SingleAxisModel, _super);
    function SingleAxisModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = SingleAxisModel.type;
        return _this;
    }
    SingleAxisModel.prototype.getCoordSysModel = function() {
        return this;
    };
    SingleAxisModel.type = 'singleAxis';
    SingleAxisModel.layoutMode = 'box';
    SingleAxisModel.defaultOption = {
        left: '5%',
        top: '5%',
        right: '5%',
        bottom: '5%',
        type: 'value',
        position: 'bottom',
        orient: 'horizontal',
        axisLine: {
            show: true,
            lineStyle: {
                width: 1,
                type: 'solid'
            }
        },
        // Single coordinate system and single axis is the,
        // which is used as the parent tooltip model.
        // same model, so we set default tooltip show as true.
        tooltip: {
            show: true
        },
        axisTick: {
            show: true,
            length: 6,
            lineStyle: {
                width: 1
            }
        },
        axisLabel: {
            show: true,
            interval: 'auto'
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                opacity: 0.2
            }
        }
    };
    return SingleAxisModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixin"])(SingleAxisModel, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisModelCommonMixin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxisModelCommonMixin"].prototype);
const __TURBOPACK__default__export__ = SingleAxisModel;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/single/SingleAxis.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$Axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/Axis.js [app-client] (ecmascript)");
;
;
var SingleAxis = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(SingleAxis, _super);
    function SingleAxis(dim, scale, coordExtent, axisType, position) {
        var _this = _super.call(this, dim, scale, coordExtent) || this;
        _this.type = axisType || 'value';
        _this.position = position || 'bottom';
        return _this;
    }
    /**
   * Judge the orient of the axis.
   */ SingleAxis.prototype.isHorizontal = function() {
        var position = this.position;
        return position === 'top' || position === 'bottom';
    };
    SingleAxis.prototype.pointToData = function(point, clamp) {
        return this.coordinateSystem.pointToData(point)[0];
    };
    return SingleAxis;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$Axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = SingleAxis;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/single/Single.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
 * Single coordinates system.
 */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "singleDimensions": (()=>singleDimensions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$single$2f$SingleAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/single/SingleAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/layout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
;
;
;
var singleDimensions = [
    'single'
];
/**
 * Create a single coordinates system.
 */ var Single = /** @class */ function() {
    function Single(axisModel, ecModel, api) {
        this.type = 'single';
        this.dimension = 'single';
        /**
     * Add it just for draw tooltip.
     */ this.dimensions = singleDimensions;
        this.axisPointerEnabled = true;
        this.model = axisModel;
        this._init(axisModel, ecModel, api);
    }
    /**
   * Initialize single coordinate system.
   */ Single.prototype._init = function(axisModel, ecModel, api) {
        var dim = this.dimension;
        var axis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$single$2f$SingleAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](dim, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScaleByModel"])(axisModel), [
            0,
            0
        ], axisModel.get('type'), axisModel.get('position'));
        var isCategory = axis.type === 'category';
        axis.onBand = isCategory && axisModel.get('boundaryGap');
        axis.inverse = axisModel.get('inverse');
        axis.orient = axisModel.get('orient');
        axisModel.axis = axis;
        axis.model = axisModel;
        axis.coordinateSystem = this;
        this._axis = axis;
    };
    /**
   * Update axis scale after data processed
   */ Single.prototype.update = function(ecModel, api) {
        ecModel.eachSeries(function(seriesModel) {
            if (seriesModel.coordinateSystem === this) {
                var data_1 = seriesModel.getData();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(data_1.mapDimensionsAll(this.dimension), function(dim) {
                    this._axis.scale.unionExtentFromData(data_1, dim);
                }, this);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["niceScaleExtent"])(this._axis.scale, this._axis.model);
            }
        }, this);
    };
    /**
   * Resize the single coordinate system.
   */ Single.prototype.resize = function(axisModel, api) {
        this._rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLayoutRect"])({
            left: axisModel.get('left'),
            top: axisModel.get('top'),
            right: axisModel.get('right'),
            bottom: axisModel.get('bottom'),
            width: axisModel.get('width'),
            height: axisModel.get('height')
        }, {
            width: api.getWidth(),
            height: api.getHeight()
        });
        this._adjustAxis();
    };
    Single.prototype.getRect = function() {
        return this._rect;
    };
    Single.prototype._adjustAxis = function() {
        var rect = this._rect;
        var axis = this._axis;
        var isHorizontal = axis.isHorizontal();
        var extent = isHorizontal ? [
            0,
            rect.width
        ] : [
            0,
            rect.height
        ];
        var idx = axis.inverse ? 1 : 0;
        axis.setExtent(extent[idx], extent[1 - idx]);
        this._updateAxisTransform(axis, isHorizontal ? rect.x : rect.y);
    };
    Single.prototype._updateAxisTransform = function(axis, coordBase) {
        var axisExtent = axis.getExtent();
        var extentSum = axisExtent[0] + axisExtent[1];
        var isHorizontal = axis.isHorizontal();
        axis.toGlobalCoord = isHorizontal ? function(coord) {
            return coord + coordBase;
        } : function(coord) {
            return extentSum - coord + coordBase;
        };
        axis.toLocalCoord = isHorizontal ? function(coord) {
            return coord - coordBase;
        } : function(coord) {
            return extentSum - coord + coordBase;
        };
    };
    /**
   * Get axis.
   */ Single.prototype.getAxis = function() {
        return this._axis;
    };
    /**
   * Get axis, add it just for draw tooltip.
   */ Single.prototype.getBaseAxis = function() {
        return this._axis;
    };
    Single.prototype.getAxes = function() {
        return [
            this._axis
        ];
    };
    Single.prototype.getTooltipAxes = function() {
        return {
            baseAxes: [
                this.getAxis()
            ],
            // Empty otherAxes
            otherAxes: []
        };
    };
    /**
   * If contain point.
   */ Single.prototype.containPoint = function(point) {
        var rect = this.getRect();
        var axis = this.getAxis();
        var orient = axis.orient;
        if (orient === 'horizontal') {
            return axis.contain(axis.toLocalCoord(point[0])) && point[1] >= rect.y && point[1] <= rect.y + rect.height;
        } else {
            return axis.contain(axis.toLocalCoord(point[1])) && point[0] >= rect.y && point[0] <= rect.y + rect.height;
        }
    };
    Single.prototype.pointToData = function(point) {
        var axis = this.getAxis();
        return [
            axis.coordToData(axis.toLocalCoord(point[axis.orient === 'horizontal' ? 0 : 1]))
        ];
    };
    /**
   * Convert the series data to concrete point.
   * Can be [val] | val
   */ Single.prototype.dataToPoint = function(val) {
        var axis = this.getAxis();
        var rect = this.getRect();
        var pt = [];
        var idx = axis.orient === 'horizontal' ? 0 : 1;
        if (val instanceof Array) {
            val = val[0];
        }
        pt[idx] = axis.toGlobalCoord(axis.dataToCoord(+val));
        pt[1 - idx] = idx === 0 ? rect.y + rect.height / 2 : rect.x + rect.width / 2;
        return pt;
    };
    Single.prototype.convertToPixel = function(ecModel, finder, value) {
        var coordSys = getCoordSys(finder);
        return coordSys === this ? this.dataToPoint(value) : null;
    };
    Single.prototype.convertFromPixel = function(ecModel, finder, pixel) {
        var coordSys = getCoordSys(finder);
        return coordSys === this ? this.pointToData(pixel) : null;
    };
    return Single;
}();
function getCoordSys(finder) {
    var seriesModel = finder.seriesModel;
    var singleModel = finder.singleAxisModel;
    return singleModel && singleModel.coordinateSystem || seriesModel && seriesModel.coordinateSystem;
}
const __TURBOPACK__default__export__ = Single;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/single/singleCreator.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
 * Single coordinate system creator.
 */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$single$2f$Single$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/single/Single.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
;
;
/**
 * Create single coordinate system and inject it into seriesModel.
 */ function create(ecModel, api) {
    var singles = [];
    ecModel.eachComponent('singleAxis', function(axisModel, idx) {
        var single = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$single$2f$Single$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](axisModel, ecModel, api);
        single.name = 'single_' + idx;
        single.resize(axisModel, api);
        axisModel.coordinateSystem = single;
        singles.push(single);
    });
    ecModel.eachSeries(function(seriesModel) {
        if (seriesModel.get('coordinateSystem') === 'singleAxis') {
            var singleAxisModel = seriesModel.getReferringComponents('singleAxis', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SINGLE_REFERRING"]).models[0];
            seriesModel.coordinateSystem = singleAxisModel && singleAxisModel.coordinateSystem;
        }
    });
    return singles;
}
var singleCreator = {
    create: create,
    dimensions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$single$2f$Single$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["singleDimensions"]
};
const __TURBOPACK__default__export__ = singleCreator;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/calendar/CalendarModel.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/layout.js [app-client] (ecmascript)");
;
;
;
;
var CalendarModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(CalendarModel, _super);
    function CalendarModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = CalendarModel.type;
        return _this;
    }
    /**
   * @override
   */ CalendarModel.prototype.init = function(option, parentModel, ecModel) {
        var inputPositionParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLayoutParams"])(option);
        _super.prototype.init.apply(this, arguments);
        mergeAndNormalizeLayoutParams(option, inputPositionParams);
    };
    /**
   * @override
   */ CalendarModel.prototype.mergeOption = function(option) {
        _super.prototype.mergeOption.apply(this, arguments);
        mergeAndNormalizeLayoutParams(this.option, option);
    };
    CalendarModel.prototype.getCellSize = function() {
        // Has been normalized
        return this.option.cellSize;
    };
    CalendarModel.type = 'calendar';
    CalendarModel.defaultOption = {
        // zlevel: 0,
        z: 2,
        left: 80,
        top: 60,
        cellSize: 20,
        // horizontal vertical
        orient: 'horizontal',
        // month separate line style
        splitLine: {
            show: true,
            lineStyle: {
                color: '#000',
                width: 1,
                type: 'solid'
            }
        },
        // rect style  temporarily unused emphasis
        itemStyle: {
            color: '#fff',
            borderWidth: 1,
            borderColor: '#ccc'
        },
        // week text style
        dayLabel: {
            show: true,
            firstDay: 0,
            // start end
            position: 'start',
            margin: '50%',
            color: '#000'
        },
        // month text style
        monthLabel: {
            show: true,
            // start end
            position: 'start',
            margin: 5,
            // center or left
            align: 'center',
            formatter: null,
            color: '#000'
        },
        // year text style
        yearLabel: {
            show: true,
            // top bottom left right
            position: null,
            margin: 30,
            formatter: null,
            color: '#ccc',
            fontFamily: 'sans-serif',
            fontWeight: 'bolder',
            fontSize: 20
        }
    };
    return CalendarModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
function mergeAndNormalizeLayoutParams(target, raw) {
    // Normalize cellSize
    var cellSize = target.cellSize;
    var cellSizeArr;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(cellSize)) {
        cellSizeArr = target.cellSize = [
            cellSize,
            cellSize
        ];
    } else {
        cellSizeArr = cellSize;
    }
    if (cellSizeArr.length === 1) {
        cellSizeArr[1] = cellSizeArr[0];
    }
    var ignoreSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])([
        0,
        1
    ], function(hvIdx) {
        // If user have set `width` or both `left` and `right`, cellSizeArr
        // will be automatically set to 'auto', otherwise the default
        // setting of cellSizeArr will make `width` setting not work.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizeCalculable"])(raw, hvIdx)) {
            cellSizeArr[hvIdx] = 'auto';
        }
        return cellSizeArr[hvIdx] != null && cellSizeArr[hvIdx] !== 'auto';
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeLayoutParam"])(target, raw, {
        type: 'box',
        ignoreSize: ignoreSize
    });
}
const __TURBOPACK__default__export__ = CalendarModel;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/calendar/Calendar.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/layout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js [app-client] (ecmascript)");
;
;
;
// (24*60*60*1000)
var PROXIMATE_ONE_DAY = 86400000;
var Calendar = /** @class */ function() {
    function Calendar(calendarModel, ecModel, api) {
        this.type = 'calendar';
        this.dimensions = Calendar.dimensions;
        // Required in createListFromData
        this.getDimensionsInfo = Calendar.getDimensionsInfo;
        this._model = calendarModel;
    }
    Calendar.getDimensionsInfo = function() {
        return [
            {
                name: 'time',
                type: 'time'
            },
            'value'
        ];
    };
    Calendar.prototype.getRangeInfo = function() {
        return this._rangeInfo;
    };
    Calendar.prototype.getModel = function() {
        return this._model;
    };
    Calendar.prototype.getRect = function() {
        return this._rect;
    };
    Calendar.prototype.getCellWidth = function() {
        return this._sw;
    };
    Calendar.prototype.getCellHeight = function() {
        return this._sh;
    };
    Calendar.prototype.getOrient = function() {
        return this._orient;
    };
    /**
   * getFirstDayOfWeek
   *
   * @example
   *     0 : start at Sunday
   *     1 : start at Monday
   *
   * @return {number}
   */ Calendar.prototype.getFirstDayOfWeek = function() {
        return this._firstDayOfWeek;
    };
    /**
   * get date info
   * }
   */ Calendar.prototype.getDateInfo = function(date) {
        date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDate"])(date);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var mStr = m < 10 ? '0' + m : '' + m;
        var d = date.getDate();
        var dStr = d < 10 ? '0' + d : '' + d;
        var day = date.getDay();
        day = Math.abs((day + 7 - this.getFirstDayOfWeek()) % 7);
        return {
            y: y + '',
            m: mStr,
            d: dStr,
            day: day,
            time: date.getTime(),
            formatedDate: y + '-' + mStr + '-' + dStr,
            date: date
        };
    };
    Calendar.prototype.getNextNDay = function(date, n) {
        n = n || 0;
        if (n === 0) {
            return this.getDateInfo(date);
        }
        date = new Date(this.getDateInfo(date).time);
        date.setDate(date.getDate() + n);
        return this.getDateInfo(date);
    };
    Calendar.prototype.update = function(ecModel, api) {
        this._firstDayOfWeek = +this._model.getModel('dayLabel').get('firstDay');
        this._orient = this._model.get('orient');
        this._lineWidth = this._model.getModel('itemStyle').getItemStyle().lineWidth || 0;
        this._rangeInfo = this._getRangeInfo(this._initRangeOption());
        var weeks = this._rangeInfo.weeks || 1;
        var whNames = [
            'width',
            'height'
        ];
        var cellSize = this._model.getCellSize().slice();
        var layoutParams = this._model.getBoxLayoutParams();
        var cellNumbers = this._orient === 'horizontal' ? [
            weeks,
            7
        ] : [
            7,
            weeks
        ];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])([
            0,
            1
        ], function(idx) {
            if (cellSizeSpecified(cellSize, idx)) {
                layoutParams[whNames[idx]] = cellSize[idx] * cellNumbers[idx];
            }
        });
        var whGlobal = {
            width: api.getWidth(),
            height: api.getHeight()
        };
        var calendarRect = this._rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLayoutRect"])(layoutParams, whGlobal);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])([
            0,
            1
        ], function(idx) {
            if (!cellSizeSpecified(cellSize, idx)) {
                cellSize[idx] = calendarRect[whNames[idx]] / cellNumbers[idx];
            }
        });
        function cellSizeSpecified(cellSize, idx) {
            return cellSize[idx] != null && cellSize[idx] !== 'auto';
        }
        // Has been calculated out number.
        this._sw = cellSize[0];
        this._sh = cellSize[1];
    };
    /**
   * Convert a time data(time, value) item to (x, y) point.
   */ // TODO Clamp of calendar is not same with cartesian coordinate systems.
    // It will return NaN if data exceeds.
    Calendar.prototype.dataToPoint = function(data, clamp) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(data) && (data = data[0]);
        clamp == null && (clamp = true);
        var dayInfo = this.getDateInfo(data);
        var range = this._rangeInfo;
        var date = dayInfo.formatedDate;
        // if not in range return [NaN, NaN]
        if (clamp && !(dayInfo.time >= range.start.time && dayInfo.time < range.end.time + PROXIMATE_ONE_DAY)) {
            return [
                NaN,
                NaN
            ];
        }
        var week = dayInfo.day;
        var nthWeek = this._getRangeInfo([
            range.start.time,
            date
        ]).nthWeek;
        if (this._orient === 'vertical') {
            return [
                this._rect.x + week * this._sw + this._sw / 2,
                this._rect.y + nthWeek * this._sh + this._sh / 2
            ];
        }
        return [
            this._rect.x + nthWeek * this._sw + this._sw / 2,
            this._rect.y + week * this._sh + this._sh / 2
        ];
    };
    /**
   * Convert a (x, y) point to time data
   */ Calendar.prototype.pointToData = function(point) {
        var date = this.pointToDate(point);
        return date && date.time;
    };
    /**
   * Convert a time date item to (x, y) four point.
   */ Calendar.prototype.dataToRect = function(data, clamp) {
        var point = this.dataToPoint(data, clamp);
        return {
            contentShape: {
                x: point[0] - (this._sw - this._lineWidth) / 2,
                y: point[1] - (this._sh - this._lineWidth) / 2,
                width: this._sw - this._lineWidth,
                height: this._sh - this._lineWidth
            },
            center: point,
            tl: [
                point[0] - this._sw / 2,
                point[1] - this._sh / 2
            ],
            tr: [
                point[0] + this._sw / 2,
                point[1] - this._sh / 2
            ],
            br: [
                point[0] + this._sw / 2,
                point[1] + this._sh / 2
            ],
            bl: [
                point[0] - this._sw / 2,
                point[1] + this._sh / 2
            ]
        };
    };
    /**
   * Convert a (x, y) point to time date
   *
   * @param  {Array} point point
   * @return {Object}       date
   */ Calendar.prototype.pointToDate = function(point) {
        var nthX = Math.floor((point[0] - this._rect.x) / this._sw) + 1;
        var nthY = Math.floor((point[1] - this._rect.y) / this._sh) + 1;
        var range = this._rangeInfo.range;
        if (this._orient === 'vertical') {
            return this._getDateByWeeksAndDay(nthY, nthX - 1, range);
        }
        return this._getDateByWeeksAndDay(nthX, nthY - 1, range);
    };
    Calendar.prototype.convertToPixel = function(ecModel, finder, value) {
        var coordSys = getCoordSys(finder);
        return coordSys === this ? coordSys.dataToPoint(value) : null;
    };
    Calendar.prototype.convertFromPixel = function(ecModel, finder, pixel) {
        var coordSys = getCoordSys(finder);
        return coordSys === this ? coordSys.pointToData(pixel) : null;
    };
    Calendar.prototype.containPoint = function(point) {
        console.warn('Not implemented.');
        return false;
    };
    /**
   * initRange
   * Normalize to an [start, end] array
   */ Calendar.prototype._initRangeOption = function() {
        var range = this._model.get('range');
        var normalizedRange;
        // Convert [1990] to 1990
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(range) && range.length === 1) {
            range = range[0];
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(range)) {
            var rangeStr = range.toString();
            // One year.
            if (/^\d{4}$/.test(rangeStr)) {
                normalizedRange = [
                    rangeStr + '-01-01',
                    rangeStr + '-12-31'
                ];
            }
            // One month
            if (/^\d{4}[\/|-]\d{1,2}$/.test(rangeStr)) {
                var start = this.getDateInfo(rangeStr);
                var firstDay = start.date;
                firstDay.setMonth(firstDay.getMonth() + 1);
                var end = this.getNextNDay(firstDay, -1);
                normalizedRange = [
                    start.formatedDate,
                    end.formatedDate
                ];
            }
            // One day
            if (/^\d{4}[\/|-]\d{1,2}[\/|-]\d{1,2}$/.test(rangeStr)) {
                normalizedRange = [
                    rangeStr,
                    rangeStr
                ];
            }
        } else {
            normalizedRange = range;
        }
        if (!normalizedRange) {
            if ("TURBOPACK compile-time truthy", 1) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logError"])('Invalid date range.');
            }
            // Not handling it.
            return range;
        }
        var tmp = this._getRangeInfo(normalizedRange);
        if (tmp.start.time > tmp.end.time) {
            normalizedRange.reverse();
        }
        return normalizedRange;
    };
    /**
   * range info
   *
   * @private
   * @param  {Array} range range ['2017-01-01', '2017-07-08']
   *  If range[0] > range[1], they will not be reversed.
   * @return {Object}       obj
   */ Calendar.prototype._getRangeInfo = function(range) {
        var parsedRange = [
            this.getDateInfo(range[0]),
            this.getDateInfo(range[1])
        ];
        var reversed;
        if (parsedRange[0].time > parsedRange[1].time) {
            reversed = true;
            parsedRange.reverse();
        }
        var allDay = Math.floor(parsedRange[1].time / PROXIMATE_ONE_DAY) - Math.floor(parsedRange[0].time / PROXIMATE_ONE_DAY) + 1;
        // Consider case1 (#11677 #10430):
        // Set the system timezone as "UK", set the range to `['2016-07-01', '2016-12-31']`
        // Consider case2:
        // Firstly set system timezone as "Time Zone: America/Toronto",
        // ```
        // let first = new Date(1478412000000 - 3600 * 1000 * 2.5);
        // let second = new Date(1478412000000);
        // let allDays = Math.floor(second / ONE_DAY) - Math.floor(first / ONE_DAY) + 1;
        // ```
        // will get wrong result because of DST. So we should fix it.
        var date = new Date(parsedRange[0].time);
        var startDateNum = date.getDate();
        var endDateNum = parsedRange[1].date.getDate();
        date.setDate(startDateNum + allDay - 1);
        // The bias can not over a month, so just compare date.
        var dateNum = date.getDate();
        if (dateNum !== endDateNum) {
            var sign = date.getTime() - parsedRange[1].time > 0 ? 1 : -1;
            while((dateNum = date.getDate()) !== endDateNum && (date.getTime() - parsedRange[1].time) * sign > 0){
                allDay -= sign;
                date.setDate(dateNum - sign);
            }
        }
        var weeks = Math.floor((allDay + parsedRange[0].day + 6) / 7);
        var nthWeek = reversed ? -weeks + 1 : weeks - 1;
        reversed && parsedRange.reverse();
        return {
            range: [
                parsedRange[0].formatedDate,
                parsedRange[1].formatedDate
            ],
            start: parsedRange[0],
            end: parsedRange[1],
            allDay: allDay,
            weeks: weeks,
            // From 0.
            nthWeek: nthWeek,
            fweek: parsedRange[0].day,
            lweek: parsedRange[1].day
        };
    };
    /**
   * get date by nthWeeks and week day in range
   *
   * @private
   * @param  {number} nthWeek the week
   * @param  {number} day   the week day
   * @param  {Array} range [d1, d2]
   * @return {Object}
   */ Calendar.prototype._getDateByWeeksAndDay = function(nthWeek, day, range) {
        var rangeInfo = this._getRangeInfo(range);
        if (nthWeek > rangeInfo.weeks || nthWeek === 0 && day < rangeInfo.fweek || nthWeek === rangeInfo.weeks && day > rangeInfo.lweek) {
            return null;
        }
        var nthDay = (nthWeek - 1) * 7 - rangeInfo.fweek + day;
        var date = new Date(rangeInfo.start.time);
        date.setDate(+rangeInfo.start.d + nthDay);
        return this.getDateInfo(date);
    };
    Calendar.create = function(ecModel, api) {
        var calendarList = [];
        ecModel.eachComponent('calendar', function(calendarModel) {
            var calendar = new Calendar(calendarModel, ecModel, api);
            calendarList.push(calendar);
            calendarModel.coordinateSystem = calendar;
        });
        ecModel.eachSeries(function(calendarSeries) {
            if (calendarSeries.get('coordinateSystem') === 'calendar') {
                // Inject coordinate system
                calendarSeries.coordinateSystem = calendarList[calendarSeries.get('calendarIndex') || 0];
            }
        });
        return calendarList;
    };
    Calendar.dimensions = [
        'time',
        'value'
    ];
    return Calendar;
}();
function getCoordSys(finder) {
    var calendarModel = finder.calendarModel;
    var seriesModel = finder.seriesModel;
    var coordSys = calendarModel ? calendarModel.coordinateSystem : seriesModel ? seriesModel.coordinateSystem : null;
    return coordSys;
}
const __TURBOPACK__default__export__ = Calendar;
}}),
}]);

//# sourceMappingURL=91337_echarts_lib_coord_adad7248._.js.map