---
title: vector-space-model
date: 1969-12-31 17:00:00
permalink: /pages/b22a14/
categories:
  - datascience
tags:
  - 
---
# Vector space model 

A document is represented as a vertor. It is a query, each vector holds a place for every term in the collection.

(Table)

book, contain, course, feww, free...
D1

In 3D or multi dimension map, each vector would be a query. The similiry is represented bas the angle between each
vector. Always, we use cosine value to represent the size of the angle. 

## Evaluating index terms using TF x IDF

TF: Term Frequency. The number of times term i appears in document j normalized by the sumn of all term frequencies.

IDF: Inverse Document Frequency. The number of documents containing the term i.

TF x IDF evaluates the discrimination power of a term. A term that has high TF x IDF value frequency but low document frequency.

