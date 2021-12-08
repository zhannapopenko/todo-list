import { useState } from 'react'
import { Container, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { todoStyles } from './Todo.style'
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import TaskIcon from '@mui/icons-material/Task'
import SettingsIcon from '@mui/icons-material/Settings'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

export const Todo = ({ todo, toggleTodo, removeTodo }) => {
  const [changeTodo, setChangeTodo] = useState(false)
  const [updateInputValue, setUpdateInputValue] = useState(todo.title)
  const [complete, setComplete] = useState(false)
  const styles = todoStyles()
  return (
    <Box key={todo.id} className={styles.mainBox}>
      <Box className={styles.box}>
        {complete ? (
          <Box // return to-do to the unfulfilled state
            className={styles.button}
            onClick={() => {
              setComplete(false);
            }}
          >
            <PublishedWithChangesIcon sx={{ color: '#515251' }} />
          </Box>
        ) : (
          <Box //completed to-do
            className={styles.button}
            onClick={() => setComplete(true)}
          >
            <CheckCircleIcon sx={{ color: '#178f07' }} />
          </Box>
        )}

        <Container
          className={styles.textFieldContainer}
          onClick={() => toggleTodo(todo.id)}
        >
          {changeTodo ? (
            <TextField
              className={styles.textField}
              value={updateInputValue}
              onChange={(e) => setUpdateInputValue(e.target.value)}
            />
          ) : (
            <Typography className={complete ? styles.textDecoration : styles.text}>{updateInputValue}</Typography>
          )}
        </Container>

        {changeTodo ? (
          <Box //save new input value
            className={styles.button}
            onClick={() => {
              setChangeTodo(false)
              
            }}
          >
            <TaskIcon sx={{ color: '#1f71db' }} />
          </Box>
        ) : (
          <Box //change input value
            className={styles.button}
            onClick={() => {
              setChangeTodo(true);
            }}
          >
            <SettingsIcon sx={{ color: '#515251' }} />
          </Box>
        )}
        <Box //delete to-do
          className={styles.button}
          onClick={() => removeTodo(todo.id)}
        >
          <DeleteForeverIcon sx={{ color: '#cc1606' }} />
        </Box>
      </Box>
    </Box>
  )
}
