import {Container} from "@mui/material";
import TaskList from "../components/TaskList/TaskList";
import Form from "../components/Form/Form";
import {useState} from "react";
import taskMock from "../mocks/taskMock";
import { Mock } from "../types/types";

const MainPage = () => {
    const [tasks, setTasks] = useState<Mock[]>(taskMock)

    return(
        <Container sx={{pt:5, textAlign:'left'}}>
            <Form setTasks={setTasks}/>
            <TaskList tasks={tasks} setTasks={setTasks}/>
        </Container>
    )
};

export default MainPage;