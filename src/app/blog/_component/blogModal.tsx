"use client"
import React, { useState } from 'react';
import { LuUploadCloud } from 'react-icons/lu';

const BlogModal = ({ onClose, onSave }:any) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);

  const handleFileUpload = (event:any) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  const handleSave = () => {
    const newPostData = {
      title,
      content,
      file,
    };

    onSave(newPostData);

    setTitle('');
    setContent('');
    setFile(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-container bg-white w-full md:w-96 mx-auto rounded-lg shadow-lg p-4">
        <h2 className="text-2xl font-semibold mb-4">Add Blog</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>
        <div className="mb-4 relative">
          <div className="relative">
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border rounded p-2 pr-10" // Remove padding on the right side
            />
            <label
              htmlFor="file-upload"
              className="absolute bottom-2 left-2 cursor-pointer text-blue-500 hover:underline"
            >
              <LuUploadCloud className="text-xl text-blue" />
            </label>
          </div>
          <input
            type="file"
            id="file-upload"
            accept=".pdf,.doc,.docx,.txt"
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>
        {file && (
          <p className="mb-4 text-sm text-gray-600">
            Uploaded File: <span className="font-semibold">{file.name}</span>
          </p>
        )}
        <div className="flex justify-end">
          <button onClick={handleSave} className="px-4 py-2 bg-dark-blue text-white rounded hover:bg-blue-600">
            Submit
          </button>
          <button onClick={onClose} className="px-4 py-2 ml-2 text-gray-600 hover:text-gray-800">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
