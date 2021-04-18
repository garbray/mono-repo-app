import UAL from "../ual";

describe("UAL", () => {
  const options = {
    user_id: "user1",
    session_id: "session1",
    device_id: "device1",
    loggerLvl: 0,
    loggerEnable: true,
  };

  let spyConsoleLog: jest.SpyInstance;

  const ual = new UAL(options);
  it("should add a new event listener", () => {
    spyConsoleLog = jest.spyOn(console, "log").mockImplementation(jest.fn());
    const analyticsMockFn = jest.fn((eventObj) => {
      return eventObj;
    });

    ual.addListener("eventClick", analyticsMockFn);
    const testEvent = {
      event_name: "test event",
      value: "value test",
      additional_params: [
        {
          param_name: "param Name",
          param_value: "param value",
        },
      ],
      timestamp: new Date(),
      user_id: "1",
      session_id: "session",
      device_id: "webkit",
      platform: "web",
    };

    // emit an event on test
    ual.emit("eventClick", testEvent);
    expect(analyticsMockFn).toHaveBeenCalled();
    expect(analyticsMockFn).toHaveBeenCalledWith(testEvent);
    // has events on the eventClick list
    expect(ual.listenerCount("eventClick")).toBe(1);
    // remove logger option
    options.loggerEnable = false;
    ual.mergeOptions(options);
    ual.emit("eventClick", testEvent);
    expect(analyticsMockFn).toHaveBeenCalledTimes(2);

    // remove test listener
    ual.removeListener("eventClick", analyticsMockFn);
    expect(ual.listenerCount("eventClick")).toBe(0);
    // restore console log
    spyConsoleLog.mockRestore();
  });

  const ual2 = new UAL(options);
  it("should return the created instance when try to create a new instance", () => {
    expect(ual2).toBeDefined();
  });
});
