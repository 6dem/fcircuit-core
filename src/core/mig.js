import { ZeroElement } from "./ig-nodes.js"
import { IG } from "./ig.js"
import { MajorityInvertElement } from "./mig-nodes.js"
import { InputElement } from "./nodes.js"

class MIG extends IG {
    constructor() {
        super()
        this.outputInversion
    }

    validateCircuit(circuit, circuitNumber) {
        if (!circuit || circuit.format !== "mig") {
            throw new Error(
                `Invalid format or circuit number: ${circuitNumber}`
            )
        }
    }

    creatingElements(circuit) {
        this.instancesFE[0] = new ZeroElement(0)

        for (let i = 1; i < this.countInputs + 1; i++) {
            this.inputsNums.push(i)
            this.instancesFE[i] = new InputElement(i)
        }

        for (let i = 0; i < circuit.countFE; i++) {
            let fe = circuit.instancesFE[i]
            this.instancesFE[fe.id] = new MajorityInvertElement(
                fe.inputsFE,
                fe.id,
                fe.inverses
            )
        }
    }

    initializeCircuit(setNumber = 0) {
        return this._initializeCircuitInternal(setNumber, 1)
    }
}

export { MIG }

