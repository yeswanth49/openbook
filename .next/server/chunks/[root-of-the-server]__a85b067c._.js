module.exports = {

"[project]/.next-internal/server/app/api/search/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/env/server.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// https://env.t3.gg/docs/nextjs#create-your-schema
__turbopack_context__.s({
    "serverEnv": (()=>serverEnv)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$t3$2d$oss$2b$env$2d$nextjs$40$0$2e$12$2e$0_typescript$40$5$2e$8$2e$2_zod$40$3$2e$24$2e$2$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@t3-oss+env-nextjs@0.12.0_typescript@5.8.2_zod@3.24.2/node_modules/@t3-oss/env-nextjs/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@3.24.2/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
;
;
const serverEnv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$t3$2d$oss$2b$env$2d$nextjs$40$0$2e$12$2e$0_typescript$40$5$2e$8$2e$2_zod$40$3$2e$24$2e$2$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createEnv"])({
    server: {
        XAI_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(1).optional(),
        COHERE_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(1).optional(),
        MISTRAL_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(1).optional(),
        CEREBRAS_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(1).optional(),
        GROQ_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(1).optional(),
        E2B_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(1).optional(),
        ELEVENLABS_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(1).optional(),
        TAVILY_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(1).optional(),
        EXA_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(1).optional(),
        TMDB_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(1).optional(),
        YT_ENDPOINT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(1).optional(),
        FIRECRAWL_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(1).optional(),
        OPENWEATHER_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(1).optional(),
        SANDBOX_TEMPLATE_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(1).optional(),
        GOOGLE_MAPS_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(1).optional(),
        MAPBOX_ACCESS_TOKEN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(1).optional(),
        TRIPADVISOR_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(1).optional(),
        AVIATION_STACK_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(1).optional(),
        CRON_SECRET: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(1).optional(),
        BLOB_READ_WRITE_TOKEN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(1).optional(),
        MEM0_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(1).optional(),
        MEM0_ORG_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(1).optional(),
        MEM0_PROJECT_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(1).optional(),
        SMITHERY_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(1).optional()
    },
    experimental__runtimeEnv: process.env
});
}}),
"[project]/app/actions.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// app/actions.ts
/* __next_internal_action_entry_do_not_use__ [{"40031499097e0a178cf297f1fb36acb13e2c14062f":"fetchMetadata","4074b2490eb8ac058e06b7b49473105d2e74460fa7":"generateSpeech","407f174127f1a86d145d3f1cc18fcd5d2ba201651c":"getGroupConfig","40ff4563937cc6e23810c80731a89afeb9a3dd8973":"suggestQuestions"},"",""] */ __turbopack_context__.s({
    "fetchMetadata": (()=>fetchMetadata),
    "generateSpeech": (()=>generateSpeech),
    "getGroupConfig": (()=>getGroupConfig),
    "suggestQuestions": (()=>suggestQuestions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/app-render/encryption.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$env$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/env/server.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$openai$40$1$2e$3$2e$21_zod$40$3$2e$24$2e$2$2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ai-sdk+openai@1.3.21_zod@3.24.2/node_modules/@ai-sdk/openai/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$4$2e$3$2e$12_react$40$18$2e$3$2e$1_zod$40$3$2e$24$2e$2$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ai@4.3.12_react@18.3.1_zod@3.24.2/node_modules/ai/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@3.24.2/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-route] (ecmascript)");
;
;
;
;
;
;
async function suggestQuestions(history) {
    console.log(history);
    const { object } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$4$2e$3$2e$12_react$40$18$2e$3$2e$1_zod$40$3$2e$24$2e$2$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateObject"])({
        model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$openai$40$1$2e$3$2e$21_zod$40$3$2e$24$2e$2$2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["openai"])("gpt-4o-mini"),
        temperature: 0,
        maxTokens: 300,
        topP: 0.3,
        topK: 7,
        system: `You are a search engine query/questions generator. You MUST create EXACTLY 3 questions for the search engine based on the message history.

### Question Generation Guidelines:
- Create exactly 3 questions that are open-ended and encourage further discussion
- Questions must be concise (5-10 words each) but specific and contextually relevant
- Each question must contain specific nouns, entities, or clear context markers
- NEVER use pronouns (he, she, him, his, her, etc.) - always use proper nouns from the context
- Questions must be related to tools available in the system
- Questions should flow naturally from previous conversation

### Tool-Specific Question Types:
- Academic: Focus on scholarly topics, research questions, or educational content
### Context Transformation Rules:
- For programming conversations → Generate questions about algorithms, data structures, or code optimization
- For mathematical queries → Generate questions about related applications or theoretical concepts

### Formatting Requirements:
- No bullet points, numbering, or prefixes
- No quotation marks around questions
- Each question must be grammatically complete
- Each question must end with a question mark
- Questions must be diverse and not redundant
- Do not include instructions or meta-commentary in the questions`,
        messages: history,
        schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
            questions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()).describe('The generated questions based on the message history.')
        })
    });
    return {
        questions: object.questions
    };
}
const ELEVENLABS_API_KEY = __TURBOPACK__imported__module__$5b$project$5d2f$env$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serverEnv"].ELEVENLABS_API_KEY;
async function generateSpeech(text) {
    const VOICE_ID = 'JBFqnCBsd6RMkjVDRZzb' // This is the ID for the "George" voice. Replace with your preferred voice ID.
    ;
    const url = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`;
    const method = 'POST';
    if (!ELEVENLABS_API_KEY) {
        throw new Error('ELEVENLABS_API_KEY is not defined');
    }
    const headers = {
        Accept: 'audio/mpeg',
        'xi-api-key': ELEVENLABS_API_KEY,
        'Content-Type': 'application/json'
    };
    const data = {
        text,
        model_id: 'eleven_turbo_v2_5',
        voice_settings: {
            stability: 0.5,
            similarity_boost: 0.5
        }
    };
    const body = JSON.stringify(data);
    const input = {
        method,
        headers,
        body
    };
    const response = await fetch(url, input);
    const arrayBuffer = await response.arrayBuffer();
    const base64Audio = Buffer.from(arrayBuffer).toString('base64');
    return {
        audio: `data:audio/mp3;base64,${base64Audio}`
    };
}
async function fetchMetadata(url) {
    try {
        const response = await fetch(url, {
            next: {
                revalidate: 3600
            }
        }); // Cache for 1 hour
        const html = await response.text();
        const titleMatch = html.match(/<title>(.*?)<\/title>/i);
        const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
        const title = titleMatch ? titleMatch[1] : '';
        const description = descMatch ? descMatch[1] : '';
        return {
            title,
            description
        };
    } catch (error) {
        console.error('Error fetching metadata:', error);
        return null;
    }
}
const groupTools = {
    chat: [],
    web: [],
    extreme: [
        'code_interpreter',
        'reason_search',
        'academic_search',
        'datetime'
    ]
};
const groupInstructions = {
    extreme: `
  ⚠️ CRITICAL: YOU MUST RUN THE ACADEMIC_SEARCH TOOL FIRST BEFORE ANY ANALYSIS OR RESPONSE!
  You are an academic research assistant that helps find and analyze scholarly content.
  The current date is ${new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
        weekday: "short"
    })}.

  ### Tool Guidelines:
  #### Academic Search Tool:
  1. FIRST ACTION: Run academic_search tool with user's query immediately
  2. DO NOT write any analysis before running the tool
  3. Focus on peer-reviewed papers and academic sources
  
  #### Code Interpreter Tool:
  - Use for calculations and data analysis
  - Include necessary library imports
  - Only use after academic search when needed
  
  #### datetime tool:
  - Only use when explicitly asked about time/date
  - Format timezone appropriately for user
  - No citations needed for datetime info

  ### Response Guidelines (ONLY AFTER TOOL EXECUTION):
  - Write in academic prose - no bullet points, lists, or references sections
  - Structure content with clear sections using headings and tables as needed
  - Focus on synthesizing information from multiple sources
  - Maintain scholarly tone throughout
  - Provide comprehensive analysis of findings
  - All citations must be inline, placed immediately after the relevant information. Do not group citations at the end or in any references/bibliography section.

  ### Citation Requirements:
  - ⚠️ MANDATORY: Every academic claim must have a citation
  - Citations MUST be placed immediately after the sentence containing the information
  - NEVER group citations at the end of paragraphs or sections
  - Format: [Author et al. (Year) Title](URL)
  - Multiple citations needed for complex claims (format: [Source 1](URL1) [Source 2](URL2))
  - Cite methodology and key findings separately
  - Always cite primary sources when available
  - For direct quotes, use format: [Author (Year), p.X](URL)
  - Include DOI when available: [Author et al. (Year) Title](DOI URL)
  - When citing review papers, indicate: [Author et al. (Year) "Review:"](URL)
  - Meta-analyses must be clearly marked: [Author et al. (Year) "Meta-analysis:"](URL)
  - Systematic reviews format: [Author et al. (Year) "Systematic Review:"](URL)
  - Pre-prints must be labeled: [Author et al. (Year) "Preprint:"](URL)

  ### Content Structure:
  - Begin with research context and significance
  - Present methodology and findings systematically
  - Compare and contrast different research perspectives
  - Discuss limitations and future research directions
  - Conclude with synthesis of key findings

  ### Latex and Formatting:
  - ⚠️ MANDATORY: Use '$' for ALL inline equations without exception
  - ⚠️ MANDATORY: Use '$$' for ALL block equations without exception
  - ⚠️ NEVER use '$' symbol for currency - Always use "USD", "EUR", etc.
  - Mathematical expressions must always be properly delimited
  - Tables must use plain text without any formatting
  - Apply markdown formatting for clarity
  - Tables for data comparison only when necessary`,
    chat: `
You are OpenBook, a digital friend that helps users with fun and engaging conversations sometimes likes to be funny but serious at the same time.
Today's date is ${new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
        weekday: "short"
    })}.

### Core Guidelines:
- You do not have access to any tools, but you can write and execute code snippets if needed (e.g., for calculations).
- Maintain a friendly, personal, and sometimes humorous tone, while ensuring information is accurate and serious when required.
- Keep responses concise but informative.
- Include relevant memory details when appropriate.

### Formatting Guidelines:
- Use Markdown for general text formatting (like headers, lists, bold, italics). Tables are acceptable when useful.
- **Strictly use LaTeX for ALL mathematical and scientific notation.** This includes:
    - Formulas and equations.
    - Single variables (e.g., $x$, $P(A)$).
    - Greek letters (e.g., $\alpha$, $\Sigma$).
    - Operators and symbols (e.g., $\sum$, $\int$, $\approx$, $\cdot$, $\times$, $\neg$, $\mid$).
    - Numbers within a mathematical context if ambiguity could arise otherwise.
- **Use specific LaTeX delimiters consistently:**
    - Use single dollar signs $ ... $ for inline mathematics (math within a text line).
    - Use double dollar signs $$ ... $$ for display mathematics (equations presented on their own line, usually centered).
- **Use standard LaTeX commands:** Prefer commands like \frac{a}{b}, \sum_{i=1}^n, \int_a^b, \cdot, \times, \log, \exp, etc.
- **Use \text{...} for non-italicized text inside math mode:** For example, $P(\text{positive} \mid D)$ instead of $P(positive \mid D)$.
- **NEVER use Unicode characters for mathematical symbols** (like Σ, π, ≈, ×); always use the corresponding LaTeX command ($\Sigma$, $\pi$, $\approx$, $\times$).

### Memory Management Guidelines:
- Always confirm successful memory operations (saving, updating, deleting).
- Handle memory updates and deletions carefully, confirming with the user if needed.
- Maintain a friendly, personal tone during memory interactions.
- Always save the memory user explicitly asks you to save.
  `
};
const groupPrompts = {
    chat: `${groupInstructions.chat}`,
    extreme: `${groupInstructions.extreme}`
};
async function getGroupConfig(groupId = 'web') {
    const tools = groupTools[groupId];
    const instructions = groupInstructions[groupId];
    return {
        tools,
        instructions
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    suggestQuestions,
    generateSpeech,
    fetchMetadata,
    getGroupConfig
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(suggestQuestions, "40ff4563937cc6e23810c80731a89afeb9a3dd8973", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(generateSpeech, "4074b2490eb8ac058e06b7b49473105d2e74460fa7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(fetchMetadata, "40031499097e0a178cf297f1fb36acb13e2c14062f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getGroupConfig, "407f174127f1a86d145d3f1cc18fcd5d2ba201651c", null);
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/net [external] (net, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}}),
"[externals]/tls [external] (tls, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}}),
"[externals]/punycode [external] (punycode, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}}),
"[externals]/buffer [external] (buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}}),
"[externals]/string_decoder [external] (string_decoder, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("string_decoder", () => require("string_decoder"));

module.exports = mod;
}}),
"[project]/app/api/search/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// @ts-nocheck
// /app/api/search/route.ts
__turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$env$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/env/server.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$xai$40$1$2e$2$2e$15_zod$40$3$2e$24$2e$2$2f$node_modules$2f40$ai$2d$sdk$2f$xai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ai-sdk+xai@1.2.15_zod@3.24.2/node_modules/@ai-sdk/xai/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$groq$40$1$2e$2$2e$8_zod$40$3$2e$24$2e$2$2f$node_modules$2f40$ai$2d$sdk$2f$groq$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ai-sdk+groq@1.2.8_zod@3.24.2/node_modules/@ai-sdk/groq/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$google$40$1$2e$2$2e$14_zod$40$3$2e$24$2e$2$2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ai-sdk+google@1.2.14_zod@3.24.2/node_modules/@ai-sdk/google/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$openai$40$1$2e$3$2e$21_zod$40$3$2e$24$2e$2$2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ai-sdk+openai@1.3.21_zod@3.24.2/node_modules/@ai-sdk/openai/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$anthropic$40$1$2e$2$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f40$ai$2d$sdk$2f$anthropic$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ai-sdk+anthropic@1.2.10_zod@3.24.2/node_modules/@ai-sdk/anthropic/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tavily$2b$core$40$0$2e$5$2e$1$2f$node_modules$2f40$tavily$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tavily+core@0.5.1/node_modules/@tavily/core/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$4$2e$3$2e$12_react$40$18$2e$3$2e$1_zod$40$3$2e$24$2e$2$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ai@4.3.12_react@18.3.1_zod@3.24.2/node_modules/ai/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$exa$2d$js$40$1$2e$6$2e$13_encoding$40$0$2e$1$2e$13$2f$node_modules$2f$exa$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/exa-js@1.6.13_encoding@0.1.13/node_modules/exa-js/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@3.24.2/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
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
// Removed MemoryClient import as memory_manager tool is removed.
// Removed CURRENCY_SYMBOLS constant
const middleware = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$4$2e$3$2e$12_react$40$18$2e$3$2e$1_zod$40$3$2e$24$2e$2$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["extractReasoningMiddleware"])({
    tagName: 'think'
});
const neuman = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$4$2e$3$2e$12_react$40$18$2e$3$2e$1_zod$40$3$2e$24$2e$2$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["customProvider"])({
    languageModels: {
        'neuman-default': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$openai$40$1$2e$3$2e$21_zod$40$3$2e$24$2e$2$2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["openai"])('o4-mini-2025-04-16'),
        'neuman-grok-3': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$xai$40$1$2e$2$2e$15_zod$40$3$2e$24$2e$2$2f$node_modules$2f40$ai$2d$sdk$2f$xai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["xai"])('grok-3-fast-beta'),
        'neuman-vision': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$xai$40$1$2e$2$2e$15_zod$40$3$2e$24$2e$2$2f$node_modules$2f40$ai$2d$sdk$2f$xai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["xai"])('grok-2-vision-1212'),
        'neuman-4o': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$openai$40$1$2e$3$2e$21_zod$40$3$2e$24$2e$2$2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["openai"])('gpt-4o', {
            structuredOutputs: true
        }),
        'neuman-4.1-nano': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$openai$40$1$2e$3$2e$21_zod$40$3$2e$24$2e$2$2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["openai"])('gpt-4.1-nano', {}),
        'neuman-o4-mini': __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$openai$40$1$2e$3$2e$21_zod$40$3$2e$24$2e$2$2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["openai"].responses('o4-mini-2025-04-16'),
        'neuman-qwq': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$4$2e$3$2e$12_react$40$18$2e$3$2e$1_zod$40$3$2e$24$2e$2$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["wrapLanguageModel"])({
            model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$groq$40$1$2e$2$2e$8_zod$40$3$2e$24$2e$2$2f$node_modules$2f40$ai$2d$sdk$2f$groq$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["groq"])('qwen-qwq-32b'),
            middleware
        }),
        'neuman-google': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$google$40$1$2e$2$2e$14_zod$40$3$2e$24$2e$2$2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["google"])('gemini-2.5-flash-preview-04-17', {
            structuredOutputs: true
        }),
        'neuman-gemini': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$google$40$1$2e$2$2e$14_zod$40$3$2e$24$2e$2$2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["google"])('gemini-2.5-pro-exp-03-25', {
            structuredOutputs: true
        }),
        'neuman-anthropic': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$anthropic$40$1$2e$2$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f40$ai$2d$sdk$2f$anthropic$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["anthropic"])('claude-3-7-sonnet-20250219')
    }
});
// Removed MapboxFeature, GoogleResult, VideoDetails, VideoResult interfaces
// Removed sanitizeUrl, isValidImageUrl, extractDomain, deduplicateByDomainAndUrl helper functions
// Note: reason_search might implicitly rely on deduplication/validation logic not shown here.
// Initialize Exa client
const exa = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$exa$2d$js$40$1$2e$6$2e$13_encoding$40$0$2e$1$2e$13$2f$node_modules$2f$exa$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$env$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serverEnv"].EXA_API_KEY);
async function POST(req) {
    const { messages, model, group, user_id, timezone } = await req.json(); // user_id and timezone might not be used by kept tools, but kept for consistency
    const { tools: activeTools, instructions } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getGroupConfig"])(group);
    console.log("--------------------------------");
    console.log("Messages: ", messages);
    console.log("--------------------------------");
    console.log("Running with model: ", model.trim());
    console.log("Group: ", group);
    console.log("Timezone: ", timezone); // Kept for logging
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$4$2e$3$2e$12_react$40$18$2e$3$2e$1_zod$40$3$2e$24$2e$2$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createDataStreamResponse"])({
        execute: async (dataStream)=>{
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$4$2e$3$2e$12_react$40$18$2e$3$2e$1_zod$40$3$2e$24$2e$2$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["streamText"])({
                model: neuman.languageModel(model),
                messages: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$4$2e$3$2e$12_react$40$18$2e$3$2e$1_zod$40$3$2e$24$2e$2$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertToCoreMessages"])(messages),
                ...model !== 'neuman-o4-mini' ? {
                    temperature: 0
                } : {},
                maxSteps: 5,
                experimental_activeTools: [
                    ...activeTools
                ],
                system: instructions,
                toolChoice: 'auto',
                experimental_transform: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$4$2e$3$2e$12_react$40$18$2e$3$2e$1_zod$40$3$2e$24$2e$2$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["smoothStream"])({
                    chunking: 'word',
                    delayInMs: 15
                }),
                providerOptions: {
                    neuman: {
                        ...model === 'neuman-default' ? {
                            reasoningEffort: 'high'
                        } : {},
                        ...model === 'neuman-o4-mini' ? {
                            reasoningEffort: 'medium'
                        } : {},
                        ...model === 'neuman-google' ? {
                            thinkingConfig: {
                                thinkingBudget: 5000
                            }
                        } : {}
                    },
                    google: {
                        thinkingConfig: {
                            thinkingBudget: 5000
                        }
                    },
                    openai: {
                        ...model === 'neuman-o4-mini' ? {
                            reasoningEffort: 'medium'
                        } : {}
                    },
                    xai: {
                        ...model === 'neuman-default' ? {
                            reasoningEffort: 'high'
                        } : {}
                    },
                    anthropic: {
                        thinking: {
                            type: 'enabled',
                            budgetTokens: 12000
                        }
                    }
                },
                tools: {
                    // --- Kept Tools ---
                    academic_search: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$4$2e$3$2e$12_react$40$18$2e$3$2e$1_zod$40$3$2e$24$2e$2$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
                        description: 'Search academic papers and research.',
                        parameters: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
                            query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().describe('The search query')
                        }),
                        execute: async ({ query })=>{
                            try {
                                // Exa client is initialized outside POST
                                // const exa = new Exa(serverEnv.EXA_API_KEY as string); // Re-initializing here is redundant
                                // Search academic papers with content summary
                                const result = await exa.searchAndContents(query, {
                                    type: 'auto',
                                    numResults: 20,
                                    category: 'research paper',
                                    summary: {
                                        query: 'Abstract of the Paper'
                                    }
                                });
                                // Process and clean results
                                const processedResults = result.results.reduce((acc, paper)=>{
                                    // Skip if URL already exists or if no summary available
                                    if (acc.some((p)=>p.url === paper.url) || !paper.summary) return acc;
                                    // Clean up summary (remove "Summary:" prefix if exists)
                                    const cleanSummary = paper.summary.replace(/^Summary:\s*/i, '');
                                    // Clean up title (remove [...] suffixes)
                                    const cleanTitle = paper.title?.replace(/\s\[.*?\]$/, '');
                                    acc.push({
                                        ...paper,
                                        title: cleanTitle || '',
                                        summary: cleanSummary
                                    });
                                    return acc;
                                }, []);
                                return {
                                    results: processedResults
                                };
                            } catch (error) {
                                console.error('Academic search error:', error);
                                throw error; // Re-throw or handle error appropriately
                            }
                        }
                    }),
                    reason_search: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$4$2e$3$2e$12_react$40$18$2e$3$2e$1_zod$40$3$2e$24$2e$2$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
                        description: 'Perform a reasoned web search with multiple steps and sources.',
                        parameters: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
                            topic: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().describe('The main topic or question to research'),
                            depth: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].enum([
                                'basic',
                                'advanced'
                            ]).describe('Search depth level')
                        }),
                        execute: async ({ topic, depth })=>{
                            const apiKey = __TURBOPACK__imported__module__$5b$project$5d2f$env$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serverEnv"].TAVILY_API_KEY;
                            const tvly = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tavily$2b$core$40$0$2e$5$2e$1$2f$node_modules$2f40$tavily$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tavily"])({
                                apiKey
                            });
                            // Exa client is initialized outside POST
                            // Send initial plan status update (without steps count and extra details)
                            dataStream.writeMessageAnnotation({
                                type: 'research_update',
                                data: {
                                    id: 'research-plan-initial',
                                    type: 'plan',
                                    status: 'running',
                                    title: 'Research Plan',
                                    message: 'Creating research plan...',
                                    timestamp: Date.now(),
                                    overwrite: true
                                }
                            });
                            // Now generate the research plan
                            const { object: researchPlan } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$4$2e$3$2e$12_react$40$18$2e$3$2e$1_zod$40$3$2e$24$2e$2$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateObject"])({
                                model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$openai$40$1$2e$3$2e$21_zod$40$3$2e$24$2e$2$2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["openai"])("gpt-o4-mini"),
                                temperature: 0,
                                schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
                                    search_queries: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
                                        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
                                        rationale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
                                        source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].enum([
                                            'web',
                                            'academic',
                                            'x',
                                            'all'
                                        ]),
                                        priority: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number().min(1).max(5)
                                    })).max(12),
                                    required_analyses: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
                                        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
                                        description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
                                        importance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number().min(1).max(5)
                                    })).max(8)
                                }),
                                prompt: `Create a focused research plan for the topic: "${topic}".
                                        Today's date and day of the week: ${new Date().toLocaleDateString('en-US', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}

                                        Keep the plan concise but comprehensive, with:
                                        - 4-12 targeted search queries (each can use web, academic, x (Twitter), or all sources)
                                        - 2-8 key analyses to perform
                                        - Prioritize the most important aspects to investigate

                                        Available sources:
                                        - "web": General web search
                                        - "academic": Academic papers and research
                                        - "x": X/Twitter posts and discussions
                                        - "all": Use all source types (web, academic, and X/Twitter)

                                        Do not use floating numbers, use whole numbers only in the priority field!!
                                        Do not keep the numbers too low or high, make them reasonable in between.
                                        Do not use 0 or 1 in the priority field, use numbers between 2 and 4.

                                        Consider different angles and potential controversies, but maintain focus on the core aspects.
                                        Ensure the total number of steps (searches + analyses) does not exceed 20.`
                            });
                            // Generate IDs for all steps based on the plan
                            const generateStepIds = (plan)=>{
                                // Generate an array of search steps.
                                const searchSteps = plan.search_queries.flatMap((query, index)=>{
                                    if (query.source === 'all') {
                                        return [
                                            {
                                                id: `search-web-${index}`,
                                                type: 'web',
                                                query
                                            },
                                            {
                                                id: `search-academic-${index}`,
                                                type: 'academic',
                                                query
                                            },
                                            {
                                                id: `search-x-${index}`,
                                                type: 'x',
                                                query
                                            }
                                        ];
                                    }
                                    if (query.source === 'x') {
                                        return [
                                            {
                                                id: `search-x-${index}`,
                                                type: 'x',
                                                query
                                            }
                                        ];
                                    }
                                    const searchType = query.source === 'academic' ? 'academic' : 'web';
                                    return [
                                        {
                                            id: `search-${searchType}-${index}`,
                                            type: searchType,
                                            query
                                        }
                                    ];
                                });
                                // Generate an array of analysis steps.
                                const analysisSteps = plan.required_analyses.map((analysis, index)=>({
                                        id: `analysis-${index}`,
                                        type: 'analysis',
                                        analysis
                                    }));
                                return {
                                    planId: 'research-plan',
                                    searchSteps,
                                    analysisSteps
                                };
                            };
                            const stepIds = generateStepIds(researchPlan);
                            let completedSteps = 0;
                            const totalSteps = stepIds.searchSteps.length + stepIds.analysisSteps.length;
                            // Complete plan status
                            dataStream.writeMessageAnnotation({
                                type: 'research_update',
                                data: {
                                    id: stepIds.planId,
                                    type: 'plan',
                                    status: 'completed',
                                    title: 'Research Plan',
                                    plan: researchPlan,
                                    totalSteps: totalSteps,
                                    message: 'Research plan created',
                                    timestamp: Date.now(),
                                    overwrite: true
                                }
                            });
                            // Execute searches
                            const searchResults = []; // Define explicitly
                            let searchIndex = 0;
                            for (const step of stepIds.searchSteps){
                                // Send running annotation for this search step
                                dataStream.writeMessageAnnotation({
                                    type: 'research_update',
                                    data: {
                                        id: step.id,
                                        type: step.type,
                                        status: 'running',
                                        title: step.type === 'web' ? `Searching the web for "${step.query.query}"` : step.type === 'academic' ? `Searching academic papers for "${step.query.query}"` : step.type === 'x' ? `Searching X/Twitter for "${step.query.query}"` : `Analyzing ${step.query.query}`,
                                        query: step.query.query,
                                        message: `Searching ${step.query.source} sources...`,
                                        timestamp: Date.now()
                                    }
                                });
                                if (step.type === 'web') {
                                    const webResults = await tvly.search(step.query.query, {
                                        searchDepth: depth,
                                        includeAnswer: true,
                                        maxResults: Math.min(6 - step.query.priority, 10)
                                    });
                                    searchResults.push({
                                        type: 'web',
                                        query: step.query,
                                        results: webResults.results.map((r)=>({
                                                source: 'web',
                                                title: r.title,
                                                url: r.url,
                                                content: r.content
                                            }))
                                    });
                                    completedSteps++;
                                } else if (step.type === 'academic') {
                                    const academicResults = await exa.searchAndContents(step.query.query, {
                                        type: 'auto',
                                        numResults: Math.min(6 - step.query.priority, 5),
                                        category: 'research paper',
                                        summary: true
                                    });
                                    searchResults.push({
                                        type: 'academic',
                                        query: step.query,
                                        results: academicResults.results.map((r)=>({
                                                source: 'academic',
                                                title: r.title || '',
                                                url: r.url || '',
                                                content: r.summary || ''
                                            }))
                                    });
                                    completedSteps++;
                                } else if (step.type === 'x') {
                                    // Extract tweet ID from URL
                                    const extractTweetId = (url)=>{
                                        const match = url.match(/(?:twitter\.com|x\.com)\/\w+\/status\/(\d+)/);
                                        return match ? match[1] : null;
                                    };
                                    const xResults = await exa.searchAndContents(step.query.query, {
                                        type: 'neural',
                                        useAutoprompt: true,
                                        numResults: step.query.priority,
                                        text: true,
                                        highlights: true,
                                        includeDomains: [
                                            'twitter.com',
                                            'x.com'
                                        ]
                                    });
                                    // Process tweets to include tweet IDs
                                    const processedTweets = xResults.results.map((result)=>{
                                        const tweetId = extractTweetId(result.url);
                                        // Make sure to return null or filter later if tweetId is null
                                        if (!tweetId) return null;
                                        return {
                                            source: 'x',
                                            title: result.title || result.author || 'Tweet',
                                            url: result.url,
                                            content: result.text || '',
                                            tweetId: tweetId // tweetId is guaranteed string here if not null
                                        };
                                    }).filter((tweet)=>tweet !== null); // Filter out null entries
                                    searchResults.push({
                                        type: 'x',
                                        query: step.query,
                                        // Ensure the results pushed match the expected structure later if needed
                                        results: processedTweets
                                    });
                                    completedSteps++;
                                }
                                // Send completed annotation for the search step
                                const lastSearchResult = searchResults[searchResults.length - 1];
                                dataStream.writeMessageAnnotation({
                                    type: 'research_update',
                                    data: {
                                        id: step.id,
                                        type: step.type,
                                        status: 'completed',
                                        title: step.type === 'web' ? `Searched the web for "${step.query.query}"` : step.type === 'academic' ? `Searched academic papers for "${step.query.query}"` : step.type === 'x' ? `Searched X/Twitter for "${step.query.query}"` : `Analysis of ${step.query.query} complete`,
                                        query: step.query.query,
                                        results: lastSearchResult?.results.map((r)=>({
                                                ...r
                                            })) || [],
                                        message: `Found ${lastSearchResult?.results.length ?? 0} results`,
                                        timestamp: Date.now(),
                                        overwrite: true
                                    }
                                });
                                searchIndex++;
                            }
                            // Perform analyses
                            let analysisIndex = 0;
                            for (const step of stepIds.analysisSteps){
                                dataStream.writeMessageAnnotation({
                                    type: 'research_update',
                                    data: {
                                        id: step.id,
                                        type: 'analysis',
                                        status: 'running',
                                        title: `Analyzing ${step.analysis.type}`,
                                        analysisType: step.analysis.type,
                                        message: `Analyzing ${step.analysis.type}...`,
                                        timestamp: Date.now()
                                    }
                                });
                                const { object: analysisResult } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$4$2e$3$2e$12_react$40$18$2e$3$2e$1_zod$40$3$2e$24$2e$2$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateObject"])({
                                    model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$openai$40$1$2e$3$2e$21_zod$40$3$2e$24$2e$2$2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["openai"])("gpt-o4-mini"),
                                    temperature: 0.5,
                                    schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
                                        findings: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
                                            insight: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
                                            evidence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()),
                                            confidence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number().min(0).max(1)
                                        })),
                                        implications: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()),
                                        limitations: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string())
                                    }),
                                    prompt: `Perform a ${step.analysis.type} analysis on the search results. ${step.analysis.description}
                                            Consider all sources and their reliability.
                                            Search results: ${JSON.stringify(searchResults)}`
                                });
                                dataStream.writeMessageAnnotation({
                                    type: 'research_update',
                                    data: {
                                        id: step.id,
                                        type: 'analysis',
                                        status: 'completed',
                                        title: `Analysis of ${step.analysis.type} complete`,
                                        analysisType: step.analysis.type,
                                        findings: analysisResult.findings,
                                        message: `Analysis complete`,
                                        timestamp: Date.now(),
                                        overwrite: true
                                    }
                                });
                                completedSteps++; // Increment completed steps after analysis
                                analysisIndex++;
                            }
                            // After all analyses are complete, send running state for gap analysis
                            dataStream.writeMessageAnnotation({
                                type: 'research_update',
                                data: {
                                    id: 'gap-analysis',
                                    type: 'analysis',
                                    status: 'running',
                                    title: 'Research Gaps and Limitations',
                                    analysisType: 'gaps',
                                    message: 'Analyzing research gaps and limitations...',
                                    timestamp: Date.now()
                                }
                            });
                            // After all analyses are complete, analyze limitations and gaps
                            const { object: gapAnalysis } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$4$2e$3$2e$12_react$40$18$2e$3$2e$1_zod$40$3$2e$24$2e$2$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateObject"])({
                                model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$openai$40$1$2e$3$2e$21_zod$40$3$2e$24$2e$2$2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["openai"])("gpt-o4-mini"),
                                temperature: 0,
                                schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
                                    limitations: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
                                        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
                                        description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
                                        severity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number().min(2).max(10),
                                        potential_solutions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string())
                                    })),
                                    knowledge_gaps: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
                                        topic: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
                                        reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
                                        additional_queries: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string())
                                    })),
                                    recommended_followup: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
                                        action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
                                        rationale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
                                        priority: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number().min(2).max(10)
                                    }))
                                }),
                                prompt: `Analyze the research results and identify limitations, knowledge gaps, and recommended follow-up actions.
                                        Consider:
                                        - Quality and reliability of sources
                                        - Missing perspectives or data
                                        - Areas needing deeper investigation
                                        - Potential biases or conflicts
                                        - Severity should be between 2 and 10
                                        - Knowledge gaps should be between 2 and 10
                                        - Do not keep the numbers too low or high, make them reasonable in between

                                        When suggesting additional_queries for knowledge gaps, keep in mind these will be used to search:
                                        - Web sources
                                        - Academic papers
                                        - X/Twitter for social media perspectives and real-time information

                                        Design your additional_queries to work well across these different source types.

                                        Research results: ${JSON.stringify(searchResults)}
                                        Analysis findings: ${JSON.stringify(stepIds.analysisSteps.map((step)=>({
                                        type: step.analysis.type,
                                        description: step.analysis.description,
                                        importance: step.analysis.importance
                                    })))}`
                            });
                            completedSteps++; // Increment after gap analysis generation
                            // Send gap analysis update
                            dataStream.writeMessageAnnotation({
                                type: 'research_update',
                                data: {
                                    id: 'gap-analysis',
                                    type: 'analysis',
                                    status: 'completed',
                                    title: 'Research Gaps and Limitations',
                                    analysisType: 'gaps',
                                    findings: gapAnalysis.limitations.map((l)=>({
                                            insight: l.description,
                                            evidence: l.potential_solutions,
                                            confidence: (10 - l.severity) / 8 // Normalize severity to confidence (adjust scale if needed)
                                        })),
                                    gaps: gapAnalysis.knowledge_gaps,
                                    recommendations: gapAnalysis.recommended_followup,
                                    message: `Identified ${gapAnalysis.limitations.length} limitations and ${gapAnalysis.knowledge_gaps.length} knowledge gaps`,
                                    timestamp: Date.now(),
                                    overwrite: true,
                                    completedSteps: completedSteps,
                                    totalSteps: totalSteps + (depth === 'advanced' ? 2 : 1) // Adjust total steps dynamically
                                }
                            });
                            let synthesis;
                            let additionalQueriesCount = 0; // Keep track of added steps for follow-up
                            // If there are significant gaps and depth is 'advanced', perform additional research
                            if (depth === 'advanced' && gapAnalysis.knowledge_gaps.length > 0) {
                                // Calculate the number of actual search operations needed
                                additionalQueriesCount = gapAnalysis.knowledge_gaps.reduce((count, gap)=>{
                                    return count + gap.additional_queries.reduce((subCount, _, idx)=>{
                                        const sourceType = idx === 0 ? 'all' : [
                                            'web',
                                            'academic',
                                            'x'
                                        ][idx % 3];
                                        return subCount + (sourceType === 'all' ? 3 : 1);
                                    }, 0);
                                }, 0);
                                const finalTotalSteps = totalSteps + 1 + additionalQueriesCount + 1; // Initial + Gap Analysis + Additional Searches + Final Synthesis
                                // Update the total steps in the gap analysis completion message
                                dataStream.writeMessageAnnotation({
                                    type: 'research_update',
                                    data: {
                                        id: 'gap-analysis',
                                        type: 'analysis',
                                        status: 'completed',
                                        title: 'Research Gaps and Limitations',
                                        analysisType: 'gaps',
                                        findings: gapAnalysis.limitations.map((l)=>({})),
                                        gaps: gapAnalysis.knowledge_gaps,
                                        recommendations: gapAnalysis.recommended_followup,
                                        message: `Identified ${gapAnalysis.limitations.length} limitations and ${gapAnalysis.knowledge_gaps.length} knowledge gaps. Preparing follow-up searches...`,
                                        timestamp: Date.now(),
                                        overwrite: true,
                                        completedSteps: completedSteps,
                                        totalSteps: finalTotalSteps // Update total steps
                                    }
                                });
                                // Flatten the queries and determine source type
                                const additionalQueries = gapAnalysis.knowledge_gaps.flatMap((gap)=>gap.additional_queries.map((query, idx)=>{
                                        const sourceTypes = [
                                            'web',
                                            'academic',
                                            'x'
                                        ];
                                        let source;
                                        if (idx === 0) {
                                            source = 'all';
                                        } else {
                                            source = sourceTypes[idx % sourceTypes.length];
                                        }
                                        return {
                                            query,
                                            rationale: gap.reason,
                                            source,
                                            priority: 3 // Default priority for follow-up
                                        };
                                    }));
                                // Execute additional searches for gaps
                                for (const query of additionalQueries){
                                    const searchOperations = [];
                                    if (query.source === 'all' || query.source === 'web') searchOperations.push({
                                        type: 'web',
                                        idSuffix: 'web'
                                    });
                                    if (query.source === 'all' || query.source === 'academic') searchOperations.push({
                                        type: 'academic',
                                        idSuffix: 'academic'
                                    });
                                    if (query.source === 'all' || query.source === 'x') searchOperations.push({
                                        type: 'x',
                                        idSuffix: 'x'
                                    });
                                    for (const op of searchOperations){
                                        const gapSearchId = `gap-search-${op.idSuffix}-${searchIndex++}`;
                                        // Send running annotation
                                        dataStream.writeMessageAnnotation({
                                            type: 'research_update',
                                            data: {
                                                id: gapSearchId,
                                                type: op.type,
                                                status: 'running',
                                                title: `Follow-up ${op.type} search for "${query.query}"`,
                                                query: query.query,
                                                message: `Searching ${op.type} sources for gap: ${query.rationale}`,
                                                timestamp: Date.now()
                                            }
                                        });
                                        let gapResults = [];
                                        let resultCount = 0;
                                        try {
                                            if (op.type === 'web') {
                                                const webResults = await tvly.search(query.query, {
                                                    searchDepth: 'basic',
                                                    includeAnswer: false,
                                                    maxResults: 3
                                                });
                                                gapResults = webResults.results.map((r)=>({
                                                        source: 'web',
                                                        title: r.title,
                                                        url: r.url,
                                                        content: r.content
                                                    }));
                                                resultCount = webResults.results.length;
                                            } else if (op.type === 'academic') {
                                                const academicResults = await exa.searchAndContents(query.query, {
                                                    type: 'auto',
                                                    numResults: 2,
                                                    category: 'research paper',
                                                    summary: true
                                                });
                                                gapResults = academicResults.results.map((r)=>({
                                                        source: 'academic',
                                                        title: r.title || '',
                                                        url: r.url || '',
                                                        content: r.summary || ''
                                                    }));
                                                resultCount = academicResults.results.length;
                                            } else if (op.type === 'x') {
                                                const extractTweetId = (url)=>{
                                                    return null;
                                                }; // Add implementation if needed
                                                const xResults = await exa.searchAndContents(query.query, {
                                                    type: 'keyword',
                                                    numResults: 3,
                                                    text: true,
                                                    highlights: true,
                                                    includeDomains: [
                                                        'twitter.com',
                                                        'x.com'
                                                    ]
                                                });
                                                gapResults = xResults.results.map((r)=>{
                                                    const tweetId = extractTweetId(r.url);
                                                    if ("TURBOPACK compile-time truthy", 1) return null;
                                                    "TURBOPACK unreachable";
                                                }).filter((t)=>t !== null);
                                                resultCount = gapResults.length;
                                            }
                                            // Add results to the main searchResults array
                                            searchResults.push({
                                                type: op.type,
                                                query: {
                                                    query: query.query,
                                                    rationale: query.rationale,
                                                    source: op.type,
                                                    priority: query.priority
                                                },
                                                results: gapResults
                                            });
                                        } catch (error) {
                                            console.error(`Error during follow-up ${op.type} search for "${query.query}":`, error);
                                        // Optionally add an error entry to searchResults
                                        } finally{
                                            completedSteps++; // Increment completed steps for this specific search operation
                                            // Send completed annotation
                                            dataStream.writeMessageAnnotation({
                                                type: 'research_update',
                                                data: {
                                                    id: gapSearchId,
                                                    type: op.type,
                                                    status: 'completed',
                                                    title: `Follow-up ${op.type} search for "${query.query}"`,
                                                    query: query.query,
                                                    results: gapResults,
                                                    message: `Found ${resultCount} results`,
                                                    timestamp: Date.now(),
                                                    overwrite: true,
                                                    completedSteps: completedSteps,
                                                    totalSteps: finalTotalSteps // Pass updated total
                                                }
                                            });
                                        }
                                    }
                                }
                                // Send running state for final synthesis (now including follow-up results)
                                dataStream.writeMessageAnnotation({
                                    type: 'research_update',
                                    data: {
                                        id: 'final-synthesis',
                                        type: 'analysis',
                                        status: 'running',
                                        title: 'Final Research Synthesis (Post Follow-up)',
                                        analysisType: 'synthesis',
                                        message: 'Synthesizing all research findings including follow-up...',
                                        timestamp: Date.now(),
                                        completedSteps: completedSteps,
                                        totalSteps: finalTotalSteps // Pass updated total
                                    }
                                });
                                // Perform final synthesis *again* with the additional results
                                const { object: finalSynthesis } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$4$2e$3$2e$12_react$40$18$2e$3$2e$1_zod$40$3$2e$24$2e$2$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateObject"])({
                                    model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$openai$40$1$2e$3$2e$21_zod$40$3$2e$24$2e$2$2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["openai"])("gpt-o4-mini"),
                                    temperature: 0,
                                    schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
                                        key_findings: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
                                            finding: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
                                            confidence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number().min(0).max(1),
                                            supporting_evidence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string())
                                        })),
                                        remaining_uncertainties: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string())
                                    }),
                                    prompt: `Synthesize all research findings, including the initial results, gap analysis, and the results from the follow-up searches addressing knowledge gaps.
                                            Highlight key conclusions and remaining uncertainties. Stick strictly to the requested schema.

                                            All Search Results (Initial + Follow-up): ${JSON.stringify(searchResults)}
                                            Gap Analysis: ${JSON.stringify(gapAnalysis)}`
                                });
                                synthesis = finalSynthesis;
                                completedSteps++; // Increment for final synthesis step
                                // Send final synthesis update (Post Follow-up)
                                dataStream.writeMessageAnnotation({
                                    type: 'research_update',
                                    data: {
                                        id: 'final-synthesis',
                                        type: 'analysis',
                                        status: 'completed',
                                        title: 'Final Research Synthesis (Post Follow-up)',
                                        analysisType: 'synthesis',
                                        findings: finalSynthesis.key_findings.map((f)=>({
                                                insight: f.finding,
                                                evidence: f.supporting_evidence,
                                                confidence: f.confidence
                                            })),
                                        uncertainties: finalSynthesis.remaining_uncertainties,
                                        message: `Synthesized ${finalSynthesis.key_findings.length} key findings after follow-up`,
                                        timestamp: Date.now(),
                                        overwrite: true,
                                        completedSteps: completedSteps,
                                        totalSteps: finalTotalSteps
                                    }
                                });
                            } else {
                                // No follow-up searches, just perform initial synthesis
                                const finalTotalSteps = totalSteps + 1 + 1; // Initial searches + Gap Analysis + Final Synthesis
                                // Update total steps in the gap analysis completion message (since no follow-up)
                                dataStream.writeMessageAnnotation({
                                    type: 'research_update',
                                    data: {
                                        id: 'gap-analysis',
                                        type: 'analysis',
                                        status: 'completed',
                                        // ... other gap analysis fields
                                        message: `Identified ${gapAnalysis.limitations.length} limitations and ${gapAnalysis.knowledge_gaps.length} knowledge gaps. Proceeding to synthesis...`,
                                        timestamp: Date.now(),
                                        overwrite: true,
                                        completedSteps: completedSteps,
                                        totalSteps: finalTotalSteps // Update total steps
                                    }
                                });
                                // Send running state for final synthesis
                                dataStream.writeMessageAnnotation({
                                    type: 'research_update',
                                    data: {
                                        id: 'final-synthesis',
                                        type: 'analysis',
                                        status: 'running',
                                        title: 'Final Research Synthesis',
                                        analysisType: 'synthesis',
                                        message: 'Synthesizing research findings...',
                                        timestamp: Date.now(),
                                        completedSteps: completedSteps,
                                        totalSteps: finalTotalSteps
                                    }
                                });
                                const { object: finalSynthesis } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$4$2e$3$2e$12_react$40$18$2e$3$2e$1_zod$40$3$2e$24$2e$2$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateObject"])({
                                    model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$openai$40$1$2e$3$2e$21_zod$40$3$2e$24$2e$2$2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["openai"])("gpt-o4-mini"),
                                    temperature: 0,
                                    schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
                                        key_findings: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({})),
                                        remaining_uncertainties: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$2$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string())
                                    }),
                                    prompt: `Synthesize the initial research findings and the gap analysis.
                                             Highlight key conclusions and remaining uncertainties. Stick strictly to the requested schema.

                                             Initial Search Results: ${JSON.stringify(searchResults)}
                                             Gap Analysis: ${JSON.stringify(gapAnalysis)}`
                                });
                                synthesis = finalSynthesis;
                                completedSteps++; // Increment for final synthesis
                                // Send final synthesis completion update
                                dataStream.writeMessageAnnotation({
                                    type: 'research_update',
                                    data: {
                                        id: 'final-synthesis',
                                        type: 'analysis',
                                        status: 'completed',
                                        title: 'Final Research Synthesis',
                                        analysisType: 'synthesis',
                                        findings: finalSynthesis.key_findings.map((f)=>({})),
                                        uncertainties: finalSynthesis.remaining_uncertainties,
                                        message: `Synthesized ${finalSynthesis.key_findings.length} key findings`,
                                        timestamp: Date.now(),
                                        overwrite: true,
                                        completedSteps: completedSteps,
                                        totalSteps: finalTotalSteps
                                    }
                                });
                            }
                            // Final overall progress update
                            const finalTotalSteps = totalSteps + 1 + (depth === 'advanced' && gapAnalysis.knowledge_gaps.length > 0 ? additionalQueriesCount + 1 : 1);
                            const finalProgress = {
                                id: 'research-progress',
                                type: 'progress',
                                status: 'completed',
                                message: `Research complete`,
                                completedSteps: completedSteps,
                                totalSteps: finalTotalSteps,
                                isComplete: true,
                                timestamp: Date.now()
                            };
                            dataStream.writeMessageAnnotation({
                                type: 'research_update',
                                data: {
                                    ...finalProgress,
                                    overwrite: true
                                }
                            });
                            return {
                                plan: researchPlan,
                                results: searchResults,
                                synthesis: synthesis // Contains final synthesis
                            };
                        }
                    })
                },
                experimental_repairToolCall: async ({ toolCall, tools, parameterSchema, error })=>{
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$4$2e$3$2e$12_react$40$18$2e$3$2e$1_zod$40$3$2e$24$2e$2$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NoSuchToolError"].isInstance(error)) {
                        return null; // do not attempt to fix invalid tool names
                    }
                    console.log("Fixing tool call================================");
                    console.log("toolCall", toolCall);
                    console.log("tools", tools);
                    console.log("parameterSchema", parameterSchema);
                    console.log("error", error);
                    const toolDefinition = tools[toolCall.toolName];
                    if (!toolDefinition) {
                        console.error(`Tool "${toolCall.toolName}" not found for repair.`);
                        return null; // Tool definition not found in the reduced set
                    }
                    const { object: repairedArgs } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$4$2e$3$2e$12_react$40$18$2e$3$2e$1_zod$40$3$2e$24$2e$2$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateObject"])({
                        model: neuman.languageModel("neuman-default"),
                        schema: toolDefinition.parameters,
                        prompt: [
                            `The model tried to call the tool "${toolCall.toolName}"` + ` with the following arguments:`,
                            JSON.stringify(toolCall.args),
                            `The tool accepts the following schema:`,
                            JSON.stringify(parameterSchema(toolCall)),
                            'Please fix the arguments.',
                            // Removed tool-specific instructions for stock chart and web search as they are removed
                            `Today's date is ${new Date().toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}`
                        ].join('\n')
                    });
                    console.log("repairedArgs", repairedArgs);
                    // Return the tool call with corrected arguments
                    // The original code returned { ...toolCall, args: JSON.stringify(repairedArgs) }; 
                    // Adjusting to match expected structure if needed, assuming this structure is correct:
                    return {
                        toolCallId: toolCall.toolCallId,
                        toolName: toolCall.toolName,
                        args: repairedArgs
                    };
                },
                onChunk (event) {
                    if (event.chunk.type === 'tool-call') {
                        console.log('Called Tool: ', event.chunk.toolName);
                    }
                },
                onStepFinish (event) {
                    if (event.warnings) {
                        console.log('Warnings: ', event.warnings);
                    }
                },
                onFinish (event) {
                    console.log('Fin reason: ', event.finishReason);
                    console.log('Reasoning: ', event.reasoning);
                    console.log('reasoning details: ', event.reasoningDetails);
                    console.log('Steps: ', event.steps);
                    console.log('Messages: ', event.response.messages);
                    console.log('Response: ', event.response);
                },
                onError (event) {
                    console.log('Error: ', event.error);
                }
            });
            result.mergeIntoDataStream(dataStream, {
                sendReasoning: true
            });
        }
    });
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__a85b067c._.js.map