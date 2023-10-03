import { Package } from "./package";

export interface Souscription {
    id:number;
    fullName:string;
    email:string;
    password:string
    packages:Package[]
}