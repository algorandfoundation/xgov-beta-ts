# @algorandfoundation/xgov

This is an npm package that provides a set of tools to interact with the xGov smart contracts. 
The workflow is automated and dispatched from the [xgov-beta-sc](https://github.com/algorandfoundation/xgov-beta-sc) repository.
The workflow can also be triggered manually.


The package has two modules it exports, `Proposal` and `XGovRegistry`.
Both are typed clients generated from the smart contract's ARC-32 ABI definition.
This repository simply handles the generation and packaging of the artifacts.

## Installation

```bash
npm install algorandfoundation/xgov-beta-ts --save
```

## Usage

### Proposal

```typescript
import { ProposalClient } from '@algorandfoundation/xgov/proposal';
```

### Registry

```typescript
import { XGovRegistryClient } from '@algorandfoundation/xgov/registry';
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
