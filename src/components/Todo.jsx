import { useQuery } from "@tanstack/react-query";

const API = "https://dummyjson.com/recipes/search?limit=10";

const Todos = () => {
  const fetchTodoList = async () => {
    const response = await fetch(API);
    const data = await response.json();
    return data;
  };
  const { isPending, isError, data, error, isLoading, isFetching } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodoList,
    // staleTime: Infinity
  });

  console.log({isLoading, isFetching, isPending});

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  // We can assume by this point that `isSuccess === true`
  return (
    <ul>
      {/* {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))} */}
      {JSON.stringify(data)}
    </ul>
  );
};

export default Todos;
