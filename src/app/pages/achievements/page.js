'use client';
import React, { useState } from 'react';
import SkillCertificate from "./skillCertificate";
import ExtraCurricular from "./ExtraCurricular";
import KeyAchievements from "./CoreActivuty"; 


const AchievementsPage = () => {

    return (
        <div className="min-h-screen">
            <section className="max-w-5xl mx-auto px-6">
                <KeyAchievements />
            </section>
            <section className="max-w-5xl mx-auto px-6">
                <SkillCertificate />
            </section>
            <section className="max-w-5xl mx-auto px-6">
                <ExtraCurricular />
            </section>
        </div>
    );
};

export default AchievementsPage;