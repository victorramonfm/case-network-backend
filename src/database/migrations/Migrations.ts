import { BaseDatabase } from "../BaseDatabase"
import { ContributorDatabase } from "../ContributorDatabase"
import { users } from "./data"

class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error: any) {
            console.log("Error in migrations...")
            console.log(error.message)
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${ContributorDatabase.TABLE_CONTRIBUTOR};
        
        CREATE TABLE IF NOT EXISTS ${ContributorDatabase.TABLE_CONTRIBUTOR}(
            id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
            first_name VARCHAR(255),
            last_name VARCHAR(255),
            participation FLOAT
        );
        `)
    }

    insertData = async () => {
        await BaseDatabase
            .connection(ContributorDatabase.TABLE_CONTRIBUTOR)
            .insert(users)
    }
}

const migrations = new Migrations()
migrations.execute()