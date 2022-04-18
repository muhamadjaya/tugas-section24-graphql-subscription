import { useSubscription } from "@apollo/client";
import { GET_TODOLIST_SUBSCRIPTION } from "../../graphql/TodoList/subscription";

const useSubscriptionTodolist = () => {
  const {
    data: dataSubscription,
    loading: loadingSubscription,
    error: errorSubscription,
  } = useSubscription(GET_TODOLIST_SUBSCRIPTION);

  return { dataSubscription, loadingSubscription };
};

export default useSubscriptionTodolist;
