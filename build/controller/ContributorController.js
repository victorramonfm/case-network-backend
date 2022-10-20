"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContributorController = void 0;
class ContributorController {
    constructor(contributorBusiness) {
        this.contributorBusiness = contributorBusiness;
        this.register = async (req, res) => {
            try {
                const input = {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    participation: req.body.participation
                };
                const response = await this.contributorBusiness.register(input);
                res.status(201).send(response);
            }
            catch (error) {
                console.log(error);
                if (error instanceof Error) {
                    return res.status(400).send({ message: error.message });
                }
                res.status(500).send({ message: "Erro inesperado" });
            }
        };
        this.getContributors = async (req, res) => {
            try {
                const response = await this.contributorBusiness.getContributors();
                res.status(200).send(response);
            }
            catch (error) {
                console.log(error);
                if (error instanceof Error) {
                    return res.status(400).send({ message: error.message });
                }
                res.status(500).send({ message: "Erro inesperado" });
            }
        };
        this.deleteContributor = async (req, res) => {
            try {
                const input = {
                    idToDelete: req.params.id
                };
                const response = await this.contributorBusiness.deleteContributor(input);
                res.status(200).send(response);
            }
            catch (error) {
                console.log(error);
                if (error instanceof Error) {
                    return res.status(400).send({ message: error.message });
                }
                res.status(500).send({ message: "Erro inesperado" });
            }
        };
    }
}
exports.ContributorController = ContributorController;
//# sourceMappingURL=ContributorController.js.map