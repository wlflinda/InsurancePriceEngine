import { CodeProduct } from "../models/code_product";
import { CalculateProductPrice } from "./caculate_product_price_interface";

const pricePerApplication: number = 120;
const pricePerMicroService: number = 60;
      
export class CalculateProductPriceV2 implements CalculateProductPrice {
    calculateProductPrice(input: CodeProduct): number {
        const externalApplications = input.externalApplications;
        const microservices = input.microservices;
        const basePrice: number = pricePerApplication * externalApplications + pricePerMicroService * microservices;
        const multiplicationFactor = this.calculateMultiplicationFactor(input);  
        const finalPrice = multiplicationFactor * basePrice;
        return finalPrice;
    }

    calculateMultiplicationFactor(input: CodeProduct): number {
        const kloc = input.kloc;
        const developers = input.developers;
        const klocPerDeveloper = kloc/developers;
        let factor = 1;
        if(klocPerDeveloper<=10) {
            factor = 1;
        } else if (klocPerDeveloper<=25) {
            factor = klocPerDeveloper/10;
        } else {
            factor = 2.5 + ((klocPerDeveloper - 25) / 5)
        }
        return factor;
    }
}