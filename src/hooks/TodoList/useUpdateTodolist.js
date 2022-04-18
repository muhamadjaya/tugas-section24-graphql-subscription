import { useMutation } from "@apollo/client";
import { UPDATE_TODOLIST_BY_ID } from "../../graphql/TodoList/mutations";

const useUpdateTodolist = () => {
  const [updateTodolist, { loading: loadingUpdate }] = useMutation(
    UPDATE_TODOLIST_BY_ID,
    {
      onCompleted: (data) => {},
      onError: (error) => {
        console.log("Error in mutation update", { error });
      },
    }
  );

  return { updateTodolist, loadingUpdate };
};

export default useUpdateTodolist;
