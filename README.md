# Swasth-Sahayak
An app for field workers to extend health service from the hospital to the home. It also includes for following actors in our system

1. Field Worker: To get patient details and images via set questionnaire, and follows instruction of docter.
2. Supervisor: To Schedule Field Worker
3. Admin: Add/Delete/Revoke permission of other actors, and also add questionnaire
4. Docter: View all patient-records, diagnose it and send instruction and prescription to field worker for patient.

Report Link: [Click here](https://docs.google.com/document/d/1Yx6KPnWj27cXy02DpWT6YFuB4hkk9GDJG9ekf41Qm18/edit?usp=sharing)

Figma Design Files: [Click here](https://www.figma.com/files/project/198350664/Team-project?fuid=1113531776039202105)


## Project Structure

1. Frontend Application
   1. [Health Worker Application](./health-worker-app)
   2. [Doctor Web Application](./doctor-web-app)
   3. [Supervisor Admin Web Application](./supervisor-admin-web-app)
2. Backend (common server for all frontend applications)
   1. [Server](https://github.com/Priyansuvaish/Backend)

## Run the App

Download the Expo SDK 50 from https://expo.dev/go

## Abstract

‘Swasth Sahayak’ - Swasth Sahayak is a pioneering initiative aimed at extending healthcare services directly into the homes of individuals, especially those in underserved communities. The project harnesses the power of technology to facilitate efficient and comprehensive health screenings, and follow-up care, thereby ensuring that individuals receive the support they need, right at their doorstep. Through a combination of field health workers equipped with standardized questionnaires and a tablet-based application, Swasth Sahayak streamlines the process of identifying and addressing various health concerns, including mental health conditions, within local communities. Furthermore, the project emphasizes data-driven decision-making, with comprehensive records maintained using ICD10 codes and accessible to both healthcare providers and authorities at various levels. By leveraging multilingual capabilities and offline functionality, Swasth Sahayak aims to bridge the gap in healthcare accessibility, ultimately contributing to improved health outcomes and well-being for all.

The foundation of Swasth Sahayak rests on a multifaceted approach that integrates technology, community engagement, and data-driven strategies to optimize healthcare delivery. Through the deployment of field health workers armed with standardized questionnaires, the project ensures comprehensive health screenings for all members of a family, thereby facilitating early detection and intervention for various health conditions. Notably, Swasth Sahayak places a special emphasis on mental health, recognizing its often-overlooked significance and the need for stigmatization and support within communities.

In essence, Swasth Sahayak represents a paradigm shift in healthcare delivery, reimagining the role of technology and community engagement in ensuring equitable access to healthcare for all. By extending care to the home and enabling health workers to serve as trusted allies and advocates for individuals and families, the project not only addresses immediate health needs but also lays the groundwork for sustainable health systems that prioritize prevention, inclusivity, and holistic well-being. As Swasth Sahayak continues to expand its reach and impact, it stands as a testament to the transformative power of innovation and collaboration in building healthier, more resilient communities.

  
## Major Challenge Encountered

1. Multilingual Integration
2. System Design for hospital, doctor, health-worker, patient management
3. Switch between systems design and app design, there were cases where we were designing app for system instead of designing  system first and then the required application (like we imagined ideal scenario of data upload (upload in chunks is the solution))
4. JWT Security: Employing JSON Web Tokens (JWT) for security measures involves implementing a token-based authentication system, which presents complexities in execution. We took measures to ensure the secure storage and validation of these tokens to mitigate potential security vulnerabilities effectively.
5. Mitigation of Cross-Origin Resource Sharing (CORS) Issues: During the integration of the ReactJS frontend with the Spring Boot backend, we encountered CORS errors, necessitating resolution. This involved configuring the backend infrastructure to permit cross-origin requests originating from the frontend, thus resolving the CORS issues and facilitating seamless communication between client and server components.
6. Offline Functionality Implementation: Achieving full offline functionality for the application post-initial data download posed considerable challenges, particularly in managing various edge cases and ensuring data segregation to enable individual component updates via AutoSync seamlessly.
7. AutoSync Integration: The incorporation of the AutoSync feature utilizing Netinfo presented notable complexities. Our aim was to ensure that data uploads occurred only once whenever connectivity was established, with subsequent deletion of data upon successful upload completion.
8. Scheduling Algorithm


## Assumptions

1. Each Patient has Unique ABHA-ID

## Frontend Technologies Used

1. React-hot-toast
2. Redux
3. Redux-Persists
4. React-Skeleton
5. Axios
6. Expo-Sqlite
7. Async-Storage (React Native)

## Video Demo
https://drive.google.com/file/d/1pJdhUlugUFu-bSBxZ6bu2Sjsqye0FsFv/view?usp=sharing

### Use Case Diagram Link

1. [Doctor App](https://lucid.app/lucidchart/7a44ac7a-69b7-43d3-842e-8a9b6e41e23f/edit?viewport_loc=-819%2C-1344%2C2641%2C1248%2C0_0&invitationId=inv_e94228c6-85c9-4fea-a601-314c45f51524)
2. [Health Worker](https://lucid.app/lucidchart/9c1cafb8-b27e-4d90-964c-cff9fefc9ad7/edit?view_items=Acu9gqpDt6tx&invitationId=inv_21c3534a-22bb-458a-9329-e9c2e15ab557)


