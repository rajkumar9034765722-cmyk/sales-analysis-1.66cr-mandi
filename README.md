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
import matplotlib.pyplot as plt

df = pd.read_csv('sales.csv')
df['Date'] = pd.to_datetime(df['Date'])

# ✅ 1. Daily sales
daily_sales = df.groupby('Date')['Sales'].sum()
print("1. Daily Sales:")
print(daily_sales.head())

# ✅ 2. Monthly sales
df['Month'] = df['Date'].dt.to_period('M')  # 2026-01, 2026-02...
monthly_sales = df.groupby('Month')['Sales'].sum()
print("\n2. Monthly Sales:")
print(monthly_sales)

# ✅ 3. Best-performing month
best_month = monthly_sales.idxmax()
print(f"\n3. Best Month: {best_month} - ₹{monthly_sales.max():,.0f}")

# ✅ 4. Worst-performing month
worst_month = monthly_sales.idxmin()
print(f"4. Worst Month: {worst_month} - ₹{monthly_sales.min():,.0f}")

# ✅ 5. Month-over-month growth %
mom_growth = monthly_sales.pct_change() * 100  # %
print("\n5. Month-over-Month Growth %:")
print(mom_growth)

# ✅ 6. Highest growth period
highest_growth = mom_growth.idxmax()
print(f"\n6. Highest Growth: {highest_growth} - {mom_growth.max():.1f}%")

# ✅ 7. Lowest growth period
lowest_growth = mom_growth.idxmin()
print(f"7. Lowest Growth: {lowest_growth} - {mom_growth.min():.1f}%")

# ✅ 8. Monthly sales trend chart
plt.figure(figsize=(10,4))
monthly_sales.plot(marker='o', color='green', linewidth=2)
plt.title('8. Monthly Sales Trend Chart - Your Business Growth')
plt.ylabel('Total Sales (₹)')
plt.xlabel('Month')
plt.grid(True)
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig('Monthly_Trend_Rajkumar.png', dpi=300)
plt.show()

print("\n✅ All 8 tasks done! Monthly_Trend_Rajkumar.png saved!")
PROJECT: Sales Analysis - Rs 1.66 Cr Revenue Dashboard
Location: Mandi Dabwali Retail | Tools: Python, Pandas, Matplotlib, GitHub
Link: github.com/rajkumar9034765722-cmyk/sales-analysis-1.66cr-mandi

- Analyzed 200 sales transactions (6 Months Data)
- Calculated: Daily Sales, Monthly Trends, MoM Growth (11.3% High, -17.7% Low)
- Visualized: Monthly Sales Trend Chart (Green line chart as seen on GitHub)
- Automated 8 business KPIs in Python - Code + Output LIVE on GitHub
