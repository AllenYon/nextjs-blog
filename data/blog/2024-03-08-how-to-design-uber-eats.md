---
title: 'How to Design Uber Eats: A System Design Mock Interview'
date: '2024/03/08'
lastmod: '2024/03/08'
tags: ['System Design', 'Uber Eats', 'Mock Interview']
draft: false
summary: 'This blog post summarizes a mock interview discussion on designing a system like Uber Eats. It explores the technical considerations involved in building a large-scale food delivery platform.'
images: ['https://mms.businesswire.com/media/20200316005228/en/779858/22/Uber_Eats_Logo.jpg']
authors: ['default']
layout: PostLayout
---

This blog post summarizes a mock interview discussion on designing a system like Uber Eats. It explores the technical considerations involved in building a large-scale food delivery platform.

**Key Requirements:**

- Restaurants can add, update, and remove themselves from the system.
- Customers can view restaurants, search for them by various criteria (distance, delivery time), and place orders.
- Delivery people receive notifications about new orders.

**Non-Functional Requirements:**

- **Scalability:** The system must handle a large number of restaurants, customers, and orders.
- **Availability:** The system should be highly available to ensure smooth operation.
- **Security:** User data and financial information must be protected.
- **Latency:** Response times for searching and viewing restaurants should be minimal.

**Data Modeling:**

- Restaurants table: stores restaurant details like name, address, location (coordinates), and menu items.
- Customers table: stores customer details like name, address, location (coordinates).
- Menu items table: stores details about menu items like name, price, and image URLs.
- Geohashing: A technique for dividing the world into grids to optimize location-based searches.

**Database Selection:**

- Relational database with read replicas for restaurants (manageable size, frequent reads).
- Sharded NoSQL database for customers (large user base, scalability).

**System Design:**

- A central experience layer orchestrates services across different platforms (iOS, Android, web).
- Restaurant service: manages restaurant data (adding, updating, removing).
- Image service: handles image uploads and stores them in S3.
- Image moderation API (optional): uses machine learning to moderate uploaded images.
- Search service (Elasticsearch): facilitates searching for restaurants based on location and delivery time.
- Caching layer: stores frequently accessed restaurant data to improve response times.

**User Interaction Flow (Simplified):**

1. Customer searches for restaurants using filters like location and delivery time.
2. Search service retrieves restaurants from Elasticsearch based on geohashes and delivery time estimates (isochrons).
3. Customer selects a restaurant and views details from the cache (if available) or restaurant service.
4. Customer places an order, which is routed to the relevant delivery person.

**Conclusion:**

This discussion provides a high-level overview of designing a complex system like Uber Eats. It highlights the importance of considering scalability, availability, security, and user experience when building such platforms.
