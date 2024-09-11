import { ConsoleLogger, Injectable } from '@nestjs/common';
import * as fs from 'fs'
import { promises as fsPromises } from 'fs';



@Injectable()
export class MyLoggerService extends ConsoleLogger {
    log(message: any, context?: string) {
        const entry = `${context}\t${message}`

        super.log(message, context)
    }

    error(message: any, stackOrContext?: string) {
        const entry = `${message}\t${stackOrContext}`

        super.error(message, stackOrContext)
    }
}
