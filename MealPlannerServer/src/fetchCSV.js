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
        while (_) try {
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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var fs = require("fs");
var readline = require("readline");
require("dotenv/config");
var mongoose = require("mongoose");
var mongoOpt = {
    user: "mealAdmin",
    pass: "5hb9cWV8wJQgbUg4",
    useNewUrlParser: true,
    useUnifiedTopology: true
};
console.log("OPTIONS", mongoOpt);
var resourceSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    units: Object,
    energy: String,
    prot: String,
    carb: String,
    fat: String,
    fib: String,
    allergens: Array,
    category: Array
}, { collection: 'resources' });
var Resource = mongoose.model("Resource", resourceSchema);
mongoose.connect("mongodb://176.222.224.212:27017/mealPlannerdb?authSource=mealPlannerdb", mongoOpt);
var nameExtensions = [
    ' - kus',
    ' ks',
    ' - lžíce',
    ' - lžička',
    ' - stroužek',
    ' - krajíc',
    ' - kulička'
];
var units = [
    'g',
    'ml',
    'kus',
    'střední kus',
    'polévková lžíce',
    'kávová lžička',
    'kulička',
    'stroužek',
    'krajíc'
];
processLineByLine('../assets/example2.csv').then(function (resources) {
    // getRange will return documents from database by :start-end
    var skip = 0;
    var limit = 20;
    limit = limit - skip;
    // Resource.collection.drop()
    // .then(() => {
    var ResourcesModel = mongoose.model('resources', resourceSchema, 'resources');
    ResourcesModel.collection.insert(resources, function (err, docs) {
        if (err) {
            console.log(err);
            return;
        }
        else {
            console.log("Multiple documents inserted");
        }
    });
    // Resource.find()
    //   .exec()
    //   .then((doc: any) => {
    //     console.log("FOUND DOCS")
    //     console.log(doc);
    //   })
    //   .catch((err: any) => {
    //     console.log(err);
    //   })
})["catch"](function (err) {
    console.log(err);
});
function processLineByLine(fileName) {
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function () {
        var fileStream, rl, l, resources, rl_1, rl_1_1, line, lineJSON, e_1_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    fileStream = fs.createReadStream(fileName, 'utf8');
                    rl = readline.createInterface({
                        input: fileStream,
                        crlfDelay: Infinity
                    });
                    l = 0;
                    resources = [];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, 7, 12]);
                    rl_1 = __asyncValues(rl);
                    _b.label = 2;
                case 2: return [4 /*yield*/, rl_1.next()];
                case 3:
                    if (!(rl_1_1 = _b.sent(), !rl_1_1.done)) return [3 /*break*/, 5];
                    line = rl_1_1.value;
                    if (l < 2) { // skip first two lines
                        l++;
                        return [3 /*break*/, 4];
                    }
                    lineJSON = processJson(line);
                    resources.push(lineJSON);
                    _b.label = 4;
                case 4: return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 12];
                case 6:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 12];
                case 7:
                    _b.trys.push([7, , 10, 11]);
                    if (!(rl_1_1 && !rl_1_1.done && (_a = rl_1["return"]))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _a.call(rl_1)];
                case 8:
                    _b.sent();
                    _b.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12: return [2 /*return*/, compareResources(resources)];
            }
        });
    });
}
// compareResources takes an array of objects representing resources and compare resource with each other
// if names match ("banany" === "banany - stredni kus") it merge them and delete the one with extension
function compareResources(resources) {
    for (var i = 0; i < resources.length; i++) {
        for (var j = 0; j < nameExtensions.length; j++) {
            if (resources[i].name.endsWith(nameExtensions[j])) {
                if (findDuplicate(resources, i, nameExtensions[j])) { // duplicate was found, merged and resource at i position deleted
                    // i--;
                }
                else { // no true duplicate, just changed the name
                }
                // console.log(resources[i].name)
                break;
            }
        }
    }
    console.log(resources);
    return resources;
    // console.log(JSON.stringify(resources, null, 2))
}
// if duplicate was found, return true
// if duplicate was not found change name and return false
function findDuplicate(resources, position, extension) {
    var nameWithoutEx = resources[position].name.replace(extension, "");
    for (var i = 0; i < resources.length; i++) {
        if (i === position) {
            continue;
        }
        ;
        if (resources[i].name === nameWithoutEx) { // duplicate found
            mergeResources(resources, i, position);
            return true;
            // console.log(resources[i].name)
        }
    }
    // no duplicate here
    resources[position].name = nameWithoutEx;
    return false;
}
// mergeResources will add units of duplicate to units of parent and remove duplicate
function mergeResources(resources, noExtension, withExtension) {
    if (resources[withExtension].units.length > 1) { // check if in duplicate is only one unit, (because it should be)
        console.log("something went wrong");
        process.exit(1);
    }
    resources[noExtension].units.push(resources[withExtension].units[0]);
    resources = resources.splice(withExtension, 1); // remove duplicated resource
}
// processLine takes a line and split it correctly into array of columns
function processLine(str) {
    var columns = [];
    for (var i = 0; i < str.length; i++) { // get string character by character
        var column = "";
        while (str[i] !== "," && i != str.length) { // while i find next quote
            if (str[i] === '"') { // is there a double quote?
                i++;
                while (str[i] !== '"') { // continue after you find next one
                    column += str[i];
                    i++;
                }
                i++;
                continue; // dont include second double quote at the end
            }
            column += str[i];
            i++;
        }
        columns.push(column);
        if (str[i + 1] == ",") {
            columns.push('');
            i++;
        }
    }
    if (columns.length === 24) {
        columns.push('');
    }
    console.log(str, columns.length);
    return columns;
}
// processJson takes a line, use processLine to split it into columns and then format it into correct JSON
function processJson(line) {
    var arr = processLine(line);
    console.log(arr.length);
    if (arr.length != 25) {
        console.log("ERROR, the line wasn't processed correctly", arr);
        process.exit(1);
    }
    var allergens = [];
    for (var i = 10; i < 24; i++) {
        if (arr[i] !== '') {
            allergens.push(arr[i].split('.')[1]);
        }
    }
    var category = [];
    if (arr[24] !== '') {
        category.push(arr[24]);
    }
    var resource = {
        name: arr[1],
        units: [
            {
                name: arr[2],
                grammage: parseFloat(arr[3])
            }
        ],
        energy: parseFloat(arr[4]),
        prot: parseFloat(arr[6]),
        carb: parseFloat(arr[7]),
        fat: parseFloat(arr[8]),
        fib: parseFloat(arr[9]),
        allergens: allergens.map(function (s) { return s.trim(); }),
        category: category
    };
    return resource;
}
module.exports = Resource;
