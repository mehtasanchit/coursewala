const CourseCard = ({ course }) => (
    <div className="bg-gradient-to-br from-white via-slate-50 to-slate-100 shadow-lg rounded-2xl p-5 hover:shadow-2xl transition-all duration-300 border border-gray-100">
      
      <img
        src={course.image || '/placeholder.jpg'}
        alt={course.title}
        className="w-full h-48 object-cover rounded-xl shadow-sm mb-4"
      />
  
      <h2 className="text-2xl font-bold text-gray-800">{course.title}</h2>
  
      <p className="text-sm text-gray-600 mt-2 line-clamp-3">{course.description}</p>
  
      <div className="mt-3 text-sm text-indigo-600 font-medium">
        👨‍🏫 Instructor: {course.instructor}
      </div>
  
      <div className="mt-1 text-lg font-semibold text-green-600">
        💰 {course.price}
      </div>
  
      <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
        Enroll Now
      </button>
    </div>
  );
  
export default CourseCard;
  