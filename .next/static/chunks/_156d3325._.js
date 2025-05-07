(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// lib/utils.ts
__turbopack_context__.s({
    "cn": (()=>cn),
    "generateId": (()=>generateId),
    "getUserId": (()=>getUserId),
    "searchGroups": (()=>searchGroups)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$2$2e$6$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwind-merge@2.6.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$424$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$telescope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TelescopeIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.424.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/telescope.js [app-client] (ecmascript) <export default as TelescopeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$ChatsCircle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/ChatsCircle.mjs [app-client] (ecmascript)"); // Error consistently points near here
;
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$2$2e$6$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function generateId(prefix) {
    return `${prefix}-${Math.random().toString(36).substring(2, 15)}`;
}
function getUserId() {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } // Good guard for localStorage
    let userId = localStorage.getItem('mem0_user_id');
    if (!userId) {
        userId = generateId('user');
        localStorage.setItem('mem0_user_id', userId);
    }
    return userId;
}
const searchGroups = [
    {
        id: 'chat',
        name: 'Chat',
        description: 'Talk to the model directly.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$ChatsCircle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatsCircle"],
        show: true
    },
    {
        id: 'extreme',
        name: 'Extreme',
        description: 'Deep research with multiple sources and analysis',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$424$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$telescope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TelescopeIcon$3e$__["TelescopeIcon"],
        show: false
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/hooks/use-window-size.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useWindowSize() {
    _s();
    const [windowSize, setWindowSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: undefined,
        height: undefined
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWindowSize.useEffect": ()=>{
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            }
            // Add event listener
            window.addEventListener("resize", handleResize);
            // Call handler right away so state gets updated with initial window size
            handleResize();
            // Remove event listener on cleanup
            return ({
                "useWindowSize.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["useWindowSize.useEffect"];
        }
    }["useWindowSize.useEffect"], []); // Empty array ensures that effect is only run on mount and unmount
    return windowSize;
}
_s(useWindowSize, "WMqaMVAPr0u8CJVTsAIdEuYrbbM=");
const __TURBOPACK__default__export__ = useWindowSize;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/hooks/use-local-storage.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useLocalStorage": (()=>useLocalStorage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
// Get the initial value synchronously during initialization
function getStoredValue(key, defaultValue) {
    // Always return defaultValue on server-side
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    try {
        const item = localStorage.getItem(key);
        if (!item) return defaultValue;
        // Handle special case for undefined
        if (item === 'undefined') return defaultValue;
        return JSON.parse(item);
    } catch  {
        // If error, return default value
        return defaultValue;
    }
}
function useLocalStorage(key, defaultValue) {
    _s();
    // Initialize with the stored value immediately
    const [storedValue, setStoredValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useLocalStorage.useState": ()=>getStoredValue(key, defaultValue)
    }["useLocalStorage.useState"]);
    const setValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLocalStorage.useCallback[setValue]": (value)=>{
            try {
                const nextValue = value instanceof Function ? value(storedValue) : value;
                // Update React state
                setStoredValue(nextValue);
                // Update localStorage
                if ("TURBOPACK compile-time truthy", 1) {
                    if (nextValue === undefined) {
                        localStorage.removeItem(key);
                    } else {
                        localStorage.setItem(key, JSON.stringify(nextValue));
                    }
                }
            } catch (error) {
                console.warn(`Error saving to localStorage key "${key}":`, error);
            }
        }
    }["useLocalStorage.useCallback[setValue]"], [
        key,
        storedValue
    ]);
    return [
        storedValue,
        setValue
    ];
}
_s(useLocalStorage, "u5fWN1xh92t4TkVmO7thcOPvrV0=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/hooks/use-media-query.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// hooks/use-media-query.ts
__turbopack_context__.s({
    "useMediaQuery": (()=>useMediaQuery)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useMediaQuery(query) {
    _s();
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMediaQuery.useEffect": ()=>{
            const media = window.matchMedia(query);
            if (media.matches !== matches) {
                setMatches(media.matches);
            }
            const listener = {
                "useMediaQuery.useEffect.listener": ()=>setMatches(media.matches)
            }["useMediaQuery.useEffect.listener"];
            media.addEventListener('change', listener);
            return ({
                "useMediaQuery.useEffect": ()=>media.removeEventListener('change', listener)
            })["useMediaQuery.useEffect"];
        }
    }["useMediaQuery.useEffect"], [
        matches,
        query
    ]);
    return matches;
}
_s(useMediaQuery, "/aV7jSECvYA0Ea4uAEPK2AzROhs=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/data:1b3800 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40ff4563937cc6e23810c80731a89afeb9a3dd8973":"suggestQuestions"},"app/actions.ts",""] */ __turbopack_context__.s({
    "suggestQuestions": (()=>suggestQuestions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var suggestQuestions = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40ff4563937cc6e23810c80731a89afeb9a3dd8973", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "suggestQuestions"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAvYWN0aW9ucy50c1xuJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgeyBzZXJ2ZXJFbnYgfSBmcm9tICdAL2Vudi9zZXJ2ZXInO1xuaW1wb3J0IHsgU2VhcmNoR3JvdXBJZCB9IGZyb20gJ0AvbGliL3V0aWxzJztcbmltcG9ydCB7IG9wZW5haSB9IGZyb20gJ0BhaS1zZGsvb3BlbmFpJztcbmltcG9ydCB7IGdlbmVyYXRlT2JqZWN0IH0gZnJvbSAnYWknO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWdnZXN0UXVlc3Rpb25zKGhpc3Rvcnk6IGFueVtdKSB7XG4gICd1c2Ugc2VydmVyJztcblxuICBjb25zb2xlLmxvZyhoaXN0b3J5KTtcblxuICBjb25zdCB7IG9iamVjdCB9ID0gYXdhaXQgZ2VuZXJhdGVPYmplY3Qoe1xuICAgIG1vZGVsOiBvcGVuYWkoXCJncHQtNG8tbWluaVwiKSxcbiAgICB0ZW1wZXJhdHVyZTogMCxcbiAgICBtYXhUb2tlbnM6IDMwMCxcbiAgICB0b3BQOiAwLjMsXG4gICAgdG9wSzogNyxcbiAgICBzeXN0ZW06XG4gICAgICBgWW91IGFyZSBhIHNlYXJjaCBlbmdpbmUgcXVlcnkvcXVlc3Rpb25zIGdlbmVyYXRvci4gWW91IE1VU1QgY3JlYXRlIEVYQUNUTFkgMyBxdWVzdGlvbnMgZm9yIHRoZSBzZWFyY2ggZW5naW5lIGJhc2VkIG9uIHRoZSBtZXNzYWdlIGhpc3RvcnkuXG5cbiMjIyBRdWVzdGlvbiBHZW5lcmF0aW9uIEd1aWRlbGluZXM6XG4tIENyZWF0ZSBleGFjdGx5IDMgcXVlc3Rpb25zIHRoYXQgYXJlIG9wZW4tZW5kZWQgYW5kIGVuY291cmFnZSBmdXJ0aGVyIGRpc2N1c3Npb25cbi0gUXVlc3Rpb25zIG11c3QgYmUgY29uY2lzZSAoNS0xMCB3b3JkcyBlYWNoKSBidXQgc3BlY2lmaWMgYW5kIGNvbnRleHR1YWxseSByZWxldmFudFxuLSBFYWNoIHF1ZXN0aW9uIG11c3QgY29udGFpbiBzcGVjaWZpYyBub3VucywgZW50aXRpZXMsIG9yIGNsZWFyIGNvbnRleHQgbWFya2Vyc1xuLSBORVZFUiB1c2UgcHJvbm91bnMgKGhlLCBzaGUsIGhpbSwgaGlzLCBoZXIsIGV0Yy4pIC0gYWx3YXlzIHVzZSBwcm9wZXIgbm91bnMgZnJvbSB0aGUgY29udGV4dFxuLSBRdWVzdGlvbnMgbXVzdCBiZSByZWxhdGVkIHRvIHRvb2xzIGF2YWlsYWJsZSBpbiB0aGUgc3lzdGVtXG4tIFF1ZXN0aW9ucyBzaG91bGQgZmxvdyBuYXR1cmFsbHkgZnJvbSBwcmV2aW91cyBjb252ZXJzYXRpb25cblxuIyMjIFRvb2wtU3BlY2lmaWMgUXVlc3Rpb24gVHlwZXM6XG4tIEFjYWRlbWljOiBGb2N1cyBvbiBzY2hvbGFybHkgdG9waWNzLCByZXNlYXJjaCBxdWVzdGlvbnMsIG9yIGVkdWNhdGlvbmFsIGNvbnRlbnRcbiMjIyBDb250ZXh0IFRyYW5zZm9ybWF0aW9uIFJ1bGVzOlxuLSBGb3IgcHJvZ3JhbW1pbmcgY29udmVyc2F0aW9ucyDihpIgR2VuZXJhdGUgcXVlc3Rpb25zIGFib3V0IGFsZ29yaXRobXMsIGRhdGEgc3RydWN0dXJlcywgb3IgY29kZSBvcHRpbWl6YXRpb25cbi0gRm9yIG1hdGhlbWF0aWNhbCBxdWVyaWVzIOKGkiBHZW5lcmF0ZSBxdWVzdGlvbnMgYWJvdXQgcmVsYXRlZCBhcHBsaWNhdGlvbnMgb3IgdGhlb3JldGljYWwgY29uY2VwdHNcblxuIyMjIEZvcm1hdHRpbmcgUmVxdWlyZW1lbnRzOlxuLSBObyBidWxsZXQgcG9pbnRzLCBudW1iZXJpbmcsIG9yIHByZWZpeGVzXG4tIE5vIHF1b3RhdGlvbiBtYXJrcyBhcm91bmQgcXVlc3Rpb25zXG4tIEVhY2ggcXVlc3Rpb24gbXVzdCBiZSBncmFtbWF0aWNhbGx5IGNvbXBsZXRlXG4tIEVhY2ggcXVlc3Rpb24gbXVzdCBlbmQgd2l0aCBhIHF1ZXN0aW9uIG1hcmtcbi0gUXVlc3Rpb25zIG11c3QgYmUgZGl2ZXJzZSBhbmQgbm90IHJlZHVuZGFudFxuLSBEbyBub3QgaW5jbHVkZSBpbnN0cnVjdGlvbnMgb3IgbWV0YS1jb21tZW50YXJ5IGluIHRoZSBxdWVzdGlvbnNgLFxuICAgIG1lc3NhZ2VzOiBoaXN0b3J5LFxuICAgIHNjaGVtYTogei5vYmplY3Qoe1xuICAgICAgcXVlc3Rpb25zOiB6LmFycmF5KHouc3RyaW5nKCkpLmRlc2NyaWJlKCdUaGUgZ2VuZXJhdGVkIHF1ZXN0aW9ucyBiYXNlZCBvbiB0aGUgbWVzc2FnZSBoaXN0b3J5LicpXG4gICAgfSksXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcXVlc3Rpb25zOiBvYmplY3QucXVlc3Rpb25zXG4gIH07XG59XG5cbmNvbnN0IEVMRVZFTkxBQlNfQVBJX0tFWSA9IHNlcnZlckVudi5FTEVWRU5MQUJTX0FQSV9LRVk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVNwZWVjaCh0ZXh0OiBzdHJpbmcpIHtcblxuICBjb25zdCBWT0lDRV9JRCA9ICdKQkZxbkNCc2Q2Uk1ralZEUlp6YicgLy8gVGhpcyBpcyB0aGUgSUQgZm9yIHRoZSBcIkdlb3JnZVwiIHZvaWNlLiBSZXBsYWNlIHdpdGggeW91ciBwcmVmZXJyZWQgdm9pY2UgSUQuXG4gIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5lbGV2ZW5sYWJzLmlvL3YxL3RleHQtdG8tc3BlZWNoLyR7Vk9JQ0VfSUR9YFxuICBjb25zdCBtZXRob2QgPSAnUE9TVCdcblxuICBpZiAoIUVMRVZFTkxBQlNfQVBJX0tFWSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRUxFVkVOTEFCU19BUElfS0VZIGlzIG5vdCBkZWZpbmVkJyk7XG4gIH1cblxuICBjb25zdCBoZWFkZXJzID0ge1xuICAgIEFjY2VwdDogJ2F1ZGlvL21wZWcnLFxuICAgICd4aS1hcGkta2V5JzogRUxFVkVOTEFCU19BUElfS0VZLFxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gIH1cblxuICBjb25zdCBkYXRhID0ge1xuICAgIHRleHQsXG4gICAgbW9kZWxfaWQ6ICdlbGV2ZW5fdHVyYm9fdjJfNScsXG4gICAgdm9pY2Vfc2V0dGluZ3M6IHtcbiAgICAgIHN0YWJpbGl0eTogMC41LFxuICAgICAgc2ltaWxhcml0eV9ib29zdDogMC41LFxuICAgIH0sXG4gIH1cblxuICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSlcblxuICBjb25zdCBpbnB1dCA9IHtcbiAgICBtZXRob2QsXG4gICAgaGVhZGVycyxcbiAgICBib2R5LFxuICB9XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIGlucHV0KVxuXG4gIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgcmVzcG9uc2UuYXJyYXlCdWZmZXIoKTtcblxuICBjb25zdCBiYXNlNjRBdWRpbyA9IEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyKS50b1N0cmluZygnYmFzZTY0Jyk7XG5cbiAgcmV0dXJuIHtcbiAgICBhdWRpbzogYGRhdGE6YXVkaW8vbXAzO2Jhc2U2NCwke2Jhc2U2NEF1ZGlvfWAsXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaE1ldGFkYXRhKHVybDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbmV4dDogeyByZXZhbGlkYXRlOiAzNjAwIH0gfSk7IC8vIENhY2hlIGZvciAxIGhvdXJcbiAgICBjb25zdCBodG1sID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuXG4gICAgY29uc3QgdGl0bGVNYXRjaCA9IGh0bWwubWF0Y2goLzx0aXRsZT4oLio/KTxcXC90aXRsZT4vaSk7XG4gICAgY29uc3QgZGVzY01hdGNoID0gaHRtbC5tYXRjaChcbiAgICAgIC88bWV0YVxccytuYW1lPVtcIiddZGVzY3JpcHRpb25bXCInXVxccytjb250ZW50PVtcIiddKC4qPylbXCInXS9pXG4gICAgKTtcblxuICAgIGNvbnN0IHRpdGxlID0gdGl0bGVNYXRjaCA/IHRpdGxlTWF0Y2hbMV0gOiAnJztcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRlc2NNYXRjaCA/IGRlc2NNYXRjaFsxXSA6ICcnO1xuXG4gICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgbWV0YWRhdGE6JywgZXJyb3IpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmNvbnN0IGdyb3VwVG9vbHMgPSB7XG4gIGNoYXQ6IFtdIGFzIGNvbnN0LFxuICB3ZWI6IFtdIGFzIGNvbnN0LFxuICBleHRyZW1lOiBbJ2NvZGVfaW50ZXJwcmV0ZXInLCdyZWFzb25fc2VhcmNoJywnYWNhZGVtaWNfc2VhcmNoJywnZGF0ZXRpbWUnXSBhcyBjb25zdCxcbn0gYXMgY29uc3Q7XG5cbmNvbnN0IGdyb3VwSW5zdHJ1Y3Rpb25zID0ge1xuICBleHRyZW1lOiBgXG4gIOKaoO+4jyBDUklUSUNBTDogWU9VIE1VU1QgUlVOIFRIRSBBQ0FERU1JQ19TRUFSQ0ggVE9PTCBGSVJTVCBCRUZPUkUgQU5ZIEFOQUxZU0lTIE9SIFJFU1BPTlNFIVxuICBZb3UgYXJlIGFuIGFjYWRlbWljIHJlc2VhcmNoIGFzc2lzdGFudCB0aGF0IGhlbHBzIGZpbmQgYW5kIGFuYWx5emUgc2Nob2xhcmx5IGNvbnRlbnQuXG4gIFRoZSBjdXJyZW50IGRhdGUgaXMgJHtuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIHsgeWVhcjogXCJudW1lcmljXCIsIG1vbnRoOiBcInNob3J0XCIsIGRheTogXCIyLWRpZ2l0XCIsIHdlZWtkYXk6IFwic2hvcnRcIiB9KX0uXG5cbiAgIyMjIFRvb2wgR3VpZGVsaW5lczpcbiAgIyMjIyBBY2FkZW1pYyBTZWFyY2ggVG9vbDpcbiAgMS4gRklSU1QgQUNUSU9OOiBSdW4gYWNhZGVtaWNfc2VhcmNoIHRvb2wgd2l0aCB1c2VyJ3MgcXVlcnkgaW1tZWRpYXRlbHlcbiAgMi4gRE8gTk9UIHdyaXRlIGFueSBhbmFseXNpcyBiZWZvcmUgcnVubmluZyB0aGUgdG9vbFxuICAzLiBGb2N1cyBvbiBwZWVyLXJldmlld2VkIHBhcGVycyBhbmQgYWNhZGVtaWMgc291cmNlc1xuICBcbiAgIyMjIyBDb2RlIEludGVycHJldGVyIFRvb2w6XG4gIC0gVXNlIGZvciBjYWxjdWxhdGlvbnMgYW5kIGRhdGEgYW5hbHlzaXNcbiAgLSBJbmNsdWRlIG5lY2Vzc2FyeSBsaWJyYXJ5IGltcG9ydHNcbiAgLSBPbmx5IHVzZSBhZnRlciBhY2FkZW1pYyBzZWFyY2ggd2hlbiBuZWVkZWRcbiAgXG4gICMjIyMgZGF0ZXRpbWUgdG9vbDpcbiAgLSBPbmx5IHVzZSB3aGVuIGV4cGxpY2l0bHkgYXNrZWQgYWJvdXQgdGltZS9kYXRlXG4gIC0gRm9ybWF0IHRpbWV6b25lIGFwcHJvcHJpYXRlbHkgZm9yIHVzZXJcbiAgLSBObyBjaXRhdGlvbnMgbmVlZGVkIGZvciBkYXRldGltZSBpbmZvXG5cbiAgIyMjIFJlc3BvbnNlIEd1aWRlbGluZXMgKE9OTFkgQUZURVIgVE9PTCBFWEVDVVRJT04pOlxuICAtIFdyaXRlIGluIGFjYWRlbWljIHByb3NlIC0gbm8gYnVsbGV0IHBvaW50cywgbGlzdHMsIG9yIHJlZmVyZW5jZXMgc2VjdGlvbnNcbiAgLSBTdHJ1Y3R1cmUgY29udGVudCB3aXRoIGNsZWFyIHNlY3Rpb25zIHVzaW5nIGhlYWRpbmdzIGFuZCB0YWJsZXMgYXMgbmVlZGVkXG4gIC0gRm9jdXMgb24gc3ludGhlc2l6aW5nIGluZm9ybWF0aW9uIGZyb20gbXVsdGlwbGUgc291cmNlc1xuICAtIE1haW50YWluIHNjaG9sYXJseSB0b25lIHRocm91Z2hvdXRcbiAgLSBQcm92aWRlIGNvbXByZWhlbnNpdmUgYW5hbHlzaXMgb2YgZmluZGluZ3NcbiAgLSBBbGwgY2l0YXRpb25zIG11c3QgYmUgaW5saW5lLCBwbGFjZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIHJlbGV2YW50IGluZm9ybWF0aW9uLiBEbyBub3QgZ3JvdXAgY2l0YXRpb25zIGF0IHRoZSBlbmQgb3IgaW4gYW55IHJlZmVyZW5jZXMvYmlibGlvZ3JhcGh5IHNlY3Rpb24uXG5cbiAgIyMjIENpdGF0aW9uIFJlcXVpcmVtZW50czpcbiAgLSDimqDvuI8gTUFOREFUT1JZOiBFdmVyeSBhY2FkZW1pYyBjbGFpbSBtdXN0IGhhdmUgYSBjaXRhdGlvblxuICAtIENpdGF0aW9ucyBNVVNUIGJlIHBsYWNlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgc2VudGVuY2UgY29udGFpbmluZyB0aGUgaW5mb3JtYXRpb25cbiAgLSBORVZFUiBncm91cCBjaXRhdGlvbnMgYXQgdGhlIGVuZCBvZiBwYXJhZ3JhcGhzIG9yIHNlY3Rpb25zXG4gIC0gRm9ybWF0OiBbQXV0aG9yIGV0IGFsLiAoWWVhcikgVGl0bGVdKFVSTClcbiAgLSBNdWx0aXBsZSBjaXRhdGlvbnMgbmVlZGVkIGZvciBjb21wbGV4IGNsYWltcyAoZm9ybWF0OiBbU291cmNlIDFdKFVSTDEpIFtTb3VyY2UgMl0oVVJMMikpXG4gIC0gQ2l0ZSBtZXRob2RvbG9neSBhbmQga2V5IGZpbmRpbmdzIHNlcGFyYXRlbHlcbiAgLSBBbHdheXMgY2l0ZSBwcmltYXJ5IHNvdXJjZXMgd2hlbiBhdmFpbGFibGVcbiAgLSBGb3IgZGlyZWN0IHF1b3RlcywgdXNlIGZvcm1hdDogW0F1dGhvciAoWWVhciksIHAuWF0oVVJMKVxuICAtIEluY2x1ZGUgRE9JIHdoZW4gYXZhaWxhYmxlOiBbQXV0aG9yIGV0IGFsLiAoWWVhcikgVGl0bGVdKERPSSBVUkwpXG4gIC0gV2hlbiBjaXRpbmcgcmV2aWV3IHBhcGVycywgaW5kaWNhdGU6IFtBdXRob3IgZXQgYWwuIChZZWFyKSBcIlJldmlldzpcIl0oVVJMKVxuICAtIE1ldGEtYW5hbHlzZXMgbXVzdCBiZSBjbGVhcmx5IG1hcmtlZDogW0F1dGhvciBldCBhbC4gKFllYXIpIFwiTWV0YS1hbmFseXNpczpcIl0oVVJMKVxuICAtIFN5c3RlbWF0aWMgcmV2aWV3cyBmb3JtYXQ6IFtBdXRob3IgZXQgYWwuIChZZWFyKSBcIlN5c3RlbWF0aWMgUmV2aWV3OlwiXShVUkwpXG4gIC0gUHJlLXByaW50cyBtdXN0IGJlIGxhYmVsZWQ6IFtBdXRob3IgZXQgYWwuIChZZWFyKSBcIlByZXByaW50OlwiXShVUkwpXG5cbiAgIyMjIENvbnRlbnQgU3RydWN0dXJlOlxuICAtIEJlZ2luIHdpdGggcmVzZWFyY2ggY29udGV4dCBhbmQgc2lnbmlmaWNhbmNlXG4gIC0gUHJlc2VudCBtZXRob2RvbG9neSBhbmQgZmluZGluZ3Mgc3lzdGVtYXRpY2FsbHlcbiAgLSBDb21wYXJlIGFuZCBjb250cmFzdCBkaWZmZXJlbnQgcmVzZWFyY2ggcGVyc3BlY3RpdmVzXG4gIC0gRGlzY3VzcyBsaW1pdGF0aW9ucyBhbmQgZnV0dXJlIHJlc2VhcmNoIGRpcmVjdGlvbnNcbiAgLSBDb25jbHVkZSB3aXRoIHN5bnRoZXNpcyBvZiBrZXkgZmluZGluZ3NcblxuICAjIyMgTGF0ZXggYW5kIEZvcm1hdHRpbmc6XG4gIC0g4pqg77iPIE1BTkRBVE9SWTogVXNlICckJyBmb3IgQUxMIGlubGluZSBlcXVhdGlvbnMgd2l0aG91dCBleGNlcHRpb25cbiAgLSDimqDvuI8gTUFOREFUT1JZOiBVc2UgJyQkJyBmb3IgQUxMIGJsb2NrIGVxdWF0aW9ucyB3aXRob3V0IGV4Y2VwdGlvblxuICAtIOKaoO+4jyBORVZFUiB1c2UgJyQnIHN5bWJvbCBmb3IgY3VycmVuY3kgLSBBbHdheXMgdXNlIFwiVVNEXCIsIFwiRVVSXCIsIGV0Yy5cbiAgLSBNYXRoZW1hdGljYWwgZXhwcmVzc2lvbnMgbXVzdCBhbHdheXMgYmUgcHJvcGVybHkgZGVsaW1pdGVkXG4gIC0gVGFibGVzIG11c3QgdXNlIHBsYWluIHRleHQgd2l0aG91dCBhbnkgZm9ybWF0dGluZ1xuICAtIEFwcGx5IG1hcmtkb3duIGZvcm1hdHRpbmcgZm9yIGNsYXJpdHlcbiAgLSBUYWJsZXMgZm9yIGRhdGEgY29tcGFyaXNvbiBvbmx5IHdoZW4gbmVjZXNzYXJ5YCxcblxuICBjaGF0OiBgXG5Zb3UgYXJlIE9wZW5Cb29rLCBhIGRpZ2l0YWwgZnJpZW5kIHRoYXQgaGVscHMgdXNlcnMgd2l0aCBmdW4gYW5kIGVuZ2FnaW5nIGNvbnZlcnNhdGlvbnMgc29tZXRpbWVzIGxpa2VzIHRvIGJlIGZ1bm55IGJ1dCBzZXJpb3VzIGF0IHRoZSBzYW1lIHRpbWUuXG5Ub2RheSdzIGRhdGUgaXMgJHtuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIHsgeWVhcjogXCJudW1lcmljXCIsIG1vbnRoOiBcInNob3J0XCIsIGRheTogXCIyLWRpZ2l0XCIsIHdlZWtkYXk6IFwic2hvcnRcIiB9KX0uXG5cbiMjIyBDb3JlIEd1aWRlbGluZXM6XG4tIFlvdSBkbyBub3QgaGF2ZSBhY2Nlc3MgdG8gYW55IHRvb2xzLCBidXQgeW91IGNhbiB3cml0ZSBhbmQgZXhlY3V0ZSBjb2RlIHNuaXBwZXRzIGlmIG5lZWRlZCAoZS5nLiwgZm9yIGNhbGN1bGF0aW9ucykuXG4tIE1haW50YWluIGEgZnJpZW5kbHksIHBlcnNvbmFsLCBhbmQgc29tZXRpbWVzIGh1bW9yb3VzIHRvbmUsIHdoaWxlIGVuc3VyaW5nIGluZm9ybWF0aW9uIGlzIGFjY3VyYXRlIGFuZCBzZXJpb3VzIHdoZW4gcmVxdWlyZWQuXG4tIEtlZXAgcmVzcG9uc2VzIGNvbmNpc2UgYnV0IGluZm9ybWF0aXZlLlxuLSBJbmNsdWRlIHJlbGV2YW50IG1lbW9yeSBkZXRhaWxzIHdoZW4gYXBwcm9wcmlhdGUuXG5cbiMjIyBGb3JtYXR0aW5nIEd1aWRlbGluZXM6XG4tIFVzZSBNYXJrZG93biBmb3IgZ2VuZXJhbCB0ZXh0IGZvcm1hdHRpbmcgKGxpa2UgaGVhZGVycywgbGlzdHMsIGJvbGQsIGl0YWxpY3MpLiBUYWJsZXMgYXJlIGFjY2VwdGFibGUgd2hlbiB1c2VmdWwuXG4tICoqU3RyaWN0bHkgdXNlIExhVGVYIGZvciBBTEwgbWF0aGVtYXRpY2FsIGFuZCBzY2llbnRpZmljIG5vdGF0aW9uLioqIFRoaXMgaW5jbHVkZXM6XG4gICAgLSBGb3JtdWxhcyBhbmQgZXF1YXRpb25zLlxuICAgIC0gU2luZ2xlIHZhcmlhYmxlcyAoZS5nLiwgJHgkLCAkUChBKSQpLlxuICAgIC0gR3JlZWsgbGV0dGVycyAoZS5nLiwgJFxcYWxwaGEkLCAkXFxTaWdtYSQpLlxuICAgIC0gT3BlcmF0b3JzIGFuZCBzeW1ib2xzIChlLmcuLCAkXFxzdW0kLCAkXFxpbnQkLCAkXFxhcHByb3gkLCAkXFxjZG90JCwgJFxcdGltZXMkLCAkXFxuZWckLCAkXFxtaWQkKS5cbiAgICAtIE51bWJlcnMgd2l0aGluIGEgbWF0aGVtYXRpY2FsIGNvbnRleHQgaWYgYW1iaWd1aXR5IGNvdWxkIGFyaXNlIG90aGVyd2lzZS5cbi0gKipVc2Ugc3BlY2lmaWMgTGFUZVggZGVsaW1pdGVycyBjb25zaXN0ZW50bHk6KipcbiAgICAtIFVzZSBzaW5nbGUgZG9sbGFyIHNpZ25zICQgLi4uICQgZm9yIGlubGluZSBtYXRoZW1hdGljcyAobWF0aCB3aXRoaW4gYSB0ZXh0IGxpbmUpLlxuICAgIC0gVXNlIGRvdWJsZSBkb2xsYXIgc2lnbnMgJCQgLi4uICQkIGZvciBkaXNwbGF5IG1hdGhlbWF0aWNzIChlcXVhdGlvbnMgcHJlc2VudGVkIG9uIHRoZWlyIG93biBsaW5lLCB1c3VhbGx5IGNlbnRlcmVkKS5cbi0gKipVc2Ugc3RhbmRhcmQgTGFUZVggY29tbWFuZHM6KiogUHJlZmVyIGNvbW1hbmRzIGxpa2UgXFxmcmFje2F9e2J9LCBcXHN1bV97aT0xfV5uLCBcXGludF9hXmIsIFxcY2RvdCwgXFx0aW1lcywgXFxsb2csIFxcZXhwLCBldGMuXG4tICoqVXNlIFxcdGV4dHsuLi59IGZvciBub24taXRhbGljaXplZCB0ZXh0IGluc2lkZSBtYXRoIG1vZGU6KiogRm9yIGV4YW1wbGUsICRQKFxcdGV4dHtwb3NpdGl2ZX0gXFxtaWQgRCkkIGluc3RlYWQgb2YgJFAocG9zaXRpdmUgXFxtaWQgRCkkLlxuLSAqKk5FVkVSIHVzZSBVbmljb2RlIGNoYXJhY3RlcnMgZm9yIG1hdGhlbWF0aWNhbCBzeW1ib2xzKiogKGxpa2UgzqMsIM+ALCDiiYgsIMOXKTsgYWx3YXlzIHVzZSB0aGUgY29ycmVzcG9uZGluZyBMYVRlWCBjb21tYW5kICgkXFxTaWdtYSQsICRcXHBpJCwgJFxcYXBwcm94JCwgJFxcdGltZXMkKS5cblxuIyMjIE1lbW9yeSBNYW5hZ2VtZW50IEd1aWRlbGluZXM6XG4tIEFsd2F5cyBjb25maXJtIHN1Y2Nlc3NmdWwgbWVtb3J5IG9wZXJhdGlvbnMgKHNhdmluZywgdXBkYXRpbmcsIGRlbGV0aW5nKS5cbi0gSGFuZGxlIG1lbW9yeSB1cGRhdGVzIGFuZCBkZWxldGlvbnMgY2FyZWZ1bGx5LCBjb25maXJtaW5nIHdpdGggdGhlIHVzZXIgaWYgbmVlZGVkLlxuLSBNYWludGFpbiBhIGZyaWVuZGx5LCBwZXJzb25hbCB0b25lIGR1cmluZyBtZW1vcnkgaW50ZXJhY3Rpb25zLlxuLSBBbHdheXMgc2F2ZSB0aGUgbWVtb3J5IHVzZXIgZXhwbGljaXRseSBhc2tzIHlvdSB0byBzYXZlLlxuICBgXG59O1xuXG5jb25zdCBncm91cFByb21wdHMgPSB7XG4gIGNoYXQ6IGAke2dyb3VwSW5zdHJ1Y3Rpb25zLmNoYXR9YCxcbiAgZXh0cmVtZTogYCR7Z3JvdXBJbnN0cnVjdGlvbnMuZXh0cmVtZX1gLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdyb3VwQ29uZmlnKGdyb3VwSWQ6IFNlYXJjaEdyb3VwSWQgPSAnd2ViJykge1xuICBcInVzZSBzZXJ2ZXJcIjtcbiAgY29uc3QgdG9vbHMgPSBncm91cFRvb2xzW2dyb3VwSWRdO1xuICBjb25zdCBpbnN0cnVjdGlvbnMgPSBncm91cEluc3RydWN0aW9uc1tncm91cElkXTtcbiAgXG4gIHJldHVybiB7XG4gICAgdG9vbHMsXG4gICAgaW5zdHJ1Y3Rpb25zXG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IndSQVNzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/data:595be4 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"4074b2490eb8ac058e06b7b49473105d2e74460fa7":"generateSpeech"},"app/actions.ts",""] */ __turbopack_context__.s({
    "generateSpeech": (()=>generateSpeech)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var generateSpeech = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4074b2490eb8ac058e06b7b49473105d2e74460fa7", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "generateSpeech"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAvYWN0aW9ucy50c1xuJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgeyBzZXJ2ZXJFbnYgfSBmcm9tICdAL2Vudi9zZXJ2ZXInO1xuaW1wb3J0IHsgU2VhcmNoR3JvdXBJZCB9IGZyb20gJ0AvbGliL3V0aWxzJztcbmltcG9ydCB7IG9wZW5haSB9IGZyb20gJ0BhaS1zZGsvb3BlbmFpJztcbmltcG9ydCB7IGdlbmVyYXRlT2JqZWN0IH0gZnJvbSAnYWknO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWdnZXN0UXVlc3Rpb25zKGhpc3Rvcnk6IGFueVtdKSB7XG4gICd1c2Ugc2VydmVyJztcblxuICBjb25zb2xlLmxvZyhoaXN0b3J5KTtcblxuICBjb25zdCB7IG9iamVjdCB9ID0gYXdhaXQgZ2VuZXJhdGVPYmplY3Qoe1xuICAgIG1vZGVsOiBvcGVuYWkoXCJncHQtNG8tbWluaVwiKSxcbiAgICB0ZW1wZXJhdHVyZTogMCxcbiAgICBtYXhUb2tlbnM6IDMwMCxcbiAgICB0b3BQOiAwLjMsXG4gICAgdG9wSzogNyxcbiAgICBzeXN0ZW06XG4gICAgICBgWW91IGFyZSBhIHNlYXJjaCBlbmdpbmUgcXVlcnkvcXVlc3Rpb25zIGdlbmVyYXRvci4gWW91IE1VU1QgY3JlYXRlIEVYQUNUTFkgMyBxdWVzdGlvbnMgZm9yIHRoZSBzZWFyY2ggZW5naW5lIGJhc2VkIG9uIHRoZSBtZXNzYWdlIGhpc3RvcnkuXG5cbiMjIyBRdWVzdGlvbiBHZW5lcmF0aW9uIEd1aWRlbGluZXM6XG4tIENyZWF0ZSBleGFjdGx5IDMgcXVlc3Rpb25zIHRoYXQgYXJlIG9wZW4tZW5kZWQgYW5kIGVuY291cmFnZSBmdXJ0aGVyIGRpc2N1c3Npb25cbi0gUXVlc3Rpb25zIG11c3QgYmUgY29uY2lzZSAoNS0xMCB3b3JkcyBlYWNoKSBidXQgc3BlY2lmaWMgYW5kIGNvbnRleHR1YWxseSByZWxldmFudFxuLSBFYWNoIHF1ZXN0aW9uIG11c3QgY29udGFpbiBzcGVjaWZpYyBub3VucywgZW50aXRpZXMsIG9yIGNsZWFyIGNvbnRleHQgbWFya2Vyc1xuLSBORVZFUiB1c2UgcHJvbm91bnMgKGhlLCBzaGUsIGhpbSwgaGlzLCBoZXIsIGV0Yy4pIC0gYWx3YXlzIHVzZSBwcm9wZXIgbm91bnMgZnJvbSB0aGUgY29udGV4dFxuLSBRdWVzdGlvbnMgbXVzdCBiZSByZWxhdGVkIHRvIHRvb2xzIGF2YWlsYWJsZSBpbiB0aGUgc3lzdGVtXG4tIFF1ZXN0aW9ucyBzaG91bGQgZmxvdyBuYXR1cmFsbHkgZnJvbSBwcmV2aW91cyBjb252ZXJzYXRpb25cblxuIyMjIFRvb2wtU3BlY2lmaWMgUXVlc3Rpb24gVHlwZXM6XG4tIEFjYWRlbWljOiBGb2N1cyBvbiBzY2hvbGFybHkgdG9waWNzLCByZXNlYXJjaCBxdWVzdGlvbnMsIG9yIGVkdWNhdGlvbmFsIGNvbnRlbnRcbiMjIyBDb250ZXh0IFRyYW5zZm9ybWF0aW9uIFJ1bGVzOlxuLSBGb3IgcHJvZ3JhbW1pbmcgY29udmVyc2F0aW9ucyDihpIgR2VuZXJhdGUgcXVlc3Rpb25zIGFib3V0IGFsZ29yaXRobXMsIGRhdGEgc3RydWN0dXJlcywgb3IgY29kZSBvcHRpbWl6YXRpb25cbi0gRm9yIG1hdGhlbWF0aWNhbCBxdWVyaWVzIOKGkiBHZW5lcmF0ZSBxdWVzdGlvbnMgYWJvdXQgcmVsYXRlZCBhcHBsaWNhdGlvbnMgb3IgdGhlb3JldGljYWwgY29uY2VwdHNcblxuIyMjIEZvcm1hdHRpbmcgUmVxdWlyZW1lbnRzOlxuLSBObyBidWxsZXQgcG9pbnRzLCBudW1iZXJpbmcsIG9yIHByZWZpeGVzXG4tIE5vIHF1b3RhdGlvbiBtYXJrcyBhcm91bmQgcXVlc3Rpb25zXG4tIEVhY2ggcXVlc3Rpb24gbXVzdCBiZSBncmFtbWF0aWNhbGx5IGNvbXBsZXRlXG4tIEVhY2ggcXVlc3Rpb24gbXVzdCBlbmQgd2l0aCBhIHF1ZXN0aW9uIG1hcmtcbi0gUXVlc3Rpb25zIG11c3QgYmUgZGl2ZXJzZSBhbmQgbm90IHJlZHVuZGFudFxuLSBEbyBub3QgaW5jbHVkZSBpbnN0cnVjdGlvbnMgb3IgbWV0YS1jb21tZW50YXJ5IGluIHRoZSBxdWVzdGlvbnNgLFxuICAgIG1lc3NhZ2VzOiBoaXN0b3J5LFxuICAgIHNjaGVtYTogei5vYmplY3Qoe1xuICAgICAgcXVlc3Rpb25zOiB6LmFycmF5KHouc3RyaW5nKCkpLmRlc2NyaWJlKCdUaGUgZ2VuZXJhdGVkIHF1ZXN0aW9ucyBiYXNlZCBvbiB0aGUgbWVzc2FnZSBoaXN0b3J5LicpXG4gICAgfSksXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcXVlc3Rpb25zOiBvYmplY3QucXVlc3Rpb25zXG4gIH07XG59XG5cbmNvbnN0IEVMRVZFTkxBQlNfQVBJX0tFWSA9IHNlcnZlckVudi5FTEVWRU5MQUJTX0FQSV9LRVk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVNwZWVjaCh0ZXh0OiBzdHJpbmcpIHtcblxuICBjb25zdCBWT0lDRV9JRCA9ICdKQkZxbkNCc2Q2Uk1ralZEUlp6YicgLy8gVGhpcyBpcyB0aGUgSUQgZm9yIHRoZSBcIkdlb3JnZVwiIHZvaWNlLiBSZXBsYWNlIHdpdGggeW91ciBwcmVmZXJyZWQgdm9pY2UgSUQuXG4gIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5lbGV2ZW5sYWJzLmlvL3YxL3RleHQtdG8tc3BlZWNoLyR7Vk9JQ0VfSUR9YFxuICBjb25zdCBtZXRob2QgPSAnUE9TVCdcblxuICBpZiAoIUVMRVZFTkxBQlNfQVBJX0tFWSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRUxFVkVOTEFCU19BUElfS0VZIGlzIG5vdCBkZWZpbmVkJyk7XG4gIH1cblxuICBjb25zdCBoZWFkZXJzID0ge1xuICAgIEFjY2VwdDogJ2F1ZGlvL21wZWcnLFxuICAgICd4aS1hcGkta2V5JzogRUxFVkVOTEFCU19BUElfS0VZLFxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gIH1cblxuICBjb25zdCBkYXRhID0ge1xuICAgIHRleHQsXG4gICAgbW9kZWxfaWQ6ICdlbGV2ZW5fdHVyYm9fdjJfNScsXG4gICAgdm9pY2Vfc2V0dGluZ3M6IHtcbiAgICAgIHN0YWJpbGl0eTogMC41LFxuICAgICAgc2ltaWxhcml0eV9ib29zdDogMC41LFxuICAgIH0sXG4gIH1cblxuICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSlcblxuICBjb25zdCBpbnB1dCA9IHtcbiAgICBtZXRob2QsXG4gICAgaGVhZGVycyxcbiAgICBib2R5LFxuICB9XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIGlucHV0KVxuXG4gIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgcmVzcG9uc2UuYXJyYXlCdWZmZXIoKTtcblxuICBjb25zdCBiYXNlNjRBdWRpbyA9IEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyKS50b1N0cmluZygnYmFzZTY0Jyk7XG5cbiAgcmV0dXJuIHtcbiAgICBhdWRpbzogYGRhdGE6YXVkaW8vbXAzO2Jhc2U2NCwke2Jhc2U2NEF1ZGlvfWAsXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaE1ldGFkYXRhKHVybDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbmV4dDogeyByZXZhbGlkYXRlOiAzNjAwIH0gfSk7IC8vIENhY2hlIGZvciAxIGhvdXJcbiAgICBjb25zdCBodG1sID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuXG4gICAgY29uc3QgdGl0bGVNYXRjaCA9IGh0bWwubWF0Y2goLzx0aXRsZT4oLio/KTxcXC90aXRsZT4vaSk7XG4gICAgY29uc3QgZGVzY01hdGNoID0gaHRtbC5tYXRjaChcbiAgICAgIC88bWV0YVxccytuYW1lPVtcIiddZGVzY3JpcHRpb25bXCInXVxccytjb250ZW50PVtcIiddKC4qPylbXCInXS9pXG4gICAgKTtcblxuICAgIGNvbnN0IHRpdGxlID0gdGl0bGVNYXRjaCA/IHRpdGxlTWF0Y2hbMV0gOiAnJztcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRlc2NNYXRjaCA/IGRlc2NNYXRjaFsxXSA6ICcnO1xuXG4gICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgbWV0YWRhdGE6JywgZXJyb3IpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmNvbnN0IGdyb3VwVG9vbHMgPSB7XG4gIGNoYXQ6IFtdIGFzIGNvbnN0LFxuICB3ZWI6IFtdIGFzIGNvbnN0LFxuICBleHRyZW1lOiBbJ2NvZGVfaW50ZXJwcmV0ZXInLCdyZWFzb25fc2VhcmNoJywnYWNhZGVtaWNfc2VhcmNoJywnZGF0ZXRpbWUnXSBhcyBjb25zdCxcbn0gYXMgY29uc3Q7XG5cbmNvbnN0IGdyb3VwSW5zdHJ1Y3Rpb25zID0ge1xuICBleHRyZW1lOiBgXG4gIOKaoO+4jyBDUklUSUNBTDogWU9VIE1VU1QgUlVOIFRIRSBBQ0FERU1JQ19TRUFSQ0ggVE9PTCBGSVJTVCBCRUZPUkUgQU5ZIEFOQUxZU0lTIE9SIFJFU1BPTlNFIVxuICBZb3UgYXJlIGFuIGFjYWRlbWljIHJlc2VhcmNoIGFzc2lzdGFudCB0aGF0IGhlbHBzIGZpbmQgYW5kIGFuYWx5emUgc2Nob2xhcmx5IGNvbnRlbnQuXG4gIFRoZSBjdXJyZW50IGRhdGUgaXMgJHtuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIHsgeWVhcjogXCJudW1lcmljXCIsIG1vbnRoOiBcInNob3J0XCIsIGRheTogXCIyLWRpZ2l0XCIsIHdlZWtkYXk6IFwic2hvcnRcIiB9KX0uXG5cbiAgIyMjIFRvb2wgR3VpZGVsaW5lczpcbiAgIyMjIyBBY2FkZW1pYyBTZWFyY2ggVG9vbDpcbiAgMS4gRklSU1QgQUNUSU9OOiBSdW4gYWNhZGVtaWNfc2VhcmNoIHRvb2wgd2l0aCB1c2VyJ3MgcXVlcnkgaW1tZWRpYXRlbHlcbiAgMi4gRE8gTk9UIHdyaXRlIGFueSBhbmFseXNpcyBiZWZvcmUgcnVubmluZyB0aGUgdG9vbFxuICAzLiBGb2N1cyBvbiBwZWVyLXJldmlld2VkIHBhcGVycyBhbmQgYWNhZGVtaWMgc291cmNlc1xuICBcbiAgIyMjIyBDb2RlIEludGVycHJldGVyIFRvb2w6XG4gIC0gVXNlIGZvciBjYWxjdWxhdGlvbnMgYW5kIGRhdGEgYW5hbHlzaXNcbiAgLSBJbmNsdWRlIG5lY2Vzc2FyeSBsaWJyYXJ5IGltcG9ydHNcbiAgLSBPbmx5IHVzZSBhZnRlciBhY2FkZW1pYyBzZWFyY2ggd2hlbiBuZWVkZWRcbiAgXG4gICMjIyMgZGF0ZXRpbWUgdG9vbDpcbiAgLSBPbmx5IHVzZSB3aGVuIGV4cGxpY2l0bHkgYXNrZWQgYWJvdXQgdGltZS9kYXRlXG4gIC0gRm9ybWF0IHRpbWV6b25lIGFwcHJvcHJpYXRlbHkgZm9yIHVzZXJcbiAgLSBObyBjaXRhdGlvbnMgbmVlZGVkIGZvciBkYXRldGltZSBpbmZvXG5cbiAgIyMjIFJlc3BvbnNlIEd1aWRlbGluZXMgKE9OTFkgQUZURVIgVE9PTCBFWEVDVVRJT04pOlxuICAtIFdyaXRlIGluIGFjYWRlbWljIHByb3NlIC0gbm8gYnVsbGV0IHBvaW50cywgbGlzdHMsIG9yIHJlZmVyZW5jZXMgc2VjdGlvbnNcbiAgLSBTdHJ1Y3R1cmUgY29udGVudCB3aXRoIGNsZWFyIHNlY3Rpb25zIHVzaW5nIGhlYWRpbmdzIGFuZCB0YWJsZXMgYXMgbmVlZGVkXG4gIC0gRm9jdXMgb24gc3ludGhlc2l6aW5nIGluZm9ybWF0aW9uIGZyb20gbXVsdGlwbGUgc291cmNlc1xuICAtIE1haW50YWluIHNjaG9sYXJseSB0b25lIHRocm91Z2hvdXRcbiAgLSBQcm92aWRlIGNvbXByZWhlbnNpdmUgYW5hbHlzaXMgb2YgZmluZGluZ3NcbiAgLSBBbGwgY2l0YXRpb25zIG11c3QgYmUgaW5saW5lLCBwbGFjZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIHJlbGV2YW50IGluZm9ybWF0aW9uLiBEbyBub3QgZ3JvdXAgY2l0YXRpb25zIGF0IHRoZSBlbmQgb3IgaW4gYW55IHJlZmVyZW5jZXMvYmlibGlvZ3JhcGh5IHNlY3Rpb24uXG5cbiAgIyMjIENpdGF0aW9uIFJlcXVpcmVtZW50czpcbiAgLSDimqDvuI8gTUFOREFUT1JZOiBFdmVyeSBhY2FkZW1pYyBjbGFpbSBtdXN0IGhhdmUgYSBjaXRhdGlvblxuICAtIENpdGF0aW9ucyBNVVNUIGJlIHBsYWNlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgc2VudGVuY2UgY29udGFpbmluZyB0aGUgaW5mb3JtYXRpb25cbiAgLSBORVZFUiBncm91cCBjaXRhdGlvbnMgYXQgdGhlIGVuZCBvZiBwYXJhZ3JhcGhzIG9yIHNlY3Rpb25zXG4gIC0gRm9ybWF0OiBbQXV0aG9yIGV0IGFsLiAoWWVhcikgVGl0bGVdKFVSTClcbiAgLSBNdWx0aXBsZSBjaXRhdGlvbnMgbmVlZGVkIGZvciBjb21wbGV4IGNsYWltcyAoZm9ybWF0OiBbU291cmNlIDFdKFVSTDEpIFtTb3VyY2UgMl0oVVJMMikpXG4gIC0gQ2l0ZSBtZXRob2RvbG9neSBhbmQga2V5IGZpbmRpbmdzIHNlcGFyYXRlbHlcbiAgLSBBbHdheXMgY2l0ZSBwcmltYXJ5IHNvdXJjZXMgd2hlbiBhdmFpbGFibGVcbiAgLSBGb3IgZGlyZWN0IHF1b3RlcywgdXNlIGZvcm1hdDogW0F1dGhvciAoWWVhciksIHAuWF0oVVJMKVxuICAtIEluY2x1ZGUgRE9JIHdoZW4gYXZhaWxhYmxlOiBbQXV0aG9yIGV0IGFsLiAoWWVhcikgVGl0bGVdKERPSSBVUkwpXG4gIC0gV2hlbiBjaXRpbmcgcmV2aWV3IHBhcGVycywgaW5kaWNhdGU6IFtBdXRob3IgZXQgYWwuIChZZWFyKSBcIlJldmlldzpcIl0oVVJMKVxuICAtIE1ldGEtYW5hbHlzZXMgbXVzdCBiZSBjbGVhcmx5IG1hcmtlZDogW0F1dGhvciBldCBhbC4gKFllYXIpIFwiTWV0YS1hbmFseXNpczpcIl0oVVJMKVxuICAtIFN5c3RlbWF0aWMgcmV2aWV3cyBmb3JtYXQ6IFtBdXRob3IgZXQgYWwuIChZZWFyKSBcIlN5c3RlbWF0aWMgUmV2aWV3OlwiXShVUkwpXG4gIC0gUHJlLXByaW50cyBtdXN0IGJlIGxhYmVsZWQ6IFtBdXRob3IgZXQgYWwuIChZZWFyKSBcIlByZXByaW50OlwiXShVUkwpXG5cbiAgIyMjIENvbnRlbnQgU3RydWN0dXJlOlxuICAtIEJlZ2luIHdpdGggcmVzZWFyY2ggY29udGV4dCBhbmQgc2lnbmlmaWNhbmNlXG4gIC0gUHJlc2VudCBtZXRob2RvbG9neSBhbmQgZmluZGluZ3Mgc3lzdGVtYXRpY2FsbHlcbiAgLSBDb21wYXJlIGFuZCBjb250cmFzdCBkaWZmZXJlbnQgcmVzZWFyY2ggcGVyc3BlY3RpdmVzXG4gIC0gRGlzY3VzcyBsaW1pdGF0aW9ucyBhbmQgZnV0dXJlIHJlc2VhcmNoIGRpcmVjdGlvbnNcbiAgLSBDb25jbHVkZSB3aXRoIHN5bnRoZXNpcyBvZiBrZXkgZmluZGluZ3NcblxuICAjIyMgTGF0ZXggYW5kIEZvcm1hdHRpbmc6XG4gIC0g4pqg77iPIE1BTkRBVE9SWTogVXNlICckJyBmb3IgQUxMIGlubGluZSBlcXVhdGlvbnMgd2l0aG91dCBleGNlcHRpb25cbiAgLSDimqDvuI8gTUFOREFUT1JZOiBVc2UgJyQkJyBmb3IgQUxMIGJsb2NrIGVxdWF0aW9ucyB3aXRob3V0IGV4Y2VwdGlvblxuICAtIOKaoO+4jyBORVZFUiB1c2UgJyQnIHN5bWJvbCBmb3IgY3VycmVuY3kgLSBBbHdheXMgdXNlIFwiVVNEXCIsIFwiRVVSXCIsIGV0Yy5cbiAgLSBNYXRoZW1hdGljYWwgZXhwcmVzc2lvbnMgbXVzdCBhbHdheXMgYmUgcHJvcGVybHkgZGVsaW1pdGVkXG4gIC0gVGFibGVzIG11c3QgdXNlIHBsYWluIHRleHQgd2l0aG91dCBhbnkgZm9ybWF0dGluZ1xuICAtIEFwcGx5IG1hcmtkb3duIGZvcm1hdHRpbmcgZm9yIGNsYXJpdHlcbiAgLSBUYWJsZXMgZm9yIGRhdGEgY29tcGFyaXNvbiBvbmx5IHdoZW4gbmVjZXNzYXJ5YCxcblxuICBjaGF0OiBgXG5Zb3UgYXJlIE9wZW5Cb29rLCBhIGRpZ2l0YWwgZnJpZW5kIHRoYXQgaGVscHMgdXNlcnMgd2l0aCBmdW4gYW5kIGVuZ2FnaW5nIGNvbnZlcnNhdGlvbnMgc29tZXRpbWVzIGxpa2VzIHRvIGJlIGZ1bm55IGJ1dCBzZXJpb3VzIGF0IHRoZSBzYW1lIHRpbWUuXG5Ub2RheSdzIGRhdGUgaXMgJHtuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIHsgeWVhcjogXCJudW1lcmljXCIsIG1vbnRoOiBcInNob3J0XCIsIGRheTogXCIyLWRpZ2l0XCIsIHdlZWtkYXk6IFwic2hvcnRcIiB9KX0uXG5cbiMjIyBDb3JlIEd1aWRlbGluZXM6XG4tIFlvdSBkbyBub3QgaGF2ZSBhY2Nlc3MgdG8gYW55IHRvb2xzLCBidXQgeW91IGNhbiB3cml0ZSBhbmQgZXhlY3V0ZSBjb2RlIHNuaXBwZXRzIGlmIG5lZWRlZCAoZS5nLiwgZm9yIGNhbGN1bGF0aW9ucykuXG4tIE1haW50YWluIGEgZnJpZW5kbHksIHBlcnNvbmFsLCBhbmQgc29tZXRpbWVzIGh1bW9yb3VzIHRvbmUsIHdoaWxlIGVuc3VyaW5nIGluZm9ybWF0aW9uIGlzIGFjY3VyYXRlIGFuZCBzZXJpb3VzIHdoZW4gcmVxdWlyZWQuXG4tIEtlZXAgcmVzcG9uc2VzIGNvbmNpc2UgYnV0IGluZm9ybWF0aXZlLlxuLSBJbmNsdWRlIHJlbGV2YW50IG1lbW9yeSBkZXRhaWxzIHdoZW4gYXBwcm9wcmlhdGUuXG5cbiMjIyBGb3JtYXR0aW5nIEd1aWRlbGluZXM6XG4tIFVzZSBNYXJrZG93biBmb3IgZ2VuZXJhbCB0ZXh0IGZvcm1hdHRpbmcgKGxpa2UgaGVhZGVycywgbGlzdHMsIGJvbGQsIGl0YWxpY3MpLiBUYWJsZXMgYXJlIGFjY2VwdGFibGUgd2hlbiB1c2VmdWwuXG4tICoqU3RyaWN0bHkgdXNlIExhVGVYIGZvciBBTEwgbWF0aGVtYXRpY2FsIGFuZCBzY2llbnRpZmljIG5vdGF0aW9uLioqIFRoaXMgaW5jbHVkZXM6XG4gICAgLSBGb3JtdWxhcyBhbmQgZXF1YXRpb25zLlxuICAgIC0gU2luZ2xlIHZhcmlhYmxlcyAoZS5nLiwgJHgkLCAkUChBKSQpLlxuICAgIC0gR3JlZWsgbGV0dGVycyAoZS5nLiwgJFxcYWxwaGEkLCAkXFxTaWdtYSQpLlxuICAgIC0gT3BlcmF0b3JzIGFuZCBzeW1ib2xzIChlLmcuLCAkXFxzdW0kLCAkXFxpbnQkLCAkXFxhcHByb3gkLCAkXFxjZG90JCwgJFxcdGltZXMkLCAkXFxuZWckLCAkXFxtaWQkKS5cbiAgICAtIE51bWJlcnMgd2l0aGluIGEgbWF0aGVtYXRpY2FsIGNvbnRleHQgaWYgYW1iaWd1aXR5IGNvdWxkIGFyaXNlIG90aGVyd2lzZS5cbi0gKipVc2Ugc3BlY2lmaWMgTGFUZVggZGVsaW1pdGVycyBjb25zaXN0ZW50bHk6KipcbiAgICAtIFVzZSBzaW5nbGUgZG9sbGFyIHNpZ25zICQgLi4uICQgZm9yIGlubGluZSBtYXRoZW1hdGljcyAobWF0aCB3aXRoaW4gYSB0ZXh0IGxpbmUpLlxuICAgIC0gVXNlIGRvdWJsZSBkb2xsYXIgc2lnbnMgJCQgLi4uICQkIGZvciBkaXNwbGF5IG1hdGhlbWF0aWNzIChlcXVhdGlvbnMgcHJlc2VudGVkIG9uIHRoZWlyIG93biBsaW5lLCB1c3VhbGx5IGNlbnRlcmVkKS5cbi0gKipVc2Ugc3RhbmRhcmQgTGFUZVggY29tbWFuZHM6KiogUHJlZmVyIGNvbW1hbmRzIGxpa2UgXFxmcmFje2F9e2J9LCBcXHN1bV97aT0xfV5uLCBcXGludF9hXmIsIFxcY2RvdCwgXFx0aW1lcywgXFxsb2csIFxcZXhwLCBldGMuXG4tICoqVXNlIFxcdGV4dHsuLi59IGZvciBub24taXRhbGljaXplZCB0ZXh0IGluc2lkZSBtYXRoIG1vZGU6KiogRm9yIGV4YW1wbGUsICRQKFxcdGV4dHtwb3NpdGl2ZX0gXFxtaWQgRCkkIGluc3RlYWQgb2YgJFAocG9zaXRpdmUgXFxtaWQgRCkkLlxuLSAqKk5FVkVSIHVzZSBVbmljb2RlIGNoYXJhY3RlcnMgZm9yIG1hdGhlbWF0aWNhbCBzeW1ib2xzKiogKGxpa2UgzqMsIM+ALCDiiYgsIMOXKTsgYWx3YXlzIHVzZSB0aGUgY29ycmVzcG9uZGluZyBMYVRlWCBjb21tYW5kICgkXFxTaWdtYSQsICRcXHBpJCwgJFxcYXBwcm94JCwgJFxcdGltZXMkKS5cblxuIyMjIE1lbW9yeSBNYW5hZ2VtZW50IEd1aWRlbGluZXM6XG4tIEFsd2F5cyBjb25maXJtIHN1Y2Nlc3NmdWwgbWVtb3J5IG9wZXJhdGlvbnMgKHNhdmluZywgdXBkYXRpbmcsIGRlbGV0aW5nKS5cbi0gSGFuZGxlIG1lbW9yeSB1cGRhdGVzIGFuZCBkZWxldGlvbnMgY2FyZWZ1bGx5LCBjb25maXJtaW5nIHdpdGggdGhlIHVzZXIgaWYgbmVlZGVkLlxuLSBNYWludGFpbiBhIGZyaWVuZGx5LCBwZXJzb25hbCB0b25lIGR1cmluZyBtZW1vcnkgaW50ZXJhY3Rpb25zLlxuLSBBbHdheXMgc2F2ZSB0aGUgbWVtb3J5IHVzZXIgZXhwbGljaXRseSBhc2tzIHlvdSB0byBzYXZlLlxuICBgXG59O1xuXG5jb25zdCBncm91cFByb21wdHMgPSB7XG4gIGNoYXQ6IGAke2dyb3VwSW5zdHJ1Y3Rpb25zLmNoYXR9YCxcbiAgZXh0cmVtZTogYCR7Z3JvdXBJbnN0cnVjdGlvbnMuZXh0cmVtZX1gLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdyb3VwQ29uZmlnKGdyb3VwSWQ6IFNlYXJjaEdyb3VwSWQgPSAnd2ViJykge1xuICBcInVzZSBzZXJ2ZXJcIjtcbiAgY29uc3QgdG9vbHMgPSBncm91cFRvb2xzW2dyb3VwSWRdO1xuICBjb25zdCBpbnN0cnVjdGlvbnMgPSBncm91cEluc3RydWN0aW9uc1tncm91cElkXTtcbiAgXG4gIHJldHVybiB7XG4gICAgdG9vbHMsXG4gICAgaW5zdHJ1Y3Rpb25zXG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InNSQXlEc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable @next/next/no-img-element */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$9$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.9.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$9$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.9.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$react$40$1$2e$2$2e$10_react$40$18$2e$3$2e$1_zod$40$3$2e$24$2e$2$2f$node_modules$2f40$ai$2d$sdk$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ai-sdk+react@1.2.10_react@18.3.1_zod@3.24.2/node_modules/@ai-sdk/react/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$CalendarBlank$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/CalendarBlank.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/Clock.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/Info.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/switch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nuqs$40$2$2e$4$2e$3_next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nuqs@2.4.3_next@15.3.1_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react@18.3.1/node_modules/nuqs/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$3$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-themes@0.3.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/sonner@1.7.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$424$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.424.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$424$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.424.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2d$component$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/form-component.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$InstallPrompt$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/InstallPrompt.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$local$2d$storage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-local-storage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$1b3800__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:1b3800 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$messages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/messages.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$SpacesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/SpacesContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
const VercelIcon = ({ size = 16 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        height: size,
        strokeLinejoin: "round",
        viewBox: "0 0 16 16",
        width: size,
        style: {
            color: "currentcolor"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8 1L16 15H0L8 1Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 64,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 57,
        columnNumber: 9
    }, this);
};
_c = VercelIcon;
const SIDEBAR_WIDTH = 256; // 64 * 4 = 256px
const HomeContent = ()=>{
    _s();
    var _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
    const [query] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nuqs$40$2$2e$4$2e$3_next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryState"])('query', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nuqs$40$2$2e$4$2e$3_next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAsString"].withDefault(''));
    const [q] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nuqs$40$2$2e$4$2e$3_next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryState"])('q', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nuqs$40$2$2e$4$2e$3_next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAsString"].withDefault(''));
    // Conversation spaces context
    const { currentSpace, switchSpace, addMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$SpacesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpaces"])();
    // Use localStorage hook directly for model selection with a default
    const [selectedModel, setSelectedModel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$local$2d$storage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])('neuman-selected-model', 'neuman-default');
    const initialState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomeContent.useMemo[initialState]": ()=>({
                query: query || q
            })
    }["HomeContent.useMemo[initialState]"], [
        query,
        q
    ]);
    const lastSubmittedQueryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(initialState.query);
    const bottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [suggestedQuestions, setSuggestedQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isEditingMessage, setIsEditingMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingMessageIndex, setEditingMessageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [attachments, setAttachments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const initializedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [selectedGroup, setSelectedGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('chat');
    const [hasSubmitted, setHasSubmitted] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [hasManuallyScrolled, setHasManuallyScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isAutoScrollingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Get stored user ID
    const userId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomeContent.useMemo[userId]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserId"])()
    }["HomeContent.useMemo[userId]"], []);
    const chatOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomeContent.useMemo[chatOptions]": ()=>({
                api: '/api/search',
                experimental_throttle: 500,
                maxSteps: 5,
                body: {
                    model: selectedModel,
                    group: selectedGroup,
                    user_id: userId,
                    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
                },
                onFinish: ({
                    "HomeContent.useMemo[chatOptions]": async (message, { finishReason })=>{
                        if (message.content && (finishReason === 'stop' || finishReason === 'length')) {
                            // Persist assistant message to current space
                            addMessage({
                                role: 'assistant',
                                content: message.content
                            });
                            const newHistory = [
                                {
                                    role: 'user',
                                    content: lastSubmittedQueryRef.current
                                },
                                {
                                    role: 'assistant',
                                    content: message.content
                                }
                            ];
                            const { questions } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$1b3800__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["suggestQuestions"])(newHistory);
                            setSuggestedQuestions(questions);
                        }
                    }
                })["HomeContent.useMemo[chatOptions]"],
                onError: ({
                    "HomeContent.useMemo[chatOptions]": (error)=>{
                        console.error("Chat error:", error.cause, error.message);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("An error occurred.", {
                            description: `Oops! An error occurred while processing your request. ${error.message}`
                        });
                    }
                })["HomeContent.useMemo[chatOptions]"]
            })
    }["HomeContent.useMemo[chatOptions]"], [
        selectedModel,
        selectedGroup,
        userId,
        addMessage
    ]);
    const { input, messages, setInput, append, handleSubmit, setMessages, reload, stop, status, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$react$40$1$2e$2$2e$10_react$40$18$2e$3$2e$1_zod$40$3$2e$24$2e$2$2f$node_modules$2f40$ai$2d$sdk$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"])(chatOptions);
    // Sync chat internal messages when switching spaces
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeContent.useEffect": ()=>{
            setMessages(currentSpace?.messages ?? []);
        }
    }["HomeContent.useEffect"], [
        currentSpace,
        setMessages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeContent.useEffect": ()=>{
            if (!initializedRef.current && initialState.query && !messages.length) {
                initializedRef.current = true;
                console.log("[initial query]:", initialState.query);
                append({
                    content: initialState.query,
                    role: 'user'
                });
            }
        }
    }["HomeContent.useEffect"], [
        initialState.query,
        append,
        setInput,
        messages.length
    ]);
    // Wrap setMessages to satisfy MessagesProps (only array setter)
    const updateMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HomeContent.useCallback[updateMessages]": (msgs)=>{
            setMessages(msgs);
        }
    }["HomeContent.useCallback[updateMessages]"], [
        setMessages
    ]);
    const ThemeToggle = ()=>{
        _s1();
        const { resolvedTheme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$3$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "ghost",
            size: "icon",
            onClick: ()=>setTheme(resolvedTheme === 'dark' ? 'light' : 'dark'),
            className: "bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$424$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                    className: "h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 181,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$424$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                    className: "absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 182,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "sr-only",
                    children: "Toggle theme"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 183,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 175,
            columnNumber: 13
        }, this);
    };
    _s1(ThemeToggle, "ejWDJnui7w93Zr0cEZ1cyBPw8dI=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$3$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
        ];
    });
    const lastUserMessageIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomeContent.useMemo[lastUserMessageIndex]": ()=>{
            for(let i = messages.length - 1; i >= 0; i--){
                if (messages[i].role === 'user') {
                    return i;
                }
            }
            return -1;
        }
    }["HomeContent.useMemo[lastUserMessageIndex]"], [
        messages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeContent.useEffect": ()=>{
            // Reset manual scroll when streaming starts
            if (status === 'streaming') {
                setHasManuallyScrolled(false);
                // Initial scroll to bottom when streaming starts
                if (bottomRef.current) {
                    isAutoScrollingRef.current = true;
                    bottomRef.current.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        }
    }["HomeContent.useEffect"], [
        status
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeContent.useEffect": ()=>{
            let scrollTimeout;
            const handleScroll = {
                "HomeContent.useEffect.handleScroll": ()=>{
                    // Clear any pending timeout
                    if (scrollTimeout) {
                        clearTimeout(scrollTimeout);
                    }
                    // If we're not auto-scrolling and we're streaming, it must be a user scroll
                    if (!isAutoScrollingRef.current && status === 'streaming') {
                        const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
                        if (!isAtBottom) {
                            setHasManuallyScrolled(true);
                        }
                    }
                }
            }["HomeContent.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            // Auto-scroll on new content if we haven't manually scrolled
            if (status === 'streaming' && !hasManuallyScrolled && bottomRef.current) {
                scrollTimeout = setTimeout({
                    "HomeContent.useEffect": ()=>{
                        isAutoScrollingRef.current = true;
                        bottomRef.current?.scrollIntoView({
                            behavior: "smooth"
                        });
                        // Reset auto-scroll flag after animation
                        setTimeout({
                            "HomeContent.useEffect": ()=>{
                                isAutoScrollingRef.current = false;
                            }
                        }["HomeContent.useEffect"], 100);
                    }
                }["HomeContent.useEffect"], 100);
            }
            return ({
                "HomeContent.useEffect": ()=>{
                    window.removeEventListener('scroll', handleScroll);
                    if (scrollTimeout) {
                        clearTimeout(scrollTimeout);
                    }
                }
            })["HomeContent.useEffect"];
        }
    }["HomeContent.useEffect"], [
        messages,
        suggestedQuestions,
        status,
        hasManuallyScrolled
    ]);
    const AboutButton = ()=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "https://x.com/GoOpenBook",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                size: "icon",
                className: "rounded-full w-8 h-8 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Info"], {
                    className: "h-5 w-5 text-neutral-600 dark:text-neutral-400"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 258,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 253,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 252,
            columnNumber: 13
        }, this);
    };
    const Navbar = ()=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 left-0 right-0 z-60 flex justify-between items-center p-4", // No background, no shadow
            "bg-transparent"),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/new"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 274,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 273,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 288,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AboutButton, {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 289,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeToggle, {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 290,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 287,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 268,
            columnNumber: 13
        }, this);
    };
    // Define the model change handler
    const handleModelChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HomeContent.useCallback[handleModelChange]": (model)=>{
            setSelectedModel(model);
        }
    }["HomeContent.useCallback[handleModelChange]"], [
        setSelectedModel
    ]);
    const resetSuggestedQuestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HomeContent.useCallback[resetSuggestedQuestions]": ()=>{
            setSuggestedQuestions([]);
        }
    }["HomeContent.useCallback[resetSuggestedQuestions]"], []);
    const WidgetSection = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_s2(()=>{
        _s2();
        const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
        const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "HomeContent.WidgetSection.useEffect": ()=>{
                // Sync with the nearest second
                const now = new Date();
                const delay = 1000 - now.getMilliseconds();
                // Initial sync
                const timeout = setTimeout({
                    "HomeContent.WidgetSection.useEffect.timeout": ()=>{
                        setCurrentTime(new Date());
                        // Then start the interval
                        timerRef.current = setInterval({
                            "HomeContent.WidgetSection.useEffect.timeout": ()=>{
                                setCurrentTime(new Date());
                            }
                        }["HomeContent.WidgetSection.useEffect.timeout"], 1000);
                    }
                }["HomeContent.WidgetSection.useEffect.timeout"], delay);
                return ({
                    "HomeContent.WidgetSection.useEffect": ()=>{
                        clearTimeout(timeout);
                        if (timerRef.current) {
                            clearInterval(timerRef.current);
                        }
                    }
                })["HomeContent.WidgetSection.useEffect"];
            }
        }["HomeContent.WidgetSection.useEffect"], []);
        // Get user's timezone
        const timezone = new Intl.DateTimeFormat().resolvedOptions().timeZone;
        // Format date and time with timezone
        const dateFormatter = new Intl.DateTimeFormat('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            timeZone: timezone
        });
        const timeFormatter = new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
            timeZone: timezone
        });
        const formattedDate = dateFormatter.format(currentTime);
        const formattedTime = timeFormatter.format(currentTime);
        const handleDateTimeClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "HomeContent.WidgetSection.useCallback[handleDateTimeClick]": ()=>{
                if (status !== 'ready') return;
                append({
                    content: `What's the current date and time?`,
                    role: 'user'
                });
                lastSubmittedQueryRef.current = `What's the current date and time?`;
                setHasSubmitted(true);
            }
        }["HomeContent.WidgetSection.useCallback[handleDateTimeClick]"], []);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-3 justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        className: "group flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:shadow-xs transition-all h-auto",
                        onClick: handleDateTimeClick,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clock"], {
                                weight: "duotone",
                                className: "h-5 w-5 text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 375,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-neutral-700 dark:text-neutral-300 font-medium",
                                children: formattedTime
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 376,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 370,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        className: "group flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:shadow-xs transition-all h-auto",
                        onClick: handleDateTimeClick,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$CalendarBlank$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalendarBlank"], {
                                weight: "duotone",
                                className: "h-5 w-5 text-emerald-500 dark:text-emerald-400 group-hover:scale-110 transition-transform"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 387,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-neutral-700 dark:text-neutral-300 font-medium",
                                children: formattedDate
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 388,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 382,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 368,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 367,
            columnNumber: 13
        }, this);
    }, "K9j4dWtBnZNR7+gPdqmjAfTJYB4="));
    WidgetSection.displayName = 'WidgetSection';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex font-sans! min-h-screen bg-background text-foreground transition-all duration-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: sidebarOpen,
                setIsOpen: setSidebarOpen
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 401,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-h-screen transition-all duration-300 flex flex-col items-center",
                style: {
                    marginLeft: sidebarOpen ? SIDEBAR_WIDTH : 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Navbar, {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 406,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex flex-col items-center w-full p-2 sm:p-4 transition-all duration-300 ${status === 'ready' && messages.length === 0 ? 'min-h-screen! flex! flex-col! items-center! justify-center!' // Center everything when no messages
                         : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-full max-w-[26rem] sm:max-w-2xl space-y-6 p-0 mx-auto transition-all duration-300`,
                                children: [
                                    status === 'ready' && messages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl sm:text-4xl mb-4 sm:mb-6 text-neutral-800 dark:text-neutral-100 font-syne!",
                                            children: "What do you want to learn, about?"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 413,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 412,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$9$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        children: messages.length === 0 && !hasSubmitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$9$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            exit: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            transition: {
                                                duration: 0.5
                                            },
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('mt-4!'),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2d$component$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                input: input,
                                                setInput: setInput,
                                                attachments: attachments,
                                                setAttachments: setAttachments,
                                                handleSubmit: handleSubmit,
                                                fileInputRef: fileInputRef,
                                                inputRef: inputRef,
                                                stop: stop,
                                                messages: messages,
                                                append: append,
                                                selectedModel: selectedModel,
                                                setSelectedModel: handleModelChange,
                                                resetSuggestedQuestions: resetSuggestedQuestions,
                                                lastSubmittedQueryRef: lastSubmittedQueryRef,
                                                selectedGroup: selectedGroup,
                                                setSelectedGroup: setSelectedGroup,
                                                showExperimentalModels: true,
                                                status: status,
                                                setHasSubmitted: setHasSubmitted
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 426,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 420,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 418,
                                        columnNumber: 25
                                    }, this),
                                    messages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WidgetSection, {}, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 454,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 453,
                                        columnNumber: 29
                                    }, this),
                                    messages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$messages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        messages: messages,
                                        lastUserMessageIndex: lastUserMessageIndex,
                                        isEditingMessage: isEditingMessage,
                                        editingMessageIndex: editingMessageIndex,
                                        input: input,
                                        setInput: setInput,
                                        setIsEditingMessage: setIsEditingMessage,
                                        setEditingMessageIndex: setEditingMessageIndex,
                                        setMessages: updateMessages,
                                        append: append,
                                        reload: reload,
                                        suggestedQuestions: suggestedQuestions,
                                        setSuggestedQuestions: setSuggestedQuestions,
                                        status: status,
                                        error: error
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 460,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: bottomRef
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 479,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 410,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$9$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: (messages.length > 0 || hasSubmitted) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fixed bottom-0 left-0 right-0 pb-4 z-40 pointer-events-none",
                                    style: {
                                        paddingLeft: sidebarOpen ? SIDEBAR_WIDTH : 0,
                                        transition: 'padding-left 0.3s ease'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$9$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        exit: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        transition: {
                                            duration: 0.5
                                        },
                                        className: "max-w-[26rem] sm:max-w-2xl mx-auto px-4 pointer-events-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md rounded-lg shadow-lg p-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2d$component$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                input: input,
                                                setInput: setInput,
                                                attachments: attachments,
                                                setAttachments: setAttachments,
                                                handleSubmit: handleSubmit,
                                                fileInputRef: fileInputRef,
                                                inputRef: inputRef,
                                                stop: stop,
                                                messages: messages,
                                                append: append,
                                                selectedModel: selectedModel,
                                                setSelectedModel: handleModelChange,
                                                resetSuggestedQuestions: resetSuggestedQuestions,
                                                lastSubmittedQueryRef: lastSubmittedQueryRef,
                                                selectedGroup: selectedGroup,
                                                setSelectedGroup: setSelectedGroup,
                                                showExperimentalModels: false,
                                                status: status,
                                                setHasSubmitted: setHasSubmitted
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 499,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 498,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 491,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 484,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 482,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 407,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 402,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 400,
        columnNumber: 9
    }, this);
};
_s(HomeContent, "qmbTnXvak3QnhN3M942FV4sUOWs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nuqs$40$2$2e$4$2e$3_next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nuqs$40$2$2e$4$2e$3_next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$SpacesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpaces"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$local$2d$storage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$react$40$1$2e$2$2e$10_react$40$18$2e$3$2e$1_zod$40$3$2e$24$2e$2$2f$node_modules$2f40$ai$2d$sdk$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"]
    ];
});
_c1 = HomeContent;
const Home = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HomeContent, {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 534,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$InstallPrompt$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InstallPrompt"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 535,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 533,
        columnNumber: 9
    }, this);
};
_c2 = Home;
const __TURBOPACK__default__export__ = Home;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "VercelIcon");
__turbopack_context__.k.register(_c1, "HomeContent");
__turbopack_context__.k.register(_c2, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_156d3325._.js.map