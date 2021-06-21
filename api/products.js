"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
var Products = /** @class */ (function () {
    function Products() {
        var _this = this;
        this.get = function () {
            return _this.products;
        };
        this.getById = function (id) {
            return _this.products.filter(function (p) { return p.id === id; });
        };
        this.save = function (product) {
            _this.products.push(product);
        };
        this.update = function (index, product) {
            _this.products[index] = product;
        };
        this.delete = function (index) {
            var product = _this.products[index];
            _this.products.splice(index, 1);
            return product;
        };
        this.products = [];
    }
    return Products;
}());
exports.Products = Products;
