import { useEffect, useState } from 'react';
import axios from 'axios';
import CourseCard from '../components/CourseCard';

export default function Dashboard(){
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/course/preview')
      .then((res) => {
        console.log(res);
        setCourses(res.data.courses);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to load courses');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center p-10">Loading courses...</div>;
  if (error) return <div className="text-center text-red-500 p-10">{error}</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Courses Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};
