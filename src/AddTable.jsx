// AddTable.jsx

import React, { useState } from 'react';
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
const AddTable = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [coursesEnrolled, setCoursesEnrolled] = useState('');
  const [courseProgress, setCourseProgress] = useState('');

  const handleAdd = () => {
    const newStudent = {
      name,
      email,
      contact,
      course,
      courseProgress,
    };
    onAdd(newStudent);
    setName('');
    setEmail('');
    setContact('');
    setCoursesEnrolled('');
    setCourseProgress('');
  };
 return (
    <div>
      <h3>Add Student</h3>
      <div>
        <MDBInput
          label='Name'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <MDBInput
          label='Email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <MDBInput
          label='Contact'
          type='text'
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </div>
      <div>
        <MDBInput
          label='Courses Enrolled'
          type='text'
          value={coursesEnrolled}
          onChange={(e) => setCoursesEnrolled(e.target.value)}
        />
      </div>
      <div>
        <MDBInput
          label='Course Progress'
          type='text'
          value={courseProgress}
          onChange={(e) => setCourseProgress(e.target.value)}
        />
      </div>
      <div>
        <MDBBtn color='primary' onClick={handleAdd}>
          Add Student
        </MDBBtn>
      </div>
    </div>
  );
};

export default AddTable;
