import React, { useState } from 'react';
import "./profile.css";
import Back from "../common/back/Back"

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    image: '',
    name: '',
    certificates: '',
    email: '',
    userId: '',
    level: '',
    phone: '',
    studentsCoached: '',
    ongoingCourses: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(profileData); // You can do something with the profile data here
  };

  return (
    <div className="profile-container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div>
            <label htmlFor="image">Upload Image:</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={profileData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="certificates">Upload Certificates:</label>
            <input
              type="file"
              id="certificates"
              name="certificates"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row">
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="userId">User ID:</label>
            <input
              type="text"
              id="userId"
              name="userId"
              value={profileData.userId}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="level">Level:</label>
            <input
              type="text"
              id="level"
              name="level"
              value={profileData.level}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={profileData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="studentsCoached">Number of Students Coached:</label>
            <input
              type="text"
              id="studentsCoached"
              name="studentsCoached"
              value={profileData.studentsCoached}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="ongoingCourses">Ongoing Courses:</label>
            <input
              type="text"
              id="ongoingCourses"
              name="ongoingCourses"
              value={profileData.ongoingCourses}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <button className="button" type="submit">Save</button>
      </form>
    </div>
  );
};

export default ProfilePage;
