import { gql } from "@apollo/client";

export const GET_TODOLIST = gql`
  query getTodolist {
    todolist(order_by: { id: asc }) {
      id
      title
      is_done
    }
  }
`;
