"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContributorDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class ContributorDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.addContributor = async (contributor) => {
            const contributorDb = {
                first_name: contributor.getFirstName(),
                last_name: contributor.getLastName(),
                participation: contributor.getParticipation()
            };
            await BaseDatabase_1.BaseDatabase
                .connection(ContributorDatabase.TABLE_CONTRIBUTOR)
                .insert(contributorDb);
            return this.getContributors();
        };
        this.getContributors = async () => {
            const contributorsDb = await BaseDatabase_1.BaseDatabase
                .connection(ContributorDatabase.TABLE_CONTRIBUTOR)
                .select();
            return { contributorsDb };
        };
        this.deleteContributor = async (id) => {
            await BaseDatabase_1.BaseDatabase
                .connection(ContributorDatabase.TABLE_CONTRIBUTOR)
                .delete()
                .where({ id });
            return this.getContributors();
        };
        this.findById = async (id) => {
            const contributorsDb = await BaseDatabase_1.BaseDatabase
                .connection(ContributorDatabase.TABLE_CONTRIBUTOR)
                .select()
                .where({ id });
            return contributorsDb[0];
        };
    }
}
exports.ContributorDatabase = ContributorDatabase;
ContributorDatabase.TABLE_CONTRIBUTOR = "Contributor";
//# sourceMappingURL=ContributorDatabase.js.map