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
    <div className="max-w-2xl mx-auto space-y-6 py-8 pt-20">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Vagas disponíveis</h2>
      {jobs.map((job) => (
        <Card key={job.id} className="p-5 flex gap-6 items-center">
          <div className="flex-shrink-0 h-16 w-16 rounded-lg bg-gray-200 dark:bg-white/10 overflow-hidden flex items-center justify-center">
            <img src={job.logo} alt={job.company} className="w-12 h-12 object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{job.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-300">{job.company} • {job.location}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-200">{job.description}</p>
            <div className="mt-2 space-x-2">
              {job.tags.map((tag) => (
                <span key={tag} className="inline-block px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-900/30 text-sm text-blue-600 dark:text-blue-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 mt-4 self-start">
            Candidatar-se
          </button>
        </Card>
      ))}
    </div>
  );
}