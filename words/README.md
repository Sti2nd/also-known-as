# Jupyter notebook projects

This folder contains two .ipynb (Jupyter notebook) file in [Python](https://www.python.org/).
> Tip: Use a Python [virtual environment](https://docs.python.org/3/tutorial/venv.html#creating-virtual-environments) to install packages in the environment instead of globally. Remember to activate the environment.

1. `Finding words from Scrabble dictinary.ipynb` only requires you to install the dependencies in requirements.txt with `pip install -r requirements.txt`.
2. `Mining Wikipedia for words.ipynb` additionally requires you to have Spark installed which you can download from [the official website](https://spark.apache.org/). The Spark version should match the version of `pyspark` in requirements.txt.

## How to open Jupyter notebook projects

There are several ways to edit the .ipynb file. [Anaconda](https://www.anaconda.com/products/individual) is probably the easiest and fastest way.

### Using VS Code

Follow [the official guide](https://code.visualstudio.com/docs/python/jupyter-support), but the following probably works:

1. Ensure you have the [Python extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python) installed.
2. Run `pip install -r requirements.txt` to install the required packages.
3. Open the .ipynb file!

### Using Jupyterlab

Follow the instructions on [Jupyter's homepage](https://jupyter.org/install.html), but the following probably works:

1. Run `pip install -r requirements.txt` to install the required packages.
2. Run `jupyter lab` to start Jupyter lab.

## Data

### Norwegian

nsf2020.txt is a word list taken from http://www2.scrabbleforbundet.no/?p=4527 (the Norwegian Scrabble Foundation). It isn't specified any licence on it as of 12.01.2021 (DDMMYYYY).
