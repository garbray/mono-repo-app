/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import EventEmitter from "events";
import { LOG_LEVELS } from "../utils/constants";
import Logger from "../utils/logger";
import { PLATFORM_WEB } from "./constants";
import TypedEventEmitter from "./typedEventListener";

interface AdditionalParams {
  param_name: string;
  param_value: string;
}

interface EventData {
  timestamp: Date;
  event_name: string;
  value: string;
  additional_params: AdditionalParams[];
  user_id: string;
  session_id: string;
  device_id: string;
  platform: string;
}

export interface EventTypes {
  eventClick: (event: EventData) => void;
}

interface Options {
  platform?: string;
  loggerLvl?: number;
  loggerEnable: boolean;
}

class UAL {
  private static instance: UAL;
  options!: Options;
  ee!: any;
  logger!: Logger;

  constructor(options: Options) {
    if (UAL.instance) {
      return UAL.instance;
    }

    UAL.instance = this;
    this.options = this.mergeOptions(options);
    this.logger = new Logger(this.options.loggerLvl);
    this.ee = new EventEmitter() as TypedEventEmitter<EventTypes>;
    return this;
  }

  mergeOptions(options: Options) {
    const defaultOptions = {
      platform: PLATFORM_WEB,
      loggerLvl: LOG_LEVELS.OFF,
    };

    return {
      ...defaultOptions,
      ...options,
    };
  }

  addListener<E extends keyof EventTypes>(event: E, listener: EventTypes[E]) {
    this.ee.addListener(event, listener);
  }

  listenerCount<T extends keyof EventTypes>(event: T) {
    return this.ee.listenerCount(event);
  }

  log<E extends keyof EventTypes>(event: E, args: EventData) {
    this.logger.log({ event, ...args });
  }

  isLoggerEnable() {
    return this.options.loggerEnable;
  }

  emit<E extends keyof EventTypes>(event: E, args: EventData): void {
    if (this.isLoggerEnable()) {
      this.log(event, args);
    }

    this.ee.emit(event, args);
  }

  removeListener<E extends keyof EventTypes>(
    event: E,
    listener: EventTypes[E]
  ) {
    this.ee.removeListener(event, listener);
  }
}

export default UAL;
