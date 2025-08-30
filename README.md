# FCircuit Core

**fcircuit-core** is a JavaScript library for modeling **Switching Function Elements (SFE) with delay**.
It provides base classes and node implementations for building and simulating circuits such as IG, MIG, and AIG.

---

## Installation

```bash
npm install fcircuit-core
```

---

## Quick Start

```js
import { Circuit, IG, MIG, AIG } from "fcircuit-core";

// Example: initialize a circuit
const circuit = new Circuit();
circuit.parseCircuit(jsonData, 1);
circuit.initializeCircuit();
circuit.simulateCircuit();
```

---

## API Overview

### Core Classes

* **Circuit** – base class for circuit modeling and simulation.
  Main methods include:

  * `validateCircuit(circuit, circuitNumber)`
  * `parseCircuit(jsonData, circuitNumber)`
  * `findAllRoots()`
  * `findAllPaths()`
  * `simulateCircuit(depthsDict)`
  * `calculateOutput()`
  * `calculateDelay(stateHistory)`

* **IG** – extends `Circuit`. Specialized logic for IG circuits.

* **MIG** – extends `IG`. Implements majority-inverter gates.

* **AIG** – extends `IG`. Implements AND-inverter gates.

### Node Classes

* **Vertex** – base node class.
* **InputElement** – input node.
* **FunctionalElement** – functional element, with methods:

  * `getInputValues(circuit)`
  * `computeFunction(circuit, inputValues)`

Additional node types are available in:

* `ig-nodes.js` (e.g., `ZeroElement`, `InvertElement`)
* `mig-nodes.js` (e.g., `MajorityInvertElement`)
* `aig-nodes.js` (e.g., `AndInvertElement`)

---

## Utilities

* `generate-combinations.js` – generates all binary vectors of a given length.

---

## Testing

Run unit tests with:

```bash
npm test
```

---

## Project Structure

* **src/core/** – main circuit and node implementations
* **src/utils/** – helper utilities
* **test/** – unit tests

---

## License

MIT

---