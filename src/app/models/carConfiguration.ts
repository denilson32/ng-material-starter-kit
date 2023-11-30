import { Car } from "./car";
import { ComfortFeature } from "./comfortFeature";
import { SecurityFeature } from "./securityFeature";

export class CarConfiguration {
    constructor(
        public model: string,
        public description: string,
        public brand: Car,
        public securityFeatures: SecurityFeature[],
        public comfortFeatures: ComfortFeature[]
    ){}    
}