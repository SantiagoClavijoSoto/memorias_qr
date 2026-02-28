import React from "react";
import { profileTypes } from "../data";

const ProfileTypesSection: React.FC = () => (
  <section id="tipos-perfil" className="py-14 md:py-20">
    <div className="container mx-auto px-4 space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground reveal">
          Un perfil para cada historia
        </h2>
        <p className="text-muted-foreground text-lg reveal delay-1">
          Contamos con 7 tipos de perfil diseñados para honrar la memoria de cualquier ser querido.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {profileTypes.map((profile, idx) => (
          <div
            key={profile.name}
            className="group relative rounded-2xl border border-border/70 bg-card/90 backdrop-blur p-5 md:p-6 text-center space-y-3 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal"
            style={{ transitionDelay: `${idx * 0.05}s` }}
          >
            <div
              className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-[#eef4fb] shadow-inner ${profile.color}`}
            >
              {profile.icon}
            </div>
            <h3 className="text-lg font-semibold text-foreground">{profile.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{profile.description}</p>
            {profile.name === "Militar" && (
              <p className="text-xs text-primary/80 font-medium">
                Policía · Ejército · Armada · Fuerza Aérea · Tránsito
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProfileTypesSection;
