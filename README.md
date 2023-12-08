# Price Engine for Technical Companies

The Price Engine is designed to calculate insurance prices for technical companies that own multiple applications and services, employing numerous developers. The input parameters for the calculation include:

- `externalApplications`: Number of external applications.
- `microservices`: Number of microservices.
- `Kloc`: Lines of code (Kloc) in the software.((KLoc = 1000 lines of code))
- `developers`: Number of developers.
- `version`: Version of the pricing engine (optional).

## Versioning

If the `version` parameter is not specified, the Price Engine defaults to using version 1 to calculate the insurance price.

## Output

The engine provides either a calculated price based on the input parameters or return an error with error message if there are issues with the provided data.