import { InvalidRequestError } from "../../../utils/custome_error/invalid_request_error";
import { UnexpectedError } from "../../../utils/custome_error/unexpected_error";
import { CodeProduct } from "../models/code_product";
import { CalculateProductPrice } from "../services/caculate_product_price_interface";
import { CalculateProductPriceV2 } from "../services/calcualte_product_price_v2";
import { CalculateProductPriceV1 } from "../services/calculate_product_price_v1";

const priceEngineV1 : CalculateProductPrice  = new CalculateProductPriceV1();
const priceEngineV2: CalculateProductPrice = new CalculateProductPriceV2();

export function calculateProductPrice(input: CodeProduct):number | Error {
     /**
      * When initially launching different versions, clients may not be able to immediately update their code to include versioning. 
      *Therefore, we need to ensure backward compatibility to continue supporting scenarios where input data lacks version information.
      */
    if( input.version == undefined || input.version ==1 ) {
        return calculateProductPriceWithDifferentVersionEngine(priceEngineV1, input);
    } else if(input.version == 2 ) {
        return calculateProductPriceWithDifferentVersionEngine(priceEngineV2, input);
    } else {
        return new InvalidRequestError(`Invalid request, version ${input.version} is not a valid version number`);
    } 
}

function calculateProductPriceWithDifferentVersionEngine(priceEngine:CalculateProductPrice, input: CodeProduct): number | Error {
    try {
       return  priceEngine.calculateProductPrice(input);       
    } catch ( error ) {
        console.log(`Error when calculating price for the product  from version ${input.version} price engine. Error: ${error}`);
        return new UnexpectedError(`Error when calculating price for the product  from version ${input.version} price engine`);
    }
}
