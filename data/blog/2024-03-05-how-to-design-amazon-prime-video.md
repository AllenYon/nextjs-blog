---
title: ' How to design Amazon Prime Video: A System Design Mock Interview'
date: '2024/03/05'
lastmod: '2024/03/05'
tags: ['System Design', 'Amazon Prime Video', 'Mock Interview']
draft: false
summary: 'This blog post summarizes a mock interview discussion on designing a minimalist version (MVP) of Amazon Prime Video. It explores the core functionalities and considerations for building a large-scale video streaming platform.'
images:
  [
    'https://i.pcmag.com/imagery/reviews/02dIsBiVpmVTMeXkrKxWy0W-13.fit_lim.size_1050x591.v1582749138.png',
  ]
authors: ['default']
layout: PostLayout
---

This blog post summarizes a mock interview discussion on designing a minimalist version (MVP) of Amazon Prime Video. It explores the core functionalities and considerations for building a large-scale video streaming platform.

**User Personas:**

- Content Creators: Upload videos.
- Viewers: Search and watch videos.

**Functional Requirements:**

- Upload videos.
- Search videos by title, category, or advanced criteria.
- View videos.

**Non-Functional Requirements:**

- **Scalability:** Handle a large number of users and videos.
- **Availability:** Minimize downtime and ensure videos are available to users.
- **Latency:** Deliver low buffering times for a smooth viewing experience.
- **Reliability:** Ensure uploaded videos are not lost.

**MVP Design:**

1. **Upload Service:** Receives videos from content creators and pushes them to an object storage (S3) for scalability. Uploads metadata (title, etc.) to a separate metadata database.
2. **Load Balancer:** Distributes upload requests across multiple upload service instances for handling high volumes.
3. **Search Service:** Utilizes a NoSQL store (like Elasticsearch) to efficiently search video metadata based on user queries.
4. **Streaming Service:** Delivers videos from S3 to viewers.
5. **Content Delivery Network (CDN):** Caches content geographically to deliver videos faster to users (considered for future implementation).

**Security Considerations:**

- **API Security:** OAuth2 token-based authentication for secure access.
- **Data Encryption:** HTTPS to encrypt data transfer between services.
- **CDN-Level Authentication:** Restrict unauthorized video access through CDN controls.

**Future Enhancements:**

- **Transcoding:** Convert videos to multiple formats (WebM, mp4) for broader device compatibility.
- **Load Balancing & Scaling:** Implement automatic scaling based on user traffic.
- **Monitoring & Alerting:** Monitor system health and receive alerts for potential issues.

**Conclusion:**

This MVP design lays the groundwork for a video streaming platform, prioritizing availability over perfect consistency for an acceptable user experience. The design incorporates scalability considerations and highlights security measures to protect user data. Future iterations can include advanced features and address additional functionalities.
