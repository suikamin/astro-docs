---
title: 'バイナリ解析とPwn'
description: 'バイナリ解析（Rev）とメモリ破壊攻撃（Pwn）の実践手法'
sidebar:
  label: '概要'
---

## 概要

低レイヤーセキュリティの中核であるリバースエンジニアリング（Reversing）とバイナリExploit（Pwnable）を扱います。
静的・動的解析ツールの実践的な活用から、各種メモリ破壊攻撃、最新の保護機構を回避するExploit手法までを攻撃種ごとに網羅します。

## 学習コンテンツ（予定）

- **リバースエンジニアリング基礎**: GDB（pwndbg/gef）、Ghidraによるバイナリ解析
- **バッファオーバーフロー (BOF)**: スタック破壊とリターンアドレスの奪取
- **ROP (Return-Oriented Programming)**: ガジェットの探索とROPチェーン構築
- **セキュリティ保護機構の回避**: ASLR、DEP/NX、Stack Canary、PIEの仕組みと突破法
- **ヒープExploit**: Use-After-Free、Double Free、tcache/fastbinの挙動と攻略
