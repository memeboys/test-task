import { Dispatch, SetStateAction } from "react";

export enum Filter {
    DESC = 'desc',   
    ASC = 'asc',
};

export interface Mock {
    type: string;
    description: string;
    timeToDo: number;
    event?: () => void;
}

export interface TaskListProps {
    tasks: Mock[];
    setTasks: Dispatch<SetStateAction<Mock[]>>;
}

export interface FormProps {
    setTasks:Dispatch<SetStateAction<Mock[]>>
};


