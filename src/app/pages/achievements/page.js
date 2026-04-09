'use client';
import React, { useState } from 'react';
import SkillCertificate from "./skillCertificate";
import ExtraCurricular from "./ExtraCurricular";
import KeyAchievements from "./CoreActivuty"; 


const AchievementsPage = () => {

    return (
        <div className="min-h-screen">
            {/* Achievements Section */}
            <section className="max-w-5xl mx-auto px-6 py-12">
                <KeyAchievements />
            </section>

            {/* Certificates Section */}
            <section className="max-w-5xl mx-auto px-6 pb-12">
                <SkillCertificate />
            </section>

            {/* Certificates Section */}
            <section className="max-w-5xl mx-auto px-6 pb-12">
                <ExtraCurricular />
            </section>
        </div>
    );
};

export default AchievementsPage;