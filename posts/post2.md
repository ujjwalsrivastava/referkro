# How to select or delete a particular div or paragraph tag from HTML content using beautiful soup?

We will use BeautifulSoup library of python , to for selecting a particular tag from the html file or to delete a particular tag from the html file.

It is used for parsing HTML and XML documents. It creates a parse tree for parsed web pages based on specific criteria that can be used to extract, navigate, search, and modify data from HTML.

First let's download this library -

```python
pip install bs4
```

Now , let's write the basic code to achive this functionlity-

```python
from bs4 import BeautifulSoup

text_content = '<div><p>here is the header information </p><p> some text content </p> <p> another block of text</p> .....<p> 2024 copyright , all rights reserved </p>'

soup = BeautifulSoup(text_content, "html.parser")

paragraphs = soup.find_all("p")

if "copyright" in paragraphs[-1].text.lower():
    paragraphs.pop()

only_text = " ".join([p.text for p in paragraphs])
print(only_text)
```

Now you will receive the output as -
![A description of the image](../images/04112024p1.png)
