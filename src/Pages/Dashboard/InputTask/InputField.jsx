import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AllContextProvider } from "../../../AllContext/AllContext";
import axios from "axios";
import toast from "react-hot-toast";
import useAllTasks from "../../../Hooks/useAllTasks";

const InputField = () => {
  const [priority, setPriority] = useState("");
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AllContextProvider);
  const { refetch } = useAllTasks();

  const uid = user.uid;
  const status = "to-do";

  const onSubmit = (data) => {
    const send = {
      title: data.title,
      description: data.description,
      deadline: data.deadline,
      priority,
      status,
      uid,
    };

    axios
      .post("https://dev-notes-server.vercel.app/api/tasks", send)
      .then((res) => {
        if (res.data.insertedId) {
          refetch();
          toast.success("Task added");
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
      className="w-80 md:w-[440px] lg:w-3/4 mx-auto bg-white px-4 py-4 md:py-6 lg:py-10 rounded-lg flex flex-col items-center mb-4 md:mb-6 lg:mb-8"
    >
      <div className="flex gap-2 flex-wrap w-fit mx-auto">
        <div className="flex flex-col gap-2">
          <input
            required
            type="text"
            placeholder="Title"
            {...register("title")}
            className="bg-transparent border border-black rounded-lg px-4 py-1 "
          />
          <input
            required
            type="text"
            placeholder="Description"
            {...register("description")}
            className="bg-transparent border border-black rounded-lg px-4 py-1 h-12 mt-[3px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <input
            required
            type="date"
            placeholder="Deadline"
            {...register("deadline")}
            className="bg-transparent border border-black rounded-lg px-4 py-1"
          />
          <select
            onChange={(e) => setPriority(e.target.value)}
            className="select border-black rounded-lg w-full max-w-xs bg-transparent"
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
        value={"Add Task"}
        className="btn bg-green-500 mt-4 btn-sm lg:btn-outline"
      />
    </form>
  );
};

export default InputField;
