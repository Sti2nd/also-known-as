filename = "wikipedia_words.txt"

accepted_words: list[str] = []
with open(f"./out/{filename}", "r", encoding="utf-8") as f:
    print('\nTHE WORD FILTRATOR\n' + 
    'Type "s" to skip (go to next word), click Enter to add word to the accept list.\n' +
    'Type anything to add that input to the list instead.\n' +
    'To stop and write to file, type "n"\n')

    for line in f:
        inp = input(line)
        if (inp == "n"):
            break
        elif (inp == "s"):
            continue
        else:
            accepted_words.append(line)
    
f.close()

with open(f"./out/accepted_{filename}", "w", encoding="utf-8") as f:
    f.writelines(accepted_words)
