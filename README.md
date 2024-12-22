# Down to Earth Contractors Website Documentation

## Overview

The Down to Earth Contractors website is designed to provide potential clients with information about the company’s services, showcase past projects, and enable easy communication through a contact form. The website is built using React and includes features such as a responsive navigation bar, service-specific pages, and a contact form with EmailJS integration.

## Features

1. **Responsive Navbar**

   - Includes links to Home, About, Services, Gallery, and Contact pages.
   - Services dropdown menu reveals individual service links on hover.

2. **Service Pages**

   - Dedicated pages for each service:
     - Excavation
     - Grading
     - Septic Systems
     - Sewer Laterals
     - Water Laterals
     - Demolition
   - Each page includes descriptive text and imagery.

3. **Contact Form**

   - Allows users to submit their name, email, and a message.
   - Integrated with EmailJS to send submissions directly to the company’s email.
   - Displays success or error messages based on submission status.

4. **Styling**
   - Fully responsive CSS for optimal viewing on desktop, tablet, and mobile.
   - Custom CSS for dropdown menus, contact forms, and service pages.

## Key Components

### Navbar

File: Navbar.jsx
Description: Contains the navigation bar with a dropdown for services.

### Styling:

Uses Navbar.css for responsive and hover effects.
Services dropdown menu styled to appear on hover.

### Contact Form

File: Contact.jsx
Description: Form for users to send messages to the company.
Functionality:
Handles form data using React state.
Sends data to EmailJS using the emailService.js utility.
Displays success or error messages dynamically.
Styling:
Contact.css for responsive form design and clear input field styling.

### Service Pages

Files:
Excavation.jsx, Grading.jsx, SepticSystems.jsx, SewerLaterals.jsx, WaterLaterals.jsx, Demolition.jsx
Description: Each file represents a specific service, with descriptive text and styling from Services.css.
Utilities

### Email Service

File: emailService.js
Description: Contains the sendEmail function to handle EmailJS integration.
Error Handling:
Logs errors to the console.
Throws errors for display in the Contact component.

## Deployment

### Build the Project

Deploy to Hosting Service

Use platforms like Netlify, Vercel, or GitHub Pages.
Upload the build/ folder to the hosting platform.
Future Enhancements
Add image galleries for each service page.
Implement a blog section for company updates.
Integrate Google Maps for location display in the contact section.
Add a customer testimonials section.

## Contact Information

Company: Down to Earth Contractors
Phone: 262-248-2725
Address: N1971 Highway H, Lake Geneva, WI 53147
