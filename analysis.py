import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv('sales_data.csv')
df['Date'] = pd.to_datetime(df['Date'])

# ✅ 1. Daily sales
daily_sales = df.groupby('Date')['Amount'].sum()
print("1. Daily Sales:")
print(daily_sales.head())

# ✅ 2. Monthly sales
df['Month'] = df['Date'].dt.to_period('M')
monthly_sales = df.groupby('Month')['Amount'].sum()
print("\n2. Monthly Sales:")
print(monthly_sales)

# ✅ 3. Best-performing month
best_month = monthly_sales.idxmax()
print(f"\n3. Best Month: {best_month} - ₹{monthly_sales.max():,.0f}")

# ✅ 4. Worst-performing month
worst_month = monthly_sales.idxmin()
print(f"4. Worst Month: {worst_month} - ₹{monthly_sales.min():,.0f}")

# ✅ 5. Month-over-month growth %
mom_growth = monthly_sales.pct_change() * 100
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
plt.title('8. Monthly Sales Trend - Mandi Dabwali (Rs 1.66 Cr)')
plt.ylabel('Total Sales (₹)')
plt.xlabel('Month')
plt.grid(True)
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig('Monthly_Trend_Rajkumar.png', dpi=300)
plt.show()

print("\n✅ All 8 tasks done! Monthly_Trend_Rajkumar.png saved!")
