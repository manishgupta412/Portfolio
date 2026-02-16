import { Code, Calendar, MapPin, Users, BookOpen } from "lucide-react";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="py-20 bg-background dark:bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Educational{" "}
              <span className="text-gray-600 dark:text-gray-400">
                Background
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              My academic journey and continuous learning path in computer
              science and software engineering
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* University Education */}
            <div className="group h-full">
              <a
              
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-2 relative overflow-hidden cursor-pointer border-transparent hover:-translate-y-1 flex flex-col">
                  <div className="flex items-start mb-4 relative z-10">
                    <div className="w-14 h-14 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center text-white dark:text-gray-900 mr-4 shadow-lg transition-all duration-300">
                      <BookOpen className="text-2xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        Bachelor of Engineering
                      </h3>
                      <h4 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Software Engineering
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                        Amity University Noida
                      </p>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <span className="flex items-center">
                          <Calendar className="mr-1 h-4 w-4" />
                          2022 - 2026
                        </span>
                        <span className="flex items-center">
                          <MapPin className="mr-1 h-4 w-4" />
                          Noida, India
                        </span>
                      </div>
                      <div className="flex gap-2">
                        
                        <span className="px-3 py-1 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full text-sm font-semibold">
                          Graduate 05/2026
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    Focused on software development, embedded system
                    engineering, data structures, and object-oriented
                    programming. 
                  </p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Key Courses:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                        Object Oriented Programming (C#)
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                        Data Structures & Algorithms (C++)
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                        Software Deployment & Evolution
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                        Data Management (SQL)
                      </span>
                    </div>
                  </div>
                  <div>
                  </div>
                </div>
              </a>
            </div>

            {/* High School Education */}
            <div className="group h-full">
              <a
                
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-2 relative overflow-hidden cursor-pointer border-transparent hover:-translate-y-1 flex flex-col">
                  <div className="flex items-start mb-4 relative z-10">
                    <div className="w-14 h-14 bg-gray-700 dark:bg-gray-300 rounded-full flex items-center justify-center text-white dark:text-gray-900 mr-4 shadow-lg transition-all duration-300">
                      <Users className="text-2xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        Andhra Education Society
                      </h3>
                      <h4 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Major: Science and IT
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                        
                      </p>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <span className="flex items-center">
                          <Calendar className="mr-1 h-4 w-4" />
                          2021 - 2022
                        </span>
                        <span className="flex items-center">
                          <MapPin className="mr-1 h-4 w-4" />
                          Delhi, India
                        </span>
                      </div>
                      <div className="flex gap-2">
                        
                        <span className="px-3 py-1 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full text-sm font-semibold">
                          Graduated
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    Done high school with science background and computer science learning dsa using python and built real-time weather update project using API.
                  </p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Key Courses:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                        Computer Science
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                         Mathematics
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                        Physics
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                        Chemistry
                      </span>
                    </div>
                  </div>
                  <div>
                    
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
