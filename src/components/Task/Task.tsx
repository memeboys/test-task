import { FC } from "react";
import { IconButton, styled } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Mock } from "../../types/types";

const ItemContainer = styled('div')({
    display:'grid',
    alignItems:'center',
    backgroundColor: 'lightgrey',
    marginBottom:10,
    borderRadius:15,
    padding:'10px 20px',
    textAlign:'left',
    gap: '20px',
    gridTemplateColumns: '2fr 1.5fr 2fr 1fr',
});

const CloseIconContainer = styled('div')({
    display: 'flex',
    justifyContent: 'flex-end',
})

const Task:FC<Mock> = ({ type, description, timeToDo, event }) => {

    const deleteTask = () => {
        if(event)
            event();
    }

    return (
        <ItemContainer>
            <div>{type}</div>
            <div>{description}</div>
            <div>{timeToDo}</div>
            <CloseIconContainer>
                <IconButton
                    aria-label="close"
                    onClick={deleteTask}
                    sx={{
                        color: (theme) => theme.palette.grey[500],
                    }}>
                    <CloseIcon />
                </IconButton>
            </CloseIconContainer>
        </ItemContainer>
    )
};

export default Task;