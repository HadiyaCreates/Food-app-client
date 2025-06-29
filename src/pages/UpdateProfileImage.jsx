import React, { useState } from "react";
import axios from "axios";

const CLOUD_NAME = "dbqtpevjc"; // your cloud name
const UPLOAD_PRESET = "foodapp_unsigned"; // your upload preset

const UpdateProfileImage = ({ user, setUser }) => {
  const [image, setImage] = useState(null);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        formData
      );
      const imageUrl = res.data.secure_url;
      // Save image URL to backend DB (optional) and update UI
      setUser((prev) => ({ ...prev, profileImage: imageUrl }));
      alert("Profile image updated!");
    } catch (err) {
      alert("Upload failed!");
      console.error(err);
    }
  };

  return (
    <div className="text-white text-sm">
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="block mt-2"
            style={{ display: "none" }}
      />
    </div>
  );
};

export default UpdateProfileImage;
