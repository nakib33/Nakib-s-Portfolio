'use client';
import React, { useState } from 'react';
import { FileText, Globe, Download, Calendar, Users, ArrowRight, Github } from 'lucide-react';
import Link from 'next/link';

const publications = [{
    title: "Enhancing Online Recruitment Fraud Detection: A Comparative Analysis of Gradient Boosting and Transformer Architectures Under Severe Class Imbalance",
    authors: ["Nakib Uddin Ahmed"],
    year: 2024,
    venue: "International Journal of Computer Applications",
    venueShort: "IJCA 2024",
    category: "Machine Learning",
    abstract:
        "Through the exponential rise in online recruitment services, the job hunting process has been simplified to a great extent, but has also created a breed of online job ads that are extremely dangerous to job seekers in terms of data security and finances. It is computationally hard to differentiate legitimate and illegitimate postings because of the advanced linguistic structure of fake advertisements and because the real-world data is severely class imbalanced. This research paper presents a comparative and indepth analysis of Machine Learning (ML), Deep Learning (DL), and Transformer-based architectures in detecting fraudulent job postings automatically. A dataset of 17,883 records was utilized, and robust text preprocessing techniques were applied, such as semantic representation using Word2Vec embeddings. The Synthetic Minority Over-Sampling Technique (SMOTE) was applied to address the significant imbalance between authentic (17,014) and invalid (866) samples. A broad range of classifiers was evaluated, including Random Forest (RF), Support Vector Machine (SVM), K-Nearest Neighbors (KNN), Decision Tree (DT), XGBoost (XGB), and Logistic Regression (LR), along with Deep Learning models (ANN, LSTM) and state-of-the-art Transformers (BERT, RoBERTa). Experimental outcomes showed that ensemble learning and Transformer-based models are highly effective compared to traditional linear classifiers. In particular, XGBoost delivered the best results with 99.44% accuracy and an F1-score of 0.99, followed closely by Random Forest (99.37%) and RoBERTa (98.81%). SVM, on the other hand, demonstrated a low level of efficacy with an accuracy of 50.44 per cent. The results indicate that the combination of SMOTE with gradient-boosting algorithms or pre-trained Transformers offers a highly promising framework for protecting the online recruitment ecosystem against fraud cases.",
    pdfLink: null,
    status: "Published",
    pdfLink: "/papers/Enhancing Online Recruitment Fraud Detection.pdf",
    github: "https://github.com/nakib33/Enhancing-Online-Recruitment-Fraud-Detection.git",
    keywords: ["Online Recruitment Fraud", "NLP", "SMOTE", "XGBoost", "BERT", "Deep Learning"],
},
{
    title: "Predicting Housing Affordability in New York City: A Neighborhood-Level Machine Learning Analysis Across 239 NTAs (2012–2022)",
    authors: ["Nakib Uddin Ahmed"],
    year: 2025,
    venue: "Springer Nature",
    venueShort: "ASAP 2025",
    category: "Machine Learning",
    abstract:
        "Housing affordability is one of the signature governance challenges in New York City (NYC), with more than 52% of renter households cost-burdened and just under a third identified as severely cost-burdened, paying above 50% of gross income on housing. Here, we propose a neighborhood-scale, explain-machinelearning-based framework to predict the affordability of housing at the NTA level with 2,512 observations over time scaled to the Neighborhood Tabulation Area (NTA), comprising 239 NTAs from 2012–2022. We integrate 49 socio-economic, housing market, and rent indices features from ACS 5-year estimates, eviction records, and the Zillow Observed Rent Index (ZORI). Three gradient-boosted ensemble models—Random Forest, XGBoost, and LightGBM—are benchmarked under a strict temporal train/validation/test split with 5-fold TimeSeriesSplit cross-validation to prevent data leakage. LightGBM achieved the highest predictive performance (Test R²=0.9258, RMSE=0.03477, MAE=0.0192). SHAP TreeExplainer analysis identifies rent burden, vacancy rate, and rent-to-income ratio as dominant drivers, confirming that NYC’s rent escalation follows a systemic “burden escalator” across boroughs. Spatial diagnostics (Moran’s I) show no significant autocorrelation in residuals, and ablation analysis confirms rental market variables drive the largest incremental contribution. Based on forecasts, we propose a 14-instrument policy matrix including early-warning interventions, borough-differentiated zoning and voucher strategies, and anticipatory resource allocation. This framework demonstrates how explainable AI can operationalize predictive insights into actionable urban governance strategies, offering a replicable model for global cities facing housing crises.",
    pdfLink: null,
    status: "Pending",
    pdfLink: "/papers/IEEE_Housing_Paper_Full.pdf",
    github: "https://github.com/ayanchyaziz123/AI-Driven-Housing-Affordability-Forecasting-in-New-York-City",
    keywords: ["Housing Affordability", "XGBoost", "SHAP", "New York City", "NTA", "ACS", "Ensemble Learning", "Spatial Autocorrelation", "Rent Burden", "Time-Series CV"],
},
{
    title: "Precision Maternal Health: Robust High-Risk Pregnancy Prediction via Ensemble Learning and Explainable AI",
    authors: ["Nakib Uddin Ahmed"],
    year: 2025,
    venue: "Springer",
    venueShort: "Springer 2025",
    category: "Healthcare AI",
    abstract:
        " Purpose: High-risk pregnancies are one significant cause of maternal and fetal mortality in the world. Although diagnosis at the earliest stage is important, standard risk assessment methods usually depend on the subjective clinical evaluation. It is the purpose of this research to develop a high quality, data-driven machine learning (ML) model to make predictions of high-risk pregnancies. Methods: We used the Maternal Health and High-Risk Pregnancy dataset to implement strict preprocessing strategies (imputation, label encoding, and standardization). We considered five foundational ML algorithms, which are Random Forest, Support Vector Machine (SVM), K-Nearest Neighbors (KNN), Xtreme Gradient Boosting (XGBoost), and Decision Tree (DT). To optimize the predictive stability, a Soft Voting Ensemble consisting of SVM, KNN, DT, and XGBoost were created. All of the models were tested with Stratified 5-Fold Cross-Validation. SHapley additive explanations (SHAP) were applied to understand feature importance and solve the black box issue of the conventional ML. Results: The proposed Soft Voting Ensemble was found to have a greater stability with a maximum standard deviation of 98.80 percent and lowest standard deviation (0.32 percent) on the mean accuracy over all the classifiers tested. The SHAP analysis revealed Preexisting Diabetes, Body Mass Index (BMI), and Blood Glucose levels as the main physiological predictors that gave birth to the high-risk categories. Conclusion: This framework balances between good predictive and clinical interpretability. It will be a trusted non-invasive decision-support tool by aligning predictions with known medical knowledge through XAI to instill confidence among obstetricians in clinical practice in practice.",
    pdfLink: null,
    status: "Pending",
    keywords: ["Maternal Health", "High-Risk Pregnancy", "Ensemble Learning", "Explainable AI", "SHAP", "Healthcare ML", "Precision Medicine"],
    pdfLink: "/papers/HISC-S-26-00819.pdf",
},
{
    title: "GeoSHAP: An Explainable AI Framework for Multi-Topic Chronic Disease Burden Prediction Across U.S. Geographic and Demographic Strata",
    authors: ["Nakib Uddin Ahmed"],
    year: 2025,
    venue: "Springer/IEEE",
    venueShort: "2025",
    category: "Healthcare AI",
    abstract:
        "Chronic non-communicable diseases impose a staggering societal burden on the United States, accounting for approximately 90% of the nation's $4.1 trillion annual healthcare expenditure and representing the leading cause of preventable death among adults. Despite decades of surveillance investment, a critical methodological gap persists: existing analytical frameworks cannot simultaneously predict multi-topic chronic disease burden at geographic resolution, attribute predictions to modifiable risk factors, and translate those attributions into policy-actionable allocation maps. This paper introduces GeoSHAP, a novel Explainable AI (XAI) framework that closes this gap through three integrated innovations. First, we construct the Chronic Disease Burden Score (CDBS), a domain-weighted composite index spanning seven CDC disease categories (cardiovascular disease, diabetes, cancer, COPD, asthma, arthritis, and kidney disease), derived from Global Burden of Disease years-of-life-lost weights. Second, we benchmark eight machine-learning regression models across four algorithmic families (linear, neural network, bagging, and gradient boosting) on the CDC U.S. Chronic Disease Indicators dataset (309,215 records, 2010–2022), applying family-appropriate SHAP explainers (TreeExplainer, LinearExplainer, KernelExplainer) to each model. Third, GeoSHAP aggregates mean absolute SHAP values at U.S. state resolution, producing interpretable geographic attribution maps and temporal stability metrics. LightGBM achieves the best predictive performance (test R² = 0.924, RMSE = 3.89, 5-fold CV R² = 0.921 ± 0.012). SHAP analysis identifies socioeconomic deprivation, smoking prevalence, and obesity rate as the three dominant disease burden drivers, collectively explaining 54.2% of mean absolute SHAP contribution. GeoSHAP temporal stability analysis yields Spearman ρ = 0.893 and cosine similarity = 0.914 year-over-year, validating attribution reliability. The AI-driven Spatial Health Allocation Framework (AI-SHAF) converts GeoSHAP outputs into three-tier priority maps, identifying 13 states requiring urgent federal chronic disease intervention. The fully reproducible pipeline is released publicly to accelerate evidence-based, equitable health policy in the United States.",
    pdfLink: null,
    status: "Working",
    keywords: ["Maternal Health", "High-Risk Pregnancy", "Ensemble Learning", "Explainable AI", "SHAP", "Healthcare ML", "Precision Medicine"],
    pdfLink: "/papers/GeoSHAP_IEEE_Journal_Paper_Final.pdf",
},
{
    title: "ClimateXAI: An Explainable Machine Learning Framework for Census-Tract-Level Climate Displacement Risk Prediction Across U.S. Cities",
    authors: ["Nakib Uddin Ahmed"],
    year: 2025,
    venue: "Springer/IEEE",
    venueShort: "2025",
    category: "Geography",
    abstract:
        "Climate-induced displacement is accelerating across the United States, yet existing predictive frameworks operate at coarse county-level resolution, exclude socioeconomic mediators, and lack the interpretability required for equity-sensitive policy action. This paper presents ClimateXAI, a SHAP-driven stacked ensemble machine learning framework that predicts climate displacement risk at the census-tract level across 74,000 U.S. tracts spanning all 50 states. The proposed framework integrates 37 features from five open-access federal datasets covering physical hazard exposure, socioeconomic vulnerability, racial composition, social vulnerability indices, migration flows, and disaster exposure. A Climate Displacement Pressure Score is constructed per tract to capture both realized displacement and latent hazard pressure. Five compound interaction features operationalize the multiplicative compound vulnerability hypothesis. A stacked ensemble of Gradient Boosting, Random Forest, and Elastic Net regressors, meta-learned by Ridge Regression, achieves R² = 0.9856, RMSE = 0.1343, and MAE = 0.1004 on the held-out test set, surpassing the prior county-level benchmark of R² = 0.71 by 27.56 percentage points. Five-fold spatial cross-validation confirms stable generalizability across all geographic regions (R² = 0.9820 ± 0.0032). SHAP TreeExplainer analysis identifies expected annual loss and per-capita outflow as the two dominant predictors, jointly accounting for 98.7% of model attribution. Spatial autocorrelation diagnostics confirm significant geographic clustering of displacement pressure. Equity-stratified analysis uncovers the Inverted Equity Paradox, identifies 2,925 immobility trap tracts requiring in-place resilience investment, and documents the Western Climate Displacement Paradox wherein drought and wildfire hazards produce near-zero realized displacement signal. ClimateXAI delivers the first census-tract-level, equity-sensitive, fully interpretable U.S. climate displacement intelligence tool.",
    pdfLink: null,
    status: "Working",
    keywords: ["climate displacement prediction", "explainable artificial intelligence", "SHAP", "Census-tract machine learning", "spatial autocorrelation", "compound vulnerability", "stacked ensemble learning", "immobility traps"],
    pdfLink: "/papers/geography.pdf",
},
{
    title: "Food Desert Exposure and Chronic Disease Burden Across U.S. Counties: An Explainable Machine Learning Framework Using USDA and BRFSS Data",
    authors: ["Nakib Uddin Ahmed"],
    year: 2025,
    venue: "Springer/IEEE",
    venueShort: "2025",
    category: "Healthcare AI",
    abstract:
        "Food insecurity and limited access to nutritious food are among the most consequential yet understudied drivers of chronic disease in the United States. More than 19 million Americans reside in food deserts — areas where physical and economic barriers severely limit access to affordable, healthy food. Decades of epidemiological research have established associations between food desert exposure and elevated rates of diabetes, obesity, hypertension, and cardiovascular disease. Yet no existing study has translated these associations into a unified, explainable machine learning framework capable of county-level prediction, policy prioritization, and equity auditing. This proposal presents FoodEquity-ML, an ensemble machine learning framework that integrates USDA Food Access Research Atlas data with CDC Behavioral Risk Factor Surveillance System (BRFSS) chronic disease outcomes to predict county-level chronic disease burden from food desert exposure indicators. The framework introduces a novel Chronic Disease Burden Index (CDBI) as a composite multi-disease outcome, applies SHAP-based explainability to identify the most impactful food access features driving disease burden, and conducts systematic equity auditing across racial, income, and geographic strata. FoodEquity-ML is specifically designed to produce policy-actionable outputs: a 12-instrument intervention matrix mapped to SHAP-ranked drivers, enabling federal and state policymakers to prioritize food access investments where they will yield the greatest health equity gains. The entire framework is built on publicly available datasets, uses a proven ensemble pipeline, and targets IEEE Transactions on Computational Social Systems (TCSS) — a Q1 journal with zero APC.",
    pdfLink: null,
    status: "Working",
    keywords: ["Added soon"],
    pdfLink: "/papers/geography.pdf",
},
{
    title: "Exoplanet Classification Using Machine Learning: A Comparative Study of Random Forest, XGBoost, and Neural Networks",
    authors: ["Nakib Uddin Ahmed, Azizur Rahman"],
    year: 2025,
    venue: "NASA Exoplanet Archive Research",
    venueShort: "NASA 2025",
    category: "AI & Astronomy",
    abstract:
        "This study presents a machine learning pipeline for classifying exoplanets by their detection method using orbital and physical characteristics from the NASA Exoplanet Archive (38,090 records, 100 features). Key features include orbital period, planetary mass, equilibrium temperature, and insolation flux. After KNN imputation and feature standardization, three models were evaluated: Random Forest, XGBoost, and a Keras/TensorFlow Neural Network. XGBoost achieved the highest accuracy of ~95.3% across 11 discovery-method categories. SHAP analysis was applied for feature importance interpretation.",
    pdfLink: null,
    status: "Working",
    keywords: ["Exoplanet", "NASA Exoplanet Archive", "XGBoost", "Random Forest", "Neural Networks", "SHAP", "Astronomy"],
    github: "https://github.com/ayanchyaziz123/Exoplanet_Classification",
},
    
];

const categories = ['All', 'Machine Learning', 'Healthcare AI', 'Geography', 'AI & Astronomy'];

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
                        Research at the intersection of machine learning, AI systems,
                        and applied sciences — from astronomy to healthcare diagnostics.
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
