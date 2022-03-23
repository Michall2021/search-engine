# -*- coding: utf-8 -*-
import pdb
from re import I
import unicodedata

#vybuduj obrateny index v tvare: {word[document-key]:occurences} 
# Priklad: u'buducnost': {764: [337]}, u'logg': {801: [5, 34], 804: [8, 62], 764: [78, 130]}  

#1. Vytiahnut tokeny (slova)
#2. Zaznaci poradie slov v texte
#3. 

def replacer(token):
    token = token.replace(":","")
    token = token.replace(",","")
    token = token.replace(".","")
    return token


# open file for processing
with open("Data.txt", encoding="utf-8") as datafile:
    lines = datafile.readlines()

# Initialization
i = 1       #Initialize word order counter
datafileID = "001A001"
indexfile = dict()

for sentence in lines:
    tokens = sentence.split()
    for token in tokens:
           
        token = token.lower()  #make lowercase
        token = replacer(token)

        wordoccurences = dict()

        if token in indexfile:
            occurencelist = indexfile[token][datafileID]
            if type(occurencelist) == list:                
                occurencelist.append(str(i))
            else:
                occurencelist = [occurencelist]
                occurencelist.append(str(i))

            wordoccurences[datafileID] = occurencelist
        else:
            wordoccurences[datafileID] = i

        indexfile[token] = wordoccurences
        #print(str(i) + ".-#- " + token)

        i += 1  #i - occurence order

for a in indexfile.keys():
    print(a + "  :  " + str(indexfile[a]))

pdb.set_trace()
    