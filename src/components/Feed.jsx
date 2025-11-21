import Card from './Card';
import IconButton from './IconButton';
import {
  PhotoIcon,
  VideoCameraIcon,
  ChartBarIcon,
  PencilSquareIcon,
  HandThumbUpIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowUturnRightIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';

const posts = [
  {
    id: 1,
    author: 'Aline Green',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    time: '2 h',
    text: 'Jornada de startup é cheia de altos e baixos. Persistência vence!',
    tags: ['#design', '#startup'],
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    author: 'Alex Frazier',
    avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
    time: '5 h',
    text: 'Tip do dia: componha seus layouts em camadas usando tokens.',
    tags: ['#frontend', '#uiux'],
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Feed() {
  return (
    <div className="space-y-4">
      
      <Card className="p-4">
       <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-full bg-gray-600 ring-2 ring-gray-700 overflow-hidden">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="Denis Barros"
          className="w-full h-full object-cover"
        />
      </div>
      <input
        className="flex-1 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-surface-dark px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
        placeholder="Comece uma publicação?"
      />
    </div>
        <div className="mt-3 flex justify-center">
          <div className="flex items-center gap-2">
            <ComposerButton icon={<PhotoIcon className="h-5 w-5 text-blue-600" />} text="Imagem" />
            <ComposerButton icon={<VideoCameraIcon className="h-5 w-5 text-green-600" />} text="Vídeo" />
            <ComposerButton icon={<PencilSquareIcon className="h-5 w-5 text-orange-600" />} text="Artigo" />
          </div>
        </div>
      </Card>

      
      {posts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </div>
  );
}

function ComposerButton({ icon, text }) {
  return (
    <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 text-sm text-gray-900 dark:text-white">
      {icon}
      <span>{text}</span>
    </button>
  );
}

function PostCard({ post }) {
  return (
    <Card className="overflow-hidden">
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-600 overflow-hidden">
            <img
              src={post.avatar}
              alt={post.author}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{post.author}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-300">{post.time} • Público</p>
              </div>
              <button className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white">•••</button>
            </div>
            <p className="mt-2 text-sm text-gray-900 dark:text-white">{post.text}</p>
            <div className="mt-1 space-x-2">
              {post.tags.map((t) => (
                <a key={t} className="text-blue-600 dark:text-blue-400 hover:underline">
                  {t}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {post.image && <img src={post.image} alt="" className="w-full aspect-video object-cover" />}

      <div className="px-4 py-2 text-sm text-gray-500 dark:text-gray-300">
        418 curtidas • 13 comentários • 3 compartilhamentos
      </div>

      <div className="px-2 pb-2 grid grid-cols-4">
        <IconButton className="justify-center text-gray-900 dark:text-white">
          <HandThumbUpIcon className="h-5 w-5" />
          Curtir
        </IconButton>
        <IconButton className="justify-center text-gray-900 dark:text-white">
          <ChatBubbleBottomCenterTextIcon className="h-5 w-5" />
          Comentar
        </IconButton>
        <IconButton className="justify-center text-gray-900 dark:text-white">
          <ArrowUturnRightIcon className="h-5 w-5" />
          Compartilhar
        </IconButton>
        <IconButton className="justify-center text-gray-900 dark:text-white">
          <PaperAirplaneIcon className="h-5 w-5" />
          Enviar
        </IconButton>
      </div>
    </Card>
  );
}