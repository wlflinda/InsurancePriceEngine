import { CodeProduct } from "../../../../components/price_engine/models/code_product";
import { CalculateProductPrice } from "../../../../components/price_engine/services/caculate_product_price_interface";
import { CalculateProductPriceV1 } from "../../../../components/price_engine/services/calculate_product_price_v1";
import assert from 'assert';

function testPriceEngineV1CanReturnCorrectPrice() {
    const input: CodeProduct = {
        externalApplications: 50,
        microservices: 10,
        kloc: 10000,
        developers: 10,
    }
    const priceEngine: CalculateProductPrice = new CalculateProductPriceV1(); 
    const price = priceEngine.calculateProductPrice(input);
    const expectedPrice = 750;
    assert(price==expectedPrice);
}

testPriceEngineV1CanReturnCorrectPrice();