import { Code2, Database, Globe, Smartphone, Palette, GitBranch } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'SASS/SCSS'],
      color: 'bg-blue-500'
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs'],
      color: 'bg-green-500'
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'WebPack', 'Vite', 'Progressive Web Apps'],
      color: 'bg-orange-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: ['React Native', 'Expo', 'Flutter', 'iOS', 'Android', 'Cross-platform'],
      color: 'bg-purple-500'
    },
    {
      icon: Palette,
      title: 'Design & UX',
      skills: ['Figma', 'Adobe XD', 'Photoshop', 'User Research', 'Prototyping', 'Design Systems'],
      color: 'bg-pink-500'
    },
    {
      icon: GitBranch,
      title: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD', 'Testing (Jest, Cypress)'],
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 group"
              >
                <div className="flex items-center mb-4">
                  <div className={`${category.color} p-3 rounded-lg text-white group-hover:scale-110 transition-transform duration-200`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900 ml-3">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray-700 mr-2 mb-2 border border-gray-200 hover:border-gray-300 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}