/* eslint-disable @typescript-eslint/no-explicit-any */
import { LOG_LEVELS, INFO, ERROR, WARNING, MAX_LEVEL } from "./constants";

type Arguments = any | any[] | Record<string, any>;

export default class Logger {
  logLevel: number;
  constructor(level = 0) {
    this.logLevel = this.isLevelValid(level) ? level : LOG_LEVELS.OFF;
  }

  isLevelValid(level: number) {
    return Object.values(LOG_LEVELS).includes(level);
  }

  setLevel(level: number) {
    if (!this.isAllowedLevel(level)) {
      throw new Error(`level ${level} not allowed`);
    }
    if (!this.isLevelValid(level)) {
      throw new Error(`level ${level} not allowed`);
    }
    this.logLevel = level;
  }

  isAllowedLevel(level: number) {
    return level <= MAX_LEVEL;
  }

  info(args: Arguments) {
    console.info(`%c${INFO}`, "color: blue; fontWeight: bold;", ...args);
  }

  error(args: Arguments) {
    console.error(`%c${ERROR}`, "color: red; fontWeight: bold;", ...args);
  }

  warn(args: Arguments) {
    console.warn(`%c${WARNING}`, "color: orange; fontWeight: bold;", ...args);
  }

  log(args: Arguments) {
    if (typeof args === "object") {
      args[Symbol.iterator] = function () {
        const values = Object.values(this);
        let index = 0;
        const length = values.length;
        return {
          next: () => {
            return index < length
              ? { done: false, value: values[index++] }
              : { done: true, value: undefined };
          },
        };
      };
    }

    switch (this.logLevel) {
      case 0:
        console.log(...args);
        break;
      case 1:
        this.error(args);
        break;
      case 2:
        this.warn(args);
        break;
      case 3:
        this.info(args);
        break;
    }
  }
}
