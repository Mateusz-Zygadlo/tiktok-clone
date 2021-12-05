"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const home_1 = __importDefault(require("./routes/home"));
require('dotenv').config();
const port = process.env.API_PORT || 8000;
const mongoDb = process.env.MONGO_URL;
mongoose_1.default.connect(mongoDb);
const db = mongoose_1.default.connection;
db.on("error", console.error.bind(console, "mongo connection error"));
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use('/', home_1.default);
app.listen(port, () => console.log('api works'));
