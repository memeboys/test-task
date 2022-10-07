import taskMock from "../../mocks/taskMock";
import {IconButton, styled} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {Dispatch, SetStateAction, useState} from "react";


export interface Mock {
    type: string;
    description: any;
    timeToDo?: number
}
export interface TaskProps {
    task: Mock
}

export interface TaskListProps {
    tasks: Mock[];
    setTasks: Dispatch<SetStateAction<Mock[]>>;
}

const ListWithAllTasks = ({tasks, setTasks}: TaskListProps) => {
    const TaskItem = ({task, ...other}:TaskProps) => {
        const ItemWrapperStyled = styled('div')({
            display:'flex',
            alignItems:'center',
            justifyContent:'flex-start',
            backgroundColor: 'lightgrey',
            marginBottom:10,
            borderRadius:15,
            boxShadow:'10px, 10px, 10px grey',
            padding:'5px 25px',
            textAlign:'left'
        });
        return (
            <>
                <ItemWrapperStyled>
                    <p style={{width:'20%', fontSize:20}}>{task.type}</p>
                    <p style={{width:'50%'}}>{task.description}</p>
                    <p style={{width:'20%'}}>{task.timeToDo}</p>
                    <div style={{width:'10%'}}>
                        <IconButton
                            aria-label="close"
                            sx={{
                                color: (theme) => theme.palette.grey[500],
                            }}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                </ItemWrapperStyled>
            </>
        )
    };

    return(
        <div>
            <HeaderWrapperStyled>
                <p style={{width:'20%'}}>Type</p>
                <p style={{width:'50%'}}>description</p>
                <p style={{width:'20%'}}>Time to do</p>
                <div style={{width:'10%'}}></div>
            </HeaderWrapperStyled>
            {
                !!tasks.length &&
                tasks.map((task, index) => <TaskItem key={index} task={task}/>)}
        </div>
    )
}

const HeaderWrapperStyled = styled('div')({
    display:'flex',
    alignItems:'center',
    textAlign:'left',
    justifyContent:'flex-start',
    padding:'5px 25px',
});

export default ListWithAllTasks;