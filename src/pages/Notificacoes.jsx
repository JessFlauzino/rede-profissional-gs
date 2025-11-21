import Card from '../components/Card';

const notifications = [
  {
    id: 1,
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    name: 'Aline Green',
    message: 'recomendou seu perfil para um recrutador.',
    time: 'há 20 min',
  },
  {
    id: 2,
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    name: 'Alex Frazier',
    message: 'enviou uma mensagem para você.',
    time: 'há 1 h',
  },
];

export default function Notificacoes() {
  return (
    <div className="max-w-xl mx-auto space-y-6 py-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Notificações</h2>
      {notifications.length === 0 ? (
        <Card className="p-6 text-center text-gray-600 dark:text-gray-300">Nenhuma nova notificação</Card>
      ) : (
        notifications.map((notif) => (
          <Card key={notif.id} className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
              <img src={notif.avatar} alt={notif.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <p className="text-gray-900 dark:text-white">
                <span className="font-semibold">{notif.name}</span> {notif.message}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-300 mt-1">{notif.time}</p>
            </div>
          </Card>
        ))
      )}
    </div>
  );
}