import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Person {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    age: number;
    @Column()
    birthCountry: string;
    @Column()
    capitalGain: string;
    @Column()
    capitalLoss: string;
    @Column()
    citizenship: string;
    @Column()
    classOfWorker: string;
    @Column()
    dividends: string;
    @Column()
    education: string;
    @Column()
    familyMembersUnder118: string;
    @Column()
    fatherBirthCountry: string;
    @Column()
    fillQuestionnaireForVeteransAdmin: string;
    @Column()
    fulltime: string;
    @Column()
    hispanice: string;
    @Column()
    householdSimple: string;
    @Column()
    householdWithFamily: string;
    @Column()
    incomeTaxLiability: string;
    @Column()
    industryCode: string;
    @Column()
    lastEducation: string;
    @Column()
    livedHere: string;
    @Column()
    mace: string;
    @Column()
    majorIndustryCode: string;
    @Column()
    majorOccupationCode: string;
    @Column()
    maritalStatus: string;
    @Column()
    memberOfLabor: string;
    @Column()
    migrationPrevResInSunbelt: string;
    @Column()
    motherBirthCountry: string;
    @Column()
    msaChange: string;
    @Column()
    numPersonsWorkedForEmployer: string;
    @Column()
    occupationCode: string;
    @Column()
    ownBusinessOrSelfEmployed: string;
    @Column()
    previousResidenceRegion: string;
    @Column()
    previousResidenceState: string;
    @Column()
    reasonForUnemployment: string;
    @Column()
    regChange: string;
    @Column()
    salaryRange: string;
    @Column()
    sex: string;
    @Column()
    veteransBenefits: string;
    @Column()
    wagePerHour: string;
    @Column()
    weeksWorkedInYear: string;
    @Column()
    weight: string;
    @Column()
    withinRegChange: string;
    @Column()
    year: string;
}