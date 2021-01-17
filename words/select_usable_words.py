filename = "words_86593134.txt"

accepted_words: list[str] = []
with open(f"./out/{filename}", "r", encoding="utf-8") as f:
    print('\nTHE WORD FILTRATOR\n' + 
    'Press Enter to skip (go to next word), type "y" to add word to the accept list.\n' +
    'Type anything to add that input to the list.\n' +
    'To abort type "n"\n')

    for line in f:
        inp = input(line)
        if (inp == "n"):
            break
        elif (inp == "y"):
            accepted_words.append(line)
        else:
            continue
    
f.close()

with open(f"./out/accepted_{filename}", "w", encoding="utf-8") as f:
    f.writelines(accepted_words)
