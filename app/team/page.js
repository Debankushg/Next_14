'use client'

import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUpload = () => {
  const [images, setImages] = useState([]);

  const onDrop = (acceptedFiles) => {
    const newImages = acceptedFiles.map((file) => ({
      file,
      title: '',
      urlLink: '',
      preview: URL.createObjectURL(file),
    }));

    setImages((prevImages) => [...prevImages, ...newImages]);
  };


    const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: true,
  });

  const handleTitleChange = (index, title) => {
    const newImages = [...images];
    newImages[index].title = title;
    setImages(newImages);
  };

  const handleUrlLinkChange = (index, urlLink) => {
    const newImages = [...images];
    newImages[index].urlLink = urlLink;
    setImages(newImages);
  };

  const handleUpload = async () => {
    const formData = new FormData();
     images.map(({ file, title, urlLink }) => {
      const imageObject = { title, urlLink, file };
      formData.append('files', file);
      formData.append('titles', title);
      formData.append('urlLinks', urlLink);
      return imageObject;
    });
    
    formData.forEach((key)=>console.log(key))
    console.log(images,'images');
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Images uploaded successfully:', result.data);
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center py-8 px-4">
      <h1 className="text-white text-3xl mb-8">Upload Multiple Images with Titles and URL Links</h1>
      <div
        {...getRootProps()}
        className="border-4 border-dashed border-gray-600 rounded-lg p-8 cursor-pointer mb-8"
      >
        <input {...getInputProps()} />
        <p className="text-gray-400">Drag & drop some files here, or click to select files</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg">
            <img
              src={image.preview}
              alt="Image Preview"
              className="w-full h-32 object-cover mb-4 rounded"
            />
            <input
              type="text"
              placeholder="Title"
              value={image.title}
              onChange={(e) => handleTitleChange(index, e.target.value)}
              className="w-full mb-2 p-2 bg-gray-900 text-white rounded"
            />
            <input
              type="text"
              placeholder="URL Link"
              value={image.urlLink}
              onChange={(e) => handleUrlLinkChange(index, e.target.value)}
              className="w-full p-2 bg-gray-900 text-white rounded"
            />
          </div>
        ))}
      </div>
      <button
        onClick={handleUpload}
        className="mt-8 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Upload Images
      </button>
    </div>
  );
};

export default ImageUpload;

