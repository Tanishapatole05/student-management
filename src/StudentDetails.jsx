// StudentDetails.jsx

import React, { useState, useEffect } from 'react';
//import './StudentDetails.css';
import sidebar from'./Sidebar';

const StudentDetails = () => {
  const [students, setStudents] = useState([]);
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentLastName, setNewStudentLastName] = useState('');
  const [newStudentEmail, setNewStudentEmail] = useState('');
  const [newStudentContact, setNewStudentContact] = useState('');
  const [newStudentCourse, setNewStudentCourse] = useState('');
  const [editingStudentId, setEditingStudentId] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {
      
      setStudents(data);
    };

    fetchData();
  }, []);

  const handleAddStudent = () => {
    // Add a new student to the list
    setStudents(prevStudents => [
      ...prevStudents,
      {
        id: prevStudents.length + 1,
        name: newStudentName,
        lastName: newStudentLastName,
        email: newStudentEmail,
        contact: newStudentContact,
        course: newStudentCourse
      }
    ]);

    setNewStudentName('');
    setNewStudentLastName('');
    setNewStudentEmail('');
    setNewStudentContact('');
    setNewStudentCourse('');
  };

  const handleEdit = (studentId) => {
    
    setEditingStudentId(studentId);

    const studentToEdit = students.find(student => student.id === studentId);
    if (studentToEdit) {
      setNewStudentName(studentToEdit.name);
      setNewStudentLastName(studentToEdit.lastName);
      setNewStudentEmail(studentToEdit.email);
      setNewStudentContact(studentToEdit.contact);
      setNewStudentCourse(studentToEdit.course);
    }
  };

  const handleSaveEdit = () => {
    
    setStudents(prevStudents => prevStudents.map(student =>
      student.id === editingStudentId
        ? {
            ...student,
            name: newStudentName,
            lastName: newStudentLastName,
            email: newStudentEmail,
            contact: newStudentContact,
            course: newStudentCourse
          }
        : student
    ));

    setEditingStudentId(null);
    setNewStudentName('');
    setNewStudentLastName('');
    setNewStudentEmail('');
    setNewStudentContact('');
    setNewStudentCourse('');
  };

  const handleCancelEdit = () => {
    setEditingStudentId(null);
    setNewStudentName('');
    setNewStudentLastName('');
    setNewStudentEmail('');
    setNewStudentContact('');
    setNewStudentCourse('');
  };

  const handleDelete = (studentId) => {
    setStudents(prevStudents => prevStudents.filter(student => student.id !== studentId));
  };

  return (
    <div>
      <div>
        <h2>Add Student Details</h2>
        <input
          type="text"
          placeholder="Enter student name"
          value={newStudentName}
          onChange={(e) => setNewStudentName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter student last name"
          value={newStudentLastName}
          onChange={(e) => setNewStudentLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter student email"
          value={newStudentEmail}
          onChange={(e) => setNewStudentEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter student contact"
          value={newStudentContact}
          onChange={(e) => setNewStudentContact(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter student course"
          value={newStudentCourse}
          onChange={(e) => setNewStudentCourse(e.target.value)}
        />
        <button onClick={handleAddStudent}>Add Student</button>
      </div>

      {/* Table to display student details */}
      <h2>List Of Students</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th className="column-spacing">Name</th>
            <th className="column-spacing">Last Name</th>
            <th className="column-spacing">Email</th>
            <th className="column-spacing">Contact</th>
            <th className="column-spacing">Course</th>
            <th className="column-spacing">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td className="column-spacing">
                {editingStudentId === student.id ? (
                  <input
                    type="text"
                    value={newStudentName}
                    onChange={(e) => setNewStudentName(e.target.value)}
                  />
                ) : (
                  student.name
                )}
              </td>
              <td className="column-spacing">
                {editingStudentId === student.id ? (
                  <input
                    type="text"
                    value={newStudentLastName}
                    onChange={(e) => setNewStudentLastName(e.target.value)}
                  />
                ) : (
                  student.lastName
                )}
              </td>
              <td className="column-spacing">
                {editingStudentId === student.id ? (
                  <input
                    type="text"
                    value={newStudentEmail}
                    onChange={(e) => setNewStudentEmail(e.target.value)}
                  />
                ) : (
                  student.email
                )}
              </td>
              <td className="column-spacing">
                {editingStudentId === student.id ? (
                  <input
                    type="text"
                    value={newStudentContact}
                    onChange={(e) => setNewStudentContact(e.target.value)}
                  />
                ) : (
                  student.contact
                )}
              </td>
              <td className="column-spacing">
                {editingStudentId === student.id ? (
                  <input
                    type="text"
                    value={newStudentCourse}
                    onChange={(e) => setNewStudentCourse(e.target.value)}
                  />
                ) : (
                  student.course
                )}
              </td>
              <td>
                {editingStudentId === student.id ? (
                  <div className="actions-container">
                    <button onClick={handleSaveEdit} className="edit">Save</button>
                    <button onClick={handleCancelEdit} className="delete">Cancel</button>
                  </div>
                ) : (
                  <div className="actions-container">
                    <button onClick={() => handleEdit(student.id)} className="edit">Edit</button>
                    <button onClick={() => handleDelete(student.id)} className="delete">Delete</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDetails;
