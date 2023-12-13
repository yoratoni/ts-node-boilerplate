import { createLogger, format, transports } from "winston";

import GENERAL_CONFIG from "configs/general.config";


const loggerFormat = format.combine(
    format.timestamp({
        format: GENERAL_CONFIG.dateFormat
    }),
    format.printf((info) => `[${info.timestamp}] [${info.level.toUpperCase()}] ${info.message}`),
    format.colorize({
        all: true
    })
);

/**
 * Main Winston logger instance.
 */
const logger = createLogger({
    format: loggerFormat,
    transports: [
        new transports.Console({
            level: GENERAL_CONFIG.verbose ? "silly" : "info"
        })
    ]
});


export default logger;