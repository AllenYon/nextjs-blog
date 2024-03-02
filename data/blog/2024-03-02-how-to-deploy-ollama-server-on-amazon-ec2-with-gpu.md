---
title: 'How to Deploy Ollama Server on Amazon EC2 with GPU'
date: '2024/03/02'
lastmod: '2024/03/02'
tags: ['Ollama', 'Amazon EC2', 'GPU']
draft: false
summary: '欢迎阅读有关如何在 Amazon EC2 带有 GPU 的实例上部署 Ollama Server 的综合指南。'
images:
  [
    'https://opengraph.githubassets.com/62354a5ca230d774e2b2d3e9ce07f5a0612861511fb8416d1fcf42f31bf704f5/ollama/ollama',
  ]
authors: ['default']
layout: PostLayout
---

欢迎阅读有关如何在 Amazon EC2 带有 GPU 的实例上部署 Ollama Server 的综合指南。
本指南非常适合个人或者小团队在云中搭建自己的开源本地大语言模型 (LLM) AI 功能，确保数据隐私、可定制性、法规遵从性和经济高效的 AI 解决方案。
在本指南中，我们将逐步完成该过程，提供详细的说明和参考以确保顺利设置。

整体架构图如下

## LLM 和 Ollama

要部署一个大语言模型并且对外提供服务，不仅需要有高端 GPU，而且还需要有广泛的技术专业知识，这使得很多人只能依赖于大公司提供的 API 服务，如 OpenAI 的 GPT-3 或者 Google 的 BERT。

然而[llama.cpp](https://github.com/ggerganov/llama.cpp)这个开源项目通过优化 CPU 和简化的部署方式实现了 AI 的'民主化',也就是说个人开发者或者小团队也能够在云端部署自己的 AI 服务。

Ollama 是基于 llama.cpp 的一个项目，它提供了一个更加友好的 API 接口，可以直接通过 HTTP 请求来调用 AI 服务。
它支持在 macOS, Linux, Windows 上部署，也支持在云端部署，而且支持 GPU 加速。

## 在 EC2 上部署 Ollama

### Step 1: 创建 EC2 实例

想要创建一个带有 GPU 的 EC2 实例，首先需要在 AWS 上面申请额度。
完成额度审批后，我们可以在 EC2 控制台上创建一个实例。

### Step 2: 安装 Ollama

待续
