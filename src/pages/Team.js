import React, { useEffect, useState } from "react";
import MemberCard from "../components/MemberCard";

const TEAM_API_BASE = (process.env.REACT_APP_TEAM_API_BASE || "").replace(
  /\/$/,
  "",
);
const TEAM_API_URL = TEAM_API_BASE ? `${TEAM_API_BASE}/api/team` : "/api/team";

const emptyRoster = {
  heads: [],
  associateHeads: [],
  seniorCoordinators: [],
  juniorCoordinators: [],
};

const Team = () => {
  const [teamData, setTeamData] = useState(emptyRoster);
  const [status, setStatus] = useState({ loading: true, error: null });

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchTeam = async () => {
      try {
        const response = await fetch(TEAM_API_URL, {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`Failed to fetch team data: ${response.status}`);
        }

        const payload = await response.json();
        if (!isMounted) {
          return;
        }

        setTeamData({
          heads: payload.heads || [],
          associateHeads: payload.associateHeads || [],
          seniorCoordinators: payload.seniorCoordinators || [],
          juniorCoordinators: payload.juniorCoordinators || [],
        });
        setStatus({ loading: false, error: null });
      } catch (error) {
        if (!isMounted || error.name === "AbortError") {
          return;
        }
        console.error("[Team] unable to load roster", error);
        setStatus({
          loading: false,
          error: "Unable to load the team roster right now. Please refresh.",
        });
      }
    };

    fetchTeam();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const { heads, associateHeads, seniorCoordinators, juniorCoordinators } =
    teamData;
  const allMembers = [
    ...heads,
    ...associateHeads,
    ...seniorCoordinators,
    ...juniorCoordinators,
  ];

  return (
    <div className="min-h-screen relative overflow-hidden py-8">
      {/* Global grain overlay */}
      <div className="absolute inset-0 bg-grain opacity-[0.08] pointer-events-none z-0"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Our Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the Team Anonymous, the ones behind the trivia and fun!
          </p>
        </div>

        {status.error && (
          <div className="mb-10 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-100">
            {status.error}
          </div>
        )}

        <div className="border-t border-white/10 my-6"></div>

        {status.loading && (
          <div className="mb-10 text-center text-gray-400">
            Loading team roster...
          </div>
        )}

        {/* Team Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-accent-yellow mb-2">
              {heads.length}
            </div>
            <div className="text-gray-300">Heads</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-rose-300 mb-2">
              {associateHeads.length}
            </div>
            <div className="text-gray-300">Associate Heads</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-accent-blue mb-2">
              {seniorCoordinators.length}
            </div>
            <div className="text-gray-300">Senior Coordinators</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-accent-green mb-2">
              {juniorCoordinators.length}
            </div>
            <div className="text-gray-300">Junior Coordinators</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {allMembers.length}
            </div>
            <div className="text-gray-300">Total Members</div>
          </div>
        </div>

        {/* Heads Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Heads</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {heads.map((member) => (
              <MemberCard key={member.id} member={member} role="head" />
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 my-6"></div>

        {/* Associate Heads Section */}
        {associateHeads.length > 0 && (
          <>
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Associate Heads
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {associateHeads.map((member) => (
                  <MemberCard
                    key={member.id}
                    member={member}
                    role="associate"
                  />
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 my-6"></div>
          </>
        )}

        {/* Senior Coordinators Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Senior Coordinators
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seniorCoordinators.map((member) => (
              <MemberCard key={member.id} member={member} role="senior" />
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 my-6"></div>

        {/* Junior Coordinators Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Junior Coordinators
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {juniorCoordinators.map((member) => (
              <MemberCard key={member.id} member={member} role="junior" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
