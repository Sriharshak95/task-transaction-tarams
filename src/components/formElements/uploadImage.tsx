import { useState, useRef } from "react";
import { ImageUploadI } from "../../interface";

const ImageUpload:React.FC<ImageUploadI> = ({getImage}) => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    getImage(URL.createObjectURL(selectedImage));
    setImage(selectedImage);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleClearClick = () => {
    setImage(null);
    fileInputRef.current.value = null;
  };

  return (
    <div className="relative w-full h-60">
      {image ? (
        <div className="relative w-full h-full">
          <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute top-2 right-2 bg-gray-700 rounded-full p-1 cursor-pointer"
            onClick={handleClearClick}
          >
            &times;
          </div>
        </div>
      ) : (
        <div
          className="flex items-center justify-center w-full h-full border-4 border-dashed border-gray-400 cursor-pointer"
          onClick={handleUploadClick}
        >
          <div className="flex flex-col items-center">
            <span className="mt-2 text-sm font-medium text-gray-400">
              Upload an image
            </span>
          </div>
        </div>
      )}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleImageChange}
      />
    </div>
  );
}

export default ImageUpload;
