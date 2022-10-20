"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const contributorRouter_1 = require("./router/contributorRouter");
const app = (0, express_1.default)();
const port = 3003;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(process.env.PORT || 3003, () => {
    console.log(`Server is running in http://localhost:${process.env.PORT || 3003}`);
});
app.use("/contributors", contributorRouter_1.contributorRouter);
//# sourceMappingURL=index.js.map