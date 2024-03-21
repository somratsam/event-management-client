import { useState } from "react";
import { FaTrash, FaEdit, FaSave, FaTimes } from "react-icons/fa";
import useFetchData from "../../hooks/useFetchData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Modal } from 'daisyui'; // Import Modal from daisyui

const EventList = () => {
  const queryClient = useQueryClient();
  const [editedData, setEditedData] = useState({});
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [currentEventId, setCurrentEventId] = useState(null); // State to track current event being edited

  const deleteEventMutation = useMutation({
    mutationFn: async (eventId) => {
      try {
        // Send delete request to the server
        await axios.delete(`https://thawing-falls-89023-aea7c7fc4719.herokuapp.com/events/${eventId}`);
        console.log('Event deleted successfully');
      } catch (error) {
        console.error('Error deleting event:', error);
        throw error; // Rethrow the error for React Query to handle
      }
    },
    onSuccess: () => {
      // Invalidate the events query to trigger refetch
      queryClient.invalidateQueries({ queryKey: ['events']});
    },
    onError: (error) => {
      console.error('Error deleting event:', error);
    }
  });

  const updateEventMutation = useMutation({
    mutationFn: async ({ eventId, updatedData }) => {
      try {
        // Send put request to update event
        await axios.put(`https://thawing-falls-89023-aea7c7fc4719.herokuapp.com/events/${eventId}`, updatedData);
        console.log('Event updated successfully');
      } catch (error) {
        console.error('Error updating event:', error);
        throw error; // Rethrow the error for React Query to handle
      }
    },
    onSuccess: () => {
      // Invalidate the events query to trigger refetch
      queryClient.invalidateQueries({ queryKey: ['events']});
    },
    onError: (error) => {
      console.error('Error updating event:', error);
    }
  });

  const { data, isLoading, isError } = useFetchData(
    ["events"],
    "https://thawing-falls-89023-aea7c7fc4719.herokuapp.com/events"
  );

  const handleDelete = (eventId) => {
    deleteEventMutation.mutate(eventId);
  };

  const openModal = (eventId) => {
    setCurrentEventId(eventId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSaveModal = () => {
    handleUpdate(currentEventId);
    closeModal();
  };

  const handleUpdate = (eventId) => {
    updateEventMutation.mutate({ eventId, updatedData: editedData[eventId] });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr className="text-black">
            <th>#</th>
            <th>Image</th>
            <th>Event</th>
            <th>Made By</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td>Loading...</td>
            </tr>
          ) : isError ? (
            <tr>
              <td>Error fetching data</td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.image} alt="Avatar" />
                    </div>
                  </div>
                </td>
                <td>{item.title}</td>
                <td>{item.made_by}</td>
                <td>
                  <button onClick={() => openModal(item._id)}> {/* Open modal on click */}
                    <FaEdit />
                  </button>
                  <button onClick={() => handleDelete(item._id)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Modal for editing */}
      <Modal
        open={showModal}
        onClose={closeModal}
        title="Edit Event"
        description="Edit your event here"
      >
        {/* Your modal content */}
        <input
          type="text"
          value={editedData[currentEventId]?.title || ''}
          onChange={(e) => setEditedData(prev => ({ ...prev, [currentEventId]: { ...prev[currentEventId], title: e.target.value } }))}
        />
        <input
          type="text"
          value={editedData[currentEventId]?.made_by || ''}
          onChange={(e) => setEditedData(prev => ({ ...prev, [currentEventId]: { ...prev[currentEventId], made_by: e.target.value } }))}
        />
        <button onClick={handleSaveModal}>
          <FaSave /> Save
        </button>
        <button onClick={closeModal}>
          <FaTimes /> Cancel
        </button>
      </Modal>
    </div>
  );
};

export default EventList;
