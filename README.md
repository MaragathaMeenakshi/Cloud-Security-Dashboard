# Cloud Security Dashboard Project

## Project Description
The Cloud Dashboard Project is a web application designed to help users manage and visualize their cloud data. This project includes interactive charts, a dynamic sidebar for widget management, and Redux for state management. The dashboard provides an intuitive interface for monitoring cloud accounts and their associated risk assessments.

## Features
- **Dynamic Data Visualization:** Includes Bar and Donut charts for visualizing cloud data.
- **Redux State Management:** Global state management using Redux and Redux Toolkit.
- **Responsive Sidebar:** Allows users to add and remove widgets dynamically.
- **Interactive UI:** Smooth transitions and user-friendly design.

## Screenshot
***Dashboard Page***
![Screenshot 2024-08-26 194643](https://github.com/user-attachments/assets/105066ea-7397-463c-b0f3-0e86ee246f2e)
***Add Widget Sidebar***
![Screenshot 2024-08-26 194758](https://github.com/user-attachments/assets/e18b586e-ad86-4850-8e1c-07f8d3d748c9)
***Edit Widget***
![Screenshot 2024-08-26 194824](https://github.com/user-attachments/assets/2192d758-c7fb-434f-8e20-1c5a20fc703e)
***Add Widget***
![Screenshot 2024-08-26 194856](https://github.com/user-attachments/assets/ff186910-5f2b-462d-bc3a-2c5a05930472)

## Installation
Prerequisites
Node.js and npm installed on your machine.
Steps
Clone the repository:
```
git clone https://github.com/MaragathaMeenakshi/Cloud-Security-Dashboard.git
cd Cloud-Security-Dashboard
```
Install dependencies:
```
npm install
```
Run the development server:
```
npm start
```

## Usage
* Open the application in a browser (typically at http://localhost:3000).
* Explore the various dashboards available.
* Use the sidebar to add or remove widgets as needed.
* Visualize your cloud data using the provided charts.
  
## Redux Setup
**Overview :**
Redux is used for managing global state in the Cloud Dashboard Project. The state is primarily focused on managing the visibility of widgets and the data associated with them.

## To Change the data 
Visit store.js and change the initial state.

## Component Overview
**Key Components**
**Dashboard:** Main component displaying the various charts and widgets.
**Sidebar:** Manages the addition and removal of widgets.
**CSPMExecutive:** Displays cloud security posture management data.
**AddWidget:** Handles the logic for adding new widgets to the dashboard.

## Component Usage
Each component is designed to be reusable and interact with the Redux store for state management.

## Technologies Used
- **React.js:** Frontend library for building user interfaces.
- **Redux & Redux Toolkit:** State management solution.
- **Chart.js:** Library used for rendering charts.
- **React Router:** Handles routing within the application.
- **CSS/SCSS:** Styling for the UI.

## Contributing
How to Contribute
**Fork the repository**
Create a new branch:
```
git checkout -b feature-branch-name
```
Make your changes and commit them:
```
git commit -m 'Add a new feature'
```
Push to the branch:
```
git push origin feature-branch-name
```
Submit a pull request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
For any questions or feedback, please contact mahiriya2019@gmail.com.
