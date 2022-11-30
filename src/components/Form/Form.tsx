import { useState, BaseSyntheticEvent, FC } from "react";
import { TextField, styled } from "@mui/material";
import { FormProps, Mock } from "../../types/types";

const FormStyled = styled('form')({
    borderBottom: '1px solid rgba(0,0,0,.2)',
    marginBottom: '30px',
    gap: '20px',
    justifyContent: 'flex-start',
    display: 'flex',
    paddingBottom: '30px',
})
const ContainerStyled = styled('div')({
    gap: '20px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
})
const Button = styled('button')({
    width: '50px',
    color: 'white',
    background: 'blue',
    borderRadius: '5px',
})

const Form:FC<FormProps> = ({ setTasks }) => {
    const [formState, setFormState] = useState<Mock>({
        type: '',
        description:'',
        timeToDo: 0
    })
    const handleInputChange = (event:BaseSyntheticEvent) => {
        const target = event.target
        const name = target.name
        setFormState(prevState => ({...prevState, [name]: target.value}));
    }

    const handleSubmit = (event:BaseSyntheticEvent) => {
        event.preventDefault();
        setTasks(prevState => {
            return [...prevState, formState]
        });
    }

    return(
        <ContainerStyled>
            <h2>Add Task</h2>
            <FormStyled onSubmit={handleSubmit}>
                <TextField
                    required
                    label="Task Type"
                    color="primary"
                    value={formState.type}
                    name='type'
                    onChange={handleInputChange}
                />
                <TextField
                    required
                    label="Description"
                    value={formState.description}
                    name='description'
                    onChange={handleInputChange}
                />
                <TextField
                    label="Time to do"
                    value={formState.timeToDo}
                    name='timeToDo'
                    type="number"
                    onChange={handleInputChange}
                />
                <Button type='submit'>Add</Button>
            </FormStyled>
        </ContainerStyled>
    )
}

export default Form;