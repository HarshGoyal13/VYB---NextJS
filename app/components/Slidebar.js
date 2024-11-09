import { useState } from 'react';
import { FaUser, FaMapMarkerAlt, FaPhone, FaSignOutAlt } from 'react-icons/fa';
import Image from 'next/image';

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className={`fixed rounded-xl inset-0 z-50 transition-transform transform ${open ? 'translate-x-0' : '-translate-x-full'} w-[180px] height-[200px] bg-[#181818] text-white`} >
      {/* Close Button */}
      <div className="flex justify-end p-3">
        <button
          className="text-gray-400 hover:text-white"
          onClick={() => setOpen(false)}
        >
          &#x2716; {/* X (close) icon */}
        </button>
      </div>

      {/* User Profile */}
      <div className="flex flex-col items-center p-3">
        <Image
          className="w-16 h-16 rounded-full object-cover mb-3"
          src="/images/ladki.png"
          alt="Profile"
        />
        <button className="text-green-500 text-xs mb-1">Change Profile Picture</button>
        <h2 className="text-lg font-bold">Samira Hadid</h2>
        <p className="text-xs text-gray-400">@samirahadid</p>
      </div>

      {/* Links */}
      <div className="mt-6 space-y-4 text-grey">
        <a href="#" className="flex items-center space-x-2 px-4 py-1  text-sm">
          <FaUser />
          <span>Profile</span>
        </a>
        <a href="#" className="flex items-center space-x-2 px-4 py-1  text-sm">
          <FaMapMarkerAlt />
          <span>Address</span>
        </a>
        <a href="#" className="flex items-center space-x-2 px-4 py-1 text-sm">
          <FaPhone />
          <span>Contact Us</span>
        </a>
        <a href="#" className="flex items-center space-x-2 px-4 py-1  text-sm">
          <span>About Us</span>
        </a>
      </div>

      {/* Logout */}
      <div className="mt-auto px-4 py-3">
        <a href="#" className="flex items-center space-x-2 text-white  text-xl">
          <FaSignOutAlt />
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
