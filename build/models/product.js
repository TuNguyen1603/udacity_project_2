"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProduct = void 0;
var database_1 = __importDefault(require("../database"));
var OrderProduct = /** @class */ (function () {
    function OrderProduct() {
    }
    OrderProduct.prototype.update = function (productParam) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, values, Client, product, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = 'UPDATE products SET name = ($2), price = ($3) WHERE id=($1) RETURNING *';
                        values = [productParam.id, productParam.name, productParam.price];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 2:
                        Client = _a.sent();
                        return [4 /*yield*/, Client.query({
                                text: sql,
                                values: values,
                            })];
                    case 3:
                        result = _a.sent();
                        product = result.rows[0];
                        return [2 /*return*/, product];
                    case 4:
                        error_1 = _a.sent();
                        console.error("Error while inserting product:", error_1);
                        throw error_1;
                    case 5:
                        if (Client) {
                            Client.release();
                        }
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    OrderProduct.prototype.show = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, values, Client, product, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = 'SELECT * FROM products WHERE id=($1)';
                        values = [id];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 2:
                        Client = _a.sent();
                        return [4 /*yield*/, Client.query({
                                text: sql,
                                values: values,
                            })];
                    case 3:
                        result = _a.sent();
                        product = result.rows[0];
                        return [2 /*return*/, product];
                    case 4:
                        error_2 = _a.sent();
                        console.error("Error while inserting product:", error_2);
                        throw error_2;
                    case 5:
                        if (Client) {
                            Client.release();
                        }
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    OrderProduct.prototype.showAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sql, Client, productList, result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = 'SELECT * FROM products';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 2:
                        Client = _a.sent();
                        return [4 /*yield*/, Client.query({
                                text: sql,
                            })];
                    case 3:
                        result = _a.sent();
                        productList = result.rows;
                        return [2 /*return*/, productList];
                    case 4:
                        error_3 = _a.sent();
                        console.error("Error while inserting product:", error_3);
                        throw error_3;
                    case 5:
                        if (Client) {
                            Client.release();
                        }
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    OrderProduct.prototype.create = function (b) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, values, Client, result, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = 'INSERT INTO products (name, price) VALUES($1, $2) RETURNING *';
                        values = [b.name, b.price];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 2:
                        Client = _a.sent();
                        return [4 /*yield*/, Client.query({
                                text: sql,
                                values: values,
                            })];
                    case 3:
                        result = _a.sent();
                        return [2 /*return*/, result.rows[0]];
                    case 4:
                        error_4 = _a.sent();
                        console.error("Error while inserting product:", error_4);
                        throw error_4;
                    case 5:
                        if (Client) {
                            Client.release();
                        }
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    OrderProduct.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, values, Client, result, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = 'DELETE FROM products WHERE id=($1)';
                        values = [id];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 2:
                        Client = _a.sent();
                        return [4 /*yield*/, Client.query({
                                text: sql,
                                values: values,
                            })];
                    case 3:
                        result = _a.sent();
                        return [2 /*return*/, 1];
                    case 4:
                        error_5 = _a.sent();
                        console.error("Error while inserting product:", error_5);
                        throw error_5;
                    case 5:
                        if (Client) {
                            Client.release();
                        }
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return OrderProduct;
}());
exports.OrderProduct = OrderProduct;
