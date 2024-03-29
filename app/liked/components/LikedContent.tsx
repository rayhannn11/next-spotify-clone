'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@supabase/auth-helpers-react';

import { Song } from '@/types';
import MediaItem from '@/components/MediaItem';
import LikeButton from '@/components/LikeButton';
import useOnPlay from '@/hooks/useOnPlay';

interface LikedContentProps {
  songs: Song[];
}

const LikedContent: React.FC<LikedContentProps> = ({ songs }) => {
  const router = useRouter();
  const user = useUser();

  const onPlay = useOnPlay(songs);

  useEffect(() => {
    if (!user) {
      router.replace('/');
    }
  }, [user, router]);

  if (songs.length === 0) {
    return (
      <div
        className='
          flex 
          flex-col 
          gap-y-2 
          w-full px-6 
          text-neutral-400
        '
      >
        No liked songs.
      </div>
    );
  }
  return (
    <div className='flex flex-col gap-y-2 w-full p-6'>
      {songs.map((song: any) => (
        <div key={song.id} className='flex items-center gap-x-4 w-full'>
          <div className='flex-1'>
            <MediaItem onClick={(id) => onPlay(id)} data={song} />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default LikedContent;
