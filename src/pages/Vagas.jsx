import Card from '../components/Card';

const jobs = [
  {
    id: 1,
    title: 'Desenvolvedor Front-End',
    company: 'Microsoft',
    location: 'São Paulo, SP',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    tags: ['React', 'Tailwind', 'JavaScript'],
    description: 'Trabalho remoto, equipe internacional, benefícios completos.',
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    company: 'Apple',
    location: 'Remoto',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    tags: ['Figma', 'Design System', 'Apple'],
    description: 'Atue com design de interfaces mobile e web para produtos Apple.',
  },
];

export default function Vagas() {
  return (
    <div className="max-w-2xl mx-auto space-y-6 py-8 pt-20 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center sm:text-left">
        Vagas disponíveis
      </h2>
      {jobs.map((job) => (
        <Card
          key={job.id}
          className="p-5 flex flex-col items-center gap-4 rounded-xl shadow-lg transition hover:shadow-xl bg-white dark:bg-gray-800 sm:flex-row sm:items-start sm:gap-6"
        >
          <div className="flex-shrink-0 h-16 w-16 rounded-lg bg-gray-200 dark:bg-white/10 overflow-hidden flex items-center justify-center mb-2 sm:mb-0 sm:mr-4">
            <img src={job.logo} alt={job.company} className="w-12 h-12 object-contain" />
          </div>
          <div className="flex-1 w-full text-center sm:text-left">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{job.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-300">{job.company} • {job.location}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-200">{job.description}</p>
            <div className="mt-2 flex flex-wrap justify-center sm:justify-start gap-2">
              {job.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-900/30 text-sm text-blue-600 dark:text-blue-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button className="w-full sm:w-auto px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 mt-2 sm:mt-0 self-stretch sm:self-start shadow">
            Candidatar-se
          </button>
        </Card>
      ))}
    </div>
  );
}