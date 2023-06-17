import React, { useState } from 'react';
import Link from 'next/link';

const LevelCard = ({ url, title, description }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <div>
        <Link
          href={url}
          class="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg 
                  shadow hover:bg-gray-100 dark:bg-white dark:border-blue-600 dark:hover:bg-blue-100"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h5 class="mb-2 text-xl font-bold tracking-tight dark:text-gray-800 ">
            {title}
          </h5>
          <p class="font-normal dark:text-gray-900">{description}</p>
        </Link>
        <div class="ml-2">
          <label class="inline-flex items-center">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <span class="ml-2">Done</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default LevelCard;
