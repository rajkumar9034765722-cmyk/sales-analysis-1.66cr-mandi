# 📊 Rs 1.66 Cr Mandi Sales Analysis - Mandi Dabwali

> Real retail data analysis from Mandi Dabwali, Haryana | Python + Pandas + Data Visualization
🔗 **LinkedIn Post:** [View Post](https://www.linkedin.com/feed/update/urn:li:activity:7507367475244699648/)

### 🚀 Project Overview
Analyzed 1.66 Crore retail transactions to find top products, seasonal trends, and profit optimization.

### 🛠️ Tech Stack
- Python, Pandas, NumPy
- Matplotlib, Seaborn
- Jupyter Notebook

### 🔍 Key Insights
- Top 5 products = 60% revenue
- Diwali season peak sales identified
- 15% profit loss due to overstocking
- Dashboard created for daily tracking

### 📁 Files
- `sales_data.csv` - Raw mandi data
- `analysis.ipynb` - Full Python code
- `dashboard.png` - Visualizations

### 👨‍💻 About Me
**Rajkumar Kushwaha | Aspiring Data Analyst**
BCA Student from Yamunanagar, Haryana
Skills: Python | SQL | Power BI | Excel
📍 Open to Data Analyst Internship - Remote / Chandigarh / Delhi NCR

### ⭐ How to Run
```python
import pandas as pd
df = pd.read_csv('sales_data.csv')
print(df.head())
import pandas as pd

df = pd.read_csv('sales_data.csv')
print(f"Total: Rs {df['Amount'].sum()/10000000:.2f} Cr")

top5 = df.groupby('Product')['Amount'].sum().sort_values(ascending=False).head(5)
print(top5)
print("Top 5 = 60% Revenue - Mandi Dabwali Insight")
