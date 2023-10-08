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
          imageUrl="/assets/youtube/startBlockchain.png"
          link="https://youtu.be/hgoBsfjutLo?si=B6mC508YlFos048O"
          length="5:19"
        />
        <VideoCard
          imageUrl="/assets/youtube/notSolidity.png"
          link="https://youtu.be/ZSQGT6IvFog?si=Es63Z1XfzV-4ZTnk"
          length="7:18"
        />
        <VideoCard
          imageUrl="/assets/youtube/roadmap1.png"
          link="https://youtu.be/VaSXA-HR2xY?si=3ZycWXxYYW7Cr0BO"
          length="14:30"
        />
        <VideoCard
          imageUrl="/assets/youtube/Medium1.png"
          link="https://youtu.be/jiY7IfLAh5Y?si=ElEmF7aAiUDKTw0B"
          length="1:37"
        />
        <VideoCard
          imageUrl="/assets/youtube/High-Sandwich.png"
          link="https://youtu.be/PCtg1pLCqiY?si=RlTu9tPCZGzqYgSZ"
          length="5:02"
        />
        <VideoCard
          imageUrl="/assets/youtube/Asymmetry-Report.png"
          link="https://youtu.be/C4itbvAwa-Y?si=cX7ADJzkdzTjk_dK"
          length="1:00:44"
        />
        <VideoCard
          imageUrl="/assets/youtube/high1-asymmetry.png"
          link="https://youtu.be/oCB66p65MYo?si=TGvCxetO3VwxVtrW"
          length="4:53"
        />
        <VideoCard
          imageUrl="/assets/youtube/ShadowAuditAssymetry.png"
          link="https://youtu.be/iKO5IySYrFk?si=EVWfwVkmf3u8tAlJ"
          length="1:50:43"
        />
        <VideoCard
          imageUrl="/assets/youtube/Code-Analysis-Thumb.png"
          link="https://youtu.be/F3ZM7tWwMl8?si=lKpEJRKeMZ-cyinH"
          length="46:10"
        />
        <VideoCard
          imageUrl="/assets/youtube/high-silent-overflow.png"
          link="https://youtu.be/7Q_GE8HBPmw?si=2f9w1mJYXRVQJRu-"
          length="5:00"
        />
        <VideoCard
          imageUrl="/assets/youtube/Overflow.png"
          link="https://youtu.be/9EEMjgw5cS8?si=-1DKl76-tcrFyvjH"
          length="20:14"
        />
        <VideoCard
          imageUrl="/assets/youtube/solidity-gas-opt-1.png"
          link="https://youtu.be/eOR8RHpWICs?si=mbYP_hSkSxT6SM7e"
          length="5:51"
        />
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
