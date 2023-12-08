import { CodeProduct } from "../models/code_product";
import { CalculateProductPrice } from "./caculate_product_price_interface";

const pricePerApplication: number = 100;
const pricePerMicroService: number = 50;
const pricePerKloc: number = 5;
const pricePerDeveloper: number = 100;
export class CalculateProductPriceV1 implements CalculateProductPrice {

       
        calculateProductPrice(input: CodeProduct): number {
        const externalApplications = input.externalApplications;
        const microservices = input.microservices;
        const developers = input.developers;
        const kloc = input.kloc;

        const price: number = pricePerApplication * externalApplications + pricePerMicroService * microservices + pricePerKloc*kloc + pricePerDeveloper*developers;
        return price;       
    }  
}