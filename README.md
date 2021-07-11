# fever-pets-ui

## 1.- Structure

We split the ui in three directories: 
- App directory: It contains the app logic, including the app module and app routing and includes all the modules needed, actually only one pets but if the ui need to include pets and humans there will be two modules pets and humans. Each module contains the models needed, for pets the pet model, the service to connect to the backend and the main components one for the pet list and another for the pet detail. Also contain the shared directory that should be a module that contains the shared components, services and models common for several modules.
- Environments: Contains environment specific variables like the apiUrl
- Styles: Global application styles
