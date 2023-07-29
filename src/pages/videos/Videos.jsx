import Link from 'next/link';
import React from 'react';

const VideoCard = ({ imageUrl, link, length }) => {
  return (
    <div className="max-w-sm p-2 border-gray-200 rounded-lg shadow  dark:border-gray-700">
      <Link href={link} target="_blank" rel="noopener noreferrer" passHref>
        <img src={imageUrl} alt={'Thumbnail'} className="mt-6 mb-2" />
      </Link>
      <a className="text-white mb-4">{length}</a>
    </div>
  );
};

const Videos = () => {
  return (
    <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full pt-40 pb-80">
      <h2 className="text-xxl tracking-widest uppercase text-[#00FFFF] text-center mt-10">
        YouTube videos
      </h2>
      <p className="mt-4 mb-0 text-lg text-white text-center px-12">
        My Youtube channel is made to share all types of content for Web3
        Security.
      </p>{' '}
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-2 mt-10">
        <VideoCard
          imageUrl="/assets/youtube/ShadowAudit1.png"
          link="https://youtu.be/J0oX_9bPq64"
          length="1:30:46"
        />
        <VideoCard
          imageUrl="/assets/youtube/report-KUMA.png"
          link="https://youtu.be/mZV7IVzZGOI"
          length="25:26"
        />
        <VideoCard
          imageUrl="/assets/youtube/high-issue-Kuma.png"
          link="https://youtu.be/FC2g6g-Ufho"
          length="5:31"
        />
      </div>
    </div>
  );
};

export default Videos;
