import { Request, Response } from "express";
import ContributorBusiness from "../business/ContributorBusiness"

export class ContributorController {
    constructor(
        protected contributorBusiness: ContributorBusiness
    ) { }

    public register = async (req: Request, res: Response) => {
        try {
            const input: any = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                participation: req.body.participation
            }

            const response = await this.contributorBusiness.register(input)

            res.status(201).send(response)
        } catch (error) {
            console.log(error)

            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    public getContributors = async (req: Request, res: Response) => {
        try {
            const response = await this.contributorBusiness.getContributors()

            res.status(200).send(response)
        } catch (error) {
            console.log(error)

            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    public deleteContributor = async (req: Request, res: Response) => {
        try {
            const input: any = {
                idToDelete: req.params.id
            }

            const response = await this.contributorBusiness.deleteContributor(input)

            res.status(200).send(response)
        } catch (error) {
            console.log(error)

            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    }
}