import _Object$create from "core-js-pure/features/object/create.js";
import setPrototypeOf from "./setPrototypeOf.js";
export default function _inheritsLoose(t, o) {
  t.prototype = _Object$create(o.prototype), t.prototype.constructor = t, setPrototypeOf(t, o);
}