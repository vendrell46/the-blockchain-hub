import React, { useState } from 'react';

const LevelCard = ({ url, title, description }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <div>
        <a
          href={url}
          class="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-blue-400 dark:border-blue-400 dark:hover:bg-blue-500"
        >
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p class="font-normal text-gray-900 dark:text-gray-900">
            {description}
          </p>
        </a>
        <div class="ml-3">
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
