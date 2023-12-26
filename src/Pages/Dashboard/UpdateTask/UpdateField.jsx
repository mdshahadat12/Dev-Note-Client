/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AllContextProvider } from "../../../AllContext/AllContext";
import axios from "axios";
import toast from "react-hot-toast";
import useAllTasks from "../../../Hooks/useAllTasks";

const UpdateField = ({ task }) => {
  const [priority, setPriority] = useState("");
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AllContextProvider);
  const { refetch } = useAllTasks();

  const uid = user.uid;

  const onSubmit = (data) => {
    const send = {
      title: data.title,
      description: data.description,
      deadline: data.deadline,
      priority,
      status: task.status,
      uid,
    };

    axios
      .put(`https://dev-notes-server.vercel.app/api/tasks/${task._id}`, send)
      .then((res) => {
        if (res.data._id) {
          refetch();
          toast.success("Task update success.");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-80 md:w-[440px] lg:w-3/4 mx-auto bg-white px-4 rounded-lg flex flex-col items-center"
    >
      <div className="flex gap-2 flex-wrap w-fit mx-auto">
        <div className="flex flex-col gap-2 w-full">
          <input
            defaultValue={task.title}
            required
            type="text"
            placeholder="Title"
            {...register("title")}
            className="bg-transparent border border-blue-500 px-4 py-1 "
          />
          <input
            defaultValue={task.deadline}
            required
            type="date"
            placeholder="Deadline"
            {...register("deadline")}
            className="bg-transparent border border-blue-500 px-4 py-1 w-full"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <input
            defaultValue={task.description}
            required
            type="text"
            placeholder="Description"
            {...register("description")}
            className="bg-transparent border border-blue-500 px-4 py-1 h-12 mt-[3px]"
          />

          <select
            defaultValue={task.priority}
            onChange={(e) => setPriority(e.target.value)}
            className="select select-primary w-full rounded-none bg-transparent"
          >
            <option disabled selected>
              Priority
            </option>
            <option value={"low"}>Low</option>
            <option value={"moderate"}>Moderate</option>
            <option value={"high"}>High</option>
          </select>
        </div>
      </div>

      <input
        type="submit"
        value={"Update Task"}
        className="btn btn-primary mt-4 btn-sm lg:btn-outline"
      />
    </form>
  );
};

export default UpdateField;
