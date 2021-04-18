import TypedEventEmitter from "../typedEventListener";
import EventEmitter from "events";

interface Event {
  name: string;
  age: number;
  test: string;
}

interface IEe {
  test: (name: string) => void;
  test1: (event: Event) => void;
}

const ee = new EventEmitter() as TypedEventEmitter<IEe>;

describe("EventEmitter", () => {
  it("should add an new event listener", () => {
    const mockFn = jest.fn((name) => {
      return name;
    });
    const mockFn1 = jest.fn(({ name, age }) => {
      return { age, name };
    });

    const mockFn2 = jest.fn(({ name, age }) => {
      return { age, name };
    });

    ee.addListener("test", mockFn);
    ee.addListener("test1", mockFn1);
    ee.addListener("test1", mockFn2);

    expect(ee.eventNames()).toEqual(["test", "test1"]);

    // emit an event on test
    ee.emit("test", "testArgument");
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledWith("testArgument");

    expect(ee.listenerCount("test")).toBe(1);

    // remove test listener
    ee.removeListener("test", mockFn);
    expect(ee.listenerCount("test")).toBe(0);

    expect(ee.eventNames()).toEqual(["test1"]);

    const obj = { test: "test", name: "t", age: 25 };
    // send test1
    ee.emit("test1", obj);
    expect(mockFn1).toHaveBeenCalled();
    expect(mockFn2).toHaveBeenCalled();
    expect(mockFn1).toHaveBeenCalledWith(obj);
    expect(mockFn2).toHaveBeenCalledWith(obj);
  });
});
