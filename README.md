# Learn d3

This repository contains my journey of learning d3. Apart from d3, a few other techniques are also applied/learned in this repository:

- Next.js 13
- Dockerizing a Next.js 13 app
- Writing a Helm-Chart for it (currently only works locally in a kind-cluster, easily adaptable through values though)

## Local deployment in a kind cluster

### Prerequisites

- running kind-cluster with `ingress.nginx` preconfigured (automated with https://github.com/tim-hilt/lcb)
- docker-setup
- kubectl
- helm

### Commands

```sh
# Run from project root
export NAME=learn-d3
docker build -t $name .
kind load docker-image $name
helm install learn-d3 --set name=$name ./helm/
# --set flag not needed if docker-image built with -t learn-d3 (default)
```

If the above commands finished successfully, the app is available under http://learn-d3.localhost/
