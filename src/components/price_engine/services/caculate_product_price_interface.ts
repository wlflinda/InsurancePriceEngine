import { CodeProduct } from "../models/code_product";

export interface CalculateProductPrice {
    calculateProductPrice(input: CodeProduct): number;
}