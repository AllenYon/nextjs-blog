---
title: 'How to prepare the final interview'
date: '2024/03/10'
lastmod: '2024/03/10'
tags: ['Interview', 'Preparation']
draft: false
summary: 'This blog post summarizes a mock interview discussion on designing a minimalist version (MVP) of Amazon Prime Video. It explores the core functionalities and considerations for building a large-scale video streaming platform.'
images:
  [
    'https://i.pcmag.com/imagery/reviews/02dIsBiVpmVTMeXkrKxWy0W-13.fit_lim.size_1050x591.v1582749138.png',
  ]
authors: ['default']
layout: PostLayout
---

Why
viewpoint.ca 网站提供了 NS 省范围内的房地产数据信息，比如挂牌价，待成交价，成交加等等非常全面的信息
但是缺乏一些高阶数据，用于预测市场越来走势的数据 3. 日成交均价 4. 挂牌总量 5. 成交平均周期 6. 每日新增挂牌量 OK 7. 每日成交数 OK 8. 每日成交总价 OK 8. 每日成交均价 8. NS 省 挂牌总量 9. NS 省

我觉得缺乏这些数据的原因，在于房地产协会对于数据的垄断导致的，这些数据是非常有价值的，但是协会不愿意公开，因为这些数据可以被用于预测市场走势，从而影响市场的稳定性

/api/chart/sold?start=2024-03-01&end=2024-03-15

```json
{
  "solds": [
    {
      "date": "2024-03-01",
      "total": 1000000,
      "count": 2
    },
    {
      "date": "2024-03-02",
      "total": 2000000,
      "count": 3
    }
  ],
  "newListings": [
    {
      "date": "2024-03-01",
      "total": 1000000,
      "maxPricePerSqt": 1000,
      "minPricePerSqt": 500,
      "avgPricePerSqt": 800,
      "count": 2
    },
    {
      "date": "2024-03-02",
      "total": 2000000,
      "maxPricePerSqt": 1000,
      "minPricePerSqt": 500,
      "avgPricePerSqt": 800,
      "count": 3
    }
  ]
}
```
