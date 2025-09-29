import { Code, Palette, Lightbulb, Heart } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code'
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Creating beautiful and intuitive user interfaces'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and approaches'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Genuinely love what I do and it shows in my work'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate developer who loves creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-700">
              <p>
                With over 5 years of experience in web development, I specialize in creating 
                modern, responsive applications using cutting-edge technologies. My journey 
                started with a curiosity about how websites work, and it has evolved into a 
                deep passion for crafting exceptional digital experiences.
              </p>
              <p>
                I believe in the power of clean code, thoughtful design, and continuous learning. 
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
              <p>
                Currently based in San Francisco, I work with startups and established companies 
                to bring their digital visions to life. I'm always excited about new challenges 
                and opportunities to grow.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="text-blue-500 mb-4">
                    <Icon size={32} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                  <p className="text-gray-600 text-sm">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}