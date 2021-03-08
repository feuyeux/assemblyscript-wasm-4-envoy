// import {
//     log, LogLevelValues
// } from "@solo-io/proxy-runtime";
import {JSON} from "assemblyscript-json";

export function add(a: i32, b: i32): i32 {
    let c = a + b;
    // log(LogLevelValues.info, a.toString() + "+" + b.toString() + "=" + c.toString());
    return c;
}

export function tryJson(v: string): f64 {
    let value = JSON.parse(v);
    // let jsonObj: JSON.Obj = <JSON.Obj>value;
    // let numOrNull: JSON.Num | null = jsonObj.getNum("y");
    // if (numOrNull != null) {
    //     // use .valueOf() to turn the high level JSON.Num type into a f64
    //     let value: f64 = numOrNull.valueOf();
    //     return value
    // }
    return -1
}
