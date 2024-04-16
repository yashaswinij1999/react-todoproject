import Paper from "@mui/material/Paper";
import { Divider, List, ListItem, ListItemText } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import EditIcon from "@mui/icons-material/Edit";
import useToggle from "../Hooks/useToggle";

export default function TodoItem({
  id,
  task,
  completed,
  deleteTodo,
  toggleTodo,
}) {
  const [isEditing, toggleIsEditing] = useToggle(false);

  return (
    <ListItem>
      {isEditing ? (
        <h1>Editing</h1>
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => {
              toggleTodo(id);
            }}
          />
          <ListItemText
            style={{
              textDecoration: completed ? "line-through" : "none",
            }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => {
                deleteTodo(id);
              }}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggleIsEditing}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
