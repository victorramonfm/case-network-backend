export class Contributor {
    constructor(
        private firstName: string,
        private lastName: string,
        private participation: number
    ) { }

    public getFirstName = () => {
        return this.firstName
    }

    public getLastName = () => {
        return this.lastName
    }

    public getParticipation = () => {
        return this.participation
    }

    public setFirstName = (newFirstName: string) => {
        this.firstName = newFirstName
    }

    public setLastName = (newLastName: string) => {
        this.lastName = newLastName
    }

    public setParticipation = (newParticipation: number) => {
        this.participation = newParticipation
    }
}