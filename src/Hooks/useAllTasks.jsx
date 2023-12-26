import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AllContextProvider } from "../AllContext/AllContext";
import { LoaderComponent } from "../PrivateRoute/PrivateRoute";

const useAllTasks = () => {
  const [tasks, setTasks] = useState([]);
  const { user } = useContext(AllContextProvider);

  const uid = user.uid;

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const res = await axios.get(
        "https://dev-notes-server.vercel.app/api/tasks"
      );
      return res.data;
    },
  });

  useEffect(() => {
    if (data && data.length > 0) {
      const userFilteredData = data.filter((item) => item.uid === uid);

      setTasks(userFilteredData);
    }
  }, [data, uid]);

  if (isLoading) {
    return <LoaderComponent />;
  }

  if (error) {
    console.log(error);
  }

  return {
    tasks,
    refetch,
  };
};

export default useAllTasks;
