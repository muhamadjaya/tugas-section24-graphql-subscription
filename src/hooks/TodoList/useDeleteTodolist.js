import { useMutation } from "@apollo/client";
import { DELETE_TODOLIST_BY_ID } from "../../graphql/TodoList/mutations";

const useDeleteTodolist = () => {
  const [deleteTodolist, { loading: loadingDelete }] = useMutation(
    DELETE_TODOLIST_BY_ID,
    {
      onCompleted: (data) => {},
      onError: (error) => {
        console.log("Error in mutation delete", { error });
      },
    }
  );

  return { deleteTodolist, loadingDelete };
};

export default useDeleteTodolist;
