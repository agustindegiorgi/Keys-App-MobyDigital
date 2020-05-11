import { Doorkey } from "./Doorkey";

export class Persona {
    dni: number;
    name: string;
    lastname: string;
    telephone: string;
    email: string;
    doorkeys: Doorkey[];
}