# using python How to put name of all text file in excel which is present in subfolders

We have one folder containing 3 subfolders like-

- f1
- f2
- f3

![A description of the image](../images/03112024p1.png)

Some folders contain text files like-
![A description of the image](../images/03112024p2.png)

Now we want an output excel , that contain information that which folder contain text file & which folder not.

So for that we are using below code -

```python
import os
import pandas as pd

main_dir = r'C:\Users\ujs88\OneDrive\Desktop\Working_projects\test_3'
main_folders = os.listdir(main_dir)
results = {folder: "No" for folder in main_folders}

for root, dirs, files in os.walk(main_dir):
    if any(file.endswith('.txt') for file in files):
        main_folder_name = os.path.basename(root)
        if main_folder_name in results:
            results[main_folder_name] = "Yes"

df = pd.DataFrame(list(results.items()), columns=['Folder', 'Has_txt_file'])
print(df)
output_path = r'C:\Users\ujs88\OneDrive\Desktop\Working_projects\output.xlsx'
try:
    df.to_excel(output_path, index=False)
    print(f"Excel file created successfully at {output_path}")
except Exception as e:
    print(f"Error writing Excel file: {e}")
```

Now you can see the output excel as-
![A description of the image](../images/03112024p3.png)
