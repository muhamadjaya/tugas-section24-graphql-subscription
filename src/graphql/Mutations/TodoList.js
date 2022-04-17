import { gql } from "@apollo/client";

export const INSERT_TODOLIST = gql`
  mutation insertTodolist($object: todolist_insert_input!) {
    insert_todolist_one(object: $object) {
      id
      title
      is_done
    }
  }
`;

export const UPDATE_TODOLIST_BY_ID = gql`
  mutation updateTodolistById($id: Int!, $is_done: Boolean) {
    update_todolist_by_pk(
      pk_columns: { id: $id }
      _set: { is_done: $is_done }
    ) {
      id
      title
      is_done
    }
  }
`;

export const DELETE_TODOLIST_BY_ID = gql`
  mutation deleteTodolistById($id: Int!) {
    delete_todolist_by_pk(id: $id) {
      id
    }
  }
`;
