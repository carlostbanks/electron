import React from "react"
import { TodoForm } from "../components/forms/TodoForm";


export const Work:React.FC = () => {

    const electron = (window as any).electron;

    return (
        <div>
            <h1>This is the work page</h1>
            <p>The home directory is @ {electron.homeDir()}</p>
            <p>The OS Architecture  is @ {electron.arch()}</p>
            <p>The OS Version is @ {electron.osVersion()}</p>
            <TodoForm />
        </div>
    )
}