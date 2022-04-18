import { useMutation } from "@apollo/client";
import { INSERT_TODOLIST } from "../../graphql/TodoList/mutations";

const useInsertTodolist = () => {
  const [insertTodolist, { loading: loadingInsert }] = useMutation(
    INSERT_TODOLIST,
    {
      onCompleted: (data) => {},
      onError: (error) => {
        console.log("Error in mutation insert", { error });
      },
    }
  );

  return { insertTodolist, loadingInsert };
};

export default useInsertTodolist;
