"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contributor = void 0;
class Contributor {
    constructor(firstName, lastName, participation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.participation = participation;
        this.getFirstName = () => {
            return this.firstName;
        };
        this.getLastName = () => {
            return this.lastName;
        };
        this.getParticipation = () => {
            return this.participation;
        };
        this.setFirstName = (newFirstName) => {
            this.firstName = newFirstName;
        };
        this.setLastName = (newLastName) => {
            this.lastName = newLastName;
        };
        this.setParticipation = (newParticipation) => {
            this.participation = newParticipation;
        };
    }
}
exports.Contributor = Contributor;
//# sourceMappingURL=Contributor.js.map