---
title: 'How to Design a Shopping Cart Page: A System Design Mock Interview'
date: '2024/03/05'
lastmod: '2024/03/05'
tags: ['System Design', 'Shopping Cart', 'Mock Interview']
draft: false
summary: 'A shopping cart page is a crucial component of any e-commerce website, allowing users to review and modify their selections before making a purchase. Designing an effective shopping cart page requires careful consideration of both functional and non-functional requirements. This blog post summarizes a mock interview discussion on designing a shopping cart page, exploring the core functionalities and considerations for building a scalable e-commerce platform.'
images: ['https://checkoutpage.co/img/cms/blog/shopping-cart-vs-checkout-page-stripe.png']
authors: ['default']
layout: PostLayout
---

A shopping cart page is a crucial component of any e-commerce website, allowing users to review and modify their selections before making a purchase. Designing an effective shopping cart page requires careful consideration of both functional and non-functional requirements.

**Functional Requirements**

The following features are essential for a shopping cart page:

- **Display cart page:** This includes showing the total price, discounts, and final price.
- **Add item to cart:** This allows users to add products to their cart.
- **Remove item from cart:** This allows users to remove unwanted products from their cart.
- **Modify quantity of item in cart:** This lets users adjust the quantity of each product in their cart.
- **Select/Unselect item in cart:** This enables users to select or deselect specific products for checkout.
- **Checkout:** This initiates the checkout process and redirects users to a payment page.

**Data Structure and API Design**

The following data structure and APIs can be used to implement the aforementioned features:

**Display Cart Page**

**Request:**

```
GET /api/cart
```

**Response:**

```json
{
  "totalSelectItems": 2,
  "cartItems": [
    {
      "skuId": "123",
      "cover": "https://example.com/cover.jpg",
      "name": "Product A",
      "description": "Product A description",
      "quantity": 2,
      "price": 100,
      "discountPrice": 90,
      "finalPrice": 180,
      "isSelect": true
    },
    {
      "skuId": "124",
      "cover": "https://example.com/cover.jpg",
      "name": "Product B",
      "description": "Product B description",
      "quantity": 1,
      "price": 200,
      "discountPrice": 180,
      "finalPrice": 180,
      "isSelect": true
    }
  ],
  "promotions": [
    {
      "promotionId": "123",
      "type": "discount",
      "description": "Buy 2 get 1 free",
      "isSelect": true
    }
  ],
  "currency": "USD",
  "totalPrice": 360,
  "discountPrice": 330,
  "finalPrice": 330
}
```

**Add Item to Cart**

**Request:**

```
POST /api/cart/add
{
  "skuId": "123",
  "quantity": 1
}
```

**Response:**

```json
{
  "code": 200,
  "message": "Success"
}
```

**Remove Item from Cart**

**Request:**

```
POST /api/cart/remove
{
  "skuId": "123"
}
```

**Response:**

**Modify Quantity of Item in Cart**

**Request:**

```
POST /api/cart/modify
{
  "skuId": "123",
  "quantity": 2
}
```

**Response:**

**Select/Unselect Item in Cart**

**Request:**

```
POST /api/cart/select
{
  "skuId": "123",
  "isSelect": true
}
```

**Response:**

**Checkout**

**Request:**

```
POST /api/cart/checkout
```

**Response:**

```json
{
  "orderId": "123",
  "redirectUrl": "https://example.com/pay?orderId=123"
}
```

**Non-Functional Requirements**

**Information Correctness**

To ensure data consistency, the cart's computation logic should reside on the backend. This approach offers several benefits:

1. **Data Consistency:** By centralizing computation on the backend, we ensure uniformity across different platforms (Android, iOS, Web), which is crucial for e-commerce platforms with complex promotional scenarios. This setup prevents inconsistencies that could arise from having different development teams for each platform.

2. **Enhanced Frontend Performance and Simplicity:** Offloading computation to the backend simplifies the frontend architecture, leading to improved performance and reduced complexity.

However, this methodology also introduces certain drawbacks:

1. **Increased Backend Load:** Centralizing computation augments the computational demands on the backend.

2. **Higher Volume of Network Requests:** This can potentially degrade the frontend user experience due to the increased latency from
