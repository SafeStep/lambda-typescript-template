import { SQSRecord } from "aws-lambda";
import { Service } from "typedi";

@Service()
export default class Processor {
    
    process(record: SQSRecord) {

    }
}