import Logger from "../logger";

// const logSpy = (type: string) => {
//   return jest.spyOn(console, type).mockImplementation();
// }

describe("Logger", () => {
  let logger: Logger;
  let spyConsoleWarn: jest.SpyInstance;
  let spyConsoleInfo: jest.SpyInstance;
  let spyConsoleError: jest.SpyInstance;
  let spyConsoleLog: jest.SpyInstance;

  beforeEach(() => {
    logger = new Logger();
    spyConsoleWarn = jest.spyOn(console, "warn").mockImplementation();
    spyConsoleInfo = jest.spyOn(console, "info").mockImplementation();
    spyConsoleError = jest.spyOn(console, "error").mockImplementation();
    spyConsoleLog = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    spyConsoleWarn.mockRestore();
    spyConsoleInfo.mockRestore();
    spyConsoleError.mockRestore();
    spyConsoleLog.mockRestore();
  });

  it("should have a default log level equal to zero", () => {
    expect(logger.logLevel).toBe(0);
  });

  it("should have a defined log level equal to one", () => {
    const logger1 = new Logger(1);
    expect(logger1.logLevel).toBe(1);
  });

  it("should have a defined log level equal to one", () => {
    const logger1 = new Logger(10);
    expect(logger1.logLevel).toBe(0);
  });

  it("should be able to change the logLevel", () => {
    expect(logger.logLevel).toBe(0);
    logger.setLevel(2);
    expect(logger.logLevel).toBe(2);
  });

  it("should trow and error is the logLevel is not allowed", () => {
    logger.setLevel(1);

    expect(() => {
      logger.setLevel(777);
    }).toThrowError("level 777 not allowed");

    expect(logger.logLevel).toBe(1);
  });

  it("should trow and error is the logLevel is not allowed", () => {
    logger.setLevel(1);

    expect(() => {
      logger.setLevel(-3);
    }).toThrowError("level -3 not allowed");

    expect(logger.logLevel).toBe(1);
  });

  it("should console log when is set as default the log level", () => {
    logger.log([1, 2, 3]);
    expect(spyConsoleLog).toHaveBeenCalled();
    expect(spyConsoleLog.mock.calls).toEqual([[1, 2, 3]]);
  });

  it("should call console.error", () => {
    logger.setLevel(1);
    logger.log("test");
    expect(spyConsoleError).toHaveBeenCalled();
  });

  it("should call console.warn", () => {
    logger.setLevel(2);
    logger.log("test");
    expect(spyConsoleWarn).toHaveBeenCalled();
  });

  it("should call console.info", () => {
    logger.setLevel(3);
    logger.log("test");
    expect(spyConsoleInfo).toHaveBeenCalled();
  });
});
