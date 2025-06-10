# 📊 Google ML Crash Course – Linear Regression (Chicago Taxi Dataset)

A beginner-friendly machine learning notebook using the **Chicago Taxi dataset**. This project demonstrates **Linear Regression** to predict taxi fares based on features like trip distance and time.  
> 🚀 Part of the Google Machine Learning Crash Course exercises.

---

## ✨ Features

- 📈 Load and explore real-world taxi trip data
- 🔍 Data cleaning and feature selection
- 🛠️ Build a simple Linear Regression model with scikit-learn
- 📊 Evaluate model performance using metrics like MSE and R²
- 📑 Step-by-step documentation for easy understanding

---

## 🛠️ Tech Stack

- Python (Jupyter Notebook)
- pandas
- numpy
- matplotlib
- scikit-learn

---

## 📂 Notebook Structure

```
Google_ML_CrashCourse_LR/
├── linear_regression_taxi.ipynb  # Main notebook with all exercises
```

---

## 🔧 Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/UjjwalKarkeyy/Google_ML_CrashCourse_LR.git
   cd Google_ML_CrashCourse_LR
   ```
2. **Install dependencies:**
   ```bash
   pip install numpy pandas matplotlib scikit-learn
   ```
3. **Run the notebook:**
   ```bash
   jupyter notebook linear_regression_taxi.ipynb
   ```

---

## 🔍 How It Works

### 📌 Data Loading
- Reads the Chicago taxi dataset from an online CSV.
- Creates a DataFrame with selected columns: `TRIP_MILES`, `TRIP_SECONDS`, `FARE`, `COMPANY`, `PAYMENT_TYPE`, and `TIP_RATE`.

### 📌 Data Exploration
- Uses `.describe()` to explore dataset statistics.
- Displays basic visualizations (optional).

### 📌 Feature Engineering
- Selects key features (e.g., trip distance and duration) to predict fare.

### 📌 Model Training
- Builds and trains a **Linear Regression model** using scikit-learn.
- Fits the model on the training data.

### 📌 Evaluation
- Calculates model performance (e.g., Mean Squared Error, R²).
- Compares predictions with actual fares.

---

## 💡 Future Improvements

- 🔄 Add data visualizations (e.g., scatter plots of predicted vs. actual fares)
- 📝 Hyperparameter tuning (e.g., adding regularization)
- 🌐 Test with new features to improve accuracy

---

## 🧠 Lessons Learned

This project helped reinforce:
- Loading and cleaning real-world datasets
- Data exploration and feature engineering
- Basic implementation of Linear Regression in Python
- Understanding model evaluation metrics

---

## 🙌 Acknowledgements

- [Google Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course)
- [scikit-learn](https://scikit-learn.org/)
- Built by [@UjjwalKarkeyy](https://github.com/UjjwalKarkeyy)
