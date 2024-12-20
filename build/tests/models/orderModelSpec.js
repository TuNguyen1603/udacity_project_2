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
var supertest_1 = __importDefault(require("supertest"));
var order_1 = require("../../models/order");
var product_1 = require("../../models/product");
var user_1 = require("../../models/user");
var index_1 = __importDefault(require("../../index"));
var dotenv_1 = __importDefault(require("dotenv"));
require('dotenv').config({ path: '.env' });
dotenv_1.default.config();
var request = (0, supertest_1.default)(index_1.default);
var SECRET = process.env.TOKEN_SECRECT;
var order = new order_1.OrderModel();
var user = new user_1.UserModel();
var productInstance = new product_1.OrderProduct();
var orderId, orderInstace;
describe('Order Model', function () {
    var userId, productId;
    it('should have an index method', function () {
        expect(order.showAll).toBeDefined();
    });
    it('should have a show method', function () {
        expect(order.show).toBeDefined();
    });
    it('should have a create method', function () {
        expect(order.create).toBeDefined();
    });
    it('should have a update method', function () {
        expect(order.update).toBeDefined();
    });
    it('should have a delete method', function () {
        expect(order.delete).toBeDefined();
    });
    it('create method should add a order', function () { return __awaiter(void 0, void 0, void 0, function () {
        var userData, res, product, resProduct, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userData = {
                        username: 'TuNguyenOrder',
                        firstname: 'Tu',
                        lastname: 'Nguyen',
                        password: 'password12345',
                    };
                    return [4 /*yield*/, user.create(userData)];
                case 1:
                    res = _a.sent();
                    product = {
                        name: 'Shirt',
                        price: 29,
                    };
                    return [4 /*yield*/, productInstance.create(product)];
                case 2:
                    resProduct = _a.sent();
                    productId = resProduct.id;
                    userId = res.id;
                    return [4 /*yield*/, order.create({
                            productId: resProduct.id,
                            quantity: 20,
                            userId: res.id,
                            status: "0"
                        })];
                case 3:
                    result = _a.sent();
                    console.log("orderId: " + result.id);
                    console.log('userId ' + userId);
                    console.log('productId ' + productId);
                    orderId = result.id;
                    expect(result).toEqual({
                        id: orderId,
                        productId: productId,
                        quantity: 20,
                        userId: userId,
                        status: "0"
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    it('index method should return a list of orders', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, order.showAll()];
                case 1:
                    result = _a.sent();
                    expect(result.length).toBeGreaterThanOrEqual(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it('show method should return the correct order', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, order.show(orderId)];
                case 1:
                    result = _a.sent();
                    expect(result).toEqual({
                        id: orderId,
                        productId: productId,
                        quantity: 20,
                        userId: userId,
                        status: "0"
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    it('delete method should remove the order', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, order.delete(orderId)];
                case 1:
                    res = _a.sent();
                    expect(res == 1).toBeTrue();
                    return [2 /*return*/];
            }
        });
    }); });
});
