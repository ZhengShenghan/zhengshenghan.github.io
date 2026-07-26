---
title:          "Formal Security Analysis of Agent Protocol Composition"
date:           2026-06-27 00:01:00 +0800
selected:       false
pub:            "arXiv preprint"
pub_date:       "2026"

abstract: >-
  AI agent protocols define how agents use tools, delegate work, and coordinate across software systems, but their security requirements remain incomplete and inconsistently enforced across deployments. We present AgentThread, a source-linked framework for security assurance analysis of agent protocols, from specification text to running SDKs, contributing a layered security scope, protocol-derived checks formalized as TLA+ invariants, and a two-phase checker that compiles protocol specifications into model-checkable models and replays executable counterexamples against real SDKs. Across five emerging agent protocols, AgentThread identifies 35 specification-level findings, supports them with 80 implementation tests against production SDKs and reference servers, and finds 30 additional failures that emerge only under protocol composition.
cover:          /assets/images/covers/Formal_1.png
authors:
  - Shenghan Zheng
  - Qifan Zhang
  - Zheng Zhang
  - Haonan Li
  - Christophe Hauser
links:
  Paper: https://arxiv.org/pdf/2606.28690
