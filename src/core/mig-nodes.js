import { InvertElement } from "./ig-nodes.js"
class MajorityInvertElement extends InvertElement {
    constructor(inputs, index, inverses) {
        super(23, inputs, index)
        this.inverses = inverses
    }
}

export { MajorityInvertElement }
