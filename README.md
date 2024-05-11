# Swasth-Sahayak
App for field workers to extend health service from the hospital to the home

Docs: https://docs.google.com/document/d/1HOCAGck4yl1OeI3txnPmTXfqWbdXOTvZbh_p6G-KVW8/edit?usp=sharing

Report: https://docs.google.com/document/d/1Yx6KPnWj27cXy02DpWT6YFuB4hkk9GDJG9ekf41Qm18/edit?usp=sharing

Figma Design Files: https://www.figma.com/files/project/198350664/Team-project?fuid=1113531776039202105

## Project Structure

1. Frontend Application
   1. [Health Worker Application](./health-worker-app)
   2. [Doctor Web Application](./doctor-web-app)
   3. [Supervisor Admin Web Application](./supervisor-admin-web-app)
2. Backend (common server for all frontend applications)
   1. [Server](./server)

## Run the App

Download the Expo SDK 50 from https://expo.dev/go
  
## Major Challenge Encountered

1. Multilingual Integration
2. System Design for hospital, doctor, health-worker, patient management
3. Switch between systems design and app design, there were cases where we were designing app for system instead of designing  system first and then the required application (like we imagined ideal scenario of data upload (upload in chunks is the solution))
4. JWT Security: Employing JSON Web Tokens (JWT) for security measures involves implementing a token-based authentication system, which presents complexities in execution. We took measures to ensure the secure storage and validation of these tokens to mitigate potential security vulnerabilities effectively.
5. Mitigation of Cross-Origin Resource Sharing (CORS) Issues: During the integration of the ReactJS frontend with the Spring Boot backend, we encountered CORS errors, necessitating resolution. This involved configuring the backend infrastructure to permit cross-origin requests originating from the frontend, thus resolving the CORS issues and facilitating seamless communication between client and server components.
6. Offline Functionality Implementation: Achieving full offline functionality for the application post-initial data download posed considerable challenges, particularly in managing various edge cases and ensuring data segregation to enable individual component updates via AutoSync seamlessly.
7. AutoSync Integration: The incorporation of the AutoSync feature utilizing Netinfo presented notable complexities. Our aim was to ensure that data uploads occurred only once whenever connectivity was established, with subsequent deletion of data upon successful upload completion.


## Assumptions

## Frontend

1. React-hot-toast
2. Redux
3. Redux-Persists
4. React-Skeleton
5. Axios


### Use Case Diagram Link

1. [Doctor App](https://lucid.app/lucidchart/7a44ac7a-69b7-43d3-842e-8a9b6e41e23f/edit?viewport_loc=-819%2C-1344%2C2641%2C1248%2C0_0&invitationId=inv_e94228c6-85c9-4fea-a601-314c45f51524)
2. [Health Worker](https://lucid.app/lucidchart/9c1cafb8-b27e-4d90-964c-cff9fefc9ad7/edit?view_items=Acu9gqpDt6tx&invitationId=inv_21c3534a-22bb-458a-9329-e9c2e15ab557)
