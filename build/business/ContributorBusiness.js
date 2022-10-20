"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ContributorDatabase_1 = require("../database/ContributorDatabase");
const Contributor_1 = require("../model/Contributor");
class ContributorBusiness {
    constructor(contributorDatabase) {
        this.contributorDatabase = contributorDatabase;
        this.register = async (input) => {
            const firstName = input.firstName;
            const lastName = input.lastName;
            const participation = input.participation;
            const contributor = new Contributor_1.Contributor(firstName, lastName, participation);
            const contributorDatabase = new ContributorDatabase_1.ContributorDatabase();
            const response = await contributorDatabase.addContributor(contributor);
            return response;
        };
        this.getContributors = async () => {
            const contributorDatabase = new ContributorDatabase_1.ContributorDatabase();
            const response = await contributorDatabase.getContributors();
            return response;
        };
        this.deleteContributor = async (input) => {
            const idToDelete = input.idToDelete;
            const contributorDb = await this.contributorDatabase.findById(idToDelete);
            if (!contributorDb) {
                throw new Error("Usuário a ser deletado não encontrado");
            }
            const response = await this.contributorDatabase.deleteContributor(idToDelete);
            return response;
        };
    }
}
exports.default = ContributorBusiness;
//# sourceMappingURL=ContributorBusiness.js.map