(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/interactive-maps.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$env$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/env/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mapbox$2d$gl$40$3$2e$10$2e$0$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/mapbox-gl@3.10.0/node_modules/mapbox-gl/dist/mapbox-gl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mapbox$2d$gl$40$3$2e$10$2e$0$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].accessToken = __TURBOPACK__imported__module__$5b$project$5d2f$env$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clientEnv"].NEXT_PUBLIC_MAPBOX_TOKEN || '';
const InteractiveMap = ({ center, places, selectedPlace, onPlaceSelect, className, viewMode = 'map' })=>{
    _s();
    const mapContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const markersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    // Handler for marker clicks
    const handleMarkerClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InteractiveMap.useCallback[handleMarkerClick]": (place)=>{
            onPlaceSelect(place);
        }
    }["InteractiveMap.useCallback[handleMarkerClick]"], [
        onPlaceSelect
    ]);
    // Initialize map
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InteractiveMap.useEffect": ()=>{
            if (!mapContainerRef.current) return;
            mapRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mapbox$2d$gl$40$3$2e$10$2e$0$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Map({
                container: mapContainerRef.current,
                style: 'mapbox://styles/mapbox/light-v11',
                center: [
                    center.lng,
                    center.lat
                ],
                zoom: 14,
                attributionControl: false
            });
            const map = mapRef.current;
            // Add minimal controls
            map.addControl(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mapbox$2d$gl$40$3$2e$10$2e$0$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].NavigationControl({
                showCompass: false,
                showZoom: true
            }), 'bottom-right');
            // Compact attribution
            map.addControl(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mapbox$2d$gl$40$3$2e$10$2e$0$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].AttributionControl({
                compact: true
            }), 'bottom-left');
            return ({
                "InteractiveMap.useEffect": ()=>{
                    Object.values(markersRef.current).forEach({
                        "InteractiveMap.useEffect": (marker)=>marker.remove()
                    }["InteractiveMap.useEffect"]);
                    map.remove();
                }
            })["InteractiveMap.useEffect"];
        }
    }["InteractiveMap.useEffect"], [
        center.lat,
        center.lng
    ]);
    // Update markers
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InteractiveMap.useEffect": ()=>{
            if (!mapRef.current) return;
            // Clear existing markers
            Object.values(markersRef.current).forEach({
                "InteractiveMap.useEffect": (marker)=>marker.remove()
            }["InteractiveMap.useEffect"]);
            markersRef.current = {};
            // Create markers with click handlers
            places.forEach({
                "InteractiveMap.useEffect": (place, index)=>{
                    const isSelected = selectedPlace?.place_id === place.place_id;
                    // Create marker element
                    const el = document.createElement('div');
                    el.className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 cursor-pointer shadow-md', isSelected ? 'bg-black text-white scale-110' : 'bg-white text-black hover:scale-105');
                    el.style.border = '2px solid currentColor';
                    el.innerHTML = `${index + 1}`;
                    // Create and add marker
                    const marker = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mapbox$2d$gl$40$3$2e$10$2e$0$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Marker({
                        element: el,
                        anchor: 'center'
                    }).setLngLat([
                        place.location.lng,
                        place.location.lat
                    ]).addTo(mapRef.current);
                    // Add click handler
                    el.addEventListener('click', {
                        "InteractiveMap.useEffect": (e)=>{
                            e.stopPropagation(); // Prevent map click
                            handleMarkerClick(place);
                        }
                    }["InteractiveMap.useEffect"]);
                    // Store marker reference
                    markersRef.current[place.place_id] = marker;
                }
            }["InteractiveMap.useEffect"]);
        }
    }["InteractiveMap.useEffect"], [
        places,
        selectedPlace,
        handleMarkerClick
    ]);
    // Handle map click to deselect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InteractiveMap.useEffect": ()=>{
            const map = mapRef.current;
            if (!map) return;
            const handleMapClick = {
                "InteractiveMap.useEffect.handleMapClick": (e)=>{
                    // Check if click was on a marker
                    const clickedMarker = Object.values(markersRef.current).some({
                        "InteractiveMap.useEffect.handleMapClick.clickedMarker": (marker)=>{
                            const markerEl = marker.getElement();
                            return e.originalEvent.target === markerEl || markerEl.contains(e.originalEvent.target);
                        }
                    }["InteractiveMap.useEffect.handleMapClick.clickedMarker"]);
                    // If click wasn't on a marker, deselect
                    if (!clickedMarker) {
                        onPlaceSelect(null);
                    }
                }
            }["InteractiveMap.useEffect.handleMapClick"];
            map.on('click', handleMapClick);
            return ({
                "InteractiveMap.useEffect": ()=>{
                    map.off('click', handleMapClick);
                }
            })["InteractiveMap.useEffect"];
        }
    }["InteractiveMap.useEffect"], [
        onPlaceSelect
    ]);
    // Fly to selected place with proper padding for list view
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InteractiveMap.useEffect": ()=>{
            if (!mapRef.current || !selectedPlace) return;
            const map = mapRef.current;
            const { clientWidth, clientHeight } = document.documentElement;
            // Calculate the actual width of list view (60% of viewport height in list mode)
            const listHeight = viewMode === 'list' ? clientHeight * 0.6 : 0;
            // Set padding based on view mode
            const padding = {
                top: viewMode === 'list' ? listHeight : 50,
                bottom: 50,
                left: 50,
                right: 50
            };
            // Get coordinates of the target location
            const coordinates = [
                selectedPlace.location.lng,
                selectedPlace.location.lat
            ];
            // Calculate the optimal zoom level
            const currentZoom = map.getZoom();
            const targetZoom = currentZoom < 15 ? 15 : currentZoom;
            // Fly to location with padding
            map.flyTo({
                center: coordinates,
                zoom: targetZoom,
                padding: padding,
                duration: 1500,
                essential: true
            });
            // Ensure padding is maintained after animation
            setTimeout({
                "InteractiveMap.useEffect": ()=>{
                    if (mapRef.current) {
                        mapRef.current.setPadding(padding);
                    }
                }
            }["InteractiveMap.useEffect"], 1600);
        }
    }["InteractiveMap.useEffect"], [
        selectedPlace,
        viewMode
    ]);
    // Update map padding when view mode changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InteractiveMap.useEffect": ()=>{
            if (!mapRef.current) return;
            const { clientHeight } = document.documentElement;
            const listHeight = viewMode === 'list' ? clientHeight * 0.6 : 0;
            const padding = {
                top: viewMode === 'list' ? listHeight : 50,
                bottom: 50,
                left: 50,
                right: 50
            };
            mapRef.current.setPadding(padding);
        }
    }["InteractiveMap.useEffect"], [
        viewMode
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full h-full relative z-0", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: mapContainerRef,
            className: "w-full h-full"
        }, void 0, false, {
            fileName: "[project]/components/interactive-maps.tsx",
            lineNumber: 231,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/interactive-maps.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
};
_s(InteractiveMap, "AcVQj3GYPyBaBknvWCfEvU5bXvc=");
_c = InteractiveMap;
const __TURBOPACK__default__export__ = InteractiveMap;
var _c;
__turbopack_context__.k.register(_c, "InteractiveMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/interactive-maps.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/components/interactive-maps.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=components_interactive-maps_tsx_1c473179._.js.map