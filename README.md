# @algorandfoundation/xgov

This is an npm package that provides a set of tools to interact with the xGov smart contracts. 
The workflow is automated and dispatched from the [xgov-beta-sc](https://github.com/algorandfoundation/xgov-beta-sc) repository.
The workflow can also be triggered manually.


The package has three modules it exports, `Proposal`, `XGovRegistry` and `Council`.
These are typed clients generated from the smart contract's ARC-56 ABI definition.
This repository simply handles the generation and packaging of the artifacts.

## Installation

```bash
npm install @algorandfoundation/xgov --save
```

## Usage

### Proposal

```typescript
import { ProposalClient } from '@algorandfoundation/xgov';
```

### Registry

```typescript
import { XGovRegistryClient } from '@algorandfoundation/xgov';
```

## Contributing

> Ensure you have Node.js and Algokit installed on your machine.


Clone the project

```bash
git clone git@github.com:algorandfoundation/xgov-beta-ts.git
```

Ensure submodule is up to date
```bash
git submodule update --init --recursive
```

Install dependencies

```bash
npm install
```

Build the project

```bash
npm run build
```
