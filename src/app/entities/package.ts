export enum  PACKAGE_PERIOD {
    MIN_PERIOD="3m",
    MIDDLE_PERIOD="6m",
    MAX_PERIOD="12m"
}
export enum PACKAGE_PRICE {
    MIN_PERIOD="5000",
    MIDDLE_PERIOD="10000",
    MAX_PERIOD="15000"
}

export interface Package {
    name:string,
    period:string,
    price:string
}