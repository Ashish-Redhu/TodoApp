# TodoList App

This is a simple TodoList application built with React and Redux Toolkit. It allows users to add, edit, and delete tasks, providing a clean and efficient way to manage their daily activities.

## Features

-   **Add Todos:** Easily add new tasks to your list.
-   **Edit Todos:** Modify existing tasks to keep them up-to-date.
-   **Delete Todos:** Remove tasks that are no longer needed.
-   **Real-time Updates:** Changes are reflected instantly.
-   **User-friendly Interface:** Clean and intuitive design using Tailwind CSS.
-   **Toast Notifications:** Informative and visually appealing notifications for user actions.
-   **Responsive Design:** Works seamlessly on various screen sizes.

## Technologies Used

-   **React:** A JavaScript library for building user interfaces.
-   **Redux Toolkit:** A set of tools for efficient Redux development.
-   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
-   **React Toastify:** For displaying toast notifications.

## Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd TodoApp
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Start the development server:**

    ```bash
    npm run dev
    ```

5.  **Open your browser and navigate to `http://localhost:5173`** (or the port specified by Vite).

## Folder Structure
```bash
todo-app/
├── public/
├── src/
│   ├── app/
│   │   └── store.js          # Redux store configuration
│   ├── components/
│   │   ├── EachTodo.jsx      # Individual todo component
│   │   ├── TodoInput.jsx     # Input form component
│   │   └── TodosList.jsx     # List of todos component
│   ├── features/
│   │   └── todoSlice.js      # Redux slice for todos
│   ├── App.jsx               # Main application component
│   └── main.jsx              # Application entry point
├── .gitignore
├── index.html
├── package.json
└── README.md


-   `src/app/store.js`: Configures the Redux store.
-   `src/components/`: Contains React components (`EachTodo`, `TodoInput`, `TodosList`).
-   `src/features/todoSlice.js`: Defines the Redux slice for managing todos.
-   `src/App.jsx`: Main application component.
-   `src/main.jsx`: Entry point for the React application.
-   `src/index.css`: Global styles.

```
## Redux Flow

1.  **Actions:** User interactions (e.g., adding a todo) dispatch actions.
2.  **Reducers:** Reducers in `todoSlice.js` handle these actions and update the Redux store.
3.  **Store:** The Redux store holds the application's state.
4.  **Components:** Components subscribe to the store and re-render when the state changes.

## Usage

-   **Adding a Todo:** Type your todo in the input field and click "Add".
-   **Editing a Todo:** Click "Edit" on a todo, modify it, and click "Edit" again to save. Click "Cancel" to discard changes.
-   **Deleting a Todo:** Click "Delete" on a todo to remove it.
