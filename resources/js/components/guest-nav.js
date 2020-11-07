import React from 'react';
import { Link } from 'react-router-dom';

function GuestNav () {
  return (
    <div className="w-full px-6 mx-auto flex items-center justify-between">
      <ul className="list-reset flex pt-4">
        <li className="px-2">
          <Link to=""
            className="no-underline text-gray-700 uppercase font-thin">
              Created Rustam A. Kakhramanov
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default GuestNav;
