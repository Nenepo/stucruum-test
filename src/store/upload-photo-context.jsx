import { useReducer } from 'react';
import { createContext } from "react";
import { formatFileSize } from "../utility/utility";

// initial state of the uploaded files
const initialState = {
  uploads: [],
  uploadImage: () => { },
  pauseUpload: () => { },
  cancelUpload: () => { },
  updateProgress: () => { },
  setStatus: () => { },

}

// Actions
const ADD_IMAGES = "ADD_IMAGES";
const UPDATE_PROGRESS = "UPDATE_PROGRESS";
const SET_STATUS = "SET_STATUS";
const CANCEL_UPLOAD = "CANCEL_UPLOAD";
const PAUSE_UPLOAD = "PAUSE_UPLOAD";


// action.payload is a property of the action object that carries the data necessary to update the state
function uploadImagesReducer(state, action) {
  console.log("Action Dispatched:", action); // Add this line

  switch (action.type) {
    case ADD_IMAGES:
      const newUploads = [...state.uploads,
      ...action.payload.map(file => ({
        id: crypto.randomUUID(),
        name: file.name,
        image: URL.createObjectURL(file),
        size: formatFileSize(file.size),
        progress: 0,
        status: "pending",
        file,

      })),
      ];
      return {
        ...state,
        uploads: newUploads,
      };

    case UPDATE_PROGRESS:
      return {
        ...state,
        uploads: state.uploads.map(upload =>
          upload.id === action.payload.id ?
            { ...upload, progress: action.payload.progress } : upload
        ),
      };
    case SET_STATUS:
      return {
        ...state,
        uploads: state.uploads.map(upload =>
          upload.id === action.payload.id ?
            { ...upload, status: action.payload.status } : upload
        ),
      };
    case CANCEL_UPLOAD:
      return {
        ...state,
        uploads: state.uploads.filter(upload => upload.id !== action.payload.id),
      };
    case PAUSE_UPLOAD:
      return {
        ...state,
        uploads: state.uploads.map(upload =>
          upload.id === action.payload.id ? { ...upload, status: "paused" } : upload
        ),
      };
    default:
      return state;

  }
}


export const UploadContext = createContext(initialState)

export default function UploadPhotoContextProvider({ children }) {

  const [uploadImageState, uploadImageDispatch] = useReducer(uploadImagesReducer, initialState);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);

    uploadImageDispatch({ type: ADD_IMAGES, payload: files });
  };


  const pauseUpload = (id) => {
    uploadImageDispatch({ type: PAUSE_UPLOAD, payload: { id } });

  };

  const cancelUpload = (id) => {
    uploadImageDispatch({ type: CANCEL_UPLOAD, payload: { id } });

  };
  const ctxValue = {
    uploads: uploadImageState.uploads,
    uploadImage: handleFileUpload,
    pauseUpload,
    cancelUpload
  }

  return <UploadContext.Provider value={ctxValue}>
    {children}
  </UploadContext.Provider>

}


