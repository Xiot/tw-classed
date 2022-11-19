import { ClassedComponentType } from "../types";

export const COMPONENT_SYMBOL: unique symbol = Symbol("classed-component");

export const isClassedComponent = (
  value: unknown
): value is ClassedComponentType<any> => {
  return typeof value === "object" && Reflect.has(value!, COMPONENT_SYMBOL);
};