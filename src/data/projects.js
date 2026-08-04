export const projects = [
{
  slug: 'spam-email-classifier',
  title: 'SpamGuard — Spam Email Classification',
  date: 'July 2026',
  content: `
    <p>A binary spam/ham classifier built on the SMS Spam Collection dataset using TF-IDF features and Logistic Regression, served through a FastAPI web application with comprehensive text preprocessing, hyperparameter tuning via GridSearchCV, and interactive web UI.</p>

    <h3>Artifact Description</h3>
    <h4>Objective</h4>
    <p>To build a production-ready spam email classifier that accurately distinguishes spam from ham (legitimate) messages using TF-IDF vectorization and Logistic Regression. The system includes a complete text preprocessing pipeline (lemmatization, stopword removal, URL/digit stripping), hyperparameter tuning with GridSearchCV and StratifiedKFold, and is deployed as a FastAPI web app with both a web UI and REST API endpoints.</p>

    <h4>Process</h4>
    <p>The project was developed in Python using scikit-learn and FastAPI. The SMS Spam Collection dataset (5,572 messages) was preprocessed using a shared clean_text() pipeline: lowercasing, URL/digit/punctuation removal, tokenization, stopword removal, lemmatization with WordNetLemmatizer, and token re-joining. Features were extracted using both CountVectorizer and TfidfVectorizer. Baseline models (Logistic Regression and Multinomial Naive Bayes) were trained and evaluated, followed by hyperparameter tuning via GridSearchCV with StratifiedKFold cross-validation. Extensive EDA visualizations were auto-generated covering class distribution, message length analysis, bag-of-words correlation, confusion matrices, ROC curves, and metrics summaries. The final model bundle (vectorizer + model + metadata) is saved as a joblib file and loaded by the FastAPI app at startup. The web UI displays model metadata and provides an intuitive interface for real-time spam classification.</p>

    <h4>Tools and Technologies Used</h4>
    <ul>
      <li>Language: Python</li>
      <li>Web Framework: FastAPI, Uvicorn</li>
      <li>ML Libraries: Scikit-Learn (Logistic Regression, MultinomialNB, GridSearchCV, TF-IDF, CountVectorizer)</li>
      <li>NLP: NLTK (word_tokenize, WordNetLemmatizer, stopwords)</li>
      <li>Data Processing: Pandas, NumPy, joblib</li>
      <li>Visualization: Matplotlib, Seaborn</li>
      <li>Data: SMS Spam Collection dataset (5,572 messages)</li>
      <li>Version control: GitHub</li>
    </ul>

    <h4>Text Preprocessing Pipeline</h4>
    <ul>
      <li>Lowercase conversion</li>
      <li>URL removal</li>
      <li>Digit removal</li>
      <li>Punctuation removal</li>
      <li>Tokenization via NLTK word_tokenize</li>
      <li>Stopword and single-character token removal</li>
      <li>Lemmatization (verb POS via WordNetLemmatizer)</li>
      <li>Token re-joining</li>
    </ul>

    <h4>API Endpoints</h4>
    <ul>
      <li>GET / — Web UI with model metadata</li>
      <li>GET /health — Health check and model status</li>
      <li>POST /predict — Classify a message as spam or ham</li>
      <li>GET /examples — Sample spam and ham messages</li>
      <li>GET /metrics — Model performance metrics and preprocessing details</li>
    </ul>

    <h4>Artifact-Specific Value Proposition</h4>
    <h5>Unique Value</h5>
    <p>This artifact demonstrates a complete, production-ready NLP classification pipeline — from raw text preprocessing through hyperparameter-tuned model training to a deployed FastAPI web app. The shared preprocessing module used by both the training notebook and the API ensures consistency, while the comprehensive EDA visualizations provide deep insight into the dataset and model behavior.</p>

    <h5>Relevance</h5>
    <p>This artifact is directly relevant to roles in NLP engineering, data science, and ML engineering. It demonstrates end-to-end text classification skills, proper preprocessing for noisy text data, hyperparameter tuning with cross-validation, and deployment of ML models as production APIs with interactive web interfaces.</p>

    <h4>Customization for Audience</h4>
    <h5>Adaptations Made</h5>
    <p>The project was designed for two audiences: data scientists can run the Jupyter Notebook with detailed EDA, model comparison, and hyperparameter tuning; end users can use the web UI or API for instant spam classification without any technical knowledge.</p>

    <h5>Relevance</h5>
    <p>For ML practitioners, the notebook provides full reproducibility with documented preprocessing, model evaluation, and tuning. For end users, the web interface offers an intuitive way to classify messages with detailed probability breakdowns and cleaned text previews.</p>

    <h4>Reflection</h4>
    <h5>Significance</h5>
    <p>I chose this project because spam classification is a classic NLP problem with real-world utility, and it demonstrates the importance of proper text preprocessing and hyperparameter tuning in achieving production-quality results.</p>

    <h5>Lessons Learned</h5>
    <p>Key challenges solved: (1) Handling the Latin-1 encoded CSV with overflow columns merged back into messages. (2) Building a shared preprocessing pipeline used by both training and inference. (3) Hyperparameter tuning with GridSearchCV and StratifiedKFold for robust evaluation. (4) Saving and loading a complete model bundle (vectorizer + model + metadata) with joblib. (5) Loading NLTK data (tokenizers, lemmatizers, stopwords) at app startup for seamless inference.</p>

    <h4>Feedback and Revisions</h4>
    <h5>Feedback</h5>
    <p>Feedback focused on adding more advanced models (LSTM, transformers), handling class imbalance with SMOTE, and expanding to multi-language spam detection.</p>

    <h5>Revisions</h5>
    <p>I added hyperparameter tuning with GridSearchCV for both Logistic Regression and Multinomial Naive Bayes, implemented comprehensive EDA with auto-generated visualizations, built a shared preprocessing module for consistency, and deployed the full pipeline as a FastAPI web app with a polished UI.</p>

    <h4>References</h4>
    <ul>
      <li><a href="https://scikit-learn.org/stable/user_guide.html" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Scikit-Learn Documentation</a></li>
      <li><a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">FastAPI Documentation</a></li>
      <li><a href="https://www.nltk.org/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">NLTK Documentation</a></li>
      <li><a href="https://www.kaggle.com/datasets/uciml/sms-spam-collection-dataset" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Kaggle: SMS Spam Collection Dataset</a></li>
    </ul>
  `,
  image: '/image/email.png',
  description: 'A spam/ham classifier using TF-IDF and Logistic Regression on the SMS Spam Collection dataset — with comprehensive preprocessing, GridSearchCV tuning, and a FastAPI web app with interactive UI.',
  technologies: ['Text Classification', 'Scikit-Learn', 'FastAPI', 'NLTK', 'Pandas'],
  link: '/pages/artifacts/spam-email-classifier',
  github: 'https://github.com/nakib33/spam-email-classifier'
},
{
  slug: 'breast-cancer-classifier',
  title: 'Breast Cancer AI Classifier — Advanced FNA Analysis',
  date: 'July 2026',
  content: `
    <p>A modern, dynamic, explainable breast tumor classification system from Fine Needle Aspirate (FNA) imaging measurements. Built with the Wisconsin Breast Cancer Diagnostic dataset and optimized for 98%+ malignant recall to minimize false negatives. Features Kaggle auto-download, dynamic premium UI, batch prediction, explainable AI, and comprehensive analytics with 7 endpoints.</p>

    <h3>Artifact Description</h3>
    <h4>Objective</h4>
    <p>To build a production-ready breast cancer classification system that analyzes 30 FNA-derived features to classify tumors as benign or malignant — with a strong emphasis on high malignant recall (≥98%) to minimize dangerous false negatives. The system compares 5 ML models (Logistic Regression, SVM, Random Forest, XGBoost, Gradient Boosting) with threshold tuning, provides SHAP-like explainability, and serves results through a dark glassmorphism UI with interactive charts.</p>

    <h4>Process</h4>
    <p>The project was developed in Python using scikit-learn for the ML pipeline and FastAPI for the web backend. Data is downloaded directly from Kaggle via kagglehub with automatic fallback to sklearn's built-in dataset — no manual steps required. Five models are trained with stratified 80/20 split, with advanced threshold tuning to achieve ≥98% malignant recall (e.g., Random Forest at threshold 0.65 achieves 0.983 recall, 0.956 accuracy). The pipeline generates extensive visualizations: ROC curves, confusion matrices, threshold analysis, model comparison bar charts, and feature importance plots. The premium UI features dark glassmorphism design, animated gradient orbs, tabbed input (Mean/SE/Worst/All 30), quick-fill sample buttons, real-time gauges, and 7+ interactive Chart.js visualizations. Batch prediction supports CSV upload with automatic column mapping.</p>

    <h4>Tools and Technologies Used</h4>
    <ul>
      <li>Language: Python</li>
      <li>Web Framework: FastAPI, Uvicorn</li>
      <li>ML Libraries: Scikit-Learn (Logistic Regression, SVM, Random Forest), XGBoost, Gradient Boosting</li>
      <li>Data Source: Kaggle (kagglehub) with sklearn fallback</li>
      <li>Frontend: HTML, CSS (glassmorphism), JavaScript, Chart.js</li>
      <li>Data Processing: Pandas, NumPy, joblib</li>
      <li>Explainability: Feature contribution analysis, benign/malignant average comparisons</li>
      <li>Version control: GitHub</li>
    </ul>

    <h4>Feature Set — 30 FNA Measurements</h4>
    <p>10 base measurements × 3 statistics (Mean, Standard Error, Worst):</p>
    <ul>
      <li><strong>Radius:</strong> distance from center to perimeter</li>
      <li><strong>Texture:</strong> standard deviation of gray-scale values</li>
      <li><strong>Perimeter:</strong> total perimeter of nuclei</li>
      <li><strong>Area:</strong> total area of nuclei</li>
      <li><strong>Smoothness:</strong> local variation in radius lengths</li>
      <li><strong>Compactness:</strong> perimeter²/area − 1</li>
      <li><strong>Concavity:</strong> severity of concave portions of contour</li>
      <li><strong>Concave Points:</strong> number of concave portions of contour</li>
      <li><strong>Symmetry:</strong> nuclei symmetry measure</li>
      <li><strong>Fractal Dimension:</strong> coastline approximation − 1</li>
    </ul>

    <h4>Model Performance (typical results)</h4>
    <ul>
      <li><strong>Logistic Regression:</strong> ~96% accuracy, ~96% malignant recall, ~0.99 AUC</li>
      <li><strong>SVM:</strong> ~97% accuracy, ~97% malignant recall, ~0.99 AUC</li>
      <li><strong>Random Forest (selected):</strong> ~96% accuracy → <strong>98%+ malignant recall after threshold tuning</strong></li>
      <li><strong>XGBoost:</strong> ~97% accuracy, ~96% malignant recall, ~0.99 AUC</li>
      <li><strong>Gradient Boosting:</strong> ~96% accuracy, ~96% malignant recall, ~0.99 AUC</li>
    </ul>

    <h4>API Endpoints</h4>
    <ul>
      <li>GET / — Dynamic premium UI</li>
      <li>GET /health — Model loaded status, threshold</li>
      <li>GET /model-info — Accuracy, malignant recall, AUC, feature importance</li>
      <li>GET /features — 30 feature details with benign/malignant averages</li>
      <li>GET /stats — Dataset statistics (569 samples, class balance)</li>
      <li>POST /predict — Single FNA sample → prediction + explainability</li>
      <li>POST /predict/batch — CSV upload → batch predictions with summary</li>
    </ul>

    <h4>Artifact-Specific Value Proposition</h4>
    <h5>Unique Value</h5>
    <p>This artifact demonstrates expertise in medical ML classification with a focus on clinical safety — optimizing for high recall rather than just accuracy. It showcases the full pipeline from automated data acquisition, through 5-model comparison with threshold tuning, to a polished premium UI with explainability features that make model decisions transparent and interpretable.</p>

    <h5>Relevance</h5>
    <p>This artifact is directly relevant to roles in healthcare AI, ML engineering, and data science. It demonstrates proficiency in medical dataset preprocessing, model selection with clinical constraints, threshold optimization for safety-critical applications, and building explainable AI systems that domain experts can trust and interpret.</p>

    <h4>Customization for Audience</h4>
    <h5>Adaptations Made</h5>
    <p>The project was designed for two audiences: ML engineers can explore the training pipeline with detailed metrics, threshold analysis, and 5-model comparison; medical professionals and researchers can use the premium UI with tabbed input, quick-fill samples, batch prediction, and rich educational content explaining FNA measurements and threshold logic.</p>

    <h5>Relevance</h5>
    <p>For ML practitioners, the automated threshold tuning for high recall demonstrates how to adapt models for safety-critical applications. For healthcare researchers, the explainability features and interactive visualizations make complex ML decisions accessible and interpretable.</p>

    <h4>Reflection</h4>
    <h5>Significance</h5>
    <p>I chose this project because it addresses a critical need in medical AI — building systems that prioritize patient safety (minimizing false negatives) while remaining transparent and explainable. The Wisconsin Breast Cancer dataset is a classic ML benchmark, and this project elevates it from a simple exercise to a production-ready system with real-world considerations.</p>

    <h5>Lessons Learned</h5>
    <p>Key challenges solved: (1) Robust multi-method dataset downloader with three fallback strategies. (2) Threshold tuning to achieve ≥98% malignant recall without sacrificing overall accuracy. (3) Building a premium single-page UI with dark glassmorphism, animations, and tabbed input — all vanilla, no build step. (4) Implementing SHAP-like explainability with feature contribution analysis and comparison charts. (5) Batch CSV prediction with intelligent column name mapping.</p>

    <h4>Feedback and Revisions</h4>
    <h5>Feedback</h5>
    <p>Feedback focused on adding deep learning models (PyTorch ANN, CNN for imaging), expanding to multi-class classification (ductal vs lobular carcinoma), and integrating with real FNA imaging pipelines.</p>

    <h5>Revisions</h5>
    <p>I added XGBoost and Gradient Boosting to the 5-model comparison, implemented automated threshold tuning for high recall, built the premium glassmorphism UI with interactive charts, added batch CSV prediction with auto-mapping, and included comprehensive educational content about FNA measurements and clinical context.</p>

    <h4>References</h4>
    <ul>
      <li><a href="https://scikit-learn.org/stable/user_guide.html" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Scikit-Learn Documentation</a></li>
      <li><a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">FastAPI Documentation</a></li>
      <li><a href="https://xgboost.readthedocs.io/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">XGBoost Documentation</a></li>
      <li><a href="https://www.chartjs.org/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Chart.js Documentation</a></li>
      <li><a href="https://www.kaggle.com/datasets/uciml/breast-cancer-wisconsin-data" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Kaggle: Wisconsin Breast Cancer Dataset</a></li>
    </ul>
  `,
  image: '/image/bc-1.png',
  image2: '/image/bc-2.png',
  description: 'An explainable breast tumor classifier using 5 ML models on 30 FNA features — optimized for 98%+ malignant recall with threshold tuning, dynamic premium UI, batch prediction, and comprehensive analytics.',
  technologies: ['Classification', 'Scikit-Learn', 'FastAPI', 'XGBoost', 'Random Forest'],
  link: '/pages/artifacts/breast-cancer-classifier',
  github: 'https://github.com/nakib33/Breast-Cancer-Classifier/'
},
{
  slug: 'employee-salary-prediction-using-ann',
  title: 'Employee Salary Prediction Using ANN',
  date: 'July 2026',
  content: `
    <p>An end-to-end deep learning pipeline using a Multi-Layer Perceptron (MLP) Artificial Neural Network built with PyTorch to predict an employee's annual salary from demographics (age, gender, education level, years of experience). The entire workflow — from dataset download through cleaning, scaling, training, and evaluation — is packaged into a deployable FastAPI web service with a clean HTML dashboard and REST API for real-time salary predictions.</p>

    <h3>Artifact Description</h3>
    <h4>Objective</h4>
    <p>To build a complete regression ANN pipeline with PyTorch that predicts annual employee salary from a small set of personal and professional attributes. The system demonstrates the full ML lifecycle — data acquisition via Kaggle API with fallback, preprocessing, neural network training, evaluation, visualization, and deployment as an interactive web dashboard with a retrain endpoint.</p>

    <h4>Process</h4>
    <p>The project was developed in Python using PyTorch for the deep learning components and FastAPI for the web backend. The dataset (375 rows, 6 columns) is sourced from Kaggle, cleaned by dropping nulls and filtering non-standard category values, leaving 373 samples. Four features are used: Age, Gender, Education Level, and Years of Experience. Categorical features are integer-encoded (Gender: Male=0, Female=1; Education: Bachelor's=0, Master's=1, PhD=2), then all features and the target are standardized with StandardScaler. The ANN architecture is a feed-forward MLP: 4 → 64 → 32 → 16 → 1 with ReLU activations, trained with Adam optimizer (lr=0.01) and MSELoss for 400 epochs on an 80/20 train/test split. Auto-generated visualizations include training/validation loss curves and predictions-vs-actual scatter plots, displayed on the web dashboard alongside performance metrics.</p>

    <h4>Model Architecture</h4>
    <p>A feed-forward Multi-Layer Perceptron (MLP) for regression:</p>
    <ul>
      <li>Input: 4 features (Age, Gender, Education Level, Years of Experience)</li>
      <li>Hidden Layer 1: Linear(4 → 64) + ReLU</li>
      <li>Hidden Layer 2: Linear(64 → 32) + ReLU</li>
      <li>Hidden Layer 3: Linear(32 → 16) + ReLU</li>
      <li>Output: Linear(16 → 1) → Predicted Salary</li>
    </ul>

    <h4>Training Configuration</h4>
    <ul>
      <li>Optimizer: Adam, Learning Rate: 0.01</li>
      <li>Loss Function: Mean Squared Error (MSELoss)</li>
      <li>Epochs: 400</li>
      <li>Train/Test Split: 80% / 20% (random_state=42)</li>
      <li>Feature Scaling: StandardScaler (on X and y)</li>
    </ul>

    <h4>Tools and Technologies Used</h4>
    <ul>
      <li>Deep Learning: PyTorch (torch.nn, torch.optim)</li>
      <li>Web Framework: FastAPI, Uvicorn, Jinja2</li>
      <li>Data Processing: Pandas, NumPy</li>
      <li>Preprocessing & Metrics: Scikit-Learn (StandardScaler, train_test_split, R², MAE, RMSE)</li>
      <li>Visualization: Matplotlib (loss curves, prediction scatter plots)</li>
      <li>Data Source: Kaggle API with automatic GitHub raw-mirror fallback</li>
      <li>Frontend: HTML dashboard with real-time prediction form</li>
      <li>Version control: GitHub</li>
    </ul>

    <h4>API Endpoints</h4>
    <ul>
      <li>GET / — HTML prediction dashboard</li>
      <li>POST /predict — Predicts salary from {age, gender, education_level, years_of_experience}</li>
      <li>GET /metrics — Model performance & dataset statistics</li>
      <li>POST /retrain — Retrains the model on the current dataset and regenerates charts</li>
      <li>GET /docs — Interactive Swagger UI</li>
    </ul>

    <h4>Artifact-Specific Value Proposition</h4>
    <h5>Unique Value</h5>
    <p>This artifact demonstrates a complete, production-ready deep learning pipeline from data acquisition to deployed web service. It showcases PyTorch ANN implementation, robust data preprocessing with categorical encoding and standardization, automated visualization generation, and a fully functional FastAPI web app with one-click retraining capability.</p>

    <h5>Relevance</h5>
    <p>This artifact is directly relevant to roles in deep learning engineering and data science. It demonstrates proficiency in PyTorch, ML pipeline design, building deployable model APIs, and creating interactive dashboards for non-technical users to interact with ML models.</p>

    <h4>Customization for Audience</h4>
    <h5>Adaptations Made</h5>
    <p>The project was structured to serve two audiences: data scientists can run the Jupyter Notebook for step-by-step exploration, while end users and HR professionals can use the web dashboard or REST API for instant salary predictions without any code.</p>

    <h5>Relevance</h5>
    <p>For ML engineers, the notebook and training script provide full reproducibility with documented preprocessing, training, and evaluation. For HR professionals and business users, the web dashboard offers an intuitive interface for real-time salary estimation.</p>

    <h4>Reflection</h4>
    <h5>Significance</h5>
    <p>I chose this project to demonstrate end-to-end deep learning deployment — from raw data to a working web application. The project showcases that even a relatively simple MLP with 4 features can provide meaningful salary predictions, and that the real value lies in building a complete, usable system around the model.</p>

    <h5>Lessons Learned</h5>
    <p>Key challenges solved: (1) Robust dataset downloading with Kaggle API and automatic fallback to GitHub raw mirror. (2) Proper categorical encoding and feature/target standardization for neural network training. (3) Building a training pipeline that produces reusable artifacts (model weights, scalers, metrics) that the web app loads on startup. (4) Implementing one-click retraining that regenerates visualizations and updates the live model without restarting the server.</p>

    <h4>Feedback and Revisions</h4>
    <h5>Feedback</h5>
    <p>Feedback focused on adding more features (Job Title via embeddings), hyperparameter tuning with Optuna, k-fold cross-validation, and Docker containerization for easier deployment.</p>

    <h5>Revisions</h5>
    <p>I added the retrain endpoint for one-click model updates, auto-generated visualizations displayed on the dashboard, input validation with descriptive error messages, and the Kaggle API downloader with GitHub fallback for reliable data acquisition.</p>

    <h4>References</h4>
    <ul>
      <li><a href="https://pytorch.org/docs/stable/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">PyTorch Documentation</a></li>
      <li><a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">FastAPI Documentation</a></li>
      <li><a href="https://scikit-learn.org/stable/user_guide.html" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Scikit-Learn Documentation</a></li>
      <li><a href="https://www.kaggle.com/datasets/rkiattisak/salaly-prediction-for-beginer" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Kaggle: Salary Prediction for Beginner</a></li>
    </ul>
  `,
  image: '/image/em-1.png',
  image2: '/image/em-2.png',
  description: 'An end-to-end PyTorch ANN (MLP regressor) predicting employee salary from demographics — with a FastAPI web dashboard, REST API, one-click retraining, and auto-generated visualizations.',
  technologies: ['ANN', 'PyTorch', 'FastAPI', 'Scikit-Learn', 'Pandas'],
  link: '/pages/artifacts/employee-salary-prediction-using-ann',
  github: 'https://github.com/nakib33/Employee-Salary-Prediction-Using-ANN'
},
{
  slug: 'stock-trend-prediction-news-analysis',
  title: 'Stock Trend Prediction Using Bangla News Analysis',
  date: 'July 2026',
  content: `
    <p>A machine learning project that predicts stock market trends by performing sentiment analysis on Bangla (Bengali) financial news articles. It bridges the gap between NLP and financial market prediction for the Bangladeshi stock market, analyzing Bangla-language financial news — including article titles and body text — and classifying each news item as Positive, Negative, or Neutral.</p>

    <h3>Artifact Description</h3>
    <h4>Objective</h4>
    <p>To build a complete sentiment analysis pipeline for Bangla financial news that predicts stock market trends. The system processes Bangla text with custom preprocessing (punctuation removal, English word filtering, Bangla stop word removal), trains three ML models (Logistic Regression, Multinomial Naive Bayes, Random Forest), and serves predictions through a FastAPI web app with live DSE (Dhaka Stock Exchange) market data and news scraping capabilities.</p>

    <h4>Process</h4>
    <p>The project was developed in Python using a Jupyter Notebook workflow. A dataset of 150,000 Bangla financial news articles was preprocessed with custom Bangla stop word removal (355+ stop words), punctuation handling, and English word filtering. Title and body text were fused for richer feature extraction. Three models were trained and evaluated — Logistic Regression (96.50% accuracy), Multinomial Naive Bayes (88.67% accuracy), and Random Forest (98.43% accuracy, the best performer). The backend is built with FastAPI, serving multiple UI pages including live DSE stock prices, sentiment prediction, and a news scraping feature where users can search a company name, scrape Google News, and get instant sentiment analysis.</p>

    <h4>Tools and Technologies Used</h4>
    <ul>
      <li>Language: Python</li>
      <li>Web Framework: FastAPI (Uvicorn)</li>
      <li>ML Libraries: Scikit-Learn (Logistic Regression, Multinomial NB, Random Forest, TF-IDF)</li>
      <li>NLP: Custom Bangla preprocessing, Bangla stop word removal (355+ words)</li>
      <li>Data Processing: Pandas, NumPy, joblib</li>
      <li>Frontend: HTML5, CSS3, JavaScript (vanilla) with 5 UI pages</li>
      <li>Data: Bangla Financial News dataset (150,000 articles)</li>
      <li>Live Data: DSE (Dhaka Stock Exchange) real-time stock prices</li>
      <li>Version control: GitHub</li>
    </ul>

    <h4>Model Performance</h4>
    <ul>
      <li><strong>Random Forest 🏆 — 98.43%</strong> accuracy (Precision: 0.99, Recall: 0.98, F1: 0.98)</li>
      <li><strong>Logistic Regression — 96.50%</strong> accuracy (Precision: 0.97, Recall: 0.96, F1: 0.97)</li>
      <li><strong>Multinomial Naive Bayes — 88.67%</strong> accuracy (Precision: 0.91, Recall: 0.87, F1: 0.89)</li>
    </ul>

    <h4>Dataset</h4>
    <ul>
      <li>Source: Bangla Financial News (150,000 articles)</li>
      <li>Labels: 0 (Negative), 1 (Positive), 2 (Neutral)</li>
      <li>Distribution: Negative: 45,548 | Positive: 63,707 | Neutral: 40,745</li>
    </ul>

    <h4>UI Pages</h4>
    <ul>
      <li><strong>Home:</strong> Project info, stats, features</li>
      <li><strong>Live Market:</strong> DSE real-time stock prices with search</li>
      <li><strong>Prediction:</strong> Input Bangla news title + body for instant sentiment analysis</li>
      <li><strong>News Scrape:</strong> Search company → scrape Google News → predict sentiment</li>
      <li><strong>About:</strong> Project details, tech stack, model performance</li>
    </ul>

    <h4>Artifact-Specific Value Proposition</h4>
    <h5>Unique Value</h5>
    <p>This artifact demonstrates expertise in Bangla NLP — a less-resourced language — combined with financial market prediction. It shows the full pipeline from custom text preprocessing for Bangla, through three-model comparison with strong results (Random Forest at 98.43%), to a feature-rich web app with live market data integration and automated news scraping.</p>

    <h5>Relevance</h5>
    <p>This artifact is directly relevant to roles in data science, NLP engineering, and fintech — particularly in South Asian markets where Bangla language processing is in high demand. It demonstrates cross-lingual NLP skills, model evaluation rigor, and deployment of ML systems with real-time data integration.</p>

    <h4>Customization for Audience</h4>
    <h5>Adaptations Made</h5>
    <p>The project was designed for two audiences: data scientists can explore the Jupyter Notebook with detailed preprocessing and model comparison; end users and traders can use the live web app to search companies, scrape news, and get sentiment predictions without any technical knowledge.</p>

    <h5>Relevance</h5>
    <p>For ML practitioners, the comparative model evaluation with performance metrics provides insight into algorithm selection for Bangla text classification. For investors and financial analysts, the live market data and news scraping features make the tool practically useful for daily decision-making.</p>

    <h4>Reflection</h4>
    <h5>Significance</h5>
    <p>I chose this project because Bangla NLP is an underserved area with significant real-world applications, and the Bangladeshi stock market is a domain where sentiment analysis can provide genuine value. The project demonstrates that high-accuracy text classification (98.43%) is achievable for Bangla with well-preprocessed data and ensemble methods like Random Forest.</p>

    <h5>Lessons Learned</h5>
    <p>Key challenges solved: (1) Bangla text preprocessing — custom stop word list of 355+ words, punctuation handling, English word filtering. (2) Title-body fusion for richer feature extraction. (3) Three-model comparison showing Random Forest significantly outperforms Naive Bayes on this dataset. (4) Building a multi-page FastAPI app with live DSE data integration and news scraping functionality.</p>

    <h4>Feedback and Revisions</h4>
    <h5>Feedback</h5>
    <p>Feedback focused on expanding to more Bangla NLP tasks (NER, topic modeling), adding deep learning models (LSTM, Bangla-BERT), and supporting more financial instruments beyond stocks.</p>

    <h5>Revisions</h5>
    <p>I added Random Forest to the model comparison for the best performance, built live DSE market data integration, added the news scraping feature with Google News integration, and created a multi-page UI with dedicated prediction and scraping interfaces.</p>

    <h4>References</h4>
    <ul>
      <li><a href="https://scikit-learn.org/stable/user_guide.html" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Scikit-Learn Documentation</a></li>
      <li><a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">FastAPI Documentation</a></li>
      <li><a href="https://pandas.pydata.org/docs/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Pandas Documentation</a></li>
      <li><a href="https://www.nltk.org/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">NLTK Documentation</a></li>
      <li><a href="https://www.dsebd.org/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Dhaka Stock Exchange (DSE)</a></li>
    </ul>
  `,
  image: '/image/stock-trend-1.png',
  image2: '/image/stock-trend-2.png',
  image3: '/image/stock-trend-3.png',
  description: 'A Bangla NLP project predicting stock market trends via sentiment analysis of Bangla financial news — achieves 98.43% accuracy with Random Forest, served through a FastAPI web app with live DSE market data.',
  technologies: ['Bangla NLP', 'Logistic Regression', 'Multinomial Naive Bayes', 'Random Forest', 'FastAPI'],
  link: '/pages/artifacts/stock-trend-prediction-news-analysis',
  github: 'https://github.com/nakib33/Stock-trend-prediction-using-news-analysis'
},
{
  slug: 'deep-reinforcement-learning-chess',
  title: 'Arcane Chess — Deep Reinforcement Learning Chess',
  date: 'July 2026',
  content: `
    <p>A web-based platform that combines a full chess game interface with deep reinforcement learning. Users can train a Deep Q-Network (DQN) agent from scratch using self-play — with a convolutional neural network featuring self-attention, residual blocks, and dueling DQN architecture — then challenge the trained agent to a game through a beautiful web UI built with FastAPI.</p>

    <h3>Artifact Description</h3>
    <h4>Objective</h4>
    <p>To build a complete system where a DQN-based reinforcement learning agent learns to play chess through self-play, with a real-time training dashboard and an interactive web UI for playing against the trained agent. The system demonstrates deep RL concepts including double DQN, prioritized experience replay, dueling architecture, and self-play training — all accessible through a polished web interface.</p>

    <h4>Process</h4>
    <p>The project was developed in Python using PyTorch for the deep learning components and FastAPI for the web backend. The chess environment was built as a Gym-style RL environment using python-chess for move validation and game logic. The DQN architecture processes the 8×8 board as a 12-channel image (6 piece types × 2 colors, one-hot encoded) through three convolutional layers with batch normalization, a residual block with skip connection, multi-head self-attention over board positions, and a dueling DQN head with separate value and advantage streams. Training uses Double DQN to reduce overestimation bias, prioritized experience replay for efficient sampling, and gradient clipping for stability. The training dashboard streams real-time metrics (reward, win rate, epsilon, game length) via Server-Sent Events with live Chart.js visualizations.</p>

    <h4>Tools and Technologies Used</h4>
    <ul>
      <li>Deep Learning: PyTorch — DQN with self-attention, residual blocks, dueling architecture</li>
      <li>Web Framework: FastAPI, Uvicorn, Jinja2 templates</li>
      <li>Chess Engine: python-chess (full move validation — en passant, castling, promotion)</li>
      <li>Frontend: JavaScript, Chart.js (real-time training charts), HTML/CSS</li>
      <li>RL Techniques: Double DQN, Prioritized Experience Replay, Dueling DQN, Huber Loss</li>
      <li>Real-time: Server-Sent Events (SSE) for streaming metrics</li>
      <li>Version control: GitHub</li>
    </ul>

    <h4>DQN Architecture Details</h4>
    <p>The neural network processes the 8×8 chess board as a 12-channel image:</p>
    <ul>
      <li>3 Conv2D layers (64→128→256, 3×3) with BatchNorm and ReLU</li>
      <li>Residual block with skip connection and batch normalization</li>
      <li>Multi-head Self-Attention (8 heads, 256-dim) over board positions</li>
      <li>Global Average Pooling + turn indicator concatenation</li>
      <li>3 fully-connected layers (1024→512→256) with Dropout and ReLU</li>
      <li>Dueling DQN head: separate Value stream (state value) and Advantage stream (per-action advantage)</li>
      <li>Q(s,a) = V(s) + (A(s,a) - mean(A))</li>
    </ul>

    <h4>Training Enhancements</h4>
    <ul>
      <li><strong>Double DQN:</strong> Online network selects actions, target network evaluates — reduces overestimation bias</li>
      <li><strong>Dueling Architecture:</strong> Separates state value from action advantages for better policy evaluation</li>
      <li><strong>Prioritized Experience Replay:</strong> TD-error weighted sampling focuses on surprising transitions</li>
      <li><strong>Gradient Clipping:</strong> Prevents gradient explosion (max_norm=10)</li>
      <li><strong>Huber Loss (Smooth L1):</strong> More robust to outliers than MSE</li>
    </ul>

    <h4>Artifact-Specific Value Proposition</h4>
    <h5>Unique Value</h5>
    <p>This artifact demonstrates advanced deep reinforcement learning skills applied to a classic game — chess. It showcases the complete pipeline from environment design and neural network architecture through self-play training with state-of-the-art DQN enhancements (Double DQN, dueling architecture, prioritized replay, self-attention) to deployment as a real-time interactive web application.</p>

    <h5>Relevance</h5>
    <p>This artifact is directly relevant to roles in reinforcement learning, deep learning engineering, and game AI. It demonstrates proficiency in PyTorch, RL algorithm implementation, environment design, real-time metrics streaming, and deploying AI agents as interactive web applications.</p>

    <h4>Customization for Audience</h4>
    <h5>Adaptations Made</h5>
    <p>The platform was designed for two audiences: ML engineers can configure hyperparameters, monitor training metrics in real-time, and load checkpoints for evaluation; casual users can play chess against the trained agent through a clean, intuitive interface without any technical knowledge.</p>

    <h5>Relevance</h5>
    <p>For RL practitioners, the system provides full visibility into the training process with configurable hyperparameters, checkpoint management, and real-time metrics. For chess enthusiasts and end users, the Play page offers a seamless experience with click-to-move controls and visual feedback.</p>

    <h4>Reflection</h4>
    <h5>Significance</h5>
    <p>I chose this project because chess is a classic benchmark for reinforcement learning, and implementing a DQN agent from scratch — with self-attention, dueling architecture, and prioritized replay — demonstrates deep understanding of modern RL techniques. The self-play training loop where the agent improves by playing against itself is a powerful concept that scales to many game domains.</p>

    <h5>Lessons Learned</h5>
    <p>Key challenges solved: (1) Board representation — encoding the 8×8 board as a 12-channel image for CNN processing. (2) Self-play training loop — the agent plays against itself, generating training data on-the-fly with fresh negative sampling. (3) Real-time metrics streaming — implementing SSE for live training dashboard updates. (4) Balancing exploration vs exploitation through epsilon decay scheduling. (5) Training stability — combining Double DQN, dueling architecture, prioritized replay, and gradient clipping for stable convergence.</p>

    <h4>Feedback and Revisions</h4>
    <h5>Feedback</h5>
    <p>Feedback focused on exploring more advanced RL algorithms (PPO, AlphaZero-style MCTS), adding difficulty levels, and supporting multiplayer mode.</p>

    <h5>Revisions</h5>
    <p>I added self-attention to the DQN architecture for better board position understanding, implemented prioritized experience replay for more efficient training, built the real-time training dashboard with live charts, and added checkpoint save/load functionality for managing trained agents.</p>

    <h4>References</h4>
    <ul>
      <li><a href="https://arxiv.org/abs/1312.5602" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Playing Atari with Deep Reinforcement Learning — Mnih et al. (2013)</a></li>
      <li><a href="https://arxiv.org/abs/1509.06461" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Double DQN — van Hasselt et al. (2015)</a></li>
      <li><a href="https://arxiv.org/abs/1511.06581" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Dueling DQN — Wang et al. (2016)</a></li>
      <li><a href="https://arxiv.org/abs/1511.05952" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Prioritized Experience Replay — Schaul et al. (2015)</a></li>
      <li><a href="https://pytorch.org/docs/stable/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">PyTorch Documentation</a></li>
      <li><a href="https://python-chess.readthedocs.io/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">python-chess Documentation</a></li>
    </ul>
  `,
  image: '/image/chess-2.png',
  image2: '/image/chess-1.png',
  description: 'A deep reinforcement learning chess platform with a DQN agent featuring self-attention, dueling architecture, and prioritized experience replay — train via self-play, then challenge the AI through a FastAPI web UI.',
  technologies: ['Reinforcement Learning', 'Deep Q-Network', 'PyTorch', 'FastAPI', 'python-chess'],
  link: '/pages/artifacts/deep-reinforcement-learning-chess',
  github: 'https://github.com/nakib33/Deep-Reinforcement-Learning-Chess/'
},
{
  slug: 'medicalvision-ai',
  title: 'MedicalVision-AI — Medical Imaging with XAI',
  date: 'July 2026',
  content: `
    <p>A unified platform bringing together 16 deep learning projects for medical imaging classification with 7 state-of-the-art Explainable AI (XAI) methods. Covers brain MRI, chest X-ray, lung CT, retinal fundus, skin lesion, bone X-ray, histopathology, and more — all served through a single FastAPI web dashboard with downloadable PDF reports.</p>

    <h3>Artifact Description</h3>
    <h4>Objective</h4>
    <p>To build a comprehensive, unified web platform that consolidates 16 medical imaging classification projects — each using pre-trained CNN architectures — with integrated explainability via 7 XAI methods. The platform lets users upload a medical scan, get instant predictions with confidence scores, visualize what the model is focusing on through heatmap overlays, and download professional PDF reports — all through a single interface.</p>

    <h4>Process</h4>
    <p>The project was developed in Python using PyTorch and FastAPI. Each of the 16 projects uses pre-trained CNN architectures (EfficientNet-B0, ResNet, DenseNet, Custom CNN) fine-tuned on medical imaging datasets from Kaggle. Seven XAI explainers were implemented from scratch — Grad-CAM, Grad-CAM++, Score-CAM, Saliency Maps, Guided Backpropagation, Integrated Gradients, and Occlusion Sensitivity. A shared module architecture provides common pipelines for inference, training, datasets, transforms, and PDF report generation. The flagship MedScan-AI project supports 6 imaging modalities in a single multi-classification system. The web dashboard includes a project grid, per-project analysis pages, and full REST API with Swagger documentation.</p>

    <h4>16 Medical Imaging Projects</h4>
    <ul>
      <li>Brain Tumor MRI Classification (4 classes — Glioma, Meningioma, Pituitary, Normal)</li>
      <li>Pneumonia Detection (Chest X-ray — Normal, Pneumonia)</li>
      <li>COVID-19 Detection (Chest X-ray — 4 classes incl. Viral & Bacterial Pneumonia)</li>
      <li>Tuberculosis Detection (Chest X-ray — Normal, Tuberculosis)</li>
      <li>Alzheimer's Detection (Brain MRI — 4 dementia stages)</li>
      <li>Skin Cancer Classification (Dermoscopic — Benign, Malignant)</li>
      <li>Diabetic Retinopathy Detection (Retinal Fundus — 5 severity stages)</li>
      <li>Malaria Detection (Blood Smear — Parasitized, Uninfected)</li>
      <li>Breast Cancer Classification (Histopathology — Benign, Malignant)</li>
      <li>Bone Fracture Detection (X-ray — Fracture, No Fracture)</li>
      <li>Lung Cancer CT Scan Classification (Lung CT — 6 classes)</li>
      <li>MedScan-AI — Multi-Modality (6 modalities, Custom CNN)</li>
      <li>RetinaVision — Retinal Disease (8 eye disease classes)</li>
      <li>GI Tract Classification (Endoscopy — Normal, Ulcer, Polyp, Bleeding)</li>
      <li>OralScan — Oral Cancer Detection (4 classes)</li>
      <li>HemaVision — Blood Cell Analysis (Normal, Leukemia, Lymphoma, Myeloma)</li>
    </ul>

    <h4>7 Explainable AI Methods</h4>
    <ul>
      <li><strong>Grad-CAM:</strong> Gradient-weighted Class Activation Mapping — highlights regions from the final convolutional layer</li>
      <li><strong>Grad-CAM++:</strong> Improved localisation for multiple object instances</li>
      <li><strong>Score-CAM:</strong> Score-weighted activation maps using forward-pass confidence instead of gradients</li>
      <li><strong>Saliency Map:</strong> Vanilla saliency — gradient of output with respect to input pixels</li>
      <li><strong>Guided Backpropagation:</strong> Modified backpropagation producing sharper feature visualisations</li>
      <li><strong>Integrated Gradients:</strong> Path-integral attribution from baseline to input (satisfies sensitivity & implementation invariance axioms)</li>
      <li><strong>Occlusion Sensitivity:</strong> Sliding-window occlusion map measuring prediction drop per image patch</li>
    </ul>

    <h4>Tools and Technologies Used</h4>
    <ul>
      <li>Deep Learning: PyTorch, torchvision (EfficientNet-B0, ResNet, DenseNet, Custom CNN)</li>
      <li>Web Framework: FastAPI, Uvicorn, Jinja2 templates</li>
      <li>XAI Explainers: Grad-CAM, Grad-CAM++, Score-CAM, Saliency, Guided Backprop, Integrated Gradients, Occlusion</li>
      <li>Image Processing: Pillow, OpenCV, Matplotlib</li>
      <li>Data: 16+ Kaggle medical imaging datasets</li>
      <li>Reporting: PDF report generation with heatmap galleries</li>
      <li>Frontend: HTML, CSS, JavaScript with responsive project grid</li>
      <li>Version control: GitHub</li>
    </ul>

    <h4>Artifact-Specific Value Proposition</h4>
    <h5>Unique Value</h5>
    <p>This artifact demonstrates expertise in deep learning for medical imaging at scale — 16 distinct classification projects covering the widest range of modalities in a single platform. The implementation of 7 XAI methods from scratch shows deep understanding of model interpretability. The unified architecture with shared modules, project registry, and automated discovery demonstrates strong software engineering practices in ML projects.</p>

    <h5>Relevance</h5>
    <p>This artifact is directly relevant to roles in deep learning engineering, medical AI, and MLOps. It demonstrates proficiency in PyTorch, CNN architectures, model interpretability techniques, building modular and scalable ML platforms, and deploying complex multi-model systems behind a unified API and web interface.</p>

    <h4>Customization for Audience</h4>
    <h5>Adaptations Made</h5>
    <p>The platform was designed for two audiences: researchers and ML engineers can explore individual project notebooks, model architectures, and XAI implementations in detail; clinicians and stakeholders can upload scans through the intuitive web UI and download professional PDF reports without any code.</p>

    <h5>Relevance</h5>
    <p>For ML engineers, the shared module architecture and project registry provide a template for adding new projects with minimal boilerplate. For medical professionals and end users, the web dashboard with instant predictions and visual explanations makes AI-assisted analysis accessible and interpretable.</p>

    <h4>Reflection</h4>
    <h5>Significance</h5>
    <p>I chose this project because it addresses a critical gap in medical AI — most projects exist as isolated notebooks or single-purpose apps. MedicalVision-AI demonstrates that diverse medical imaging tasks can be unified under a single platform with shared infrastructure, making AI-assisted analysis more accessible and maintainable.</p>

    <h5>Lessons Learned</h5>
    <p>This project reinforced the importance of modular architecture in multi-model systems. The shared module pattern (config, models, pipelines, explainers, utils) dramatically reduced duplication across 16 projects. Implementing 7 XAI methods from scratch deepened my understanding of gradient flow, activation mapping, and attribution methods. The PDF report generator taught me how to structure professional medical analysis documents programmatically.</p>

    <h4>Feedback and Revisions</h4>
    <h5>Feedback</h5>
    <p>Feedback focused on adding more XAI methods (Layer-wise Relevance Propagation, SHAP, LIME), expanding to segmentation tasks, and integrating DICOM support for clinical PACS systems.</p>

    <h5>Revisions</h5>
    <p>I added the MedScan-AI flagship project for multi-modality support, implemented all 7 XAI explainers with consistent output formatting, added PDF report generation with professional layouts, and built the project registry for automatic discovery of new projects.</p>

    <h4>References</h4>
    <ul>
      <li><a href="https://arxiv.org/abs/1610.02391" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Grad-CAM — Selvaraju et al. (2017)</a></li>
      <li><a href="https://arxiv.org/abs/1710.11063" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Grad-CAM++ — Chattopadhyay et al. (2018)</a></li>
      <li><a href="https://arxiv.org/abs/1910.01279" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Score-CAM — Wang et al. (2020)</a></li>
      <li><a href="https://arxiv.org/abs/1703.01365" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Integrated Gradients — Sundararajan et al. (2017)</a></li>
      <li><a href="https://pytorch.org/docs/stable/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">PyTorch Documentation</a></li>
      <li><a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">FastAPI Documentation</a></li>
    </ul>
  `,
  image: '/image/medi-1.png',
  image2: '/image/medi-2.png',
  description: 'A unified platform for 16 CNN-based medical imaging classification projects with 7 Explainable AI methods — brain MRI, chest X-ray, lung CT, retinal fundus, skin lesion, and more — served via a FastAPI dashboard with PDF reports.',
  technologies: ['CNN', 'Computer Vision', 'PyTorch', 'EfficientNet-B0', 'Grad-CAM'],
  link: '/pages/artifacts/medicalvision-ai',
  github: 'https://github.com/nakib33/MedicalVision-AI'
},
{
  slug: 'california-housing-price-prediction',
  title: 'California Housing Price Prediction',
  date: 'July 2026',
  content: `
    <p>An end-to-end machine learning project that predicts median house values in California using Linear Regression, Ridge, Lasso, and Random Forest — with a Jupyter notebook for exploration and a FastAPI web app for interactive predictions. Covers the full ML workflow: data exploration, preprocessing, model training, evaluation, feature engineering, and deployment via a web interface.</p>

    <h3>Artifact Description</h3>
    <h4>Objective</h4>
    <p>The objective was to build a complete ML pipeline that predicts median house values for California block groups using the 1990 California census data. The project demonstrates the full lifecycle of a data science project — from exploratory analysis and preprocessing through model comparison, evaluation, and deployment as an interactive web application with both a UI and REST API.</p>

    <h4>Process</h4>
    <p>The project was developed in Python using a Jupyter Notebook workflow (61 cells) for the modeling pipeline. Data was preprocessed using scikit-learn pipelines with median imputation for numeric features and one-hot encoding for categorical variables. Four regression models were trained and evaluated — Linear Regression, Ridge, Lasso, and Random Forest — with Random Forest achieving the best performance (R² 0.8041). Feature engineering was explored through ratio features (rooms per household, bedrooms per room, population per household). The final model was deployed via a FastAPI web app with an interactive HTML interface, Swagger docs, and a /predict endpoint.</p>

    <h4>Tools and Technologies Used</h4>
    <ul>
      <li>Language: Python</li>
      <li>Web Framework: FastAPI (Uvicorn, Jinja2)</li>
      <li>ML Libraries:
        <ul>
          <li>Scikit-Learn: LinearRegression, Ridge, Lasso, RandomForestRegressor, pipelines, preprocessing</li>
        </ul>
      </li>
      <li>Environment: Jupyter Notebook</li>
      <li>Data Analysis: Pandas, NumPy</li>
      <li>Visualization: Matplotlib, Seaborn</li>
      <li>Data: 1990 California census housing dataset (20,640 rows, 10 columns)</li>
      <li>Version control: GitHub</li>
    </ul>

    <h4>Artifact-Specific Value Proposition</h4>
    <h5>Unique Value</h5>
    <p>This artifact demonstrates a complete, production-oriented ML workflow — from raw data to deployed web application. It showcases comparative model evaluation across four regression algorithms, feature engineering, proper train/test splitting to prevent data leakage, and deployment of the best model behind a FastAPI REST API with an interactive frontend.</p>

    <h5>Relevance</h5>
    <p>This artifact is directly relevant to roles in data science and ML engineering. It demonstrates end-to-end project execution, the ability to compare and select models based on quantitative metrics (R², RMSE, MAE), and deployment skills — qualities essential for production ML roles.</p>

    <h4>Customization for Audience</h4>
    <h5>Adaptations Made</h5>
    <p>The project was structured to serve two audiences: data scientists can run the detailed Jupyter Notebook with 61 annotated cells, while stakeholders and end users can interact with the FastAPI web app or use the /predict API endpoint directly. Model comparison tables make the trade-offs between algorithms immediately visible.</p>

    <h5>Relevance</h5>
    <p>For technical audiences, the notebook provides full reproducibility with documented preprocessing steps, feature engineering, and comparative evaluation. For non-technical stakeholders, the web UI makes predictions accessible without any code.</p>

    <h4>Reflection</h4>
    <h5>Significance</h5>
    <p>I chose this project because it covers the complete ML lifecycle on a real-world regression problem. It demonstrates that while simple linear models provide a reasonable baseline (R² 0.578), ensemble methods like Random Forest capture non-linear patterns significantly better (R² 0.804), and that not all feature engineering efforts yield improvements — a valuable practical lesson.</p>

    <h5>Lessons Learned</h5>
    <p>This project reinforced the importance of proper train/test splitting before any preprocessing to prevent data leakage. I learned that Ridge and Linear Regression perform identically when alpha is small, and that Lasso can over-penalize and collapse coefficients on this dataset. The feature engineering exploration taught me that ratio features don't always improve linear models — understanding when engineering helps is as important as knowing how to do it.</p>

    <h4>Feedback and Revisions</h4>
    <h5>Feedback</h5>
    <p>Feedback focused on adding more advanced models (XGBoost, Gradient Boosting), incorporating geographical features for spatial analysis, and expanding the web UI with visualization of prediction distributions.</p>

    <h5>Revisions</h5>
    <p>I added Random Forest to the model comparison for a stronger non-linear baseline, included the FastAPI web app with interactive UI and API documentation, and structured the notebook with clear section headers and cell annotations for reproducibility.</p>

    <h4>References</h4>
    <ul>
      <li><a href="https://scikit-learn.org/stable/supervised_learning.html" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Scikit-Learn Documentation</a></li>
      <li><a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">FastAPI Documentation</a></li>
      <li><a href="https://pandas.pydata.org/docs/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Pandas Documentation</a></li>
      <li><a href="https://seaborn.pydata.org/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Seaborn Documentation</a></li>
    </ul>
  `,
  image: '/image/house.png',
  description: 'An end-to-end ML project predicting median California house values using Linear Regression, Ridge, Lasso, and Random Forest — with a Jupyter notebook and FastAPI web app for interactive predictions.',
  technologies: ['Linear Regression', 'Scikit-Learn', 'FastAPI', 'Random Forest', 'Pandas'],
  link: '/pages/artifacts/california-housing-price-prediction',
  github: 'https://github.com/nakib33/California-Housing-Price-Prediction/'
},
{
  slug: 'news-topic-classification-fake-news-risk-analyzer',
  title: 'News Topic Classification & Fake-News Risk Analyzer',
  date: 'July 2026',
  content: `
    <p>An explainable NLP system built on Multinomial Naive Bayes that performs two tasks: (1) classifies news articles into topic categories (Politics, Sports, Business, Technology, Entertainment), and (2) scores how much an article's writing style resembles low-credibility / "fake news" content. Both models use a classic bag-of-words TF-IDF approach — fast to train, easy to explain, and a solid baseline that could later be swapped for BERT/RoBERTa.</p>

    <h3>Artifact Description</h3>
    <h4>Objective</h4>
    <p>The objective was to build a transparent, explainable NLP system that demonstrates how classic machine learning models can be used for real-world text classification tasks. The system lets users paste in an article and see topic probabilities, a fake-news risk score, and the specific words that most influenced each prediction — making the model's reasoning visible and interpretable.</p>

    <h4>Process</h4>
    <p>The project was developed in Python using a Naive Bayes model pipeline. Text data was sourced from Kaggle datasets — a news category dataset (filtered to 5 topics) and a fake/real news dataset. The pipeline includes: text cleaning (lowercasing, URL/punctuation stripping), TF-IDF vectorization with unigrams and bigrams, training two Multinomial Naive Bayes classifiers, and evaluating them with accuracy metrics, classification reports, and confusion matrices. A FastAPI web app serves the model predictions through an interactive UI where users can paste text and see explainable results in real time.</p>

    <h4>Tools and Technologies Used</h4>
    <ul>
      <li>Language: Python</li>
      <li>Web Framework: FastAPI (Uvicorn)</li>
      <li>ML Libraries:
        <ul>
          <li>Scikit-Learn: MultinomialNB, TfidfVectorizer, train/test split, evaluation metrics</li>
        </ul>
      </li>
      <li>Frontend: HTML, CSS, JavaScript (served via FastAPI)</li>
      <li>Data Sources: Kaggle — News Category Dataset, Fake and Real News Dataset</li>
      <li>Model Serialization: joblib for saving vectorizers and models</li>
      <li>Version control: GitHub</li>
    </ul>

    <h4>Artifact-Specific Value Proposition</h4>
    <h5>Unique Value</h5>
    <p>This artifact demonstrates expertise in applied NLP and machine learning with a strong emphasis on <em>explainability</em> — the ability to show exactly which words drove each classification decision. It showcases a complete ML pipeline from data acquisition (Kaggle API) through preprocessing, model training, evaluation, and deployment as a working web application with a clean, interactive UI.</p>

    <h5>Relevance</h5>
    <p>This artifact is directly relevant to roles in data science, NLP engineering, and ML engineering. It demonstrates end-to-end project execution, the ability to work with real-world text data, and a commitment to building interpretable models — a quality increasingly valued in regulated domains and production ML systems.</p>

    <h4>Customization for Audience</h4>
    <h5>Adaptations Made</h5>
    <p>The project was designed with dual functionality (topic classification + fake-news risk scoring) to showcase breadth in NLP capabilities. The web UI was intentionally kept simple to foreground the model's decision-making process — showing probability bars, risk scores, and influential words — rather than visual polish. A synthetic data generator was included for quick demos without a Kaggle account.</p>

    <h5>Relevance</h5>
    <p>For technical audiences, the notebook provides a fully reproducible pipeline with detailed evaluation metrics (classification reports, confusion matrices, most-informative-word lists). For non-technical stakeholders, the web app makes the model's output intuitive and immediately understandable.</p>

    <h4>Reflection</h4>
    <h5>Significance</h5>
    <p>I chose this project because it sits at the intersection of NLP, classical ML, and full-stack deployment — demonstrating that you don't need a massive transformer model to build something useful and interpretable. The explainability focus (showing which words drive predictions) is something I believe is essential for trustworthy AI systems.</p>

    <h5>Lessons Learned</h5>
    <p>This project reinforced the value of simple, well-understood baseline models. Multinomial Naive Bayes with TF-IDF is remarkably effective for text classification when the feature space is well-engineered. I learned how to structure a project with optional data sources (real Kaggle data vs. synthetic fallback), how to serialize and deploy ML models with FastAPI, and how to build an interactive UI that makes model behavior transparent to end users.</p>

    <h4>Feedback and Revisions</h4>
    <h5>Feedback</h5>
    <p>Feedback focused on expanding the model comparison (e.g., ComplementNB as a drop-in improvement), adding SHAP/LIME for more rigorous explainability, and integrating a BERT/RoBERTa second-stage model for comparison with the classical baseline.</p>

    <h5>Revisions</h5>
    <p>I added the most-informative-words per class as a built-in explainability feature, included a synthetic data generator option for easy onboarding, and structured the project with clear documentation covering both the ML pipeline and the web deployment.</p>

    <h4>References</h4>
    <ul>
      <li><a href="https://scikit-learn.org/stable/modules/naive_bayes.html" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Scikit-Learn: Naive Bayes Documentation</a></li>
      <li><a href="https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.TfidfVectorizer.html" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Scikit-Learn: TfidfVectorizer Documentation</a></li>
      <li><a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">FastAPI Documentation</a></li>
      <li><a href="https://www.kaggle.com/datasets/rmisra/news-category-dataset" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Kaggle: News Category Dataset</a></li>
      <li><a href="https://www.kaggle.com/datasets/clmentbisaillon/fake-and-real-news-dataset" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Kaggle: Fake and Real News Dataset</a></li>
      <li><a href="https://joblib.readthedocs.io/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">joblib Documentation</a></li>
    </ul>
  `,
  image: '/image/fakenews.png',
  description: 'An explainable NLP system that classifies news articles into topics and scores fake-news writing style risk using Multinomial Naive Bayes and TF-IDF, served through a FastAPI web app.',
  technologies: ['Multinomial Naive Bayes', 'Scikit-Learn', 'FastAPI', 'TF-IDF', 'Python'],
  link: '/pages/artifacts/news-topic-classification-fake-news-risk-analyzer',
  github: 'https://github.com/nakib33/News-Topic-Classification-Fake-News-Risk-Analyzer.git'
},
    {
        slug: 'django-react-e-commerce',
        title: 'Django & React E-commerce',
        date: 'January 2024',
        content: `
          <p>This artifact showcases a comprehensive e-commerce platform built using Django for the backend, React for the frontend, and MySQL as the database. Developed to provide users with a seamless online shopping experience, this project includes essential e-commerce features such as user authentication, product listings, a shopping cart, and an admin dashboard for order management. Additionally, the platform integrates machine learning models to predict laptop prices based on features such as brand, specifications, and historical pricing. This project demonstrates a strong command over full-stack development, database management, and user experience design.</p>

          <h3>Artifact Description</h3>
          <h4>Objective</h4>
          <p>The objective of this project was to create an efficient, user-friendly e-commerce application where users can browse, compare, and purchase products. The platform also supports machine learning predictions for dynamic price estimation of laptops.</p>

          <h4>Process</h4>
          <p>The project was developed individually, starting with database design in MySQL to store user and product data. Backend logic was built using Django, implementing RESTful APIs for communication with the React frontend. Machine learning models were implemented using Python libraries such as Scikit-Learn and Statsmodels, which allowed the integration of both current and future price predictions for laptops. The frontend was developed in React and styled with Bootstrap to ensure responsiveness. Finally, extensive testing was conducted to ensure smooth user authentication, navigation, and transaction processing.</p>

          <h4>Tools and Technologies Used</h4>
          <ul>
            <li>Backend: Django, Django REST Framework</li>
            <li>Frontend: React, Bootstrap</li>
            <li>Database: MySQL</li>
            <li>Machine Learning Libraries:
              <ul>
                <li>Scikit-Learn: Used for building and training regression models to predict current laptop prices based on specifications.</li>
                <li>Statsmodels: Used for time series analysis to predict future laptop prices by examining historical price trends.</li>
              </ul>
            </li>
            <li>Others: GitHub for version control</li>
          </ul>

          <h4>Artifact-Specific Value Proposition</h4>
          <h5>Unique Value</h5>
          <p>This artifact demonstrates expertise in e-commerce application development, showcasing skills in both backend and frontend integration as well as machine learning. It highlights my proficiency in using Django and React, as well as my ability to build and manage databases, create a responsive UI, and integrate predictive models for enhanced functionality.</p>

          <h5>Relevance</h5>
          <p>This artifact aligns with my personal value proposition by emphasizing my skills in full-stack development, user-centric design, and the ability to implement machine learning models within a web application. It is relevant to potential employers in e-commerce and software development who seek developers experienced in both backend and frontend technologies with a focus on data-driven insights.</p>

          <h4>Customization for Audience</h4>
          <h5>Adaptations Made</h5>
          <p>To appeal to a broader audience, I integrated a predictive pricing model using machine learning to demonstrate advanced technical skills. The platform's UI was designed to be clean and responsive, ensuring ease of use for both technical and non-technical users.</p>

          <h5>Relevance</h5>
          <p>The customizations make the project more pertinent to potential clients and employers looking for developers skilled in building high-quality, user-friendly e-commerce applications with integrated machine learning capabilities.</p>

          <h4>Reflection</h4>
          <h5>Significance</h5>
          <p>I chose this project as an artifact because it demonstrates my competency in creating full-stack applications with complex functionality, a strong user experience focus, and advanced data science integration. It illustrates my skills in API development, database management, and machine learning, as well as in responsive design.</p>

          <h5>Lessons Learned</h5>
          <p>Developing this artifact enhanced my understanding of full-stack integration, API structuring, data preprocessing, and model training for predictive analytics. I gained proficiency in handling data flow between the backend and frontend, as well as in UI/UX design and machine learning for practical applications.</p>

          <h4>Feedback and Revisions</h4>
          <h5>Feedback</h5>
          <p>Feedback was received on improving code efficiency, ensuring better responsiveness, and enhancing the machine learning model's accuracy. Additional input suggested expanding the admin dashboard for easier order management and better insights into price trends.</p>

          <h5>Revisions</h5>
          <p>I optimized the code and improved the UI's responsiveness. I also refined the predictive model by tuning parameters to increase accuracy and updated the admin dashboard by adding features such as search, filter options, and visualizations for predicted laptop price trends.</p>

          <h4>References</h4>
          <ul>
  <li><a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Django Documentation</a></li>
  <li><a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">React Documentation</a></li>
  <li><a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Bootstrap Documentation</a></li>
  <li><a href="https://scikit-learn.org/stable/user_guide.html" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Scikit-Learn Documentation</a></li>
  <li><a href="https://www.statsmodels.org/stable/index.html" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Statsmodels Documentation</a></li>
</ul>

        `,
        image: 'https://raw.githubusercontent.com/nakib33/Laptop-Store-AI_Based_Ecommerce-Website-FInal-Year-Project-/refs/heads/main/screenshoot/1.Home%20page.png',
        image2: 'https://raw.githubusercontent.com/nakib33/Laptop-Store-AI_Based_Ecommerce-Website-FInal-Year-Project-/refs/heads/main/screenshoot/2.Product%20page.png',
        image3: 'https://raw.githubusercontent.com/nakib33/Laptop-Store-AI_Based_Ecommerce-Website-FInal-Year-Project-/refs/heads/main/screenshoot/8.Predict%20price.png',
        description: 'An online store that allows users to browse, search, and purchase products. Includes a machine learning feature for laptop price predictions.',
        technologies: ['Django', 'React', 'MySQL', 'Bootstrap', 'Scikit-Learn'],
        link: '/pages/artifacts/django-react-e-commerce',
        github: 'https://github.com/nakib33/Laptop-Store-AI_Based_Ecommerce-Website-FInal-Year-Project-.git'
      }

,
{
  slug: 'hey-girls-ecommerce',
  title: 'Hey Girls — Women\'s E-commerce',
  date: '2021',
  content: `
    <p>A full-stack women's fashion e-commerce platform built with the MERN stack (MongoDB, Express.js, React, Node.js). Designed to deliver a smooth and modern shopping experience with user authentication, a product catalog, a shopping cart with PayPal integration, and a dedicated admin panel for inventory and order management.</p>

    <h3>Artifact Description</h3>
    <h4>Objective</h4>
    <p>To build a responsive, feature-rich e-commerce web application tailored for women's fashion, enabling seamless product discovery, cart management, and secure checkout — with an admin interface for managing the store backend.</p>

    <h4>Process</h4>
    <p>The project was developed individually using the MERN stack. The backend was built with Express.js and Node.js, exposing RESTful APIs consumed by a React frontend. MongoDB was used as the primary database for storing users, products, and orders. Cloudinary handles media storage for product images. JWT-based middleware secures routes, and PayPal's client-side SDK powers checkout. The client and server run concurrently in development via the concurrently package.</p>

    <h4>Tools and Technologies Used</h4>
    <ul>
      <li>Backend: Node.js, Express.js, MongoDB (Mongoose)</li>
      <li>Frontend: React, CSS</li>
      <li>Authentication: JSON Web Tokens (JWT), bcrypt</li>
      <li>Media Storage: Cloudinary</li>
      <li>Payments: PayPal JavaScript SDK</li>
      <li>Others: GitHub for version control</li>
    </ul>

    <h4>Artifact-Specific Value Proposition</h4>
    <h5>Unique Value</h5>
    <p>This artifact demonstrates expertise in full-stack JavaScript development using the MERN stack, showcasing skills in REST API design, database modeling, JWT-based authentication, third-party service integration (PayPal, Cloudinary), and building role-based access control for both users and admins.</p>

    <h5>Relevance</h5>
    <p>This artifact aligns with my personal value proposition by highlighting my ability to architect and deliver a complete, production-ready e-commerce application — from backend API design to a polished, responsive React frontend. It is relevant to employers seeking full-stack JavaScript developers with hands-on experience in real-world integrations.</p>

    <h4>Customization for Audience</h4>
    <h5>Adaptations Made</h5>
    <p>The platform was purpose-built for a women's fashion niche, with a clean and modern UI tailored to that audience. PayPal was integrated to provide a familiar and trusted payment experience, and Cloudinary was used to ensure fast, optimized image delivery for product listings.</p>

    <h5>Relevance</h5>
    <p>These choices make the project compelling to clients and employers looking for developers capable of building niche, user-centric applications with real payment and media infrastructure — not just toy projects.</p>

    <h4>Reflection</h4>
    <h5>Significance</h5>
    <p>I chose this project as an artifact because it demonstrates my ability to build a complete, end-to-end web application using a modern JavaScript stack. It covers the full development lifecycle — database design, API development, frontend implementation, authentication, and third-party integrations — all within a single cohesive project.</p>

    <h5>Lessons Learned</h5>
    <p>Working with the MERN stack end-to-end reinforced my ability to architect scalable applications. I gained practical experience in state management across React components, designing MongoDB schemas for relational-style data, implementing JWT authentication with protected routes, and handling asynchronous API calls cleanly with async/await patterns.</p>

    <h4>Feedback and Revisions</h4>
    <h5>Feedback</h5>
    <p>Feedback was received on improving UI responsiveness across device sizes, strengthening route protection on admin endpoints, and optimizing image loading performance for the product catalog.</p>

    <h5>Revisions</h5>
    <p>I improved the CSS for mobile responsiveness, added stricter JWT middleware checks on admin routes, and integrated Cloudinary for optimized image hosting and delivery, replacing local file storage.</p>

    <h4>References</h4>
    <ul>
      <li><a href="https://www.mongodb.com/docs/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">MongoDB Documentation</a></li>
      <li><a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Express.js Documentation</a></li>
      <li><a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">React Documentation</a></li>
      <li><a href="https://nodejs.org/en/docs/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Node.js Documentation</a></li>
      <li><a href="https://developer.paypal.com/docs/checkout/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">PayPal Checkout Documentation</a></li>
      <li><a href="https://cloudinary.com/documentation" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Cloudinary Documentation</a></li>
    </ul>
  `,
  image: 'https://res.cloudinary.com/nakib33/image/upload/v1616183413/ecommerce/4_xilbod.png',
  image2: 'https://res.cloudinary.com/nakib33/image/upload/v1616183413/ecommerce/A3_gogtln.png',
  description: 'A women\'s fashion e-commerce store built with the MERN stack. Features user authentication, product catalog, shopping cart, PayPal checkout, and a full admin dashboard.',
  technologies: ['MERN', 'MongoDB', 'Express.js', 'React', 'Node.js'],
  link: '/pages/artifacts/hey-girls-ecommerce',
  github: 'https://github.com/nakib33/Hey-Girls-Ecommerce-website-for-women'
},
{
  slug: 'movie-recommendation-system',
  title: 'Movie Recommendation System — KNN on MovieLens 20M',
  date: '2026',
  content: `
    <p>An AI-powered personalized movie recommendation system built on the MovieLens 20M dataset (27K movies, 138K users, 19 genres) using K-Nearest Neighbors with multi-modal feature fusion. Served through a FastAPI backend with a glassmorphism dark-theme frontend, real-time search, analytics dashboard, and batch recommendation processing.</p>

    <h3>Artifact Description</h3>
    <h4>Objective</h4>
    <p>To build a production-ready content-based movie recommendation engine using K-Nearest Neighbors, combining genre multi-hot encoding, title TF-IDF vectorization, and rating statistics into weighted feature vectors with cosine similarity. Includes model training, hyperparameter tuning, REST API deployment, and an interactive web UI with analytics.</p>

    <h4>Process</h4>
    <p>The project was developed in Python using scikit-learn and FastAPI. The MovieLens 20M dataset was downloaded and preprocessed into parquet files. Feature engineering combines 20 genre features, 500 title TF-IDF features, and 4 rating statistics, weighted for optimal similarity. The KNN model (optimal K=21, cosine similarity) achieves 100% recommendation coverage with an average similarity score of 94.76%. The FastAPI app exposes 9 REST endpoints, and the frontend features real-time debounced search, genre filtering, analytics charts, and CSV batch processing.</p>

    <h4>Features</h4>
    <ul>
      <li><strong>Intelligent Recommendations:</strong> content-based KNN filtering with weighted feature fusion and similarity scores</li>
      <li><strong>Smart Search:</strong> fuzzy title search, genre exploration, autocomplete dropdown</li>
      <li><strong>Analytics Dashboard:</strong> genre popularity, rating distributions, top-rated leaderboard, year-wise trends</li>
      <li><strong>Batch Processing:</strong> upload CSV of movie IDs, generate bulk recommendations, download results</li>
      <li><strong>Model Evaluation:</strong> Precision@K, Recall@K, coverage, hyperparameter tuning visualization</li>
    </ul>

    <h4>ML Pipeline</h4>
    <ul>
      <li>Genre Multi-Hot Encoding (20 features, weight 1.0)</li>
      <li>Title TF-IDF Vectorization (500 features, weight 0.3)</li>
      <li>Rating Statistics (4 features, weight 0.5)</li>
      <li>K-Nearest Neighbors (Brute Force), Cosine Similarity, K=21</li>
      <li>100% coverage across 27,278 movies; average similarity 94.76%</li>
    </ul>

    <h4>Tools and Technologies Used</h4>
    <ul>
      <li>Backend: Python, FastAPI, Uvicorn</li>
      <li>ML: scikit-learn (NearestNeighbors), pandas, NumPy</li>
      <li>Frontend: HTML5, CSS3, JavaScript (Vanilla), Chart.js</li>
      <li>Data: MovieLens 20M Dataset (GroupLens Research)</li>
      <li>Version control: GitHub</li>
    </ul>

    <h4>Reflection</h4>
    <h5>Significance</h5>
    <p>This project demonstrates the full ML pipeline for recommendation systems — from data collection and feature engineering to model training, hyperparameter tuning, REST API deployment, and an interactive frontend — showcasing the pattern used by Netflix, Amazon, and Spotify.</p>

    <h5>Lessons Learned</h5>
    <p>Building this end-to-end project reinforced feature engineering for similarity-based recommendations, the trade-offs of KNN as a lazy learner, and how to deploy an ML model behind a production REST API with a polished UI.</p>
  `,
  image: '/image/movie1.png',
  image2: '/image/movie2.png',
  image3: '/image/movie3.png',
  image4: '/image/movie4.png',
  description: 'A content-based KNN movie recommendation engine on the MovieLens 20M dataset — genre + TF-IDF + rating feature fusion, FastAPI backend, glassmorphism dark UI, real-time search, analytics dashboard, and batch recommendations.',
  technologies: ['KNN', 'scikit-learn', 'FastAPI', 'Pandas', 'NumPy', 'Chart.js'],
  link: '/pages/artifacts/movie-recommendation-system',
  github: 'https://github.com/nakib33/Movie-Recommendation-Using-KNN'
},
{
  slug: 'emotionvision-ai',
  title: 'EmotionVision AI — Real-time Facial Emotion Recognition',
  date: '2026',
  content: `
    <p>A full-stack facial emotion recognition system using a custom CNN (1.2M params, PyTorch) over the FER2013 dataset classifying 7 emotions. Served through a FastAPI backend with a dark-theme frontend supporting webcam live inference, image upload, confidence scores, and Grad-CAM heatmap visualization.</p>

    <h3>Artifact Description</h3>
    <h4>Objective</h4>
    <p>To build a real-time facial emotion recognition pipeline using a custom CNN over the FER2013 dataset, capable of classifying 7 emotions (Happy, Sad, Angry, Fear, Surprise, Disgust, Neutral) from grayscale 48×48 face crops. Includes Grad-CAM visualization to highlight which facial regions drive each prediction, served through a FastAPI backend with an interactive web UI.</p>

    <h4>Process</h4>
    <p>The project was developed in Python using PyTorch and FastAPI. A custom CNN with 3 convolutional blocks (32→64→128 filters), BatchNorm, MaxPool, and dropout classification head achieves ~65–70% accuracy on FER2013. Face detection uses OpenCV Haar Cascade. Grad-CAM is implemented manually by hooking the last convolutional layer to compute gradient-weighted activation heatmaps. Class imbalance (Disgust ~400 samples vs Happy ~7K) is handled via inverse-frequency class weights and weighted CrossEntropyLoss. The FastAPI backend exposes endpoints for prediction and Grad-CAM, and the frontend provides webcam capture, image upload, live probability bars, and heatmap overlays.</p>

    <h4>CNN Architecture</h4>
    <ul>
      <li>Conv2D(1→32, 3×3) → BatchNorm → ReLU → MaxPool(2)</li>
      <li>Conv2D(32→64, 3×3) → BatchNorm → ReLU → MaxPool(2)</li>
      <li>Conv2D(64→128, 3×3) → BatchNorm → ReLU → MaxPool(2)</li>
      <li>Flatten → Linear(4608→256) → ReLU → Dropout(0.4) → Linear(256→7)</li>
      <li>~1.2M parameters | Input: 1×48×48 grayscale | Output: 7 emotion logits</li>
    </ul>

    <h4>Features</h4>
    <ul>
      <li><strong>Face Detection:</strong> OpenCV Haar Cascade for locating faces in images and video</li>
      <li><strong>Emotion Classification:</strong> 7 classes — Happy, Sad, Angry, Fear, Surprise, Disgust, Neutral</li>
      <li><strong>Real-time Webcam:</strong> Live inference with bounding box and emotion label overlay</li>
      <li><strong>Confidence Scores:</strong> Probability bars for each emotion class</li>
      <li><strong>Grad-CAM Visualization:</strong> Heatmap highlighting eyes, mouth, and eyebrows</li>
      <li><strong>Image Upload:</strong> Drag-and-drop or file browse for static image analysis</li>
    </ul>

    <h4>Grad-CAM Implementation</h4>
    <ul>
      <li>Hooks the last convolutional layer (model.features[-4])</li>
      <li>Records forward activations and backward gradients</li>
      <li>Computes importance weights via global-average-pooling of gradients</li>
      <li>Produces heatmap overlaid on the input face (focuses on eyes, mouth, eyebrows)</li>
    </ul>

    <h4>Tools and Technologies Used</h4>
    <ul>
      <li>ML Framework: PyTorch (~1.2M parameter custom CNN)</li>
      <li>Face Detection: OpenCV Haar Cascade</li>
      <li>Backend: FastAPI + Uvicorn</li>
      <li>Frontend: HTML5, CSS3, Vanilla JavaScript</li>
      <li>Visualization: Grad-CAM (manual implementation)</li>
      <li>Version control: GitHub</li>
    </ul>

    <h4>Reflection</h4>
    <h5>Significance</h5>
    <p>This project demonstrates end-to-end deep learning deployment — from model architecture design and class imbalance handling to Grad-CAM explainability, a production REST API, and an interactive web UI for real-time inference.</p>

    <h5>Lessons Learned</h5>
    <p>Building this system reinforced CNN design for small-image classification, the impact of class imbalance and data augmentation on model performance, and how to implement Grad-CAM from scratch for model interpretability without external dependencies.</p>
  `,
  image: '/image/face1.png',
  image2: '/image/face2.png',
  description: 'Real-time facial emotion recognition with a custom PyTorch CNN (7 emotions) over FER2013 — live webcam inference, image upload, confidence scores, and Grad-CAM heatmap visualization via FastAPI and HTML/CSS/JS.',
  technologies: ['PyTorch', 'FastAPI', 'OpenCV', 'CNN', 'Grad-CAM', 'FER2013'],
  link: '/pages/artifacts/emotionvision-ai',
  github: 'https://github.com/nakib33/EmotionVision-AI.git'
}];

export default projects;
