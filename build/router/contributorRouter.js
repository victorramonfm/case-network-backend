"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contributorRouter = void 0;
const express_1 = require("express");
const ContributorBusiness_1 = __importDefault(require("../business/ContributorBusiness"));
const ContributorController_1 = require("../controller/ContributorController");
const ContributorDatabase_1 = require("../database/ContributorDatabase");
exports.contributorRouter = (0, express_1.Router)();
const contributorController = new ContributorController_1.ContributorController(new ContributorBusiness_1.default(new ContributorDatabase_1.ContributorDatabase()));
exports.contributorRouter.get("/", contributorController.getContributors);
exports.contributorRouter.post("/", contributorController.register);
exports.contributorRouter.delete("/:id", contributorController.deleteContributor);
//# sourceMappingURL=contributorRouter.js.map