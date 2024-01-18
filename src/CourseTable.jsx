// CourseTable.jsx

import React, { useState, useEffect } from 'react';
import './CourseTable.css';

const CourseTable = () => {
  const [courses, setCourses] = useState([]);
  const [newCourseName, setNewCourseName] = useState('');
  const [newCourseDuration, setNewCourseDuration] = useState('');
  const [editingCourseId, setEditingCourseId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setCourses(data);
    };

    fetchData();
  }, []);

  const handleAddCourse = () => {
    setCourses(prevCourses => [
      ...prevCourses,
      { id: prevCourses.length + 1, name: newCourseName, duration: newCourseDuration }
    ]);

    setNewCourseName('');
    setNewCourseDuration('');
  };

  const handleEdit = (courseId) => {
    setEditingCourseId(courseId);

    const courseToEdit = courses.find(course => course.id === courseId);
    if (courseToEdit) {
      setNewCourseName(courseToEdit.name);
      setNewCourseDuration(courseToEdit.duration);
    }
  };

  const handleSaveEdit = () => {
    setCourses(prevCourses => prevCourses.map(course =>
      course.id === editingCourseId ? { ...course, name: newCourseName, duration: newCourseDuration } : course
    ));

    setEditingCourseId(null);
    setNewCourseName('');
    setNewCourseDuration('');
  };

  const handleCancelEdit = () => {
    setEditingCourseId(null);
    setNewCourseName('');
    setNewCourseDuration('');
  };

  const handleDelete = (courseId) => {
    setCourses(prevCourses => prevCourses.filter(course => course.id !== courseId));
  };

  const getPendingCount = () => {
    return courses.filter(course => course.id !== editingCourseId).length;
  };

  return (
    <div>
      <div>
        <h2>Add Course</h2>
        <input
          type="text"
          placeholder="Enter course name"
          value={newCourseName}
          onChange={(e) => setNewCourseName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter course duration"
          value={newCourseDuration}
          onChange={(e) => setNewCourseDuration(e.target.value)}
        />
        <button onClick={handleAddCourse}>Add Course</button>
      </div>

      {/* Table to display course details */}
      <h2>Course Table</h2>
      <div>
        <p>{getPendingCount()} courses pending</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th className="column-spacing">Name</th>
            <th className="column-spacing">Duration</th>
            <th className="column-spacing">Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>
                {editingCourseId === course.id ? (
                  <input
                    type="text"
                    value={newCourseName}
                    onChange={(e) => setNewCourseName(e.target.value)}
                  />
                ) : (
                  course.name
                )}
              </td>
              <td>
                {editingCourseId === course.id ? (
                  <input
                    type="text"
                    value={newCourseDuration}
                    onChange={(e) => setNewCourseDuration(e.target.value)}
                  />
                ) : (
                  course.duration
                )}
              </td>
              <td>
                {editingCourseId === course.id ? (
                  <div className="actions-container">
                    <button onClick={handleSaveEdit} className="edit">Save</button>
                    <button onClick={handleCancelEdit} className="delete">Cancel</button>
                  </div>
                ) : (
                  <div className="actions-container">
                    <button onClick={() => handleEdit(course.id)} className="edit">Edit</button>
                    <button onClick={() => handleDelete(course.id)} className="delete">Delete</button>
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

export default CourseTable;
