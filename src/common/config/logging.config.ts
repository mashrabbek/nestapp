import { WinstonModuleOptions } from "nest-winston";
import * as winston from 'winston';
import { utilities as nestWinstonModuleUtilities} from 'nest-winston';

export const winstonOptions : WinstonModuleOptions = {
    transports: [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
          nestWinstonModuleUtilities.format.nestLike(),
          winston.format.printf((info) => {
             return `${info.timestamp} ${info.level} ${info.message} ${info.httpRequest.status} ${info.httpRequest.remoteIp} ${info.httpRequest.userAgent} ${info.responseTime}ms`;
          })
        ),
      }),
      
      new winston.transports.File({
        format: winston.format.combine(
          winston.format.timestamp(),
          nestWinstonModuleUtilities.format.nestLike(),
          winston.format.printf((info) => {
            return `${info.timestamp} ${info.level} ${info.message} ${info.httpRequest.status} ${info.httpRequest.remoteIp} ${info.httpRequest.userAgent} ${info.responseTime}ms`;
         })
        ),
        filename: 'app.log'
      })
    ]
};