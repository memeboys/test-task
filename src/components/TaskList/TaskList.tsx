import { FC, useEffect, useState } from "react";
import { orderBy } from 'lodash';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, styled } from "@mui/material";
import Task from "../Task/Task";
import { Filter, TaskListProps } from "../../types/types";

const TaskContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
})

const TaskContainerHeader = styled('div')({
    display:'grid',
    alignItems:'center',
    textAlign:'left',
    justifyContent:'flex-start',
    padding:'0 20px',
    gridTemplateColumns: '2fr 1.5fr 2fr 1fr',
    gap: '20px'
});

const TaskStyled = styled('div')({
    borderTop: '1px solid rgba(0,0,0,.2)',
    width: '100%',
    paddingTop: '20px',
})

const TaskList:FC<TaskListProps> = ({tasks, setTasks}) => {
    const [filter, setFilter] = useState<Filter>(Filter.ASC);
 
    const filterList = () => {
        return orderBy(tasks, 'timeToDo', filter);
    };

    useEffect(() => {
        setTasks(filterList);
    }, [filter]);

    const filterChange = (event: SelectChangeEvent) => {
        setFilter(event.target.value as Filter);
    };

    const deleteTask = (id: number) => {
        setTasks(tasks.filter((item, index) => id !== index));
    };

    return(
        <TaskContainer>
            <h2>Tasks List</h2>
            <FormControl>
                <InputLabel>Sort by</InputLabel>
                <Select
                    value={filter}
                    label="Sort by"
                    onChange={filterChange}
                >
                    <MenuItem value={"desc"}>max time</MenuItem>
                    <MenuItem value={"asc"}>min time</MenuItem>
                </Select>
            </FormControl> 
            <TaskContainerHeader>
                <div>Type</div>
                <div>Description</div>
                <div>Time to do</div>
            </TaskContainerHeader>
            { tasks.length ?
                <div>
                    { tasks.map((task, index) => 
                        <Task
                            key={index}
                            {...task}
                            event={() => deleteTask(index)}
                        />
                    ) }
                </div>
                :
                <TaskStyled>Список задач пуст!</TaskStyled>
            }
        </TaskContainer>
    )
}

export default TaskList;