'use client';
import React, { useState } from 'react';
import { FileText, Globe, Download, Calendar, Users, ArrowRight, Github } from 'lucide-react';
import Link from 'next/link';

const publications = [{
    title: "AI-Driven Housing Affordability Forecasting in New York City: An NTA-Level Panel Analysis Using Ensemble Machine Learning",
    authors: ["Nakib Uddin Ahmed, Azizur Rahman, Mehjabin Ferdous"],
    year: 2026,
    venue: "Springer Nature — Applied Spatial Analysis and Policy",
    venueShort: "Springer",
    category: "Machine Learning",
    abstract:
        "Developed an explainable AI framework to predict severe housing cost burden across New York City neighborhoods using socio-economic, housing, and rental market data (2012–2022). Evaluated Random Forest, XGBoost, and LightGBM, with LightGBM achieving the best performance (R²: 0.93, RMSE: 0.0337). Applied SHAP explainability to identify key affordability drivers, providing data-driven insights for housing policy and urban planning.",
    
    pdfLink: null,
    status: "Published",
    pdfLink: "/papers/AI-Driven Housing Affordability Forecasting.pdf",
    github: "https://github.com/nakib33/AI-Driven-Housing-Affordability-Forecasting-in-NYC.git",
    keywords: [ "Housing Affordability", "Machine Learning", "SHAP Explainability", "New York City", "Neighborhood Tabulation Area", "LightGBM", "XGBoost", "Random Forest", "Ensemble Learning", "ACS", "Spatial Autocorrelation", "Rent Burden", "Time-Series CV" ],
},

{
    title: "Enhancing Online Recruitment Fraud Detection: A Comparative Analysis of Gradient Boosting and Transformer Architectures Under Severe Class Imbalance",
    authors: ["Nakib Uddin Ahmed, Azizur Rahman"],
    year: 2026,
    venue: "International Journal of Computer Applications",
    venueShort: "IJCA 2024",
    category: "Machine Learning",
    abstract:
        "Developed an AI-based fraudulent job posting detection system using Machine Learning, Deep Learning, and Transformer models on a dataset of 17,883 job advertisements. Applied advanced text preprocessing, Word2Vec embeddings, and SMOTE to address class imbalance. Achieved 99.44% accuracy with XGBoost (F1-score: 0.99), demonstrating the effectiveness of ensemble learning and transformer-based approaches for detecting online recruitment fraud.",
    
    pdfLink: null,
    status: "Published",
    pdfLink: "/papers/Enhancing Online Recruitment Fraud Detection.pdf",
    github: "https://github.com/nakib33/Enhancing-Online-Recruitment-Fraud-Detection.git",
    keywords: ["Online Recruitment Fraud", "NLP", "SMOTE", "XGBoost", "BERT", "Deep Learning"],
},

{
    title: "CV-Mamba: Gated CNN Transfer Learning for Mango Leaf Disease Detection with pHash-Based Deduplication and Leakage-Free Partitioning",
    authors: ["Nakib Uddin Ahmed, Azizur Rahman"],
    year: 2025,
    venue: "Frontiers",
    venueShort: "Frontiers 2025",
    category: "Computer Vision",
    abstract:
        "The problem of mango leaf disease is an urgent task in tropical areas. In this paper, we propose an end-to-end deep learning pipeline for eight-class mango leaf disease classification based on perceptual hash deduplication (pHash, τ=8) and leakage-free stratified partitioning for the first time. Experiments show that 739 similar images (18.48%) were removed from the initial 4,000 images by deduplication, leaving 3,261 unique images. The MambaOut-Small model demonstrated outstanding performance with a test accuracy of 99.59%, and a macro F1-score of 0.9962, outperforming the MambaOut-Base model (99.39%). For edge deployment, the MambaOut-Kobe model, containing 9.1M parameters, achieved a good balance between performance (99.18%) and model size, being more than 5.3x smaller than the largest counterpart.",
    
    pdfLink: null,
    status: "Accepted",
    pdfLink: "/papers/CV_Mamba.pdf",
    github: "https://github.com/nakib33/CV-Mamba-Gated-CNN-Transfer-Learning.git",
    keywords: [ "Mango Leaf Disease", "MambaOut", "Gated CNN", "Transfer Learning", "pHash Deduplication", "Leakage-Free Partitioning", "Plant Disease Detection", "Computer Vision", "Agricultural AI" ],
},


{
    title: "Soft Voting Ensemble Learning and SHAP-Based Interpretability for Maternal and Fetal Health Risk Stratification Across Multiple Clinical Datasets",
    authors: ["Nakib Uddin Ahmed"],
    year: 2026,
    venue: "IEEE Xplore",
    venueShort: "IEEE Xplore 2026",
    category: "Healthcare AI",
    abstract:
        "The problem of mango leaf disease is an urgent task in tropical areas. In this paper, we propose an end-to-end deep learning pipeline for eight-class mango leaf disease classification based on perceptual hash deduplication (pHash, τ=8) and leakage-free stratified partitioning for the first time. Experiments show that 739 similar images (18.48%) were removed from the initial 4,000 images by deduplication, leaving 3,261 unique images. The MambaOut-Small model demonstrated outstanding performance with a test accuracy of 99.59%, and a macro F1-score of 0.9962, outperforming the MambaOut-Base model (99.39%). For edge deployment, the MambaOut-Kobe model, containing 9.1M parameters, achieved a good balance between performance (99.18%) and model size, being more than 5.3x smaller than the largest counterpart.",
    
    pdfLink: null,
    status: "Accepted in Conferenece",
    pdfLink: "/papers/CV_Mamba.pdf",
    github: "https://github.com/nakib33/Maternal-and-Fetal-Health-Risk.git",
    keywords: [ "Maternal Health Risk", "Fetal Health Classification", "Soft Voting Ensemble", "SHAP-Based Interpretability", "Ensemble Learning", "XGBoost", "Random Forest", "Explainable Artificial Intelligence (XAI)", "Cardiotocography (CTG)", "5-Fold Stratified Cross-Validation", "Friedman Test", "Wilcoxon Signed-Rank Test", "High-Risk Pregnancy", "Blood Glucose", "Systolic Blood Pressure", "Abnormal Short-Term Variability" ],
},
    

{
    title: "PolyDetect: A Quality-Aware Hybrid Deep Learning Framework for Robust Polyp Segmentation in Degraded Colonoscopy Images",
    authors: ["Nakib Uddin Ahmed, Azizur Rahman"],
    year: 2026,
    venue: "Science Direct - International Journal of Medical Informatics",
    venueShort: "IJMI 2026",
    category: "Computer Vision",
    abstract:
        "Developed PolyDetect, a quality-aware deep learning framework for real-time colorectal polyp segmentation in colonoscopy images. Integrated image quality assessment (IQA), adaptive image enhancement, and a hybrid Transformer–CNN architecture to improve robustness against image degradation. Achieved a Dice score of 0.8066 and IoU of 0.7262 while running at 53.62 FPS, enabling accurate and clinically applicable real-time polyp detection.",
    
    pdfLink: null,
    status: "Submitted",
    pdfLink: "/papers/PolyDetect_Manuscript V1.pdf",
    github: "https://github.com/nakib33/Robust-Polyp-Segmentation.git",
    keywords:  [ "Polyp segmentation", "Colonoscopy", "Image quality assessment", "Hybrid deep learning", "PVT-v2", "Degradation robustness", "Boundary refinement", "Colorectal cancer", "Explainable AI", "PolyDetect (Proposed Framework)", "DnCNN", "U-Net", "U-Net++", "PraNet", "SANet", "Polyp-PVT", "SSFormer / SSFormer-L", "VMDU-Net", "ResNet-50", "CFFormer", "CFA-Net", "MiT-B3" ],
},


{
    title: "Beyond Binary: Four-Class Risk Stratification from Gastrointestinal Endoscopy Using Asymmetric-Cost Lightweight CNN–Transformer Learnings",
    authors: ["Nakib Uddin Ahmed, Azizur Rahman, Mehjabin Ferdous"],
    year: 2026,
    venue: "Springer - Medical & Biological Engineering & Computing",
    venueShort: "MBEC 2026",
    category: "Healthcare AI",
    abstract:
        "Developed a lightweight CNN–Transformer framework for four-class gastrointestinal lesion risk stratification aligned with ACG and ESGE clinical guidelines. Evaluated DenseNet-121, EfficientNet-B0, and DeiT-Tiny with a novel Asymmetric Endoscopy Loss (AEL) and uncertainty estimation. Achieved Macro F1 of 0.84, zero missed high-risk lesions, and automated 44.9% of low-risk cases, improving clinically reliable AI-assisted endoscopy.",
    
    pdfLink: null,
    status: "Submitted",
    pdfLink: "/papers/Gastrointestinal Endoscopy.pdf",
    github: "https://github.com/nakib33/Gastrointestinal-Endoscopy.git",
    keywords:  ["Gastrointestinal endoscopy", "Risk stratification", "Asymmetric loss function", "Lightweight neural networks", "Vision Transformer", "Monte Carlo Dropout", "HyperKvasir" ],
},


{
    title: "Cross-Domain Transfer Learning for Brain Tumor Classification Under Limited MRI Data Regimes.",
    authors: ["Nakib Uddin Ahmed, Azizur Rahman, Mehjabin Ferdous"],
    year: 2026,
    venue: "Springer - Medical & Biological Engineering & Computing",
    venueShort: "MBEC 2026",
    category: "Healthcare AI",
    abstract:
        "Evaluated transfer learning for four-class brain tumor MRI classification using EfficientNet-B0 across varying training data sizes. Compared ImageNet-pretrained and randomly initialized models on 7,200 MRI images, showing significant gains under extreme data scarcity. Achieved strong classification performance with Grad-CAM++ explainability, providing practical insights for data-efficient AI in medical imaging.",
    
    pdfLink: null,
    status: "Submitted",
    pdfLink: "/papers/Brain_Tumor_Transfer_Learning.pdf",
    github: "https://github.com/nakib33/Cross-Domain-Transfer-Learning-for-Brain-Tumor-Classification.git",
    keywords:  [ "Transfer Learning", "Brain Tumor Classification", "MRI", "EfficientNet", "Low-Data Regime", "Statistical Power", "Explainable AI", "Grad-CAM++" ],
},


];

const categories = ['All', 'Machine Learning', 'Healthcare AI', 'Computer Vision'];

export default function PublicationsPage() {
    const [active, setActive] = useState('All');

    const filtered =
        active === 'All'
            ? publications
            : publications.filter((p) => p.category === active);

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-5xl mx-auto px-3 sm:px-6 py-5 sm:py-10">

                {/* ── Page header ── */}
                <header className="mb-4 sm:mb-8 border-b border-gray-200 pb-3 sm:pb-5">
                    <p className="text-xs font-medium tracking-widest uppercase text-blue-600 mb-3">
                        Academic Contributions
                    </p>
                    <h1 className="text-2xl sm:text-4xl font-light text-gray-900 mb-3">
                        Publications
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-lg max-w-2xl leading-relaxed">
                        Conducting research in Machine Learning, Deep Learning, Explainable AI (XAI), 
                        and AI Systems to develop scalable, data-driven solutions for real-world challenges.
                    </p>
                </header>

                {/* ── Category filter ── */}
                <div className="flex flex-wrap gap-2 mb-5 sm:mb-7">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`px-4 py-1.5 text-sm border transition-colors duration-200 ${
                                active === cat
                                    ? 'border-blue-600 bg-blue-600 text-white'
                                    : 'border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* ── Publications list ── */}
                <div className="space-y-4 sm:space-y-6">
                    {filtered.map((pub, i) => (
                        <article
                            key={i}
                            className="border border-gray-200 p-4 sm:p-6 hover:border-blue-200 hover:shadow-sm transition-all duration-200"
                        >
                            <div className="flex flex-col md:flex-row md:items-start gap-4 sm:gap-6">

                                {/* Main content */}
                                <div className="flex-1">
                                    {/* Badges */}
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        <span className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-100">
                                            {pub.category}
                                        </span>
                                        <span className="text-xs px-2 py-0.5 bg-green-50 text-green-700 border border-green-100">
                                            {pub.status}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-lg font-medium text-gray-900 mb-3 leading-snug">
                                        {pub.title}
                                    </h2>

                                    {/* Meta */}
                                    <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-500 mb-4">
                                        <span className="flex items-center gap-1.5">
                                            <Users className="w-3.5 h-3.5 shrink-0" />
                                            {pub.authors.join(', ')}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5 shrink-0" />
                                            {pub.year}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Globe className="w-3.5 h-3.5 shrink-0" />
                                            {pub.venue}
                                        </span>
                                    </div>

                                    {/* Abstract */}
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {pub.abstract}
                                    </p>

                                    {/* Keywords */}
                                    {pub.keywords && pub.keywords.length > 0 && (
                                        <div className="flex flex-wrap gap-1.5 mt-4">
                                            {pub.keywords.map((kw, ki) => (
                                                <span key={ki} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-500 rounded">
                                                    {kw}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Actions */}
                                <div className="flex md:flex-col gap-3 shrink-0">
                                    {pub.pdfLink && (
                                        <a
                                            href={pub.pdfLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-white border border-blue-200 hover:bg-blue-600 hover:border-blue-600 px-3 py-1.5 transition-colors duration-200"
                                        >
                                            <Download className="w-3.5 h-3.5" />
                                            PDF
                                        </a>
                                    )}
                                    {pub.github && (
                                        <a
                                            href={pub.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-white border border-gray-200 hover:bg-gray-800 hover:border-gray-800 px-3 py-1.5 transition-colors duration-200"
                                        >
                                            <Github className="w-3.5 h-3.5" />
                                            Code
                                        </a>
                                    )}
                                    
                                </div>
                            </div>
                        </article>
                    ))}

                    {filtered.length === 0 && (
                        <div className="text-center py-20 text-gray-400">
                            <FileText className="w-10 h-10 mx-auto mb-3 opacity-40" />
                            <p className="text-sm">No publications in this category yet.</p>
                        </div>
                    )}
                </div>

                {/* ── Collaborate CTA ── */}
                <div className="mt-8 sm:mt-12 bg-slate-50 border border-gray-200 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">
                            Interested in Research Collaboration?
                        </h3>
                        <p className="text-sm text-gray-600">
                            I&apos;m open to joint research, co-authorship, and academic partnerships.
                        </p>
                    </div>
                    <Link
                        href="/pages/contact"
                        className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-200 shrink-0"
                    >
                        Get In Touch <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
