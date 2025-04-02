# 101441732-lab-test2-comp3133 - SpaceX Missions App

This repository contains an Angular application that displays information about SpaceX missions using SpaceX's public API. The application allows users to view a list of all SpaceX launches, filter them by launch year, and view detailed information about each mission.

## Live Demo

Check out the live application here: [SpaceX Missions App](https://spacex-missions-app-1012355.vercel.app/)

## Features

- List view of all SpaceX launches with essential information
- Filter functionality to search missions by launch year
- Detailed view for each mission with comprehensive information
- Responsive design using Angular Material components
- Clean interface with mission patch images and links to related resources

## Technical Implementation

### Components

1. **MissionList Component**
   - Displays a list of all SpaceX launches
   - Shows flight number, mission name, launch year, details, mission patch, and rocket information
   - Provides links to additional resources (article, Wikipedia, video)
   - Implements navigation to mission details

2. **MissionFilter Component**
   - Allows users to filter missions by launch year
   - Updates the mission list dynamically based on the selected filter

3. **MissionDetails Component**
   - Shows detailed information about a selected mission
   - Receives data via route parameters
   - Displays comprehensive mission information including payload details and launch success status

### Services

- **SpaceX Service**
  - Handles all API calls to the SpaceX REST API
  - Provides methods for fetching all launches, filtering by year, and getting mission details

### Interfaces

- Created proper TypeScript interfaces for SpaceX data structures
- Ensures type safety throughout the application

### Styling and UI

- Implemented using Angular Material components
- Responsive design that works on both desktop and mobile devices
- Clean, modern interface with appropriate spacing and typography

## Technology Stack

- Angular 16
- TypeScript
- Angular Material
- RxJS
- SpaceX REST API
- GitHub (version control)
- Vercel (hosting)

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/1012355-lab-test2-comp3133.git
   ```

2. Navigate to the project directory:
   ```
   cd 1012355-lab-test2-comp3133
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   ng serve
   ```

5. Open your browser and navigate to `http://localhost:4200`


## API Integration

The application integrates with the following SpaceX API endpoints:

- All Launches: `https://api.spacexdata.com/v3/launches`
- Launches by Year: `https://api.spacexdata.com/v3/launches?launch_year=2019`
- Launch Details: `https://api.spacexdata.com/v3/launches/{flight_number}`

## Challenges and Solutions

During the development of this application, I faced several challenges:

1. **Handling Complex API Responses**: The SpaceX API returns deeply nested JSON objects. I solved this by creating comprehensive interfaces that match the API response structure.

2. **Implementing Filtering**: To make the filtering efficient, I implemented a reactive approach using RxJS operators to handle the filter changes and update the mission list accordingly.

3. **Responsive Design**: Ensuring the application looks good on all devices required careful planning of the layout and use of Angular Material's responsive grid system.


## Future Enhancements

If I were to continue working on this project, I would add:

1. Advanced filtering options (by rocket type, success status, etc.)
2. Pagination for the mission list
3. A dashboard with statistics about SpaceX launches
4. Integration with the SpaceX GraphQL API for more efficient data fetching

## Conclusion

This project demonstrates my ability to create a modern Angular application that integrates with external APIs, implements proper component structure, and provides a good user experience through thoughtful UI design and functionality.


## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
