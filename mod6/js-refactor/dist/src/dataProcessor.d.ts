export interface Data {
    id: string;
    name: string;
    price: number;
    discountedPrice: number;
}
export interface SampleData {
    id: string;
    name?: string;
    price?: number;
    discountedPrice?: number;
}
export declare function processData(data: SampleData[]): Data[];
//# sourceMappingURL=dataProcessor.d.ts.map