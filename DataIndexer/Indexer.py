# -*- coding: utf-8 -*-
import pdb
import unicodedata

#vybuduj obrateny index v tvare: {word[document-key]:occurences} 
# Priklad: u'buducnost': {764: [337]}, u'logg': {801: [5, 34], 804: [8, 62], 764: [78, 130]}  


with open("Data.txt", encoding="utf-8") as datafile:
    lines = datafile.readlines()

wordpositioncounter = 1

for sentence in lines:
    words = sentence.split()
    for word in words:
        
        #word = unicodedata.normalize('NFKD', word).encode('ascii','ignore')        
        word = word.lower()  #make lowercase
        print(word)
        i += 1  #i - occurence order

    