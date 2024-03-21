import { useForm } from "react-hook-form";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const AddEvent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const queryClient = useQueryClient();
  const addEventMutation = useMutation({
    mutationFn: async (data) => {
      try {
        // Send form data with image URL to the server
        await axios.post("https://thawing-falls-89023-aea7c7fc4719.herokuapp.com/add-events", data);
        console.log("Event added successfully");
        reset(); // Reset the form after successful submission
      } catch (error) {
        console.error("Error adding event:", error);
        throw error; // Rethrow the error for React Query to handle
      }
    },
    onSuccess: () => {
      console.log("Event added successfully");
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
    onError: (error) => {
      console.error("Error adding event:", error);
    },
  });

  const isLoading = addEventMutation.isLoading;

  const onSubmit = (data) => {
    addEventMutation.mutate(data);
  };

  return (
    <div>
      <h1>Add Event</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="title" className="block">
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title", { required: true })}
            className="form-input mt-1 block w-full"
          />
          {errors.title && (
            <span className="text-red-500">Title is required</span>
          )}
        </div>
        <div>
          <label htmlFor="image" className="block">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            {...register("image", { required: true })}
            className="form-input mt-1 block w-full"
          />
          {errors.image && (
            <span className="text-red-500">Image URL is required</span>
          )}
        </div>
        <div>
          <label htmlFor="made_by" className="block">
            Made By
          </label>
          <input
            type="text"
            id="made_by"
            {...register("made_by", { required: true })}
            className="form-input mt-1 block w-full"
          />
          {errors.made_by && (
            <span className="text-red-500">Made By is required</span>
          )}
        </div>
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? "Adding Event..." : "Add Event"}
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
