import React from "react";

const teamDetails = [
  {
    name: "Mrityunjay Jha",
    role: "Graphic Designer",
  },
  {
    name: "Prisha Rawat",
    role: "Backend Developer",
  },
  {
    name: "Vansh Anant Gupta",
    role: "Frontend Developer",
  },
];

function Team() {
  return (
    <div className="w-full flex flex-col items-center pb-48">
      <h1 className="text-5xl text-white font-bold mb-4 mt-12 border-b border-solid border-zinc-400 pb-4">
        Meet Our Team
      </h1>

      <div className="w-[80%] flex justify-center items-center gap-4">
        {teamDetails.map((items, index) => (
          <div
            key={index}
            className="w-[33%] h-[20rem] border border-solid border-zinc-400 rounded-xl"
          >
            <h2 className="text-lg text-left text-white font-bold mb-2 py-2 px-4">
              {items.name}
            </h2>
            <hr className="w-full" />
            <p className="text-white text-lg text-left py-2 px-4">
              {items.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
