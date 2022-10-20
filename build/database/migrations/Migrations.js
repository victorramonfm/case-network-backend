"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDatabase_1 = require("../BaseDatabase");
const ContributorDatabase_1 = require("../ContributorDatabase");
const data_1 = require("./data");
class Migrations extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.execute = async () => {
            try {
                console.log("Creating tables...");
                await this.createTables();
                console.log("Tables created successfully.");
                console.log("Populating tables...");
                await this.insertData();
                console.log("Tables populated successfully.");
                console.log("Migrations completed.");
            }
            catch (error) {
                console.log("Error in migrations...");
                console.log(error.message);
            }
            finally {
                console.log("Ending connection...");
                BaseDatabase_1.BaseDatabase.connection.destroy();
                console.log("Connection closed graciously.");
            }
        };
        this.createTables = async () => {
            await BaseDatabase_1.BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${ContributorDatabase_1.ContributorDatabase.TABLE_CONTRIBUTOR};
        
        CREATE TABLE IF NOT EXISTS ${ContributorDatabase_1.ContributorDatabase.TABLE_CONTRIBUTOR}(
            id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
            first_name VARCHAR(255),
            last_name VARCHAR(255),
            participation FLOAT
        );
        `);
        };
        this.insertData = async () => {
            await BaseDatabase_1.BaseDatabase
                .connection(ContributorDatabase_1.ContributorDatabase.TABLE_CONTRIBUTOR)
                .insert(data_1.users);
        };
    }
}
const migrations = new Migrations();
migrations.execute();
//# sourceMappingURL=Migrations.js.map