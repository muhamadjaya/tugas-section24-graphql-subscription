import { gql } from "@apollo/client";

export const GET_TODOLIST_SUBSCRIPTION = gql`
  subscription getTodolistSubscription {
    todolist(order_by: { id: asc }) {
      id
      title
      is_done
    }
  }
`;
