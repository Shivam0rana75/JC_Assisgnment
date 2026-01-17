# Healthcare Support Web Application

## Overview

The Healthcare Support Web Application is a concept-level full-stack web app built to assist an NGO working in the healthcare and welfare domain. The platform aims to provide a single, accessible interface through which users can seek healthcare support, volunteer for social causes, donate resources, and request emergency assistance for both humans and animals.

The project was developed as part of an internship assignment with a strong emphasis on minimal scope, clean architecture, and practical decision-making, rather than overengineering. The application demonstrates a complete end-to-end flow—from user interaction on the frontend to server-side handling, validation, and data persistence—while remaining lightweight and easy to understand.

---

## Key Objectives

- Provide an intuitive interface for healthcare support and community assistance  
- Demonstrate full-stack development using modern web technologies  
- Implement one automation/AI-inspired feature in a simple, reliable way  
- Maintain minimal setup requirements for reviewers and users  

---

## Features

### 1. Informational Landing Page

The homepage introduces the NGO’s mission, values, and areas of impact. It explains how healthcare support extends to humans, animals, and underserved communities through a holistic approach.

---

### 2. Service Categories

Users can explore different ways to engage with the organization:

- **Volunteer** – Apply to contribute time and skills  
- **Donate** – Offer financial or resource-based support  
- **Provide Supplies** – Contribute medicines or healthcare materials  
- **Emergency Support** – Request urgent assistance  

Each category is presented as a clickable card, improving clarity and user experience.

---

### 3. Dynamic Forms with Server Actions

Each route contains a dedicated form built using **Next.js Server Actions**, allowing secure server-side handling without traditional REST APIs.

Forms include:
- Volunteer registration  
- Donation intent submission  
- Emergency support requests  

All submissions include:
- Server-side validation  
- Input sanitization  
- Clear success or error handling  

---

### 4. SQLite Database Integration

To demonstrate full-stack capability without introducing external dependencies, the project uses **SQLite** as a lightweight SQL database.

- A single table stores form submissions  
- The database is automatically created on first use  
- No manual setup or migrations are required  
- The database file is excluded from version control  

This approach ensures persistence while keeping the setup simple and reviewer-friendly.

---

### 5. FAQ Automation (Chatbot Concept)

The application includes an FAQ system that acts as a support automation feature.

- Common questions are answered instantly using predefined responses  
- If a user asks a question not covered in the FAQs, the system records the query and displays a confirmation message stating that the support team will follow up  
- This simulates a real-world FAQ chatbot workflow without relying on external AI APIs  

This design demonstrates automation, fallback handling, and user acknowledgment while keeping the implementation transparent and reliable.

---

### 6. User Experience & Accessibility

- Clean, minimal UI with clear navigation  
- Clickable cards and consistent layout  
- Client-side routing using Next.js `Link`  
- Accessible feedback for user actions  

---

## Technology Stack

### Frontend
- Next.js (App Router)  
- React  
- CSS Modules for scoped styling  

### Backend
- Next.js Server Actions  
- Node.js runtime  

### Database
- SQLite (file-based SQL database)  

### Tooling
- Git & GitHub for version control  

---

## Project Structure

app/ – Route-based pages (Donate, Volunteer, Support, FAQs)
components/ – Reusable UI components (Cards, Forms, FAQ items)
lib/ – SQLite database initialization and configuration
public/ – Images and static assets



The structure follows modern Next.js best practices and keeps concerns clearly separated.

---

## Design Decisions

- **SQLite instead of MySQL/PostgreSQL**  
  Chosen to avoid external setup and ensure the project runs instantly.

- **Server Actions instead of APIs**  
  Reduces boilerplate and improves clarity.

- **Rule-based FAQ automation**  
  Reliable, explainable, and suitable for a concept-level assignment.

- **Minimal scope**  
  Focused on correctness, clarity, and maintainability.

---

## Future Improvements

- AI-powered NLP for smarter FAQ responses  
- Multilingual support  
- Admin dashboard for reviewing submissions  
- Real-time chat support  
- Secure payment gateway integration  

These enhancements can be added without restructuring the core application.

---

## Conclusion

This project demonstrates a thoughtful approach to full-stack development by balancing functionality, simplicity, and real-world relevance. Rather than overengineering, the application focuses on delivering a clean, working solution that reflects how NGOs and support organizations operate in practice.

The repository showcases frontend development, backend logic, database integration, and automation concepts in a clear and maintainable way—making it a strong example of a concept-level full-stack application.
