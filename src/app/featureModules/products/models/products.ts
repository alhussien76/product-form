export interface Products {
    id?: number,
    name?: string,
    type?: ProductType,
    category?: string,
    is_sup_category?: boolean,
    ref_id?: string,
    password?: string,
    fees?: string,
    fees_percentage?: number

}

export enum ProductType {
    Type1 = 'type1',
    Type2 = 'type2'
}