import { processData } from "./src/dataProcessor.js";
import type {SampleData} from './src/dataProcessor.ts';

const sampleData: SampleData[] = [
  { id: '1', name: 'Product A', price: 100, discountedPrice: 80 },
  { id: '2', price: 200 },
  { id: '3', name: 'Product C' },
];
 
console.log(processData(sampleData));